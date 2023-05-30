import { ParamChange, ParamChangeSDKType } from "./params";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
export class Query {
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/params/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Subspaces queries for all registered subspaces and all keys for a subspace. */
  static subspaces(request: QuerySubspacesRequest, initRequest?: fm.InitReq): Promise<QuerySubspacesResponse> {
    return fm.fetchReq(`/cosmos/params/v1beta1/subspaces?${fm.renderURLSearchParams({
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
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Subspaces queries for all registered subspaces and all keys for a subspace. */
  async subspaces(req: QuerySubspacesRequest, headers?: HeadersInit): Promise<QuerySubspacesResponse> {
    return Query.subspaces(req, {
      headers,
      pathPrefix: this.url
    });
  }
}