import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export interface Query {
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
  totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
  /** Per Pool gRPC Endpoints */
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
  calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
  calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /** Estimate the swap. */
  estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
  estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolNoSwapShares = this.calcJoinPoolNoSwapShares.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
  }
  numPools(request: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponse> {
    const data = QueryNumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "NumPools", data);
    return promise.then(data => QueryNumPoolsResponse.decode(new BinaryReader(data)));
  }
  totalLiquidity(request: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponse> {
    const data = QueryTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalLiquidity", data);
    return promise.then(data => QueryTotalLiquidityResponse.decode(new BinaryReader(data)));
  }
  poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse> {
    const data = QueryPoolsWithFilterRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolsWithFilter", data);
    return promise.then(data => QueryPoolsWithFilterResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse> {
    const data = QueryPoolTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolType", data);
    return promise.then(data => QueryPoolTypeResponse.decode(new BinaryReader(data)));
  }
  calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    const data = QueryCalcJoinPoolNoSwapSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolNoSwapShares", data);
    return promise.then(data => QueryCalcJoinPoolNoSwapSharesResponse.decode(new BinaryReader(data)));
  }
  calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse> {
    const data = QueryCalcJoinPoolSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolShares", data);
    return promise.then(data => QueryCalcJoinPoolSharesResponse.decode(new BinaryReader(data)));
  }
  calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    const data = QueryCalcExitPoolCoinsFromSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcExitPoolCoinsFromShares", data);
    return promise.then(data => QueryCalcExitPoolCoinsFromSharesResponse.decode(new BinaryReader(data)));
  }
  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
    const data = QueryPoolParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolParams", data);
    return promise.then(data => QueryPoolParamsResponse.decode(new BinaryReader(data)));
  }
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalPoolLiquidity", data);
    return promise.then(data => QueryTotalPoolLiquidityResponse.decode(new BinaryReader(data)));
  }
  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
    const data = QueryTotalSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalShares", data);
    return promise.then(data => QueryTotalSharesResponse.decode(new BinaryReader(data)));
  }
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "SpotPrice", data);
    return promise.then(data => QuerySpotPriceResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse> {
    const data = QuerySwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => QuerySwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse> {
    const data = QuerySwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => QuerySwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse> {
      return queryService.numPools(request);
    },
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse> {
      return queryService.totalLiquidity(request);
    },
    poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse> {
      return queryService.poolsWithFilter(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse> {
      return queryService.poolType(request);
    },
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
      return queryService.calcJoinPoolNoSwapShares(request);
    },
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse> {
      return queryService.calcJoinPoolShares(request);
    },
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
      return queryService.calcExitPoolCoinsFromShares(request);
    },
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
      return queryService.poolParams(request);
    },
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
      return queryService.totalPoolLiquidity(request);
    },
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
      return queryService.totalShares(request);
    },
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
      return queryService.spotPrice(request);
    },
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse> {
      return queryService.estimateSwapExactAmountOut(request);
    }
  };
};