"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: "cosmos-sdk/MsgCreateValidator",
        toAmino: tx_1.MsgCreateValidator.toAmino,
        fromAmino: tx_1.MsgCreateValidator.fromAmino
    },
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: "cosmos-sdk/MsgEditValidator",
        toAmino: tx_1.MsgEditValidator.toAmino,
        fromAmino: tx_1.MsgEditValidator.fromAmino
    },
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: "cosmos-sdk/MsgDelegate",
        toAmino: tx_1.MsgDelegate.toAmino,
        fromAmino: tx_1.MsgDelegate.fromAmino
    },
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: "cosmos-sdk/MsgBeginRedelegate",
        toAmino: tx_1.MsgBeginRedelegate.toAmino,
        fromAmino: tx_1.MsgBeginRedelegate.fromAmino
    },
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: "cosmos-sdk/MsgUndelegate",
        toAmino: tx_1.MsgUndelegate.toAmino,
        fromAmino: tx_1.MsgUndelegate.fromAmino
    }
};
