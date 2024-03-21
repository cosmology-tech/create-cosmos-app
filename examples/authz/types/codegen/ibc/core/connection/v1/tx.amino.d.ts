import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export declare const AminoConverter: {
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: string;
        toAmino: (message: MsgConnectionOpenInit) => import("./tx").MsgConnectionOpenInitAmino;
        fromAmino: (object: import("./tx").MsgConnectionOpenInitAmino) => MsgConnectionOpenInit;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: string;
        toAmino: (message: MsgConnectionOpenTry) => import("./tx").MsgConnectionOpenTryAmino;
        fromAmino: (object: import("./tx").MsgConnectionOpenTryAmino) => MsgConnectionOpenTry;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: string;
        toAmino: (message: MsgConnectionOpenAck) => import("./tx").MsgConnectionOpenAckAmino;
        fromAmino: (object: import("./tx").MsgConnectionOpenAckAmino) => MsgConnectionOpenAck;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: string;
        toAmino: (message: MsgConnectionOpenConfirm) => import("./tx").MsgConnectionOpenConfirmAmino;
        fromAmino: (object: import("./tx").MsgConnectionOpenConfirmAmino) => MsgConnectionOpenConfirm;
    };
};
