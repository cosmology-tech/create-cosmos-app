//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.applications.transfer.v2";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}
export interface FungibleTokenPacketDataProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData";
  value: Uint8Array;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataAmino {
  /** the token denomination to be transferred */
  denom?: string;
  /** the token amount to be transferred */
  amount?: string;
  /** the sender address */
  sender?: string;
  /** the recipient address on the destination chain */
  receiver?: string;
}
export interface FungibleTokenPacketDataAminoMsg {
  type: "cosmos-sdk/FungibleTokenPacketData";
  value: FungibleTokenPacketDataAmino;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
  denom: string;
  amount: string;
  sender: string;
  receiver: string;
}
function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return {
    denom: "",
    amount: "",
    sender: "",
    receiver: ""
  };
}
export const FungibleTokenPacketData = {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
  aminoType: "cosmos-sdk/FungibleTokenPacketData",
  is(o: any): o is FungibleTokenPacketData {
    return o && (o.$typeUrl === FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isSDK(o: any): o is FungibleTokenPacketDataSDKType {
    return o && (o.$typeUrl === FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is FungibleTokenPacketDataAmino {
    return o && (o.$typeUrl === FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  encode(message: FungibleTokenPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== undefined) {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== undefined) {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== undefined) {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FungibleTokenPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
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
  fromJSON(object: any): FungibleTokenPacketData {
    const obj = createBaseFungibleTokenPacketData();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    return obj;
  },
  toJSON(message: FungibleTokenPacketData): JsonSafe<FungibleTokenPacketData> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial(object: DeepPartial<FungibleTokenPacketData>): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromSDK(object: FungibleTokenPacketDataSDKType): FungibleTokenPacketData {
    return {
      denom: object?.denom,
      amount: object?.amount,
      sender: object?.sender,
      receiver: object?.receiver
    };
  },
  toSDK(message: FungibleTokenPacketData): FungibleTokenPacketDataSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAmino(object: FungibleTokenPacketDataAmino): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: FungibleTokenPacketData): FungibleTokenPacketDataAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: FungibleTokenPacketDataAminoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.fromAmino(object.value);
  },
  toAminoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataAminoMsg {
    return {
      type: "cosmos-sdk/FungibleTokenPacketData",
      value: FungibleTokenPacketData.toAmino(message)
    };
  },
  fromProtoMsg(message: FungibleTokenPacketDataProtoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.decode(message.value);
  },
  toProto(message: FungibleTokenPacketData): Uint8Array {
    return FungibleTokenPacketData.encode(message).finish();
  },
  toProtoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
      value: FungibleTokenPacketData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FungibleTokenPacketData.typeUrl, FungibleTokenPacketData);
GlobalDecoderRegistry.registerAminoProtoMapping(FungibleTokenPacketData.aminoType, FungibleTokenPacketData.typeUrl);