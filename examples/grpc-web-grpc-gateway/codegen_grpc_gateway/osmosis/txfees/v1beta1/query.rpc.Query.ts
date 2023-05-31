import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as fm from "../../../grpc-gateway";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
export class Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  static feeTokens(request: QueryFeeTokensRequest, initRequest?: fm.InitReq): Promise<QueryFeeTokensResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/fee_tokens?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  static denomSpotPrice(request: QueryDenomSpotPriceRequest, initRequest?: fm.InitReq): Promise<QueryDenomSpotPriceResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/spot_price_by_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns the poolID for a specified denom input. */
  static denomPoolId(request: QueryDenomPoolIdRequest, initRequest?: fm.InitReq): Promise<QueryDenomPoolIdResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/denom_pool_id/${request["denom"]}?${fm.renderURLSearchParams({
      ...request
    }, ["denom"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns a list of all base denom tokens and their corresponding pools. */
  static baseDenom(request: QueryBaseDenomRequest, initRequest?: fm.InitReq): Promise<QueryBaseDenomResponse> {
    return fm.fetchReq(`/osmosis/txfees/v1beta1/base_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  async feeTokens(req: QueryFeeTokensRequest, headers?: HeadersInit): Promise<QueryFeeTokensResponse> {
    return Query.feeTokens(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  async denomSpotPrice(req: QueryDenomSpotPriceRequest, headers?: HeadersInit): Promise<QueryDenomSpotPriceResponse> {
    return Query.denomSpotPrice(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns the poolID for a specified denom input. */
  async denomPoolId(req: QueryDenomPoolIdRequest, headers?: HeadersInit): Promise<QueryDenomPoolIdResponse> {
    return Query.denomPoolId(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns a list of all base denom tokens and their corresponding pools. */
  async baseDenom(req: QueryBaseDenomRequest, headers?: HeadersInit): Promise<QueryBaseDenomResponse> {
    return Query.baseDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
}