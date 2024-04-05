//@ts-nocheck
import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
  appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* AppVersion queries an IBC Port and determines the appropriate application version to be used */
  appVersion = async (request: QueryAppVersionRequest): Promise<QueryAppVersionResponse> => {
    const data = QueryAppVersionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.port.v1.Query", "AppVersion", data);
    return promise.then(data => QueryAppVersionResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse> {
      return queryService.appVersion(request);
    }
  };
};