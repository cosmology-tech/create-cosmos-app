import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export declare const AminoConverter: {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: (message: MsgCreateClient) => import("./tx").MsgCreateClientAmino;
        fromAmino: (object: import("./tx").MsgCreateClientAmino) => MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: (message: MsgUpdateClient) => import("./tx").MsgUpdateClientAmino;
        fromAmino: (object: import("./tx").MsgUpdateClientAmino) => MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: (message: MsgUpgradeClient) => import("./tx").MsgUpgradeClientAmino;
        fromAmino: (object: import("./tx").MsgUpgradeClientAmino) => MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: (message: MsgSubmitMisbehaviour) => import("./tx").MsgSubmitMisbehaviourAmino;
        fromAmino: (object: import("./tx").MsgSubmitMisbehaviourAmino) => MsgSubmitMisbehaviour;
    };
};
