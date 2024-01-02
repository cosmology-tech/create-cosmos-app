"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.staking.v1beta1.MsgCreateValidator", tx_1.MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", tx_1.MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", tx_1.MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", tx_1.MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", tx_1.MsgUndelegate]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: tx_1.MsgCreateValidator.encode(value).finish()
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: tx_1.MsgEditValidator.encode(value).finish()
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: tx_1.MsgDelegate.encode(value).finish()
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: tx_1.MsgBeginRedelegate.encode(value).finish()
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: tx_1.MsgUndelegate.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value
            };
        }
    },
    toJSON: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: tx_1.MsgCreateValidator.toJSON(value)
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: tx_1.MsgEditValidator.toJSON(value)
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: tx_1.MsgDelegate.toJSON(value)
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: tx_1.MsgBeginRedelegate.toJSON(value)
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: tx_1.MsgUndelegate.toJSON(value)
            };
        }
    },
    fromJSON: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: tx_1.MsgCreateValidator.fromJSON(value)
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: tx_1.MsgEditValidator.fromJSON(value)
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: tx_1.MsgDelegate.fromJSON(value)
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: tx_1.MsgBeginRedelegate.fromJSON(value)
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: tx_1.MsgUndelegate.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: tx_1.MsgCreateValidator.fromPartial(value)
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: tx_1.MsgEditValidator.fromPartial(value)
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: tx_1.MsgDelegate.fromPartial(value)
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: tx_1.MsgBeginRedelegate.fromPartial(value)
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: tx_1.MsgUndelegate.fromPartial(value)
            };
        }
    }
};
