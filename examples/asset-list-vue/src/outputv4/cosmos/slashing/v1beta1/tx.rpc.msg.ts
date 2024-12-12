import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
/** Msg defines the slashing Msg service. */
export interface Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.unjail = this.unjail.bind(this);
  }
  unjail(request: MsgUnjail): Promise<MsgUnjailResponse> {
    const data = MsgUnjail.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
    return promise.then(data => MsgUnjailResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};