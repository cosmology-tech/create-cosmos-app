import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import * as fm from "../../../grpc-gateway";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
export class Msg {
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  static createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreateClawbackVestingAccountResponse> {
    return fm.fetchReq(`/evmos.vesting.v1/createClawbackVestingAccount`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  static clawback(request: MsgClawback, initRequest?: fm.InitReq): Promise<MsgClawbackResponse> {
    return fm.fetchReq(`/evmos.vesting.v1/clawback`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}