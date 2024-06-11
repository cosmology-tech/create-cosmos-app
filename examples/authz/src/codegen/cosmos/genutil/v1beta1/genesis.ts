//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.genutil.v1beta1";
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisState {
  /** gen_txs defines the genesis transactions. */
  genTxs: Uint8Array[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.genutil.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisStateAmino {
  /** gen_txs defines the genesis transactions. */
  gen_txs: string[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisStateSDKType {
  gen_txs: Uint8Array[];
}
function createBaseGenesisState(): GenesisState {
  return {
    genTxs: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.genTxs) && (!o.genTxs.length || o.genTxs[0] instanceof Uint8Array || typeof o.genTxs[0] === "string"));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.gen_txs) && (!o.gen_txs.length || o.gen_txs[0] instanceof Uint8Array || typeof o.gen_txs[0] === "string"));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.gen_txs) && (!o.gen_txs.length || o.gen_txs[0] instanceof Uint8Array || typeof o.gen_txs[0] === "string"));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.genTxs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genTxs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.genTxs)) obj.genTxs = object.genTxs.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.genTxs) {
      obj.genTxs = message.genTxs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.genTxs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.genTxs = object.genTxs?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      genTxs: Array.isArray(object?.gen_txs) ? object.gen_txs.map((e: any) => e) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.genTxs) {
      obj.gen_txs = message.genTxs.map(e => e);
    } else {
      obj.gen_txs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.genTxs = object.gen_txs?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.genTxs) {
      obj.gen_txs = message.genTxs.map(e => base64FromBytes(e));
    } else {
      obj.gen_txs = message.genTxs;
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
      typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);