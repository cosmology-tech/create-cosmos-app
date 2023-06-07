import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import * as fm from "../../../grpc-gateway";
import { QueryGrantsRequest, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseSDKType } from "./query";
export class Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  static grants(request: QueryGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  static granterGrants(request: QueryGranterGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranterGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants/granter/${request["granter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["granter"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  static granteeGrants(request: QueryGranteeGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranteeGrantsResponse> {
    return fm.fetchReq(`/cosmos/authz/v1beta1/grants/grantee/${request["grantee"]}?${fm.renderURLSearchParams({
      ...request
    }, ["grantee"])}`, {
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
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  async grants(req: QueryGrantsRequest, headers?: HeadersInit): Promise<QueryGrantsResponse> {
    return Query.grants(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  async granterGrants(req: QueryGranterGrantsRequest, headers?: HeadersInit): Promise<QueryGranterGrantsResponse> {
    return Query.granterGrants(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  async granteeGrants(req: QueryGranteeGrantsRequest, headers?: HeadersInit): Promise<QueryGranteeGrantsResponse> {
    return Query.granteeGrants(req, {
      headers,
      pathPrefix: this.url
    });
  }
}