import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
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
export interface UseGaugeIdsQuery<TData> extends ReactQueryParams<QueryGaugeIdsResponse, TData> {
  request: QueryGaugeIdsRequest;
}
export interface UseDistrInfoQuery<TData> extends ReactQueryParams<QueryDistrInfoResponse, TData> {
  request?: QueryDistrInfoRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseLockableDurationsQuery<TData> extends ReactQueryParams<QueryLockableDurationsResponse, TData> {
  request?: QueryLockableDurationsRequest;
}
export interface UseIncentivizedPoolsQuery<TData> extends ReactQueryParams<QueryIncentivizedPoolsResponse, TData> {
  request?: QueryIncentivizedPoolsRequest;
}
export interface UseExternalIncentiveGaugesQuery<TData> extends ReactQueryParams<QueryExternalIncentiveGaugesResponse, TData> {
  request?: QueryExternalIncentiveGaugesRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useGaugeIds = <TData = QueryGaugeIdsResponse,>({
    request,
    options
  }: UseGaugeIdsQuery<TData>) => {
    return useQuery<QueryGaugeIdsResponse, Error, TData>(["gaugeIdsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.gaugeIds(request);
    }, options);
  };
  const useDistrInfo = <TData = QueryDistrInfoResponse,>({
    request,
    options
  }: UseDistrInfoQuery<TData>) => {
    return useQuery<QueryDistrInfoResponse, Error, TData>(["distrInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.distrInfo(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useLockableDurations = <TData = QueryLockableDurationsResponse,>({
    request,
    options
  }: UseLockableDurationsQuery<TData>) => {
    return useQuery<QueryLockableDurationsResponse, Error, TData>(["lockableDurationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lockableDurations(request);
    }, options);
  };
  const useIncentivizedPools = <TData = QueryIncentivizedPoolsResponse,>({
    request,
    options
  }: UseIncentivizedPoolsQuery<TData>) => {
    return useQuery<QueryIncentivizedPoolsResponse, Error, TData>(["incentivizedPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.incentivizedPools(request);
    }, options);
  };
  const useExternalIncentiveGauges = <TData = QueryExternalIncentiveGaugesResponse,>({
    request,
    options
  }: UseExternalIncentiveGaugesQuery<TData>) => {
    return useQuery<QueryExternalIncentiveGaugesResponse, Error, TData>(["externalIncentiveGaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.externalIncentiveGauges(request);
    }, options);
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
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryGaugeIdsStore {
    store = new QueryStore<QueryGaugeIdsRequest, QueryGaugeIdsResponse>(queryService?.gaugeIds);
    gaugeIds(request: QueryGaugeIdsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDistrInfoStore {
    store = new QueryStore<QueryDistrInfoRequest, QueryDistrInfoResponse>(queryService?.distrInfo);
    distrInfo(request: QueryDistrInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryLockableDurationsStore {
    store = new QueryStore<QueryLockableDurationsRequest, QueryLockableDurationsResponse>(queryService?.lockableDurations);
    lockableDurations(request: QueryLockableDurationsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryIncentivizedPoolsStore {
    store = new QueryStore<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>(queryService?.incentivizedPools);
    incentivizedPools(request: QueryIncentivizedPoolsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryExternalIncentiveGaugesStore {
    store = new QueryStore<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>(queryService?.externalIncentiveGauges);
    externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */QueryGaugeIdsStore,
    /** DistrInfo returns the pool's matching gauge ids and weights. */QueryDistrInfoStore,
    /** Params returns pool incentives params. */QueryParamsStore,
    /** LockableDurations returns lock durations for pools. */QueryLockableDurationsStore,
    /** IncentivizedPools returns currently incentivized pools */QueryIncentivizedPoolsStore,
    /** ExternalIncentiveGauges returns external incentive gauges. */QueryExternalIncentiveGaugesStore
  };
};