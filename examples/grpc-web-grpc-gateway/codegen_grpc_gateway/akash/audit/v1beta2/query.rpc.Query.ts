import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import * as fm from "../../../grpc-gateway";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";
export class Query {
  /**
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  static allProvidersAttributes(request: QueryAllProvidersAttributesRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/audit/v1beta2/audit/attributes/list?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  static providerAttributes(request: QueryProviderAttributesRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/audit/v1beta2/audit/attributes/${request["owner"]}/list?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  static providerAuditorAttributes(request: QueryProviderAuditorRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/audit/v1beta2/audit/attributes/${request["auditor"]}/{owner}?${fm.renderURLSearchParams({
      ...request
    }, ["auditor"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  static auditorAttributes(request: QueryAuditorAttributesRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/provider/v1beta2/auditor/${request["auditor"]}/list?${fm.renderURLSearchParams({
      ...request
    }, ["auditor"])}`, {
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
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  async allProvidersAttributes(req: QueryAllProvidersAttributesRequest, headers?: HeadersInit): Promise<QueryProvidersResponse> {
    return Query.allProvidersAttributes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  async providerAttributes(req: QueryProviderAttributesRequest, headers?: HeadersInit): Promise<QueryProvidersResponse> {
    return Query.providerAttributes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  async providerAuditorAttributes(req: QueryProviderAuditorRequest, headers?: HeadersInit): Promise<QueryProvidersResponse> {
    return Query.providerAuditorAttributes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  async auditorAttributes(req: QueryAuditorAttributesRequest, headers?: HeadersInit): Promise<QueryProvidersResponse> {
    return Query.auditorAttributes(req, {
      headers,
      pathPrefix: this.url
    });
  }
}