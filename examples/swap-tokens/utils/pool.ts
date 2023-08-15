import { Pool } from 'osmo-query/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { Coin } from 'osmo-query/dist/codegen/cosmos/base/v1beta1/coin';
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
  makePoolPairs as _makePoolPairs,
} from '@osmonauts/math';

import {
  PriceHash,
  CoinValue,
  PoolPretty,
  CoinBalance,
  PoolAssetPretty,
  PrettyPair,
} from './types';
import { osmosisAssets } from './assets';

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

export const prettyPool = (
  pool: Pool,
  { includeDetails = false } = {}
): PoolPretty => {
  return _prettyPool(osmosisAssets, pool, { includeDetails });
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

export const calcShareOutAmount = (pool: Pool, coinsNeeded: Coin[]): string => {
  return _calcShareOutAmount(pool, coinsNeeded);
};

export const makePoolPairs = (
  pools: Pool[],
  prices: PriceHash,
  liquidityLimit = 100_000
): PrettyPair[] => {
  return _makePoolPairs(osmosisAssets, pools, prices, liquidityLimit);
};
