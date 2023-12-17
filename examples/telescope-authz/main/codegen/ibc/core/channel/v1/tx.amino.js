"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: "cosmos-sdk/MsgChannelOpenInit",
        toAmino: tx_1.MsgChannelOpenInit.toAmino,
        fromAmino: tx_1.MsgChannelOpenInit.fromAmino
    },
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: "cosmos-sdk/MsgChannelOpenTry",
        toAmino: tx_1.MsgChannelOpenTry.toAmino,
        fromAmino: tx_1.MsgChannelOpenTry.fromAmino
    },
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: "cosmos-sdk/MsgChannelOpenAck",
        toAmino: tx_1.MsgChannelOpenAck.toAmino,
        fromAmino: tx_1.MsgChannelOpenAck.fromAmino
    },
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
        toAmino: tx_1.MsgChannelOpenConfirm.toAmino,
        fromAmino: tx_1.MsgChannelOpenConfirm.fromAmino
    },
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: "cosmos-sdk/MsgChannelCloseInit",
        toAmino: tx_1.MsgChannelCloseInit.toAmino,
        fromAmino: tx_1.MsgChannelCloseInit.fromAmino
    },
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
        toAmino: tx_1.MsgChannelCloseConfirm.toAmino,
        fromAmino: tx_1.MsgChannelCloseConfirm.fromAmino
    },
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: "cosmos-sdk/MsgRecvPacket",
        toAmino: tx_1.MsgRecvPacket.toAmino,
        fromAmino: tx_1.MsgRecvPacket.fromAmino
    },
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: "cosmos-sdk/MsgTimeout",
        toAmino: tx_1.MsgTimeout.toAmino,
        fromAmino: tx_1.MsgTimeout.fromAmino
    },
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: "cosmos-sdk/MsgTimeoutOnClose",
        toAmino: tx_1.MsgTimeoutOnClose.toAmino,
        fromAmino: tx_1.MsgTimeoutOnClose.fromAmino
    },
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: "cosmos-sdk/MsgAcknowledgement",
        toAmino: tx_1.MsgAcknowledgement.toAmino,
        fromAmino: tx_1.MsgAcknowledgement.fromAmino
    }
};
