import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export declare const AminoConverter: {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: string;
        toAmino: (message: MsgGrantAllowance) => import("./tx").MsgGrantAllowanceAmino;
        fromAmino: (object: import("./tx").MsgGrantAllowanceAmino) => MsgGrantAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: string;
        toAmino: (message: MsgRevokeAllowance) => import("./tx").MsgRevokeAllowanceAmino;
        fromAmino: (object: import("./tx").MsgRevokeAllowanceAmino) => MsgRevokeAllowance;
    };
};
