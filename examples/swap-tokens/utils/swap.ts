import { BigNumber } from "bignumber.js";
import { CoinDenom, Trade, PrettyPair } from "./types";
import { symbolToOsmoDenom } from "./utils";
import { SwapAmountInRoute } from "osmojs/types/codegen/osmosis/poolmanager/v1beta1/swap_route";
import Long from "long";

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
    denom: "uosmo",
    trade,
    pairs,
  });

  if (osmoRoutes.length === 2) return osmoRoutes;

  const atomRoutes = routesThroughPools({
    denom: symbolToOsmoDenom("ATOM"),
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
