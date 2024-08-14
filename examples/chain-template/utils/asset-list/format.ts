import BigNumber from 'bignumber.js';
import { PrettyAsset } from '@/components';
import { AvailableItem } from '@interchain-ui/react';

export const truncDecimals = (
  val: string | number | undefined,
  decimals: number
) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
};

export const formatDollarValue = (dollarValue: string, amount: string) => {
  return new BigNumber(dollarValue).gt(0.01)
    ? '$' + truncDecimals(dollarValue, 2)
    : new BigNumber(amount).gt(0)
    ? '< $0.01'
    : '$0';
};

export const prettyAssetToTransferItem = (from: PrettyAsset): AvailableItem => {
  return {
    imgSrc: from.logoUrl ?? '',
    symbol: from.symbol,
    name: from.prettyChainName,
    denom: from.denom,
    available: new BigNumber(from.displayAmount).toNumber(),
    priceDisplayAmount: new BigNumber(
      truncDecimals(from.dollarValue, 2)
    ).toNumber(),
  };
};
