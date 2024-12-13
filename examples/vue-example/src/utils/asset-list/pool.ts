import { Coin } from "osmojs";
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";
import BigNumber from 'bignumber.js';
import { PriceHash } from "./types";
import { useChainUtils } from "../../composables/asset-list/useChainUtils";
import { Ref } from 'vue'

export const usePoolUtils = (chainName: Ref<string>) => {
  const { getExponentByDenom } = useChainUtils(chainName)
  const calcPoolLiquidity = (pool: Pool, prices: PriceHash): string => {
    return pool.poolAssets
      .reduce((res, { token }) => {
        const liquidity = new BigNumber(token.amount)
          .shiftedBy(-getExponentByDenom(token.denom))
          .multipliedBy(prices[token.denom]);
        return res.plus(liquidity);
      }, new BigNumber(0))
      .toString();
  };

  const convertGammTokenToDollarValue = (
    coin: Coin,
    pool: Pool,
    prices: PriceHash,
  ): string => {
    const { amount } = coin;
    const liquidity = calcPoolLiquidity(pool, prices);

    return new BigNumber(liquidity)
      .multipliedBy(amount)
      .dividedBy(pool.totalShares!.amount)
      .toString();
  };

  return {
    convertGammTokenToDollarValue,
  }
}

