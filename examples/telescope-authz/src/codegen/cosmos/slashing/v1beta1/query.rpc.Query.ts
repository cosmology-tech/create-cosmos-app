import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Params queries the parameters of slashing module */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** SigningInfo queries the signing info of given cons address */
  signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
  /** SigningInfos queries signing info of all validators */
  signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries the parameters of slashing module */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* SigningInfo queries the signing info of given cons address */
  signingInfo = async (request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> => {
    const data = QuerySigningInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
    return promise.then(data => QuerySigningInfoResponse.decode(new BinaryReader(data)));
  };
  /* SigningInfos queries signing info of all validators */
  signingInfos = async (request: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponse> => {
    const data = QuerySigningInfosRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
    return promise.then(data => QuerySigningInfosResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseSigningInfoQuery<TData> extends ReactQueryParams<QuerySigningInfoResponse, TData> {
  request: QuerySigningInfoRequest;
}
export interface UseSigningInfosQuery<TData> extends ReactQueryParams<QuerySigningInfosResponse, TData> {
  request?: QuerySigningInfosRequest;
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
  const useSigningInfo = <TData = QuerySigningInfoResponse,>({
    request,
    options
  }: UseSigningInfoQuery<TData>) => {
    return useQuery<QuerySigningInfoResponse, Error, TData>(["signingInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.signingInfo(request);
    }, options);
  };
  const useSigningInfos = <TData = QuerySigningInfosResponse,>({
    request,
    options
  }: UseSigningInfosQuery<TData>) => {
    return useQuery<QuerySigningInfosResponse, Error, TData>(["signingInfosQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.signingInfos(request);
    }, options);
  };
  return {
    /** Params queries the parameters of slashing module */useParams,
    /** SigningInfo queries the signing info of given cons address */useSigningInfo,
    /** SigningInfos queries signing info of all validators */useSigningInfos
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
  class QuerySigningInfoStore {
    store = new QueryStore<QuerySigningInfoRequest, QuerySigningInfoResponse>(queryService?.signingInfo);
    signingInfo(request: QuerySigningInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySigningInfosStore {
    store = new QueryStore<QuerySigningInfosRequest, QuerySigningInfosResponse>(queryService?.signingInfos);
    signingInfos(request: QuerySigningInfosRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Params queries the parameters of slashing module */QueryParamsStore,
    /** SigningInfo queries the signing info of given cons address */QuerySigningInfoStore,
    /** SigningInfos queries signing info of all validators */QuerySigningInfosStore
  };
};