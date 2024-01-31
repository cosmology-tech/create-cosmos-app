"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: "osmosis/lockup/lock-tokens",
        toAmino: tx_1.MsgLockTokens.toAmino,
        fromAmino: tx_1.MsgLockTokens.fromAmino
    },
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: "osmosis/lockup/begin-unlock-tokens",
        toAmino: tx_1.MsgBeginUnlockingAll.toAmino,
        fromAmino: tx_1.MsgBeginUnlockingAll.fromAmino
    },
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: "osmosis/lockup/begin-unlock-period-lock",
        toAmino: tx_1.MsgBeginUnlocking.toAmino,
        fromAmino: tx_1.MsgBeginUnlocking.fromAmino
    },
    "/osmosis.lockup.MsgExtendLockup": {
        aminoType: "osmosis/lockup/extend-lockup",
        toAmino: tx_1.MsgExtendLockup.toAmino,
        fromAmino: tx_1.MsgExtendLockup.fromAmino
    },
    "/osmosis.lockup.MsgForceUnlock": {
        aminoType: "osmosis/lockup/force-unlock",
        toAmino: tx_1.MsgForceUnlock.toAmino,
        fromAmino: tx_1.MsgForceUnlock.fromAmino
    }
};
