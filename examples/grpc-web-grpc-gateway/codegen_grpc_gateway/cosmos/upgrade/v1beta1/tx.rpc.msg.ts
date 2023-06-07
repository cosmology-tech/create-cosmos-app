import { Plan, PlanSDKType } from "./upgrade";
import * as fm from "../../../grpc-gateway";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export class Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  static softwareUpgrade(request: MsgSoftwareUpgrade, initRequest?: fm.InitReq): Promise<MsgSoftwareUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1/softwareUpgrade`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approvid software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  static cancelUpgrade(request: MsgCancelUpgrade, initRequest?: fm.InitReq): Promise<MsgCancelUpgradeResponse> {
    return fm.fetchReq(`/cosmos.upgrade.v1beta1/cancelUpgrade`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}