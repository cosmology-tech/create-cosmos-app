"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.group.v1.MsgCreateGroup": {
        aminoType: "cosmos-sdk/MsgCreateGroup",
        toAmino: tx_1.MsgCreateGroup.toAmino,
        fromAmino: tx_1.MsgCreateGroup.fromAmino
    },
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
        toAmino: tx_1.MsgUpdateGroupMembers.toAmino,
        fromAmino: tx_1.MsgUpdateGroupMembers.fromAmino
    },
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
        toAmino: tx_1.MsgUpdateGroupAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateGroupAdmin.fromAmino
    },
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
        toAmino: tx_1.MsgUpdateGroupMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateGroupMetadata.fromAmino
    },
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
        toAmino: tx_1.MsgCreateGroupPolicy.toAmino,
        fromAmino: tx_1.MsgCreateGroupPolicy.fromAmino
    },
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
        toAmino: tx_1.MsgCreateGroupWithPolicy.toAmino,
        fromAmino: tx_1.MsgCreateGroupWithPolicy.fromAmino
    },
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
        toAmino: tx_1.MsgUpdateGroupPolicyAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateGroupPolicyAdmin.fromAmino
    },
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
        toAmino: tx_1.MsgUpdateGroupPolicyDecisionPolicy.toAmino,
        fromAmino: tx_1.MsgUpdateGroupPolicyDecisionPolicy.fromAmino
    },
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
        toAmino: tx_1.MsgUpdateGroupPolicyMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateGroupPolicyMetadata.fromAmino
    },
    "/cosmos.group.v1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/group/MsgSubmitProposal",
        toAmino: tx_1.MsgSubmitProposal.toAmino,
        fromAmino: tx_1.MsgSubmitProposal.fromAmino
    },
    "/cosmos.group.v1.MsgWithdrawProposal": {
        aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
        toAmino: tx_1.MsgWithdrawProposal.toAmino,
        fromAmino: tx_1.MsgWithdrawProposal.fromAmino
    },
    "/cosmos.group.v1.MsgVote": {
        aminoType: "cosmos-sdk/group/MsgVote",
        toAmino: tx_1.MsgVote.toAmino,
        fromAmino: tx_1.MsgVote.fromAmino
    },
    "/cosmos.group.v1.MsgExec": {
        aminoType: "cosmos-sdk/group/MsgExec",
        toAmino: tx_1.MsgExec.toAmino,
        fromAmino: tx_1.MsgExec.fromAmino
    },
    "/cosmos.group.v1.MsgLeaveGroup": {
        aminoType: "cosmos-sdk/group/MsgLeaveGroup",
        toAmino: tx_1.MsgLeaveGroup.toAmino,
        fromAmino: tx_1.MsgLeaveGroup.fromAmino
    }
};
