import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EpochProvisions returns the current minting epoch provisions value. */
  epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.epochProvisions = this.epochProvisions.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  epochProvisions(request: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponse> {
    const data = QueryEpochProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "EpochProvisions", data);
    return promise.then(data => QueryEpochProvisionsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse> {
      return queryService.epochProvisions(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseEpochProvisionsQuery<TData> extends ReactQueryParams<QueryEpochProvisionsResponse, TData> {
  request?: QueryEpochProvisionsRequest;
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
  const useEpochProvisions = <TData = QueryEpochProvisionsResponse,>({
    request,
    options
  }: UseEpochProvisionsQuery<TData>) => {
    return useQuery<QueryEpochProvisionsResponse, Error, TData>(["epochProvisionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochProvisions(request);
    }, options);
  };
  return {
    /** Params returns the total set of minting parameters. */useParams,
    /** EpochProvisions returns the current minting epoch provisions value. */useEpochProvisions
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
  class QueryEpochProvisionsStore {
    store = new QueryStore<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>(queryService?.epochProvisions);
    epochProvisions(request: QueryEpochProvisionsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Params returns the total set of minting parameters. */QueryParamsStore,
    /** EpochProvisions returns the current minting epoch provisions value. */QueryEpochProvisionsStore
  };
};