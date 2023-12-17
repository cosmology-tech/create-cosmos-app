"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/ibc.core.channel.v1.MsgChannelOpenInit", tx_1.MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_1.MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_1.MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_1.MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_1.MsgChannelCloseInit], ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_1.MsgChannelCloseConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", tx_1.MsgRecvPacket], ["/ibc.core.channel.v1.MsgTimeout", tx_1.MsgTimeout], ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_1.MsgTimeoutOnClose], ["/ibc.core.channel.v1.MsgAcknowledgement", tx_1.MsgAcknowledgement]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        channelOpenInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: tx_1.MsgChannelOpenInit.encode(value).finish()
            };
        },
        channelOpenTry(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: tx_1.MsgChannelOpenTry.encode(value).finish()
            };
        },
        channelOpenAck(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: tx_1.MsgChannelOpenAck.encode(value).finish()
            };
        },
        channelOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: tx_1.MsgChannelOpenConfirm.encode(value).finish()
            };
        },
        channelCloseInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: tx_1.MsgChannelCloseInit.encode(value).finish()
            };
        },
        channelCloseConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: tx_1.MsgChannelCloseConfirm.encode(value).finish()
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value: tx_1.MsgRecvPacket.encode(value).finish()
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value: tx_1.MsgTimeout.encode(value).finish()
            };
        },
        timeoutOnClose(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: tx_1.MsgTimeoutOnClose.encode(value).finish()
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: tx_1.MsgAcknowledgement.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        channelOpenInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value
            };
        },
        channelOpenTry(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value
            };
        },
        channelOpenAck(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value
            };
        },
        channelOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value
            };
        },
        channelCloseInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value
            };
        },
        channelCloseConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value
            };
        },
        timeoutOnClose(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value
            };
        }
    },
    toJSON: {
        channelOpenInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: tx_1.MsgChannelOpenInit.toJSON(value)
            };
        },
        channelOpenTry(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: tx_1.MsgChannelOpenTry.toJSON(value)
            };
        },
        channelOpenAck(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: tx_1.MsgChannelOpenAck.toJSON(value)
            };
        },
        channelOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: tx_1.MsgChannelOpenConfirm.toJSON(value)
            };
        },
        channelCloseInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: tx_1.MsgChannelCloseInit.toJSON(value)
            };
        },
        channelCloseConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: tx_1.MsgChannelCloseConfirm.toJSON(value)
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value: tx_1.MsgRecvPacket.toJSON(value)
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value: tx_1.MsgTimeout.toJSON(value)
            };
        },
        timeoutOnClose(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: tx_1.MsgTimeoutOnClose.toJSON(value)
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: tx_1.MsgAcknowledgement.toJSON(value)
            };
        }
    },
    fromJSON: {
        channelOpenInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: tx_1.MsgChannelOpenInit.fromJSON(value)
            };
        },
        channelOpenTry(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: tx_1.MsgChannelOpenTry.fromJSON(value)
            };
        },
        channelOpenAck(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: tx_1.MsgChannelOpenAck.fromJSON(value)
            };
        },
        channelOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: tx_1.MsgChannelOpenConfirm.fromJSON(value)
            };
        },
        channelCloseInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: tx_1.MsgChannelCloseInit.fromJSON(value)
            };
        },
        channelCloseConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: tx_1.MsgChannelCloseConfirm.fromJSON(value)
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value: tx_1.MsgRecvPacket.fromJSON(value)
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value: tx_1.MsgTimeout.fromJSON(value)
            };
        },
        timeoutOnClose(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: tx_1.MsgTimeoutOnClose.fromJSON(value)
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: tx_1.MsgAcknowledgement.fromJSON(value)
            };
        }
    },
    fromPartial: {
        channelOpenInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: tx_1.MsgChannelOpenInit.fromPartial(value)
            };
        },
        channelOpenTry(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: tx_1.MsgChannelOpenTry.fromPartial(value)
            };
        },
        channelOpenAck(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: tx_1.MsgChannelOpenAck.fromPartial(value)
            };
        },
        channelOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: tx_1.MsgChannelOpenConfirm.fromPartial(value)
            };
        },
        channelCloseInit(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: tx_1.MsgChannelCloseInit.fromPartial(value)
            };
        },
        channelCloseConfirm(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: tx_1.MsgChannelCloseConfirm.fromPartial(value)
            };
        },
        recvPacket(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value: tx_1.MsgRecvPacket.fromPartial(value)
            };
        },
        timeout(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value: tx_1.MsgTimeout.fromPartial(value)
            };
        },
        timeoutOnClose(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: tx_1.MsgTimeoutOnClose.fromPartial(value)
            };
        },
        acknowledgement(value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: tx_1.MsgAcknowledgement.fromPartial(value)
            };
        }
    }
};
