import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { LCDClient } from "@cosmology/lcd";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }
  /* FeeTokens returns a list of all the whitelisted fee tokens and their
   corresponding pools. It does not include the BaseDenom, which has its own
   query endpoint */
  async feeTokens(_params: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponseSDKType> {
    const endpoint = `osmosis/txfees/v1beta1/fee_tokens`;
    return QueryFeeTokensResponse.fromSDKJSON(await this.req.get<QueryFeeTokensResponseSDKType>(endpoint));
  }
  /* DenomSpotPrice returns all spot prices by each registered token denom. */
  async denomSpotPrice(params: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/txfees/v1beta1/spot_price_by_denom`;
    return QueryDenomSpotPriceResponse.fromSDKJSON(await this.req.get<QueryDenomSpotPriceResponseSDKType>(endpoint, options));
  }
  /* Returns the poolID for a specified denom input. */
  async denomPoolId(params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType> {
    const endpoint = `osmosis/txfees/v1beta1/denom_pool_id/${params.denom}`;
    return QueryDenomPoolIdResponse.fromSDKJSON(await this.req.get<QueryDenomPoolIdResponseSDKType>(endpoint));
  }
  /* Returns a list of all base denom tokens and their corresponding pools. */
  async baseDenom(_params: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponseSDKType> {
    const endpoint = `osmosis/txfees/v1beta1/base_denom`;
    return QueryBaseDenomResponse.fromSDKJSON(await this.req.get<QueryBaseDenomResponseSDKType>(endpoint));
  }
}