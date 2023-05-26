import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
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
export interface UseFeeTokensQuery<TData> extends ReactQueryParams<QueryFeeTokensResponse, TData> {
  request?: QueryFeeTokensRequest;
}
export interface UseDenomSpotPriceQuery<TData> extends ReactQueryParams<QueryDenomSpotPriceResponse, TData> {
  request: QueryDenomSpotPriceRequest;
}
export interface UseDenomPoolIdQuery<TData> extends ReactQueryParams<QueryDenomPoolIdResponse, TData> {
  request: QueryDenomPoolIdRequest;
}
export interface UseBaseDenomQuery<TData> extends ReactQueryParams<QueryBaseDenomResponse, TData> {
  request?: QueryBaseDenomRequest;
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
  const useFeeTokens = <TData = QueryFeeTokensResponse,>({
    request,
    options
  }: UseFeeTokensQuery<TData>) => {
    return useQuery<QueryFeeTokensResponse, Error, TData>(["feeTokensQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.feeTokens(request);
    }, options);
  };
  const useDenomSpotPrice = <TData = QueryDenomSpotPriceResponse,>({
    request,
    options
  }: UseDenomSpotPriceQuery<TData>) => {
    return useQuery<QueryDenomSpotPriceResponse, Error, TData>(["denomSpotPriceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomSpotPrice(request);
    }, options);
  };
  const useDenomPoolId = <TData = QueryDenomPoolIdResponse,>({
    request,
    options
  }: UseDenomPoolIdQuery<TData>) => {
    return useQuery<QueryDenomPoolIdResponse, Error, TData>(["denomPoolIdQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomPoolId(request);
    }, options);
  };
  const useBaseDenom = <TData = QueryBaseDenomResponse,>({
    request,
    options
  }: UseBaseDenomQuery<TData>) => {
    return useQuery<QueryBaseDenomResponse, Error, TData>(["baseDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.baseDenom(request);
    }, options);
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
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryFeeTokensStore {
    store = new QueryStore<QueryFeeTokensRequest, QueryFeeTokensResponse>(queryService?.feeTokens);
    feeTokens(request: QueryFeeTokensRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDenomSpotPriceStore {
    store = new QueryStore<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>(queryService?.denomSpotPrice);
    denomSpotPrice(request: QueryDenomSpotPriceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDenomPoolIdStore {
    store = new QueryStore<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>(queryService?.denomPoolId);
    denomPoolId(request: QueryDenomPoolIdRequest) {
      return this.store.getData(request);
    }
  }
  class QueryBaseDenomStore {
    store = new QueryStore<QueryBaseDenomRequest, QueryBaseDenomResponse>(queryService?.baseDenom);
    baseDenom(request: QueryBaseDenomRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    QueryFeeTokensStore,
    /** DenomSpotPrice returns all spot prices by each registered token denom. */QueryDenomSpotPriceStore,
    /** Returns the poolID for a specified denom input. */QueryDenomPoolIdStore,
    /** Returns a list of all base denom tokens and their corresponding pools. */QueryBaseDenomStore
  };
};