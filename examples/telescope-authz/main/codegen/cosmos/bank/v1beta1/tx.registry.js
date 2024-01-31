"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.bank.v1beta1.MsgSend", tx_1.MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", tx_1.MsgMultiSend]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: tx_1.MsgSend.encode(value).finish()
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: tx_1.MsgMultiSend.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value
            };
        }
    },
    toJSON: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: tx_1.MsgSend.toJSON(value)
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: tx_1.MsgMultiSend.toJSON(value)
            };
        }
    },
    fromJSON: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: tx_1.MsgSend.fromJSON(value)
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: tx_1.MsgMultiSend.fromJSON(value)
            };
        }
    },
    fromPartial: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: tx_1.MsgSend.fromPartial(value)
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: tx_1.MsgMultiSend.fromPartial(value)
            };
        }
    }
};
