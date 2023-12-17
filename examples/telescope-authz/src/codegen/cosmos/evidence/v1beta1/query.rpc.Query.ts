import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Evidence queries evidence based on evidence hash. */
  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
  /** AllEvidence queries all evidence. */
  allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Evidence queries evidence based on evidence hash. */
  evidence = async (request: QueryEvidenceRequest): Promise<QueryEvidenceResponse> => {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then(data => QueryEvidenceResponse.decode(new BinaryReader(data)));
  };
  /* AllEvidence queries all evidence. */
  allEvidence = async (request: QueryAllEvidenceRequest = {
    pagination: undefined
  }): Promise<QueryAllEvidenceResponse> => {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then(data => QueryAllEvidenceResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse> {
      return queryService.evidence(request);
    },
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse> {
      return queryService.allEvidence(request);
    }
  };
};
export interface UseEvidenceQuery<TData> extends ReactQueryParams<QueryEvidenceResponse, TData> {
  request: QueryEvidenceRequest;
}
export interface UseAllEvidenceQuery<TData> extends ReactQueryParams<QueryAllEvidenceResponse, TData> {
  request?: QueryAllEvidenceRequest;
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
  const useEvidence = <TData = QueryEvidenceResponse,>({
    request,
    options
  }: UseEvidenceQuery<TData>) => {
    return useQuery<QueryEvidenceResponse, Error, TData>(["evidenceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.evidence(request);
    }, options);
  };
  const useAllEvidence = <TData = QueryAllEvidenceResponse,>({
    request,
    options
  }: UseAllEvidenceQuery<TData>) => {
    return useQuery<QueryAllEvidenceResponse, Error, TData>(["allEvidenceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allEvidence(request);
    }, options);
  };
  return {
    /** Evidence queries evidence based on evidence hash. */useEvidence,
    /** AllEvidence queries all evidence. */useAllEvidence
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryEvidenceStore {
    store = new QueryStore<QueryEvidenceRequest, QueryEvidenceResponse>(queryService?.evidence);
    evidence(request: QueryEvidenceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllEvidenceStore {
    store = new QueryStore<QueryAllEvidenceRequest, QueryAllEvidenceResponse>(queryService?.allEvidence);
    allEvidence(request: QueryAllEvidenceRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Evidence queries evidence based on evidence hash. */QueryEvidenceStore,
    /** AllEvidence queries all evidence. */QueryAllEvidenceStore
  };
};