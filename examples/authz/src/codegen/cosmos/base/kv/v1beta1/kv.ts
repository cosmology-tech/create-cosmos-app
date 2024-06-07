//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.base.kv.v1beta1";
/** Pairs defines a repeated slice of Pair objects. */
export interface Pairs {
  pairs: Pair[];
}
export interface PairsProtoMsg {
  typeUrl: "/cosmos.base.kv.v1beta1.Pairs";
  value: Uint8Array;
}
/** Pairs defines a repeated slice of Pair objects. */
export interface PairsAmino {
  pairs?: PairAmino[];
}
export interface PairsAminoMsg {
  type: "cosmos-sdk/Pairs";
  value: PairsAmino;
}
/** Pairs defines a repeated slice of Pair objects. */
export interface PairsSDKType {
  pairs: PairSDKType[];
}
/** Pair defines a key/value bytes tuple. */
export interface Pair {
  key: Uint8Array;
  value: Uint8Array;
}
export interface PairProtoMsg {
  typeUrl: "/cosmos.base.kv.v1beta1.Pair";
  value: Uint8Array;
}
/** Pair defines a key/value bytes tuple. */
export interface PairAmino {
  key?: string;
  value?: string;
}
export interface PairAminoMsg {
  type: "cosmos-sdk/Pair";
  value: PairAmino;
}
/** Pair defines a key/value bytes tuple. */
export interface PairSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
function createBasePairs(): Pairs {
  return {
    pairs: []
  };
}
export const Pairs = {
  typeUrl: "/cosmos.base.kv.v1beta1.Pairs",
  aminoType: "cosmos-sdk/Pairs",
  is(o: any): o is Pairs {
    return o && (o.$typeUrl === Pairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || Pair.is(o.pairs[0])));
  },
  isSDK(o: any): o is PairsSDKType {
    return o && (o.$typeUrl === Pairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || Pair.isSDK(o.pairs[0])));
  },
  isAmino(o: any): o is PairsAmino {
    return o && (o.$typeUrl === Pairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || Pair.isAmino(o.pairs[0])));
  },
  encode(message: Pairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pairs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pairs {
    const obj = createBasePairs();
    if (Array.isArray(object?.pairs)) obj.pairs = object.pairs.map((e: any) => Pair.fromJSON(e));
    return obj;
  },
  toJSON(message: Pairs): JsonSafe<Pairs> {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Pairs>): Pairs {
    const message = createBasePairs();
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PairsSDKType): Pairs {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromSDK(e)) : []
    };
  },
  toSDK(message: Pairs): PairsSDKType {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toSDK(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromAmino(object: PairsAmino): Pairs {
    const message = createBasePairs();
    message.pairs = object.pairs?.map(e => Pair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Pairs): PairsAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object: PairsAminoMsg): Pairs {
    return Pairs.fromAmino(object.value);
  },
  toAminoMsg(message: Pairs): PairsAminoMsg {
    return {
      type: "cosmos-sdk/Pairs",
      value: Pairs.toAmino(message)
    };
  },
  fromProtoMsg(message: PairsProtoMsg): Pairs {
    return Pairs.decode(message.value);
  },
  toProto(message: Pairs): Uint8Array {
    return Pairs.encode(message).finish();
  },
  toProtoMsg(message: Pairs): PairsProtoMsg {
    return {
      typeUrl: "/cosmos.base.kv.v1beta1.Pairs",
      value: Pairs.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pairs.typeUrl, Pairs);
GlobalDecoderRegistry.registerAminoProtoMapping(Pairs.aminoType, Pairs.typeUrl);
function createBasePair(): Pair {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const Pair = {
  typeUrl: "/cosmos.base.kv.v1beta1.Pair",
  aminoType: "cosmos-sdk/Pair",
  is(o: any): o is Pair {
    return o && (o.$typeUrl === Pair.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isSDK(o: any): o is PairSDKType {
    return o && (o.$typeUrl === Pair.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isAmino(o: any): o is PairAmino {
    return o && (o.$typeUrl === Pair.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  encode(message: Pair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pair {
    const obj = createBasePair();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    return obj;
  },
  toJSON(message: Pair): JsonSafe<Pair> {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<Pair>): Pair {
    const message = createBasePair();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PairSDKType): Pair {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: Pair): PairSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: PairAmino): Pair {
    const message = createBasePair();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: Pair): PairAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: PairAminoMsg): Pair {
    return Pair.fromAmino(object.value);
  },
  toAminoMsg(message: Pair): PairAminoMsg {
    return {
      type: "cosmos-sdk/Pair",
      value: Pair.toAmino(message)
    };
  },
  fromProtoMsg(message: PairProtoMsg): Pair {
    return Pair.decode(message.value);
  },
  toProto(message: Pair): Uint8Array {
    return Pair.encode(message).finish();
  },
  toProtoMsg(message: Pair): PairProtoMsg {
    return {
      typeUrl: "/cosmos.base.kv.v1beta1.Pair",
      value: Pair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pair.typeUrl, Pair);
GlobalDecoderRegistry.registerAminoProtoMapping(Pair.aminoType, Pair.typeUrl);