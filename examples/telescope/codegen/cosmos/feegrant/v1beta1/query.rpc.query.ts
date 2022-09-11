import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./feegrant";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  /*Allowance returns fee granted to the grantee by the granter.*/

  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
  /*Allowances returns all the grants for address.*/

  allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
  /*AllowancesByGranter returns all the grants given by an address
  Since v0.46*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }

  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then(data => QueryAllowanceResponse.decode(new _m0.Reader(data)));
  }

  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse> {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then(data => QueryAllowancesResponse.decode(new _m0.Reader(data)));
  }

  allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse> {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
    return promise.then(data => QueryAllowancesByGranterResponse.decode(new _m0.Reader(data)));
  }

}