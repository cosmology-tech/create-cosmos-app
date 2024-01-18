"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: "cosmos-sdk/MsgSend",
        toAmino: tx_1.MsgSend.toAmino,
        fromAmino: tx_1.MsgSend.fromAmino
    },
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: "cosmos-sdk/MsgMultiSend",
        toAmino: tx_1.MsgMultiSend.toAmino,
        fromAmino: tx_1.MsgMultiSend.fromAmino
    }
};
