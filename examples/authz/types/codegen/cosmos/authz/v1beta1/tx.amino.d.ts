import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export declare const AminoConverter: {
    "/cosmos.authz.v1beta1.MsgGrant": {
        aminoType: string;
        toAmino: (message: MsgGrant) => import("./tx").MsgGrantAmino;
        fromAmino: (object: import("./tx").MsgGrantAmino) => MsgGrant;
    };
    "/cosmos.authz.v1beta1.MsgExec": {
        aminoType: string;
        toAmino: (message: MsgExec) => import("./tx").MsgExecAmino;
        fromAmino: (object: import("./tx").MsgExecAmino) => MsgExec;
    };
    "/cosmos.authz.v1beta1.MsgRevoke": {
        aminoType: string;
        toAmino: (message: MsgRevoke) => import("./tx").MsgRevokeAmino;
        fromAmino: (object: import("./tx").MsgRevokeAmino) => MsgRevoke;
    };
};
