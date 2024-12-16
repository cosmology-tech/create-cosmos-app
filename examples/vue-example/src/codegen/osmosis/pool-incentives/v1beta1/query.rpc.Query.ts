import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType, ReactiveQueryGaugeIdsRequest, ReactiveQueryDistrInfoRequest, ReactiveQueryParamsRequest, ReactiveQueryLockableDurationsRequest, ReactiveQueryIncentivizedPoolsRequest, ReactiveQueryExternalIncentiveGaugesRequest } from "./query";
export interface Query {
  /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
  gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
  /** DistrInfo returns the pool's matching gauge ids and weights. */
  distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
  /** Params returns pool incentives params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** LockableDurations returns lock durations for pools. */
  lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
  /** IncentivizedPools returns currently incentivized pools */
  incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
  /** ExternalIncentiveGauges returns external incentive gauges. */
  externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.gaugeIds = this.gaugeIds.bind(this);
    this.distrInfo = this.distrInfo.bind(this);
    this.params = this.params.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
  }
  gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> {
    const data = QueryGaugeIdsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
    return promise.then(data => QueryGaugeIdsResponse.decode(new BinaryReader(data)));
  }
  distrInfo(request: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponse> {
    const data = QueryDistrInfoRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
    return promise.then(data => QueryDistrInfoResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  lockableDurations(request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new BinaryReader(data)));
  }
  incentivizedPools(request: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponse> {
    const data = QueryIncentivizedPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
    return promise.then(data => QueryIncentivizedPoolsResponse.decode(new BinaryReader(data)));
  }
  externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponse> {
    const data = QueryExternalIncentiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
    return promise.then(data => QueryExternalIncentiveGaugesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> {
      return queryService.gaugeIds(request);
    },
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse> {
      return queryService.distrInfo(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
      return queryService.lockableDurations(request);
    },
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse> {
      return queryService.incentivizedPools(request);
    },
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse> {
      return queryService.externalIncentiveGauges(request);
    }
  };
};
export interface UseGaugeIdsQuery<TData> extends VueQueryParams<QueryGaugeIdsResponse, TData> {
  request: ReactiveQueryGaugeIdsRequest;
}
export interface UseDistrInfoQuery<TData> extends VueQueryParams<QueryDistrInfoResponse, TData> {
  request?: ReactiveQueryDistrInfoRequest;
}
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseLockableDurationsQuery<TData> extends VueQueryParams<QueryLockableDurationsResponse, TData> {
  request?: ReactiveQueryLockableDurationsRequest;
}
export interface UseIncentivizedPoolsQuery<TData> extends VueQueryParams<QueryIncentivizedPoolsResponse, TData> {
  request?: ReactiveQueryIncentivizedPoolsRequest;
}
export interface UseExternalIncentiveGaugesQuery<TData> extends VueQueryParams<QueryExternalIncentiveGaugesResponse, TData> {
  request?: ReactiveQueryExternalIncentiveGaugesRequest;
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
  const useGaugeIds = <TData = QueryGaugeIdsResponse,>({
    request,
    options
  }: UseGaugeIdsQuery<TData>) => {
    const queryKey = ["gaugeIdsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGaugeIdsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.gaugeIds(params);
      },
      ...options
    });
  };
  const useDistrInfo = <TData = QueryDistrInfoResponse,>({
    request,
    options
  }: UseDistrInfoQuery<TData>) => {
    const queryKey = ["distrInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDistrInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.distrInfo(params);
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
  const useLockableDurations = <TData = QueryLockableDurationsResponse,>({
    request,
    options
  }: UseLockableDurationsQuery<TData>) => {
    const queryKey = ["lockableDurationsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLockableDurationsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lockableDurations(params);
      },
      ...options
    });
  };
  const useIncentivizedPools = <TData = QueryIncentivizedPoolsResponse,>({
    request,
    options
  }: UseIncentivizedPoolsQuery<TData>) => {
    const queryKey = ["incentivizedPoolsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryIncentivizedPoolsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.incentivizedPools(params);
      },
      ...options
    });
  };
  const useExternalIncentiveGauges = <TData = QueryExternalIncentiveGaugesResponse,>({
    request,
    options
  }: UseExternalIncentiveGaugesQuery<TData>) => {
    const queryKey = ["externalIncentiveGaugesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryExternalIncentiveGaugesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.externalIncentiveGauges(params);
      },
      ...options
    });
  };
  return {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */useGaugeIds,
    /** DistrInfo returns the pool's matching gauge ids and weights. */useDistrInfo,
    /** Params returns pool incentives params. */useParams,
    /** LockableDurations returns lock durations for pools. */useLockableDurations,
    /** IncentivizedPools returns currently incentivized pools */useIncentivizedPools,
    /** ExternalIncentiveGauges returns external incentive gauges. */useExternalIncentiveGauges
  };
};