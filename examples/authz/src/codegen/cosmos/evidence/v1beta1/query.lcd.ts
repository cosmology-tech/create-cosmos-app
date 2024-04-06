//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryEvidenceRequest, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Evidence queries evidence based on evidence hash. */
  evidence = async (params: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType> => {
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.evidenceHash}`;
    return await this.req.get<QueryEvidenceResponseSDKType>(endpoint);
  };
  /* AllEvidence queries all evidence. */
  allEvidence = async (params: QueryAllEvidenceRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAllEvidenceResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.req.get<QueryAllEvidenceResponseSDKType>(endpoint, options);
  };
}