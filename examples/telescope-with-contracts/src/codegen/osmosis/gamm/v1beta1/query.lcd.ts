import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }
  /* Pools */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* NumPools */
  async numPools(_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.req.get<QueryNumPoolsResponseSDKType>(endpoint);
  }
  /* TotalLiquidity */
  async totalLiquidity(_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.req.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  }
  /* PoolsWithFilter allows you to query specific pools with requested
   parameters */
  async poolsWithFilter(params: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponseSDKType> {
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
  }
  /* Per Pool gRPC Endpoints */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* PoolType returns the type of the pool.
   Returns "Balancer" as a string literal when the pool is a balancer pool.
   Errors if the pool is failed to be type caseted. */
  async poolType(params: QueryPoolTypeRequest): Promise<QueryPoolTypeResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pool_type/${params.poolId}`;
    return await this.req.get<QueryPoolTypeResponseSDKType>(endpoint);
  }
  /* CalcJoinPoolShares */
  async calcJoinPoolShares(params: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokensIn !== "undefined") {
      options.params.tokens_in = params.tokensIn;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/join_swap_exact_in`;
    return await this.req.get<QueryCalcJoinPoolSharesResponseSDKType>(endpoint, options);
  }
  /* CalcExitPoolCoinsFromShares */
  async calcExitPoolCoinsFromShares(params: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.shareInAmount !== "undefined") {
      options.params.share_in_amount = params.shareInAmount;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/exit_swap_share_amount_in`;
    return await this.req.get<QueryCalcExitPoolCoinsFromSharesResponseSDKType>(endpoint, options);
  }
  /* PoolParams */
  async poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.req.get<QueryPoolParamsResponseSDKType>(endpoint);
  }
  /* TotalPoolLiquidity */
  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  }
  /* TotalShares */
  async totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.req.get<QueryTotalSharesResponseSDKType>(endpoint);
  }
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> {
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
  }
  /* Estimate the swap. */
  async estimateSwapExactAmountIn(params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType> {
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
  }
  /* EstimateSwapExactAmountOut */
  async estimateSwapExactAmountOut(params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType> {
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
  }
}