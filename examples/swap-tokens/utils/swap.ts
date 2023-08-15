import {
  getRoutesForTrade as _getRoutesForTrade,
  routesThroughPools,
  calcAmountWithSlippage,
  calcSpotPrice,
  calcOutGivenIn,
  calcInGivenOut,
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut,
} from '@osmonauts/math';
import { Asset } from '@chain-registry/types';
import { SwapAmountInRoute } from 'osmo-query/dist/codegen/osmosis/poolmanager/v1beta1/swap_route';
import { Pool } from 'osmo-query/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import BigNumber from 'bignumber.js';

import { osmosisAssets } from './assets';
import { Trade, PrettyPair, PriceHash } from './types';
import {
  baseUnitsToDisplayUnits,
  getExponentByDenom,
  getOsmoAssetByDenom,
  osmoDenomToSymbol,
  truncDecimals,
} from './utils';
import { SwapOptionType } from '@/components/swap/swap-ui';

type InputData = {
  fromToken: {
    inputAmount: string;
    inputValue: string;
  };
  toToken: {
    outputAmount: string;
    outputValue: string;
  };
};

interface InputDataProps {
  inputAmount: string;
  fromToken: SwapOptionType | undefined;
  toToken: SwapOptionType | undefined;
  prices: PriceHash | undefined;
}

export const getInputData = ({
  prices,
  toToken,
  fromToken,
  inputAmount,
}: InputDataProps): InputData => {
  if (!fromToken || !toToken || !prices)
    return {
      fromToken: {
        inputAmount: '0',
        inputValue: '0',
      },
      toToken: {
        outputAmount: '0',
        outputValue: '0',
      },
    };

  const dollarValue = new BigNumber(inputAmount || '0').multipliedBy(
    prices[fromToken.denom]
  );

  const toTokenAmount = dollarValue.div(prices[toToken.denom]);

  return {
    fromToken: {
      inputAmount: parseFloat(inputAmount || '0').toString(),
      inputValue: dollarValue.decimalPlaces(2).toString(),
    },
    toToken: {
      outputAmount: toTokenAmount.decimalPlaces(6).toString(),
      outputValue: dollarValue.decimalPlaces(2).toString(),
    },
  };
};

export const getRoutesForTrade = ({
  trade,
  pairs,
}: {
  trade: Trade;
  pairs: PrettyPair[];
}): SwapAmountInRoute[] => {
  return _getRoutesForTrade(osmosisAssets, { trade, pairs });
};

interface SwapTokensWithRoutes {
  tokenIn: {
    denom: string;
    amount: string;
  };
  tokenOut: {
    denom: string;
    amount: string;
  };
  routes: SwapAmountInRoute[];
}

interface GetTokensWithRoutesProps {
  fromToken: SwapOptionType;
  toToken: SwapOptionType;
  pairs: PrettyPair[];
  inputData: InputData;
  slippage: string;
}

export const getTokensWithRoutes = ({
  fromToken,
  toToken,
  pairs,
  inputData,
  slippage,
}: GetTokensWithRoutesProps): SwapTokensWithRoutes => {
  const tokenInAmount = new BigNumber(inputData.fromToken.inputAmount)
    .shiftedBy(getExponentByDenom(fromToken.denom))
    .toString();

  const tokenOutAmount = new BigNumber(inputData.toToken.outputAmount)
    .shiftedBy(getExponentByDenom(toToken.denom))
    .toString();

  const tokenOutAmountAfterSlippage = calcAmountWithSlippage(
    tokenOutAmount,
    slippage.split('%')[0]
  );

  const tokenIn = {
    denom: fromToken.denom,
    amount: tokenInAmount,
  };

  const tokenOut = {
    denom: toToken.denom,
    amount: tokenOutAmountAfterSlippage,
  };

  const routes = getRoutesForTrade({
    trade: {
      sell: {
        denom: tokenIn.denom,
        amount: tokenInAmount,
      },
      buy: {
        denom: tokenOut.denom,
        amount: tokenOutAmount,
      },
    },
    pairs,
  });

  return {
    tokenIn,
    tokenOut,
    routes,
  };
};

interface ISwapDetailsProps {
  pools: Pool[];
  toToken: SwapOptionType;
  inputData: InputData;
  swapTokensWithRoutes: SwapTokensWithRoutes;
}

export const getSwapDetails = ({
  pools,
  toToken,
  inputData,
  swapTokensWithRoutes,
}: ISwapDetailsProps) => {
  const { tokenIn, tokenOut, routes } = swapTokensWithRoutes;
  if (routes.length === 0) return;
  const tokenOutSymbol = toToken.symbol;

  let swapFee = '';
  let priceImpact = '';
  if (new BigNumber(tokenIn.amount).isEqualTo(0)) {
    priceImpact = '0';
  } else if (routes.length === 1) {
    const pool = pools.find((pool) => pool.id === routes[0].poolId)!;
    priceImpact = calcPriceImpactGivenIn(tokenIn, tokenOut.denom, pool);
    swapFee = pool.poolParams?.swapFee || '0';
  } else {
    const tokenInRoute = routes.find(
      (route) => route.tokenOutDenom !== tokenOut.denom
    )!;
    const tokenOutRoute = routes.find(
      (route) => route.tokenOutDenom === tokenOut.denom
    )!;

    const tokenInPool = pools.find((pool) => pool.id === tokenInRoute.poolId)!;
    const tokenOutPool = pools.find(
      (pool) => pool.id === tokenOutRoute.poolId
    )!;

    swapFee = tokenInPool.poolParams?.swapFee || '0';

    const priceImpactIn = calcPriceImpactGivenIn(
      tokenIn,
      tokenInRoute.tokenOutDenom,
      tokenInPool
    );
    const priceImpactOut = calcPriceImpactGivenOut(
      tokenOut,
      tokenInRoute.tokenOutDenom,
      tokenOutPool
    );
    priceImpact = new BigNumber(priceImpactIn).plus(priceImpactOut).toString();
  }

  const swapFeeValue = new BigNumber(inputData.fromToken.inputValue)
    .multipliedBy(swapFee)
    .decimalPlaces(2, BigNumber.ROUND_DOWN);

  let swapRoutes = [];
  if (routes.length === 1) {
    swapRoutes = routes.map((route) => {
      const baseAsset = getOsmoAssetByDenom(tokenIn.denom);
      const quoteAsset = getOsmoAssetByDenom(tokenOut.denom);
      return {
        poolId: route.poolId.toString(),
        swapFee: new BigNumber(swapFee).shiftedBy(2).toString() + '%',
        baseLogo: baseAsset.logo_URIs,
        baseSymbol: baseAsset.symbol,
        quoteLogo: quoteAsset.logo_URIs,
        quoteSymbol: quoteAsset.symbol,
      };
    });
  } else {
    let swapFees: BigNumber[] = [];
    swapRoutes = routes
      .map((route) => {
        const pool = pools.find((pool) => pool.id === route.poolId);
        let baseAsset: Asset;
        let quoteAsset: Asset;
        if (route.tokenOutDenom !== tokenOut.denom) {
          baseAsset = getOsmoAssetByDenom(tokenIn.denom);
          quoteAsset = getOsmoAssetByDenom(route.tokenOutDenom);
        } else {
          const tokenInDenom = pool?.poolAssets.find(
            ({ token }) => token!.denom !== tokenOut.denom
          )?.token?.denom!;
          baseAsset = getOsmoAssetByDenom(tokenInDenom);
          quoteAsset = getOsmoAssetByDenom(tokenOut.denom);
        }
        const fee = new BigNumber(pool?.poolParams?.swapFee || 0).shiftedBy(2);
        swapFees.push(fee);
        return {
          poolId: route.poolId.toString(),
          swapFee: fee,
          baseLogo: baseAsset.logo_URIs,
          baseSymbol: baseAsset.symbol,
          quoteLogo: quoteAsset.logo_URIs,
          quoteSymbol: quoteAsset.symbol,
        };
      })
      .map((route) => {
        const totalFee = swapFees.reduce(
          (total, cur) => total.plus(cur),
          new BigNumber(0)
        );
        const highestFee = swapFees.sort((a, b) => (a.lt(b) ? 1 : -1))[0];
        const feeRatio = highestFee.div(totalFee);
        return {
          ...route,
          swapFee: route.swapFee.multipliedBy(feeRatio).toString() + '%',
        };
      });
  }

  return {
    priceImpact: new BigNumber(priceImpact).shiftedBy(2).gt(0.001)
      ? new BigNumber(priceImpact).decimalPlaces(5).shiftedBy(2) + '%'
      : '< 0.001%',
    swapFee: {
      percentage: new BigNumber(swapFee).shiftedBy(2).toString() + '%',
      value: swapFeeValue.gt(0.01) ? '$' + swapFeeValue : '< $0.01',
    },
    expectedOutput: inputData.toToken.outputAmount,
    minimumReceived: truncDecimals(
      baseUnitsToDisplayUnits(tokenOutSymbol, tokenOut.amount),
      6
    ),
    route: {
      tokenIn: {
        logoUrl: getOsmoAssetByDenom(tokenIn.denom).logo_URIs,
        symbol: osmoDenomToSymbol(tokenIn.denom),
      },
      tokenOut: {
        logoUrl: getOsmoAssetByDenom(tokenOut.denom).logo_URIs,
        symbol: osmoDenomToSymbol(tokenOut.denom),
      },
      routes: swapRoutes,
    },
  };
};

export {
  routesThroughPools,
  calcAmountWithSlippage,
  calcSpotPrice,
  calcOutGivenIn,
  calcInGivenOut,
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut,
};
