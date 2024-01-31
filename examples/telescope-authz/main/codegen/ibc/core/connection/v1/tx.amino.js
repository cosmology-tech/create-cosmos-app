"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: "cosmos-sdk/MsgConnectionOpenInit",
        toAmino: tx_1.MsgConnectionOpenInit.toAmino,
        fromAmino: tx_1.MsgConnectionOpenInit.fromAmino
    },
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: "cosmos-sdk/MsgConnectionOpenTry",
        toAmino: tx_1.MsgConnectionOpenTry.toAmino,
        fromAmino: tx_1.MsgConnectionOpenTry.fromAmino
    },
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: "cosmos-sdk/MsgConnectionOpenAck",
        toAmino: tx_1.MsgConnectionOpenAck.toAmino,
        fromAmino: tx_1.MsgConnectionOpenAck.fromAmino
    },
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
        toAmino: tx_1.MsgConnectionOpenConfirm.toAmino,
        fromAmino: tx_1.MsgConnectionOpenConfirm.fromAmino
    }
};
