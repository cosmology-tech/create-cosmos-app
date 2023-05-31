import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as fm from "../../../grpc-gateway";
import { MsgSubmitEvidence, MsgSubmitEvidenceSDKType, MsgSubmitEvidenceResponse, MsgSubmitEvidenceResponseSDKType } from "./tx";
export class Msg {
  /**
   * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   * counterfactual signing.
   */
  static submitEvidence(request: MsgSubmitEvidence, initRequest?: fm.InitReq): Promise<MsgSubmitEvidenceResponse> {
    return fm.fetchReq(`/cosmos.evidence.v1beta1/submitEvidence`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}