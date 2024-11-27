
import { Asset } from '@chain-registry/types';
import { DenomUnit } from '@chain-registry/types';
import { Coin } from 'osmojs/cosmos/base/v1beta1/coin';
import BigNumber from 'bignumber.js';

export type CoinDenom = DenomUnit['denom'];

export type CoinSymbol = string;

export interface PriceHash {
  [key: CoinDenom]: number;
}

export type Exponent = DenomUnit['exponent'];

export const getAssetByDenom = (denom: CoinDenom, assetList: Asset[]): Asset => {
  return assetList.find((asset) => asset.base === denom) as Asset;
};

export const denomToSymbol = (denom: CoinDenom, assetList: Asset[]): CoinSymbol => {
  const asset = getAssetByDenom(denom, assetList);
  const symbol = asset?.symbol;
  if (!symbol) {
    return denom;
  }
  return symbol;
};

export const getExponentByDenom = (denom: CoinDenom, assetList: Asset[]): Exponent => {
  const asset = getAssetByDenom(denom, assetList);
  const unit = asset.denom_units.find(({ denom }) => denom === asset.display);
  return unit?.exponent || 0;
};

export const calcCoinDollarValue = (prices: PriceHash, coin: Coin, assetList: Asset[]) => {
  const { denom, amount } = coin;
  return new BigNumber(amount)
    .shiftedBy(-getExponentByDenom(denom, assetList))
    .multipliedBy(prices[denom])
    .toString();
};

export const getPrettyChainName = (ibcDenom: CoinDenom) => {
  const chainName = getChainName(ibcDenom);
  try {
    const chainRecord = getChainRecord(chainName);
    // @ts-ignore
    return chainRecord.chain.pretty_name;
  } catch (e) {
    return 'CHAIN_INFO_NOT_FOUND'
  }
};