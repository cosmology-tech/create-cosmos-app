import React, { useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import { useChain } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { ChainName } from 'cosmos-kit';
import { SingleChain, SingleChainProps } from '@interchain-ui/react';

import { useDisclosure, useChainUtils, useTotalAssets } from '@/hooks';
import {
  truncDecimals,
  formatDollarValue,
  prettyAssetToTransferItem,
} from '@/utils';

import { DropdownTransferModal } from './DropdownTransferModal';
import { RowTransferModal } from './RowTransferModal';

import { PrettyAsset, Transfer, TransferInfo } from './types';

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
  const { getChainName, getNativeDenom, isNativeAsset, getDenomBySymbolAndChain } =
    useChainUtils(selectedChainName);

  const modalControl = useDisclosure();
  const rowModalControl = useDisclosure();

  const ibcAssets = useMemo(
    () => assets.filter((asset) => !isNativeAsset(asset)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [assets]
  );

  const hasBalance = useMemo(
    () => ibcAssets.some((asset) => new BigNumber(asset.amount).gt(0)),
    [ibcAssets]
  );

  const assetsToShow = useMemo(() => {
    const returnAssets: SingleChainProps['list'] = assets.map((asset) => ({
      imgSrc: asset.logoUrl ?? '',
      symbol: asset.symbol,
      denom: asset.denom,
      name: asset.prettyChainName,
      tokenAmount: truncDecimals(asset.displayAmount, 6),
      tokenAmountPrice: formatDollarValue(asset.dollarValue, asset.amount),
      chainName: asset.prettyChainName,
      showDeposit: !isNativeAsset(asset),
      showWithdraw: !isNativeAsset(asset),
      onDeposit: () => {
        const sourceChainName = getChainName(asset.denom);
        const denom = getDenomBySymbolAndChain(sourceChainName, asset.symbol);
        flushSync(() => {
          setRowTransferInfo({
            sourceChainName,
            type: Transfer.Deposit,
            destChainName: selectedChainName,
            token: {
              ...prettyAssetToTransferItem(asset),
              priceDisplayAmount: 0,
              available: 0,
              denom
            },
          });
        });

        rowModalControl.open();
      },
      onWithdraw: () => {
        const destChainName = getChainName(asset.denom);

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
    }));

    return returnAssets;
  }, [
    assets,
    getChainName,
    getNativeDenom,
    isNativeAsset,
    rowModalControl,
    selectedChainName,
  ]);

  const onWithdrawAsset = () => {
    const destChainName = getChainName(ibcAssets[0].denom);
    setTransferInfo({
      sourceChainName: selectedChainName,
      type: Transfer.Withdraw,
      destChainName,
      token: prettyAssetToTransferItem(ibcAssets[0]),
    });
    modalControl.open();
  };

  const onDepositAsset = () => {
    const sourceChainName = getChainName(ibcAssets[0].denom);
    const sourceChainAssetDenom = getNativeDenom(sourceChainName);
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
