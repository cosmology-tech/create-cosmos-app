import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryTokenPairsRequest, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.tokenPairs = this.tokenPairs.bind(this);
    this.tokenPair = this.tokenPair.bind(this);
    this.params = this.params.bind(this);
  }
  /* TokenPairs retrieves registered token pairs */
  async tokenPairs(params: QueryTokenPairsRequest = {
    pagination: undefined
  }): Promise<QueryTokenPairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/erc20/v1/token_pairs`;
    return await this.req.get<QueryTokenPairsResponseSDKType>(endpoint, options);
  }
  /* TokenPair retrieves a registered token pair */
  async tokenPair(params: QueryTokenPairRequest): Promise<QueryTokenPairResponseSDKType> {
    const endpoint = `evmos/erc20/v1/token_pairs/${params.token}`;
    return await this.req.get<QueryTokenPairResponseSDKType>(endpoint);
  }
  /* Params retrieves the erc20 module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/erc20/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}