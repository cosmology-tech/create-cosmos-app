import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
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
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* FeeTokens returns a list of all the whitelisted fee tokens and their
   corresponding pools. It does not include the BaseDenom, which has its own
   query endpoint */
  feeTokens = async (request: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponse> => {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
    return promise.then(data => QueryFeeTokensResponse.decode(new BinaryReader(data)));
  };
  /* DenomSpotPrice returns all spot prices by each registered token denom. */
  denomSpotPrice = async (request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse> => {
    const data = QueryDenomSpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
    return promise.then(data => QueryDenomSpotPriceResponse.decode(new BinaryReader(data)));
  };
  /* Returns the poolID for a specified denom input. */
  denomPoolId = async (request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> => {
    const data = QueryDenomPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
    return promise.then(data => QueryDenomPoolIdResponse.decode(new BinaryReader(data)));
  };
  /* Returns a list of all base denom tokens and their corresponding pools. */
  baseDenom = async (request: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponse> => {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
    return promise.then(data => QueryBaseDenomResponse.decode(new BinaryReader(data)));
  };
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