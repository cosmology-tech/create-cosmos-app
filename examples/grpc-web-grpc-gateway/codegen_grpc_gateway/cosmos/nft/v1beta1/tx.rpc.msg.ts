import * as fm from "../../../grpc-gateway";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
export class Msg {
  /** Send defines a method to send a nft from one account to another account. */
  static send(request: MsgSend, initRequest?: fm.InitReq): Promise<MsgSendResponse> {
    return fm.fetchReq(`/cosmos.nft.v1beta1/send`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}