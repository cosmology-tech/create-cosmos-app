import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataRequestSDKType, QueryDenomAuthorityMetadataResponse, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorRequestSDKType, QueryDenomsFromCreatorResponse, QueryDenomsFromCreatorResponseSDKType, ReactiveQueryParamsRequest, ReactiveQueryDenomAuthorityMetadataRequest, ReactiveQueryDenomsFromCreatorRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * DenomAuthorityMetadata defines a gRPC query method for fetching
   * DenomAuthorityMetadata for a particular denom.
   */
  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */
  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
    const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
    return promise.then(data => QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data)));
  }
  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
    return promise.then(data => QueryDenomsFromCreatorResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
      return queryService.denomAuthorityMetadata(request);
    },
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
      return queryService.denomsFromCreator(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseDenomAuthorityMetadataQuery<TData> extends VueQueryParams<QueryDenomAuthorityMetadataResponse, TData> {
  request: ReactiveQueryDenomAuthorityMetadataRequest;
}
export interface UseDenomsFromCreatorQuery<TData> extends VueQueryParams<QueryDenomsFromCreatorResponse, TData> {
  request: ReactiveQueryDenomsFromCreatorRequest;
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
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    const queryKey = ["paramsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.params(params);
      },
      ...options
    });
  };
  const useDenomAuthorityMetadata = <TData = QueryDenomAuthorityMetadataResponse,>({
    request,
    options
  }: UseDenomAuthorityMetadataQuery<TData>) => {
    const queryKey = ["denomAuthorityMetadataQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomAuthorityMetadataResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomAuthorityMetadata(params);
      },
      ...options
    });
  };
  const useDenomsFromCreator = <TData = QueryDenomsFromCreatorResponse,>({
    request,
    options
  }: UseDenomsFromCreatorQuery<TData>) => {
    const queryKey = ["denomsFromCreatorQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomsFromCreatorResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomsFromCreator(params);
      },
      ...options
    });
  };
  return {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    useParams,
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    useDenomAuthorityMetadata,
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    useDenomsFromCreator
  };
};