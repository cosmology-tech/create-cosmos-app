import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, GroupPolicyInfo, GroupPolicyInfoAmino, GroupPolicyInfoSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType } from "./types";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.group.v1";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: Long;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  groupPolicySeq: Long;
  /** group_policies is the list of group policies info. */
  groupPolicies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: Long;
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
  group_seq: string;
  /** groups is the list of groups info. */
  groups: GroupInfoAmino[];
  /** group_members is the list of groups members. */
  group_members: GroupMemberAmino[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  group_policy_seq: string;
  /** group_policies is the list of group policies info. */
  group_policies: GroupPolicyInfoAmino[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposal_seq: string;
  /** proposals is the list of proposals. */
  proposals: ProposalAmino[];
  /** votes is the list of votes. */
  votes: VoteAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the group module's genesis state. */
export interface GenesisStateSDKType {
  group_seq: Long;
  groups: GroupInfoSDKType[];
  group_members: GroupMemberSDKType[];
  group_policy_seq: Long;
  group_policies: GroupPolicyInfoSDKType[];
  proposal_seq: Long;
  proposals: ProposalSDKType[];
  votes: VoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    groupSeq: Long.UZERO,
    groups: [],
    groupMembers: [],
    groupPolicySeq: Long.UZERO,
    groupPolicies: [],
    proposalSeq: Long.UZERO,
    proposals: [],
    votes: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.group.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupSeq.isZero()) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.groupPolicySeq.isZero()) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.proposalSeq.isZero()) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = (reader.uint64() as Long);
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.groupPolicySeq = (reader.uint64() as Long);
          break;
        case 5:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposalSeq = (reader.uint64() as Long);
          break;
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      groupSeq: isSet(object.groupSeq) ? Long.fromValue(object.groupSeq) : Long.UZERO,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      groupMembers: Array.isArray(object?.groupMembers) ? object.groupMembers.map((e: any) => GroupMember.fromJSON(e)) : [],
      groupPolicySeq: isSet(object.groupPolicySeq) ? Long.fromValue(object.groupPolicySeq) : Long.UZERO,
      groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e)) : [],
      proposalSeq: isSet(object.proposalSeq) ? Long.fromValue(object.proposalSeq) : Long.UZERO,
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.groupSeq !== undefined && (obj.groupSeq = (message.groupSeq || Long.UZERO).toString());
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.groupMembers = message.groupMembers.map(e => e ? GroupMember.toJSON(e) : undefined);
    } else {
      obj.groupMembers = [];
    }
    message.groupPolicySeq !== undefined && (obj.groupPolicySeq = (message.groupPolicySeq || Long.UZERO).toString());
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
    } else {
      obj.groupPolicies = [];
    }
    message.proposalSeq !== undefined && (obj.proposalSeq = (message.proposalSeq || Long.UZERO).toString());
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? Long.fromValue(object.groupSeq) : Long.UZERO;
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.groupMembers = object.groupMembers?.map(e => GroupMember.fromPartial(e)) || [];
    message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? Long.fromValue(object.groupPolicySeq) : Long.UZERO;
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? Long.fromValue(object.proposalSeq) : Long.UZERO;
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      groupSeq: object?.group_seq,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromSDK(e)) : [],
      groupMembers: Array.isArray(object?.group_members) ? object.group_members.map((e: any) => GroupMember.fromSDK(e)) : [],
      groupPolicySeq: object?.group_policy_seq,
      groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e: any) => GroupPolicyInfo.fromSDK(e)) : [],
      proposalSeq: object?.proposal_seq,
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDK(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.group_seq = message.groupSeq;
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.group_members = message.groupMembers.map(e => e ? GroupMember.toSDK(e) : undefined);
    } else {
      obj.group_members = [];
    }
    obj.group_policy_seq = message.groupPolicySeq;
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toSDK(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    obj.proposal_seq = message.proposalSeq;
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      groupSeq: Long.fromString(object.group_seq),
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromAmino(e)) : [],
      groupMembers: Array.isArray(object?.group_members) ? object.group_members.map((e: any) => GroupMember.fromAmino(e)) : [],
      groupPolicySeq: Long.fromString(object.group_policy_seq),
      groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e: any) => GroupPolicyInfo.fromAmino(e)) : [],
      proposalSeq: Long.fromString(object.proposal_seq),
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromAmino(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.group_seq = message.groupSeq ? message.groupSeq.toString() : undefined;
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.group_members = message.groupMembers.map(e => e ? GroupMember.toAmino(e) : undefined);
    } else {
      obj.group_members = [];
    }
    obj.group_policy_seq = message.groupPolicySeq ? message.groupPolicySeq.toString() : undefined;
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    obj.proposal_seq = message.proposalSeq ? message.proposalSeq.toString() : undefined;
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};