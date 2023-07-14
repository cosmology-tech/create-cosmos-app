import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  lastLockId: Long;
  locks: PeriodLock[];
  syntheticLocks: SyntheticLock[];
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
  last_lock_id: Long;
  locks: PeriodLockSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    lastLockId: Long.UZERO,
    locks: [],
    syntheticLocks: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lastLockId.isZero()) {
      writer.uint32(8).uint64(message.lastLockId);
    }
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.lastLockId = (reader.uint64() as Long);
          break;
        case 2:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
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
    message.lastLockId = object.lastLockId !== undefined && object.lastLockId !== null ? Long.fromValue(object.lastLockId) : Long.UZERO;
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  }
};