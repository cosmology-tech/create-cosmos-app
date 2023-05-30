import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import * as fm from "../../../grpc-gateway";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export class Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  static signProviderAttributes(request: MsgSignProviderAttributes, initRequest?: fm.InitReq): Promise<MsgSignProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta1/signProviderAttributes`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  static deleteProviderAttributes(request: MsgDeleteProviderAttributes, initRequest?: fm.InitReq): Promise<MsgDeleteProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta1/deleteProviderAttributes`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}