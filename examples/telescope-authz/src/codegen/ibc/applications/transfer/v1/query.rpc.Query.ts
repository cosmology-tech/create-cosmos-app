import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { ReactQueryParams } from "../../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../../mobx";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* DenomTrace queries a denomination trace information. */
  denomTrace = async (request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> => {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then(data => QueryDenomTraceResponse.decode(new BinaryReader(data)));
  };
  /* DenomTraces queries all denomination traces. */
  denomTraces = async (request: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> => {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then(data => QueryDenomTracesResponse.decode(new BinaryReader(data)));
  };
  /* Params queries all parameters of the ibc-transfer module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};
export interface UseDenomTraceQuery<TData> extends ReactQueryParams<QueryDenomTraceResponse, TData> {
  request: QueryDenomTraceRequest;
}
export interface UseDenomTracesQuery<TData> extends ReactQueryParams<QueryDenomTracesResponse, TData> {
  request?: QueryDenomTracesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
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
  const useDenomTrace = <TData = QueryDenomTraceResponse,>({
    request,
    options
  }: UseDenomTraceQuery<TData>) => {
    return useQuery<QueryDenomTraceResponse, Error, TData>(["denomTraceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTrace(request);
    }, options);
  };
  const useDenomTraces = <TData = QueryDenomTracesResponse,>({
    request,
    options
  }: UseDenomTracesQuery<TData>) => {
    return useQuery<QueryDenomTracesResponse, Error, TData>(["denomTracesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTraces(request);
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
  return {
    /** DenomTrace queries a denomination trace information. */useDenomTrace,
    /** DenomTraces queries all denomination traces. */useDenomTraces,
    /** Params queries all parameters of the ibc-transfer module. */useParams
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryDenomTraceStore {
    store = new QueryStore<QueryDenomTraceRequest, QueryDenomTraceResponse>(queryService?.denomTrace);
    denomTrace(request: QueryDenomTraceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDenomTracesStore {
    store = new QueryStore<QueryDenomTracesRequest, QueryDenomTracesResponse>(queryService?.denomTraces);
    denomTraces(request: QueryDenomTracesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** DenomTrace queries a denomination trace information. */QueryDenomTraceStore,
    /** DenomTraces queries all denomination traces. */QueryDenomTracesStore,
    /** Params queries all parameters of the ibc-transfer module. */QueryParamsStore
  };
};