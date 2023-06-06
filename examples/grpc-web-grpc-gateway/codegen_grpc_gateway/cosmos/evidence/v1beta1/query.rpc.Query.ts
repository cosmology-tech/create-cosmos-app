import * as fm from "../../../grpc-gateway";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export class Query {
  /** Evidence queries evidence based on evidence hash. */
  static evidence(request: QueryEvidenceRequest, initRequest?: fm.InitReq): Promise<QueryEvidenceResponse> {
    return fm.fetchReq(`/cosmos/evidence/v1beta1/evidence/${request["evidence_hash"]}?${fm.renderURLSearchParams({
      ...request
    }, ["evidence_hash"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AllEvidence queries all evidence. */
  static allEvidence(request: QueryAllEvidenceRequest, initRequest?: fm.InitReq): Promise<QueryAllEvidenceResponse> {
    return fm.fetchReq(`/cosmos/evidence/v1beta1/evidence?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Evidence queries evidence based on evidence hash. */
  async evidence(req: QueryEvidenceRequest, headers?: HeadersInit): Promise<QueryEvidenceResponse> {
    return Query.evidence(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AllEvidence queries all evidence. */
  async allEvidence(req: QueryAllEvidenceRequest, headers?: HeadersInit): Promise<QueryAllEvidenceResponse> {
    return Query.allEvidence(req, {
      headers,
      pathPrefix: this.url
    });
  }
}