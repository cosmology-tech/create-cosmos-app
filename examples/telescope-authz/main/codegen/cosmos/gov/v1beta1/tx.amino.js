"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/MsgSubmitProposal",
        toAmino: tx_1.MsgSubmitProposal.toAmino,
        fromAmino: tx_1.MsgSubmitProposal.fromAmino
    },
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: "cosmos-sdk/MsgVote",
        toAmino: tx_1.MsgVote.toAmino,
        fromAmino: tx_1.MsgVote.fromAmino
    },
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: "cosmos-sdk/MsgVoteWeighted",
        toAmino: tx_1.MsgVoteWeighted.toAmino,
        fromAmino: tx_1.MsgVoteWeighted.fromAmino
    },
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: "cosmos-sdk/MsgDeposit",
        toAmino: tx_1.MsgDeposit.toAmino,
        fromAmino: tx_1.MsgDeposit.fromAmino
    }
};
