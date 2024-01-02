"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: "cosmos-sdk/MsgCreateClient",
        toAmino: tx_1.MsgCreateClient.toAmino,
        fromAmino: tx_1.MsgCreateClient.fromAmino
    },
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: "cosmos-sdk/MsgUpdateClient",
        toAmino: tx_1.MsgUpdateClient.toAmino,
        fromAmino: tx_1.MsgUpdateClient.fromAmino
    },
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: "cosmos-sdk/MsgUpgradeClient",
        toAmino: tx_1.MsgUpgradeClient.toAmino,
        fromAmino: tx_1.MsgUpgradeClient.fromAmino
    },
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
        toAmino: tx_1.MsgSubmitMisbehaviour.toAmino,
        fromAmino: tx_1.MsgSubmitMisbehaviour.fromAmino
    }
};
