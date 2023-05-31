import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, toTimestamp, fromTimestamp, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** Height at which validator was first a candidate OR was unjailed */
  startHeight: Long;
  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  indexOffset: Long;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil?: Date;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter: Long;
}
export interface ValidatorSigningInfoProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo";
  value: Uint8Array;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoAmino {
  address: string;
  /** Height at which validator was first a candidate OR was unjailed */
  start_height: string;
  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  index_offset: string;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailed_until?: Date;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missed_blocks_counter: string;
}
export interface ValidatorSigningInfoAminoMsg {
  type: "cosmos-sdk/ValidatorSigningInfo";
  value: ValidatorSigningInfoAmino;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
  address: string;
  start_height: Long;
  index_offset: Long;
  jailed_until?: Date;
  tombstoned: boolean;
  missed_blocks_counter: Long;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow: Long;
  minSignedPerWindow: Uint8Array;
  downtimeJailDuration?: Duration;
  slashFractionDoubleSign: Uint8Array;
  slashFractionDowntime: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.Params";
  value: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsAmino {
  signed_blocks_window: string;
  min_signed_per_window: Uint8Array;
  downtime_jail_duration?: DurationAmino;
  slash_fraction_double_sign: Uint8Array;
  slash_fraction_downtime: Uint8Array;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
  signed_blocks_window: Long;
  min_signed_per_window: Uint8Array;
  downtime_jail_duration?: DurationSDKType;
  slash_fraction_double_sign: Uint8Array;
  slash_fraction_downtime: Uint8Array;
}
function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
  return {
    address: "",
    startHeight: Long.ZERO,
    indexOffset: Long.ZERO,
    jailedUntil: undefined,
    tombstoned: false,
    missedBlocksCounter: Long.ZERO
  };
}
export const ValidatorSigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
  aminoType: "cosmos-sdk/ValidatorSigningInfo",
  encode(message: ValidatorSigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.startHeight.isZero()) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (!message.indexOffset.isZero()) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (!message.missedBlocksCounter.isZero()) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = (reader.int64() as Long);
          break;
        case 3:
          message.indexOffset = (reader.int64() as Long);
          break;
        case 4:
          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      startHeight: isSet(object.startHeight) ? Long.fromValue(object.startHeight) : Long.ZERO,
      indexOffset: isSet(object.indexOffset) ? Long.fromValue(object.indexOffset) : Long.ZERO,
      jailedUntil: isSet(object.jailedUntil) ? new Date(object.jailedUntil) : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO
    };
  },
  toJSON(message: ValidatorSigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
    message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || Long.ZERO).toString());
    message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSigningInfo>): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
    message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? Long.fromValue(object.indexOffset) : Long.ZERO;
    message.jailedUntil = object.jailedUntil ?? undefined;
    message.tombstoned = object.tombstoned ?? false;
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO;
    return message;
  },
  fromSDK(object: ValidatorSigningInfoSDKType): ValidatorSigningInfo {
    return {
      address: object?.address,
      startHeight: object?.start_height,
      indexOffset: object?.index_offset,
      jailedUntil: object.jailed_until ?? undefined,
      tombstoned: object?.tombstoned,
      missedBlocksCounter: object?.missed_blocks_counter
    };
  },
  toSDK(message: ValidatorSigningInfo): ValidatorSigningInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.start_height = message.startHeight;
    obj.index_offset = message.indexOffset;
    message.jailedUntil !== undefined && (obj.jailed_until = message.jailedUntil ?? undefined);
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter;
    return obj;
  },
  fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo {
    return {
      address: object.address,
      startHeight: Long.fromString(object.start_height),
      indexOffset: Long.fromString(object.index_offset),
      jailedUntil: object?.jailed_until ? Timestamp.fromAmino(object.jailed_until) : undefined,
      tombstoned: object.tombstoned,
      missedBlocksCounter: Long.fromString(object.missed_blocks_counter)
    };
  },
  toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
    obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
    obj.jailed_until = message.jailedUntil ? Timestamp.toAmino(message.jailedUntil) : undefined;
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSigningInfo",
      value: ValidatorSigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.decode(message.value);
  },
  toProto(message: ValidatorSigningInfo): Uint8Array {
    return ValidatorSigningInfo.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
      value: ValidatorSigningInfo.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    signedBlocksWindow: Long.ZERO,
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: undefined,
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/cosmos.slashing.v1beta1.Params",
  aminoType: "cosmos-sdk/Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.signedBlocksWindow.isZero()) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
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
          message.signedBlocksWindow = (reader.int64() as Long);
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
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
      signedBlocksWindow: isSet(object.signedBlocksWindow) ? Long.fromValue(object.signedBlocksWindow) : Long.ZERO,
      minSignedPerWindow: isSet(object.minSignedPerWindow) ? bytesFromBase64(object.minSignedPerWindow) : new Uint8Array(),
      downtimeJailDuration: isSet(object.downtimeJailDuration) ? Duration.fromJSON(object.downtimeJailDuration) : undefined,
      slashFractionDoubleSign: isSet(object.slashFractionDoubleSign) ? bytesFromBase64(object.slashFractionDoubleSign) : new Uint8Array(),
      slashFractionDowntime: isSet(object.slashFractionDowntime) ? bytesFromBase64(object.slashFractionDowntime) : new Uint8Array()
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.signedBlocksWindow !== undefined && (obj.signedBlocksWindow = (message.signedBlocksWindow || Long.ZERO).toString());
    message.minSignedPerWindow !== undefined && (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array()));
    message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration ? Duration.toJSON(message.downtimeJailDuration) : undefined);
    message.slashFractionDoubleSign !== undefined && (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array()));
    message.slashFractionDowntime !== undefined && (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? Long.fromValue(object.signedBlocksWindow) : Long.ZERO;
    message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? Duration.fromPartial(object.downtimeJailDuration) : undefined;
    message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
    message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      signedBlocksWindow: object?.signed_blocks_window,
      minSignedPerWindow: object?.min_signed_per_window,
      downtimeJailDuration: object.downtime_jail_duration ? Duration.fromSDK(object.downtime_jail_duration) : undefined,
      slashFractionDoubleSign: object?.slash_fraction_double_sign,
      slashFractionDowntime: object?.slash_fraction_downtime
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.signed_blocks_window = message.signedBlocksWindow;
    obj.min_signed_per_window = message.minSignedPerWindow;
    message.downtimeJailDuration !== undefined && (obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toSDK(message.downtimeJailDuration) : undefined);
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
    obj.slash_fraction_downtime = message.slashFractionDowntime;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      signedBlocksWindow: Long.fromString(object.signed_blocks_window),
      minSignedPerWindow: object.min_signed_per_window,
      downtimeJailDuration: object?.downtime_jail_duration ? Duration.fromAmino(object.downtime_jail_duration) : undefined,
      slashFractionDoubleSign: object.slash_fraction_double_sign,
      slashFractionDowntime: object.slash_fraction_downtime
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
    obj.min_signed_per_window = message.minSignedPerWindow;
    obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toAmino(message.downtimeJailDuration) : undefined;
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
    obj.slash_fraction_downtime = message.slashFractionDowntime;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
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
      typeUrl: "/cosmos.slashing.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};