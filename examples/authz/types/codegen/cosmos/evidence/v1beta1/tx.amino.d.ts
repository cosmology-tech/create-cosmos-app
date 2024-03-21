import { MsgSubmitEvidence } from "./tx";
export declare const AminoConverter: {
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: string;
        toAmino: (message: MsgSubmitEvidence) => import("./tx").MsgSubmitEvidenceAmino;
        fromAmino: (object: import("./tx").MsgSubmitEvidenceAmino) => MsgSubmitEvidence;
    };
};
