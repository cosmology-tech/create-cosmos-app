import * as fm from "../../../../grpc-gateway";
import { MsgTransfer, MsgTransferResponse } from "./tx";
export class Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  static transfer(request: MsgTransfer, initRequest?: fm.InitReq): Promise<MsgTransferResponse> {
    return fm.fetchReq(`/ibc.applications.transfer.v1/transfer`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}