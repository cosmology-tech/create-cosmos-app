import React, { useEffect, useState, useMemo } from 'react';
import {
  BasicModal,
  OverviewTransfer,
  OverviewTransferProps,
} from '@interchain-ui/react';
import { useChainWallet, useManager } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { ibc } from 'osmo-query';
import { StdFee, coins } from '@cosmjs/amino';
import { ChainName } from 'cosmos-kit';
import { KeplrWalletName } from '@/config';
import { useDisclosure, useTx, useBalance } from '@/hooks';

import {
  PrettyAsset,
  PriceHash,
  TransferInfo,
  Transfer,
  Unpacked,
} from './types';
import { convertBaseUnitToDisplayUnitByDenom, convertDisplayUnitToBaseUnit, getChainNameByDenom, getIbcAssetPath, getNativeAssetByChainName } from '@chain-registry/utils';
import { assets as assetsInRegistry, ibc as IBCs } from '@/utils/local-chain-registry'

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;

const ZERO_AMOUNT = '0';

interface OverviewTransferWrapperProps {
  prices: PriceHash;
  assets: PrettyAsset[];
  modalControl: ReturnType<typeof useDisclosure>;
  updateData: () => void;
  transferInfoState: {
    transferInfo: TransferInfo;
    setTransferInfo: React.Dispatch<
      React.SetStateAction<TransferInfo | undefined>
    >;
  };
  selectedChainName: ChainName;
}

const OverviewTransferWrapper = (
  props: OverviewTransferWrapperProps & {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  }
) => {
  const {
    assets,
    prices,
    modalControl,
    transferInfoState,
    updateData,
    selectedChainName,
    isLoading,
    setIsLoading,
    inputValue,
    setInputValue,
  } = props;

  const { transferInfo, setTransferInfo } = transferInfoState;

  const currentAssetLists = assetsInRegistry.filter(a => a.chain_name === selectedChainName)

  const {
    type: transferType,
    token: transferToken,
    destChainName,
    sourceChainName,
  } = transferInfo;

  const isDeposit = transferType === 'Deposit';
  const { balance, isLoading: isLoadingBalance } = useBalance(
    sourceChainName,
    isDeposit
  );

  const { address: sourceAddress, connect: connectSourceChain } =
    useChainWallet(sourceChainName, KeplrWalletName);

  const { address: destAddress, connect: connectDestChain } = useChainWallet(
    destChainName,
    KeplrWalletName
  );

  const { getChainLogo } = useManager();
  const { tx } = useTx(sourceChainName);

  const availableAmount = useMemo((): number => {
    if (!isDeposit) {
      return transferToken.priceDisplayAmount ?? 0;
    }

    if (isLoadingBalance) {
      return 0;
    }

    return new BigNumber(
      convertBaseUnitToDisplayUnitByDenom(assetsInRegistry, transferToken.denom || '', balance?.amount || ZERO_AMOUNT, selectedChainName)
    ).toNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeposit, isLoadingBalance, transferToken]);

  useEffect(() => {
    if (!modalControl.isOpen) return;
    if (!sourceAddress) connectSourceChain();
    if (!destAddress) connectDestChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destAddress, sourceAddress, modalControl]);

  const closeModal = () => {
    modalControl.close();
    setInputValue('');
    setIsLoading(false);
  };

  const handleTransferSubmit = async () => {
    if (!sourceAddress || !destAddress || !transferToken.denom) return;
    setIsLoading(true);

    const transferAmount = convertDisplayUnitToBaseUnit(assetsInRegistry, transferToken.symbol, inputValue, selectedChainName)

    const ibcPath = getIbcAssetPath(IBCs, selectedChainName, destChainName, assetsInRegistry, transferToken.denom)

    const [{
      channel_id: sourceChannel,
      port_id: sourcePort,
    }] = ibcPath

    const fee: StdFee = {
      amount: coins('1000', transferToken.denom ?? ''),
      gas: '250000',
    };

    const token = {
      denom: transferToken.denom ?? '',
      amount: transferAmount,
    };

    const stamp = Date.now();
    const timeoutInNanos = (stamp + 1.2e6) * 1e6;

    const msg = transfer({
      sourcePort,
      sourceChannel,
      sender: sourceAddress,
      receiver: destAddress,
      token,
      // @ts-ignore
      timeoutHeight: undefined,
      timeoutTimestamp: BigInt(timeoutInNanos),
    });

    await tx([msg], {
      fee,
      onSuccess: () => {
        updateData();
        closeModal();
      },
    });

    setIsLoading(false);
  };

  const assetOptions: OverviewTransferProps['dropdownList'] = useMemo(() => {
    return assets
      .filter((asset) => {
        if (isDeposit) {
          return true;
        }
        return new BigNumber(asset.amount).gt(0);
      })
      .filter((asset) => {
        return asset.symbol !== transferToken.symbol;
      })
      .map((asset) => ({
        available: new BigNumber(convertBaseUnitToDisplayUnitByDenom(assetsInRegistry, asset.denom, asset.amount, selectedChainName)).toNumber(),
        symbol: asset.symbol,
        name: asset.prettyChainName,
        denom: asset.denom,
        imgSrc: asset.logoUrl ?? '',
        priceDisplayAmount: prices[asset.denom] || 0
      }));
  }, [assets, isDeposit, transferToken]);

  const handleOnChange = (
    assetOption: Unpacked<OverviewTransferProps['dropdownList']>,
    value: number
  ) => {
    setInputValue(`${value}`);

    setTransferInfo((prev) => {
      if (!prev) return;

      if (transferType === Transfer.Withdraw) {
        const destChainName = getChainNameByDenom(currentAssetLists, assetOption.denom || '') || ''
        return { ...prev, destChainName, token: assetOption };
      }

      const sourceChainName = getChainNameByDenom(currentAssetLists, assetOption.denom || '') || ''
      const sourceChainAssetDenom = getNativeAssetByChainName(assetsInRegistry, sourceChainName)?.base || ''
      return {
        ...prev,
        sourceChainName,
        token: {
          ...assetOption,
          available: availableAmount,
          displayAmount: ZERO_AMOUNT,
          dollarValue: ZERO_AMOUNT,
          amount: ZERO_AMOUNT,
          denom: sourceChainAssetDenom,
        },
      };
    });
  };

  return (
    <OverviewTransfer
      selectedItem={transferToken}
      isSubmitDisabled={
        isLoading ||
        !inputValue ||
        new BigNumber(inputValue).isEqualTo(0) ||
        isNaN(Number(inputValue))
      }
      fromChainLogoUrl={getChainLogo(transferInfo?.sourceChainName ?? '') ?? ''}
      toChainLogoUrl={getChainLogo(transferInfo?.destChainName ?? '') ?? ''}
      dropdownList={assetOptions}
      onTransfer={() => {
        handleTransferSubmit();
      }}
      onCancel={() => {
        closeModal();
      }}
      onChange={handleOnChange}
      timeEstimateLabel="≈ 20 seconds"
    />
  );
};

export const DropdownTransferModal = (props: OverviewTransferWrapperProps) => {
  const { modalControl, transferInfoState } = props;

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const closeModal = () => {
    modalControl.close();
    setInputValue('');
    setIsLoading(false);
  };

  return (
    <BasicModal
      isOpen={modalControl.isOpen}
      title="Deposit"
      onClose={() => closeModal()}
      closeOnClickaway={false}
    >
      {transferInfoState ? (
        <OverviewTransferWrapper
          {...props}
          modalControl={{
            ...props.modalControl,
            close: closeModal,
          }}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : null}
    </BasicModal>
  );
};
