//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Evidence queries evidence based on evidence hash. */
  evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
  /** AllEvidence queries all evidence. */
  allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Evidence queries evidence based on evidence hash. */
  evidence = async (request: QueryEvidenceRequest): Promise<QueryEvidenceResponse> => {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then(data => QueryEvidenceResponse.decode(new BinaryReader(data)));
  };
  /* AllEvidence queries all evidence. */
  allEvidence = async (request: QueryAllEvidenceRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAllEvidenceResponse> => {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then(data => QueryAllEvidenceResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse> {
      return queryService.evidence(request);
    },
    allEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse> {
      return queryService.allEvidence(request);
    }
  };
};