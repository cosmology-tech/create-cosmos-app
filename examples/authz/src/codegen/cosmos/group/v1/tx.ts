//@ts-nocheck
import { Member, MemberAmino, MemberSDKType, VoteOption, VoteOptionSDKType, ThresholdDecisionPolicy, ThresholdDecisionPolicyProtoMsg, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicyProtoMsg, PercentageDecisionPolicySDKType, voteOptionFromJSON, voteOptionToJSON } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.group.v1";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
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
  UNRECOGNIZED = -1,
}
export const ExecSDKType = Exec;
export const ExecAmino = Exec;
export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
export interface MsgUpdateGroupMembersResponse {}
export interface MsgUpdateGroupMembersResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseAmino {}
export interface MsgUpdateGroupMembersResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembersResponse";
  value: MsgUpdateGroupMembersResponseAmino;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {}
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
export interface MsgUpdateGroupAdminResponse {}
export interface MsgUpdateGroupAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseAmino {}
export interface MsgUpdateGroupAdminResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdminResponse";
  value: MsgUpdateGroupAdminResponseAmino;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {}
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
export interface MsgUpdateGroupMetadataResponse {}
export interface MsgUpdateGroupMetadataResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseAmino {}
export interface MsgUpdateGroupMetadataResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadataResponse";
  value: MsgUpdateGroupMetadataResponseAmino;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {}
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
  /** decision_policy specifies the group policy's decision policy. */decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
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
  decision_policy?: AnyAmino;
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
  /** decision_policy specifies the group policy's decision policy. */decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
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
  decision_policy?: AnyAmino;
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
export interface MsgUpdateGroupPolicyAdminResponse {}
export interface MsgUpdateGroupPolicyAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseAmino {}
export interface MsgUpdateGroupPolicyAdminResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse";
  value: MsgUpdateGroupPolicyAdminResponseAmino;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseSDKType {}
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
  /** decision_policy is the updated group policy's decision policy. */decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicyAmino {
  /** admin is the account address of the group admin. */
  admin?: string;
  /** address is the account address of group policy. */
  address?: string;
  /** decision_policy is the updated group policy's decision policy. */
  decision_policy?: AnyAmino;
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
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAmino {}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse";
  value: MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {}
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
export interface MsgUpdateGroupPolicyMetadataResponse {}
export interface MsgUpdateGroupPolicyMetadataResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseAmino {}
export interface MsgUpdateGroupPolicyMetadataResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse";
  value: MsgUpdateGroupPolicyMetadataResponseAmino;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseSDKType {}
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
export interface MsgWithdrawProposalResponse {}
export interface MsgWithdrawProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse";
  value: Uint8Array;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseAmino {}
export interface MsgWithdrawProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgWithdrawProposalResponse";
  value: MsgWithdrawProposalResponseAmino;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseSDKType {}
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
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}
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
export interface MsgExecResponse {}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseAmino {}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {}
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
export interface MsgLeaveGroupResponse {}
export interface MsgLeaveGroupResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse";
  value: Uint8Array;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseAmino {}
export interface MsgLeaveGroupResponseAminoMsg {
  type: "cosmos-sdk/MsgLeaveGroupResponse";
  value: MsgLeaveGroupResponseAmino;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseSDKType {}
function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
export const MsgCreateGroup = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroup",
  aminoType: "cosmos-sdk/MsgCreateGroup",
  is(o: any): o is MsgCreateGroup {
    return o && (o.$typeUrl === MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || Member.is(o.members[0])) && typeof o.metadata === "string");
  },
  isSDK(o: any): o is MsgCreateGroupSDKType {
    return o && (o.$typeUrl === MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || Member.isSDK(o.members[0])) && typeof o.metadata === "string");
  },
  isAmino(o: any): o is MsgCreateGroupAmino {
    return o && (o.$typeUrl === MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || Member.isAmino(o.members[0])) && typeof o.metadata === "string");
  },
  encode(message: MsgCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroup {
    const obj = createBaseMsgCreateGroup();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (Array.isArray(object?.members)) obj.members = object.members.map((e: any) => Member.fromJSON(e));
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: MsgCreateGroup): JsonSafe<MsgCreateGroup> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromSDK(object: MsgCreateGroupSDKType): MsgCreateGroup {
    return {
      admin: object?.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromSDK(e)) : [],
      metadata: object?.metadata
    };
  },
  toSDK(message: MsgCreateGroup): MsgCreateGroupSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgCreateGroup): MsgCreateGroupAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup {
    return MsgCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroup): MsgCreateGroupAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroup",
      value: MsgCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message: MsgCreateGroup): Uint8Array {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroup",
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGroup.typeUrl, MsgCreateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroup.aminoType, MsgCreateGroup.typeUrl);
function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    groupId: BigInt(0)
  };
}
export const MsgCreateGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
  aminoType: "cosmos-sdk/MsgCreateGroupResponse",
  is(o: any): o is MsgCreateGroupResponse {
    return o && (o.$typeUrl === MsgCreateGroupResponse.typeUrl || typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is MsgCreateGroupResponseSDKType {
    return o && (o.$typeUrl === MsgCreateGroupResponse.typeUrl || typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is MsgCreateGroupResponseAmino {
    return o && (o.$typeUrl === MsgCreateGroupResponse.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: MsgCreateGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupResponse {
    const obj = createBaseMsgCreateGroupResponse();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: MsgCreateGroupResponse): JsonSafe<MsgCreateGroupResponse> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
  fromSDK(object: MsgCreateGroupResponseSDKType): MsgCreateGroupResponse {
    return {
      groupId: object?.group_id
    };
  },
  toSDK(message: MsgCreateGroupResponse): MsgCreateGroupResponseSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupResponse): Uint8Array {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGroupResponse.typeUrl, MsgCreateGroupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupResponse.aminoType, MsgCreateGroupResponse.typeUrl);
function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    admin: "",
    groupId: BigInt(0),
    memberUpdates: []
  };
}
export const MsgUpdateGroupMembers = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
  aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
  is(o: any): o is MsgUpdateGroupMembers {
    return o && (o.$typeUrl === MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && Array.isArray(o.memberUpdates) && (!o.memberUpdates.length || Member.is(o.memberUpdates[0])));
  },
  isSDK(o: any): o is MsgUpdateGroupMembersSDKType {
    return o && (o.$typeUrl === MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && Array.isArray(o.member_updates) && (!o.member_updates.length || Member.isSDK(o.member_updates[0])));
  },
  isAmino(o: any): o is MsgUpdateGroupMembersAmino {
    return o && (o.$typeUrl === MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && Array.isArray(o.member_updates) && (!o.member_updates.length || Member.isAmino(o.member_updates[0])));
  },
  encode(message: MsgUpdateGroupMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== undefined) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.memberUpdates.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMembers {
    const obj = createBaseMsgUpdateGroupMembers();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (Array.isArray(object?.memberUpdates)) obj.memberUpdates = object.memberUpdates.map((e: any) => Member.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgUpdateGroupMembers): JsonSafe<MsgUpdateGroupMembers> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.memberUpdates = object.memberUpdates?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgUpdateGroupMembersSDKType): MsgUpdateGroupMembers {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      memberUpdates: Array.isArray(object?.member_updates) ? object.member_updates.map((e: any) => Member.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? Member.toSDK(e) : undefined);
    } else {
      obj.member_updates = [];
    }
    return obj;
  },
  fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    message.memberUpdates = object.member_updates?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.member_updates = message.memberUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersAminoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMembersProtoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembers): Uint8Array {
    return MsgUpdateGroupMembers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMembers.typeUrl, MsgUpdateGroupMembers);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMembers.aminoType, MsgUpdateGroupMembers.typeUrl);
function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}
export const MsgUpdateGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
  aminoType: "cosmos-sdk/MsgUpdateGroupMembersResponse",
  is(o: any): o is MsgUpdateGroupMembersResponse {
    return o && o.$typeUrl === MsgUpdateGroupMembersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateGroupMembersResponseSDKType {
    return o && o.$typeUrl === MsgUpdateGroupMembersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateGroupMembersResponseAmino {
    return o && o.$typeUrl === MsgUpdateGroupMembersResponse.typeUrl;
  },
  encode(_: MsgUpdateGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    const obj = createBaseMsgUpdateGroupMembersResponse();
    return obj;
  },
  toJSON(_: MsgUpdateGroupMembersResponse): JsonSafe<MsgUpdateGroupMembersResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupMembersResponseSDKType): MsgUpdateGroupMembersResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersResponseAminoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMembersResponseProtoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembersResponse): Uint8Array {
    return MsgUpdateGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMembersResponse.typeUrl, MsgUpdateGroupMembersResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMembersResponse.aminoType, MsgUpdateGroupMembersResponse.typeUrl);
function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return {
    admin: "",
    groupId: BigInt(0),
    newAdmin: ""
  };
}
export const MsgUpdateGroupAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
  aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
  is(o: any): o is MsgUpdateGroupAdmin {
    return o && (o.$typeUrl === MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && typeof o.newAdmin === "string");
  },
  isSDK(o: any): o is MsgUpdateGroupAdminSDKType {
    return o && (o.$typeUrl === MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.new_admin === "string");
  },
  isAmino(o: any): o is MsgUpdateGroupAdminAmino {
    return o && (o.$typeUrl === MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.new_admin === "string");
  },
  encode(message: MsgUpdateGroupAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== undefined) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== undefined) {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupAdmin {
    const obj = createBaseMsgUpdateGroupAdmin();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.newAdmin)) obj.newAdmin = String(object.newAdmin);
    return obj;
  },
  toJSON(message: MsgUpdateGroupAdmin): JsonSafe<MsgUpdateGroupAdmin> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateGroupAdminSDKType): MsgUpdateGroupAdmin {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      newAdmin: object?.new_admin
    };
  },
  toSDK(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminAminoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupAdminProtoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdmin): Uint8Array {
    return MsgUpdateGroupAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupAdmin.typeUrl, MsgUpdateGroupAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupAdmin.aminoType, MsgUpdateGroupAdmin.typeUrl);
function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return {};
}
export const MsgUpdateGroupAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
  aminoType: "cosmos-sdk/MsgUpdateGroupAdminResponse",
  is(o: any): o is MsgUpdateGroupAdminResponse {
    return o && o.$typeUrl === MsgUpdateGroupAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateGroupAdminResponseSDKType {
    return o && o.$typeUrl === MsgUpdateGroupAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateGroupAdminResponseAmino {
    return o && o.$typeUrl === MsgUpdateGroupAdminResponse.typeUrl;
  },
  encode(_: MsgUpdateGroupAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    const obj = createBaseMsgUpdateGroupAdminResponse();
    return obj;
  },
  toJSON(_: MsgUpdateGroupAdminResponse): JsonSafe<MsgUpdateGroupAdminResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupAdminResponseSDKType): MsgUpdateGroupAdminResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminResponseAminoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupAdminResponseProtoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdminResponse): Uint8Array {
    return MsgUpdateGroupAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupAdminResponse.typeUrl, MsgUpdateGroupAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupAdminResponse.aminoType, MsgUpdateGroupAdminResponse.typeUrl);
function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: ""
  };
}
export const MsgUpdateGroupMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
  aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
  is(o: any): o is MsgUpdateGroupMetadata {
    return o && (o.$typeUrl === MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && typeof o.metadata === "string");
  },
  isSDK(o: any): o is MsgUpdateGroupMetadataSDKType {
    return o && (o.$typeUrl === MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
  },
  isAmino(o: any): o is MsgUpdateGroupMetadataAmino {
    return o && (o.$typeUrl === MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
  },
  encode(message: MsgUpdateGroupMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== undefined) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMetadata {
    const obj = createBaseMsgUpdateGroupMetadata();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: MsgUpdateGroupMetadata): JsonSafe<MsgUpdateGroupMetadata> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateGroupMetadataSDKType): MsgUpdateGroupMetadata {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      metadata: object?.metadata
    };
  },
  toSDK(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataAminoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataProtoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadata): Uint8Array {
    return MsgUpdateGroupMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMetadata.typeUrl, MsgUpdateGroupMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMetadata.aminoType, MsgUpdateGroupMetadata.typeUrl);
function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return {};
}
export const MsgUpdateGroupMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
  aminoType: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
  is(o: any): o is MsgUpdateGroupMetadataResponse {
    return o && o.$typeUrl === MsgUpdateGroupMetadataResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateGroupMetadataResponseSDKType {
    return o && o.$typeUrl === MsgUpdateGroupMetadataResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateGroupMetadataResponseAmino {
    return o && o.$typeUrl === MsgUpdateGroupMetadataResponse.typeUrl;
  },
  encode(_: MsgUpdateGroupMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    const obj = createBaseMsgUpdateGroupMetadataResponse();
    return obj;
  },
  toJSON(_: MsgUpdateGroupMetadataResponse): JsonSafe<MsgUpdateGroupMetadataResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupMetadataResponseSDKType): MsgUpdateGroupMetadataResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataResponseAminoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataResponseProtoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadataResponse): Uint8Array {
    return MsgUpdateGroupMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMetadataResponse.typeUrl, MsgUpdateGroupMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMetadataResponse.aminoType, MsgUpdateGroupMetadataResponse.typeUrl);
function createBaseMsgCreateGroupPolicy(): MsgCreateGroupPolicy {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: "",
    decisionPolicy: undefined
  };
}
export const MsgCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
  aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
  is(o: any): o is MsgCreateGroupPolicy {
    return o && (o.$typeUrl === MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && typeof o.metadata === "string");
  },
  isSDK(o: any): o is MsgCreateGroupPolicySDKType {
    return o && (o.$typeUrl === MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
  },
  isAmino(o: any): o is MsgCreateGroupPolicyAmino {
    return o && (o.$typeUrl === MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
  },
  encode(message: MsgCreateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== undefined) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.decisionPolicy), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decisionPolicy = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupPolicy {
    const obj = createBaseMsgCreateGroupPolicy();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.decisionPolicy)) obj.decisionPolicy = GlobalDecoderRegistry.fromJSON(object.decisionPolicy);
    return obj;
  },
  toJSON(message: MsgCreateGroupPolicy): JsonSafe<MsgCreateGroupPolicy> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? GlobalDecoderRegistry.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? "";
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.metadata = object.metadata ?? "";
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromPartial(object.decisionPolicy);
    }
    return message;
  },
  fromSDK(object: MsgCreateGroupPolicySDKType): MsgCreateGroupPolicy {
    return {
      admin: object?.admin,
      groupId: object?.group_id,
      metadata: object?.metadata,
      decisionPolicy: object.decision_policy ? GlobalDecoderRegistry.fromSDK(object.decision_policy) : undefined
    };
  },
  toSDK(message: MsgCreateGroupPolicy): MsgCreateGroupPolicySDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId;
    obj.metadata = message.metadata;
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toSDK(message.decisionPolicy) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateGroupPolicyAmino): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
    }
    return message;
  },
  toAmino(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toAminoMsg(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupPolicyAminoMsg): MsgCreateGroupPolicy {
    return MsgCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupPolicyProtoMsg): MsgCreateGroupPolicy {
    return MsgCreateGroupPolicy.decode(message.value);
  },
  toProto(message: MsgCreateGroupPolicy): Uint8Array {
    return MsgCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGroupPolicy.typeUrl, MsgCreateGroupPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupPolicy.aminoType, MsgCreateGroupPolicy.typeUrl);
function createBaseMsgCreateGroupPolicyResponse(): MsgCreateGroupPolicyResponse {
  return {
    address: ""
  };
}
export const MsgCreateGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
  aminoType: "cosmos-sdk/MsgCreateGroupPolicyResponse",
  is(o: any): o is MsgCreateGroupPolicyResponse {
    return o && (o.$typeUrl === MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is MsgCreateGroupPolicyResponseSDKType {
    return o && (o.$typeUrl === MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is MsgCreateGroupPolicyResponseAmino {
    return o && (o.$typeUrl === MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
  },
  encode(message: MsgCreateGroupPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    const obj = createBaseMsgCreateGroupPolicyResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: MsgCreateGroupPolicyResponse): JsonSafe<MsgCreateGroupPolicyResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: MsgCreateGroupPolicyResponseSDKType): MsgCreateGroupPolicyResponse {
    return {
      address: object?.address
    };
  },
  toSDK(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: MsgCreateGroupPolicyResponseAmino): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupPolicyResponseAminoMsg): MsgCreateGroupPolicyResponse {
    return MsgCreateGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupPolicyResponseProtoMsg): MsgCreateGroupPolicyResponse {
    return MsgCreateGroupPolicyResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupPolicyResponse): Uint8Array {
    return MsgCreateGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGroupPolicyResponse.typeUrl, MsgCreateGroupPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupPolicyResponse.aminoType, MsgCreateGroupPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyAdmin(): MsgUpdateGroupPolicyAdmin {
  return {
    admin: "",
    address: "",
    newAdmin: ""
  };
}
export const MsgUpdateGroupPolicyAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
  aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
  is(o: any): o is MsgUpdateGroupPolicyAdmin {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.address === "string" && typeof o.newAdmin === "string");
  },
  isSDK(o: any): o is MsgUpdateGroupPolicyAdminSDKType {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.address === "string" && typeof o.new_admin === "string");
  },
  isAmino(o: any): o is MsgUpdateGroupPolicyAdminAmino {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.address === "string" && typeof o.new_admin === "string");
  },
  encode(message: MsgUpdateGroupPolicyAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    if (message.newAdmin !== undefined) {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    const obj = createBaseMsgUpdateGroupPolicyAdmin();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.newAdmin)) obj.newAdmin = String(object.newAdmin);
    return obj;
  },
  toJSON(message: MsgUpdateGroupPolicyAdmin): JsonSafe<MsgUpdateGroupPolicyAdmin> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateGroupPolicyAdminSDKType): MsgUpdateGroupPolicyAdmin {
    return {
      admin: object?.admin,
      address: object?.address,
      newAdmin: object?.new_admin
    };
  },
  toSDK(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.address = message.address;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupPolicyAdminAmino): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.address = message.address === "" ? undefined : message.address;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyAdminAminoMsg): MsgUpdateGroupPolicyAdmin {
    return MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyAdminProtoMsg): MsgUpdateGroupPolicyAdmin {
    return MsgUpdateGroupPolicyAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyAdmin): Uint8Array {
    return MsgUpdateGroupPolicyAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyAdmin.typeUrl, MsgUpdateGroupPolicyAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyAdmin.aminoType, MsgUpdateGroupPolicyAdmin.typeUrl);
function createBaseMsgCreateGroupWithPolicy(): MsgCreateGroupWithPolicy {
  return {
    admin: "",
    members: [],
    groupMetadata: "",
    groupPolicyMetadata: "",
    groupPolicyAsAdmin: false,
    decisionPolicy: undefined
  };
}
export const MsgCreateGroupWithPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
  aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
  is(o: any): o is MsgCreateGroupWithPolicy {
    return o && (o.$typeUrl === MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || Member.is(o.members[0])) && typeof o.groupMetadata === "string" && typeof o.groupPolicyMetadata === "string" && typeof o.groupPolicyAsAdmin === "boolean");
  },
  isSDK(o: any): o is MsgCreateGroupWithPolicySDKType {
    return o && (o.$typeUrl === MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || Member.isSDK(o.members[0])) && typeof o.group_metadata === "string" && typeof o.group_policy_metadata === "string" && typeof o.group_policy_as_admin === "boolean");
  },
  isAmino(o: any): o is MsgCreateGroupWithPolicyAmino {
    return o && (o.$typeUrl === MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || Member.isAmino(o.members[0])) && typeof o.group_metadata === "string" && typeof o.group_policy_metadata === "string" && typeof o.group_policy_as_admin === "boolean");
  },
  encode(message: MsgCreateGroupWithPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupMetadata !== undefined) {
      writer.uint32(26).string(message.groupMetadata);
    }
    if (message.groupPolicyMetadata !== undefined) {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }
    if (message.groupPolicyAsAdmin !== undefined) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.decisionPolicy), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMetadata = reader.string();
          break;
        case 4:
          message.groupPolicyMetadata = reader.string();
          break;
        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;
        case 6:
          message.decisionPolicy = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupWithPolicy {
    const obj = createBaseMsgCreateGroupWithPolicy();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (Array.isArray(object?.members)) obj.members = object.members.map((e: any) => Member.fromJSON(e));
    if (isSet(object.groupMetadata)) obj.groupMetadata = String(object.groupMetadata);
    if (isSet(object.groupPolicyMetadata)) obj.groupPolicyMetadata = String(object.groupPolicyMetadata);
    if (isSet(object.groupPolicyAsAdmin)) obj.groupPolicyAsAdmin = Boolean(object.groupPolicyAsAdmin);
    if (isSet(object.decisionPolicy)) obj.decisionPolicy = GlobalDecoderRegistry.fromJSON(object.decisionPolicy);
    return obj;
  },
  toJSON(message: MsgCreateGroupWithPolicy): JsonSafe<MsgCreateGroupWithPolicy> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
    message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? GlobalDecoderRegistry.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.groupMetadata = object.groupMetadata ?? "";
    message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
    message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromPartial(object.decisionPolicy);
    }
    return message;
  },
  fromSDK(object: MsgCreateGroupWithPolicySDKType): MsgCreateGroupWithPolicy {
    return {
      admin: object?.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromSDK(e)) : [],
      groupMetadata: object?.group_metadata,
      groupPolicyMetadata: object?.group_policy_metadata,
      groupPolicyAsAdmin: object?.group_policy_as_admin,
      decisionPolicy: object.decision_policy ? GlobalDecoderRegistry.fromSDK(object.decision_policy) : undefined
    };
  },
  toSDK(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicySDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.group_metadata = message.groupMetadata;
    obj.group_policy_metadata = message.groupPolicyMetadata;
    obj.group_policy_as_admin = message.groupPolicyAsAdmin;
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toSDK(message.decisionPolicy) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateGroupWithPolicyAmino): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    if (object.group_metadata !== undefined && object.group_metadata !== null) {
      message.groupMetadata = object.group_metadata;
    }
    if (object.group_policy_metadata !== undefined && object.group_policy_metadata !== null) {
      message.groupPolicyMetadata = object.group_policy_metadata;
    }
    if (object.group_policy_as_admin !== undefined && object.group_policy_as_admin !== null) {
      message.groupPolicyAsAdmin = object.group_policy_as_admin;
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
    }
    return message;
  },
  toAmino(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.group_metadata = message.groupMetadata === "" ? undefined : message.groupMetadata;
    obj.group_policy_metadata = message.groupPolicyMetadata === "" ? undefined : message.groupPolicyMetadata;
    obj.group_policy_as_admin = message.groupPolicyAsAdmin === false ? undefined : message.groupPolicyAsAdmin;
    obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toAminoMsg(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupWithPolicyAminoMsg): MsgCreateGroupWithPolicy {
    return MsgCreateGroupWithPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupWithPolicyProtoMsg): MsgCreateGroupWithPolicy {
    return MsgCreateGroupWithPolicy.decode(message.value);
  },
  toProto(message: MsgCreateGroupWithPolicy): Uint8Array {
    return MsgCreateGroupWithPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGroupWithPolicy.typeUrl, MsgCreateGroupWithPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupWithPolicy.aminoType, MsgCreateGroupWithPolicy.typeUrl);
function createBaseMsgCreateGroupWithPolicyResponse(): MsgCreateGroupWithPolicyResponse {
  return {
    groupId: BigInt(0),
    groupPolicyAddress: ""
  };
}
export const MsgCreateGroupWithPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
  aminoType: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
  is(o: any): o is MsgCreateGroupWithPolicyResponse {
    return o && (o.$typeUrl === MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.groupId === "bigint" && typeof o.groupPolicyAddress === "string");
  },
  isSDK(o: any): o is MsgCreateGroupWithPolicyResponseSDKType {
    return o && (o.$typeUrl === MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.group_id === "bigint" && typeof o.group_policy_address === "string");
  },
  isAmino(o: any): o is MsgCreateGroupWithPolicyResponseAmino {
    return o && (o.$typeUrl === MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.group_id === "bigint" && typeof o.group_policy_address === "string");
  },
  encode(message: MsgCreateGroupWithPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== undefined) {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    const obj = createBaseMsgCreateGroupWithPolicyResponse();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.groupPolicyAddress)) obj.groupPolicyAddress = String(object.groupPolicyAddress);
    return obj;
  },
  toJSON(message: MsgCreateGroupWithPolicyResponse): JsonSafe<MsgCreateGroupWithPolicyResponse> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    return message;
  },
  fromSDK(object: MsgCreateGroupWithPolicyResponseSDKType): MsgCreateGroupWithPolicyResponse {
    return {
      groupId: object?.group_id,
      groupPolicyAddress: object?.group_policy_address
    };
  },
  toSDK(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    obj.group_policy_address = message.groupPolicyAddress;
    return obj;
  },
  fromAmino(object: MsgCreateGroupWithPolicyResponseAmino): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    return message;
  },
  toAmino(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.group_policy_address = message.groupPolicyAddress === "" ? undefined : message.groupPolicyAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupWithPolicyResponseAminoMsg): MsgCreateGroupWithPolicyResponse {
    return MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupWithPolicyResponseProtoMsg): MsgCreateGroupWithPolicyResponse {
    return MsgCreateGroupWithPolicyResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupWithPolicyResponse): Uint8Array {
    return MsgCreateGroupWithPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGroupWithPolicyResponse.typeUrl, MsgCreateGroupWithPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupWithPolicyResponse.aminoType, MsgCreateGroupWithPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyAdminResponse(): MsgUpdateGroupPolicyAdminResponse {
  return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
  aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
  is(o: any): o is MsgUpdateGroupPolicyAdminResponse {
    return o && o.$typeUrl === MsgUpdateGroupPolicyAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateGroupPolicyAdminResponseSDKType {
    return o && o.$typeUrl === MsgUpdateGroupPolicyAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateGroupPolicyAdminResponseAmino {
    return o && o.$typeUrl === MsgUpdateGroupPolicyAdminResponse.typeUrl;
  },
  encode(_: MsgUpdateGroupPolicyAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    const obj = createBaseMsgUpdateGroupPolicyAdminResponse();
    return obj;
  },
  toJSON(_: MsgUpdateGroupPolicyAdminResponse): JsonSafe<MsgUpdateGroupPolicyAdminResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupPolicyAdminResponseSDKType): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupPolicyAdminResponseAmino): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyAdminResponseAminoMsg): MsgUpdateGroupPolicyAdminResponse {
    return MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyAdminResponseProtoMsg): MsgUpdateGroupPolicyAdminResponse {
    return MsgUpdateGroupPolicyAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyAdminResponse): Uint8Array {
    return MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyAdminResponse.typeUrl, MsgUpdateGroupPolicyAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyAdminResponse.aminoType, MsgUpdateGroupPolicyAdminResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy {
  return {
    admin: "",
    address: "",
    decisionPolicy: undefined
  };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
  aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
  is(o: any): o is MsgUpdateGroupPolicyDecisionPolicy {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.address === "string");
  },
  isSDK(o: any): o is MsgUpdateGroupPolicyDecisionPolicySDKType {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is MsgUpdateGroupPolicyDecisionPolicyAmino {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.address === "string");
  },
  encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.decisionPolicy), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.decisionPolicy = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    const obj = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.decisionPolicy)) obj.decisionPolicy = GlobalDecoderRegistry.fromJSON(object.decisionPolicy);
    return obj;
  },
  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): JsonSafe<MsgUpdateGroupPolicyDecisionPolicy> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? GlobalDecoderRegistry.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromPartial(object.decisionPolicy);
    }
    return message;
  },
  fromSDK(object: MsgUpdateGroupPolicyDecisionPolicySDKType): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: object?.admin,
      address: object?.address,
      decisionPolicy: object.decision_policy ? GlobalDecoderRegistry.fromSDK(object.decision_policy) : undefined
    };
  },
  toSDK(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicySDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.address = message.address;
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toSDK(message.decisionPolicy) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateGroupPolicyDecisionPolicyAmino): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.address = message.address === "" ? undefined : message.address;
    obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toAminoMsg(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyAminoMsg): MsgUpdateGroupPolicyDecisionPolicy {
    return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyProtoMsg): MsgUpdateGroupPolicyDecisionPolicy {
    return MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyDecisionPolicy): Uint8Array {
    return MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyDecisionPolicy.typeUrl, MsgUpdateGroupPolicyDecisionPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyDecisionPolicy.aminoType, MsgUpdateGroupPolicyDecisionPolicy.typeUrl);
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse(): MsgUpdateGroupPolicyDecisionPolicyResponse {
  return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
  aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
  is(o: any): o is MsgUpdateGroupPolicyDecisionPolicyResponse {
    return o && o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {
    return o && o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateGroupPolicyDecisionPolicyResponseAmino {
    return o && o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
  },
  encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const obj = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return obj;
  },
  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): JsonSafe<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupPolicyDecisionPolicyResponseSDKType): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponseAmino): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl, MsgUpdateGroupPolicyDecisionPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyDecisionPolicyResponse.aminoType, MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyMetadata(): MsgUpdateGroupPolicyMetadata {
  return {
    admin: "",
    address: "",
    metadata: ""
  };
}
export const MsgUpdateGroupPolicyMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
  aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
  is(o: any): o is MsgUpdateGroupPolicyMetadata {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.address === "string" && typeof o.metadata === "string");
  },
  isSDK(o: any): o is MsgUpdateGroupPolicyMetadataSDKType {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.address === "string" && typeof o.metadata === "string");
  },
  isAmino(o: any): o is MsgUpdateGroupPolicyMetadataAmino {
    return o && (o.$typeUrl === MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.address === "string" && typeof o.metadata === "string");
  },
  encode(message: MsgUpdateGroupPolicyMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== undefined) {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    const obj = createBaseMsgUpdateGroupPolicyMetadata();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: MsgUpdateGroupPolicyMetadata): JsonSafe<MsgUpdateGroupPolicyMetadata> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateGroupPolicyMetadataSDKType): MsgUpdateGroupPolicyMetadata {
    return {
      admin: object?.admin,
      address: object?.address,
      metadata: object?.metadata
    };
  },
  toSDK(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.address = message.address;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: MsgUpdateGroupPolicyMetadataAmino): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.address = message.address === "" ? undefined : message.address;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyMetadataAminoMsg): MsgUpdateGroupPolicyMetadata {
    return MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyMetadataProtoMsg): MsgUpdateGroupPolicyMetadata {
    return MsgUpdateGroupPolicyMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyMetadata): Uint8Array {
    return MsgUpdateGroupPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyMetadata.typeUrl, MsgUpdateGroupPolicyMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyMetadata.aminoType, MsgUpdateGroupPolicyMetadata.typeUrl);
function createBaseMsgUpdateGroupPolicyMetadataResponse(): MsgUpdateGroupPolicyMetadataResponse {
  return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
  aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
  is(o: any): o is MsgUpdateGroupPolicyMetadataResponse {
    return o && o.$typeUrl === MsgUpdateGroupPolicyMetadataResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateGroupPolicyMetadataResponseSDKType {
    return o && o.$typeUrl === MsgUpdateGroupPolicyMetadataResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateGroupPolicyMetadataResponseAmino {
    return o && o.$typeUrl === MsgUpdateGroupPolicyMetadataResponse.typeUrl;
  },
  encode(_: MsgUpdateGroupPolicyMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    const obj = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return obj;
  },
  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): JsonSafe<MsgUpdateGroupPolicyMetadataResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
  fromSDK(_: MsgUpdateGroupPolicyMetadataResponseSDKType): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },
  toSDK(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateGroupPolicyMetadataResponseAmino): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyMetadataResponseAminoMsg): MsgUpdateGroupPolicyMetadataResponse {
    return MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyMetadataResponseProtoMsg): MsgUpdateGroupPolicyMetadataResponse {
    return MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyMetadataResponse): Uint8Array {
    return MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyMetadataResponse.typeUrl, MsgUpdateGroupPolicyMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyMetadataResponse.aminoType, MsgUpdateGroupPolicyMetadataResponse.typeUrl);
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    address: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
  aminoType: "cosmos-sdk/group/MsgSubmitProposal",
  is(o: any): o is MsgSubmitProposal {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.address === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])) && isSet(o.exec));
  },
  isSDK(o: any): o is MsgSubmitProposalSDKType {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.address === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])) && isSet(o.exec));
  },
  isAmino(o: any): o is MsgSubmitProposalAmino {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.address === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])) && isSet(o.exec));
  },
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    const obj = createBaseMsgSubmitProposal();
    if (isSet(object.address)) obj.address = String(object.address);
    if (Array.isArray(object?.proposers)) obj.proposers = object.proposers.map((e: any) => String(e));
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    if (isSet(object.exec)) obj.exec = execFromJSON(object.exec);
    return obj;
  },
  toJSON(message: MsgSubmitProposal): JsonSafe<MsgSubmitProposal> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.address = object.address ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    return message;
  },
  fromSDK(object: MsgSubmitProposalSDKType): MsgSubmitProposal {
    return {
      address: object?.address,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      metadata: object?.metadata,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toSDK(message: MsgSubmitProposal): MsgSubmitProposalSDKType {
    const obj: any = {};
    obj.address = message.address;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    obj.metadata = message.metadata;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.proposers = object.proposers?.map(e => e) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    }
    return message;
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = message.proposers;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.exec = message.exec === 0 ? undefined : message.exec;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitProposal.typeUrl, MsgSubmitProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitProposal.aminoType, MsgSubmitProposal.typeUrl);
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
  aminoType: "cosmos-sdk/MsgSubmitProposalResponse",
  is(o: any): o is MsgSubmitProposalResponse {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is MsgSubmitProposalResponseSDKType {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is MsgSubmitProposalResponseAmino {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    const obj = createBaseMsgSubmitProposalResponse();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: MsgSubmitProposalResponse): JsonSafe<MsgSubmitProposalResponse> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromSDK(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitProposalResponse.typeUrl, MsgSubmitProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitProposalResponse.aminoType, MsgSubmitProposalResponse.typeUrl);
function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return {
    proposalId: BigInt(0),
    address: ""
  };
}
export const MsgWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
  aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
  is(o: any): o is MsgWithdrawProposal {
    return o && (o.$typeUrl === MsgWithdrawProposal.typeUrl || typeof o.proposalId === "bigint" && typeof o.address === "string");
  },
  isSDK(o: any): o is MsgWithdrawProposalSDKType {
    return o && (o.$typeUrl === MsgWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.address === "string");
  },
  isAmino(o: any): o is MsgWithdrawProposalAmino {
    return o && (o.$typeUrl === MsgWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.address === "string");
  },
  encode(message: MsgWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawProposal {
    const obj = createBaseMsgWithdrawProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: MsgWithdrawProposal): JsonSafe<MsgWithdrawProposal> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawProposal>): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawProposalSDKType): MsgWithdrawProposal {
    return {
      proposalId: object?.proposal_id,
      address: object?.address
    };
  },
  toSDK(message: MsgWithdrawProposal): MsgWithdrawProposalSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: MsgWithdrawProposalAmino): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawProposal): MsgWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawProposalAminoMsg): MsgWithdrawProposal {
    return MsgWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgWithdrawProposal",
      value: MsgWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawProposalProtoMsg): MsgWithdrawProposal {
    return MsgWithdrawProposal.decode(message.value);
  },
  toProto(message: MsgWithdrawProposal): Uint8Array {
    return MsgWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
      value: MsgWithdrawProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawProposal.typeUrl, MsgWithdrawProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawProposal.aminoType, MsgWithdrawProposal.typeUrl);
function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return {};
}
export const MsgWithdrawProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
  aminoType: "cosmos-sdk/MsgWithdrawProposalResponse",
  is(o: any): o is MsgWithdrawProposalResponse {
    return o && o.$typeUrl === MsgWithdrawProposalResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWithdrawProposalResponseSDKType {
    return o && o.$typeUrl === MsgWithdrawProposalResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawProposalResponseAmino {
    return o && o.$typeUrl === MsgWithdrawProposalResponse.typeUrl;
  },
  encode(_: MsgWithdrawProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawProposalResponse {
    const obj = createBaseMsgWithdrawProposalResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawProposalResponse): JsonSafe<MsgWithdrawProposalResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawProposalResponseSDKType): MsgWithdrawProposalResponse {
    return {};
  },
  toSDK(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgWithdrawProposalResponseAmino): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
  toAmino(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawProposalResponseAminoMsg): MsgWithdrawProposalResponse {
    return MsgWithdrawProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawProposalResponseProtoMsg): MsgWithdrawProposalResponse {
    return MsgWithdrawProposalResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawProposalResponse): Uint8Array {
    return MsgWithdrawProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawProposalResponse.typeUrl, MsgWithdrawProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawProposalResponse.aminoType, MsgWithdrawProposalResponse.typeUrl);
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
export const MsgVote = {
  typeUrl: "/cosmos.group.v1.MsgVote",
  aminoType: "cosmos-sdk/group/MsgVote",
  is(o: any): o is MsgVote {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && isSet(o.exec));
  },
  isSDK(o: any): o is MsgVoteSDKType {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && isSet(o.exec));
  },
  isAmino(o: any): o is MsgVoteAmino {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && isSet(o.exec));
  },
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== undefined) {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== undefined) {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = (reader.int32() as any);
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    const obj = createBaseMsgVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (isSet(object.option)) obj.option = voteOptionFromJSON(object.option);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.exec)) obj.exec = execFromJSON(object.exec);
    return obj;
  },
  toJSON(message: MsgVote): JsonSafe<MsgVote> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },
  fromSDK(object: MsgVoteSDKType): MsgVote {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object?.metadata,
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toSDK(message: MsgVote): MsgVoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    obj.metadata = message.metadata;
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    }
    return message;
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.exec = message.exec === 0 ? undefined : message.exec;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVote.typeUrl, MsgVote);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVote.aminoType, MsgVote.typeUrl);
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/cosmos.group.v1.MsgVoteResponse",
  aminoType: "cosmos-sdk/MsgVoteResponse",
  is(o: any): o is MsgVoteResponse {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgVoteResponseSDKType {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVoteResponseAmino {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgVoteResponse {
    const obj = createBaseMsgVoteResponse();
    return obj;
  },
  toJSON(_: MsgVoteResponse): JsonSafe<MsgVoteResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse {
    return {};
  },
  toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVoteResponse.typeUrl, MsgVoteResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVoteResponse.aminoType, MsgVoteResponse.typeUrl);
function createBaseMsgExec(): MsgExec {
  return {
    proposalId: BigInt(0),
    signer: ""
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.group.v1.MsgExec",
  aminoType: "cosmos-sdk/group/MsgExec",
  is(o: any): o is MsgExec {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.proposalId === "bigint" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgExecSDKType {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.proposal_id === "bigint" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgExecAmino {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.proposal_id === "bigint" && typeof o.signer === "string");
  },
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.signer !== undefined) {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExec {
    const obj = createBaseMsgExec();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgExec): JsonSafe<MsgExec> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgExecSDKType): MsgExec {
    return {
      proposalId: object?.proposal_id,
      signer: object?.signer
    };
  },
  toSDK(message: MsgExec): MsgExecSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExec.typeUrl, MsgExec);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExec.aminoType, MsgExec.typeUrl);
function createBaseMsgExecResponse(): MsgExecResponse {
  return {};
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.group.v1.MsgExecResponse",
  aminoType: "cosmos-sdk/MsgExecResponse",
  is(o: any): o is MsgExecResponse {
    return o && o.$typeUrl === MsgExecResponse.typeUrl;
  },
  isSDK(o: any): o is MsgExecResponseSDKType {
    return o && o.$typeUrl === MsgExecResponse.typeUrl;
  },
  isAmino(o: any): o is MsgExecResponseAmino {
    return o && o.$typeUrl === MsgExecResponse.typeUrl;
  },
  encode(_: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgExecResponse {
    const obj = createBaseMsgExecResponse();
    return obj;
  },
  toJSON(_: MsgExecResponse): JsonSafe<MsgExecResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  },
  fromSDK(_: MsgExecResponseSDKType): MsgExecResponse {
    return {};
  },
  toSDK(_: MsgExecResponse): MsgExecResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  },
  toAmino(_: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecResponse.typeUrl, MsgExecResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecResponse.aminoType, MsgExecResponse.typeUrl);
function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    address: "",
    groupId: BigInt(0)
  };
}
export const MsgLeaveGroup = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
  aminoType: "cosmos-sdk/group/MsgLeaveGroup",
  is(o: any): o is MsgLeaveGroup {
    return o && (o.$typeUrl === MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is MsgLeaveGroupSDKType {
    return o && (o.$typeUrl === MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is MsgLeaveGroupAmino {
    return o && (o.$typeUrl === MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint");
  },
  encode(message: MsgLeaveGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== undefined) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLeaveGroup {
    const obj = createBaseMsgLeaveGroup();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: MsgLeaveGroup): JsonSafe<MsgLeaveGroup> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLeaveGroup>): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? "";
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
  fromSDK(object: MsgLeaveGroupSDKType): MsgLeaveGroup {
    return {
      address: object?.address,
      groupId: object?.group_id
    };
  },
  toSDK(message: MsgLeaveGroup): MsgLeaveGroupSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: MsgLeaveGroupAmino): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: MsgLeaveGroup): MsgLeaveGroupAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupAminoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveGroup): MsgLeaveGroupAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgLeaveGroup",
      value: MsgLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveGroupProtoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.decode(message.value);
  },
  toProto(message: MsgLeaveGroup): Uint8Array {
    return MsgLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroup): MsgLeaveGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
      value: MsgLeaveGroup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgLeaveGroup.typeUrl, MsgLeaveGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLeaveGroup.aminoType, MsgLeaveGroup.typeUrl);
function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}
export const MsgLeaveGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
  aminoType: "cosmos-sdk/MsgLeaveGroupResponse",
  is(o: any): o is MsgLeaveGroupResponse {
    return o && o.$typeUrl === MsgLeaveGroupResponse.typeUrl;
  },
  isSDK(o: any): o is MsgLeaveGroupResponseSDKType {
    return o && o.$typeUrl === MsgLeaveGroupResponse.typeUrl;
  },
  isAmino(o: any): o is MsgLeaveGroupResponseAmino {
    return o && o.$typeUrl === MsgLeaveGroupResponse.typeUrl;
  },
  encode(_: MsgLeaveGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgLeaveGroupResponse {
    const obj = createBaseMsgLeaveGroupResponse();
    return obj;
  },
  toJSON(_: MsgLeaveGroupResponse): JsonSafe<MsgLeaveGroupResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  fromSDK(_: MsgLeaveGroupResponseSDKType): MsgLeaveGroupResponse {
    return {};
  },
  toSDK(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgLeaveGroupResponseAmino): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupResponseAminoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveGroupResponseProtoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.decode(message.value);
  },
  toProto(message: MsgLeaveGroupResponse): Uint8Array {
    return MsgLeaveGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgLeaveGroupResponse.typeUrl, MsgLeaveGroupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLeaveGroupResponse.aminoType, MsgLeaveGroupResponse.typeUrl);