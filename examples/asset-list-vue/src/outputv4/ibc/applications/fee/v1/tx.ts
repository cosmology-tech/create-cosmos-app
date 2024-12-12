import { Fee, FeeSDKType, PacketFee, PacketFeeSDKType } from "./fee";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "ibc.applications.fee.v1";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface ReactiveMsgRegisterPayee {
  portId: ComputedRef<string>;
  channelId: ComputedRef<string>;
  relayer: ComputedRef<string>;
  payee: ComputedRef<string>;
}
export interface MsgRegisterPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee";
  value: Uint8Array;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayeeSDKType {
  port_id: string;
  channel_id: string;
  relayer: string;
  payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {}
export interface ReactiveMsgRegisterPayeeResponse {}
export interface MsgRegisterPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponseSDKType {}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
export interface ReactiveMsgRegisterCounterpartyPayee {
  portId: ComputedRef<string>;
  channelId: ComputedRef<string>;
  relayer: ComputedRef<string>;
  counterpartyPayee: ComputedRef<string>;
}
export interface MsgRegisterCounterpartyPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeSDKType {
  port_id: string;
  channel_id: string;
  relayer: string;
  counterparty_payee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {}
export interface ReactiveMsgRegisterCounterpartyPayeeResponse {}
export interface MsgRegisterCounterpartyPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponseSDKType {}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifer */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}
export interface ReactiveMsgPayPacketFee {
  fee: ComputedRef<Fee>;
  sourcePortId: ComputedRef<string>;
  sourceChannelId: ComputedRef<string>;
  signer: ComputedRef<string>;
  relayers: ComputedRef<string[]>;
}
export interface MsgPayPacketFeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee";
  value: Uint8Array;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeSDKType {
  fee: FeeSDKType;
  source_port_id: string;
  source_channel_id: string;
  signer: string;
  relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {}
export interface ReactiveMsgPayPacketFeeResponse {}
export interface MsgPayPacketFeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseSDKType {}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** the packet fee associated with a particular IBC packet */
  packetFee: PacketFee;
}
export interface ReactiveMsgPayPacketFeeAsync {
  packetFee: ComputedRef<PacketFee>;
}
export interface MsgPayPacketFeeAsyncProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync";
  value: Uint8Array;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncSDKType {
  packet_fee: PacketFeeSDKType;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {}
export interface ReactiveMsgPayPacketFeeAsyncResponse {}
export interface MsgPayPacketFeeAsyncResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse";
  value: Uint8Array;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseSDKType {}
function createBaseMsgRegisterPayee(): MsgRegisterPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: ""
  };
}
export const MsgRegisterPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
  encode(message: MsgRegisterPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toJSON(message: MsgRegisterPayee): JsonSafe<MsgRegisterPayee> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRegisterPayee>): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromSDK(object: MsgRegisterPayeeSDKType): MsgRegisterPayee {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      relayer: object?.relayer,
      payee: object?.payee
    };
  },
  fromSDKJSON(object: any): MsgRegisterPayeeSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toSDK(message: MsgRegisterPayee): MsgRegisterPayeeSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.payee = message.payee;
    return obj;
  },
  fromAmino(object: MsgRegisterPayeeAmino): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterPayee): MsgRegisterPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.payee = message.payee === "" ? undefined : message.payee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeAminoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayee): MsgRegisterPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayee",
      value: MsgRegisterPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterPayeeProtoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.decode(message.value);
  },
  toProto(message: MsgRegisterPayee): Uint8Array {
    return MsgRegisterPayee.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPayee): MsgRegisterPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
      value: MsgRegisterPayee.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterPayeeResponse(): MsgRegisterPayeeResponse {
  return {};
}
export const MsgRegisterPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
  encode(_: MsgRegisterPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
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
  fromJSON(_: any): MsgRegisterPayeeResponse {
    return {};
  },
  toJSON(_: MsgRegisterPayeeResponse): JsonSafe<MsgRegisterPayeeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRegisterPayeeResponse>): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  fromSDK(_: MsgRegisterPayeeResponseSDKType): MsgRegisterPayeeResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgRegisterPayeeResponseSDKType {
    return {};
  },
  toSDK(_: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRegisterPayeeResponseAmino): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeResponseAminoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterPayeeResponseProtoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterPayeeResponse): Uint8Array {
    return MsgRegisterPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterCounterpartyPayee(): MsgRegisterCounterpartyPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
export const MsgRegisterCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
  encode(message: MsgRegisterCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterCounterpartyPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  toJSON(message: MsgRegisterCounterpartyPayee): JsonSafe<MsgRegisterCounterpartyPayee> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRegisterCounterpartyPayee>): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromSDK(object: MsgRegisterCounterpartyPayeeSDKType): MsgRegisterCounterpartyPayee {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      relayer: object?.relayer,
      counterpartyPayee: object?.counterparty_payee
    };
  },
  fromSDKJSON(object: any): MsgRegisterCounterpartyPayeeSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterparty_payee: isSet(object.counterparty_payee) ? String(object.counterparty_payee) : ""
    };
  },
  toSDK(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAmino(object: MsgRegisterCounterpartyPayeeAmino): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.counterparty_payee = message.counterpartyPayee === "" ? undefined : message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeAminoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyPayeeProtoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyPayee): Uint8Array {
    return MsgRegisterCounterpartyPayee.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterCounterpartyPayeeResponse(): MsgRegisterCounterpartyPayeeResponse {
  return {};
}
export const MsgRegisterCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
  encode(_: MsgRegisterCounterpartyPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
  fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse {
    return {};
  },
  toJSON(_: MsgRegisterCounterpartyPayeeResponse): JsonSafe<MsgRegisterCounterpartyPayeeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRegisterCounterpartyPayeeResponse>): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  fromSDK(_: MsgRegisterCounterpartyPayeeResponseSDKType): MsgRegisterCounterpartyPayeeResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgRegisterCounterpartyPayeeResponseSDKType {
    return {};
  },
  toSDK(_: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRegisterCounterpartyPayeeResponseAmino): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeResponseAminoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyPayeeResponseProtoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyPayeeResponse): Uint8Array {
    return MsgRegisterCounterpartyPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFee(): MsgPayPacketFee {
  return {
    fee: Fee.fromPartial({}),
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: []
  };
}
export const MsgPayPacketFee = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
  encode(message: MsgPayPacketFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFee {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      sourcePortId: isSet(object.sourcePortId) ? String(object.sourcePortId) : "",
      sourceChannelId: isSet(object.sourceChannelId) ? String(object.sourceChannelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgPayPacketFee): JsonSafe<MsgPayPacketFee> {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.sourcePortId !== undefined && (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== undefined && (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgPayPacketFee>): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgPayPacketFeeSDKType): MsgPayPacketFee {
    return {
      fee: object.fee ? Fee.fromSDK(object.fee) : undefined,
      sourcePortId: object?.source_port_id,
      sourceChannelId: object?.source_channel_id,
      signer: object?.signer,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): MsgPayPacketFeeSDKType {
    return {
      fee: isSet(object.fee) ? Fee.fromSDKJSON(object.fee) : undefined,
      source_port_id: isSet(object.source_port_id) ? String(object.source_port_id) : "",
      source_channel_id: isSet(object.source_channel_id) ? String(object.source_channel_id) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: MsgPayPacketFee): MsgPayPacketFeeSDKType {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toSDK(message.fee) : undefined);
    obj.source_port_id = message.sourcePortId;
    obj.source_channel_id = message.sourceChannelId;
    obj.signer = message.signer;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: MsgPayPacketFeeAmino): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.source_port_id !== undefined && object.source_port_id !== null) {
      message.sourcePortId = object.source_port_id;
    }
    if (object.source_channel_id !== undefined && object.source_channel_id !== null) {
      message.sourceChannelId = object.source_channel_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPayPacketFee): MsgPayPacketFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    obj.source_port_id = message.sourcePortId === "" ? undefined : message.sourcePortId;
    obj.source_channel_id = message.sourceChannelId === "" ? undefined : message.sourceChannelId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAminoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFee): MsgPayPacketFeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFee",
      value: MsgPayPacketFee.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeProtoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.decode(message.value);
  },
  toProto(message: MsgPayPacketFee): Uint8Array {
    return MsgPayPacketFee.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFee): MsgPayPacketFeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
      value: MsgPayPacketFee.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFeeResponse(): MsgPayPacketFeeResponse {
  return {};
}
export const MsgPayPacketFeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
  encode(_: MsgPayPacketFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
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
  fromJSON(_: any): MsgPayPacketFeeResponse {
    return {};
  },
  toJSON(_: MsgPayPacketFeeResponse): JsonSafe<MsgPayPacketFeeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  fromSDK(_: MsgPayPacketFeeResponseSDKType): MsgPayPacketFeeResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgPayPacketFeeResponseSDKType {
    return {};
  },
  toSDK(_: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgPayPacketFeeResponseAmino): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeResponseAminoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeResponseProtoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeResponse): Uint8Array {
    return MsgPayPacketFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFeeAsync(): MsgPayPacketFeeAsync {
  return {
    packetFee: PacketFee.fromPartial({})
  };
}
export const MsgPayPacketFeeAsync = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
  encode(message: MsgPayPacketFeeAsync, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFeeAsync {
    return {
      packetFee: isSet(object.packetFee) ? PacketFee.fromJSON(object.packetFee) : undefined
    };
  },
  toJSON(message: MsgPayPacketFeeAsync): JsonSafe<MsgPayPacketFeeAsync> {
    const obj: any = {};
    message.packetFee !== undefined && (obj.packetFee = message.packetFee ? PacketFee.toJSON(message.packetFee) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    message.packetFee = object.packetFee !== undefined && object.packetFee !== null ? PacketFee.fromPartial(object.packetFee) : undefined;
    return message;
  },
  fromSDK(object: MsgPayPacketFeeAsyncSDKType): MsgPayPacketFeeAsync {
    return {
      packetFee: object.packet_fee ? PacketFee.fromSDK(object.packet_fee) : undefined
    };
  },
  fromSDKJSON(object: any): MsgPayPacketFeeAsyncSDKType {
    return {
      packet_fee: isSet(object.packet_fee) ? PacketFee.fromSDKJSON(object.packet_fee) : undefined
    };
  },
  toSDK(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncSDKType {
    const obj: any = {};
    message.packetFee !== undefined && (obj.packet_fee = message.packetFee ? PacketFee.toSDK(message.packetFee) : undefined);
    return obj;
  },
  fromAmino(object: MsgPayPacketFeeAsyncAmino): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    if (object.packet_fee !== undefined && object.packet_fee !== null) {
      message.packetFee = PacketFee.fromAmino(object.packet_fee);
    }
    return message;
  },
  toAmino(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAmino {
    const obj: any = {};
    obj.packet_fee = message.packetFee ? PacketFee.toAmino(message.packetFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncAminoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeAsyncProtoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeAsync): Uint8Array {
    return MsgPayPacketFeeAsync.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFeeAsyncResponse(): MsgPayPacketFeeAsyncResponse {
  return {};
}
export const MsgPayPacketFeeAsyncResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
  encode(_: MsgPayPacketFeeAsyncResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
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
  fromJSON(_: any): MsgPayPacketFeeAsyncResponse {
    return {};
  },
  toJSON(_: MsgPayPacketFeeAsyncResponse): JsonSafe<MsgPayPacketFeeAsyncResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  fromSDK(_: MsgPayPacketFeeAsyncResponseSDKType): MsgPayPacketFeeAsyncResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgPayPacketFeeAsyncResponseSDKType {
    return {};
  },
  toSDK(_: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgPayPacketFeeAsyncResponseAmino): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncResponseAminoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPacketFeeAsyncResponseProtoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.decode(message.value);
  },
  toProto(message: MsgPayPacketFeeAsyncResponse): Uint8Array {
    return MsgPayPacketFeeAsyncResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.encode(message).finish()
    };
  }
};