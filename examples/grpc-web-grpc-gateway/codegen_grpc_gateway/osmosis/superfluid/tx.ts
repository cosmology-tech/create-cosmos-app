import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.superfluid";
export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: Long;
  valAddr: string;
}
export interface MsgSuperfluidDelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate";
  value: Uint8Array;
}
export interface MsgSuperfluidDelegateAmino {
  sender: string;
  lock_id: string;
  val_addr: string;
}
export interface MsgSuperfluidDelegateAminoMsg {
  type: "osmosis/superfluid-delegate";
  value: MsgSuperfluidDelegateAmino;
}
export interface MsgSuperfluidDelegateSDKType {
  sender: string;
  lock_id: Long;
  val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {}
export interface MsgSuperfluidDelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse";
  value: Uint8Array;
}
export interface MsgSuperfluidDelegateResponseAmino {}
export interface MsgSuperfluidDelegateResponseAminoMsg {
  type: "osmosis/superfluid-delegate-response";
  value: MsgSuperfluidDelegateResponseAmino;
}
export interface MsgSuperfluidDelegateResponseSDKType {}
export interface MsgSuperfluidUndelegate {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUndelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate";
  value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAmino {
  sender: string;
  lock_id: string;
}
export interface MsgSuperfluidUndelegateAminoMsg {
  type: "osmosis/superfluid-undelegate";
  value: MsgSuperfluidUndelegateAmino;
}
export interface MsgSuperfluidUndelegateSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUndelegateResponse {}
export interface MsgSuperfluidUndelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse";
  value: Uint8Array;
}
export interface MsgSuperfluidUndelegateResponseAmino {}
export interface MsgSuperfluidUndelegateResponseAminoMsg {
  type: "osmosis/superfluid-undelegate-response";
  value: MsgSuperfluidUndelegateResponseAmino;
}
export interface MsgSuperfluidUndelegateResponseSDKType {}
export interface MsgSuperfluidUnbondLock {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUnbondLockProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock";
  value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockAmino {
  sender: string;
  lock_id: string;
}
export interface MsgSuperfluidUnbondLockAminoMsg {
  type: "osmosis/superfluid-unbond-lock";
  value: MsgSuperfluidUnbondLockAmino;
}
export interface MsgSuperfluidUnbondLockSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUnbondLockResponse {}
export interface MsgSuperfluidUnbondLockResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse";
  value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockResponseAmino {}
export interface MsgSuperfluidUnbondLockResponseAminoMsg {
  type: "osmosis/superfluid-unbond-lock-response";
  value: MsgSuperfluidUnbondLockResponseAmino;
}
export interface MsgSuperfluidUnbondLockResponseSDKType {}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate";
  value: Uint8Array;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateAmino {
  sender: string;
  coins: CoinAmino[];
  val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateAminoMsg {
  type: "osmosis/lock-and-superfluid-delegate";
  value: MsgLockAndSuperfluidDelegateAmino;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
  sender: string;
  coins: CoinSDKType[];
  val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
  ID: Long;
}
export interface MsgLockAndSuperfluidDelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse";
  value: Uint8Array;
}
export interface MsgLockAndSuperfluidDelegateResponseAmino {
  ID: string;
}
export interface MsgLockAndSuperfluidDelegateResponseAminoMsg {
  type: "osmosis/lock-and-superfluid-delegate-response";
  value: MsgLockAndSuperfluidDelegateResponseAmino;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
  ID: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
  sender: string;
  poolId: Long;
}
export interface MsgUnPoolWhitelistedPoolProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool";
  value: Uint8Array;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolAmino {
  sender: string;
  pool_id: string;
}
export interface MsgUnPoolWhitelistedPoolAminoMsg {
  type: "osmosis/unpool-whitelisted-pool";
  value: MsgUnPoolWhitelistedPoolAmino;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
  sender: string;
  pool_id: Long;
}
export interface MsgUnPoolWhitelistedPoolResponse {
  exitedLockIds: Long[];
}
export interface MsgUnPoolWhitelistedPoolResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse";
  value: Uint8Array;
}
export interface MsgUnPoolWhitelistedPoolResponseAmino {
  exited_lock_ids: string[];
}
export interface MsgUnPoolWhitelistedPoolResponseAminoMsg {
  type: "osmosis/un-pool-whitelisted-pool-response";
  value: MsgUnPoolWhitelistedPoolResponseAmino;
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
  exited_lock_ids: Long[];
}
function createBaseMsgSuperfluidDelegate(): MsgSuperfluidDelegate {
  return {
    sender: "",
    lockId: Long.UZERO,
    valAddr: ""
  };
}
export const MsgSuperfluidDelegate = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
  aminoType: "osmosis/superfluid-delegate",
  encode(message: MsgSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = (reader.uint64() as Long);
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidDelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  toJSON(message: MsgSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate {
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.valAddr = object.valAddr ?? "";
    return message;
  },
  fromSDK(object: MsgSuperfluidDelegateSDKType): MsgSuperfluidDelegate {
    return {
      sender: object?.sender,
      lockId: object?.lock_id,
      valAddr: object?.val_addr
    };
  },
  toSDK(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId;
    obj.val_addr = message.valAddr;
    return obj;
  },
  fromAmino(object: MsgSuperfluidDelegateAmino): MsgSuperfluidDelegate {
    return {
      sender: object.sender,
      lockId: Long.fromString(object.lock_id),
      valAddr: object.val_addr
    };
  },
  toAmino(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    obj.val_addr = message.valAddr;
    return obj;
  },
  fromAminoMsg(object: MsgSuperfluidDelegateAminoMsg): MsgSuperfluidDelegate {
    return MsgSuperfluidDelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAminoMsg {
    return {
      type: "osmosis/superfluid-delegate",
      value: MsgSuperfluidDelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSuperfluidDelegateProtoMsg): MsgSuperfluidDelegate {
    return MsgSuperfluidDelegate.decode(message.value);
  },
  toProto(message: MsgSuperfluidDelegate): Uint8Array {
    return MsgSuperfluidDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
      value: MsgSuperfluidDelegate.encode(message).finish()
    };
  }
};
function createBaseMsgSuperfluidDelegateResponse(): MsgSuperfluidDelegateResponse {
  return {};
}
export const MsgSuperfluidDelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
  aminoType: "osmosis/superfluid-delegate-response",
  encode(_: MsgSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSuperfluidDelegateResponse {
    return {};
  },
  toJSON(_: MsgSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse {
    const message = createBaseMsgSuperfluidDelegateResponse();
    return message;
  },
  fromSDK(_: MsgSuperfluidDelegateResponseSDKType): MsgSuperfluidDelegateResponse {
    return {};
  },
  toSDK(_: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSuperfluidDelegateResponseAmino): MsgSuperfluidDelegateResponse {
    return {};
  },
  toAmino(_: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSuperfluidDelegateResponseAminoMsg): MsgSuperfluidDelegateResponse {
    return MsgSuperfluidDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseAminoMsg {
    return {
      type: "osmosis/superfluid-delegate-response",
      value: MsgSuperfluidDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSuperfluidDelegateResponseProtoMsg): MsgSuperfluidDelegateResponse {
    return MsgSuperfluidDelegateResponse.decode(message.value);
  },
  toProto(message: MsgSuperfluidDelegateResponse): Uint8Array {
    return MsgSuperfluidDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
      value: MsgSuperfluidDelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSuperfluidUndelegate(): MsgSuperfluidUndelegate {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUndelegate = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
  aminoType: "osmosis/superfluid-undelegate",
  encode(message: MsgSuperfluidUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUndelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  toJSON(message: MsgSuperfluidUndelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate {
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgSuperfluidUndelegateSDKType): MsgSuperfluidUndelegate {
    return {
      sender: object?.sender,
      lockId: object?.lock_id
    };
  },
  toSDK(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId;
    return obj;
  },
  fromAmino(object: MsgSuperfluidUndelegateAmino): MsgSuperfluidUndelegate {
    return {
      sender: object.sender,
      lockId: Long.fromString(object.lock_id)
    };
  },
  toAmino(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSuperfluidUndelegateAminoMsg): MsgSuperfluidUndelegate {
    return MsgSuperfluidUndelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAminoMsg {
    return {
      type: "osmosis/superfluid-undelegate",
      value: MsgSuperfluidUndelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSuperfluidUndelegateProtoMsg): MsgSuperfluidUndelegate {
    return MsgSuperfluidUndelegate.decode(message.value);
  },
  toProto(message: MsgSuperfluidUndelegate): Uint8Array {
    return MsgSuperfluidUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
      value: MsgSuperfluidUndelegate.encode(message).finish()
    };
  }
};
function createBaseMsgSuperfluidUndelegateResponse(): MsgSuperfluidUndelegateResponse {
  return {};
}
export const MsgSuperfluidUndelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
  aminoType: "osmosis/superfluid-undelegate-response",
  encode(_: MsgSuperfluidUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSuperfluidUndelegateResponse {
    return {};
  },
  toJSON(_: MsgSuperfluidUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse {
    const message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
  },
  fromSDK(_: MsgSuperfluidUndelegateResponseSDKType): MsgSuperfluidUndelegateResponse {
    return {};
  },
  toSDK(_: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSuperfluidUndelegateResponseAmino): MsgSuperfluidUndelegateResponse {
    return {};
  },
  toAmino(_: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSuperfluidUndelegateResponseAminoMsg): MsgSuperfluidUndelegateResponse {
    return MsgSuperfluidUndelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseAminoMsg {
    return {
      type: "osmosis/superfluid-undelegate-response",
      value: MsgSuperfluidUndelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSuperfluidUndelegateResponseProtoMsg): MsgSuperfluidUndelegateResponse {
    return MsgSuperfluidUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgSuperfluidUndelegateResponse): Uint8Array {
    return MsgSuperfluidUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
      value: MsgSuperfluidUndelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSuperfluidUnbondLock(): MsgSuperfluidUnbondLock {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUnbondLock = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
  aminoType: "osmosis/superfluid-unbond-lock",
  encode(message: MsgSuperfluidUnbondLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUnbondLock {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  toJSON(message: MsgSuperfluidUnbondLock): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock {
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgSuperfluidUnbondLockSDKType): MsgSuperfluidUnbondLock {
    return {
      sender: object?.sender,
      lockId: object?.lock_id
    };
  },
  toSDK(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId;
    return obj;
  },
  fromAmino(object: MsgSuperfluidUnbondLockAmino): MsgSuperfluidUnbondLock {
    return {
      sender: object.sender,
      lockId: Long.fromString(object.lock_id)
    };
  },
  toAmino(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSuperfluidUnbondLockAminoMsg): MsgSuperfluidUnbondLock {
    return MsgSuperfluidUnbondLock.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAminoMsg {
    return {
      type: "osmosis/superfluid-unbond-lock",
      value: MsgSuperfluidUnbondLock.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSuperfluidUnbondLockProtoMsg): MsgSuperfluidUnbondLock {
    return MsgSuperfluidUnbondLock.decode(message.value);
  },
  toProto(message: MsgSuperfluidUnbondLock): Uint8Array {
    return MsgSuperfluidUnbondLock.encode(message).finish();
  },
  toProtoMsg(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
      value: MsgSuperfluidUnbondLock.encode(message).finish()
    };
  }
};
function createBaseMsgSuperfluidUnbondLockResponse(): MsgSuperfluidUnbondLockResponse {
  return {};
}
export const MsgSuperfluidUnbondLockResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
  aminoType: "osmosis/superfluid-unbond-lock-response",
  encode(_: MsgSuperfluidUnbondLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSuperfluidUnbondLockResponse {
    return {};
  },
  toJSON(_: MsgSuperfluidUnbondLockResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse {
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
  },
  fromSDK(_: MsgSuperfluidUnbondLockResponseSDKType): MsgSuperfluidUnbondLockResponse {
    return {};
  },
  toSDK(_: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSuperfluidUnbondLockResponseAmino): MsgSuperfluidUnbondLockResponse {
    return {};
  },
  toAmino(_: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSuperfluidUnbondLockResponseAminoMsg): MsgSuperfluidUnbondLockResponse {
    return MsgSuperfluidUnbondLockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseAminoMsg {
    return {
      type: "osmosis/superfluid-unbond-lock-response",
      value: MsgSuperfluidUnbondLockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSuperfluidUnbondLockResponseProtoMsg): MsgSuperfluidUnbondLockResponse {
    return MsgSuperfluidUnbondLockResponse.decode(message.value);
  },
  toProto(message: MsgSuperfluidUnbondLockResponse): Uint8Array {
    return MsgSuperfluidUnbondLockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
      value: MsgSuperfluidUnbondLockResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLockAndSuperfluidDelegate(): MsgLockAndSuperfluidDelegate {
  return {
    sender: "",
    coins: [],
    valAddr: ""
  };
}
export const MsgLockAndSuperfluidDelegate = {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
  aminoType: "osmosis/lock-and-superfluid-delegate",
  encode(message: MsgLockAndSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  toJSON(message: MsgLockAndSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate {
    const message = createBaseMsgLockAndSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.valAddr = object.valAddr ?? "";
    return message;
  },
  fromSDK(object: MsgLockAndSuperfluidDelegateSDKType): MsgLockAndSuperfluidDelegate {
    return {
      sender: object?.sender,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : [],
      valAddr: object?.val_addr
    };
  },
  toSDK(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.val_addr = message.valAddr;
    return obj;
  },
  fromAmino(object: MsgLockAndSuperfluidDelegateAmino): MsgLockAndSuperfluidDelegate {
    return {
      sender: object.sender,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : [],
      valAddr: object.val_addr
    };
  },
  toAmino(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.val_addr = message.valAddr;
    return obj;
  },
  fromAminoMsg(object: MsgLockAndSuperfluidDelegateAminoMsg): MsgLockAndSuperfluidDelegate {
    return MsgLockAndSuperfluidDelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAminoMsg {
    return {
      type: "osmosis/lock-and-superfluid-delegate",
      value: MsgLockAndSuperfluidDelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockAndSuperfluidDelegateProtoMsg): MsgLockAndSuperfluidDelegate {
    return MsgLockAndSuperfluidDelegate.decode(message.value);
  },
  toProto(message: MsgLockAndSuperfluidDelegate): Uint8Array {
    return MsgLockAndSuperfluidDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
      value: MsgLockAndSuperfluidDelegate.encode(message).finish()
    };
  }
};
function createBaseMsgLockAndSuperfluidDelegateResponse(): MsgLockAndSuperfluidDelegateResponse {
  return {
    ID: Long.UZERO
  };
}
export const MsgLockAndSuperfluidDelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
  aminoType: "osmosis/lock-and-superfluid-delegate-response",
  encode(message: MsgLockAndSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO
    };
  },
  toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse {
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgLockAndSuperfluidDelegateResponseSDKType): MsgLockAndSuperfluidDelegateResponse {
    return {
      ID: object?.ID
    };
  },
  toSDK(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseSDKType {
    const obj: any = {};
    obj.ID = message.ID;
    return obj;
  },
  fromAmino(object: MsgLockAndSuperfluidDelegateResponseAmino): MsgLockAndSuperfluidDelegateResponse {
    return {
      ID: Long.fromString(object.ID)
    };
  },
  toAmino(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAmino {
    const obj: any = {};
    obj.ID = message.ID ? message.ID.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLockAndSuperfluidDelegateResponseAminoMsg): MsgLockAndSuperfluidDelegateResponse {
    return MsgLockAndSuperfluidDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAminoMsg {
    return {
      type: "osmosis/lock-and-superfluid-delegate-response",
      value: MsgLockAndSuperfluidDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockAndSuperfluidDelegateResponseProtoMsg): MsgLockAndSuperfluidDelegateResponse {
    return MsgLockAndSuperfluidDelegateResponse.decode(message.value);
  },
  toProto(message: MsgLockAndSuperfluidDelegateResponse): Uint8Array {
    return MsgLockAndSuperfluidDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
      value: MsgLockAndSuperfluidDelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnPoolWhitelistedPool(): MsgUnPoolWhitelistedPool {
  return {
    sender: "",
    poolId: Long.UZERO
  };
}
export const MsgUnPoolWhitelistedPool = {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
  aminoType: "osmosis/unpool-whitelisted-pool",
  encode(message: MsgUnPoolWhitelistedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: MsgUnPoolWhitelistedPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool {
    const message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgUnPoolWhitelistedPoolSDKType): MsgUnPoolWhitelistedPool {
    return {
      sender: object?.sender,
      poolId: object?.pool_id
    };
  },
  toSDK(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: MsgUnPoolWhitelistedPoolAmino): MsgUnPoolWhitelistedPool {
    return {
      sender: object.sender,
      poolId: Long.fromString(object.pool_id)
    };
  },
  toAmino(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnPoolWhitelistedPoolAminoMsg): MsgUnPoolWhitelistedPool {
    return MsgUnPoolWhitelistedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAminoMsg {
    return {
      type: "osmosis/unpool-whitelisted-pool",
      value: MsgUnPoolWhitelistedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnPoolWhitelistedPoolProtoMsg): MsgUnPoolWhitelistedPool {
    return MsgUnPoolWhitelistedPool.decode(message.value);
  },
  toProto(message: MsgUnPoolWhitelistedPool): Uint8Array {
    return MsgUnPoolWhitelistedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
      value: MsgUnPoolWhitelistedPool.encode(message).finish()
    };
  }
};
function createBaseMsgUnPoolWhitelistedPoolResponse(): MsgUnPoolWhitelistedPoolResponse {
  return {
    exitedLockIds: []
  };
}
export const MsgUnPoolWhitelistedPoolResponse = {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
  aminoType: "osmosis/un-pool-whitelisted-pool-response",
  encode(message: MsgUnPoolWhitelistedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.exitedLockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exitedLockIds.push((reader.uint64() as Long));
            }
          } else {
            message.exitedLockIds.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPoolResponse {
    return {
      exitedLockIds: Array.isArray(object?.exitedLockIds) ? object.exitedLockIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: MsgUnPoolWhitelistedPoolResponse): unknown {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exitedLockIds = message.exitedLockIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.exitedLockIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse {
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = object.exitedLockIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromSDK(object: MsgUnPoolWhitelistedPoolResponseSDKType): MsgUnPoolWhitelistedPoolResponse {
    return {
      exitedLockIds: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseSDKType {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exited_lock_ids = message.exitedLockIds.map(e => e);
    } else {
      obj.exited_lock_ids = [];
    }
    return obj;
  },
  fromAmino(object: MsgUnPoolWhitelistedPoolResponseAmino): MsgUnPoolWhitelistedPoolResponse {
    return {
      exitedLockIds: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAmino {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exited_lock_ids = message.exitedLockIds.map(e => e);
    } else {
      obj.exited_lock_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnPoolWhitelistedPoolResponseAminoMsg): MsgUnPoolWhitelistedPoolResponse {
    return MsgUnPoolWhitelistedPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAminoMsg {
    return {
      type: "osmosis/un-pool-whitelisted-pool-response",
      value: MsgUnPoolWhitelistedPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnPoolWhitelistedPoolResponseProtoMsg): MsgUnPoolWhitelistedPoolResponse {
    return MsgUnPoolWhitelistedPoolResponse.decode(message.value);
  },
  toProto(message: MsgUnPoolWhitelistedPoolResponse): Uint8Array {
    return MsgUnPoolWhitelistedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
      value: MsgUnPoolWhitelistedPoolResponse.encode(message).finish()
    };
  }
};