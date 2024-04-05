//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
/** Msg defines the evidence Msg service. */
export interface Msg {
  /**
   * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   * counterfactual signing.
   */
  submitEvidence(signerAddress: string, message: MsgSubmitEvidence, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   counterfactual signing. */
  submitEvidence = async (signerAddress: string, message: MsgSubmitEvidence, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitEvidence.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};