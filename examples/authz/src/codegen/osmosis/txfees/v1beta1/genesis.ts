//@ts-nocheck
import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.txfees.v1beta1";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
  basedenom: string;
  feetokens: FeeToken[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateAmino {
  basedenom?: string;
  feetokens?: FeeTokenAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/txfees/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateSDKType {
  basedenom: string;
  feetokens: FeeTokenSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    basedenom: "",
    feetokens: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
  aminoType: "osmosis/txfees/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.basedenom === "string" && Array.isArray(o.feetokens) && (!o.feetokens.length || FeeToken.is(o.feetokens[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.basedenom === "string" && Array.isArray(o.feetokens) && (!o.feetokens.length || FeeToken.isSDK(o.feetokens[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.basedenom === "string" && Array.isArray(o.feetokens) && (!o.feetokens.length || FeeToken.isAmino(o.feetokens[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basedenom !== undefined) {
      writer.uint32(10).string(message.basedenom);
    }
    for (const v of message.feetokens) {
      FeeToken.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.basedenom = reader.string();
          break;
        case 2:
          message.feetokens.push(FeeToken.decode(reader, reader.uint32()));
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
    if (isSet(object.basedenom)) obj.basedenom = String(object.basedenom);
    if (Array.isArray(object?.feetokens)) obj.feetokens = object.feetokens.map((e: any) => FeeToken.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.basedenom !== undefined && (obj.basedenom = message.basedenom);
    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toJSON(e) : undefined);
    } else {
      obj.feetokens = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.basedenom = object.basedenom ?? "";
    message.feetokens = object.feetokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      basedenom: object?.basedenom,
      feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e: any) => FeeToken.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.basedenom = message.basedenom;
    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toSDK(e) : undefined);
    } else {
      obj.feetokens = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.basedenom !== undefined && object.basedenom !== null) {
      message.basedenom = object.basedenom;
    }
    message.feetokens = object.feetokens?.map(e => FeeToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.basedenom = message.basedenom === "" ? undefined : message.basedenom;
    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toAmino(e) : undefined);
    } else {
      obj.feetokens = message.feetokens;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/txfees/genesis-state",
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
      typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);