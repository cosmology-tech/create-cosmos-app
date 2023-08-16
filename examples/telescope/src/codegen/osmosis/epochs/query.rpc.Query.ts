import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../mobx";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  epochInfos(request: QueryEpochsInfoRequest = {}): Promise<QueryEpochsInfoResponse> {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "EpochInfos", data);
    return promise.then(data => QueryEpochsInfoResponse.decode(new BinaryReader(data)));
  }
  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse> {
      return queryService.epochInfos(request);
    },
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
      return queryService.currentEpoch(request);
    }
  };
};
export interface UseEpochInfosQuery<TData> extends ReactQueryParams<QueryEpochsInfoResponse, TData> {
  request?: QueryEpochsInfoRequest;
}
export interface UseCurrentEpochQuery<TData> extends ReactQueryParams<QueryCurrentEpochResponse, TData> {
  request: QueryCurrentEpochRequest;
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
  const useEpochInfos = <TData = QueryEpochsInfoResponse,>({
    request,
    options
  }: UseEpochInfosQuery<TData>) => {
    return useQuery<QueryEpochsInfoResponse, Error, TData>(["epochInfosQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochInfos(request);
    }, options);
  };
  const useCurrentEpoch = <TData = QueryCurrentEpochResponse,>({
    request,
    options
  }: UseCurrentEpochQuery<TData>) => {
    return useQuery<QueryCurrentEpochResponse, Error, TData>(["currentEpochQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentEpoch(request);
    }, options);
  };
  return {
    /** EpochInfos provide running epochInfos */useEpochInfos,
    /** CurrentEpoch provide current epoch of specified identifier */useCurrentEpoch
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryEpochInfosStore {
    store = new QueryStore<QueryEpochsInfoRequest, QueryEpochsInfoResponse>(queryService?.epochInfos);
    epochInfos(request: QueryEpochsInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCurrentEpochStore {
    store = new QueryStore<QueryCurrentEpochRequest, QueryCurrentEpochResponse>(queryService?.currentEpoch);
    currentEpoch(request: QueryCurrentEpochRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** EpochInfos provide running epochInfos */QueryEpochInfosStore,
    /** CurrentEpoch provide current epoch of specified identifier */QueryCurrentEpochStore
  };
};