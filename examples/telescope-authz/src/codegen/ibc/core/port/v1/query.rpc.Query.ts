import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../../mobx";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
  appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* AppVersion queries an IBC Port and determines the appropriate application version to be used */
  appVersion = async (request: QueryAppVersionRequest): Promise<QueryAppVersionResponse> => {
    const data = QueryAppVersionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.port.v1.Query", "AppVersion", data);
    return promise.then(data => QueryAppVersionResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse> {
      return queryService.appVersion(request);
    }
  };
};
export interface UseAppVersionQuery<TData> extends ReactQueryParams<QueryAppVersionResponse, TData> {
  request: QueryAppVersionRequest;
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
  const useAppVersion = <TData = QueryAppVersionResponse,>({
    request,
    options
  }: UseAppVersionQuery<TData>) => {
    return useQuery<QueryAppVersionResponse, Error, TData>(["appVersionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.appVersion(request);
    }, options);
  };
  return {
    /** AppVersion queries an IBC Port and determines the appropriate application version to be used */useAppVersion
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryAppVersionStore {
    store = new QueryStore<QueryAppVersionRequest, QueryAppVersionResponse>(queryService?.appVersion);
    appVersion(request: QueryAppVersionRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** AppVersion queries an IBC Port and determines the appropriate application version to be used */QueryAppVersionStore
  };
};