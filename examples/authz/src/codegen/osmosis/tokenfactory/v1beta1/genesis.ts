//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
  /** params defines the paramaters of the module. */
  params: Params;
  factoryDenoms: GenesisDenom[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
  /** params defines the paramaters of the module. */
  params?: ParamsAmino;
  factory_denoms?: GenesisDenomAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/tokenfactory/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
  denom: string;
  authorityMetadata: DenomAuthorityMetadata;
}
export interface GenesisDenomProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom";
  value: Uint8Array;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomAmino {
  denom?: string;
  authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface GenesisDenomAminoMsg {
  type: "osmosis/tokenfactory/genesis-denom";
  value: GenesisDenomAmino;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
  denom: string;
  authority_metadata: DenomAuthorityMetadataSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    factoryDenoms: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
  aminoType: "osmosis/tokenfactory/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.factoryDenoms) && (!o.factoryDenoms.length || GenesisDenom.is(o.factoryDenoms[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.factory_denoms) && (!o.factory_denoms.length || GenesisDenom.isSDK(o.factory_denoms[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.factory_denoms) && (!o.factory_denoms.length || GenesisDenom.isAmino(o.factory_denoms[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.factoryDenoms) {
      GenesisDenom.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.factoryDenoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.factoryDenoms)) obj.factoryDenoms = object.factoryDenoms.map((e: any) => GenesisDenom.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.factoryDenoms) {
      obj.factoryDenoms = message.factoryDenoms.map(e => e ? GenesisDenom.toJSON(e) : undefined);
    } else {
      obj.factoryDenoms = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.factoryDenoms = object.factoryDenoms?.map(e => GenesisDenom.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      factoryDenoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e: any) => GenesisDenom.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.factoryDenoms) {
      obj.factory_denoms = message.factoryDenoms.map(e => e ? GenesisDenom.toSDK(e) : undefined);
    } else {
      obj.factory_denoms = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.factoryDenoms = object.factory_denoms?.map(e => GenesisDenom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.factoryDenoms) {
      obj.factory_denoms = message.factoryDenoms.map(e => e ? GenesisDenom.toAmino(e) : undefined);
    } else {
      obj.factory_denoms = message.factoryDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/tokenfactory/genesis-state",
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
      typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseGenesisDenom(): GenesisDenom {
  return {
    denom: "",
    authorityMetadata: DenomAuthorityMetadata.fromPartial({})
  };
}
export const GenesisDenom = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
  aminoType: "osmosis/tokenfactory/genesis-denom",
  is(o: any): o is GenesisDenom {
    return o && (o.$typeUrl === GenesisDenom.typeUrl || typeof o.denom === "string" && DenomAuthorityMetadata.is(o.authorityMetadata));
  },
  isSDK(o: any): o is GenesisDenomSDKType {
    return o && (o.$typeUrl === GenesisDenom.typeUrl || typeof o.denom === "string" && DenomAuthorityMetadata.isSDK(o.authority_metadata));
  },
  isAmino(o: any): o is GenesisDenomAmino {
    return o && (o.$typeUrl === GenesisDenom.typeUrl || typeof o.denom === "string" && DenomAuthorityMetadata.isAmino(o.authority_metadata));
  },
  encode(message: GenesisDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      writer.uint32(10).string(message.denom);
    }
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisDenom {
    const obj = createBaseGenesisDenom();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.authorityMetadata)) obj.authorityMetadata = DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
    return obj;
  },
  toJSON(message: GenesisDenom): JsonSafe<GenesisDenom> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata ? DenomAuthorityMetadata.toJSON(message.authorityMetadata) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom {
    const message = createBaseGenesisDenom();
    message.denom = object.denom ?? "";
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
    }
    return message;
  },
  fromSDK(object: GenesisDenomSDKType): GenesisDenom {
    return {
      denom: object?.denom,
      authorityMetadata: object.authority_metadata ? DenomAuthorityMetadata.fromSDK(object.authority_metadata) : undefined
    };
  },
  toSDK(message: GenesisDenom): GenesisDenomSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    message.authorityMetadata !== undefined && (obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toSDK(message.authorityMetadata) : undefined);
    return obj;
  },
  fromAmino(object: GenesisDenomAmino): GenesisDenom {
    const message = createBaseGenesisDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
    }
    return message;
  },
  toAmino(message: GenesisDenom): GenesisDenomAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisDenomAminoMsg): GenesisDenom {
    return GenesisDenom.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisDenom): GenesisDenomAminoMsg {
    return {
      type: "osmosis/tokenfactory/genesis-denom",
      value: GenesisDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisDenomProtoMsg): GenesisDenom {
    return GenesisDenom.decode(message.value);
  },
  toProto(message: GenesisDenom): Uint8Array {
    return GenesisDenom.encode(message).finish();
  },
  toProtoMsg(message: GenesisDenom): GenesisDenomProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
      value: GenesisDenom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisDenom.typeUrl, GenesisDenom);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisDenom.aminoType, GenesisDenom.typeUrl);