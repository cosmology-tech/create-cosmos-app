//@ts-nocheck
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
  }
  /* GetAuthnDescriptor returns information on how to authenticate transactions in the application
   NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
   future releases of the cosmos-sdk. */
  getAuthnDescriptor = async (_params: GetAuthnDescriptorRequest = {}): Promise<GetAuthnDescriptorResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/authn`;
    return await this.req.get<GetAuthnDescriptorResponseSDKType>(endpoint);
  };
  /* GetChainDescriptor returns the description of the chain */
  getChainDescriptor = async (_params: GetChainDescriptorRequest = {}): Promise<GetChainDescriptorResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/chain`;
    return await this.req.get<GetChainDescriptorResponseSDKType>(endpoint);
  };
  /* GetCodecDescriptor returns the descriptor of the codec of the application */
  getCodecDescriptor = async (_params: GetCodecDescriptorRequest = {}): Promise<GetCodecDescriptorResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/codec`;
    return await this.req.get<GetCodecDescriptorResponseSDKType>(endpoint);
  };
  /* GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
  getConfigurationDescriptor = async (_params: GetConfigurationDescriptorRequest = {}): Promise<GetConfigurationDescriptorResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/configuration`;
    return await this.req.get<GetConfigurationDescriptorResponseSDKType>(endpoint);
  };
  /* GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
  getQueryServicesDescriptor = async (_params: GetQueryServicesDescriptorRequest = {}): Promise<GetQueryServicesDescriptorResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/query_services`;
    return await this.req.get<GetQueryServicesDescriptorResponseSDKType>(endpoint);
  };
  /* GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
  getTxDescriptor = async (_params: GetTxDescriptorRequest = {}): Promise<GetTxDescriptorResponseSDKType> => {
    const endpoint = `cosmos/base/reflection/v1beta1/app_descriptor/tx_descriptor`;
    return await this.req.get<GetTxDescriptorResponseSDKType>(endpoint);
  };
}