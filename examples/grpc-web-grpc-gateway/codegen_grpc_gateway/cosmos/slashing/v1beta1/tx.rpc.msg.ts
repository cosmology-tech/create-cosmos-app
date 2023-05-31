import * as fm from "../../../grpc-gateway";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
export class Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  static unjail(request: MsgUnjail, initRequest?: fm.InitReq): Promise<MsgUnjailResponse> {
    return fm.fetchReq(`/cosmos.slashing.v1beta1/unjail`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}