import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import * as fm from "../../../../grpc-gateway";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
export class Query {
  /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
  static appVersion(request: QueryAppVersionRequest, initRequest?: fm.InitReq): Promise<QueryAppVersionResponse> {
    return fm.fetchReq(`ibc.core.port.v1.AppVersion?${fm.renderURLSearchParams({
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
  /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
  async appVersion(req: QueryAppVersionRequest, headers?: HeadersInit): Promise<QueryAppVersionResponse> {
    return Query.appVersion(req, {
      headers,
      pathPrefix: this.url
    });
  }
}