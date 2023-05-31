import { Config, ConfigSDKType } from "./config";
import * as fm from "../../../grpc-gateway";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
export class Query {
  /** Config returns the current app config. */
  static config(request: QueryConfigRequest, initRequest?: fm.InitReq): Promise<QueryConfigResponse> {
    return fm.fetchReq(`cosmos.app.v1alpha1.Config?${fm.renderURLSearchParams({
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
  /** Config returns the current app config. */
  async config(req: QueryConfigRequest, headers?: HeadersInit): Promise<QueryConfigResponse> {
    return Query.config(req, {
      headers,
      pathPrefix: this.url
    });
  }
}