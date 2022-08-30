import { ParamChange } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
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

  /* Params queries a specific parameter of a module, given its subspace and
  key. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.subspace !== "undefined") {
      options.params.subspace = params.subspace;
    }

    if (typeof params?.key !== "undefined") {
      options.params.key = params.key;
    }

    const endpoint = `cosmos/params/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint, options);
  }

  /* Subspaces queries for all registered subspaces and all keys for a subspace. */
  async subspaces(_params: QuerySubspacesRequest = {}): Promise<QuerySubspacesResponse> {
    const endpoint = `cosmos/params/v1beta1/subspaces`;
    return await this.request<QuerySubspacesResponse>(endpoint);
  }

}