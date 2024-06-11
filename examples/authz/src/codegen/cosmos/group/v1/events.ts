//@ts-nocheck
import { ProposalExecutorResult, ProposalExecutorResultSDKType, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.group.v1";
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
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: BigInt(0)
  };
}
export const EventCreateGroup = {
  typeUrl: "/cosmos.group.v1.EventCreateGroup",
  aminoType: "cosmos-sdk/EventCreateGroup",
  is(o: any): o is EventCreateGroup {
    return o && (o.$typeUrl === EventCreateGroup.typeUrl || typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is EventCreateGroupSDKType {
    return o && (o.$typeUrl === EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is EventCreateGroupAmino {
    return o && (o.$typeUrl === EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: EventCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
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
  fromJSON(object: any): EventCreateGroup {
    const obj = createBaseEventCreateGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: EventCreateGroup): JsonSafe<EventCreateGroup> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
  fromSDK(object: EventCreateGroupSDKType): EventCreateGroup {
    return {
      groupId: object?.group_id
    };
  },
  toSDK(message: EventCreateGroup): EventCreateGroupSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: EventCreateGroupAmino): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventCreateGroup): EventCreateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup {
    return EventCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroup): EventCreateGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventCreateGroup",
      value: EventCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup {
    return EventCreateGroup.decode(message.value);
  },
  toProto(message: EventCreateGroup): Uint8Array {
    return EventCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroup",
      value: EventCreateGroup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventCreateGroup.typeUrl, EventCreateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(EventCreateGroup.aminoType, EventCreateGroup.typeUrl);
function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: BigInt(0)
  };
}
export const EventUpdateGroup = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroup",
  aminoType: "cosmos-sdk/EventUpdateGroup",
  is(o: any): o is EventUpdateGroup {
    return o && (o.$typeUrl === EventUpdateGroup.typeUrl || typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is EventUpdateGroupSDKType {
    return o && (o.$typeUrl === EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is EventUpdateGroupAmino {
    return o && (o.$typeUrl === EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: EventUpdateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
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
  fromJSON(object: any): EventUpdateGroup {
    const obj = createBaseEventUpdateGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: EventUpdateGroup): JsonSafe<EventUpdateGroup> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
  fromSDK(object: EventUpdateGroupSDKType): EventUpdateGroup {
    return {
      groupId: object?.group_id
    };
  },
  toSDK(message: EventUpdateGroup): EventUpdateGroupSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventUpdateGroup): EventUpdateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupAminoMsg): EventUpdateGroup {
    return EventUpdateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroup): EventUpdateGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventUpdateGroup",
      value: EventUpdateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: EventUpdateGroupProtoMsg): EventUpdateGroup {
    return EventUpdateGroup.decode(message.value);
  },
  toProto(message: EventUpdateGroup): Uint8Array {
    return EventUpdateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroup): EventUpdateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroup",
      value: EventUpdateGroup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventUpdateGroup.typeUrl, EventUpdateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(EventUpdateGroup.aminoType, EventUpdateGroup.typeUrl);
function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return {
    address: ""
  };
}
export const EventCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
  aminoType: "cosmos-sdk/EventCreateGroupPolicy",
  is(o: any): o is EventCreateGroupPolicy {
    return o && (o.$typeUrl === EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is EventCreateGroupPolicySDKType {
    return o && (o.$typeUrl === EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is EventCreateGroupPolicyAmino {
    return o && (o.$typeUrl === EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  encode(message: EventCreateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
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
  fromJSON(object: any): EventCreateGroupPolicy {
    const obj = createBaseEventCreateGroupPolicy();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventCreateGroupPolicy): JsonSafe<EventCreateGroupPolicy> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: EventCreateGroupPolicySDKType): EventCreateGroupPolicy {
    return {
      address: object?.address
    };
  },
  toSDK(message: EventCreateGroupPolicy): EventCreateGroupPolicySDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: EventCreateGroupPolicyAmino): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventCreateGroupPolicy): EventCreateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupPolicyAminoMsg): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: EventCreateGroupPolicyProtoMsg): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.decode(message.value);
  },
  toProto(message: EventCreateGroupPolicy): Uint8Array {
    return EventCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventCreateGroupPolicy.typeUrl, EventCreateGroupPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(EventCreateGroupPolicy.aminoType, EventCreateGroupPolicy.typeUrl);
function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return {
    address: ""
  };
}
export const EventUpdateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
  aminoType: "cosmos-sdk/EventUpdateGroupPolicy",
  is(o: any): o is EventUpdateGroupPolicy {
    return o && (o.$typeUrl === EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is EventUpdateGroupPolicySDKType {
    return o && (o.$typeUrl === EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is EventUpdateGroupPolicyAmino {
    return o && (o.$typeUrl === EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  encode(message: EventUpdateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
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
  fromJSON(object: any): EventUpdateGroupPolicy {
    const obj = createBaseEventUpdateGroupPolicy();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventUpdateGroupPolicy): JsonSafe<EventUpdateGroupPolicy> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: EventUpdateGroupPolicySDKType): EventUpdateGroupPolicy {
    return {
      address: object?.address
    };
  },
  toSDK(message: EventUpdateGroupPolicy): EventUpdateGroupPolicySDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: EventUpdateGroupPolicyAmino): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupPolicyAminoMsg): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: EventUpdateGroupPolicyProtoMsg): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.decode(message.value);
  },
  toProto(message: EventUpdateGroupPolicy): Uint8Array {
    return EventUpdateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventUpdateGroupPolicy.typeUrl, EventUpdateGroupPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(EventUpdateGroupPolicy.aminoType, EventUpdateGroupPolicy.typeUrl);
function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    proposalId: BigInt(0)
  };
}
export const EventSubmitProposal = {
  typeUrl: "/cosmos.group.v1.EventSubmitProposal",
  aminoType: "cosmos-sdk/EventSubmitProposal",
  is(o: any): o is EventSubmitProposal {
    return o && (o.$typeUrl === EventSubmitProposal.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is EventSubmitProposalSDKType {
    return o && (o.$typeUrl === EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is EventSubmitProposalAmino {
    return o && (o.$typeUrl === EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: EventSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
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
  fromJSON(object: any): EventSubmitProposal {
    const obj = createBaseEventSubmitProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventSubmitProposal): JsonSafe<EventSubmitProposal> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromSDK(object: EventSubmitProposalSDKType): EventSubmitProposal {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: EventSubmitProposal): EventSubmitProposalSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: EventSubmitProposalAmino): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventSubmitProposal): EventSubmitProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubmitProposalAminoMsg): EventSubmitProposal {
    return EventSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventSubmitProposal): EventSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/EventSubmitProposal",
      value: EventSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: EventSubmitProposalProtoMsg): EventSubmitProposal {
    return EventSubmitProposal.decode(message.value);
  },
  toProto(message: EventSubmitProposal): Uint8Array {
    return EventSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: EventSubmitProposal): EventSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventSubmitProposal",
      value: EventSubmitProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSubmitProposal.typeUrl, EventSubmitProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(EventSubmitProposal.aminoType, EventSubmitProposal.typeUrl);
function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    proposalId: BigInt(0)
  };
}
export const EventWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
  aminoType: "cosmos-sdk/EventWithdrawProposal",
  is(o: any): o is EventWithdrawProposal {
    return o && (o.$typeUrl === EventWithdrawProposal.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is EventWithdrawProposalSDKType {
    return o && (o.$typeUrl === EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is EventWithdrawProposalAmino {
    return o && (o.$typeUrl === EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: EventWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
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
  fromJSON(object: any): EventWithdrawProposal {
    const obj = createBaseEventWithdrawProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventWithdrawProposal): JsonSafe<EventWithdrawProposal> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromSDK(object: EventWithdrawProposalSDKType): EventWithdrawProposal {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: EventWithdrawProposal): EventWithdrawProposalSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: EventWithdrawProposalAmino): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventWithdrawProposal): EventWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawProposalAminoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventWithdrawProposal): EventWithdrawProposalAminoMsg {
    return {
      type: "cosmos-sdk/EventWithdrawProposal",
      value: EventWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: EventWithdrawProposalProtoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.decode(message.value);
  },
  toProto(message: EventWithdrawProposal): Uint8Array {
    return EventWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawProposal): EventWithdrawProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
      value: EventWithdrawProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWithdrawProposal.typeUrl, EventWithdrawProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(EventWithdrawProposal.aminoType, EventWithdrawProposal.typeUrl);
function createBaseEventVote(): EventVote {
  return {
    proposalId: BigInt(0)
  };
}
export const EventVote = {
  typeUrl: "/cosmos.group.v1.EventVote",
  aminoType: "cosmos-sdk/EventVote",
  is(o: any): o is EventVote {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is EventVoteSDKType {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is EventVoteAmino {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: EventVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
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
  fromJSON(object: any): EventVote {
    const obj = createBaseEventVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventVote): JsonSafe<EventVote> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = createBaseEventVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromSDK(object: EventVoteSDKType): EventVote {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: EventVote): EventVoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: EventVoteAmino): EventVote {
    const message = createBaseEventVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventVote): EventVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVoteAminoMsg): EventVote {
    return EventVote.fromAmino(object.value);
  },
  toAminoMsg(message: EventVote): EventVoteAminoMsg {
    return {
      type: "cosmos-sdk/EventVote",
      value: EventVote.toAmino(message)
    };
  },
  fromProtoMsg(message: EventVoteProtoMsg): EventVote {
    return EventVote.decode(message.value);
  },
  toProto(message: EventVote): Uint8Array {
    return EventVote.encode(message).finish();
  },
  toProtoMsg(message: EventVote): EventVoteProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventVote",
      value: EventVote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventVote.typeUrl, EventVote);
GlobalDecoderRegistry.registerAminoProtoMapping(EventVote.aminoType, EventVote.typeUrl);
function createBaseEventExec(): EventExec {
  return {
    proposalId: BigInt(0),
    result: 0
  };
}
export const EventExec = {
  typeUrl: "/cosmos.group.v1.EventExec",
  aminoType: "cosmos-sdk/EventExec",
  is(o: any): o is EventExec {
    return o && (o.$typeUrl === EventExec.typeUrl || typeof o.proposalId === "bigint" && isSet(o.result));
  },
  isSDK(o: any): o is EventExecSDKType {
    return o && (o.$typeUrl === EventExec.typeUrl || typeof o.proposal_id === "bigint" && isSet(o.result));
  },
  isAmino(o: any): o is EventExecAmino {
    return o && (o.$typeUrl === EventExec.typeUrl || typeof o.proposal_id === "bigint" && isSet(o.result));
  },
  encode(message: EventExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExec {
    const obj = createBaseEventExec();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.result)) obj.result = proposalExecutorResultFromJSON(object.result);
    return obj;
  },
  toJSON(message: EventExec): JsonSafe<EventExec> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },
  fromPartial(object: DeepPartial<EventExec>): EventExec {
    const message = createBaseEventExec();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.result = object.result ?? 0;
    return message;
  },
  fromSDK(object: EventExecSDKType): EventExec {
    return {
      proposalId: object?.proposal_id,
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1
    };
  },
  toSDK(message: EventExec): EventExecSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },
  fromAmino(object: EventExecAmino): EventExec {
    const message = createBaseEventExec();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: EventExec): EventExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: EventExecAminoMsg): EventExec {
    return EventExec.fromAmino(object.value);
  },
  toAminoMsg(message: EventExec): EventExecAminoMsg {
    return {
      type: "cosmos-sdk/EventExec",
      value: EventExec.toAmino(message)
    };
  },
  fromProtoMsg(message: EventExecProtoMsg): EventExec {
    return EventExec.decode(message.value);
  },
  toProto(message: EventExec): Uint8Array {
    return EventExec.encode(message).finish();
  },
  toProtoMsg(message: EventExec): EventExecProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventExec",
      value: EventExec.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExec.typeUrl, EventExec);
GlobalDecoderRegistry.registerAminoProtoMapping(EventExec.aminoType, EventExec.typeUrl);
function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    groupId: BigInt(0),
    address: ""
  };
}
export const EventLeaveGroup = {
  typeUrl: "/cosmos.group.v1.EventLeaveGroup",
  aminoType: "cosmos-sdk/EventLeaveGroup",
  is(o: any): o is EventLeaveGroup {
    return o && (o.$typeUrl === EventLeaveGroup.typeUrl || typeof o.groupId === "bigint" && typeof o.address === "string");
  },
  isSDK(o: any): o is EventLeaveGroupSDKType {
    return o && (o.$typeUrl === EventLeaveGroup.typeUrl || typeof o.group_id === "bigint" && typeof o.address === "string");
  },
  isAmino(o: any): o is EventLeaveGroupAmino {
    return o && (o.$typeUrl === EventLeaveGroup.typeUrl || typeof o.group_id === "bigint" && typeof o.address === "string");
  },
  encode(message: EventLeaveGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
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
  fromJSON(object: any): EventLeaveGroup {
    const obj = createBaseEventLeaveGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventLeaveGroup): JsonSafe<EventLeaveGroup> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: EventLeaveGroupSDKType): EventLeaveGroup {
    return {
      groupId: object?.group_id,
      address: object?.address
    };
  },
  toSDK(message: EventLeaveGroup): EventLeaveGroupSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventLeaveGroup): EventLeaveGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventLeaveGroupAminoMsg): EventLeaveGroup {
    return EventLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventLeaveGroup): EventLeaveGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventLeaveGroup",
      value: EventLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: EventLeaveGroupProtoMsg): EventLeaveGroup {
    return EventLeaveGroup.decode(message.value);
  },
  toProto(message: EventLeaveGroup): Uint8Array {
    return EventLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: EventLeaveGroup): EventLeaveGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventLeaveGroup",
      value: EventLeaveGroup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventLeaveGroup.typeUrl, EventLeaveGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(EventLeaveGroup.aminoType, EventLeaveGroup.typeUrl);