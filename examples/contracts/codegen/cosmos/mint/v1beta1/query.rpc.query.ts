import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params returns the total set of minting parameters.*/

  inflation(request?: QueryInflationRequest): Promise<QueryInflationResponseSDKType>;
  /*Inflation returns the current minting inflation value.*/

  annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType>;
  /*AnnualProvisions current minting annual provisions value.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  inflation(request: QueryInflationRequest = {}): Promise<QueryInflationResponseSDKType> {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
    return promise.then(data => QueryInflationResponse.decode(new _m0.Reader(data)));
  }

  annualProvisions(request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponseSDKType> {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponseSDKType> {
      return queryService.inflation(request);
    },

    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponseSDKType> {
      return queryService.annualProvisions(request);
    }

  };
};