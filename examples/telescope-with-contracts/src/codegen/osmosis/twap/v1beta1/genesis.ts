import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { TwapRecord, TwapRecordSDKType } from "./twap_record";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params holds parameters for the twap module */
export interface Params {
  pruneEpochIdentifier: string;
  recordHistoryKeepPeriod: Duration;
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
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
  twaps: TwapRecordSDKType[];
  params: ParamsSDKType;
}
function createBaseParams(): Params {
  return {
    pruneEpochIdentifier: "",
    recordHistoryKeepPeriod: undefined
  };
}
export const Params = {
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.pruneEpochIdentifier = object.pruneEpochIdentifier ?? "";
    message.recordHistoryKeepPeriod = object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null ? Duration.fromPartial(object.recordHistoryKeepPeriod) : undefined;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    twaps: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
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
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.twaps = object.twaps?.map(e => TwapRecord.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};