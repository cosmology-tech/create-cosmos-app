import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsSDKType } from "./genesis";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../../gamm/pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../../gamm/pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/pool-models/stableswap/stableswap_pool";
import { Pool as Pool3 } from "../../concentrated-liquidity/pool";
import { PoolSDKType as Pool3SDKType } from "../../concentrated-liquidity/pool";
import { CosmWasmPool, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInRequestSDKType, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInResponseSDKType, EstimateSinglePoolSwapExactAmountInRequest, EstimateSinglePoolSwapExactAmountInRequestSDKType, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutRequestSDKType, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutResponseSDKType, EstimateSinglePoolSwapExactAmountOutRequest, EstimateSinglePoolSwapExactAmountOutRequestSDKType, NumPoolsRequest, NumPoolsRequestSDKType, NumPoolsResponse, NumPoolsResponseSDKType, PoolRequest, PoolRequestSDKType, PoolResponse, PoolResponseSDKType, AllPoolsRequest, AllPoolsRequestSDKType, AllPoolsResponse, AllPoolsResponseSDKType, SpotPriceRequest, SpotPriceRequestSDKType, SpotPriceResponse, SpotPriceResponseSDKType, ReactiveParamsRequest, ReactiveEstimateSwapExactAmountInRequest, ReactiveEstimateSinglePoolSwapExactAmountInRequest, ReactiveEstimateSwapExactAmountOutRequest, ReactiveEstimateSinglePoolSwapExactAmountOutRequest, ReactiveNumPoolsRequest, ReactivePoolRequest, ReactiveAllPoolsRequest, ReactiveSpotPriceRequest } from "./query";
export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** Estimates swap amount out given in. */
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
  estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
  /** Estimates swap amount in given out. */
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
  estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
  /** Returns the total number of pools existing in Osmosis. */
  numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
  /** Pool returns the Pool specified by the pool id */
  pool(request: PoolRequest): Promise<PoolResponse>;
  /** AllPools returns all pools on the Osmosis chain sorted by IDs. */
  allPools(request: AllPoolsRequest): Promise<AllPoolsResponse>;
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSinglePoolSwapExactAmountIn = this.estimateSinglePoolSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.estimateSinglePoolSwapExactAmountOut = this.estimateSinglePoolSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
    this.pool = this.pool.bind(this);
    this.allPools = this.allPools.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountIn", data);
    return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountOut", data);
    return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  numPools(request: NumPoolsRequest = {}): Promise<NumPoolsResponse> {
    const data = NumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "NumPools", data);
    return promise.then(data => NumPoolsResponse.decode(new BinaryReader(data)));
  }
  pool(request: PoolRequest): Promise<PoolResponse> {
    const data = PoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Pool", data);
    return promise.then(data => PoolResponse.decode(new BinaryReader(data)));
  }
  allPools(request: AllPoolsRequest): Promise<AllPoolsResponse> {
    const data = AllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "AllPools", data);
    return promise.then(data => AllPoolsResponse.decode(new BinaryReader(data)));
  }
  spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse> {
    const data = SpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "SpotPrice", data);
    return promise.then(data => SpotPriceResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    estimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse> {
      return queryService.estimateSinglePoolSwapExactAmountIn(request);
    },
    estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
      return queryService.estimateSwapExactAmountOut(request);
    },
    estimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse> {
      return queryService.estimateSinglePoolSwapExactAmountOut(request);
    },
    numPools(request?: NumPoolsRequest): Promise<NumPoolsResponse> {
      return queryService.numPools(request);
    },
    pool(request: PoolRequest): Promise<PoolResponse> {
      return queryService.pool(request);
    },
    allPools(request: AllPoolsRequest): Promise<AllPoolsResponse> {
      return queryService.allPools(request);
    },
    spotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse> {
      return queryService.spotPrice(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<ParamsResponse, TData> {
  request?: ReactiveParamsRequest;
}
export interface UseEstimateSwapExactAmountInQuery<TData> extends VueQueryParams<EstimateSwapExactAmountInResponse, TData> {
  request: ReactiveEstimateSwapExactAmountInRequest;
}
export interface UseEstimateSinglePoolSwapExactAmountInQuery<TData> extends VueQueryParams<EstimateSwapExactAmountInResponse, TData> {
  request: ReactiveEstimateSinglePoolSwapExactAmountInRequest;
}
export interface UseEstimateSwapExactAmountOutQuery<TData> extends VueQueryParams<EstimateSwapExactAmountOutResponse, TData> {
  request: ReactiveEstimateSwapExactAmountOutRequest;
}
export interface UseEstimateSinglePoolSwapExactAmountOutQuery<TData> extends VueQueryParams<EstimateSwapExactAmountOutResponse, TData> {
  request: ReactiveEstimateSinglePoolSwapExactAmountOutRequest;
}
export interface UseNumPoolsQuery<TData> extends VueQueryParams<NumPoolsResponse, TData> {
  request?: ReactiveNumPoolsRequest;
}
export interface UsePoolQuery<TData> extends VueQueryParams<PoolResponse, TData> {
  request: ReactivePoolRequest;
}
export interface UseAllPoolsQuery<TData> extends VueQueryParams<AllPoolsResponse, TData> {
  request: ReactiveAllPoolsRequest;
}
export interface UseSpotPriceQuery<TData> extends VueQueryParams<SpotPriceResponse, TData> {
  request: ReactiveSpotPriceRequest;
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
  const useParams = <TData = ParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    const queryKey = ["paramsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ParamsResponse, Error, TData>({
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
  const useEstimateSwapExactAmountIn = <TData = EstimateSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountInQuery<TData>) => {
    const queryKey = ["estimateSwapExactAmountInQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<EstimateSwapExactAmountInResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.estimateSwapExactAmountIn(params);
      },
      ...options
    });
  };
  const useEstimateSinglePoolSwapExactAmountIn = <TData = EstimateSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSinglePoolSwapExactAmountInQuery<TData>) => {
    const queryKey = ["estimateSinglePoolSwapExactAmountInQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<EstimateSwapExactAmountInResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.estimateSinglePoolSwapExactAmountIn(params);
      },
      ...options
    });
  };
  const useEstimateSwapExactAmountOut = <TData = EstimateSwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountOutQuery<TData>) => {
    const queryKey = ["estimateSwapExactAmountOutQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<EstimateSwapExactAmountOutResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.estimateSwapExactAmountOut(params);
      },
      ...options
    });
  };
  const useEstimateSinglePoolSwapExactAmountOut = <TData = EstimateSwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSinglePoolSwapExactAmountOutQuery<TData>) => {
    const queryKey = ["estimateSinglePoolSwapExactAmountOutQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<EstimateSwapExactAmountOutResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.estimateSinglePoolSwapExactAmountOut(params);
      },
      ...options
    });
  };
  const useNumPools = <TData = NumPoolsResponse,>({
    request,
    options
  }: UseNumPoolsQuery<TData>) => {
    const queryKey = ["numPoolsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<NumPoolsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.numPools(params);
      },
      ...options
    });
  };
  const usePool = <TData = PoolResponse,>({
    request,
    options
  }: UsePoolQuery<TData>) => {
    const queryKey = ["poolQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<PoolResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.pool(params);
      },
      ...options
    });
  };
  const useAllPools = <TData = AllPoolsResponse,>({
    request,
    options
  }: UseAllPoolsQuery<TData>) => {
    const queryKey = ["allPoolsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AllPoolsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allPools(params);
      },
      ...options
    });
  };
  const useSpotPrice = <TData = SpotPriceResponse,>({
    request,
    options
  }: UseSpotPriceQuery<TData>) => {
    const queryKey = ["spotPriceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<SpotPriceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spotPrice(params);
      },
      ...options
    });
  };
  return {
    useParams,
    /** Estimates swap amount out given in. */useEstimateSwapExactAmountIn,
    useEstimateSinglePoolSwapExactAmountIn,
    /** Estimates swap amount in given out. */useEstimateSwapExactAmountOut,
    useEstimateSinglePoolSwapExactAmountOut,
    /** Returns the total number of pools existing in Osmosis. */useNumPools,
    /** Pool returns the Pool specified by the pool id */usePool,
    /** AllPools returns all pools on the Osmosis chain sorted by IDs. */useAllPools,
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useSpotPrice
  };
};