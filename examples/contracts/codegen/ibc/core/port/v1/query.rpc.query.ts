import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAppVersionRequest, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponseSDKType>;
  /*AppVersion queries an IBC Port and determines the appropriate application version to be used*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.appVersion = this.appVersion.bind(this);
  }

  appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponseSDKType> {
    const data = QueryAppVersionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.port.v1.Query", "AppVersion", data);
    return promise.then(data => QueryAppVersionResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponseSDKType> {
      return queryService.appVersion(request);
    }

  };
};