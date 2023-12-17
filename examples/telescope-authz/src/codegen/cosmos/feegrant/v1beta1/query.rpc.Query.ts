import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for address. */
  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
  /**
   * AllowancesByGranter returns all the grants given by an address
   * Since v0.46
   */
  allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Allowance returns fee granted to the grantee by the granter. */
  allowance = async (request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> => {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then(data => QueryAllowanceResponse.decode(new BinaryReader(data)));
  };
  /* Allowances returns all the grants for address. */
  allowances = async (request: QueryAllowancesRequest): Promise<QueryAllowancesResponse> => {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then(data => QueryAllowancesResponse.decode(new BinaryReader(data)));
  };
  /* AllowancesByGranter returns all the grants given by an address
   Since v0.46 */
  allowancesByGranter = async (request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse> => {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
    return promise.then(data => QueryAllowancesByGranterResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};
export interface UseAllowanceQuery<TData> extends ReactQueryParams<QueryAllowanceResponse, TData> {
  request: QueryAllowanceRequest;
}
export interface UseAllowancesQuery<TData> extends ReactQueryParams<QueryAllowancesResponse, TData> {
  request: QueryAllowancesRequest;
}
export interface UseAllowancesByGranterQuery<TData> extends ReactQueryParams<QueryAllowancesByGranterResponse, TData> {
  request: QueryAllowancesByGranterRequest;
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
  const useAllowance = <TData = QueryAllowanceResponse,>({
    request,
    options
  }: UseAllowanceQuery<TData>) => {
    return useQuery<QueryAllowanceResponse, Error, TData>(["allowanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowance(request);
    }, options);
  };
  const useAllowances = <TData = QueryAllowancesResponse,>({
    request,
    options
  }: UseAllowancesQuery<TData>) => {
    return useQuery<QueryAllowancesResponse, Error, TData>(["allowancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowances(request);
    }, options);
  };
  const useAllowancesByGranter = <TData = QueryAllowancesByGranterResponse,>({
    request,
    options
  }: UseAllowancesByGranterQuery<TData>) => {
    return useQuery<QueryAllowancesByGranterResponse, Error, TData>(["allowancesByGranterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowancesByGranter(request);
    }, options);
  };
  return {
    /** Allowance returns fee granted to the grantee by the granter. */useAllowance,
    /** Allowances returns all the grants for address. */useAllowances,
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    useAllowancesByGranter
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryAllowanceStore {
    store = new QueryStore<QueryAllowanceRequest, QueryAllowanceResponse>(queryService?.allowance);
    allowance(request: QueryAllowanceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllowancesStore {
    store = new QueryStore<QueryAllowancesRequest, QueryAllowancesResponse>(queryService?.allowances);
    allowances(request: QueryAllowancesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllowancesByGranterStore {
    store = new QueryStore<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>(queryService?.allowancesByGranter);
    allowancesByGranter(request: QueryAllowancesByGranterRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Allowance returns fee granted to the grantee by the granter. */QueryAllowanceStore,
    /** Allowances returns all the grants for address. */QueryAllowancesStore,
    /**
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    QueryAllowancesByGranterStore
  };
};