import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params queries a specific parameter of a module, given its subspace and
  key.*/

  subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponseSDKType>;
  /*Subspaces queries for all registered subspaces and all keys for a subspace.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.subspaces = this.subspaces.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  subspaces(request: QuerySubspacesRequest = {}): Promise<QuerySubspacesResponseSDKType> {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
    return promise.then(data => QuerySubspacesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponseSDKType> {
      return queryService.subspaces(request);
    }

  };
};