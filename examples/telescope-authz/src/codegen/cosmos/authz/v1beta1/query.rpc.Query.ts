import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Returns list of `Authorization`, granted to the grantee by the granter. */
  grants = async (request: QueryGrantsRequest): Promise<QueryGrantsResponse> => {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then(data => QueryGrantsResponse.decode(new BinaryReader(data)));
  };
  /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
   Since: cosmos-sdk 0.46 */
  granterGrants = async (request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> => {
    const data = QueryGranterGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
    return promise.then(data => QueryGranterGrantsResponse.decode(new BinaryReader(data)));
  };
  /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
   Since: cosmos-sdk 0.46 */
  granteeGrants = async (request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> => {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
    return promise.then(data => QueryGranteeGrantsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
      return queryService.grants(request);
    },
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
      return queryService.granterGrants(request);
    },
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
      return queryService.granteeGrants(request);
    }
  };
};
export interface UseGrantsQuery<TData> extends ReactQueryParams<QueryGrantsResponse, TData> {
  request: QueryGrantsRequest;
}
export interface UseGranterGrantsQuery<TData> extends ReactQueryParams<QueryGranterGrantsResponse, TData> {
  request: QueryGranterGrantsRequest;
}
export interface UseGranteeGrantsQuery<TData> extends ReactQueryParams<QueryGranteeGrantsResponse, TData> {
  request: QueryGranteeGrantsRequest;
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
  const useGrants = <TData = QueryGrantsResponse,>({
    request,
    options
  }: UseGrantsQuery<TData>) => {
    return useQuery<QueryGrantsResponse, Error, TData>(["grantsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.grants(request);
    }, options);
  };
  const useGranterGrants = <TData = QueryGranterGrantsResponse,>({
    request,
    options
  }: UseGranterGrantsQuery<TData>) => {
    return useQuery<QueryGranterGrantsResponse, Error, TData>(["granterGrantsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.granterGrants(request);
    }, options);
  };
  const useGranteeGrants = <TData = QueryGranteeGrantsResponse,>({
    request,
    options
  }: UseGranteeGrantsQuery<TData>) => {
    return useQuery<QueryGranteeGrantsResponse, Error, TData>(["granteeGrantsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.granteeGrants(request);
    }, options);
  };
  return {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */useGrants,
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranterGrants,
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranteeGrants
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryGrantsStore {
    store = new QueryStore<QueryGrantsRequest, QueryGrantsResponse>(queryService?.grants);
    grants(request: QueryGrantsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGranterGrantsStore {
    store = new QueryStore<QueryGranterGrantsRequest, QueryGranterGrantsResponse>(queryService?.granterGrants);
    granterGrants(request: QueryGranterGrantsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGranteeGrantsStore {
    store = new QueryStore<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>(queryService?.granteeGrants);
    granteeGrants(request: QueryGranteeGrantsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */QueryGrantsStore,
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     * 
     * Since: cosmos-sdk 0.46
     */
    QueryGranterGrantsStore,
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     * 
     * Since: cosmos-sdk 0.46
     */
    QueryGranteeGrantsStore
  };
};