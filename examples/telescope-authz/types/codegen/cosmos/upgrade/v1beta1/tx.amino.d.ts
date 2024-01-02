import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export declare const AminoConverter: {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: string;
        toAmino: (message: MsgSoftwareUpgrade) => import("./tx").MsgSoftwareUpgradeAmino;
        fromAmino: (object: import("./tx").MsgSoftwareUpgradeAmino) => MsgSoftwareUpgrade;
    };
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: string;
        toAmino: (message: MsgCancelUpgrade) => import("./tx").MsgCancelUpgradeAmino;
        fromAmino: (object: import("./tx").MsgCancelUpgradeAmino) => MsgCancelUpgrade;
    };
};
