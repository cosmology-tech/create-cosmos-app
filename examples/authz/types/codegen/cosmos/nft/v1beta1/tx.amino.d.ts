import { MsgSend } from "./tx";
export declare const AminoConverter: {
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: (message: MsgSend) => import("./tx").MsgSendAmino;
        fromAmino: (object: import("./tx").MsgSendAmino) => MsgSend;
    };
};
