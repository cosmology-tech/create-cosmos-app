//@ts-nocheck
import { Plan, PlanSDKType } from "./upgrade";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
/** Msg defines the upgrade Msg service. */
export interface Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  softwareUpgrade(signerAddress: string, message: MsgSoftwareUpgrade, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approvid software upgrade.
   * 
   * Since: cosmos-sdk 0.46
   */
  cancelUpgrade(signerAddress: string, message: MsgCancelUpgrade, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SoftwareUpgrade is a governance operation for initiating a software upgrade.
  
   Since: cosmos-sdk 0.46 */
  softwareUpgrade = async (signerAddress: string, message: MsgSoftwareUpgrade, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSoftwareUpgrade.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CancelUpgrade is a governance operation for cancelling a previously
   approvid software upgrade.
  
   Since: cosmos-sdk 0.46 */
  cancelUpgrade = async (signerAddress: string, message: MsgCancelUpgrade, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelUpgrade.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};