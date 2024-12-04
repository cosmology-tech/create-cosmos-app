import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "osmosis.lockup";
export interface MsgLockTokens {
  owner: string;
  duration: Duration;
  coins: Coin[];
}
export interface MsgLockTokensProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokens";
  value: Uint8Array;
}
export interface MsgLockTokensSDKType {
  owner: string;
  duration: DurationSDKType;
  coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
  iD: bigint;
}
export interface MsgLockTokensResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse";
  value: Uint8Array;
}
export interface MsgLockTokensResponseSDKType {
  ID: bigint;
}
export interface MsgBeginUnlockingAll {
  owner: string;
}
export interface MsgBeginUnlockingAllProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllSDKType {
  owner: string;
}
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllResponseSDKType {
  unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
  owner: string;
  iD: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgBeginUnlockingProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking";
  value: Uint8Array;
}
export interface MsgBeginUnlockingSDKType {
  owner: string;
  ID: bigint;
  coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
  success: boolean;
}
export interface MsgBeginUnlockingResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingResponseSDKType {
  success: boolean;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
  owner: string;
  iD: bigint;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration: Duration;
}
export interface MsgExtendLockupProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockup";
  value: Uint8Array;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
  owner: string;
  ID: bigint;
  duration: DurationSDKType;
}
export interface MsgExtendLockupResponse {
  success: boolean;
}
export interface MsgExtendLockupResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse";
  value: Uint8Array;
}
export interface MsgExtendLockupResponseSDKType {
  success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
  owner: string;
  iD: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgForceUnlockProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlock";
  value: Uint8Array;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockSDKType {
  owner: string;
  ID: bigint;
  coins: CoinSDKType[];
}
export interface MsgForceUnlockResponse {
  success: boolean;
}
export interface MsgForceUnlockResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse";
  value: Uint8Array;
}
export interface MsgForceUnlockResponseSDKType {
  success: boolean;
}
function createBaseMsgLockTokens(): MsgLockTokens {
  return {
    owner: "",
    duration: Duration.fromPartial({}),
    coins: []
  };
}
export const MsgLockTokens = {
  typeUrl: "/osmosis.lockup.MsgLockTokens",
  encode(message: MsgLockTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgLockTokens): JsonSafe<MsgLockTokens> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockTokens>): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgLockTokensSDKType): MsgLockTokens {
    return {
      owner: object?.owner,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgLockTokensSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgLockTokens): MsgLockTokensSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: MsgLockTokensAmino): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgLockTokens): MsgLockTokensAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgLockTokensAminoMsg): MsgLockTokens {
    return MsgLockTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockTokens): MsgLockTokensAminoMsg {
    return {
      type: "osmosis/lockup/lock-tokens",
      value: MsgLockTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockTokensProtoMsg): MsgLockTokens {
    return MsgLockTokens.decode(message.value);
  },
  toProto(message: MsgLockTokens): Uint8Array {
    return MsgLockTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokens): MsgLockTokensProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokens",
      value: MsgLockTokens.encode(message).finish()
    };
  }
};
function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    iD: BigInt(0)
  };
}
export const MsgLockTokensResponse = {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
  encode(message: MsgLockTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== BigInt(0)) {
      writer.uint32(8).uint64(message.iD);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokensResponse {
    return {
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgLockTokensResponse): JsonSafe<MsgLockTokensResponse> {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockTokensResponse>): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgLockTokensResponseSDKType): MsgLockTokensResponse {
    return {
      iD: object?.ID
    };
  },
  fromSDKJSON(object: any): MsgLockTokensResponseSDKType {
    return {
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgLockTokensResponse): MsgLockTokensResponseSDKType {
    const obj: any = {};
    obj.ID = message.iD;
    return obj;
  },
  fromAmino(object: MsgLockTokensResponseAmino): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    return message;
  },
  toAmino(message: MsgLockTokensResponse): MsgLockTokensResponseAmino {
    const obj: any = {};
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLockTokensResponseAminoMsg): MsgLockTokensResponse {
    return MsgLockTokensResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseAminoMsg {
    return {
      type: "osmosis/lockup/lock-tokens-response",
      value: MsgLockTokensResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockTokensResponseProtoMsg): MsgLockTokensResponse {
    return MsgLockTokensResponse.decode(message.value);
  },
  toProto(message: MsgLockTokensResponse): Uint8Array {
    return MsgLockTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
      value: MsgLockTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: ""
  };
}
export const MsgBeginUnlockingAll = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
  encode(message: MsgBeginUnlockingAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAll {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: MsgBeginUnlockingAll): JsonSafe<MsgBeginUnlockingAll> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: MsgBeginUnlockingAllSDKType): MsgBeginUnlockingAll {
    return {
      owner: object?.owner
    };
  },
  fromSDKJSON(object: any): MsgBeginUnlockingAllSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toSDK(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingAllAmino): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAllAminoMsg): MsgBeginUnlockingAll {
    return MsgBeginUnlockingAll.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlock-tokens",
      value: MsgBeginUnlockingAll.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingAllProtoMsg): MsgBeginUnlockingAll {
    return MsgBeginUnlockingAll.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAll): Uint8Array {
    return MsgBeginUnlockingAll.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
      value: MsgBeginUnlockingAll.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: []
  };
}
export const MsgBeginUnlockingAllResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
  encode(message: MsgBeginUnlockingAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unlocks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAllResponse {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBeginUnlockingAllResponse): JsonSafe<MsgBeginUnlockingAllResponse> {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgBeginUnlockingAllResponseSDKType): MsgBeginUnlockingAllResponse {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgBeginUnlockingAllResponseSDKType {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseSDKType {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingAllResponseAmino): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAmino {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.unlocks = message.unlocks;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAllResponseAminoMsg): MsgBeginUnlockingAllResponse {
    return MsgBeginUnlockingAllResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlocking-all-response",
      value: MsgBeginUnlockingAllResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingAllResponseProtoMsg): MsgBeginUnlockingAllResponse {
    return MsgBeginUnlockingAllResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAllResponse): Uint8Array {
    return MsgBeginUnlockingAllResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
      value: MsgBeginUnlockingAllResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    iD: BigInt(0),
    coins: []
  };
}
export const MsgBeginUnlocking = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
  encode(message: MsgBeginUnlocking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlocking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlocking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlocking {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBeginUnlocking): JsonSafe<MsgBeginUnlocking> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlocking>): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgBeginUnlockingSDKType): MsgBeginUnlocking {
    return {
      owner: object?.owner,
      iD: object?.ID,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgBeginUnlockingSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgBeginUnlocking): MsgBeginUnlockingSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.iD;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingAmino): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBeginUnlocking): MsgBeginUnlockingAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAminoMsg): MsgBeginUnlocking {
    return MsgBeginUnlocking.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlock-period-lock",
      value: MsgBeginUnlocking.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingProtoMsg): MsgBeginUnlocking {
    return MsgBeginUnlocking.decode(message.value);
  },
  toProto(message: MsgBeginUnlocking): Uint8Array {
    return MsgBeginUnlocking.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
      value: MsgBeginUnlocking.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false
  };
}
export const MsgBeginUnlockingResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
  encode(message: MsgBeginUnlockingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgBeginUnlockingResponse): JsonSafe<MsgBeginUnlockingResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgBeginUnlockingResponseSDKType): MsgBeginUnlockingResponse {
    return {
      success: object?.success
    };
  },
  fromSDKJSON(object: any): MsgBeginUnlockingResponseSDKType {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toSDK(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingResponseAmino): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingResponseAminoMsg): MsgBeginUnlockingResponse {
    return MsgBeginUnlockingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlocking-response",
      value: MsgBeginUnlockingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingResponseProtoMsg): MsgBeginUnlockingResponse {
    return MsgBeginUnlockingResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingResponse): Uint8Array {
    return MsgBeginUnlockingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
      value: MsgBeginUnlockingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExtendLockup(): MsgExtendLockup {
  return {
    owner: "",
    iD: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const MsgExtendLockup = {
  typeUrl: "/osmosis.lockup.MsgExtendLockup",
  encode(message: MsgExtendLockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockup {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0),
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  toJSON(message: MsgExtendLockup): JsonSafe<MsgExtendLockup> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExtendLockup>): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromSDK(object: MsgExtendLockupSDKType): MsgExtendLockup {
    return {
      owner: object?.owner,
      iD: object?.ID,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },
  fromSDKJSON(object: any): MsgExtendLockupSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined
    };
  },
  toSDK(message: MsgExtendLockup): MsgExtendLockupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.iD;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },
  fromAmino(object: MsgExtendLockupAmino): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: MsgExtendLockup): MsgExtendLockupAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExtendLockupAminoMsg): MsgExtendLockup {
    return MsgExtendLockup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendLockup): MsgExtendLockupAminoMsg {
    return {
      type: "osmosis/lockup/extend-lockup",
      value: MsgExtendLockup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendLockupProtoMsg): MsgExtendLockup {
    return MsgExtendLockup.decode(message.value);
  },
  toProto(message: MsgExtendLockup): Uint8Array {
    return MsgExtendLockup.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockup): MsgExtendLockupProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockup",
      value: MsgExtendLockup.encode(message).finish()
    };
  }
};
function createBaseMsgExtendLockupResponse(): MsgExtendLockupResponse {
  return {
    success: false
  };
}
export const MsgExtendLockupResponse = {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
  encode(message: MsgExtendLockupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockupResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgExtendLockupResponse): JsonSafe<MsgExtendLockupResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExtendLockupResponse>): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgExtendLockupResponseSDKType): MsgExtendLockupResponse {
    return {
      success: object?.success
    };
  },
  fromSDKJSON(object: any): MsgExtendLockupResponseSDKType {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toSDK(message: MsgExtendLockupResponse): MsgExtendLockupResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgExtendLockupResponseAmino): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgExtendLockupResponse): MsgExtendLockupResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgExtendLockupResponseAminoMsg): MsgExtendLockupResponse {
    return MsgExtendLockupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseAminoMsg {
    return {
      type: "osmosis/lockup/extend-lockup-response",
      value: MsgExtendLockupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendLockupResponseProtoMsg): MsgExtendLockupResponse {
    return MsgExtendLockupResponse.decode(message.value);
  },
  toProto(message: MsgExtendLockupResponse): Uint8Array {
    return MsgExtendLockupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
      value: MsgExtendLockupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceUnlock(): MsgForceUnlock {
  return {
    owner: "",
    iD: BigInt(0),
    coins: []
  };
}
export const MsgForceUnlock = {
  typeUrl: "/osmosis.lockup.MsgForceUnlock",
  encode(message: MsgForceUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlock {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgForceUnlock): JsonSafe<MsgForceUnlock> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgForceUnlock>): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgForceUnlockSDKType): MsgForceUnlock {
    return {
      owner: object?.owner,
      iD: object?.ID,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgForceUnlockSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgForceUnlock): MsgForceUnlockSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.iD;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: MsgForceUnlockAmino): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgForceUnlock): MsgForceUnlockAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgForceUnlockAminoMsg): MsgForceUnlock {
    return MsgForceUnlock.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceUnlock): MsgForceUnlockAminoMsg {
    return {
      type: "osmosis/lockup/force-unlock",
      value: MsgForceUnlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceUnlockProtoMsg): MsgForceUnlock {
    return MsgForceUnlock.decode(message.value);
  },
  toProto(message: MsgForceUnlock): Uint8Array {
    return MsgForceUnlock.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlock): MsgForceUnlockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlock",
      value: MsgForceUnlock.encode(message).finish()
    };
  }
};
function createBaseMsgForceUnlockResponse(): MsgForceUnlockResponse {
  return {
    success: false
  };
}
export const MsgForceUnlockResponse = {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
  encode(message: MsgForceUnlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlockResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgForceUnlockResponse): JsonSafe<MsgForceUnlockResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgForceUnlockResponse>): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgForceUnlockResponseSDKType): MsgForceUnlockResponse {
    return {
      success: object?.success
    };
  },
  fromSDKJSON(object: any): MsgForceUnlockResponseSDKType {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toSDK(message: MsgForceUnlockResponse): MsgForceUnlockResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgForceUnlockResponseAmino): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgForceUnlockResponse): MsgForceUnlockResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgForceUnlockResponseAminoMsg): MsgForceUnlockResponse {
    return MsgForceUnlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseAminoMsg {
    return {
      type: "osmosis/lockup/force-unlock-response",
      value: MsgForceUnlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceUnlockResponseProtoMsg): MsgForceUnlockResponse {
    return MsgForceUnlockResponse.decode(message.value);
  },
  toProto(message: MsgForceUnlockResponse): Uint8Array {
    return MsgForceUnlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
      value: MsgForceUnlockResponse.encode(message).finish()
    };
  }
};