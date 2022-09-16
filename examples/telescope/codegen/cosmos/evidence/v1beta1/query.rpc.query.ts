import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
  /*Evidence queries evidence based on evidence hash.*/

  allEvidence(request: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
  /*AllEvidence queries all evidence.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }

  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse> {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then(data => QueryEvidenceResponse.decode(new _m0.Reader(data)));
  }

  allEvidence(request: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse> {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then(data => QueryAllEvidenceResponse.decode(new _m0.Reader(data)));
  }

}