"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_1.MsgCreateVestingAccount], ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", tx_1.MsgCreatePermanentLockedAccount], ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", tx_1.MsgCreatePeriodicVestingAccount]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.encode(value).finish()
            };
        },
        createPermanentLockedAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: tx_1.MsgCreatePermanentLockedAccount.encode(value).finish()
            };
        },
        createPeriodicVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: tx_1.MsgCreatePeriodicVestingAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value
            };
        },
        createPermanentLockedAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value
            };
        },
        createPeriodicVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value
            };
        }
    },
    toJSON: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.toJSON(value)
            };
        },
        createPermanentLockedAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: tx_1.MsgCreatePermanentLockedAccount.toJSON(value)
            };
        },
        createPeriodicVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: tx_1.MsgCreatePeriodicVestingAccount.toJSON(value)
            };
        }
    },
    fromJSON: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.fromJSON(value)
            };
        },
        createPermanentLockedAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: tx_1.MsgCreatePermanentLockedAccount.fromJSON(value)
            };
        },
        createPeriodicVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: tx_1.MsgCreatePeriodicVestingAccount.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.fromPartial(value)
            };
        },
        createPermanentLockedAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: tx_1.MsgCreatePermanentLockedAccount.fromPartial(value)
            };
        },
        createPeriodicVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: tx_1.MsgCreatePeriodicVestingAccount.fromPartial(value)
            };
        }
    }
};
