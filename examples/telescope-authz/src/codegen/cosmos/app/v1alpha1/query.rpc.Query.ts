import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Config returns the current app config. */
  config = async (request: QueryConfigRequest = {}): Promise<QueryConfigResponse> => {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse> {
      return queryService.config(request);
    }
  };
};
export interface UseConfigQuery<TData> extends ReactQueryParams<QueryConfigResponse, TData> {
  request?: QueryConfigRequest;
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
  const useConfig = <TData = QueryConfigResponse,>({
    request,
    options
  }: UseConfigQuery<TData>) => {
    return useQuery<QueryConfigResponse, Error, TData>(["configQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.config(request);
    }, options);
  };
  return {
    /** Config returns the current app config. */useConfig
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryConfigStore {
    store = new QueryStore<QueryConfigRequest, QueryConfigResponse>(queryService?.config);
    config(request: QueryConfigRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Config returns the current app config. */QueryConfigStore
  };
};