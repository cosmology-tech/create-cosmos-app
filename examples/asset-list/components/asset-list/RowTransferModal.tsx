import React, { useEffect, useMemo, useState } from 'react';
import { BasicModal, AssetWithdrawTokens } from '@interchain-ui/react';
import { useChainWallet, useManager } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { ChainName } from 'cosmos-kit';
import { coins, StdFee } from '@cosmjs/amino';
import { useDisclosure, useBalance, useTx } from '@/hooks';
import { KeplrWalletName } from '@/config';
import { ibc } from 'osmo-query';

import { PriceHash, TransferInfo, Transfer } from './types';
import { assets as assetsInRegistry, ibc as IBCs } from '@/utils/local-chain-registry'
import { convertBaseUnitToDisplayUnitByDenom, convertDisplayUnitToBaseUnit, getIbcAssetPath } from '@chain-registry/utils';
const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;

interface IProps {
  prices: PriceHash;
  transferInfo: TransferInfo;
  modalControl: ReturnType<typeof useDisclosure>;
  updateData: () => void;
  selectedChainName: ChainName;
}

const TransferModalBody = (
  props: IProps & {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  }
) => {
  const {
    prices,
    selectedChainName,
    transferInfo,
    modalControl,
    updateData,
    isLoading,
    setIsLoading,
    inputValue,
    setInputValue,
  } = props;

  const {
    type: transferType,
    token: transferToken,
    destChainName,
    sourceChainName,
  } = transferInfo;

  const isDeposit = transferType === Transfer.Deposit;

  const {
    address: sourceAddress,
    connect: connectSourceChain,
    chain: sourceChainInfo,
  } = useChainWallet(sourceChainName, KeplrWalletName);

  const {
    address: destAddress,
    connect: connectDestChain,
    chain: destChainInfo,
  } = useChainWallet(destChainName, KeplrWalletName);

  const { balance, isLoading: isLoadingBalance } = useBalance(
    sourceChainName,
    isDeposit
  );

  const { getChainLogo } = useManager();
  const { tx } = useTx(sourceChainName);

  const availableAmount = useMemo(() => {
    if (isLoading) return 0;

    if(isDeposit && balance) {
      return BigNumber(
        convertBaseUnitToDisplayUnitByDenom(assetsInRegistry, balance.denom, balance.amount, sourceChainName)
      ).toNumber()
    }

    return transferToken.available || 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeposit, isLoading, transferToken, balance]);

  useEffect(() => {
    if (!modalControl.isOpen) return;
    if (!sourceAddress) connectSourceChain();
    if (!destAddress) connectDestChain();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalControl.isOpen]);

  const sourceChain = useMemo(() => {
    return {
      symbol: sourceChainInfo.chain_name.toUpperCase(),
      name: sourceChainInfo.pretty_name,
      address: sourceAddress ?? '',
      imgSrc: getChainLogo(sourceChainName) ?? '',
    };
  }, [getChainLogo, sourceAddress, sourceChainInfo, sourceChainName]);

  const destChain = useMemo(() => {
    return {
      symbol: destChainInfo.chain_name.toUpperCase(),
      name: destChainInfo.pretty_name,
      address: destAddress ?? '',
      imgSrc: getChainLogo(destChainName) ?? '',
    };
  }, [destChainInfo, destAddress, getChainLogo, destChainName]);

  const handleSubmitTransfer = async () => {
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
        modalControl.close();
      },
    });

    setIsLoading(false);
  };

  return (
    <AssetWithdrawTokens
      isDropdown={false}
      fromSymbol={sourceChain.symbol}
      fromName={sourceChain.name}
      fromAddress={sourceChain.address}
      fromImgSrc={sourceChain.imgSrc}
      toName={destChain.name}
      toAddress={destChain.address}
      toImgSrc={destChain.imgSrc}
      isSubmitDisabled={
        isLoading ||
        !inputValue ||
        new BigNumber(inputValue).isEqualTo(0) ||
        isNaN(Number(inputValue))
      }
      available={availableAmount}
      priceDisplayAmount={prices[balance?.denom || '']}
      timeEstimateLabel="20 seconds"
      amount={inputValue}
      onChange={(value) => {
        console.log('onChange value', value);
        setInputValue(value);
      }}
      onTransfer={() => {
        console.log('onTransfer');
        handleSubmitTransfer();
      }}
      onCancel={() => {
        console.log('onCancel');
        modalControl.close();
      }}
    />
  );
};

export const RowTransferModal = (props: IProps) => {
  const { modalControl } = props;
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    modalControl.close();
    setInputValue('');
  };

  return (
    <BasicModal
      isOpen={modalControl.isOpen}
      title="Deposit"
      onClose={() => closeModal()}
    >
      <TransferModalBody
        {...props}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        modalControl={{
          ...modalControl,
          close: closeModal,
        }}
      />
    </BasicModal>
  );
};
