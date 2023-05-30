import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./feegrant";
import * as fm from "../../../grpc-gateway";
import { QueryAllowanceRequest, QueryAllowanceRequestSDKType, QueryAllowanceResponse, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesRequestSDKType, QueryAllowancesResponse, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterRequestSDKType, QueryAllowancesByGranterResponse, QueryAllowancesByGranterResponseSDKType } from "./query";
export class Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  static allowance(request: QueryAllowanceRequest, initRequest?: fm.InitReq): Promise<QueryAllowanceResponse> {
    return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowance/${request["granter"]}/{grantee}?${fm.renderURLSearchParams({
      ...request
    }, ["granter"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Allowances returns all the grants for address. */
  static allowances(request: QueryAllowancesRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesResponse> {
    return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowances/${request["grantee"]}?${fm.renderURLSearchParams({
      ...request
    }, ["grantee"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * AllowancesByGranter returns all the grants given by an address
   * Since v0.46
   */
  static allowancesByGranter(request: QueryAllowancesByGranterRequest, initRequest?: fm.InitReq): Promise<QueryAllowancesByGranterResponse> {
    return fm.fetchReq(`/cosmos/feegrant/v1beta1/issued/${request["granter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["granter"])}`, {
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
  /** Allowance returns fee granted to the grantee by the granter. */
  async allowance(req: QueryAllowanceRequest, headers?: HeadersInit): Promise<QueryAllowanceResponse> {
    return Query.allowance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Allowances returns all the grants for address. */
  async allowances(req: QueryAllowancesRequest, headers?: HeadersInit): Promise<QueryAllowancesResponse> {
    return Query.allowances(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * AllowancesByGranter returns all the grants given by an address
   * Since v0.46
   */
  async allowancesByGranter(req: QueryAllowancesByGranterRequest, headers?: HeadersInit): Promise<QueryAllowancesByGranterResponse> {
    return Query.allowancesByGranter(req, {
      headers,
      pathPrefix: this.url
    });
  }
}