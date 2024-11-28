import { Coin } from "osmojs";
import { getExponentByDenom, PriceHash } from "./chain";
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";
import BigNumber from 'bignumber.js';
import { Asset } from '@chain-registry/types';

export const calcPoolLiquidity = (pool: Pool, prices: PriceHash, assetList: Asset[]): string => {
  return pool.poolAssets
    .reduce((res, { token }) => {
      const liquidity = new BigNumber(token.amount)
        .shiftedBy(-getExponentByDenom(token.denom, assetList))
        .multipliedBy(prices[token.denom]);
      return res.plus(liquidity);
    }, new BigNumber(0))
    .toString();
};

export const convertGammTokenToDollarValue = (
  coin: Coin,
  pool: Pool,
  prices: PriceHash,
  assetList: Asset[]
): string => {
  const { amount } = coin;
  const liquidity = calcPoolLiquidity(pool, prices, assetList);

  return new BigNumber(liquidity)
    .multipliedBy(amount)
    .dividedBy(pool.totalShares!.amount)
    .toString();
};
