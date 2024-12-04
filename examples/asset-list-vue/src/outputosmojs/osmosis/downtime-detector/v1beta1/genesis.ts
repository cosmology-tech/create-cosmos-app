import { Downtime, DowntimeSDKType, downtimeFromJSON, downtimeToJSON } from "./downtime_duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.downtimedetector.v1beta1";
export interface GenesisDowntimeEntry {
  duration: Downtime;
  lastDowntime: Date;
}
export interface GenesisDowntimeEntryProtoMsg {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
  value: Uint8Array;
}
export interface GenesisDowntimeEntrySDKType {
  duration: Downtime;
  last_downtime: Date;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  downtimes: GenesisDowntimeEntry[];
  lastBlockTime: Date;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
  downtimes: GenesisDowntimeEntrySDKType[];
  last_block_time: Date;
}
function createBaseGenesisDowntimeEntry(): GenesisDowntimeEntry {
  return {
    duration: 0,
    lastDowntime: new Date()
  };
}
export const GenesisDowntimeEntry = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
  encode(message: GenesisDowntimeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.lastDowntime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDowntime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDowntimeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDowntimeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = (reader.int32() as any);
          break;
        case 2:
          message.lastDowntime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisDowntimeEntry {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
      lastDowntime: isSet(object.lastDowntime) ? new Date(object.lastDowntime) : undefined
    };
  },
  toJSON(message: GenesisDowntimeEntry): JsonSafe<GenesisDowntimeEntry> {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = downtimeToJSON(message.duration));
    message.lastDowntime !== undefined && (obj.lastDowntime = message.lastDowntime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisDowntimeEntry>): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    message.duration = object.duration ?? 0;
    message.lastDowntime = object.lastDowntime ?? undefined;
    return message;
  },
  fromSDK(object: GenesisDowntimeEntrySDKType): GenesisDowntimeEntry {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
      lastDowntime: object.last_downtime ?? undefined
    };
  },
  fromSDKJSON(object: any): GenesisDowntimeEntrySDKType {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
      last_downtime: isSet(object.last_downtime) ? new Date(object.last_downtime) : undefined
    };
  },
  toSDK(message: GenesisDowntimeEntry): GenesisDowntimeEntrySDKType {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = downtimeToJSON(message.duration));
    message.lastDowntime !== undefined && (obj.last_downtime = message.lastDowntime ?? undefined);
    return obj;
  },
  fromAmino(object: GenesisDowntimeEntryAmino): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.last_downtime !== undefined && object.last_downtime !== null) {
      message.lastDowntime = fromTimestamp(Timestamp.fromAmino(object.last_downtime));
    }
    return message;
  },
  toAmino(message: GenesisDowntimeEntry): GenesisDowntimeEntryAmino {
    const obj: any = {};
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.last_downtime = message.lastDowntime ? Timestamp.toAmino(toTimestamp(message.lastDowntime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisDowntimeEntryAminoMsg): GenesisDowntimeEntry {
    return GenesisDowntimeEntry.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryAminoMsg {
    return {
      type: "osmosis/downtimedetector/genesis-downtime-entry",
      value: GenesisDowntimeEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisDowntimeEntryProtoMsg): GenesisDowntimeEntry {
    return GenesisDowntimeEntry.decode(message.value);
  },
  toProto(message: GenesisDowntimeEntry): Uint8Array {
    return GenesisDowntimeEntry.encode(message).finish();
  },
  toProtoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryProtoMsg {
    return {
      typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
      value: GenesisDowntimeEntry.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    downtimes: [],
    lastBlockTime: new Date()
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(18).fork()).ldelim();
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
          message.downtimes.push(GenesisDowntimeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => GenesisDowntimeEntry.fromJSON(e)) : [],
      lastBlockTime: isSet(object.lastBlockTime) ? new Date(object.lastBlockTime) : undefined
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toJSON(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    message.lastBlockTime !== undefined && (obj.lastBlockTime = message.lastBlockTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => GenesisDowntimeEntry.fromSDK(e)) : [],
      lastBlockTime: object.last_block_time ?? undefined
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => GenesisDowntimeEntry.fromSDKJSON(e)) : [],
      last_block_time: isSet(object.last_block_time) ? new Date(object.last_block_time) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toSDK(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    message.lastBlockTime !== undefined && (obj.last_block_time = message.lastBlockTime ?? undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromAmino(e)) || [];
    if (object.last_block_time !== undefined && object.last_block_time !== null) {
      message.lastBlockTime = fromTimestamp(Timestamp.fromAmino(object.last_block_time));
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toAmino(e) : undefined);
    } else {
      obj.downtimes = message.downtimes;
    }
    obj.last_block_time = message.lastBlockTime ? Timestamp.toAmino(toTimestamp(message.lastBlockTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/downtimedetector/genesis-state",
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
      typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};