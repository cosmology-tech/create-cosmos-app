import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* DenomTrace queries a denomination trace information. */
  async denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.request<QueryDenomTraceResponse>(endpoint);
  }

  /* DenomTraces queries all denomination traces. */
  async denomTraces(params: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.request<QueryDenomTracesResponse>(endpoint, options);
  }

  /* Params queries all parameters of the ibc-transfer module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

}