import { MsgTransfer } from "./tx";
export declare const AminoConverter: {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: (message: MsgTransfer) => import("./tx").MsgTransferAmino;
        fromAmino: (object: import("./tx").MsgTransferAmino) => MsgTransfer;
    };
};
