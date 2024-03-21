import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export declare const AminoConverter: {
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: string;
        toAmino: (message: MsgLockTokens) => import("./tx").MsgLockTokensAmino;
        fromAmino: (object: import("./tx").MsgLockTokensAmino) => MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: string;
        toAmino: (message: MsgBeginUnlockingAll) => import("./tx").MsgBeginUnlockingAllAmino;
        fromAmino: (object: import("./tx").MsgBeginUnlockingAllAmino) => MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: string;
        toAmino: (message: MsgBeginUnlocking) => import("./tx").MsgBeginUnlockingAmino;
        fromAmino: (object: import("./tx").MsgBeginUnlockingAmino) => MsgBeginUnlocking;
    };
    "/osmosis.lockup.MsgExtendLockup": {
        aminoType: string;
        toAmino: (message: MsgExtendLockup) => import("./tx").MsgExtendLockupAmino;
        fromAmino: (object: import("./tx").MsgExtendLockupAmino) => MsgExtendLockup;
    };
    "/osmosis.lockup.MsgForceUnlock": {
        aminoType: string;
        toAmino: (message: MsgForceUnlock) => import("./tx").MsgForceUnlockAmino;
        fromAmino: (object: import("./tx").MsgForceUnlockAmino) => MsgForceUnlock;
    };
};
