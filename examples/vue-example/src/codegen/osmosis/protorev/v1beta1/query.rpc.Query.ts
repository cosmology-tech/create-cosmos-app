import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesRequestSDKType, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomRequestSDKType, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsRequestSDKType, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteRequestSDKType, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevStatisticsByRouteResponseSDKType, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsRequestSDKType, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevAllRouteStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesRequestSDKType, QueryGetProtoRevTokenPairArbRoutesResponse, QueryGetProtoRevTokenPairArbRoutesResponseSDKType, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountRequestSDKType, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevAdminAccountResponseSDKType, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountRequestSDKType, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevDeveloperAccountResponseSDKType, QueryGetProtoRevPoolWeightsRequest, QueryGetProtoRevPoolWeightsRequestSDKType, QueryGetProtoRevPoolWeightsResponse, QueryGetProtoRevPoolWeightsResponseSDKType, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsRequestSDKType, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevBaseDenomsResponseSDKType, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledRequestSDKType, QueryGetProtoRevEnabledResponse, QueryGetProtoRevEnabledResponseSDKType, ReactiveQueryParamsRequest, ReactiveQueryGetProtoRevNumberOfTradesRequest, ReactiveQueryGetProtoRevProfitsByDenomRequest, ReactiveQueryGetProtoRevAllProfitsRequest, ReactiveQueryGetProtoRevStatisticsByRouteRequest, ReactiveQueryGetProtoRevAllRouteStatisticsRequest, ReactiveQueryGetProtoRevTokenPairArbRoutesRequest, ReactiveQueryGetProtoRevAdminAccountRequest, ReactiveQueryGetProtoRevDeveloperAccountRequest, ReactiveQueryGetProtoRevPoolWeightsRequest, ReactiveQueryGetProtoRevMaxPoolPointsPerTxRequest, ReactiveQueryGetProtoRevMaxPoolPointsPerBlockRequest, ReactiveQueryGetProtoRevBaseDenomsRequest, ReactiveQueryGetProtoRevEnabledRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
  /** GetProtoRevAllProfits queries all of the profits from the module */
  getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
  /**
   * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
   * that have been executed for a given route
   */
  getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
  /**
   * GetProtoRevAllRouteStatistics queries all of routes that the module has
   * arbitraged against and the number of trades and profits that have been
   * accumulated for each route
   */
  getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
  /** GetProtoRevAdminAccount queries the admin account of the module */
  getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
  /** GetProtoRevDeveloperAccount queries the developer account of the module */
  getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
  /**
   * GetProtoRevPoolWeights queries the weights of each pool type currently
   * being used by the module
   */
  getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
   * that can be consumed per transaction
   */
  getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
   * that can consumed per block
   */
  getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
  /**
   * GetProtoRevBaseDenoms queries the base denoms that the module is currently
   * utilizing for arbitrage
   */
  getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
  /** GetProtoRevEnabled queries whether the module is enabled or not */
  getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByRoute = this.getProtoRevStatisticsByRoute.bind(this);
    this.getProtoRevAllRouteStatistics = this.getProtoRevAllRouteStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
    this.getProtoRevAdminAccount = this.getProtoRevAdminAccount.bind(this);
    this.getProtoRevDeveloperAccount = this.getProtoRevDeveloperAccount.bind(this);
    this.getProtoRevPoolWeights = this.getProtoRevPoolWeights.bind(this);
    this.getProtoRevMaxPoolPointsPerTx = this.getProtoRevMaxPoolPointsPerTx.bind(this);
    this.getProtoRevMaxPoolPointsPerBlock = this.getProtoRevMaxPoolPointsPerBlock.bind(this);
    this.getProtoRevBaseDenoms = this.getProtoRevBaseDenoms.bind(this);
    this.getProtoRevEnabled = this.getProtoRevEnabled.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest = {}): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
    return promise.then(data => QueryGetProtoRevNumberOfTradesResponse.decode(new BinaryReader(data)));
  }
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
    return promise.then(data => QueryGetProtoRevProfitsByDenomResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest = {}): Promise<QueryGetProtoRevAllProfitsResponse> {
    const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
    return promise.then(data => QueryGetProtoRevAllProfitsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse> {
    const data = QueryGetProtoRevStatisticsByRouteRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByRoute", data);
    return promise.then(data => QueryGetProtoRevStatisticsByRouteResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllRouteStatistics(request: QueryGetProtoRevAllRouteStatisticsRequest = {}): Promise<QueryGetProtoRevAllRouteStatisticsResponse> {
    const data = QueryGetProtoRevAllRouteStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllRouteStatistics", data);
    return promise.then(data => QueryGetProtoRevAllRouteStatisticsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest = {}): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
    return promise.then(data => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAdminAccount(request: QueryGetProtoRevAdminAccountRequest = {}): Promise<QueryGetProtoRevAdminAccountResponse> {
    const data = QueryGetProtoRevAdminAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAdminAccount", data);
    return promise.then(data => QueryGetProtoRevAdminAccountResponse.decode(new BinaryReader(data)));
  }
  getProtoRevDeveloperAccount(request: QueryGetProtoRevDeveloperAccountRequest = {}): Promise<QueryGetProtoRevDeveloperAccountResponse> {
    const data = QueryGetProtoRevDeveloperAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevDeveloperAccount", data);
    return promise.then(data => QueryGetProtoRevDeveloperAccountResponse.decode(new BinaryReader(data)));
  }
  getProtoRevPoolWeights(request: QueryGetProtoRevPoolWeightsRequest = {}): Promise<QueryGetProtoRevPoolWeightsResponse> {
    const data = QueryGetProtoRevPoolWeightsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevPoolWeights", data);
    return promise.then(data => QueryGetProtoRevPoolWeightsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevMaxPoolPointsPerTx(request: QueryGetProtoRevMaxPoolPointsPerTxRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerTx", data);
    return promise.then(data => QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(new BinaryReader(data)));
  }
  getProtoRevMaxPoolPointsPerBlock(request: QueryGetProtoRevMaxPoolPointsPerBlockRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerBlock", data);
    return promise.then(data => QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(new BinaryReader(data)));
  }
  getProtoRevBaseDenoms(request: QueryGetProtoRevBaseDenomsRequest = {}): Promise<QueryGetProtoRevBaseDenomsResponse> {
    const data = QueryGetProtoRevBaseDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevBaseDenoms", data);
    return promise.then(data => QueryGetProtoRevBaseDenomsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevEnabled(request: QueryGetProtoRevEnabledRequest = {}): Promise<QueryGetProtoRevEnabledResponse> {
    const data = QueryGetProtoRevEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevEnabled", data);
    return promise.then(data => QueryGetProtoRevEnabledResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse> {
      return queryService.getProtoRevNumberOfTrades(request);
    },
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
      return queryService.getProtoRevProfitsByDenom(request);
    },
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse> {
      return queryService.getProtoRevAllProfits(request);
    },
    getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse> {
      return queryService.getProtoRevStatisticsByRoute(request);
    },
    getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse> {
      return queryService.getProtoRevAllRouteStatistics(request);
    },
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
      return queryService.getProtoRevTokenPairArbRoutes(request);
    },
    getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse> {
      return queryService.getProtoRevAdminAccount(request);
    },
    getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse> {
      return queryService.getProtoRevDeveloperAccount(request);
    },
    getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse> {
      return queryService.getProtoRevPoolWeights(request);
    },
    getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
      return queryService.getProtoRevMaxPoolPointsPerTx(request);
    },
    getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
      return queryService.getProtoRevMaxPoolPointsPerBlock(request);
    },
    getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse> {
      return queryService.getProtoRevBaseDenoms(request);
    },
    getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse> {
      return queryService.getProtoRevEnabled(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseGetProtoRevNumberOfTradesQuery<TData> extends VueQueryParams<QueryGetProtoRevNumberOfTradesResponse, TData> {
  request?: ReactiveQueryGetProtoRevNumberOfTradesRequest;
}
export interface UseGetProtoRevProfitsByDenomQuery<TData> extends VueQueryParams<QueryGetProtoRevProfitsByDenomResponse, TData> {
  request: ReactiveQueryGetProtoRevProfitsByDenomRequest;
}
export interface UseGetProtoRevAllProfitsQuery<TData> extends VueQueryParams<QueryGetProtoRevAllProfitsResponse, TData> {
  request?: ReactiveQueryGetProtoRevAllProfitsRequest;
}
export interface UseGetProtoRevStatisticsByRouteQuery<TData> extends VueQueryParams<QueryGetProtoRevStatisticsByRouteResponse, TData> {
  request: ReactiveQueryGetProtoRevStatisticsByRouteRequest;
}
export interface UseGetProtoRevAllRouteStatisticsQuery<TData> extends VueQueryParams<QueryGetProtoRevAllRouteStatisticsResponse, TData> {
  request?: ReactiveQueryGetProtoRevAllRouteStatisticsRequest;
}
export interface UseGetProtoRevTokenPairArbRoutesQuery<TData> extends VueQueryParams<QueryGetProtoRevTokenPairArbRoutesResponse, TData> {
  request?: ReactiveQueryGetProtoRevTokenPairArbRoutesRequest;
}
export interface UseGetProtoRevAdminAccountQuery<TData> extends VueQueryParams<QueryGetProtoRevAdminAccountResponse, TData> {
  request?: ReactiveQueryGetProtoRevAdminAccountRequest;
}
export interface UseGetProtoRevDeveloperAccountQuery<TData> extends VueQueryParams<QueryGetProtoRevDeveloperAccountResponse, TData> {
  request?: ReactiveQueryGetProtoRevDeveloperAccountRequest;
}
export interface UseGetProtoRevPoolWeightsQuery<TData> extends VueQueryParams<QueryGetProtoRevPoolWeightsResponse, TData> {
  request?: ReactiveQueryGetProtoRevPoolWeightsRequest;
}
export interface UseGetProtoRevMaxPoolPointsPerTxQuery<TData> extends VueQueryParams<QueryGetProtoRevMaxPoolPointsPerTxResponse, TData> {
  request?: ReactiveQueryGetProtoRevMaxPoolPointsPerTxRequest;
}
export interface UseGetProtoRevMaxPoolPointsPerBlockQuery<TData> extends VueQueryParams<QueryGetProtoRevMaxPoolPointsPerBlockResponse, TData> {
  request?: ReactiveQueryGetProtoRevMaxPoolPointsPerBlockRequest;
}
export interface UseGetProtoRevBaseDenomsQuery<TData> extends VueQueryParams<QueryGetProtoRevBaseDenomsResponse, TData> {
  request?: ReactiveQueryGetProtoRevBaseDenomsRequest;
}
export interface UseGetProtoRevEnabledQuery<TData> extends VueQueryParams<QueryGetProtoRevEnabledResponse, TData> {
  request?: ReactiveQueryGetProtoRevEnabledRequest;
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
  const useGetProtoRevNumberOfTrades = <TData = QueryGetProtoRevNumberOfTradesResponse,>({
    request,
    options
  }: UseGetProtoRevNumberOfTradesQuery<TData>) => {
    const queryKey = ["getProtoRevNumberOfTradesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevNumberOfTradesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevNumberOfTrades(params);
      },
      ...options
    });
  };
  const useGetProtoRevProfitsByDenom = <TData = QueryGetProtoRevProfitsByDenomResponse,>({
    request,
    options
  }: UseGetProtoRevProfitsByDenomQuery<TData>) => {
    const queryKey = ["getProtoRevProfitsByDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevProfitsByDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevProfitsByDenom(params);
      },
      ...options
    });
  };
  const useGetProtoRevAllProfits = <TData = QueryGetProtoRevAllProfitsResponse,>({
    request,
    options
  }: UseGetProtoRevAllProfitsQuery<TData>) => {
    const queryKey = ["getProtoRevAllProfitsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevAllProfitsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevAllProfits(params);
      },
      ...options
    });
  };
  const useGetProtoRevStatisticsByRoute = <TData = QueryGetProtoRevStatisticsByRouteResponse,>({
    request,
    options
  }: UseGetProtoRevStatisticsByRouteQuery<TData>) => {
    const queryKey = ["getProtoRevStatisticsByRouteQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevStatisticsByRouteResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevStatisticsByRoute(params);
      },
      ...options
    });
  };
  const useGetProtoRevAllRouteStatistics = <TData = QueryGetProtoRevAllRouteStatisticsResponse,>({
    request,
    options
  }: UseGetProtoRevAllRouteStatisticsQuery<TData>) => {
    const queryKey = ["getProtoRevAllRouteStatisticsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevAllRouteStatisticsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevAllRouteStatistics(params);
      },
      ...options
    });
  };
  const useGetProtoRevTokenPairArbRoutes = <TData = QueryGetProtoRevTokenPairArbRoutesResponse,>({
    request,
    options
  }: UseGetProtoRevTokenPairArbRoutesQuery<TData>) => {
    const queryKey = ["getProtoRevTokenPairArbRoutesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevTokenPairArbRoutesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevTokenPairArbRoutes(params);
      },
      ...options
    });
  };
  const useGetProtoRevAdminAccount = <TData = QueryGetProtoRevAdminAccountResponse,>({
    request,
    options
  }: UseGetProtoRevAdminAccountQuery<TData>) => {
    const queryKey = ["getProtoRevAdminAccountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevAdminAccountResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevAdminAccount(params);
      },
      ...options
    });
  };
  const useGetProtoRevDeveloperAccount = <TData = QueryGetProtoRevDeveloperAccountResponse,>({
    request,
    options
  }: UseGetProtoRevDeveloperAccountQuery<TData>) => {
    const queryKey = ["getProtoRevDeveloperAccountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevDeveloperAccountResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevDeveloperAccount(params);
      },
      ...options
    });
  };
  const useGetProtoRevPoolWeights = <TData = QueryGetProtoRevPoolWeightsResponse,>({
    request,
    options
  }: UseGetProtoRevPoolWeightsQuery<TData>) => {
    const queryKey = ["getProtoRevPoolWeightsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevPoolWeightsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevPoolWeights(params);
      },
      ...options
    });
  };
  const useGetProtoRevMaxPoolPointsPerTx = <TData = QueryGetProtoRevMaxPoolPointsPerTxResponse,>({
    request,
    options
  }: UseGetProtoRevMaxPoolPointsPerTxQuery<TData>) => {
    const queryKey = ["getProtoRevMaxPoolPointsPerTxQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevMaxPoolPointsPerTxResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevMaxPoolPointsPerTx(params);
      },
      ...options
    });
  };
  const useGetProtoRevMaxPoolPointsPerBlock = <TData = QueryGetProtoRevMaxPoolPointsPerBlockResponse,>({
    request,
    options
  }: UseGetProtoRevMaxPoolPointsPerBlockQuery<TData>) => {
    const queryKey = ["getProtoRevMaxPoolPointsPerBlockQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevMaxPoolPointsPerBlockResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevMaxPoolPointsPerBlock(params);
      },
      ...options
    });
  };
  const useGetProtoRevBaseDenoms = <TData = QueryGetProtoRevBaseDenomsResponse,>({
    request,
    options
  }: UseGetProtoRevBaseDenomsQuery<TData>) => {
    const queryKey = ["getProtoRevBaseDenomsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevBaseDenomsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevBaseDenoms(params);
      },
      ...options
    });
  };
  const useGetProtoRevEnabled = <TData = QueryGetProtoRevEnabledResponse,>({
    request,
    options
  }: UseGetProtoRevEnabledQuery<TData>) => {
    const queryKey = ["getProtoRevEnabledQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGetProtoRevEnabledResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getProtoRevEnabled(params);
      },
      ...options
    });
  };
  return {
    /** Params queries the parameters of the module. */useParams,
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    useGetProtoRevNumberOfTrades,
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */useGetProtoRevProfitsByDenom,
    /** GetProtoRevAllProfits queries all of the profits from the module */useGetProtoRevAllProfits,
    /**
     * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
     * that have been executed for a given route
     */
    useGetProtoRevStatisticsByRoute,
    /**
     * GetProtoRevAllRouteStatistics queries all of routes that the module has
     * arbitraged against and the number of trades and profits that have been
     * accumulated for each route
     */
    useGetProtoRevAllRouteStatistics,
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    useGetProtoRevTokenPairArbRoutes,
    /** GetProtoRevAdminAccount queries the admin account of the module */useGetProtoRevAdminAccount,
    /** GetProtoRevDeveloperAccount queries the developer account of the module */useGetProtoRevDeveloperAccount,
    /**
     * GetProtoRevPoolWeights queries the weights of each pool type currently
     * being used by the module
     */
    useGetProtoRevPoolWeights,
    /**
     * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
     * that can be consumed per transaction
     */
    useGetProtoRevMaxPoolPointsPerTx,
    /**
     * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
     * that can consumed per block
     */
    useGetProtoRevMaxPoolPointsPerBlock,
    /**
     * GetProtoRevBaseDenoms queries the base denoms that the module is currently
     * utilizing for arbitrage
     */
    useGetProtoRevBaseDenoms,
    /** GetProtoRevEnabled queries whether the module is enabled or not */useGetProtoRevEnabled
  };
};