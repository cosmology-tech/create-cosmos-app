import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export declare const AminoConverter: {
    "/cosmos.group.v1.MsgCreateGroup": {
        aminoType: string;
        toAmino: (message: MsgCreateGroup) => import("./tx").MsgCreateGroupAmino;
        fromAmino: (object: import("./tx").MsgCreateGroupAmino) => MsgCreateGroup;
    };
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupMembers) => import("./tx").MsgUpdateGroupMembersAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupMembersAmino) => MsgUpdateGroupMembers;
    };
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupAdmin) => import("./tx").MsgUpdateGroupAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupAdminAmino) => MsgUpdateGroupAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupMetadata) => import("./tx").MsgUpdateGroupMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupMetadataAmino) => MsgUpdateGroupMetadata;
    };
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        aminoType: string;
        toAmino: (message: MsgCreateGroupPolicy) => import("./tx").MsgCreateGroupPolicyAmino;
        fromAmino: (object: import("./tx").MsgCreateGroupPolicyAmino) => MsgCreateGroupPolicy;
    };
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        aminoType: string;
        toAmino: (message: MsgCreateGroupWithPolicy) => import("./tx").MsgCreateGroupWithPolicyAmino;
        fromAmino: (object: import("./tx").MsgCreateGroupWithPolicyAmino) => MsgCreateGroupWithPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupPolicyAdmin) => import("./tx").MsgUpdateGroupPolicyAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupPolicyAdminAmino) => MsgUpdateGroupPolicyAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupPolicyDecisionPolicy) => import("./tx").MsgUpdateGroupPolicyDecisionPolicyAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupPolicyDecisionPolicyAmino) => MsgUpdateGroupPolicyDecisionPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupPolicyMetadata) => import("./tx").MsgUpdateGroupPolicyMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupPolicyMetadataAmino) => MsgUpdateGroupPolicyMetadata;
    };
    "/cosmos.group.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: (message: MsgSubmitProposal) => import("./tx").MsgSubmitProposalAmino;
        fromAmino: (object: import("./tx").MsgSubmitProposalAmino) => MsgSubmitProposal;
    };
    "/cosmos.group.v1.MsgWithdrawProposal": {
        aminoType: string;
        toAmino: (message: MsgWithdrawProposal) => import("./tx").MsgWithdrawProposalAmino;
        fromAmino: (object: import("./tx").MsgWithdrawProposalAmino) => MsgWithdrawProposal;
    };
    "/cosmos.group.v1.MsgVote": {
        aminoType: string;
        toAmino: (message: MsgVote) => import("./tx").MsgVoteAmino;
        fromAmino: (object: import("./tx").MsgVoteAmino) => MsgVote;
    };
    "/cosmos.group.v1.MsgExec": {
        aminoType: string;
        toAmino: (message: MsgExec) => import("./tx").MsgExecAmino;
        fromAmino: (object: import("./tx").MsgExecAmino) => MsgExec;
    };
    "/cosmos.group.v1.MsgLeaveGroup": {
        aminoType: string;
        toAmino: (message: MsgLeaveGroup) => import("./tx").MsgLeaveGroupAmino;
        fromAmino: (object: import("./tx").MsgLeaveGroupAmino) => MsgLeaveGroup;
    };
};
