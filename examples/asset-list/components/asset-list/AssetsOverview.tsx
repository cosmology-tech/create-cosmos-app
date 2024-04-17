import React, { useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import { useChain } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { ChainName } from 'cosmos-kit';
import { SingleChain, SingleChainProps } from '@interchain-ui/react';
import { useDisclosure, useTotalAssets } from '@/hooks';
import {
  truncDecimals,
  formatDollarValue,
  prettyAssetToTransferItem,
  getAssetsByChainName,
  assets as assetsFromRegistry,
  isNativeAsset
} from '@/utils';
import { DropdownTransferModal } from './DropdownTransferModal';
import { RowTransferModal } from './RowTransferModal';
import { PrettyAsset, Transfer, TransferInfo } from './types';
import { getChainNameByDenom, getNativeTokenByChainName } from '@chain-registry/utils'

interface AssetsOverviewProps {
  isLoading?: boolean;
  assets: PrettyAsset[];
  prices: Record<string, number>;
  selectedChainName: ChainName;
  refetch?: () => void;
}

const AssetsOverview = ({
  assets,
  selectedChainName,
  isLoading,
}: AssetsOverviewProps) => {
  const [dropdownTransferInfo, setTransferInfo] = useState<TransferInfo>();
  const [rowTransferInfo, setRowTransferInfo] = useState<TransferInfo>();

  const { chain } = useChain(selectedChainName);

  const {
    data,
    isLoading: isLoadingTotalAssets,
    refetch,
  } = useTotalAssets(selectedChainName);

  const modalControl = useDisclosure();
  const rowModalControl = useDisclosure();

  const ibcAssets = useMemo(
    () => assets.filter((asset) => !isNativeAsset(asset, selectedChainName)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [assets]
  );

  const hasBalance = useMemo(
    () => ibcAssets.some((asset) => new BigNumber(asset.amount).gt(0)),
    [ibcAssets]
  );

  const assetsToShow = useMemo(() => {
    const returnAssets: SingleChainProps['list'] = assets.map((asset) => {
      return {
        imgSrc: asset.logoUrl ?? '',
        symbol: asset.symbol,
        denom: asset.denom,
        name: asset.prettyChainName,
        tokenAmount: truncDecimals(asset.displayAmount, 6),
        tokenAmountPrice: formatDollarValue(asset.dollarValue, asset.amount),
        chainName: asset.prettyChainName,
        showDeposit: !isNativeAsset(asset, selectedChainName),
        showWithdraw: !isNativeAsset(asset, selectedChainName) && new BigNumber(asset.amount).gt(0),
        onDeposit: () => {
          const sourceChainName = getChainNameByDenom(getAssetsByChainName(selectedChainName), asset.denom) || '';
          const sourceChainNativeDenom = getNativeTokenByChainName(assetsFromRegistry, sourceChainName)?.base;
          flushSync(() => {
            setRowTransferInfo({
              sourceChainName,
              type: Transfer.Deposit,
              destChainName: selectedChainName,
              token: {
                ...prettyAssetToTransferItem(asset),
                priceDisplayAmount: 0,
                available: 0,
                denom: sourceChainNativeDenom,
              },
            });
          });

          rowModalControl.open();
        },
        onWithdraw: () => {
          const destChainName = getChainNameByDenom(assetsFromRegistry, asset.denom) || '';

          flushSync(() => {
            setRowTransferInfo({
              sourceChainName: selectedChainName,
              type: Transfer.Withdraw,
              destChainName,
              token: prettyAssetToTransferItem(asset),
            });
          });

          rowModalControl.open();
        },
      }
    });

    return returnAssets;
  }, [assets, rowModalControl, selectedChainName]);

  const onWithdrawAsset = () => {
    const destChainName = getChainNameByDenom(assetsFromRegistry,ibcAssets[0].denom) || '';
    setTransferInfo({
      sourceChainName: selectedChainName,
      type: Transfer.Withdraw,
      destChainName,
      token: prettyAssetToTransferItem(ibcAssets[0]),
    });
    modalControl.open();
  };

  const onDepositAsset = () => {
    const sourceChainName = getChainNameByDenom(assetsFromRegistry,ibcAssets[0].denom) || '';
    const sourceChainAssetDenom = getNativeTokenByChainName(assetsFromRegistry, sourceChainName)?.base;
    setTransferInfo({
      sourceChainName,
      type: Transfer.Deposit,
      destChainName: selectedChainName,
      token: {
        ...prettyAssetToTransferItem(ibcAssets[0]),
        available: 0,
        priceDisplayAmount: 0,
        denom: sourceChainAssetDenom,
      },
    });
    modalControl.open();
  };

  return (
    <>
      <SingleChain
        isLoading={isLoading || isLoadingTotalAssets}
        title="Your assets"
        listTitle={`On ${chain.pretty_name}`}
        showDeposit={ibcAssets.length > 0}
        showWithdraw={hasBalance}
        onDeposit={onDepositAsset}
        onWithdraw={onWithdrawAsset}
        singleChainHeader={{
          label: `Total on ${chain.pretty_name}`,
          value: `${data?.total ?? 0}`,
        }}
        list={assetsToShow}
      />

      {data && dropdownTransferInfo && (
        <DropdownTransferModal
          prices={data?.prices ?? {}}
          assets={ibcAssets}
          transferInfoState={{
            transferInfo: dropdownTransferInfo,
            setTransferInfo,
          }}
          modalControl={modalControl}
          updateData={refetch}
          selectedChainName={selectedChainName}
        />
      )}

      {rowTransferInfo && (
        <RowTransferModal
          prices={data?.prices ?? {}}
          transferInfo={rowTransferInfo}
          updateData={refetch}
          modalControl={rowModalControl}
          selectedChainName={selectedChainName}
        />
      )}
    </>
  );
};

export default AssetsOverview;
