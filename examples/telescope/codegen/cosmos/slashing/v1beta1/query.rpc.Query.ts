import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
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
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.signingInfo = this.signingInfo.bind(this);
    this.signingInfos = this.signingInfos.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> {
    const data = QuerySigningInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
    return promise.then(data => QuerySigningInfoResponse.decode(new _m0.Reader(data)));
  }

  signingInfos(request: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponse> {
    const data = QuerySigningInfosRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
    return promise.then(data => QuerySigningInfosResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> {
      return queryService.signingInfo(request);
    },

    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse> {
      return queryService.signingInfos(request);
    }

  };
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
    /** Params queries the parameters of slashing module */
    useParams,

    /** SigningInfo queries the signing info of given cons address */
    useSigningInfo,

    /** SigningInfos queries signing info of all validators */
    useSigningInfos
  };
};