"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: "cosmos-sdk/MsgVerifyInvariant",
        toAmino: tx_1.MsgVerifyInvariant.toAmino,
        fromAmino: tx_1.MsgVerifyInvariant.fromAmino
    }
};
