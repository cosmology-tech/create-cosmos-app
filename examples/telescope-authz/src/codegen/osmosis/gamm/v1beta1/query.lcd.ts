import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Pools */
  pools = async (params: QueryPoolsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryPoolsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  };
  /* NumPools */
  numPools = async (_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.req.get<QueryNumPoolsResponseSDKType>(endpoint);
  };
  /* TotalLiquidity */
  totalLiquidity = async (_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.req.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  };
  /* PoolsWithFilter allows you to query specific pools with requested
   parameters */
  poolsWithFilter = async (params: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.minLiquidity !== "undefined") {
      options.params.min_liquidity = params.minLiquidity;
    }
    if (typeof params?.poolType !== "undefined") {
      options.params.pool_type = params.poolType;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/filtered_pools`;
    return await this.req.get<QueryPoolsWithFilterResponseSDKType>(endpoint, options);
  };
  /* Per Pool gRPC Endpoints */
  pool = async (params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  };
  /* PoolType returns the type of the pool.
   Returns "Balancer" as a string literal when the pool is a balancer pool.
   Errors if the pool is failed to be type caseted. */
  poolType = async (params: QueryPoolTypeRequest): Promise<QueryPoolTypeResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pool_type/${params.poolId}`;
    return await this.req.get<QueryPoolTypeResponseSDKType>(endpoint);
  };
  /* CalcJoinPoolShares */
  calcJoinPoolShares = async (params: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokensIn !== "undefined") {
      options.params.tokens_in = params.tokensIn;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/join_swap_exact_in`;
    return await this.req.get<QueryCalcJoinPoolSharesResponseSDKType>(endpoint, options);
  };
  /* CalcExitPoolCoinsFromShares */
  calcExitPoolCoinsFromShares = async (params: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.shareInAmount !== "undefined") {
      options.params.share_in_amount = params.shareInAmount;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/exit_swap_share_amount_in`;
    return await this.req.get<QueryCalcExitPoolCoinsFromSharesResponseSDKType>(endpoint, options);
  };
  /* PoolParams */
  poolParams = async (params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.req.get<QueryPoolParamsResponseSDKType>(endpoint);
  };
  /* TotalPoolLiquidity */
  totalPoolLiquidity = async (params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  };
  /* TotalShares */
  totalShares = async (params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> => {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.req.get<QueryTotalSharesResponseSDKType>(endpoint);
  };
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  spotPrice = async (params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }
    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/prices`;
    return await this.req.get<QuerySpotPriceResponseSDKType>(endpoint, options);
  };
  /* Estimate the swap. */
  estimateSwapExactAmountIn = async (params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.req.get<QuerySwapExactAmountInResponseSDKType>(endpoint, options);
  };
  /* EstimateSwapExactAmountOut */
  estimateSwapExactAmountOut = async (params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.req.get<QuerySwapExactAmountOutResponseSDKType>(endpoint, options);
  };
}