"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.group.v1.MsgCreateGroup", tx_1.MsgCreateGroup], ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_1.MsgUpdateGroupMembers], ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_1.MsgUpdateGroupAdmin], ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_1.MsgUpdateGroupMetadata], ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_1.MsgCreateGroupPolicy], ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_1.MsgCreateGroupWithPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_1.MsgUpdateGroupPolicyAdmin], ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_1.MsgUpdateGroupPolicyDecisionPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_1.MsgUpdateGroupPolicyMetadata], ["/cosmos.group.v1.MsgSubmitProposal", tx_1.MsgSubmitProposal], ["/cosmos.group.v1.MsgWithdrawProposal", tx_1.MsgWithdrawProposal], ["/cosmos.group.v1.MsgVote", tx_1.MsgVote], ["/cosmos.group.v1.MsgExec", tx_1.MsgExec], ["/cosmos.group.v1.MsgLeaveGroup", tx_1.MsgLeaveGroup]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.encode(value).finish()
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.encode(value).finish()
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.encode(value).finish()
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.encode(value).finish()
            };
        },
        createGroupPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value: tx_1.MsgCreateGroupPolicy.encode(value).finish()
            };
        },
        createGroupWithPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value: tx_1.MsgCreateGroupWithPolicy.encode(value).finish()
            };
        },
        updateGroupPolicyAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value: tx_1.MsgUpdateGroupPolicyAdmin.encode(value).finish()
            };
        },
        updateGroupPolicyDecisionPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value: tx_1.MsgUpdateGroupPolicyDecisionPolicy.encode(value).finish()
            };
        },
        updateGroupPolicyMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value: tx_1.MsgUpdateGroupPolicyMetadata.encode(value).finish()
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.encode(value).finish()
            };
        },
        withdrawProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value: tx_1.MsgWithdrawProposal.encode(value).finish()
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value: tx_1.MsgVote.encode(value).finish()
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value: tx_1.MsgExec.encode(value).finish()
            };
        },
        leaveGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value: tx_1.MsgLeaveGroup.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value
            };
        },
        createGroupPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value
            };
        },
        createGroupWithPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value
            };
        },
        updateGroupPolicyAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value
            };
        },
        updateGroupPolicyDecisionPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value
            };
        },
        updateGroupPolicyMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value
            };
        },
        withdrawProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value
            };
        },
        leaveGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value
            };
        }
    },
    toJSON: {
        createGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.toJSON(value)
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.toJSON(value)
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.toJSON(value)
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.toJSON(value)
            };
        },
        createGroupPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value: tx_1.MsgCreateGroupPolicy.toJSON(value)
            };
        },
        createGroupWithPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value: tx_1.MsgCreateGroupWithPolicy.toJSON(value)
            };
        },
        updateGroupPolicyAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value: tx_1.MsgUpdateGroupPolicyAdmin.toJSON(value)
            };
        },
        updateGroupPolicyDecisionPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value: tx_1.MsgUpdateGroupPolicyDecisionPolicy.toJSON(value)
            };
        },
        updateGroupPolicyMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value: tx_1.MsgUpdateGroupPolicyMetadata.toJSON(value)
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.toJSON(value)
            };
        },
        withdrawProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value: tx_1.MsgWithdrawProposal.toJSON(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value: tx_1.MsgVote.toJSON(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value: tx_1.MsgExec.toJSON(value)
            };
        },
        leaveGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value: tx_1.MsgLeaveGroup.toJSON(value)
            };
        }
    },
    fromJSON: {
        createGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.fromJSON(value)
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.fromJSON(value)
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.fromJSON(value)
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.fromJSON(value)
            };
        },
        createGroupPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value: tx_1.MsgCreateGroupPolicy.fromJSON(value)
            };
        },
        createGroupWithPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value: tx_1.MsgCreateGroupWithPolicy.fromJSON(value)
            };
        },
        updateGroupPolicyAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value: tx_1.MsgUpdateGroupPolicyAdmin.fromJSON(value)
            };
        },
        updateGroupPolicyDecisionPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value: tx_1.MsgUpdateGroupPolicyDecisionPolicy.fromJSON(value)
            };
        },
        updateGroupPolicyMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value: tx_1.MsgUpdateGroupPolicyMetadata.fromJSON(value)
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.fromJSON(value)
            };
        },
        withdrawProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value: tx_1.MsgWithdrawProposal.fromJSON(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value: tx_1.MsgVote.fromJSON(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value: tx_1.MsgExec.fromJSON(value)
            };
        },
        leaveGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value: tx_1.MsgLeaveGroup.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.fromPartial(value)
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.fromPartial(value)
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.fromPartial(value)
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.fromPartial(value)
            };
        },
        createGroupPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value: tx_1.MsgCreateGroupPolicy.fromPartial(value)
            };
        },
        createGroupWithPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value: tx_1.MsgCreateGroupWithPolicy.fromPartial(value)
            };
        },
        updateGroupPolicyAdmin(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value: tx_1.MsgUpdateGroupPolicyAdmin.fromPartial(value)
            };
        },
        updateGroupPolicyDecisionPolicy(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value: tx_1.MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value)
            };
        },
        updateGroupPolicyMetadata(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value: tx_1.MsgUpdateGroupPolicyMetadata.fromPartial(value)
            };
        },
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.fromPartial(value)
            };
        },
        withdrawProposal(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value: tx_1.MsgWithdrawProposal.fromPartial(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value: tx_1.MsgVote.fromPartial(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value: tx_1.MsgExec.fromPartial(value)
            };
        },
        leaveGroup(value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value: tx_1.MsgLeaveGroup.fromPartial(value)
            };
        }
    }
};
