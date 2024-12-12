import { LCDClient } from "@cosmology/lcd";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorRequestSDKType, GetAuthnDescriptorResponse, GetAuthnDescriptorResponseSDKType, GetChainDescriptorRequest, GetChainDescriptorRequestSDKType, GetChainDescriptorResponse, GetChainDescriptorResponseSDKType, GetCodecDescriptorRequest, GetCodecDescriptorRequestSDKType, GetCodecDescriptorResponse, GetCodecDescriptorResponseSDKType, GetConfigurationDescriptorRequest, GetConfigurationDescriptorRequestSDKType, GetConfigurationDescriptorResponse, GetConfigurationDescriptorResponseSDKType, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorRequestSDKType, GetQueryServicesDescriptorResponse, GetQueryServicesDescriptorResponseSDKType, GetTxDescriptorRequest, GetTxDescriptorRequestSDKType, GetTxDescriptorResponse, GetTxDescriptorResponseSDKType } from "./reflection";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getAuthnDescriptor = this.getAuthnDescriptor.bind(this);
    this.getChainDescriptor = this.getChainDescriptor.bind(this);
    this.getCodecDescriptor = this.getCodecDescriptor.bind(this);
    this.getConfigurationDescriptor = this.getConfigurationDescriptor.bind(this);
    this.getQueryServicesDescriptor = this.getQueryServicesDescriptor.bind(this);
    this.getTxDescriptor = this.getTxDescriptor.bind(this);
  }
  /* GetAuthnDescriptor returns information on how to authenticate transactions in the application
   NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
   future releases of the cosmos-sdk. */
  async getAuthnDescriptor(_params: GetAuthnDescriptorRequest = {}): Promise<GetAuthnDescriptorResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/authn`;
    return GetAuthnDescriptorResponse.fromSDKJSON(await this.req.get<GetAuthnDescriptorResponseSDKType>(endpoint));
  }
  /* GetChainDescriptor returns the description of the chain */
  async getChainDescriptor(_params: GetChainDescriptorRequest = {}): Promise<GetChainDescriptorResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/chain`;
    return GetChainDescriptorResponse.fromSDKJSON(await this.req.get<GetChainDescriptorResponseSDKType>(endpoint));
  }
  /* GetCodecDescriptor returns the descriptor of the codec of the application */
  async getCodecDescriptor(_params: GetCodecDescriptorRequest = {}): Promise<GetCodecDescriptorResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/codec`;
    return GetCodecDescriptorResponse.fromSDKJSON(await this.req.get<GetCodecDescriptorResponseSDKType>(endpoint));
  }
  /* GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
  async getConfigurationDescriptor(_params: GetConfigurationDescriptorRequest = {}): Promise<GetConfigurationDescriptorResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/configuration`;
    return GetConfigurationDescriptorResponse.fromSDKJSON(await this.req.get<GetConfigurationDescriptorResponseSDKType>(endpoint));
  }
  /* GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
  async getQueryServicesDescriptor(_params: GetQueryServicesDescriptorRequest = {}): Promise<GetQueryServicesDescriptorResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/query_services`;
    return GetQueryServicesDescriptorResponse.fromSDKJSON(await this.req.get<GetQueryServicesDescriptorResponseSDKType>(endpoint));
  }
  /* GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
  async getTxDescriptor(_params: GetTxDescriptorRequest = {}): Promise<GetTxDescriptorResponseSDKType> {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/tx_descriptor`;
    return GetTxDescriptorResponse.fromSDKJSON(await this.req.get<GetTxDescriptorResponseSDKType>(endpoint));
  }
}