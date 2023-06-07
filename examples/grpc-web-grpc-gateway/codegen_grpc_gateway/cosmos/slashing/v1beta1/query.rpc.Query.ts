import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";
export class Query {
  /** Params queries the parameters of slashing module */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/slashing/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** SigningInfo queries the signing info of given cons address */
  static signingInfo(request: QuerySigningInfoRequest, initRequest?: fm.InitReq): Promise<QuerySigningInfoResponse> {
    return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos/${request["cons_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["cons_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** SigningInfos queries signing info of all validators */
  static signingInfos(request: QuerySigningInfosRequest, initRequest?: fm.InitReq): Promise<QuerySigningInfosResponse> {
    return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos?${fm.renderURLSearchParams({
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
  /** Params queries the parameters of slashing module */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** SigningInfo queries the signing info of given cons address */
  async signingInfo(req: QuerySigningInfoRequest, headers?: HeadersInit): Promise<QuerySigningInfoResponse> {
    return Query.signingInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** SigningInfos queries signing info of all validators */
  async signingInfos(req: QuerySigningInfosRequest, headers?: HeadersInit): Promise<QuerySigningInfosResponse> {
    return Query.signingInfos(req, {
      headers,
      pathPrefix: this.url
    });
  }
}