"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_1.MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_1.MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_1.MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_1.MsgConnectionOpenConfirm]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: tx_1.MsgConnectionOpenInit.encode(value).finish()
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: tx_1.MsgConnectionOpenTry.encode(value).finish()
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: tx_1.MsgConnectionOpenAck.encode(value).finish()
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: tx_1.MsgConnectionOpenConfirm.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value
            };
        }
    },
    toJSON: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: tx_1.MsgConnectionOpenInit.toJSON(value)
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: tx_1.MsgConnectionOpenTry.toJSON(value)
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: tx_1.MsgConnectionOpenAck.toJSON(value)
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: tx_1.MsgConnectionOpenConfirm.toJSON(value)
            };
        }
    },
    fromJSON: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: tx_1.MsgConnectionOpenInit.fromJSON(value)
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: tx_1.MsgConnectionOpenTry.fromJSON(value)
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: tx_1.MsgConnectionOpenAck.fromJSON(value)
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: tx_1.MsgConnectionOpenConfirm.fromJSON(value)
            };
        }
    },
    fromPartial: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: tx_1.MsgConnectionOpenInit.fromPartial(value)
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: tx_1.MsgConnectionOpenTry.fromPartial(value)
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: tx_1.MsgConnectionOpenAck.fromPartial(value)
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: tx_1.MsgConnectionOpenConfirm.fromPartial(value)
            };
        }
    }
};
