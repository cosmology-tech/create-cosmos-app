//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { TwapRecord, TwapRecordAmino, TwapRecordSDKType } from "./twap_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "osmosis.twap.v1beta1";
/** Params holds parameters for the twap module */
export interface Params {
  pruneEpochIdentifier: string;
  recordHistoryKeepPeriod: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the twap module */
export interface ParamsAmino {
  prune_epoch_identifier?: string;
  record_history_keep_period?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "osmosis/twap/params";
  value: ParamsAmino;
}
/** Params holds parameters for the twap module */
export interface ParamsSDKType {
  prune_epoch_identifier: string;
  record_history_keep_period: DurationSDKType;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  /** twaps is the collection of all twap records. */
  twaps: TwapRecord[];
  /** params is the container of twap parameters. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateAmino {
  /** twaps is the collection of all twap records. */
  twaps?: TwapRecordAmino[];
  /** params is the container of twap parameters. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/twap/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
  twaps: TwapRecordSDKType[];
  params: ParamsSDKType;
}
function createBaseParams(): Params {
  return {
    pruneEpochIdentifier: "",
    recordHistoryKeepPeriod: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/osmosis.twap.v1beta1.Params",
  aminoType: "osmosis/twap/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.pruneEpochIdentifier === "string" && Duration.is(o.recordHistoryKeepPeriod));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.prune_epoch_identifier === "string" && Duration.isSDK(o.record_history_keep_period));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.prune_epoch_identifier === "string" && Duration.isAmino(o.record_history_keep_period));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruneEpochIdentifier !== undefined) {
      writer.uint32(10).string(message.pruneEpochIdentifier);
    }
    if (message.recordHistoryKeepPeriod !== undefined) {
      Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruneEpochIdentifier = reader.string();
          break;
        case 2:
          message.recordHistoryKeepPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.pruneEpochIdentifier)) obj.pruneEpochIdentifier = String(object.pruneEpochIdentifier);
    if (isSet(object.recordHistoryKeepPeriod)) obj.recordHistoryKeepPeriod = Duration.fromJSON(object.recordHistoryKeepPeriod);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.pruneEpochIdentifier !== undefined && (obj.pruneEpochIdentifier = message.pruneEpochIdentifier);
    message.recordHistoryKeepPeriod !== undefined && (obj.recordHistoryKeepPeriod = message.recordHistoryKeepPeriod ? Duration.toJSON(message.recordHistoryKeepPeriod) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.pruneEpochIdentifier = object.pruneEpochIdentifier ?? "";
    if (object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null) {
      message.recordHistoryKeepPeriod = Duration.fromPartial(object.recordHistoryKeepPeriod);
    }
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      pruneEpochIdentifier: object?.prune_epoch_identifier,
      recordHistoryKeepPeriod: object.record_history_keep_period ? Duration.fromSDK(object.record_history_keep_period) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.prune_epoch_identifier = message.pruneEpochIdentifier;
    message.recordHistoryKeepPeriod !== undefined && (obj.record_history_keep_period = message.recordHistoryKeepPeriod ? Duration.toSDK(message.recordHistoryKeepPeriod) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.prune_epoch_identifier !== undefined && object.prune_epoch_identifier !== null) {
      message.pruneEpochIdentifier = object.prune_epoch_identifier;
    }
    if (object.record_history_keep_period !== undefined && object.record_history_keep_period !== null) {
      message.recordHistoryKeepPeriod = Duration.fromAmino(object.record_history_keep_period);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.prune_epoch_identifier = message.pruneEpochIdentifier === "" ? undefined : message.pruneEpochIdentifier;
    obj.record_history_keep_period = message.recordHistoryKeepPeriod ? Duration.toAmino(message.recordHistoryKeepPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/twap/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseGenesisState(): GenesisState {
  return {
    twaps: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.twap.v1beta1.GenesisState",
  aminoType: "osmosis/twap/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.twaps) && (!o.twaps.length || TwapRecord.is(o.twaps[0])) && Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.twaps) && (!o.twaps.length || TwapRecord.isSDK(o.twaps[0])) && Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.twaps) && (!o.twaps.length || TwapRecord.isAmino(o.twaps[0])) && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.twaps) {
      TwapRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.twaps.push(TwapRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    if (Array.isArray(object?.twaps)) obj.twaps = object.twaps.map((e: any) => TwapRecord.fromJSON(e));
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.twaps) {
      obj.twaps = message.twaps.map(e => e ? TwapRecord.toJSON(e) : undefined);
    } else {
      obj.twaps = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.twaps = object.twaps?.map(e => TwapRecord.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      twaps: Array.isArray(object?.twaps) ? object.twaps.map((e: any) => TwapRecord.fromSDK(e)) : [],
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.twaps) {
      obj.twaps = message.twaps.map(e => e ? TwapRecord.toSDK(e) : undefined);
    } else {
      obj.twaps = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.twaps = object.twaps?.map(e => TwapRecord.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.twaps) {
      obj.twaps = message.twaps.map(e => e ? TwapRecord.toAmino(e) : undefined);
    } else {
      obj.twaps = message.twaps;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/twap/genesis-state",
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
      typeUrl: "/osmosis.twap.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);