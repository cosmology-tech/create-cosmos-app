import { BigNumber } from 'bignumber.js';
import { CoinDenom, Trade, PrettyPair } from './types';
import { pow, symbolToOsmoDenom } from './utils';
import { SwapAmountInRoute } from 'osmojs/types/codegen/osmosis/poolmanager/v1beta1/swap_route';
import { Pool } from 'osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import Long from 'long';

export const routesThroughPools = ({
  denom,
  trade,
  pairs,
}: {
  denom: CoinDenom;
  trade: Trade;
  pairs: PrettyPair[];
}): SwapAmountInRoute[] => {
  const sellPool = pairs.find(
    (pair) =>
      (pair.baseAddress == trade.sell.denom && pair.quoteAddress == denom) ||
      (pair.quoteAddress == trade.sell.denom && pair.baseAddress == denom)
  );

  const buyPool = pairs.find(
    (pair) =>
      (pair.baseAddress == denom && pair.quoteAddress == trade.buy.denom) ||
      (pair.quoteAddress == denom && pair.baseAddress == trade.buy.denom)
  );

  if (sellPool && buyPool) {
    const routes = [
      {
        poolId: Long.fromString(sellPool.poolId),
        tokenOutDenom: denom,
      },
      {
        poolId: Long.fromString(buyPool.poolId),
        tokenOutDenom: trade.buy.denom,
      },
    ];

    return routes;
  }

  return [];
};

export const getRoutesForTrade = ({
  trade,
  pairs,
}: {
  trade: Trade;
  pairs: PrettyPair[];
}): SwapAmountInRoute[] => {
  const directPool = pairs.find(
    (pair) =>
      (pair.baseAddress == trade.sell.denom &&
        pair.quoteAddress == trade.buy.denom) ||
      (pair.quoteAddress == trade.sell.denom &&
        pair.baseAddress == trade.buy.denom)
  );

  if (directPool) {
    return [
      {
        poolId: Long.fromString(directPool.poolId),
        tokenOutDenom: trade.buy.denom,
      },
    ];
  }

  const osmoRoutes = routesThroughPools({
    denom: 'uosmo',
    trade,
    pairs,
  });

  if (osmoRoutes.length === 2) return osmoRoutes;

  const atomRoutes = routesThroughPools({
    denom: symbolToOsmoDenom('ATOM'),
    trade,
    pairs,
  });

  if (atomRoutes.length === 2) return atomRoutes;

  return [];
};

export const calcAmountWithSlippage = (
  amount: string,
  slippage: number | string
) => {
  const remainingPercentage = new BigNumber(100).minus(slippage).div(100);
  return new BigNumber(amount).multipliedBy(remainingPercentage).toString();
};

const one = new BigNumber(1);

const getPoolAsset = (pool: Pool, denom: string) => {
  const poolAsset = pool.poolAssets.find(
    (asset) => asset?.token && asset.token.denom === denom
  );
  if (!poolAsset) {
    throw new Error(
      `Pool ${pool.id.low} doesn't have the pool asset for ${denom}`
    );
  }
  return { denom, weight: poolAsset.weight, amount: poolAsset.token!.amount };
};

export const calcSpotPrice = (
  tokenBalanceIn: BigNumber,
  tokenWeightIn: BigNumber,
  tokenBalanceOut: BigNumber,
  tokenWeightOut: BigNumber,
  swapFee: BigNumber
): BigNumber => {
  const number = tokenBalanceIn.div(tokenWeightIn);
  const denom = tokenBalanceOut.div(tokenWeightOut);
  const scale = one.div(one.minus(swapFee));

  return number.div(denom).multipliedBy(scale);
};

export const calcOutGivenIn = (
  tokenBalanceIn: BigNumber,
  tokenWeightIn: BigNumber,
  tokenBalanceOut: BigNumber,
  tokenWeightOut: BigNumber,
  tokenAmountIn: BigNumber,
  swapFee: BigNumber
): BigNumber => {
  const weightRatio = tokenWeightIn.div(tokenWeightOut);
  let adjustedIn = one.minus(swapFee);
  adjustedIn = tokenAmountIn.multipliedBy(adjustedIn);
  const y = tokenBalanceIn.div(tokenBalanceIn.plus(adjustedIn));
  const foo = pow(y, weightRatio);
  const bar = one.minus(foo);
  return tokenBalanceOut.multipliedBy(bar);
};

export const calcInGivenOut = (
  tokenBalanceIn: BigNumber,
  tokenWeightIn: BigNumber,
  tokenBalanceOut: BigNumber,
  tokenWeightOut: BigNumber,
  tokenAmountOut: BigNumber,
  swapFee: BigNumber
): BigNumber => {
  const weightRatio = tokenWeightOut.div(tokenWeightIn);
  const diff = tokenBalanceOut.minus(tokenAmountOut);
  const y = tokenBalanceOut.div(diff);
  let foo = pow(y, weightRatio);
  foo = foo.minus(one);
  const tokenAmountIn = one.minus(swapFee);
  return tokenBalanceIn.multipliedBy(foo).div(tokenAmountIn);
};

export const calcPriceImpactGivenIn = (
  tokenIn: Coin,
  tokenOutDenom: string,
  pool: Pool
) => {
  const inPoolAsset = getPoolAsset(pool, tokenIn.denom);
  const outPoolAsset = getPoolAsset(pool, tokenOutDenom);

  const swapFee = new BigNumber(pool.poolParams?.swapFee || 0).shiftedBy(-18);

  const beforeSpotPriceInOverOut = calcSpotPrice(
    new BigNumber(inPoolAsset.amount),
    new BigNumber(inPoolAsset.weight),
    new BigNumber(outPoolAsset.amount),
    new BigNumber(outPoolAsset.weight),
    swapFee
  );

  const tokenOutAmount = calcOutGivenIn(
    new BigNumber(inPoolAsset.amount),
    new BigNumber(inPoolAsset.weight),
    new BigNumber(outPoolAsset.amount),
    new BigNumber(outPoolAsset.weight),
    new BigNumber(tokenIn.amount),
    swapFee
  ).decimalPlaces(0);

  const effectivePrice = new BigNumber(tokenIn.amount).div(tokenOutAmount);
  const priceImpact = effectivePrice.div(beforeSpotPriceInOverOut).minus(one);

  return priceImpact.toString();
};

export const calcPriceImpactGivenOut = (
  tokenOut: Coin,
  tokenInDenom: string,
  pool: Pool
) => {
  const inPoolAsset = getPoolAsset(pool, tokenInDenom);
  const outPoolAsset = getPoolAsset(pool, tokenOut.denom);

  const swapFee = new BigNumber(pool.poolParams?.swapFee || 0).shiftedBy(-18);

  const beforeSpotPriceInOverOut = calcSpotPrice(
    new BigNumber(inPoolAsset.amount),
    new BigNumber(inPoolAsset.weight),
    new BigNumber(outPoolAsset.amount),
    new BigNumber(outPoolAsset.weight),
    swapFee
  );

  const tokenInAmount = calcInGivenOut(
    new BigNumber(inPoolAsset.amount),
    new BigNumber(inPoolAsset.weight),
    new BigNumber(outPoolAsset.amount),
    new BigNumber(outPoolAsset.weight),
    new BigNumber(tokenOut.amount),
    swapFee
  ).decimalPlaces(0);

  const effectivePrice = new BigNumber(tokenInAmount).div(tokenOut.amount);
  const priceImpact = effectivePrice.div(beforeSpotPriceInOverOut).minus(one);

  return priceImpact.toString();
};
