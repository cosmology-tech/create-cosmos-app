"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.lockup.MsgLockTokens", tx_1.MsgLockTokens], ["/osmosis.lockup.MsgBeginUnlockingAll", tx_1.MsgBeginUnlockingAll], ["/osmosis.lockup.MsgBeginUnlocking", tx_1.MsgBeginUnlocking], ["/osmosis.lockup.MsgExtendLockup", tx_1.MsgExtendLockup], ["/osmosis.lockup.MsgForceUnlock", tx_1.MsgForceUnlock]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        lockTokens(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgLockTokens",
                value: tx_1.MsgLockTokens.encode(value).finish()
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
                value: tx_1.MsgBeginUnlockingAll.encode(value).finish()
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
                value: tx_1.MsgBeginUnlocking.encode(value).finish()
            };
        },
        extendLockup(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgExtendLockup",
                value: tx_1.MsgExtendLockup.encode(value).finish()
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgForceUnlock",
                value: tx_1.MsgForceUnlock.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        lockTokens(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgLockTokens",
                value
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
                value
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
                value
            };
        },
        extendLockup(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgExtendLockup",
                value
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgForceUnlock",
                value
            };
        }
    },
    toJSON: {
        lockTokens(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgLockTokens",
                value: tx_1.MsgLockTokens.toJSON(value)
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
                value: tx_1.MsgBeginUnlockingAll.toJSON(value)
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
                value: tx_1.MsgBeginUnlocking.toJSON(value)
            };
        },
        extendLockup(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgExtendLockup",
                value: tx_1.MsgExtendLockup.toJSON(value)
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgForceUnlock",
                value: tx_1.MsgForceUnlock.toJSON(value)
            };
        }
    },
    fromJSON: {
        lockTokens(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgLockTokens",
                value: tx_1.MsgLockTokens.fromJSON(value)
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
                value: tx_1.MsgBeginUnlockingAll.fromJSON(value)
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
                value: tx_1.MsgBeginUnlocking.fromJSON(value)
            };
        },
        extendLockup(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgExtendLockup",
                value: tx_1.MsgExtendLockup.fromJSON(value)
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgForceUnlock",
                value: tx_1.MsgForceUnlock.fromJSON(value)
            };
        }
    },
    fromPartial: {
        lockTokens(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgLockTokens",
                value: tx_1.MsgLockTokens.fromPartial(value)
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
                value: tx_1.MsgBeginUnlockingAll.fromPartial(value)
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
                value: tx_1.MsgBeginUnlocking.fromPartial(value)
            };
        },
        extendLockup(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgExtendLockup",
                value: tx_1.MsgExtendLockup.fromPartial(value)
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: "/osmosis.lockup.MsgForceUnlock",
                value: tx_1.MsgForceUnlock.fromPartial(value)
            };
        }
    }
};
