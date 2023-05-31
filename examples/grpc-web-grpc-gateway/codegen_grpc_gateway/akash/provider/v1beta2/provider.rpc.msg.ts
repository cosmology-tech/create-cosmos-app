import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import * as fm from "../../../grpc-gateway";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
export class Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  static createProvider(request: MsgCreateProvider, initRequest?: fm.InitReq): Promise<MsgCreateProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta2/createProvider`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  static updateProvider(request: MsgUpdateProvider, initRequest?: fm.InitReq): Promise<MsgUpdateProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta2/updateProvider`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  static deleteProvider(request: MsgDeleteProvider, initRequest?: fm.InitReq): Promise<MsgDeleteProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta2/deleteProvider`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}