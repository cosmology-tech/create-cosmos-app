//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
  validatorAddr: string;
}
export interface MsgUnjailProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
  value: Uint8Array;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailAmino {
  validator_addr: string;
}
export interface MsgUnjailAminoMsg {
  type: "cosmos-sdk/MsgUnjail";
  value: MsgUnjailAmino;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
  validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {}
export interface MsgUnjailResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse";
  value: Uint8Array;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseAmino {}
export interface MsgUnjailResponseAminoMsg {
  type: "cosmos-sdk/MsgUnjailResponse";
  value: MsgUnjailResponseAmino;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {}
function createBaseMsgUnjail(): MsgUnjail {
  return {
    validatorAddr: ""
  };
}
export const MsgUnjail = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
  aminoType: "cosmos-sdk/MsgUnjail",
  is(o: any): o is MsgUnjail {
    return o && (o.$typeUrl === MsgUnjail.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is MsgUnjailSDKType {
    return o && (o.$typeUrl === MsgUnjail.typeUrl || typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is MsgUnjailAmino {
    return o && (o.$typeUrl === MsgUnjail.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: MsgUnjail, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== undefined) {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnjail {
    const obj = createBaseMsgUnjail();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: MsgUnjail): JsonSafe<MsgUnjail> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnjail>): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: MsgUnjailSDKType): MsgUnjail {
    return {
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: MsgUnjail): MsgUnjailSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: MsgUnjailAmino): MsgUnjail {
    const message = createBaseMsgUnjail();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: MsgUnjail): MsgUnjailAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgUnjailAminoMsg): MsgUnjail {
    return MsgUnjail.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjail): MsgUnjailAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjail",
      value: MsgUnjail.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailProtoMsg): MsgUnjail {
    return MsgUnjail.decode(message.value);
  },
  toProto(message: MsgUnjail): Uint8Array {
    return MsgUnjail.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjail): MsgUnjailProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: MsgUnjail.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnjail.typeUrl, MsgUnjail);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnjail.aminoType, MsgUnjail.typeUrl);
function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}
export const MsgUnjailResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  aminoType: "cosmos-sdk/MsgUnjailResponse",
  is(o: any): o is MsgUnjailResponse {
    return o && o.$typeUrl === MsgUnjailResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUnjailResponseSDKType {
    return o && o.$typeUrl === MsgUnjailResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnjailResponseAmino {
    return o && o.$typeUrl === MsgUnjailResponse.typeUrl;
  },
  encode(_: MsgUnjailResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();
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
  fromJSON(_: any): MsgUnjailResponse {
    const obj = createBaseMsgUnjailResponse();
    return obj;
  },
  toJSON(_: MsgUnjailResponse): JsonSafe<MsgUnjailResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUnjailResponse>): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
  fromSDK(_: MsgUnjailResponseSDKType): MsgUnjailResponse {
    return {};
  },
  toSDK(_: MsgUnjailResponse): MsgUnjailResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
  toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnjailResponseAminoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjailResponse): MsgUnjailResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjailResponse",
      value: MsgUnjailResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailResponseProtoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.decode(message.value);
  },
  toProto(message: MsgUnjailResponse): Uint8Array {
    return MsgUnjailResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailResponse): MsgUnjailResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
      value: MsgUnjailResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnjailResponse.typeUrl, MsgUnjailResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnjailResponse.aminoType, MsgUnjailResponse.typeUrl);