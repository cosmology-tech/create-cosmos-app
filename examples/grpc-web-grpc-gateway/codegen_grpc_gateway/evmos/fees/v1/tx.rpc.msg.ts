import * as fm from "../../../grpc-gateway";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
export class Msg {
  /**
   * RegisterDevFeeInfo is used by a deployer to register a new contract for
   * receiving transaction fees
   */
  static registerDevFeeInfo(request: MsgRegisterDevFeeInfo, initRequest?: fm.InitReq): Promise<MsgRegisterDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1/registerDevFeeInfo`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * CancelDevFeeInfo is used by a deployer to cancel a registered contract
   * and stop receiving transaction fees
   */
  static cancelDevFeeInfo(request: MsgCancelDevFeeInfo, initRequest?: fm.InitReq): Promise<MsgCancelDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1/cancelDevFeeInfo`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  static updateDevFeeInfo(request: MsgUpdateDevFeeInfo, initRequest?: fm.InitReq): Promise<MsgUpdateDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1/updateDevFeeInfo`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}