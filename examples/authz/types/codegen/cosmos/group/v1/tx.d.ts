import { Member, MemberAmino, MemberSDKType, VoteOption, ThresholdDecisionPolicy, ThresholdDecisionPolicyProtoMsg, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicyProtoMsg, PercentageDecisionPolicySDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare const ExecSDKType: typeof Exec;
export declare const ExecAmino: typeof Exec;
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
export interface MsgCreateGroupProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgCreateGroup";
    value: Uint8Array;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** members defines the group members. */
    members?: MemberAmino[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata?: string;
}
export interface MsgCreateGroupAminoMsg {
    type: "cosmos-sdk/MsgCreateGroup";
    value: MsgCreateGroupAmino;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupSDKType {
    admin: string;
    members: MemberSDKType[];
    metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    groupId: bigint;
}
export interface MsgCreateGroupResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse";
    value: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseAmino {
    /** group_id is the unique ID of the newly created group. */
    group_id?: string;
}
export interface MsgCreateGroupResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateGroupResponse";
    value: MsgCreateGroupResponseAmino;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseSDKType {
    group_id: bigint;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    memberUpdates: Member[];
}
export interface MsgUpdateGroupMembersProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers";
    value: Uint8Array;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    member_updates?: MemberAmino[];
}
export interface MsgUpdateGroupMembersAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupMembers";
    value: MsgUpdateGroupMembersAmino;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersSDKType {
    admin: string;
    group_id: bigint;
    member_updates: MemberSDKType[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
export interface MsgUpdateGroupMembersResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseAmino {
}
export interface MsgUpdateGroupMembersResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupMembersResponse";
    value: MsgUpdateGroupMembersResponseAmino;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** new_admin is the group new admin account address. */
    newAdmin: string;
}
export interface MsgUpdateGroupAdminProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin";
    value: Uint8Array;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminAmino {
    /** admin is the current account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** new_admin is the group new admin account address. */
    new_admin?: string;
}
export interface MsgUpdateGroupAdminAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupAdmin";
    value: MsgUpdateGroupAdminAmino;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminSDKType {
    admin: string;
    group_id: bigint;
    new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
export interface MsgUpdateGroupAdminResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseAmino {
}
export interface MsgUpdateGroupAdminResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupAdminResponse";
    value: MsgUpdateGroupAdminResponseAmino;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
export interface MsgUpdateGroupMetadataProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata";
    value: Uint8Array;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** metadata is the updated group's metadata. */
    metadata?: string;
}
export interface MsgUpdateGroupMetadataAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupMetadata";
    value: MsgUpdateGroupMetadataAmino;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataSDKType {
    admin: string;
    group_id: bigint;
    metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
export interface MsgUpdateGroupMetadataResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseAmino {
}
export interface MsgUpdateGroupMetadataResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupMetadataResponse";
    value: MsgUpdateGroupMetadataResponseAmino;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy?: ThresholdDecisionPolicy | PercentageDecisionPolicy | Any | undefined;
}
export interface MsgCreateGroupPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy";
    value: Uint8Array;
}
export type MsgCreateGroupPolicyEncoded = Omit<MsgCreateGroupPolicy, "decisionPolicy"> & {
    /** decision_policy specifies the group policy's decision policy. */ decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicyAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata?: string;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: AnyAmino | undefined;
}
export interface MsgCreateGroupPolicyAminoMsg {
    type: "cosmos-sdk/MsgCreateGroupPolicy";
    value: MsgCreateGroupPolicyAmino;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicySDKType {
    admin: string;
    group_id: bigint;
    metadata: string;
    decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
    /** address is the account address of the newly created group policy. */
    address: string;
}
export interface MsgCreateGroupPolicyResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse";
    value: Uint8Array;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseAmino {
    /** address is the account address of the newly created group policy. */
    address?: string;
}
export interface MsgCreateGroupPolicyResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateGroupPolicyResponse";
    value: MsgCreateGroupPolicyResponseAmino;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseSDKType {
    address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of the group policy. */
    address: string;
    /** new_admin is the new group policy admin. */
    newAdmin: string;
}
export interface MsgUpdateGroupPolicyAdminProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin";
    value: Uint8Array;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** address is the account address of the group policy. */
    address?: string;
    /** new_admin is the new group policy admin. */
    new_admin?: string;
}
export interface MsgUpdateGroupPolicyAdminAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
    value: MsgUpdateGroupPolicyAdminAmino;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminSDKType {
    admin: string;
    address: string;
    new_admin: string;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    groupMetadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    groupPolicyMetadata: string;
    /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
    groupPolicyAsAdmin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy?: ThresholdDecisionPolicy | PercentageDecisionPolicy | Any | undefined;
}
export interface MsgCreateGroupWithPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy";
    value: Uint8Array;
}
export type MsgCreateGroupWithPolicyEncoded = Omit<MsgCreateGroupWithPolicy, "decisionPolicy"> & {
    /** decision_policy specifies the group policy's decision policy. */ decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicyAmino {
    /** admin is the account address of the group and group policy admin. */
    admin?: string;
    /** members defines the group members. */
    members?: MemberAmino[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    group_metadata?: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    group_policy_metadata?: string;
    /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
    group_policy_as_admin?: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: AnyAmino | undefined;
}
export interface MsgCreateGroupWithPolicyAminoMsg {
    type: "cosmos-sdk/MsgCreateGroupWithPolicy";
    value: MsgCreateGroupWithPolicyAmino;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicySDKType {
    admin: string;
    members: MemberSDKType[];
    group_metadata: string;
    group_policy_metadata: string;
    group_policy_as_admin: boolean;
    decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
    /** group_id is the unique ID of the newly created group with policy. */
    groupId: bigint;
    /** group_policy_address is the account address of the newly created group policy. */
    groupPolicyAddress: string;
}
export interface MsgCreateGroupWithPolicyResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse";
    value: Uint8Array;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseAmino {
    /** group_id is the unique ID of the newly created group with policy. */
    group_id?: string;
    /** group_policy_address is the account address of the newly created group policy. */
    group_policy_address?: string;
}
export interface MsgCreateGroupWithPolicyResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse";
    value: MsgCreateGroupWithPolicyResponseAmino;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseSDKType {
    group_id: bigint;
    group_policy_address: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
}
export interface MsgUpdateGroupPolicyAdminResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseAmino {
}
export interface MsgUpdateGroupPolicyAdminResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse";
    value: MsgUpdateGroupPolicyAdminResponseAmino;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseSDKType {
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** decision_policy is the updated group policy's decision policy. */
    decisionPolicy?: ThresholdDecisionPolicy | PercentageDecisionPolicy | Any | undefined;
}
export interface MsgUpdateGroupPolicyDecisionPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy";
    value: Uint8Array;
}
export type MsgUpdateGroupPolicyDecisionPolicyEncoded = Omit<MsgUpdateGroupPolicyDecisionPolicy, "decisionPolicy"> & {
    /** decision_policy is the updated group policy's decision policy. */ decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicyAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** address is the account address of group policy. */
    address?: string;
    /** decision_policy is the updated group policy's decision policy. */
    decision_policy?: AnyAmino | undefined;
}
export interface MsgUpdateGroupPolicyDecisionPolicyAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy";
    value: MsgUpdateGroupPolicyDecisionPolicyAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicySDKType {
    admin: string;
    address: string;
    decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAmino {
}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse";
    value: MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** metadata is the updated group policy metadata. */
    metadata: string;
}
export interface MsgUpdateGroupPolicyMetadataProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata";
    value: Uint8Array;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataAmino {
    /** admin is the account address of the group admin. */
    admin?: string;
    /** address is the account address of group policy. */
    address?: string;
    /** metadata is the updated group policy metadata. */
    metadata?: string;
}
export interface MsgUpdateGroupPolicyMetadataAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
    value: MsgUpdateGroupPolicyMetadataAmino;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataSDKType {
    admin: string;
    address: string;
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
}
export interface MsgUpdateGroupPolicyMetadataResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse";
    value: Uint8Array;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseAmino {
}
export interface MsgUpdateGroupPolicyMetadataResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse";
    value: MsgUpdateGroupPolicyMetadataResponseAmino;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseSDKType {
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
    /** address is the account address of group policy. */
    address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
export interface MsgSubmitProposalProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposal";
    value: Uint8Array;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalAmino {
    /** address is the account address of group policy. */
    address?: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers?: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata?: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages?: AnyAmino[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec?: Exec;
}
export interface MsgSubmitProposalAminoMsg {
    type: "cosmos-sdk/group/MsgSubmitProposal";
    value: MsgSubmitProposalAmino;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalSDKType {
    address: string;
    proposers: string[];
    metadata: string;
    messages: AnySDKType[];
    exec: Exec;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse";
    value: Uint8Array;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitProposalResponse";
    value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: bigint;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
export interface MsgWithdrawProposalProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposal";
    value: Uint8Array;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address?: string;
}
export interface MsgWithdrawProposalAminoMsg {
    type: "cosmos-sdk/group/MsgWithdrawProposal";
    value: MsgWithdrawProposalAmino;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalSDKType {
    proposal_id: bigint;
    address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
}
export interface MsgWithdrawProposalResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse";
    value: Uint8Array;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseAmino {
}
export interface MsgWithdrawProposalResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawProposalResponse";
    value: MsgWithdrawProposalResponseAmino;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseSDKType {
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
export interface MsgVoteProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgVote";
    value: Uint8Array;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
    /** voter is the voter account address. */
    voter?: string;
    /** option is the voter's choice on the proposal. */
    option?: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata?: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec?: Exec;
}
export interface MsgVoteAminoMsg {
    type: "cosmos-sdk/group/MsgVote";
    value: MsgVoteAmino;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteSDKType {
    proposal_id: bigint;
    voter: string;
    option: VoteOption;
    metadata: string;
    exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
export interface MsgVoteResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgVoteResponse";
    value: Uint8Array;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseAmino {
}
export interface MsgVoteResponseAminoMsg {
    type: "cosmos-sdk/MsgVoteResponse";
    value: MsgVoteResponseAmino;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
    /** signer is the account address used to execute the proposal. */
    signer: string;
}
export interface MsgExecProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgExec";
    value: Uint8Array;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
    /** signer is the account address used to execute the proposal. */
    signer?: string;
}
export interface MsgExecAminoMsg {
    type: "cosmos-sdk/group/MsgExec";
    value: MsgExecAmino;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecSDKType {
    proposal_id: bigint;
    signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
}
export interface MsgExecResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgExecResponse";
    value: Uint8Array;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseAmino {
}
export interface MsgExecResponseAminoMsg {
    type: "cosmos-sdk/MsgExecResponse";
    value: MsgExecResponseAmino;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
}
export interface MsgLeaveGroupProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroup";
    value: Uint8Array;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupAmino {
    /** address is the account address of the group member. */
    address?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
}
export interface MsgLeaveGroupAminoMsg {
    type: "cosmos-sdk/group/MsgLeaveGroup";
    value: MsgLeaveGroupAmino;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupSDKType {
    address: string;
    group_id: bigint;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
}
export interface MsgLeaveGroupResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse";
    value: Uint8Array;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseAmino {
}
export interface MsgLeaveGroupResponseAminoMsg {
    type: "cosmos-sdk/MsgLeaveGroupResponse";
    value: MsgLeaveGroupResponseAmino;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseSDKType {
}
export declare const MsgCreateGroup: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateGroup;
    isSDK(o: any): o is MsgCreateGroupSDKType;
    isAmino(o: any): o is MsgCreateGroupAmino;
    encode(message: MsgCreateGroup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroup;
    fromJSON(object: any): MsgCreateGroup;
    toJSON(message: MsgCreateGroup): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup;
    fromSDK(object: MsgCreateGroupSDKType): MsgCreateGroup;
    toSDK(message: MsgCreateGroup): MsgCreateGroupSDKType;
    fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup;
    toAmino(message: MsgCreateGroup): MsgCreateGroupAmino;
    fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup;
    toAminoMsg(message: MsgCreateGroup): MsgCreateGroupAminoMsg;
    fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup;
    toProto(message: MsgCreateGroup): Uint8Array;
    toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg;
};
export declare const MsgCreateGroupResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateGroupResponse;
    isSDK(o: any): o is MsgCreateGroupResponseSDKType;
    isAmino(o: any): o is MsgCreateGroupResponseAmino;
    encode(message: MsgCreateGroupResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupResponse;
    fromJSON(object: any): MsgCreateGroupResponse;
    toJSON(message: MsgCreateGroupResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse;
    fromSDK(object: MsgCreateGroupResponseSDKType): MsgCreateGroupResponse;
    toSDK(message: MsgCreateGroupResponse): MsgCreateGroupResponseSDKType;
    fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse;
    toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino;
    fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse;
    toAminoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseAminoMsg;
    fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse;
    toProto(message: MsgCreateGroupResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg;
};
export declare const MsgUpdateGroupMembers: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupMembers;
    isSDK(o: any): o is MsgUpdateGroupMembersSDKType;
    isAmino(o: any): o is MsgUpdateGroupMembersAmino;
    encode(message: MsgUpdateGroupMembers, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembers;
    fromJSON(object: any): MsgUpdateGroupMembers;
    toJSON(message: MsgUpdateGroupMembers): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers;
    fromSDK(object: MsgUpdateGroupMembersSDKType): MsgUpdateGroupMembers;
    toSDK(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersSDKType;
    fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers;
    toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino;
    fromAminoMsg(object: MsgUpdateGroupMembersAminoMsg): MsgUpdateGroupMembers;
    toAminoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupMembersProtoMsg): MsgUpdateGroupMembers;
    toProto(message: MsgUpdateGroupMembers): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersProtoMsg;
};
export declare const MsgUpdateGroupMembersResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupMembersResponse;
    isSDK(o: any): o is MsgUpdateGroupMembersResponseSDKType;
    isAmino(o: any): o is MsgUpdateGroupMembersResponseAmino;
    encode(_: MsgUpdateGroupMembersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse;
    fromJSON(_: any): MsgUpdateGroupMembersResponse;
    toJSON(_: MsgUpdateGroupMembersResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse;
    fromSDK(_: MsgUpdateGroupMembersResponseSDKType): MsgUpdateGroupMembersResponse;
    toSDK(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseSDKType;
    fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse;
    toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupMembersResponseAminoMsg): MsgUpdateGroupMembersResponse;
    toAminoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupMembersResponseProtoMsg): MsgUpdateGroupMembersResponse;
    toProto(message: MsgUpdateGroupMembersResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseProtoMsg;
};
export declare const MsgUpdateGroupAdmin: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupAdmin;
    isSDK(o: any): o is MsgUpdateGroupAdminSDKType;
    isAmino(o: any): o is MsgUpdateGroupAdminAmino;
    encode(message: MsgUpdateGroupAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdmin;
    fromJSON(object: any): MsgUpdateGroupAdmin;
    toJSON(message: MsgUpdateGroupAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin;
    fromSDK(object: MsgUpdateGroupAdminSDKType): MsgUpdateGroupAdmin;
    toSDK(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminSDKType;
    fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin;
    toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino;
    fromAminoMsg(object: MsgUpdateGroupAdminAminoMsg): MsgUpdateGroupAdmin;
    toAminoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupAdminProtoMsg): MsgUpdateGroupAdmin;
    toProto(message: MsgUpdateGroupAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminProtoMsg;
};
export declare const MsgUpdateGroupAdminResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupAdminResponse;
    isSDK(o: any): o is MsgUpdateGroupAdminResponseSDKType;
    isAmino(o: any): o is MsgUpdateGroupAdminResponseAmino;
    encode(_: MsgUpdateGroupAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse;
    fromJSON(_: any): MsgUpdateGroupAdminResponse;
    toJSON(_: MsgUpdateGroupAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse;
    fromSDK(_: MsgUpdateGroupAdminResponseSDKType): MsgUpdateGroupAdminResponse;
    toSDK(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseSDKType;
    fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse;
    toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupAdminResponseAminoMsg): MsgUpdateGroupAdminResponse;
    toAminoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupAdminResponseProtoMsg): MsgUpdateGroupAdminResponse;
    toProto(message: MsgUpdateGroupAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseProtoMsg;
};
export declare const MsgUpdateGroupMetadata: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupMetadata;
    isSDK(o: any): o is MsgUpdateGroupMetadataSDKType;
    isAmino(o: any): o is MsgUpdateGroupMetadataAmino;
    encode(message: MsgUpdateGroupMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadata;
    fromJSON(object: any): MsgUpdateGroupMetadata;
    toJSON(message: MsgUpdateGroupMetadata): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata;
    fromSDK(object: MsgUpdateGroupMetadataSDKType): MsgUpdateGroupMetadata;
    toSDK(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataSDKType;
    fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata;
    toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino;
    fromAminoMsg(object: MsgUpdateGroupMetadataAminoMsg): MsgUpdateGroupMetadata;
    toAminoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupMetadataProtoMsg): MsgUpdateGroupMetadata;
    toProto(message: MsgUpdateGroupMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataProtoMsg;
};
export declare const MsgUpdateGroupMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupMetadataResponse;
    isSDK(o: any): o is MsgUpdateGroupMetadataResponseSDKType;
    isAmino(o: any): o is MsgUpdateGroupMetadataResponseAmino;
    encode(_: MsgUpdateGroupMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupMetadataResponse;
    toJSON(_: MsgUpdateGroupMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse;
    fromSDK(_: MsgUpdateGroupMetadataResponseSDKType): MsgUpdateGroupMetadataResponse;
    toSDK(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseSDKType;
    fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse;
    toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupMetadataResponseAminoMsg): MsgUpdateGroupMetadataResponse;
    toAminoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupMetadataResponseProtoMsg): MsgUpdateGroupMetadataResponse;
    toProto(message: MsgUpdateGroupMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseProtoMsg;
};
export declare const MsgCreateGroupPolicy: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateGroupPolicy;
    isSDK(o: any): o is MsgCreateGroupPolicySDKType;
    isAmino(o: any): o is MsgCreateGroupPolicyAmino;
    encode(message: MsgCreateGroupPolicy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicy;
    fromJSON(object: any): MsgCreateGroupPolicy;
    toJSON(message: MsgCreateGroupPolicy): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy;
    fromSDK(object: MsgCreateGroupPolicySDKType): MsgCreateGroupPolicy;
    toSDK(message: MsgCreateGroupPolicy): MsgCreateGroupPolicySDKType;
    fromAmino(object: MsgCreateGroupPolicyAmino): MsgCreateGroupPolicy;
    toAmino(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAmino;
    fromAminoMsg(object: MsgCreateGroupPolicyAminoMsg): MsgCreateGroupPolicy;
    toAminoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAminoMsg;
    fromProtoMsg(message: MsgCreateGroupPolicyProtoMsg): MsgCreateGroupPolicy;
    toProto(message: MsgCreateGroupPolicy): Uint8Array;
    toProtoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyProtoMsg;
};
export declare const MsgCreateGroupPolicyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateGroupPolicyResponse;
    isSDK(o: any): o is MsgCreateGroupPolicyResponseSDKType;
    isAmino(o: any): o is MsgCreateGroupPolicyResponseAmino;
    encode(message: MsgCreateGroupPolicyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse;
    fromJSON(object: any): MsgCreateGroupPolicyResponse;
    toJSON(message: MsgCreateGroupPolicyResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse;
    fromSDK(object: MsgCreateGroupPolicyResponseSDKType): MsgCreateGroupPolicyResponse;
    toSDK(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseSDKType;
    fromAmino(object: MsgCreateGroupPolicyResponseAmino): MsgCreateGroupPolicyResponse;
    toAmino(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAmino;
    fromAminoMsg(object: MsgCreateGroupPolicyResponseAminoMsg): MsgCreateGroupPolicyResponse;
    toAminoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAminoMsg;
    fromProtoMsg(message: MsgCreateGroupPolicyResponseProtoMsg): MsgCreateGroupPolicyResponse;
    toProto(message: MsgCreateGroupPolicyResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseProtoMsg;
};
export declare const MsgUpdateGroupPolicyAdmin: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupPolicyAdmin;
    isSDK(o: any): o is MsgUpdateGroupPolicyAdminSDKType;
    isAmino(o: any): o is MsgUpdateGroupPolicyAdminAmino;
    encode(message: MsgUpdateGroupPolicyAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin;
    fromJSON(object: any): MsgUpdateGroupPolicyAdmin;
    toJSON(message: MsgUpdateGroupPolicyAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin;
    fromSDK(object: MsgUpdateGroupPolicyAdminSDKType): MsgUpdateGroupPolicyAdmin;
    toSDK(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminSDKType;
    fromAmino(object: MsgUpdateGroupPolicyAdminAmino): MsgUpdateGroupPolicyAdmin;
    toAmino(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAmino;
    fromAminoMsg(object: MsgUpdateGroupPolicyAdminAminoMsg): MsgUpdateGroupPolicyAdmin;
    toAminoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupPolicyAdminProtoMsg): MsgUpdateGroupPolicyAdmin;
    toProto(message: MsgUpdateGroupPolicyAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminProtoMsg;
};
export declare const MsgCreateGroupWithPolicy: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateGroupWithPolicy;
    isSDK(o: any): o is MsgCreateGroupWithPolicySDKType;
    isAmino(o: any): o is MsgCreateGroupWithPolicyAmino;
    encode(message: MsgCreateGroupWithPolicy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicy;
    fromJSON(object: any): MsgCreateGroupWithPolicy;
    toJSON(message: MsgCreateGroupWithPolicy): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy;
    fromSDK(object: MsgCreateGroupWithPolicySDKType): MsgCreateGroupWithPolicy;
    toSDK(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicySDKType;
    fromAmino(object: MsgCreateGroupWithPolicyAmino): MsgCreateGroupWithPolicy;
    toAmino(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAmino;
    fromAminoMsg(object: MsgCreateGroupWithPolicyAminoMsg): MsgCreateGroupWithPolicy;
    toAminoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAminoMsg;
    fromProtoMsg(message: MsgCreateGroupWithPolicyProtoMsg): MsgCreateGroupWithPolicy;
    toProto(message: MsgCreateGroupWithPolicy): Uint8Array;
    toProtoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyProtoMsg;
};
export declare const MsgCreateGroupWithPolicyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateGroupWithPolicyResponse;
    isSDK(o: any): o is MsgCreateGroupWithPolicyResponseSDKType;
    isAmino(o: any): o is MsgCreateGroupWithPolicyResponseAmino;
    encode(message: MsgCreateGroupWithPolicyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse;
    fromJSON(object: any): MsgCreateGroupWithPolicyResponse;
    toJSON(message: MsgCreateGroupWithPolicyResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse;
    fromSDK(object: MsgCreateGroupWithPolicyResponseSDKType): MsgCreateGroupWithPolicyResponse;
    toSDK(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseSDKType;
    fromAmino(object: MsgCreateGroupWithPolicyResponseAmino): MsgCreateGroupWithPolicyResponse;
    toAmino(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAmino;
    fromAminoMsg(object: MsgCreateGroupWithPolicyResponseAminoMsg): MsgCreateGroupWithPolicyResponse;
    toAminoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAminoMsg;
    fromProtoMsg(message: MsgCreateGroupWithPolicyResponseProtoMsg): MsgCreateGroupWithPolicyResponse;
    toProto(message: MsgCreateGroupWithPolicyResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseProtoMsg;
};
export declare const MsgUpdateGroupPolicyAdminResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupPolicyAdminResponse;
    isSDK(o: any): o is MsgUpdateGroupPolicyAdminResponseSDKType;
    isAmino(o: any): o is MsgUpdateGroupPolicyAdminResponseAmino;
    encode(_: MsgUpdateGroupPolicyAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse;
    toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse;
    fromSDK(_: MsgUpdateGroupPolicyAdminResponseSDKType): MsgUpdateGroupPolicyAdminResponse;
    toSDK(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseSDKType;
    fromAmino(_: MsgUpdateGroupPolicyAdminResponseAmino): MsgUpdateGroupPolicyAdminResponse;
    toAmino(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupPolicyAdminResponseAminoMsg): MsgUpdateGroupPolicyAdminResponse;
    toAminoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupPolicyAdminResponseProtoMsg): MsgUpdateGroupPolicyAdminResponse;
    toProto(message: MsgUpdateGroupPolicyAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseProtoMsg;
};
export declare const MsgUpdateGroupPolicyDecisionPolicy: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupPolicyDecisionPolicy;
    isSDK(o: any): o is MsgUpdateGroupPolicyDecisionPolicySDKType;
    isAmino(o: any): o is MsgUpdateGroupPolicyDecisionPolicyAmino;
    encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy;
    fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy;
    toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy;
    fromSDK(object: MsgUpdateGroupPolicyDecisionPolicySDKType): MsgUpdateGroupPolicyDecisionPolicy;
    toSDK(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicySDKType;
    fromAmino(object: MsgUpdateGroupPolicyDecisionPolicyAmino): MsgUpdateGroupPolicyDecisionPolicy;
    toAmino(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAmino;
    fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyAminoMsg): MsgUpdateGroupPolicyDecisionPolicy;
    toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyProtoMsg): MsgUpdateGroupPolicyDecisionPolicy;
    toProto(message: MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
};
export declare const MsgUpdateGroupPolicyDecisionPolicyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupPolicyDecisionPolicyResponse;
    isSDK(o: any): o is MsgUpdateGroupPolicyDecisionPolicyResponseSDKType;
    isAmino(o: any): o is MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
    encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromSDK(_: MsgUpdateGroupPolicyDecisionPolicyResponseSDKType): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toSDK(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseSDKType;
    fromAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponseAmino): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toProto(message: MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
};
export declare const MsgUpdateGroupPolicyMetadata: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupPolicyMetadata;
    isSDK(o: any): o is MsgUpdateGroupPolicyMetadataSDKType;
    isAmino(o: any): o is MsgUpdateGroupPolicyMetadataAmino;
    encode(message: MsgUpdateGroupPolicyMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata;
    fromJSON(object: any): MsgUpdateGroupPolicyMetadata;
    toJSON(message: MsgUpdateGroupPolicyMetadata): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata;
    fromSDK(object: MsgUpdateGroupPolicyMetadataSDKType): MsgUpdateGroupPolicyMetadata;
    toSDK(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataSDKType;
    fromAmino(object: MsgUpdateGroupPolicyMetadataAmino): MsgUpdateGroupPolicyMetadata;
    toAmino(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAmino;
    fromAminoMsg(object: MsgUpdateGroupPolicyMetadataAminoMsg): MsgUpdateGroupPolicyMetadata;
    toAminoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupPolicyMetadataProtoMsg): MsgUpdateGroupPolicyMetadata;
    toProto(message: MsgUpdateGroupPolicyMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataProtoMsg;
};
export declare const MsgUpdateGroupPolicyMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateGroupPolicyMetadataResponse;
    isSDK(o: any): o is MsgUpdateGroupPolicyMetadataResponseSDKType;
    isAmino(o: any): o is MsgUpdateGroupPolicyMetadataResponseAmino;
    encode(_: MsgUpdateGroupPolicyMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse;
    toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse;
    fromSDK(_: MsgUpdateGroupPolicyMetadataResponseSDKType): MsgUpdateGroupPolicyMetadataResponse;
    toSDK(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseSDKType;
    fromAmino(_: MsgUpdateGroupPolicyMetadataResponseAmino): MsgUpdateGroupPolicyMetadataResponse;
    toAmino(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateGroupPolicyMetadataResponseAminoMsg): MsgUpdateGroupPolicyMetadataResponse;
    toAminoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateGroupPolicyMetadataResponseProtoMsg): MsgUpdateGroupPolicyMetadataResponse;
    toProto(message: MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseProtoMsg;
};
export declare const MsgSubmitProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitProposal;
    isSDK(o: any): o is MsgSubmitProposalSDKType;
    isAmino(o: any): o is MsgSubmitProposalAmino;
    encode(message: MsgSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal;
    fromSDK(object: MsgSubmitProposalSDKType): MsgSubmitProposal;
    toSDK(message: MsgSubmitProposal): MsgSubmitProposalSDKType;
    fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal;
    toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino;
    fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal;
    toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal;
    toProto(message: MsgSubmitProposal): Uint8Array;
    toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg;
};
export declare const MsgSubmitProposalResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitProposalResponse;
    isSDK(o: any): o is MsgSubmitProposalResponseSDKType;
    isAmino(o: any): o is MsgSubmitProposalResponseAmino;
    encode(message: MsgSubmitProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
    fromSDK(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse;
    toSDK(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType;
    fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse;
    toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino;
    fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse;
    toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse;
    toProto(message: MsgSubmitProposalResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg;
};
export declare const MsgWithdrawProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawProposal;
    isSDK(o: any): o is MsgWithdrawProposalSDKType;
    isAmino(o: any): o is MsgWithdrawProposalAmino;
    encode(message: MsgWithdrawProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposal;
    fromJSON(object: any): MsgWithdrawProposal;
    toJSON(message: MsgWithdrawProposal): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawProposal>): MsgWithdrawProposal;
    fromSDK(object: MsgWithdrawProposalSDKType): MsgWithdrawProposal;
    toSDK(message: MsgWithdrawProposal): MsgWithdrawProposalSDKType;
    fromAmino(object: MsgWithdrawProposalAmino): MsgWithdrawProposal;
    toAmino(message: MsgWithdrawProposal): MsgWithdrawProposalAmino;
    fromAminoMsg(object: MsgWithdrawProposalAminoMsg): MsgWithdrawProposal;
    toAminoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalAminoMsg;
    fromProtoMsg(message: MsgWithdrawProposalProtoMsg): MsgWithdrawProposal;
    toProto(message: MsgWithdrawProposal): Uint8Array;
    toProtoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalProtoMsg;
};
export declare const MsgWithdrawProposalResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawProposalResponse;
    isSDK(o: any): o is MsgWithdrawProposalResponseSDKType;
    isAmino(o: any): o is MsgWithdrawProposalResponseAmino;
    encode(_: MsgWithdrawProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposalResponse;
    fromJSON(_: any): MsgWithdrawProposalResponse;
    toJSON(_: MsgWithdrawProposalResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse;
    fromSDK(_: MsgWithdrawProposalResponseSDKType): MsgWithdrawProposalResponse;
    toSDK(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseSDKType;
    fromAmino(_: MsgWithdrawProposalResponseAmino): MsgWithdrawProposalResponse;
    toAmino(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAmino;
    fromAminoMsg(object: MsgWithdrawProposalResponseAminoMsg): MsgWithdrawProposalResponse;
    toAminoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawProposalResponseProtoMsg): MsgWithdrawProposalResponse;
    toProto(message: MsgWithdrawProposalResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseProtoMsg;
};
export declare const MsgVote: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgVote;
    isSDK(o: any): o is MsgVoteSDKType;
    isAmino(o: any): o is MsgVoteAmino;
    encode(message: MsgVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: DeepPartial<MsgVote>): MsgVote;
    fromSDK(object: MsgVoteSDKType): MsgVote;
    toSDK(message: MsgVote): MsgVoteSDKType;
    fromAmino(object: MsgVoteAmino): MsgVote;
    toAmino(message: MsgVote): MsgVoteAmino;
    fromAminoMsg(object: MsgVoteAminoMsg): MsgVote;
    toAminoMsg(message: MsgVote): MsgVoteAminoMsg;
    fromProtoMsg(message: MsgVoteProtoMsg): MsgVote;
    toProto(message: MsgVote): Uint8Array;
    toProtoMsg(message: MsgVote): MsgVoteProtoMsg;
};
export declare const MsgVoteResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgVoteResponse;
    isSDK(o: any): o is MsgVoteResponseSDKType;
    isAmino(o: any): o is MsgVoteResponseAmino;
    encode(_: MsgVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse;
    fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse;
    toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType;
    fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse;
    toAmino(_: MsgVoteResponse): MsgVoteResponseAmino;
    fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse;
    toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg;
    fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse;
    toProto(message: MsgVoteResponse): Uint8Array;
    toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg;
};
export declare const MsgExec: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgExec;
    isSDK(o: any): o is MsgExecSDKType;
    isAmino(o: any): o is MsgExecAmino;
    encode(message: MsgExec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial(object: DeepPartial<MsgExec>): MsgExec;
    fromSDK(object: MsgExecSDKType): MsgExec;
    toSDK(message: MsgExec): MsgExecSDKType;
    fromAmino(object: MsgExecAmino): MsgExec;
    toAmino(message: MsgExec): MsgExecAmino;
    fromAminoMsg(object: MsgExecAminoMsg): MsgExec;
    toAminoMsg(message: MsgExec): MsgExecAminoMsg;
    fromProtoMsg(message: MsgExecProtoMsg): MsgExec;
    toProto(message: MsgExec): Uint8Array;
    toProtoMsg(message: MsgExec): MsgExecProtoMsg;
};
export declare const MsgExecResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgExecResponse;
    isSDK(o: any): o is MsgExecResponseSDKType;
    isAmino(o: any): o is MsgExecResponseAmino;
    encode(_: MsgExecResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(_: any): MsgExecResponse;
    toJSON(_: MsgExecResponse): unknown;
    fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse;
    fromSDK(_: MsgExecResponseSDKType): MsgExecResponse;
    toSDK(_: MsgExecResponse): MsgExecResponseSDKType;
    fromAmino(_: MsgExecResponseAmino): MsgExecResponse;
    toAmino(_: MsgExecResponse): MsgExecResponseAmino;
    fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse;
    toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg;
    fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse;
    toProto(message: MsgExecResponse): Uint8Array;
    toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg;
};
export declare const MsgLeaveGroup: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgLeaveGroup;
    isSDK(o: any): o is MsgLeaveGroupSDKType;
    isAmino(o: any): o is MsgLeaveGroupAmino;
    encode(message: MsgLeaveGroup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroup;
    fromJSON(object: any): MsgLeaveGroup;
    toJSON(message: MsgLeaveGroup): unknown;
    fromPartial(object: DeepPartial<MsgLeaveGroup>): MsgLeaveGroup;
    fromSDK(object: MsgLeaveGroupSDKType): MsgLeaveGroup;
    toSDK(message: MsgLeaveGroup): MsgLeaveGroupSDKType;
    fromAmino(object: MsgLeaveGroupAmino): MsgLeaveGroup;
    toAmino(message: MsgLeaveGroup): MsgLeaveGroupAmino;
    fromAminoMsg(object: MsgLeaveGroupAminoMsg): MsgLeaveGroup;
    toAminoMsg(message: MsgLeaveGroup): MsgLeaveGroupAminoMsg;
    fromProtoMsg(message: MsgLeaveGroupProtoMsg): MsgLeaveGroup;
    toProto(message: MsgLeaveGroup): Uint8Array;
    toProtoMsg(message: MsgLeaveGroup): MsgLeaveGroupProtoMsg;
};
export declare const MsgLeaveGroupResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgLeaveGroupResponse;
    isSDK(o: any): o is MsgLeaveGroupResponseSDKType;
    isAmino(o: any): o is MsgLeaveGroupResponseAmino;
    encode(_: MsgLeaveGroupResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroupResponse;
    fromJSON(_: any): MsgLeaveGroupResponse;
    toJSON(_: MsgLeaveGroupResponse): unknown;
    fromPartial(_: DeepPartial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse;
    fromSDK(_: MsgLeaveGroupResponseSDKType): MsgLeaveGroupResponse;
    toSDK(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseSDKType;
    fromAmino(_: MsgLeaveGroupResponseAmino): MsgLeaveGroupResponse;
    toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseAmino;
    fromAminoMsg(object: MsgLeaveGroupResponseAminoMsg): MsgLeaveGroupResponse;
    toAminoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseAminoMsg;
    fromProtoMsg(message: MsgLeaveGroupResponseProtoMsg): MsgLeaveGroupResponse;
    toProto(message: MsgLeaveGroupResponse): Uint8Array;
    toProtoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseProtoMsg;
};
