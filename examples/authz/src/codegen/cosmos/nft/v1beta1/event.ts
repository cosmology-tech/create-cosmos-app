//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.nft.v1beta1";
/** EventSend is emitted on Msg/Send */
export interface EventSend {
  classId: string;
  id: string;
  sender: string;
  receiver: string;
}
export interface EventSendProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventSend";
  value: Uint8Array;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendAmino {
  class_id?: string;
  id?: string;
  sender?: string;
  receiver?: string;
}
export interface EventSendAminoMsg {
  type: "cosmos-sdk/EventSend";
  value: EventSendAmino;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendSDKType {
  class_id: string;
  id: string;
  sender: string;
  receiver: string;
}
/** EventMint is emitted on Mint */
export interface EventMint {
  classId: string;
  id: string;
  owner: string;
}
export interface EventMintProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventMint";
  value: Uint8Array;
}
/** EventMint is emitted on Mint */
export interface EventMintAmino {
  class_id?: string;
  id?: string;
  owner?: string;
}
export interface EventMintAminoMsg {
  type: "cosmos-sdk/EventMint";
  value: EventMintAmino;
}
/** EventMint is emitted on Mint */
export interface EventMintSDKType {
  class_id: string;
  id: string;
  owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurn {
  classId: string;
  id: string;
  owner: string;
}
export interface EventBurnProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn";
  value: Uint8Array;
}
/** EventBurn is emitted on Burn */
export interface EventBurnAmino {
  class_id?: string;
  id?: string;
  owner?: string;
}
export interface EventBurnAminoMsg {
  type: "cosmos-sdk/EventBurn";
  value: EventBurnAmino;
}
/** EventBurn is emitted on Burn */
export interface EventBurnSDKType {
  class_id: string;
  id: string;
  owner: string;
}
function createBaseEventSend(): EventSend {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
export const EventSend = {
  typeUrl: "/cosmos.nft.v1beta1.EventSend",
  aminoType: "cosmos-sdk/EventSend",
  is(o: any): o is EventSend {
    return o && (o.$typeUrl === EventSend.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isSDK(o: any): o is EventSendSDKType {
    return o && (o.$typeUrl === EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is EventSendAmino {
    return o && (o.$typeUrl === EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  encode(message: EventSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== undefined) {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== undefined) {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== undefined) {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSend {
    const obj = createBaseEventSend();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    return obj;
  },
  toJSON(message: EventSend): JsonSafe<EventSend> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial(object: DeepPartial<EventSend>): EventSend {
    const message = createBaseEventSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromSDK(object: EventSendSDKType): EventSend {
    return {
      classId: object?.class_id,
      id: object?.id,
      sender: object?.sender,
      receiver: object?.receiver
    };
  },
  toSDK(message: EventSend): EventSendSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAmino(object: EventSendAmino): EventSend {
    const message = createBaseEventSend();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: EventSend): EventSendAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: EventSendAminoMsg): EventSend {
    return EventSend.fromAmino(object.value);
  },
  toAminoMsg(message: EventSend): EventSendAminoMsg {
    return {
      type: "cosmos-sdk/EventSend",
      value: EventSend.toAmino(message)
    };
  },
  fromProtoMsg(message: EventSendProtoMsg): EventSend {
    return EventSend.decode(message.value);
  },
  toProto(message: EventSend): Uint8Array {
    return EventSend.encode(message).finish();
  },
  toProtoMsg(message: EventSend): EventSendProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventSend",
      value: EventSend.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSend.typeUrl, EventSend);
GlobalDecoderRegistry.registerAminoProtoMapping(EventSend.aminoType, EventSend.typeUrl);
function createBaseEventMint(): EventMint {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventMint = {
  typeUrl: "/cosmos.nft.v1beta1.EventMint",
  aminoType: "cosmos-sdk/EventMint",
  is(o: any): o is EventMint {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is EventMintSDKType {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventMintAmino {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  encode(message: EventMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== undefined) {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== undefined) {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMint {
    const obj = createBaseEventMint();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventMint): JsonSafe<EventMint> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: EventMintSDKType): EventMint {
    return {
      classId: object?.class_id,
      id: object?.id,
      owner: object?.owner
    };
  },
  toSDK(message: EventMint): EventMintSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: EventMintAmino): EventMint {
    const message = createBaseEventMint();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventMint): EventMintAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventMintAminoMsg): EventMint {
    return EventMint.fromAmino(object.value);
  },
  toAminoMsg(message: EventMint): EventMintAminoMsg {
    return {
      type: "cosmos-sdk/EventMint",
      value: EventMint.toAmino(message)
    };
  },
  fromProtoMsg(message: EventMintProtoMsg): EventMint {
    return EventMint.decode(message.value);
  },
  toProto(message: EventMint): Uint8Array {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message: EventMint): EventMintProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventMint",
      value: EventMint.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventMint.typeUrl, EventMint);
GlobalDecoderRegistry.registerAminoProtoMapping(EventMint.aminoType, EventMint.typeUrl);
function createBaseEventBurn(): EventBurn {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventBurn = {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn",
  aminoType: "cosmos-sdk/EventBurn",
  is(o: any): o is EventBurn {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is EventBurnSDKType {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventBurnAmino {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  encode(message: EventBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== undefined) {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== undefined) {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBurn {
    const obj = createBaseEventBurn();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventBurn): JsonSafe<EventBurn> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<EventBurn>): EventBurn {
    const message = createBaseEventBurn();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: EventBurnSDKType): EventBurn {
    return {
      classId: object?.class_id,
      id: object?.id,
      owner: object?.owner
    };
  },
  toSDK(message: EventBurn): EventBurnSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: EventBurnAmino): EventBurn {
    const message = createBaseEventBurn();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventBurn): EventBurnAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventBurnAminoMsg): EventBurn {
    return EventBurn.fromAmino(object.value);
  },
  toAminoMsg(message: EventBurn): EventBurnAminoMsg {
    return {
      type: "cosmos-sdk/EventBurn",
      value: EventBurn.toAmino(message)
    };
  },
  fromProtoMsg(message: EventBurnProtoMsg): EventBurn {
    return EventBurn.decode(message.value);
  },
  toProto(message: EventBurn): Uint8Array {
    return EventBurn.encode(message).finish();
  },
  toProtoMsg(message: EventBurn): EventBurnProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventBurn",
      value: EventBurn.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBurn.typeUrl, EventBurn);
GlobalDecoderRegistry.registerAminoProtoMapping(EventBurn.aminoType, EventBurn.typeUrl);