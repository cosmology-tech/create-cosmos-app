import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType, ReactiveQueryEvidenceRequest, ReactiveQueryAllEvidenceRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Evidence queries evidence based on evidence hash. */
  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
  /** AllEvidence queries all evidence. */
  allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse> {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then(data => QueryEvidenceResponse.decode(new BinaryReader(data)));
  }
  allEvidence(request: QueryAllEvidenceRequest = {
    pagination: undefined
  }): Promise<QueryAllEvidenceResponse> {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then(data => QueryAllEvidenceResponse.decode(new BinaryReader(data)));
  }
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
export interface UseEvidenceQuery<TData> extends VueQueryParams<QueryEvidenceResponse, TData> {
  request: ReactiveQueryEvidenceRequest;
}
export interface UseAllEvidenceQuery<TData> extends VueQueryParams<QueryAllEvidenceResponse, TData> {
  request?: ReactiveQueryAllEvidenceRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useEvidence = <TData = QueryEvidenceResponse,>({
    request,
    options
  }: UseEvidenceQuery<TData>) => {
    const queryKey = ["evidenceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryEvidenceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.evidence(params);
      },
      ...options
    });
  };
  const useAllEvidence = <TData = QueryAllEvidenceResponse,>({
    request,
    options
  }: UseAllEvidenceQuery<TData>) => {
    const queryKey = ["allEvidenceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAllEvidenceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allEvidence(params);
      },
      ...options
    });
  };
  return {
    /** Evidence queries evidence based on evidence hash. */useEvidence,
    /** AllEvidence queries all evidence. */useAllEvidence
  };
};