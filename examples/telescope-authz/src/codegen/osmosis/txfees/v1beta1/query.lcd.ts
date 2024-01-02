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
  }
  /* FeeTokens returns a list of all the whitelisted fee tokens and their
   corresponding pools. It does not include the BaseDenom, which has its own
   query endpoint */
  feeTokens = async (_params: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponseSDKType> => {
    const endpoint = `osmosis/txfees/v1beta1/fee_tokens`;
    return await this.req.get<QueryFeeTokensResponseSDKType>(endpoint);
  };
  /* DenomSpotPrice returns all spot prices by each registered token denom. */
  denomSpotPrice = async (params: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/txfees/v1beta1/spot_price_by_denom`;
    return await this.req.get<QueryDenomSpotPriceResponseSDKType>(endpoint, options);
  };
  /* Returns the poolID for a specified denom input. */
  denomPoolId = async (params: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponseSDKType> => {
    const endpoint = `osmosis/txfees/v1beta1/denom_pool_id/${params.denom}`;
    return await this.req.get<QueryDenomPoolIdResponseSDKType>(endpoint);
  };
  /* Returns a list of all base denom tokens and their corresponding pools. */
  baseDenom = async (_params: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponseSDKType> => {
    const endpoint = `osmosis/txfees/v1beta1/base_denom`;
    return await this.req.get<QueryBaseDenomResponseSDKType>(endpoint);
  };
}