import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  simulate(request: SimulateRequest): Promise<SimulateResponse>;
  /** GetTx fetches a tx by hash. */
  getTx(request: GetTxRequest): Promise<GetTxResponse>;
  /** BroadcastTx broadcast transaction. */
  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
  /** GetTxsEvent fetches txs by event. */
  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Simulate simulates executing a transaction for estimating gas usage. */
  simulate = async (request: SimulateRequest): Promise<SimulateResponse> => {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new BinaryReader(data)));
  };
  /* GetTx fetches a tx by hash. */
  getTx = async (request: GetTxRequest): Promise<GetTxResponse> => {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new BinaryReader(data)));
  };
  /* BroadcastTx broadcast transaction. */
  broadcastTx = async (request: BroadcastTxRequest): Promise<BroadcastTxResponse> => {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then(data => BroadcastTxResponse.decode(new BinaryReader(data)));
  };
  /* GetTxsEvent fetches txs by event. */
  getTxsEvent = async (request: GetTxsEventRequest): Promise<GetTxsEventResponse> => {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new BinaryReader(data)));
  };
  /* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */
  getBlockWithTxs = async (request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> => {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then(data => GetBlockWithTxsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new ServiceClientImpl(rpc);
};
export interface UseSimulateQuery<TData> extends ReactQueryParams<SimulateResponse, TData> {
  request: SimulateRequest;
}
export interface UseGetTxQuery<TData> extends ReactQueryParams<GetTxResponse, TData> {
  request: GetTxRequest;
}
export interface UseBroadcastTxQuery<TData> extends ReactQueryParams<BroadcastTxResponse, TData> {
  request: BroadcastTxRequest;
}
export interface UseGetTxsEventQuery<TData> extends ReactQueryParams<GetTxsEventResponse, TData> {
  request: GetTxsEventRequest;
}
export interface UseGetBlockWithTxsQuery<TData> extends ReactQueryParams<GetBlockWithTxsResponse, TData> {
  request: GetBlockWithTxsRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, ServiceClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): ServiceClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new ServiceClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useSimulate = <TData = SimulateResponse,>({
    request,
    options
  }: UseSimulateQuery<TData>) => {
    return useQuery<SimulateResponse, Error, TData>(["simulateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.simulate(request);
    }, options);
  };
  const useGetTx = <TData = GetTxResponse,>({
    request,
    options
  }: UseGetTxQuery<TData>) => {
    return useQuery<GetTxResponse, Error, TData>(["getTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTx(request);
    }, options);
  };
  const useBroadcastTx = <TData = BroadcastTxResponse,>({
    request,
    options
  }: UseBroadcastTxQuery<TData>) => {
    return useQuery<BroadcastTxResponse, Error, TData>(["broadcastTxQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.broadcastTx(request);
    }, options);
  };
  const useGetTxsEvent = <TData = GetTxsEventResponse,>({
    request,
    options
  }: UseGetTxsEventQuery<TData>) => {
    return useQuery<GetTxsEventResponse, Error, TData>(["getTxsEventQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getTxsEvent(request);
    }, options);
  };
  const useGetBlockWithTxs = <TData = GetBlockWithTxsResponse,>({
    request,
    options
  }: UseGetBlockWithTxsQuery<TData>) => {
    return useQuery<GetBlockWithTxsResponse, Error, TData>(["getBlockWithTxsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getBlockWithTxs(request);
    }, options);
  };
  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */useSimulate,
    /** GetTx fetches a tx by hash. */useGetTx,
    /** BroadcastTx broadcast transaction. */useBroadcastTx,
    /** GetTxsEvent fetches txs by event. */useGetTxsEvent,
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QuerySimulateStore {
    store = new QueryStore<SimulateRequest, SimulateResponse>(queryService?.simulate);
    simulate(request: SimulateRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetTxStore {
    store = new QueryStore<GetTxRequest, GetTxResponse>(queryService?.getTx);
    getTx(request: GetTxRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBroadcastTxStore {
    store = new QueryStore<BroadcastTxRequest, BroadcastTxResponse>(queryService?.broadcastTx);
    broadcastTx(request: BroadcastTxRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetTxsEventStore {
    store = new QueryStore<GetTxsEventRequest, GetTxsEventResponse>(queryService?.getTxsEvent);
    getTxsEvent(request: GetTxsEventRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetBlockWithTxsStore {
    store = new QueryStore<GetBlockWithTxsRequest, GetBlockWithTxsResponse>(queryService?.getBlockWithTxs);
    getBlockWithTxs(request: GetBlockWithTxsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */QuerySimulateStore,
    /** GetTx fetches a tx by hash. */QueryGetTxStore,
    /** BroadcastTx broadcast transaction. */QueryBroadcastTxStore,
    /** GetTxsEvent fetches txs by event. */QueryGetTxsEventStore,
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    QueryGetBlockWithTxsStore
  };
};