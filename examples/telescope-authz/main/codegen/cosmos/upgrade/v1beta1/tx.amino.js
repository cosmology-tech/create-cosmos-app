"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
        toAmino: tx_1.MsgSoftwareUpgrade.toAmino,
        fromAmino: tx_1.MsgSoftwareUpgrade.fromAmino
    },
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: "cosmos-sdk/MsgCancelUpgrade",
        toAmino: tx_1.MsgCancelUpgrade.toAmino,
        fromAmino: tx_1.MsgCancelUpgrade.fromAmino
    }
};
