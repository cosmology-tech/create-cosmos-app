import { MsgVerifyInvariant } from "./tx";
export declare const AminoConverter: {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: (message: MsgVerifyInvariant) => import("./tx").MsgVerifyInvariantAmino;
        fromAmino: (object: import("./tx").MsgVerifyInvariantAmino) => MsgVerifyInvariant;
    };
};
