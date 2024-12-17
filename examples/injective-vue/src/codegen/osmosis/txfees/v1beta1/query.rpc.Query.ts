import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType, ReactiveQueryFeeTokensRequest, ReactiveQueryDenomSpotPriceRequest, ReactiveQueryDenomPoolIdRequest, ReactiveQueryBaseDenomRequest } from "./query";
export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
  /** Returns the poolID for a specified denom input. */
  denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
  /** Returns a list of all base denom tokens and their corresponding pools. */
  baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }
  feeTokens(request: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponse> {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
    return promise.then(data => QueryFeeTokensResponse.decode(new BinaryReader(data)));
  }
  denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse> {
    const data = QueryDenomSpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
    return promise.then(data => QueryDenomSpotPriceResponse.decode(new BinaryReader(data)));
  }
  denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> {
    const data = QueryDenomPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
    return promise.then(data => QueryDenomPoolIdResponse.decode(new BinaryReader(data)));
  }
  baseDenom(request: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponse> {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
    return promise.then(data => QueryBaseDenomResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse> {
      return queryService.feeTokens(request);
    },
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse> {
      return queryService.denomSpotPrice(request);
    },
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> {
      return queryService.denomPoolId(request);
    },
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse> {
      return queryService.baseDenom(request);
    }
  };
};
export interface UseFeeTokensQuery<TData> extends VueQueryParams<QueryFeeTokensResponse, TData> {
  request?: ReactiveQueryFeeTokensRequest;
}
export interface UseDenomSpotPriceQuery<TData> extends VueQueryParams<QueryDenomSpotPriceResponse, TData> {
  request: ReactiveQueryDenomSpotPriceRequest;
}
export interface UseDenomPoolIdQuery<TData> extends VueQueryParams<QueryDenomPoolIdResponse, TData> {
  request: ReactiveQueryDenomPoolIdRequest;
}
export interface UseBaseDenomQuery<TData> extends VueQueryParams<QueryBaseDenomResponse, TData> {
  request?: ReactiveQueryBaseDenomRequest;
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
  const useFeeTokens = <TData = QueryFeeTokensResponse,>({
    request,
    options
  }: UseFeeTokensQuery<TData>) => {
    const queryKey = ["feeTokensQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFeeTokensResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.feeTokens(params);
      },
      ...options
    });
  };
  const useDenomSpotPrice = <TData = QueryDenomSpotPriceResponse,>({
    request,
    options
  }: UseDenomSpotPriceQuery<TData>) => {
    const queryKey = ["denomSpotPriceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomSpotPriceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomSpotPrice(params);
      },
      ...options
    });
  };
  const useDenomPoolId = <TData = QueryDenomPoolIdResponse,>({
    request,
    options
  }: UseDenomPoolIdQuery<TData>) => {
    const queryKey = ["denomPoolIdQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomPoolIdResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomPoolId(params);
      },
      ...options
    });
  };
  const useBaseDenom = <TData = QueryBaseDenomResponse,>({
    request,
    options
  }: UseBaseDenomQuery<TData>) => {
    const queryKey = ["baseDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBaseDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.baseDenom(params);
      },
      ...options
    });
  };
  return {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    useFeeTokens,
    /** DenomSpotPrice returns all spot prices by each registered token denom. */useDenomSpotPrice,
    /** Returns the poolID for a specified denom input. */useDenomPoolId,
    /** Returns a list of all base denom tokens and their corresponding pools. */useBaseDenom
  };
};