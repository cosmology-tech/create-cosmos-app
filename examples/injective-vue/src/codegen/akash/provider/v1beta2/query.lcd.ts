import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Providers queries providers */
  providers = async (params: QueryProvidersRequest = {
    pagination: undefined
  }): Promise<QueryProvidersResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/provider/v1beta2/providers`;
    return QueryProvidersResponse.fromSDKJSON(await this.req.get<QueryProvidersResponseSDKType>(endpoint, options));
  };
  /* Provider queries provider details */
  provider = async (params: QueryProviderRequest): Promise<QueryProviderResponseSDKType> => {
    const endpoint = `akash/provider/v1beta2/providers/${params.owner}`;
    return QueryProviderResponse.fromSDKJSON(await this.req.get<QueryProviderResponseSDKType>(endpoint));
  };
}