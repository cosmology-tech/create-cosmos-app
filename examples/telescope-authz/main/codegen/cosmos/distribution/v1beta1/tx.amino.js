"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
        toAmino: tx_1.MsgSetWithdrawAddress.toAmino,
        fromAmino: tx_1.MsgSetWithdrawAddress.fromAmino
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
        toAmino: tx_1.MsgWithdrawDelegatorReward.toAmino,
        fromAmino: tx_1.MsgWithdrawDelegatorReward.fromAmino
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
        toAmino: tx_1.MsgWithdrawValidatorCommission.toAmino,
        fromAmino: tx_1.MsgWithdrawValidatorCommission.fromAmino
    },
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: "cosmos-sdk/MsgFundCommunityPool",
        toAmino: tx_1.MsgFundCommunityPool.toAmino,
        fromAmino: tx_1.MsgFundCommunityPool.fromAmino
    }
};
