import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Subspaces queries for all registered subspaces and all keys for a subspace. */
  subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries a specific parameter of a module, given its subspace and
   key. */
  params = async (request: QueryParamsRequest): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Subspaces queries for all registered subspaces and all keys for a subspace. */
  subspaces = async (request: QuerySubspacesRequest = {}): Promise<QuerySubspacesResponse> => {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
    return promise.then(data => QuerySubspacesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse> {
      return queryService.subspaces(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request: QueryParamsRequest;
}
export interface UseSubspacesQuery<TData> extends ReactQueryParams<QuerySubspacesResponse, TData> {
  request?: QuerySubspacesRequest;
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
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useSubspaces = <TData = QuerySubspacesResponse,>({
    request,
    options
  }: UseSubspacesQuery<TData>) => {
    return useQuery<QuerySubspacesResponse, Error, TData>(["subspacesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.subspaces(request);
    }, options);
  };
  return {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    useParams,
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */useSubspaces
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySubspacesStore {
    store = new QueryStore<QuerySubspacesRequest, QuerySubspacesResponse>(queryService?.subspaces);
    subspaces(request: QuerySubspacesRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    QueryParamsStore,
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */QuerySubspacesStore
  };
};