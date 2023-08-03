import { SwapAmountInRoute } from 'osmojs/dist/codegen/osmosis/poolmanager/v1beta1/swap_route';
import {
  getRoutesForTrade as _getRoutesForTrade,
  routesThroughPools,
  calcAmountWithSlippage,
  calcSpotPrice,
  calcOutGivenIn,
  calcInGivenOut,
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut
} from '@osmonauts/math';

import { Trade, PrettyPair } from './types';
import { osmosisAssets } from './assets';

export const getRoutesForTrade = ({
  trade,
  pairs,
}: {
  trade: Trade;
  pairs: PrettyPair[];
}): SwapAmountInRoute[] => {
  return _getRoutesForTrade(osmosisAssets, { trade, pairs });
};

export {
  routesThroughPools,
  calcAmountWithSlippage,
  calcSpotPrice,
  calcOutGivenIn,
  calcInGivenOut,
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut
}