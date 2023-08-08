import BigNumber from 'bignumber.js';
import { Asset } from '@chain-registry/types';
import { asset_list, assets } from '@chain-registry/osmosis';
import {
  getAssetByDenom,
  getDenomByCoinGeckoId,
  getSymbolByChainDenom,
  getExponentByDenom as _getExponentByDenom,
  convertCoinGeckoPricesToDenomPriceMap,
  getChainDenomBySymbol,
  noDecimals as _noDecimals,
  convertBaseUnitsToDollarValue,
  convertDollarValueToDenomUnits,
  convertBaseUnitsToDisplayUnits,
} from '@chain-registry/utils';
import { Pool } from 'osmojs/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { Coin } from 'osmojs/dist/codegen/cosmos/base/v1beta1/coin';
import {
  calcPoolLiquidity as _calcPoolLiquidity,
  getPoolByGammName as _getPoolByGammName,
  convertGammTokenToDollarValue as _convertGammTokenToDollarValue,
  convertDollarValueToCoins as _convertDollarValueToCoins,
  convertDollarValueToShares as _convertDollarValueToShares,
  prettyPool as _prettyPool,
  calcCoinsNeededForValue as _calcCoinsNeededForValue,
  getCoinBalance as _getCoinBalance,
  calcMaxCoinsForPool as _calcMaxCoinsForPool,
  calcShareOutAmount as _calcShareOutAmount,
} from '@osmonauts/math';

import {
  CoinGeckoToken,
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoUSDResponse,
  CoinValue,
  PoolPretty,
  CoinBalance,
  PoolAssetPretty,
} from './types';
import { Fee } from '../components';

export const osmosisAssets: Asset[] = [
  ...assets.assets,
  ...asset_list.assets,
];

export const getOsmoAssetByDenom = (denom: CoinDenom): Asset => {
  return getAssetByDenom(osmosisAssets, denom);
};

export const getDenomForCoinGeckoId = (coinGeckoId: CoinGeckoToken): CoinDenom => {
  return getDenomByCoinGeckoId(osmosisAssets, coinGeckoId);
};

export const getSymbolForDenom = (denom: CoinDenom): CoinSymbol => {
  return getSymbolByChainDenom(osmosisAssets, denom);
};

export const getExponentByDenom = (denom: CoinDenom): Exponent => {
  return _getExponentByDenom(osmosisAssets, denom);
};

export const convertGeckoPricesToDenomPriceHash = (prices: CoinGeckoUSDResponse): PriceHash => {
  return convertCoinGeckoPricesToDenomPriceMap(osmosisAssets, prices);
};

export const calcPoolLiquidity = (pool: Pool, prices: PriceHash): string => {
  return _calcPoolLiquidity(osmosisAssets, pool, prices);
};

export const getPoolByGammName = (pools: Pool[], gammId: string): Pool => {
  return _getPoolByGammName(pools, gammId);
};

export const convertGammTokenToDollarValue = (
  coin: Coin,
  pool: Pool,
  prices: PriceHash
): string => {
  return _convertGammTokenToDollarValue(osmosisAssets, coin, pool, prices);
};

export const convertDollarValueToCoins = (
  value: string | number,
  pool: Pool,
  prices: PriceHash
): CoinValue[] => {
  return _convertDollarValueToCoins(osmosisAssets, value, pool, prices);
};

export const convertDollarValueToShares = (
  value: string | number,
  pool: Pool,
  prices: PriceHash
) => {
  return _convertDollarValueToShares(osmosisAssets, value, pool, prices);
};

export const prettyPool = (pool: Pool, { includeDetails = false } = {}): PoolPretty => {
  return _prettyPool(osmosisAssets, pool, { includeDetails });
};

export const getOsmoDenomForSymbol = (token: CoinSymbol): CoinDenom => {
  return getChainDenomBySymbol(osmosisAssets, token);
};

export const noDecimals = (num: number | string) => {
  return _noDecimals(num);
};

export const baseUnitsToDollarValue = (
  prices: PriceHash,
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitsToDollarValue(osmosisAssets, prices, symbol, amount);
};

export const dollarValueToDenomUnits = (
  prices: PriceHash,
  symbol: string,
  value: string | number
) => {
  return convertDollarValueToDenomUnits(osmosisAssets, prices, symbol, value);
};

export const baseUnitsToDisplayUnits = (symbol: string, amount: string | number) => {
  return convertBaseUnitsToDisplayUnits(osmosisAssets, symbol, amount);
};

export const calcCoinsNeededForValue = (
  prices: PriceHash,
  poolInfo: PoolPretty,
  value: string | number
) => {
  return _calcCoinsNeededForValue(osmosisAssets, prices, poolInfo, value);
};

export const getCoinBalance = (
  prices: PriceHash,
  balances: Coin[],
  prettyAsset: PoolAssetPretty
): CoinBalance => {
  return _getCoinBalance(osmosisAssets, prices, balances, prettyAsset);
};

export const calcMaxCoinsForPool = (
  prices: PriceHash,
  poolInfo: PoolPretty,
  balances: Coin[]
) => {
  return _calcMaxCoinsForPool(osmosisAssets, prices, poolInfo, balances);
};

export const calcShareOutAmount = (poolInfo: Pool, coinsNeeded: Coin[]): string => {
  return _calcShareOutAmount(poolInfo, coinsNeeded);
};

export const addPropertiesToPool = (
  pool: Pool,
  fees: Fee[],
  balances: Coin[],
  lockedCoins: Coin[],
  prices: PriceHash
) => {
  const liquidity = new BigNumber(calcPoolLiquidity(pool, prices))
    .decimalPlaces(0)
    .toNumber();

  const feeData = fees.find((fee) => fee.pool_id === pool.id.toString());
  const volume24H = Math.round(Number(feeData?.volume_24h || 0));
  const volume7d = Math.round(Number(feeData?.volume_7d || 0));
  const fees7D = Math.round(Number(feeData?.fees_spent_7d || 0));

  const balanceCoin = balances.find(
    ({ denom }) => denom === pool.totalShares?.denom
  );
  const myLiquidity = balanceCoin
    ? convertGammTokenToDollarValue(balanceCoin, pool, prices)
    : 0;

  const lockedCoin = lockedCoins.find(
    ({ denom }) => denom === pool.totalShares?.denom
  );
  const bonded = lockedCoin
    ? convertGammTokenToDollarValue(lockedCoin, pool, prices)
    : 0;

  const apr = {
    1: { totalApr: '0' },
    7: { totalApr: '0' },
    14: { totalApr: '0' },
  };

  return {
    ...pool,
    liquidity,
    volume24H,
    fees7D,
    volume7d,
    apr,
    myLiquidity,
    bonded,
  };
};
