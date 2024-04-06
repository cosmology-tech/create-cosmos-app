//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { ListAllInterfacesRequest, ListAllInterfacesRequestSDKType, ListAllInterfacesResponse, ListAllInterfacesResponseSDKType, ListImplementationsRequest, ListImplementationsRequestSDKType, ListImplementationsResponse, ListImplementationsResponseSDKType } from "./reflection";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ListAllInterfaces lists all the interfaces registered in the interface
   registry. */
  listAllInterfaces = async (_params: ListAllInterfacesRequest = {}): Promise<ListAllInterfacesResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/interfaces`;
    return await this.req.get<ListAllInterfacesResponseSDKType>(endpoint);
  };
  /* ListImplementations list all the concrete types that implement a given
   interface. */
  listImplementations = async (params: ListImplementationsRequest): Promise<ListImplementationsResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/interfaces/${params.interfaceName}/implementations`;
    return await this.req.get<ListImplementationsResponseSDKType>(endpoint);
  };
}