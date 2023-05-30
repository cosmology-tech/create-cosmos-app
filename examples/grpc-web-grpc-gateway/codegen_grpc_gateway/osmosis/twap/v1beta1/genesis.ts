import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { TwapRecord, TwapRecordAmino, TwapRecordSDKType } from "./twap_record";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.twap.v1beta1";
/** Params holds parameters for the twap module */
export interface Params {
  pruneEpochIdentifier: string;
  recordHistoryKeepPeriod?: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the twap module */
export interface ParamsAmino {
  prune_epoch_identifier: string;
  record_history_keep_period?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "osmosis/twap/params";
  value: ParamsAmino;
}
/** Params holds parameters for the twap module */
export interface ParamsSDKType {
  prune_epoch_identifier: string;
  record_history_keep_period?: DurationSDKType;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  /** twaps is the collection of all twap records. */
  twaps: TwapRecord[];
  /** params is the container of twap parameters. */
  params?: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateAmino {
  /** twaps is the collection of all twap records. */
  twaps: TwapRecordAmino[];
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
  params?: ParamsSDKType;
}
function createBaseParams(): Params {
  return {
    pruneEpochIdentifier: "",
    recordHistoryKeepPeriod: undefined
  };
}
export const Params = {
  typeUrl: "/osmosis.twap.v1beta1.Params",
  aminoType: "osmosis/twap/params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pruneEpochIdentifier !== "") {
      writer.uint32(10).string(message.pruneEpochIdentifier);
    }
    if (message.recordHistoryKeepPeriod !== undefined) {
      Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      pruneEpochIdentifier: isSet(object.pruneEpochIdentifier) ? String(object.pruneEpochIdentifier) : "",
      recordHistoryKeepPeriod: isSet(object.recordHistoryKeepPeriod) ? Duration.fromJSON(object.recordHistoryKeepPeriod) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.pruneEpochIdentifier !== undefined && (obj.pruneEpochIdentifier = message.pruneEpochIdentifier);
    message.recordHistoryKeepPeriod !== undefined && (obj.recordHistoryKeepPeriod = message.recordHistoryKeepPeriod ? Duration.toJSON(message.recordHistoryKeepPeriod) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.pruneEpochIdentifier = object.pruneEpochIdentifier ?? "";
    message.recordHistoryKeepPeriod = object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null ? Duration.fromPartial(object.recordHistoryKeepPeriod) : undefined;
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
    return {
      pruneEpochIdentifier: object.prune_epoch_identifier,
      recordHistoryKeepPeriod: object?.record_history_keep_period ? Duration.fromAmino(object.record_history_keep_period) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.prune_epoch_identifier = message.pruneEpochIdentifier;
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
function createBaseGenesisState(): GenesisState {
  return {
    twaps: [],
    params: undefined
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.twap.v1beta1.GenesisState",
  aminoType: "osmosis/twap/genesis-state",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.twaps) {
      TwapRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      twaps: Array.isArray(object?.twaps) ? object.twaps.map((e: any) => TwapRecord.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
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
    return {
      twaps: Array.isArray(object?.twaps) ? object.twaps.map((e: any) => TwapRecord.fromAmino(e)) : [],
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.twaps) {
      obj.twaps = message.twaps.map(e => e ? TwapRecord.toAmino(e) : undefined);
    } else {
      obj.twaps = [];
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