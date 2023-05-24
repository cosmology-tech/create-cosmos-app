import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfo {
  /** identifier is a unique reference to this particular timer. */
  identifier: string;
  /**
   * start_time is the time at which the timer first ever ticks.
   * If start_time is in the future, the epoch will not begin until the start
   * time.
   */
  startTime?: Date | undefined;
  /**
   * duration is the time in between epoch ticks.
   * In order for intended behavior to be met, duration should
   * be greater than the chains expected block time.
   * Duration must be non-zero.
   */
  duration?: Duration | undefined;
  /**
   * current_epoch is the current epoch number, or in other words,
   * how many times has the timer 'ticked'.
   * The first tick (current_epoch=1) is defined as
   * the first block whose blocktime is greater than the EpochInfo start_time.
   */
  currentEpoch: bigint;
  /**
   * current_epoch_start_time describes the start time of the current timer
   * interval. The interval is (current_epoch_start_time,
   * current_epoch_start_time + duration] When the timer ticks, this is set to
   * current_epoch_start_time = last_epoch_start_time + duration only one timer
   * tick for a given identifier can occur per block.
   * 
   * NOTE! The current_epoch_start_time may diverge significantly from the
   * wall-clock time the epoch began at. Wall-clock time of epoch start may be
   * >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
   * duration = 5. Suppose the chain goes offline at t=14, and comes back online
   * at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
   * * The t=30 block will start the epoch for (10, 15]
   * * The t=31 block will start the epoch for (15, 20]
   * * The t=32 block will start the epoch for (20, 25]
   * * The t=33 block will start the epoch for (25, 30]
   * * The t=34 block will start the epoch for (30, 35]
   * * The **t=36** block will start the epoch for (35, 40]
   */
  currentEpochStartTime?: Date | undefined;
  /**
   * epoch_counting_started is a boolean, that indicates whether this
   * epoch timer has began yet.
   */
  epochCountingStarted: boolean;
  /**
   * current_epoch_start_height is the block height at which the current epoch
   * started. (The block height at which the timer last ticked)
   */
  currentEpochStartHeight: bigint;
}
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfoSDKType {
  identifier: string;
  start_time?: Date | undefined;
  duration?: DurationSDKType | undefined;
  current_epoch: bigint;
  current_epoch_start_time?: Date | undefined;
  epoch_counting_started: boolean;
  current_epoch_start_height: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  epochs: EpochInfo[];
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
  epochs: EpochInfoSDKType[];
}
function createBaseEpochInfo(): EpochInfo {
  return {
    identifier: "",
    startTime: undefined,
    duration: undefined,
    currentEpoch: BigInt("0"),
    currentEpochStartTime: undefined,
    epochCountingStarted: false,
    currentEpochStartHeight: BigInt("0")
  };
}
export const EpochInfo = {
  encode(message: EpochInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.epochCountingStarted === true) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }
    if (message.currentEpochStartHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.currentEpochStartHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.currentEpoch = BigInt(reader.int64().toString());
          break;
        case 5:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochCountingStarted = reader.bool();
          break;
        case 8:
          message.currentEpochStartHeight = BigInt(reader.int64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt("0");
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? BigInt(object.currentEpochStartHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  }
};