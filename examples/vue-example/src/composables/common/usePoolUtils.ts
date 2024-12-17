import { Coin } from "osmojs";
// import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";
import BigNumber from 'bignumber.js';
import { PriceHash } from "../../utils/asset-list/types";
import { useChainUtils } from "./useChainUtils";
import { Ref } from 'vue'
import { Pool } from "../../codegen/osmosis/gamm/pool-models/balancer/balancerPool";
import { Fee } from "./../provide-liquidity/useFees";

interface ExtendPoolProps {
  pool: Pool;
  fees: Fee[];
  balances: Coin[];
  lockedCoins: Coin[];
  prices: PriceHash;
}

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

  const extendPool = ({
    pool,
    fees,
    balances,
    lockedCoins,
    prices,
  }: ExtendPoolProps) => {
    const liquidity = new BigNumber(calcPoolLiquidity(pool, prices))
      .decimalPlaces(0)
      .toNumber();

    const feeData = fees?.find((fee) => fee.pool_id === pool.id.toString());
    const volume24H = Math.round(Number(feeData?.volume_24h || 0));
    const volume7d = Math.round(Number(feeData?.volume_7d || 0));
    const fees7D = Math.round(Number(feeData?.fees_spent_7d || 0));

    const poolDenom = pool.totalShares?.denom;

    const balanceCoin = balances.find(({ denom }) => denom === poolDenom);
    const myLiquidity = balanceCoin
      ? convertGammTokenToDollarValue(balanceCoin, pool, prices)
      : 0;

    const lockedCoin = lockedCoins.find(({ denom }) => denom === poolDenom);
    const bonded = lockedCoin
      ? convertGammTokenToDollarValue(lockedCoin, pool, prices)
      : 0;

    return {
      ...pool,
      liquidity,
      volume24H,
      fees7D,
      volume7d,
      myLiquidity,
      bonded,
      denom: poolDenom,
    };
  };

  return {
    extendPool,
    convertGammTokenToDollarValue,
  }
}

