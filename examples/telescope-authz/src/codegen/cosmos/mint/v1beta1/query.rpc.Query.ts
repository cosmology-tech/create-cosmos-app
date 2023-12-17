import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */
  inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params returns the total set of minting parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Inflation returns the current minting inflation value. */
  inflation = async (request: QueryInflationRequest = {}): Promise<QueryInflationResponse> => {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
    return promise.then(data => QueryInflationResponse.decode(new BinaryReader(data)));
  };
  /* AnnualProvisions current minting annual provisions value. */
  annualProvisions = async (request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> => {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse> {
      return queryService.inflation(request);
    },
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse> {
      return queryService.annualProvisions(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseInflationQuery<TData> extends ReactQueryParams<QueryInflationResponse, TData> {
  request?: QueryInflationRequest;
}
export interface UseAnnualProvisionsQuery<TData> extends ReactQueryParams<QueryAnnualProvisionsResponse, TData> {
  request?: QueryAnnualProvisionsRequest;
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
  const useInflation = <TData = QueryInflationResponse,>({
    request,
    options
  }: UseInflationQuery<TData>) => {
    return useQuery<QueryInflationResponse, Error, TData>(["inflationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inflation(request);
    }, options);
  };
  const useAnnualProvisions = <TData = QueryAnnualProvisionsResponse,>({
    request,
    options
  }: UseAnnualProvisionsQuery<TData>) => {
    return useQuery<QueryAnnualProvisionsResponse, Error, TData>(["annualProvisionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.annualProvisions(request);
    }, options);
  };
  return {
    /** Params returns the total set of minting parameters. */useParams,
    /** Inflation returns the current minting inflation value. */useInflation,
    /** AnnualProvisions current minting annual provisions value. */useAnnualProvisions
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
  class QueryInflationStore {
    store = new QueryStore<QueryInflationRequest, QueryInflationResponse>(queryService?.inflation);
    inflation(request: QueryInflationRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAnnualProvisionsStore {
    store = new QueryStore<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>(queryService?.annualProvisions);
    annualProvisions(request: QueryAnnualProvisionsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Params returns the total set of minting parameters. */QueryParamsStore,
    /** Inflation returns the current minting inflation value. */QueryInflationStore,
    /** AnnualProvisions current minting annual provisions value. */QueryAnnualProvisionsStore
  };
};