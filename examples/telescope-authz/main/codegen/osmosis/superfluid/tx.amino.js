"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: "osmosis/superfluid-delegate",
        toAmino: tx_1.MsgSuperfluidDelegate.toAmino,
        fromAmino: tx_1.MsgSuperfluidDelegate.fromAmino
    },
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: "osmosis/superfluid-undelegate",
        toAmino: tx_1.MsgSuperfluidUndelegate.toAmino,
        fromAmino: tx_1.MsgSuperfluidUndelegate.fromAmino
    },
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: "osmosis/superfluid-unbond-lock",
        toAmino: tx_1.MsgSuperfluidUnbondLock.toAmino,
        fromAmino: tx_1.MsgSuperfluidUnbondLock.fromAmino
    },
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: "osmosis/lock-and-superfluid-delegate",
        toAmino: tx_1.MsgLockAndSuperfluidDelegate.toAmino,
        fromAmino: tx_1.MsgLockAndSuperfluidDelegate.fromAmino
    },
    "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
        aminoType: "osmosis/unpool-whitelisted-pool",
        toAmino: tx_1.MsgUnPoolWhitelistedPool.toAmino,
        fromAmino: tx_1.MsgUnPoolWhitelistedPool.fromAmino
    }
};
