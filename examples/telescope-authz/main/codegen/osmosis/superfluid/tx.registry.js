"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.superfluid.MsgSuperfluidDelegate", tx_1.MsgSuperfluidDelegate], ["/osmosis.superfluid.MsgSuperfluidUndelegate", tx_1.MsgSuperfluidUndelegate], ["/osmosis.superfluid.MsgSuperfluidUnbondLock", tx_1.MsgSuperfluidUnbondLock], ["/osmosis.superfluid.MsgLockAndSuperfluidDelegate", tx_1.MsgLockAndSuperfluidDelegate], ["/osmosis.superfluid.MsgUnPoolWhitelistedPool", tx_1.MsgUnPoolWhitelistedPool]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: tx_1.MsgSuperfluidDelegate.encode(value).finish()
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: tx_1.MsgSuperfluidUndelegate.encode(value).finish()
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: tx_1.MsgSuperfluidUnbondLock.encode(value).finish()
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: tx_1.MsgLockAndSuperfluidDelegate.encode(value).finish()
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: tx_1.MsgUnPoolWhitelistedPool.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value
            };
        }
    },
    toJSON: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: tx_1.MsgSuperfluidDelegate.toJSON(value)
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: tx_1.MsgSuperfluidUndelegate.toJSON(value)
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: tx_1.MsgSuperfluidUnbondLock.toJSON(value)
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: tx_1.MsgLockAndSuperfluidDelegate.toJSON(value)
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: tx_1.MsgUnPoolWhitelistedPool.toJSON(value)
            };
        }
    },
    fromJSON: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: tx_1.MsgSuperfluidDelegate.fromJSON(value)
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: tx_1.MsgSuperfluidUndelegate.fromJSON(value)
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: tx_1.MsgSuperfluidUnbondLock.fromJSON(value)
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: tx_1.MsgLockAndSuperfluidDelegate.fromJSON(value)
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: tx_1.MsgUnPoolWhitelistedPool.fromJSON(value)
            };
        }
    },
    fromPartial: {
        superfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
                value: tx_1.MsgSuperfluidDelegate.fromPartial(value)
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
                value: tx_1.MsgSuperfluidUndelegate.fromPartial(value)
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
                value: tx_1.MsgSuperfluidUnbondLock.fromPartial(value)
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
                value: tx_1.MsgLockAndSuperfluidDelegate.fromPartial(value)
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
                value: tx_1.MsgUnPoolWhitelistedPool.fromPartial(value)
            };
        }
    }
};
