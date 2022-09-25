import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSend, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  send(request: MsgSend): Promise<MsgSendResponseSDKType>;
  /*Send defines a method to send a nft from one account to another account.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.send = this.send.bind(this);
  }

  send(request: MsgSend): Promise<MsgSendResponseSDKType> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new _m0.Reader(data)));
  }

}