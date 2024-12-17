import BigNumber from 'bignumber.js';
import { PrettyAsset } from '../../views/asset-list.vue';

export type AvailableItem = {
  imgSrc: string;
  symbol: string;
  name: string;
  denom?: string;
  /**
   * Available amount
   */
  available?: number;
  /**
   * Dollar price for per token
   */
  priceDisplayAmount?: number;
};

export const formatDollarValue = (dollarValue: string, amount: string) => {
  return new BigNumber(dollarValue).gt(0.01)
    ? '$' + truncDecimals(dollarValue, 2)
    : new BigNumber(amount).gt(0)
      ? '< $0.01'
      : '$0';
};

export const truncDecimals = (
  val: string | number | undefined,
  decimals: number
) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
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