import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export enum LockQueryType {
  ByDuration = 0,
  ByTime = 1,
  UNRECOGNIZED = -1,
}
export const LockQueryTypeSDKType = LockQueryType;
export function lockQueryTypeFromJSON(object: any): LockQueryType {
  switch (object) {
    case 0:
    case "ByDuration":
      return LockQueryType.ByDuration;
    case 1:
    case "ByTime":
      return LockQueryType.ByTime;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LockQueryType.UNRECOGNIZED;
  }
}
export function lockQueryTypeToJSON(object: LockQueryType): string {
  switch (object) {
    case LockQueryType.ByDuration:
      return "ByDuration";
    case LockQueryType.ByTime:
      return "ByTime";
    case LockQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLock {
  /**
   * ID is the unique id of the lock.
   * The ID of the lock is decided upon lock creation, incrementing by 1 for
   * every lock.
   */
  ID: Long;
  /**
   * Owner is the account address of the lock owner.
   * Only the owner can modify the state of the lock.
   */
  owner: string;
  /**
   * Duration is the time needed for a lock to mature after unlocking has
   * started.
   */
  duration: Duration;
  /**
   * EndTime refers to the time at which the lock would mature and get deleted.
   * This value is first initialized when an unlock has started for the lock,
   * end time being block time + duration.
   */
  endTime: Date;
  /** Coins are the tokens locked within the lock, kept in the module account. */
  coins: Coin[];
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLockSDKType {
  ID: Long;
  owner: string;
  duration: DurationSDKType;
  end_time: Date;
  coins: CoinSDKType[];
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryCondition {
  /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
  lockQueryType: LockQueryType;
  /** Denom represents the token denomination we are looking to lock up */
  denom: string;
  /**
   * Duration is used to query locks with longer duration than the specified
   * duration. Duration field must not be nil when the lock query type is
   * `ByLockDuration`.
   */
  duration: Duration;
  /**
   * Timestamp is used by locks started before the specified duration.
   * Timestamp field must not be nil when the lock query type is `ByLockTime`.
   * Querying locks with timestamp is currently not implemented.
   */
  timestamp: Date;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryConditionSDKType {
  lock_query_type: LockQueryType;
  denom: string;
  duration: DurationSDKType;
  timestamp: Date;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLock {
  /**
   * Underlying Lock ID is the underlying native lock's id for this synthetic
   * lockup. A synthetic lock MUST have an underlying lock.
   */
  underlyingLockId: Long;
  /**
   * SynthDenom is the synthetic denom that is a combination of
   * gamm share + bonding status + validator address.
   */
  synthDenom: string;
  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  endTime: Date;
  /**
   * Duration is the duration for a synthetic lock to mature
   * at the point of unbonding has started.
   */
  duration: Duration;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLockSDKType {
  underlying_lock_id: Long;
  synth_denom: string;
  end_time: Date;
  duration: DurationSDKType;
}
function createBasePeriodLock(): PeriodLock {
  return {
    ID: Long.UZERO,
    owner: "",
    duration: undefined,
    endTime: undefined,
    coins: []
  };
}
export const PeriodLock = {
  encode(message: PeriodLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PeriodLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PeriodLock>): PeriodLock {
    const message = createBasePeriodLock();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.endTime = object.endTime ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryCondition(): QueryCondition {
  return {
    lockQueryType: 0,
    denom: "",
    duration: undefined,
    timestamp: undefined
  };
}
export const QueryCondition = {
  encode(message: QueryCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockQueryType !== 0) {
      writer.uint32(8).int32(message.lockQueryType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockQueryType = (reader.int32() as any);
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCondition>): QueryCondition {
    const message = createBaseQueryCondition();
    message.lockQueryType = object.lockQueryType ?? 0;
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }
};
function createBaseSyntheticLock(): SyntheticLock {
  return {
    underlyingLockId: Long.UZERO,
    synthDenom: "",
    endTime: undefined,
    duration: undefined
  };
}
export const SyntheticLock = {
  encode(message: SyntheticLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.underlyingLockId.isZero()) {
      writer.uint32(8).uint64(message.underlyingLockId);
    }
    if (message.synthDenom !== "") {
      writer.uint32(18).string(message.synthDenom);
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underlyingLockId = (reader.uint64() as Long);
          break;
        case 2:
          message.synthDenom = reader.string();
          break;
        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SyntheticLock>): SyntheticLock {
    const message = createBaseSyntheticLock();
    message.underlyingLockId = object.underlyingLockId !== undefined && object.underlyingLockId !== null ? Long.fromValue(object.underlyingLockId) : Long.UZERO;
    message.synthDenom = object.synthDenom ?? "";
    message.endTime = object.endTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};