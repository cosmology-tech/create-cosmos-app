import { ParamChange } from "./params";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries a specific parameter of a module, given its subspace and
  key.*/

  subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
  /*Subspaces queries for all registered subspaces and all keys for a subspace.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.subspaces = this.subspaces.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse> {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
    return promise.then(data => QuerySubspacesResponse.decode(new _m0.Reader(data)));
  }

}