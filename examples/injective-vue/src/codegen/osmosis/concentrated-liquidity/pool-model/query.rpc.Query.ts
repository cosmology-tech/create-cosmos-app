import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PositionWithUnderlyingAssetBreakdown, PositionWithUnderlyingAssetBreakdownSDKType } from "../position";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "../params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Pool as Pool1 } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { Pool as Pool3 } from "../pool";
import { PoolSDKType as Pool3SDKType } from "../pool";
import { CosmWasmPool, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryUserPositionsRequest, QueryUserPositionsRequestSDKType, QueryUserPositionsResponse, QueryUserPositionsResponseSDKType, QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeRequestSDKType, QueryTotalLiquidityForRangeResponse, QueryTotalLiquidityForRangeResponseSDKType, QueryLiquidityNetInDirectionRequest, QueryLiquidityNetInDirectionRequestSDKType, QueryLiquidityNetInDirectionResponse, QueryLiquidityNetInDirectionResponseSDKType, QueryClaimableFeesRequest, QueryClaimableFeesRequestSDKType, QueryClaimableFeesResponse, QueryClaimableFeesResponseSDKType, QueryPositionByIdRequest, QueryPositionByIdRequestSDKType, QueryPositionByIdResponse, QueryPositionByIdResponseSDKType, ReactiveQueryPoolsRequest, ReactiveQueryParamsRequest, ReactiveQueryUserPositionsRequest, ReactiveQueryTotalLiquidityForRangeRequest, ReactiveQueryLiquidityNetInDirectionRequest, ReactiveQueryClaimableFeesRequest, ReactiveQueryPositionByIdRequest } from "./query";
export interface Query {
  /** Pools returns all concentrated liquidity pools */
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Params returns concentrated liquidity module params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** UserPositions returns all concentrated postitions of some address. */
  userPositions(request: QueryUserPositionsRequest): Promise<QueryUserPositionsResponse>;
  /** TotalLiquidityForRange the amount of liquidity existing within given range. */
  totalLiquidityForRange(request: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponse>;
  /**
   * LiquidityNetInDirection returns liquidity net in the direction given.
   * Uses the bound if specified, if not uses either min tick / max tick
   * depending on the direction.
   */
  liquidityNetInDirection(request: QueryLiquidityNetInDirectionRequest): Promise<QueryLiquidityNetInDirectionResponse>;
  /**
   * ClaimableFees returns the amount of fees that can be claimed by a position
   * with the given id.
   */
  claimableFees(request: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponse>;
  /** PositionById returns a position with the given id. */
  positionById(request: QueryPositionByIdRequest): Promise<QueryPositionByIdResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.params = this.params.bind(this);
    this.userPositions = this.userPositions.bind(this);
    this.totalLiquidityForRange = this.totalLiquidityForRange.bind(this);
    this.liquidityNetInDirection = this.liquidityNetInDirection.bind(this);
    this.claimableFees = this.claimableFees.bind(this);
    this.positionById = this.positionById.bind(this);
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  userPositions(request: QueryUserPositionsRequest): Promise<QueryUserPositionsResponse> {
    const data = QueryUserPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "UserPositions", data);
    return promise.then(data => QueryUserPositionsResponse.decode(new BinaryReader(data)));
  }
  totalLiquidityForRange(request: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponse> {
    const data = QueryTotalLiquidityForRangeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "TotalLiquidityForRange", data);
    return promise.then(data => QueryTotalLiquidityForRangeResponse.decode(new BinaryReader(data)));
  }
  liquidityNetInDirection(request: QueryLiquidityNetInDirectionRequest): Promise<QueryLiquidityNetInDirectionResponse> {
    const data = QueryLiquidityNetInDirectionRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "LiquidityNetInDirection", data);
    return promise.then(data => QueryLiquidityNetInDirectionResponse.decode(new BinaryReader(data)));
  }
  claimableFees(request: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponse> {
    const data = QueryClaimableFeesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "ClaimableFees", data);
    return promise.then(data => QueryClaimableFeesResponse.decode(new BinaryReader(data)));
  }
  positionById(request: QueryPositionByIdRequest): Promise<QueryPositionByIdResponse> {
    const data = QueryPositionByIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PositionById", data);
    return promise.then(data => QueryPositionByIdResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    userPositions(request: QueryUserPositionsRequest): Promise<QueryUserPositionsResponse> {
      return queryService.userPositions(request);
    },
    totalLiquidityForRange(request: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponse> {
      return queryService.totalLiquidityForRange(request);
    },
    liquidityNetInDirection(request: QueryLiquidityNetInDirectionRequest): Promise<QueryLiquidityNetInDirectionResponse> {
      return queryService.liquidityNetInDirection(request);
    },
    claimableFees(request: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponse> {
      return queryService.claimableFees(request);
    },
    positionById(request: QueryPositionByIdRequest): Promise<QueryPositionByIdResponse> {
      return queryService.positionById(request);
    }
  };
};
export interface UsePoolsQuery<TData> extends VueQueryParams<QueryPoolsResponse, TData> {
  request?: ReactiveQueryPoolsRequest;
}
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseUserPositionsQuery<TData> extends VueQueryParams<QueryUserPositionsResponse, TData> {
  request: ReactiveQueryUserPositionsRequest;
}
export interface UseTotalLiquidityForRangeQuery<TData> extends VueQueryParams<QueryTotalLiquidityForRangeResponse, TData> {
  request: ReactiveQueryTotalLiquidityForRangeRequest;
}
export interface UseLiquidityNetInDirectionQuery<TData> extends VueQueryParams<QueryLiquidityNetInDirectionResponse, TData> {
  request: ReactiveQueryLiquidityNetInDirectionRequest;
}
export interface UseClaimableFeesQuery<TData> extends VueQueryParams<QueryClaimableFeesResponse, TData> {
  request: ReactiveQueryClaimableFeesRequest;
}
export interface UsePositionByIdQuery<TData> extends VueQueryParams<QueryPositionByIdResponse, TData> {
  request: ReactiveQueryPositionByIdRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const usePools = <TData = QueryPoolsResponse,>({
    request,
    options
  }: UsePoolsQuery<TData>) => {
    const queryKey = ["poolsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPoolsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.pools(params);
      },
      ...options
    });
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    const queryKey = ["paramsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.params(params);
      },
      ...options
    });
  };
  const useUserPositions = <TData = QueryUserPositionsResponse,>({
    request,
    options
  }: UseUserPositionsQuery<TData>) => {
    const queryKey = ["userPositionsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryUserPositionsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.userPositions(params);
      },
      ...options
    });
  };
  const useTotalLiquidityForRange = <TData = QueryTotalLiquidityForRangeResponse,>({
    request,
    options
  }: UseTotalLiquidityForRangeQuery<TData>) => {
    const queryKey = ["totalLiquidityForRangeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTotalLiquidityForRangeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.totalLiquidityForRange(params);
      },
      ...options
    });
  };
  const useLiquidityNetInDirection = <TData = QueryLiquidityNetInDirectionResponse,>({
    request,
    options
  }: UseLiquidityNetInDirectionQuery<TData>) => {
    const queryKey = ["liquidityNetInDirectionQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLiquidityNetInDirectionResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.liquidityNetInDirection(params);
      },
      ...options
    });
  };
  const useClaimableFees = <TData = QueryClaimableFeesResponse,>({
    request,
    options
  }: UseClaimableFeesQuery<TData>) => {
    const queryKey = ["claimableFeesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryClaimableFeesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.claimableFees(params);
      },
      ...options
    });
  };
  const usePositionById = <TData = QueryPositionByIdResponse,>({
    request,
    options
  }: UsePositionByIdQuery<TData>) => {
    const queryKey = ["positionByIdQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPositionByIdResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.positionById(params);
      },
      ...options
    });
  };
  return {
    /** Pools returns all concentrated liquidity pools */usePools,
    /** Params returns concentrated liquidity module params. */useParams,
    /** UserPositions returns all concentrated postitions of some address. */useUserPositions,
    /** TotalLiquidityForRange the amount of liquidity existing within given range. */useTotalLiquidityForRange,
    /**
     * LiquidityNetInDirection returns liquidity net in the direction given.
     * Uses the bound if specified, if not uses either min tick / max tick
     * depending on the direction.
     */
    useLiquidityNetInDirection,
    /**
     * ClaimableFees returns the amount of fees that can be claimed by a position
     * with the given id.
     */
    useClaimableFees,
    /** PositionById returns a position with the given id. */usePositionById
  };
};