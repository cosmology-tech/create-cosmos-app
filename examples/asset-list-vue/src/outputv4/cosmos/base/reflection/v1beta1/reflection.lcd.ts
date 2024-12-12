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
    this.listAllInterfaces = this.listAllInterfaces.bind(this);
    this.listImplementations = this.listImplementations.bind(this);
  }
  /* ListAllInterfaces lists all the interfaces registered in the interface
   registry. */
  async listAllInterfaces(_params: ListAllInterfacesRequest = {}): Promise<ListAllInterfacesResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/interfaces`;
    return ListAllInterfacesResponse.fromSDKJSON(await this.req.get<ListAllInterfacesResponseSDKType>(endpoint));
  }
  /* ListImplementations list all the concrete types that implement a given
   interface. */
  async listImplementations(params: ListImplementationsRequest): Promise<ListImplementationsResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/interfaces/${params.interfaceName}/implementations`;
    return ListImplementationsResponse.fromSDKJSON(await this.req.get<ListImplementationsResponseSDKType>(endpoint));
  }
}