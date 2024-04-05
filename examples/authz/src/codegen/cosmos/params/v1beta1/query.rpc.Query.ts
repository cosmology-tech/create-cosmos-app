//@ts-nocheck
import { ParamChange, ParamChangeSDKType } from "./params";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Subspaces queries for all registered subspaces and all keys for a subspace. */
  subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries a specific parameter of a module, given its subspace and
   key. */
  params = async (request: QueryParamsRequest): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Subspaces queries for all registered subspaces and all keys for a subspace. */
  subspaces = async (request: QuerySubspacesRequest = {}): Promise<QuerySubspacesResponse> => {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
    return promise.then(data => QuerySubspacesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse> {
      return queryService.subspaces(request);
    }
  };
};