import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries the parameters of slashing module*/

  signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
  /*SigningInfo queries the signing info of given cons address*/

  signingInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
  /*SigningInfos queries signing info of all validators*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.signingInfo = this.signingInfo.bind(this);
    this.signingInfos = this.signingInfos.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> {
    const data = QuerySigningInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
    return promise.then(data => QuerySigningInfoResponse.decode(new _m0.Reader(data)));
  }

  signingInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse> {
    const data = QuerySigningInfosRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
    return promise.then(data => QuerySigningInfosResponse.decode(new _m0.Reader(data)));
  }

}