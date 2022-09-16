import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
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

  /* Returns list of `Authorization`, granted to the grantee by the granter. */
  async grants(params: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.granter !== "undefined") {
      options.params.granter = params.granter;
    }

    if (typeof params?.grantee !== "undefined") {
      options.params.grantee = params.grantee;
    }

    if (typeof params?.msgTypeUrl !== "undefined") {
      options.params.msg_type_url = params.msgTypeUrl;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/authz/v1beta1/grants`;
    return await this.request<QueryGrantsResponse>(endpoint, options);
  }

  /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
  Since: cosmos-sdk 0.46 */
  async granterGrants(params: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/authz/v1beta1/grants/granter/${params.granter}`;
    return await this.request<QueryGranterGrantsResponse>(endpoint, options);
  }

  /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
  Since: cosmos-sdk 0.46 */
  async granteeGrants(params: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/authz/v1beta1/grants/grantee/${params.grantee}`;
    return await this.request<QueryGranteeGrantsResponse>(endpoint, options);
  }

}