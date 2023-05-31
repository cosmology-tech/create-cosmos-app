import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import * as fm from "../../../grpc-gateway";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
export class Query {
  static pools(request: QueryPoolsRequest, initRequest?: fm.InitReq): Promise<QueryPoolsResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static numPools(request: QueryNumPoolsRequest, initRequest?: fm.InitReq): Promise<QueryNumPoolsResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/num_pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static totalLiquidity(request: QueryTotalLiquidityRequest, initRequest?: fm.InitReq): Promise<QueryTotalLiquidityResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/total_liquidity?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  static poolsWithFilter(request: QueryPoolsWithFilterRequest, initRequest?: fm.InitReq): Promise<QueryPoolsWithFilterResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/filtered_pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Per Pool gRPC Endpoints */
  static pool(request: QueryPoolRequest, initRequest?: fm.InitReq): Promise<QueryPoolResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  static poolType(request: QueryPoolTypeRequest, initRequest?: fm.InitReq): Promise<QueryPoolTypeResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pool_type/${request["pool_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  static calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    return fm.fetchReq(`osmosis.gamm.v1beta1.CalcJoinPoolNoSwapShares?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcJoinPoolSharesResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/join_swap_exact_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/exit_swap_share_amount_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static poolParams(request: QueryPoolParamsRequest, initRequest?: fm.InitReq): Promise<QueryPoolParamsResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/params?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest, initRequest?: fm.InitReq): Promise<QueryTotalPoolLiquidityResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/total_pool_liquidity?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static totalShares(request: QueryTotalSharesRequest, initRequest?: fm.InitReq): Promise<QueryTotalSharesResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/total_shares?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  static spotPrice(request: QuerySpotPriceRequest, initRequest?: fm.InitReq): Promise<QuerySpotPriceResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/prices?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Estimate the swap. */
  static estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest, initRequest?: fm.InitReq): Promise<QuerySwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest, initRequest?: fm.InitReq): Promise<QuerySwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_out?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  async pools(req: QueryPoolsRequest, headers?: HeadersInit): Promise<QueryPoolsResponse> {
    return Query.pools(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async numPools(req: QueryNumPoolsRequest, headers?: HeadersInit): Promise<QueryNumPoolsResponse> {
    return Query.numPools(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async totalLiquidity(req: QueryTotalLiquidityRequest, headers?: HeadersInit): Promise<QueryTotalLiquidityResponse> {
    return Query.totalLiquidity(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  async poolsWithFilter(req: QueryPoolsWithFilterRequest, headers?: HeadersInit): Promise<QueryPoolsWithFilterResponse> {
    return Query.poolsWithFilter(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Per Pool gRPC Endpoints */
  async pool(req: QueryPoolRequest, headers?: HeadersInit): Promise<QueryPoolResponse> {
    return Query.pool(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  async poolType(req: QueryPoolTypeRequest, headers?: HeadersInit): Promise<QueryPoolTypeResponse> {
    return Query.poolType(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  async calcJoinPoolNoSwapShares(req: QueryCalcJoinPoolNoSwapSharesRequest, headers?: HeadersInit): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    return Query.calcJoinPoolNoSwapShares(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async calcJoinPoolShares(req: QueryCalcJoinPoolSharesRequest, headers?: HeadersInit): Promise<QueryCalcJoinPoolSharesResponse> {
    return Query.calcJoinPoolShares(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async calcExitPoolCoinsFromShares(req: QueryCalcExitPoolCoinsFromSharesRequest, headers?: HeadersInit): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    return Query.calcExitPoolCoinsFromShares(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async poolParams(req: QueryPoolParamsRequest, headers?: HeadersInit): Promise<QueryPoolParamsResponse> {
    return Query.poolParams(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async totalPoolLiquidity(req: QueryTotalPoolLiquidityRequest, headers?: HeadersInit): Promise<QueryTotalPoolLiquidityResponse> {
    return Query.totalPoolLiquidity(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async totalShares(req: QueryTotalSharesRequest, headers?: HeadersInit): Promise<QueryTotalSharesResponse> {
    return Query.totalShares(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  async spotPrice(req: QuerySpotPriceRequest, headers?: HeadersInit): Promise<QuerySpotPriceResponse> {
    return Query.spotPrice(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Estimate the swap. */
  async estimateSwapExactAmountIn(req: QuerySwapExactAmountInRequest, headers?: HeadersInit): Promise<QuerySwapExactAmountInResponse> {
    return Query.estimateSwapExactAmountIn(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async estimateSwapExactAmountOut(req: QuerySwapExactAmountOutRequest, headers?: HeadersInit): Promise<QuerySwapExactAmountOutResponse> {
    return Query.estimateSwapExactAmountOut(req, {
      headers,
      pathPrefix: this.url
    });
  }
}