import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType>;
  /*Evidence queries evidence based on evidence hash.*/

  allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponseSDKType>;
  /*AllEvidence queries all evidence.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }

  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType> {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then(data => QueryEvidenceResponse.decode(new _m0.Reader(data)));
  }

  allEvidence(request: QueryAllEvidenceRequest = {
    pagination: undefined
  }): Promise<QueryAllEvidenceResponseSDKType> {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then(data => QueryAllEvidenceResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType> {
      return queryService.evidence(request);
    },

    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponseSDKType> {
      return queryService.allEvidence(request);
    }

  };
};