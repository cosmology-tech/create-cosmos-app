"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: "cosmos-sdk/MsgTransfer",
        toAmino: tx_1.MsgTransfer.toAmino,
        fromAmino: tx_1.MsgTransfer.fromAmino
    }
};
