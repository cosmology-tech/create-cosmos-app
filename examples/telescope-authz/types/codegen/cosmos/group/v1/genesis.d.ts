import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, GroupPolicyInfo, GroupPolicyInfoAmino, GroupPolicyInfoSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
    /**
     * group_seq is the group table orm.Sequence,
     * it is used to get the next group ID.
     */
    groupSeq: bigint;
    /** groups is the list of groups info. */
    groups: GroupInfo[];
    /** group_members is the list of groups members. */
    groupMembers: GroupMember[];
    /**
     * group_policy_seq is the group policy table orm.Sequence,
     * it is used to generate the next group policy account address.
     */
    groupPolicySeq: bigint;
    /** group_policies is the list of group policies info. */
    groupPolicies: GroupPolicyInfo[];
    /**
     * proposal_seq is the proposal table orm.Sequence,
     * it is used to get the next proposal ID.
     */
    proposalSeq: bigint;
    /** proposals is the list of proposals. */
    proposals: Proposal[];
    /** votes is the list of votes. */
    votes: Vote[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.group.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateAmino {
    /**
     * group_seq is the group table orm.Sequence,
     * it is used to get the next group ID.
     */
    group_seq?: string;
    /** groups is the list of groups info. */
    groups?: GroupInfoAmino[];
    /** group_members is the list of groups members. */
    group_members?: GroupMemberAmino[];
    /**
     * group_policy_seq is the group policy table orm.Sequence,
     * it is used to generate the next group policy account address.
     */
    group_policy_seq?: string;
    /** group_policies is the list of group policies info. */
    group_policies?: GroupPolicyInfoAmino[];
    /**
     * proposal_seq is the proposal table orm.Sequence,
     * it is used to get the next proposal ID.
     */
    proposal_seq?: string;
    /** proposals is the list of proposals. */
    proposals?: ProposalAmino[];
    /** votes is the list of votes. */
    votes?: VoteAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateSDKType {
    group_seq: bigint;
    groups: GroupInfoSDKType[];
    group_members: GroupMemberSDKType[];
    group_policy_seq: bigint;
    group_policies: GroupPolicyInfoSDKType[];
    proposal_seq: bigint;
    proposals: ProposalSDKType[];
    votes: VoteSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
