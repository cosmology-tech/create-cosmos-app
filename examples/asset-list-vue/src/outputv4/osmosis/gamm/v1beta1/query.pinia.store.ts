import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin.js";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx.js";
import { Any, AnySDKType } from "../../../google/protobuf/any.js";
import { LCDClient } from "@cosmology/lcd";
import { useEndpoint } from "../../../pinia-endpoint.js";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query.js";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd.js";
export const usePiniaStore = defineStore('osmosis/gamm/v1beta1/query.proto', {
  state: () => {
    return {
      pools: ({} as QueryPoolsResponseSDKType),
      numPools: ({} as QueryNumPoolsResponseSDKType),
      totalLiquidity: ({} as QueryTotalLiquidityResponseSDKType),
      poolsWithFilter: ({} as QueryPoolsWithFilterResponseSDKType),
      pool: ({} as QueryPoolResponseSDKType),
      poolType: ({} as QueryPoolTypeResponseSDKType),
      calcJoinPoolNoSwapShares: ({} as QueryCalcJoinPoolNoSwapSharesResponseSDKType),
      calcJoinPoolShares: ({} as QueryCalcJoinPoolSharesResponseSDKType),
      calcExitPoolCoinsFromShares: ({} as QueryCalcExitPoolCoinsFromSharesResponseSDKType),
      poolParams: ({} as QueryPoolParamsResponseSDKType),
      totalPoolLiquidity: ({} as QueryTotalPoolLiquidityResponseSDKType),
      totalShares: ({} as QueryTotalSharesResponseSDKType),
      spotPrice: ({} as QuerySpotPriceResponseSDKType),
      estimateSwapExactAmountIn: ({} as QuerySwapExactAmountInResponseSDKType),
      estimateSwapExactAmountOut: ({} as QuerySwapExactAmountOutResponseSDKType)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }
  },
  actions: {
    async fetchPools(param : QueryPoolsRequestSDKType) {
      this.pools = await this.lcdClient.pools(param);
      return this.pools;
    },
    async fetchNumPools(param : QueryNumPoolsRequestSDKType) {
      this.numPools = await this.lcdClient.numPools(param);
      return this.numPools;
    },
    async fetchTotalLiquidity(param : QueryTotalLiquidityRequestSDKType) {
      this.totalLiquidity = await this.lcdClient.totalLiquidity(param);
      return this.totalLiquidity;
    },
    async fetchPoolsWithFilter(param : QueryPoolsWithFilterRequestSDKType) {
      this.poolsWithFilter = await this.lcdClient.poolsWithFilter(param);
      return this.poolsWithFilter;
    },
    async fetchPool(param : QueryPoolRequestSDKType) {
      this.pool = await this.lcdClient.pool(param);
      return this.pool;
    },
    async fetchPoolType(param : QueryPoolTypeRequestSDKType) {
      this.poolType = await this.lcdClient.poolType(param);
      return this.poolType;
    },
    async fetchCalcJoinPoolNoSwapShares(param : QueryCalcJoinPoolNoSwapSharesRequestSDKType) {
      this.calcJoinPoolNoSwapShares = await this.lcdClient.calcJoinPoolNoSwapShares(param);
      return this.calcJoinPoolNoSwapShares;
    },
    async fetchCalcJoinPoolShares(param : QueryCalcJoinPoolSharesRequestSDKType) {
      this.calcJoinPoolShares = await this.lcdClient.calcJoinPoolShares(param);
      return this.calcJoinPoolShares;
    },
    async fetchCalcExitPoolCoinsFromShares(param : QueryCalcExitPoolCoinsFromSharesRequestSDKType) {
      this.calcExitPoolCoinsFromShares = await this.lcdClient.calcExitPoolCoinsFromShares(param);
      return this.calcExitPoolCoinsFromShares;
    },
    async fetchPoolParams(param : QueryPoolParamsRequestSDKType) {
      this.poolParams = await this.lcdClient.poolParams(param);
      return this.poolParams;
    },
    async fetchTotalPoolLiquidity(param : QueryTotalPoolLiquidityRequestSDKType) {
      this.totalPoolLiquidity = await this.lcdClient.totalPoolLiquidity(param);
      return this.totalPoolLiquidity;
    },
    async fetchTotalShares(param : QueryTotalSharesRequestSDKType) {
      this.totalShares = await this.lcdClient.totalShares(param);
      return this.totalShares;
    },
    async fetchSpotPrice(param : QuerySpotPriceRequestSDKType) {
      this.spotPrice = await this.lcdClient.spotPrice(param);
      return this.spotPrice;
    },
    async fetchEstimateSwapExactAmountIn(param : QuerySwapExactAmountInRequestSDKType) {
      this.estimateSwapExactAmountIn = await this.lcdClient.estimateSwapExactAmountIn(param);
      return this.estimateSwapExactAmountIn;
    },
    async fetchEstimateSwapExactAmountOut(param : QuerySwapExactAmountOutRequestSDKType) {
      this.estimateSwapExactAmountOut = await this.lcdClient.estimateSwapExactAmountOut(param);
      return this.estimateSwapExactAmountOut;
    }
  }
});