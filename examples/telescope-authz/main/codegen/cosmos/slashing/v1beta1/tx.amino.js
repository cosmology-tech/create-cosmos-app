"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: "cosmos-sdk/MsgUnjail",
        toAmino: tx_1.MsgUnjail.toAmino,
        fromAmino: tx_1.MsgUnjail.fromAmino
    }
};
