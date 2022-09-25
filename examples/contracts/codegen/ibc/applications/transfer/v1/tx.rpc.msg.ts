import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgTransfer, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  transfer(request: MsgTransfer): Promise<MsgTransferResponseSDKType>;
  /*Transfer defines a rpc handler method for MsgTransfer.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
  }

  transfer(request: MsgTransfer): Promise<MsgTransferResponseSDKType> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
    return promise.then(data => MsgTransferResponse.decode(new _m0.Reader(data)));
  }

}