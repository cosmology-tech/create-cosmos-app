import { Config } from "./config";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryConfigRequest, QueryConfigResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
  /*Config returns the current app config.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.config = this.config.bind(this);
  }

  config(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new _m0.Reader(data)));
  }

}