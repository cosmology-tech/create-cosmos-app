import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import * as fm from "../../../grpc-gateway";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  /** TokenPairs retrieves registered token pairs */
  static tokenPairs(request: QueryTokenPairsRequest, initRequest?: fm.InitReq): Promise<QueryTokenPairsResponse> {
    return fm.fetchReq(`/evmos/erc20/v1/token_pairs?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TokenPair retrieves a registered token pair */
  static tokenPair(request: QueryTokenPairRequest, initRequest?: fm.InitReq): Promise<QueryTokenPairResponse> {
    return fm.fetchReq(`/evmos/erc20/v1/token_pairs/${request["token"]}?${fm.renderURLSearchParams({
      ...request
    }, ["token"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params retrieves the erc20 module params */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/erc20/v1/params?${fm.renderURLSearchParams({
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
  /** TokenPairs retrieves registered token pairs */
  async tokenPairs(req: QueryTokenPairsRequest, headers?: HeadersInit): Promise<QueryTokenPairsResponse> {
    return Query.tokenPairs(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TokenPair retrieves a registered token pair */
  async tokenPair(req: QueryTokenPairRequest, headers?: HeadersInit): Promise<QueryTokenPairResponse> {
    return Query.tokenPair(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params retrieves the erc20 module params */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}