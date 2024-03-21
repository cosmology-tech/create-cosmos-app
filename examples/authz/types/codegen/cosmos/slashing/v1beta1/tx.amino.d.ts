import { MsgUnjail } from "./tx";
export declare const AminoConverter: {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: (message: MsgUnjail) => import("./tx").MsgUnjailAmino;
        fromAmino: (object: import("./tx").MsgUnjailAmino) => MsgUnjail;
    };
};
