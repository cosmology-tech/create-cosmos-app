import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }
  moduleAccountBalance(request: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> {
    const data = QueryModuleAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ModuleAccountBalance", data);
    return promise.then(data => QueryModuleAccountBalanceResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new BinaryReader(data)));
  }
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new BinaryReader(data)));
  }
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
      return queryService.moduleAccountBalance(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
      return queryService.claimRecord(request);
    },
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
      return queryService.claimableForAction(request);
    },
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
      return queryService.totalClaimable(request);
    }
  };
};
export interface UseModuleAccountBalanceQuery<TData> extends ReactQueryParams<QueryModuleAccountBalanceResponse, TData> {
  request?: QueryModuleAccountBalanceRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseClaimRecordQuery<TData> extends ReactQueryParams<QueryClaimRecordResponse, TData> {
  request: QueryClaimRecordRequest;
}
export interface UseClaimableForActionQuery<TData> extends ReactQueryParams<QueryClaimableForActionResponse, TData> {
  request: QueryClaimableForActionRequest;
}
export interface UseTotalClaimableQuery<TData> extends ReactQueryParams<QueryTotalClaimableResponse, TData> {
  request: QueryTotalClaimableRequest;
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
  const useModuleAccountBalance = <TData = QueryModuleAccountBalanceResponse,>({
    request,
    options
  }: UseModuleAccountBalanceQuery<TData>) => {
    return useQuery<QueryModuleAccountBalanceResponse, Error, TData>(["moduleAccountBalanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccountBalance(request);
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
  const useClaimRecord = <TData = QueryClaimRecordResponse,>({
    request,
    options
  }: UseClaimRecordQuery<TData>) => {
    return useQuery<QueryClaimRecordResponse, Error, TData>(["claimRecordQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimRecord(request);
    }, options);
  };
  const useClaimableForAction = <TData = QueryClaimableForActionResponse,>({
    request,
    options
  }: UseClaimableForActionQuery<TData>) => {
    return useQuery<QueryClaimableForActionResponse, Error, TData>(["claimableForActionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimableForAction(request);
    }, options);
  };
  const useTotalClaimable = <TData = QueryTotalClaimableResponse,>({
    request,
    options
  }: UseTotalClaimableQuery<TData>) => {
    return useQuery<QueryTotalClaimableResponse, Error, TData>(["totalClaimableQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalClaimable(request);
    }, options);
  };
  return {
    useModuleAccountBalance,
    useParams,
    useClaimRecord,
    useClaimableForAction,
    useTotalClaimable
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryModuleAccountBalanceStore {
    store = new QueryStore<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>(queryService?.moduleAccountBalance);
    moduleAccountBalance(request: QueryModuleAccountBalanceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClaimRecordStore {
    store = new QueryStore<QueryClaimRecordRequest, QueryClaimRecordResponse>(queryService?.claimRecord);
    claimRecord(request: QueryClaimRecordRequest) {
      return this.store.getData(request);
    }
  }
  class QueryClaimableForActionStore {
    store = new QueryStore<QueryClaimableForActionRequest, QueryClaimableForActionResponse>(queryService?.claimableForAction);
    claimableForAction(request: QueryClaimableForActionRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalClaimableStore {
    store = new QueryStore<QueryTotalClaimableRequest, QueryTotalClaimableResponse>(queryService?.totalClaimable);
    totalClaimable(request: QueryTotalClaimableRequest) {
      return this.store.getData(request);
    }
  }
  return {
    QueryModuleAccountBalanceStore,
    QueryParamsStore,
    QueryClaimRecordStore,
    QueryClaimableForActionStore,
    QueryTotalClaimableStore
  };
};