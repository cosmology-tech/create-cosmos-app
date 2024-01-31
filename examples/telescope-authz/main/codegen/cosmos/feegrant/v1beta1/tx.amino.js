"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: "cosmos-sdk/MsgGrantAllowance",
        toAmino: tx_1.MsgGrantAllowance.toAmino,
        fromAmino: tx_1.MsgGrantAllowance.fromAmino
    },
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: "cosmos-sdk/MsgRevokeAllowance",
        toAmino: tx_1.MsgRevokeAllowance.toAmino,
        fromAmino: tx_1.MsgRevokeAllowance.fromAmino
    }
};
