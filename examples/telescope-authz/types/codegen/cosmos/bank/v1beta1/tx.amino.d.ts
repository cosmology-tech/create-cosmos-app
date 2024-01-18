import { MsgSend, MsgMultiSend } from "./tx";
export declare const AminoConverter: {
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: (message: MsgSend) => import("./tx").MsgSendAmino;
        fromAmino: (object: import("./tx").MsgSendAmino) => MsgSend;
    };
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: string;
        toAmino: (message: MsgMultiSend) => import("./tx").MsgMultiSendAmino;
        fromAmino: (object: import("./tx").MsgMultiSendAmino) => MsgMultiSend;
    };
};
