import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgTransfer, MsgTransferResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
  /*Transfer defines a rpc handler method for MsgTransfer.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
  }

  transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
    return promise.then(data => MsgTransferResponse.decode(new _m0.Reader(data)));
  }

}