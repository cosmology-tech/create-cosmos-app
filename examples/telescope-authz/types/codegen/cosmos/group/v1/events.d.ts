import { ProposalExecutorResult } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
}
export interface EventCreateGroupProtoMsg {
    typeUrl: "/cosmos.group.v1.EventCreateGroup";
    value: Uint8Array;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
}
export interface EventCreateGroupAminoMsg {
    type: "cosmos-sdk/EventCreateGroup";
    value: EventCreateGroupAmino;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
    group_id: bigint;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
}
export interface EventUpdateGroupProtoMsg {
    typeUrl: "/cosmos.group.v1.EventUpdateGroup";
    value: Uint8Array;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
}
export interface EventUpdateGroupAminoMsg {
    type: "cosmos-sdk/EventUpdateGroup";
    value: EventUpdateGroupAmino;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
    group_id: bigint;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
export interface EventCreateGroupPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy";
    value: Uint8Array;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicyAmino {
    /** address is the account address of the group policy. */
    address?: string;
}
export interface EventCreateGroupPolicyAminoMsg {
    type: "cosmos-sdk/EventCreateGroupPolicy";
    value: EventCreateGroupPolicyAmino;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicySDKType {
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
export interface EventUpdateGroupPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy";
    value: Uint8Array;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicyAmino {
    /** address is the account address of the group policy. */
    address?: string;
}
export interface EventUpdateGroupPolicyAminoMsg {
    type: "cosmos-sdk/EventUpdateGroupPolicy";
    value: EventUpdateGroupPolicyAmino;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicySDKType {
    address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface EventSubmitProposalProtoMsg {
    typeUrl: "/cosmos.group.v1.EventSubmitProposal";
    value: Uint8Array;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface EventSubmitProposalAminoMsg {
    type: "cosmos-sdk/EventSubmitProposal";
    value: EventSubmitProposalAmino;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalSDKType {
    proposal_id: bigint;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface EventWithdrawProposalProtoMsg {
    typeUrl: "/cosmos.group.v1.EventWithdrawProposal";
    value: Uint8Array;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface EventWithdrawProposalAminoMsg {
    type: "cosmos-sdk/EventWithdrawProposal";
    value: EventWithdrawProposalAmino;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalSDKType {
    proposal_id: bigint;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: bigint;
}
export interface EventVoteProtoMsg {
    typeUrl: "/cosmos.group.v1.EventVote";
    value: Uint8Array;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id?: string;
}
export interface EventVoteAminoMsg {
    type: "cosmos-sdk/EventVote";
    value: EventVoteAmino;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
    proposal_id: bigint;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: bigint;
    /** result is the proposal execution result. */
    result: ProposalExecutorResult;
}
export interface EventExecProtoMsg {
    typeUrl: "/cosmos.group.v1.EventExec";
    value: Uint8Array;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecAmino {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id?: string;
    /** result is the proposal execution result. */
    result?: ProposalExecutorResult;
}
export interface EventExecAminoMsg {
    type: "cosmos-sdk/EventExec";
    value: EventExecAmino;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
    proposal_id: bigint;
    result: ProposalExecutorResult;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** address is the account address of the group member. */
    address: string;
}
export interface EventLeaveGroupProtoMsg {
    typeUrl: "/cosmos.group.v1.EventLeaveGroup";
    value: Uint8Array;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** address is the account address of the group member. */
    address?: string;
}
export interface EventLeaveGroupAminoMsg {
    type: "cosmos-sdk/EventLeaveGroup";
    value: EventLeaveGroupAmino;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupSDKType {
    group_id: bigint;
    address: string;
}
export declare const EventCreateGroup: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventCreateGroup;
    isSDK(o: any): o is EventCreateGroupSDKType;
    isAmino(o: any): o is EventCreateGroupAmino;
    encode(message: EventCreateGroup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroup;
    fromJSON(object: any): EventCreateGroup;
    toJSON(message: EventCreateGroup): unknown;
    fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup;
    fromSDK(object: EventCreateGroupSDKType): EventCreateGroup;
    toSDK(message: EventCreateGroup): EventCreateGroupSDKType;
    fromAmino(object: EventCreateGroupAmino): EventCreateGroup;
    toAmino(message: EventCreateGroup): EventCreateGroupAmino;
    fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup;
    toAminoMsg(message: EventCreateGroup): EventCreateGroupAminoMsg;
    fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup;
    toProto(message: EventCreateGroup): Uint8Array;
    toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg;
};
export declare const EventUpdateGroup: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventUpdateGroup;
    isSDK(o: any): o is EventUpdateGroupSDKType;
    isAmino(o: any): o is EventUpdateGroupAmino;
    encode(message: EventUpdateGroup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroup;
    fromJSON(object: any): EventUpdateGroup;
    toJSON(message: EventUpdateGroup): unknown;
    fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup;
    fromSDK(object: EventUpdateGroupSDKType): EventUpdateGroup;
    toSDK(message: EventUpdateGroup): EventUpdateGroupSDKType;
    fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup;
    toAmino(message: EventUpdateGroup): EventUpdateGroupAmino;
    fromAminoMsg(object: EventUpdateGroupAminoMsg): EventUpdateGroup;
    toAminoMsg(message: EventUpdateGroup): EventUpdateGroupAminoMsg;
    fromProtoMsg(message: EventUpdateGroupProtoMsg): EventUpdateGroup;
    toProto(message: EventUpdateGroup): Uint8Array;
    toProtoMsg(message: EventUpdateGroup): EventUpdateGroupProtoMsg;
};
export declare const EventCreateGroupPolicy: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventCreateGroupPolicy;
    isSDK(o: any): o is EventCreateGroupPolicySDKType;
    isAmino(o: any): o is EventCreateGroupPolicyAmino;
    encode(message: EventCreateGroupPolicy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroupPolicy;
    fromJSON(object: any): EventCreateGroupPolicy;
    toJSON(message: EventCreateGroupPolicy): unknown;
    fromPartial(object: DeepPartial<EventCreateGroupPolicy>): EventCreateGroupPolicy;
    fromSDK(object: EventCreateGroupPolicySDKType): EventCreateGroupPolicy;
    toSDK(message: EventCreateGroupPolicy): EventCreateGroupPolicySDKType;
    fromAmino(object: EventCreateGroupPolicyAmino): EventCreateGroupPolicy;
    toAmino(message: EventCreateGroupPolicy): EventCreateGroupPolicyAmino;
    fromAminoMsg(object: EventCreateGroupPolicyAminoMsg): EventCreateGroupPolicy;
    toAminoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyAminoMsg;
    fromProtoMsg(message: EventCreateGroupPolicyProtoMsg): EventCreateGroupPolicy;
    toProto(message: EventCreateGroupPolicy): Uint8Array;
    toProtoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyProtoMsg;
};
export declare const EventUpdateGroupPolicy: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventUpdateGroupPolicy;
    isSDK(o: any): o is EventUpdateGroupPolicySDKType;
    isAmino(o: any): o is EventUpdateGroupPolicyAmino;
    encode(message: EventUpdateGroupPolicy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroupPolicy;
    fromJSON(object: any): EventUpdateGroupPolicy;
    toJSON(message: EventUpdateGroupPolicy): unknown;
    fromPartial(object: DeepPartial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy;
    fromSDK(object: EventUpdateGroupPolicySDKType): EventUpdateGroupPolicy;
    toSDK(message: EventUpdateGroupPolicy): EventUpdateGroupPolicySDKType;
    fromAmino(object: EventUpdateGroupPolicyAmino): EventUpdateGroupPolicy;
    toAmino(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAmino;
    fromAminoMsg(object: EventUpdateGroupPolicyAminoMsg): EventUpdateGroupPolicy;
    toAminoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAminoMsg;
    fromProtoMsg(message: EventUpdateGroupPolicyProtoMsg): EventUpdateGroupPolicy;
    toProto(message: EventUpdateGroupPolicy): Uint8Array;
    toProtoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyProtoMsg;
};
export declare const EventSubmitProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventSubmitProposal;
    isSDK(o: any): o is EventSubmitProposalSDKType;
    isAmino(o: any): o is EventSubmitProposalAmino;
    encode(message: EventSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventSubmitProposal;
    fromJSON(object: any): EventSubmitProposal;
    toJSON(message: EventSubmitProposal): unknown;
    fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal;
    fromSDK(object: EventSubmitProposalSDKType): EventSubmitProposal;
    toSDK(message: EventSubmitProposal): EventSubmitProposalSDKType;
    fromAmino(object: EventSubmitProposalAmino): EventSubmitProposal;
    toAmino(message: EventSubmitProposal): EventSubmitProposalAmino;
    fromAminoMsg(object: EventSubmitProposalAminoMsg): EventSubmitProposal;
    toAminoMsg(message: EventSubmitProposal): EventSubmitProposalAminoMsg;
    fromProtoMsg(message: EventSubmitProposalProtoMsg): EventSubmitProposal;
    toProto(message: EventSubmitProposal): Uint8Array;
    toProtoMsg(message: EventSubmitProposal): EventSubmitProposalProtoMsg;
};
export declare const EventWithdrawProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventWithdrawProposal;
    isSDK(o: any): o is EventWithdrawProposalSDKType;
    isAmino(o: any): o is EventWithdrawProposalAmino;
    encode(message: EventWithdrawProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawProposal;
    fromJSON(object: any): EventWithdrawProposal;
    toJSON(message: EventWithdrawProposal): unknown;
    fromPartial(object: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal;
    fromSDK(object: EventWithdrawProposalSDKType): EventWithdrawProposal;
    toSDK(message: EventWithdrawProposal): EventWithdrawProposalSDKType;
    fromAmino(object: EventWithdrawProposalAmino): EventWithdrawProposal;
    toAmino(message: EventWithdrawProposal): EventWithdrawProposalAmino;
    fromAminoMsg(object: EventWithdrawProposalAminoMsg): EventWithdrawProposal;
    toAminoMsg(message: EventWithdrawProposal): EventWithdrawProposalAminoMsg;
    fromProtoMsg(message: EventWithdrawProposalProtoMsg): EventWithdrawProposal;
    toProto(message: EventWithdrawProposal): Uint8Array;
    toProtoMsg(message: EventWithdrawProposal): EventWithdrawProposalProtoMsg;
};
export declare const EventVote: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventVote;
    isSDK(o: any): o is EventVoteSDKType;
    isAmino(o: any): o is EventVoteAmino;
    encode(message: EventVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventVote;
    fromJSON(object: any): EventVote;
    toJSON(message: EventVote): unknown;
    fromPartial(object: DeepPartial<EventVote>): EventVote;
    fromSDK(object: EventVoteSDKType): EventVote;
    toSDK(message: EventVote): EventVoteSDKType;
    fromAmino(object: EventVoteAmino): EventVote;
    toAmino(message: EventVote): EventVoteAmino;
    fromAminoMsg(object: EventVoteAminoMsg): EventVote;
    toAminoMsg(message: EventVote): EventVoteAminoMsg;
    fromProtoMsg(message: EventVoteProtoMsg): EventVote;
    toProto(message: EventVote): Uint8Array;
    toProtoMsg(message: EventVote): EventVoteProtoMsg;
};
export declare const EventExec: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventExec;
    isSDK(o: any): o is EventExecSDKType;
    isAmino(o: any): o is EventExecAmino;
    encode(message: EventExec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventExec;
    fromJSON(object: any): EventExec;
    toJSON(message: EventExec): unknown;
    fromPartial(object: DeepPartial<EventExec>): EventExec;
    fromSDK(object: EventExecSDKType): EventExec;
    toSDK(message: EventExec): EventExecSDKType;
    fromAmino(object: EventExecAmino): EventExec;
    toAmino(message: EventExec): EventExecAmino;
    fromAminoMsg(object: EventExecAminoMsg): EventExec;
    toAminoMsg(message: EventExec): EventExecAminoMsg;
    fromProtoMsg(message: EventExecProtoMsg): EventExec;
    toProto(message: EventExec): Uint8Array;
    toProtoMsg(message: EventExec): EventExecProtoMsg;
};
export declare const EventLeaveGroup: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventLeaveGroup;
    isSDK(o: any): o is EventLeaveGroupSDKType;
    isAmino(o: any): o is EventLeaveGroupAmino;
    encode(message: EventLeaveGroup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventLeaveGroup;
    fromJSON(object: any): EventLeaveGroup;
    toJSON(message: EventLeaveGroup): unknown;
    fromPartial(object: DeepPartial<EventLeaveGroup>): EventLeaveGroup;
    fromSDK(object: EventLeaveGroupSDKType): EventLeaveGroup;
    toSDK(message: EventLeaveGroup): EventLeaveGroupSDKType;
    fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup;
    toAmino(message: EventLeaveGroup): EventLeaveGroupAmino;
    fromAminoMsg(object: EventLeaveGroupAminoMsg): EventLeaveGroup;
    toAminoMsg(message: EventLeaveGroup): EventLeaveGroupAminoMsg;
    fromProtoMsg(message: EventLeaveGroupProtoMsg): EventLeaveGroup;
    toProto(message: EventLeaveGroup): Uint8Array;
    toProtoMsg(message: EventLeaveGroup): EventLeaveGroupProtoMsg;
};
