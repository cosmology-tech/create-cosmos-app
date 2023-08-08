import { AminoMsg } from "@cosmjs/amino";
import { MsgSubmitEvidence } from "./tx";
export interface MsgSubmitEvidenceAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitEvidence";
  value: {
    submitter: string;
    evidence: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export const AminoConverter = {
  "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
    aminoType: "cosmos-sdk/MsgSubmitEvidence",
    toAmino: ({
      submitter,
      evidence
    }: MsgSubmitEvidence): MsgSubmitEvidenceAminoType["value"] => {
      return {
        submitter,
        evidence: {
          type_url: evidence.typeUrl,
          value: evidence.value
        }
      };
    },
    fromAmino: ({
      submitter,
      evidence
    }: MsgSubmitEvidenceAminoType["value"]): MsgSubmitEvidence => {
      return {
        submitter,
        evidence: {
          typeUrl: evidence.type_url,
          value: evidence.value
        }
      };
    }
  }
};