import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import * as fm from "../../../../grpc-gateway";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";
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