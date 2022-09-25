import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponseSDKType>;
  /*SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
  counterfactual signing.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitEvidence = this.submitEvidence.bind(this);
  }

  submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponseSDKType> {
    const data = MsgSubmitEvidence.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
    return promise.then(data => MsgSubmitEvidenceResponse.decode(new _m0.Reader(data)));
  }

}