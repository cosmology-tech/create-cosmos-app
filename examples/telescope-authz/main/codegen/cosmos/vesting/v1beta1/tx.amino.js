"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreateVestingAccount",
        toAmino: tx_1.MsgCreateVestingAccount.toAmino,
        fromAmino: tx_1.MsgCreateVestingAccount.fromAmino
    },
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccount",
        toAmino: tx_1.MsgCreatePermanentLockedAccount.toAmino,
        fromAmino: tx_1.MsgCreatePermanentLockedAccount.fromAmino
    },
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
        toAmino: tx_1.MsgCreatePeriodicVestingAccount.toAmino,
        fromAmino: tx_1.MsgCreatePeriodicVestingAccount.fromAmino
    }
};
