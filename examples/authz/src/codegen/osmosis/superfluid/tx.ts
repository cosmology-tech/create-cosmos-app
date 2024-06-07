//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "osmosis.superfluid";
export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: bigint;
  valAddr: string;
}
export interface MsgSuperfluidDelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate";
  value: Uint8Array;
}
export interface MsgSuperfluidDelegateAmino {
  sender?: string;
  lock_id?: string;
  val_addr?: string;
}
export interface MsgSuperfluidDelegateAminoMsg {
  type: "osmosis/superfluid-delegate";
  value: MsgSuperfluidDelegateAmino;
}
export interface MsgSuperfluidDelegateSDKType {
  sender: string;
  lock_id: bigint;
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
  lockId: bigint;
}
export interface MsgSuperfluidUndelegateProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate";
  value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAmino {
  sender?: string;
  lock_id?: string;
}
export interface MsgSuperfluidUndelegateAminoMsg {
  type: "osmosis/superfluid-undelegate";
  value: MsgSuperfluidUndelegateAmino;
}
export interface MsgSuperfluidUndelegateSDKType {
  sender: string;
  lock_id: bigint;
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
  lockId: bigint;
}
export interface MsgSuperfluidUnbondLockProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock";
  value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockAmino {
  sender?: string;
  lock_id?: string;
}
export interface MsgSuperfluidUnbondLockAminoMsg {
  type: "osmosis/superfluid-unbond-lock";
  value: MsgSuperfluidUnbondLockAmino;
}
export interface MsgSuperfluidUnbondLockSDKType {
  sender: string;
  lock_id: bigint;
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
  sender?: string;
  coins?: CoinAmino[];
  val_addr?: string;
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
  ID: bigint;
}
export interface MsgLockAndSuperfluidDelegateResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse";
  value: Uint8Array;
}
export interface MsgLockAndSuperfluidDelegateResponseAmino {
  ID?: string;
}
export interface MsgLockAndSuperfluidDelegateResponseAminoMsg {
  type: "osmosis/lock-and-superfluid-delegate-response";
  value: MsgLockAndSuperfluidDelegateResponseAmino;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
  ID: bigint;
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
  poolId: bigint;
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
  sender?: string;
  pool_id?: string;
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
  pool_id: bigint;
}
export interface MsgUnPoolWhitelistedPoolResponse {
  exitedLockIds: bigint[];
}
export interface MsgUnPoolWhitelistedPoolResponseProtoMsg {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse";
  value: Uint8Array;
}
export interface MsgUnPoolWhitelistedPoolResponseAmino {
  exited_lock_ids?: string[];
}
export interface MsgUnPoolWhitelistedPoolResponseAminoMsg {
  type: "osmosis/un-pool-whitelisted-pool-response";
  value: MsgUnPoolWhitelistedPoolResponseAmino;
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
  exited_lock_ids: bigint[];
}
function createBaseMsgSuperfluidDelegate(): MsgSuperfluidDelegate {
  return {
    sender: "",
    lockId: BigInt(0),
    valAddr: ""
  };
}
export const MsgSuperfluidDelegate = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
  aminoType: "osmosis/superfluid-delegate",
  is(o: any): o is MsgSuperfluidDelegate {
    return o && (o.$typeUrl === MsgSuperfluidDelegate.typeUrl || typeof o.sender === "string" && typeof o.lockId === "bigint" && typeof o.valAddr === "string");
  },
  isSDK(o: any): o is MsgSuperfluidDelegateSDKType {
    return o && (o.$typeUrl === MsgSuperfluidDelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint" && typeof o.val_addr === "string");
  },
  isAmino(o: any): o is MsgSuperfluidDelegateAmino {
    return o && (o.$typeUrl === MsgSuperfluidDelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint" && typeof o.val_addr === "string");
  },
  encode(message: MsgSuperfluidDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== undefined) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.valAddr !== undefined) {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
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
    const obj = createBaseMsgSuperfluidDelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    return obj;
  },
  toJSON(message: MsgSuperfluidDelegate): JsonSafe<MsgSuperfluidDelegate> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate {
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
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
    const message = createBaseMsgSuperfluidDelegate();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    return message;
  },
  toAmino(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.lock_id = message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
    obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
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
GlobalDecoderRegistry.register(MsgSuperfluidDelegate.typeUrl, MsgSuperfluidDelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidDelegate.aminoType, MsgSuperfluidDelegate.typeUrl);
function createBaseMsgSuperfluidDelegateResponse(): MsgSuperfluidDelegateResponse {
  return {};
}
export const MsgSuperfluidDelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
  aminoType: "osmosis/superfluid-delegate-response",
  is(o: any): o is MsgSuperfluidDelegateResponse {
    return o && o.$typeUrl === MsgSuperfluidDelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSuperfluidDelegateResponseSDKType {
    return o && o.$typeUrl === MsgSuperfluidDelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSuperfluidDelegateResponseAmino {
    return o && o.$typeUrl === MsgSuperfluidDelegateResponse.typeUrl;
  },
  encode(_: MsgSuperfluidDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgSuperfluidDelegateResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidDelegateResponse): JsonSafe<MsgSuperfluidDelegateResponse> {
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
    const message = createBaseMsgSuperfluidDelegateResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgSuperfluidDelegateResponse.typeUrl, MsgSuperfluidDelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidDelegateResponse.aminoType, MsgSuperfluidDelegateResponse.typeUrl);
function createBaseMsgSuperfluidUndelegate(): MsgSuperfluidUndelegate {
  return {
    sender: "",
    lockId: BigInt(0)
  };
}
export const MsgSuperfluidUndelegate = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
  aminoType: "osmosis/superfluid-undelegate",
  is(o: any): o is MsgSuperfluidUndelegate {
    return o && (o.$typeUrl === MsgSuperfluidUndelegate.typeUrl || typeof o.sender === "string" && typeof o.lockId === "bigint");
  },
  isSDK(o: any): o is MsgSuperfluidUndelegateSDKType {
    return o && (o.$typeUrl === MsgSuperfluidUndelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
  },
  isAmino(o: any): o is MsgSuperfluidUndelegateAmino {
    return o && (o.$typeUrl === MsgSuperfluidUndelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
  },
  encode(message: MsgSuperfluidUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== undefined) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUndelegate {
    const obj = createBaseMsgSuperfluidUndelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: MsgSuperfluidUndelegate): JsonSafe<MsgSuperfluidUndelegate> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate {
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
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
    const message = createBaseMsgSuperfluidUndelegate();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    return message;
  },
  toAmino(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.lock_id = message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
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
GlobalDecoderRegistry.register(MsgSuperfluidUndelegate.typeUrl, MsgSuperfluidUndelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUndelegate.aminoType, MsgSuperfluidUndelegate.typeUrl);
function createBaseMsgSuperfluidUndelegateResponse(): MsgSuperfluidUndelegateResponse {
  return {};
}
export const MsgSuperfluidUndelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
  aminoType: "osmosis/superfluid-undelegate-response",
  is(o: any): o is MsgSuperfluidUndelegateResponse {
    return o && o.$typeUrl === MsgSuperfluidUndelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSuperfluidUndelegateResponseSDKType {
    return o && o.$typeUrl === MsgSuperfluidUndelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSuperfluidUndelegateResponseAmino {
    return o && o.$typeUrl === MsgSuperfluidUndelegateResponse.typeUrl;
  },
  encode(_: MsgSuperfluidUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgSuperfluidUndelegateResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidUndelegateResponse): JsonSafe<MsgSuperfluidUndelegateResponse> {
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
    const message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgSuperfluidUndelegateResponse.typeUrl, MsgSuperfluidUndelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUndelegateResponse.aminoType, MsgSuperfluidUndelegateResponse.typeUrl);
function createBaseMsgSuperfluidUnbondLock(): MsgSuperfluidUnbondLock {
  return {
    sender: "",
    lockId: BigInt(0)
  };
}
export const MsgSuperfluidUnbondLock = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
  aminoType: "osmosis/superfluid-unbond-lock",
  is(o: any): o is MsgSuperfluidUnbondLock {
    return o && (o.$typeUrl === MsgSuperfluidUnbondLock.typeUrl || typeof o.sender === "string" && typeof o.lockId === "bigint");
  },
  isSDK(o: any): o is MsgSuperfluidUnbondLockSDKType {
    return o && (o.$typeUrl === MsgSuperfluidUnbondLock.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
  },
  isAmino(o: any): o is MsgSuperfluidUnbondLockAmino {
    return o && (o.$typeUrl === MsgSuperfluidUnbondLock.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
  },
  encode(message: MsgSuperfluidUnbondLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== undefined) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUnbondLock {
    const obj = createBaseMsgSuperfluidUnbondLock();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: MsgSuperfluidUnbondLock): JsonSafe<MsgSuperfluidUnbondLock> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock {
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
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
    const message = createBaseMsgSuperfluidUnbondLock();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.lock_id !== undefined && object.lock_id !== null) {
      message.lockId = BigInt(object.lock_id);
    }
    return message;
  },
  toAmino(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.lock_id = message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
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
GlobalDecoderRegistry.register(MsgSuperfluidUnbondLock.typeUrl, MsgSuperfluidUnbondLock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUnbondLock.aminoType, MsgSuperfluidUnbondLock.typeUrl);
function createBaseMsgSuperfluidUnbondLockResponse(): MsgSuperfluidUnbondLockResponse {
  return {};
}
export const MsgSuperfluidUnbondLockResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
  aminoType: "osmosis/superfluid-unbond-lock-response",
  is(o: any): o is MsgSuperfluidUnbondLockResponse {
    return o && o.$typeUrl === MsgSuperfluidUnbondLockResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSuperfluidUnbondLockResponseSDKType {
    return o && o.$typeUrl === MsgSuperfluidUnbondLockResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSuperfluidUnbondLockResponseAmino {
    return o && o.$typeUrl === MsgSuperfluidUnbondLockResponse.typeUrl;
  },
  encode(_: MsgSuperfluidUnbondLockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgSuperfluidUnbondLockResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidUnbondLockResponse): JsonSafe<MsgSuperfluidUnbondLockResponse> {
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
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgSuperfluidUnbondLockResponse.typeUrl, MsgSuperfluidUnbondLockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUnbondLockResponse.aminoType, MsgSuperfluidUnbondLockResponse.typeUrl);
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
  is(o: any): o is MsgLockAndSuperfluidDelegate {
    return o && (o.$typeUrl === MsgLockAndSuperfluidDelegate.typeUrl || typeof o.sender === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])) && typeof o.valAddr === "string");
  },
  isSDK(o: any): o is MsgLockAndSuperfluidDelegateSDKType {
    return o && (o.$typeUrl === MsgLockAndSuperfluidDelegate.typeUrl || typeof o.sender === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])) && typeof o.val_addr === "string");
  },
  isAmino(o: any): o is MsgLockAndSuperfluidDelegateAmino {
    return o && (o.$typeUrl === MsgLockAndSuperfluidDelegate.typeUrl || typeof o.sender === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])) && typeof o.val_addr === "string");
  },
  encode(message: MsgLockAndSuperfluidDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== undefined) {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgLockAndSuperfluidDelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    return obj;
  },
  toJSON(message: MsgLockAndSuperfluidDelegate): JsonSafe<MsgLockAndSuperfluidDelegate> {
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
    const message = createBaseMsgLockAndSuperfluidDelegate();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    return message;
  },
  toAmino(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
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
GlobalDecoderRegistry.register(MsgLockAndSuperfluidDelegate.typeUrl, MsgLockAndSuperfluidDelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockAndSuperfluidDelegate.aminoType, MsgLockAndSuperfluidDelegate.typeUrl);
function createBaseMsgLockAndSuperfluidDelegateResponse(): MsgLockAndSuperfluidDelegateResponse {
  return {
    ID: BigInt(0)
  };
}
export const MsgLockAndSuperfluidDelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
  aminoType: "osmosis/lock-and-superfluid-delegate-response",
  is(o: any): o is MsgLockAndSuperfluidDelegateResponse {
    return o && (o.$typeUrl === MsgLockAndSuperfluidDelegateResponse.typeUrl || typeof o.ID === "bigint");
  },
  isSDK(o: any): o is MsgLockAndSuperfluidDelegateResponseSDKType {
    return o && (o.$typeUrl === MsgLockAndSuperfluidDelegateResponse.typeUrl || typeof o.ID === "bigint");
  },
  isAmino(o: any): o is MsgLockAndSuperfluidDelegateResponseAmino {
    return o && (o.$typeUrl === MsgLockAndSuperfluidDelegateResponse.typeUrl || typeof o.ID === "bigint");
  },
  encode(message: MsgLockAndSuperfluidDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ID !== undefined) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse {
    const obj = createBaseMsgLockAndSuperfluidDelegateResponse();
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    return obj;
  },
  toJSON(message: MsgLockAndSuperfluidDelegateResponse): JsonSafe<MsgLockAndSuperfluidDelegateResponse> {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse {
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
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
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID);
    }
    return message;
  },
  toAmino(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAmino {
    const obj: any = {};
    obj.ID = message.ID !== BigInt(0) ? message.ID.toString() : undefined;
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
GlobalDecoderRegistry.register(MsgLockAndSuperfluidDelegateResponse.typeUrl, MsgLockAndSuperfluidDelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockAndSuperfluidDelegateResponse.aminoType, MsgLockAndSuperfluidDelegateResponse.typeUrl);
function createBaseMsgUnPoolWhitelistedPool(): MsgUnPoolWhitelistedPool {
  return {
    sender: "",
    poolId: BigInt(0)
  };
}
export const MsgUnPoolWhitelistedPool = {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
  aminoType: "osmosis/unpool-whitelisted-pool",
  is(o: any): o is MsgUnPoolWhitelistedPool {
    return o && (o.$typeUrl === MsgUnPoolWhitelistedPool.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgUnPoolWhitelistedPoolSDKType {
    return o && (o.$typeUrl === MsgUnPoolWhitelistedPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgUnPoolWhitelistedPoolAmino {
    return o && (o.$typeUrl === MsgUnPoolWhitelistedPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: MsgUnPoolWhitelistedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPool {
    const obj = createBaseMsgUnPoolWhitelistedPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: MsgUnPoolWhitelistedPool): JsonSafe<MsgUnPoolWhitelistedPool> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool {
    const message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
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
    const message = createBaseMsgUnPoolWhitelistedPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
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
GlobalDecoderRegistry.register(MsgUnPoolWhitelistedPool.typeUrl, MsgUnPoolWhitelistedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnPoolWhitelistedPool.aminoType, MsgUnPoolWhitelistedPool.typeUrl);
function createBaseMsgUnPoolWhitelistedPoolResponse(): MsgUnPoolWhitelistedPoolResponse {
  return {
    exitedLockIds: []
  };
}
export const MsgUnPoolWhitelistedPoolResponse = {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
  aminoType: "osmosis/un-pool-whitelisted-pool-response",
  is(o: any): o is MsgUnPoolWhitelistedPoolResponse {
    return o && (o.$typeUrl === MsgUnPoolWhitelistedPoolResponse.typeUrl || Array.isArray(o.exitedLockIds) && (!o.exitedLockIds.length || typeof o.exitedLockIds[0] === "bigint"));
  },
  isSDK(o: any): o is MsgUnPoolWhitelistedPoolResponseSDKType {
    return o && (o.$typeUrl === MsgUnPoolWhitelistedPoolResponse.typeUrl || Array.isArray(o.exited_lock_ids) && (!o.exited_lock_ids.length || typeof o.exited_lock_ids[0] === "bigint"));
  },
  isAmino(o: any): o is MsgUnPoolWhitelistedPoolResponseAmino {
    return o && (o.$typeUrl === MsgUnPoolWhitelistedPoolResponse.typeUrl || Array.isArray(o.exited_lock_ids) && (!o.exited_lock_ids.length || typeof o.exited_lock_ids[0] === "bigint"));
  },
  encode(message: MsgUnPoolWhitelistedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.exitedLockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exitedLockIds.push(reader.uint64());
            }
          } else {
            message.exitedLockIds.push(reader.uint64());
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
    const obj = createBaseMsgUnPoolWhitelistedPoolResponse();
    if (Array.isArray(object?.exitedLockIds)) obj.exitedLockIds = object.exitedLockIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: MsgUnPoolWhitelistedPoolResponse): JsonSafe<MsgUnPoolWhitelistedPoolResponse> {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exitedLockIds = message.exitedLockIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.exitedLockIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse {
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = object.exitedLockIds?.map(e => BigInt(e.toString())) || [];
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
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = object.exited_lock_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAmino {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exited_lock_ids = message.exitedLockIds.map(e => e.toString());
    } else {
      obj.exited_lock_ids = message.exitedLockIds;
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
GlobalDecoderRegistry.register(MsgUnPoolWhitelistedPoolResponse.typeUrl, MsgUnPoolWhitelistedPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnPoolWhitelistedPoolResponse.aminoType, MsgUnPoolWhitelistedPoolResponse.typeUrl);