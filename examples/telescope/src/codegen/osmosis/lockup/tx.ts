import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface MsgLockTokens {
  owner: string;
  duration: Duration;
  coins: Coin[];
}
export interface MsgLockTokensSDKType {
  owner: string;
  duration: DurationSDKType;
  coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
  ID: bigint;
}
export interface MsgLockTokensResponseSDKType {
  ID: bigint;
}
export interface MsgBeginUnlockingAll {
  owner: string;
}
export interface MsgBeginUnlockingAllSDKType {
  owner: string;
}
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseSDKType {
  unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
  owner: string;
  ID: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgBeginUnlockingSDKType {
  owner: string;
  ID: bigint;
  coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
  success: boolean;
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
  ID: bigint;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration: Duration;
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
export interface MsgExtendLockupResponseSDKType {
  success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
  owner: string;
  ID: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
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
  toJSON(message: MsgLockTokens): unknown {
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
  fromPartial(object: Partial<MsgLockTokens>): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    ID: BigInt(0)
  };
}
export const MsgLockTokensResponse = {
  encode(message: MsgLockTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ID !== BigInt(0)) {
      writer.uint32(8).uint64(message.ID);
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
          message.ID = reader.uint64();
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
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgLockTokensResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgLockTokensResponse>): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
    return message;
  }
};
function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: ""
  };
}
export const MsgBeginUnlockingAll = {
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
  toJSON(message: MsgBeginUnlockingAll): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: []
  };
}
export const MsgBeginUnlockingAllResponse = {
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
  toJSON(message: MsgBeginUnlockingAllResponse): unknown {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    ID: BigInt(0),
    coins: []
  };
}
export const MsgBeginUnlocking = {
  encode(message: MsgBeginUnlocking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
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
          message.ID = reader.uint64();
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
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBeginUnlocking): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgBeginUnlocking>): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false
  };
}
export const MsgBeginUnlockingResponse = {
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
  toJSON(message: MsgBeginUnlockingResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: Partial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    return message;
  }
};
function createBaseMsgExtendLockup(): MsgExtendLockup {
  return {
    owner: "",
    ID: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const MsgExtendLockup = {
  encode(message: MsgExtendLockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
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
          message.ID = reader.uint64();
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
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  toJSON(message: MsgExtendLockup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgExtendLockup>): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    message.owner = object.owner ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseMsgExtendLockupResponse(): MsgExtendLockupResponse {
  return {
    success: false
  };
}
export const MsgExtendLockupResponse = {
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
  toJSON(message: MsgExtendLockupResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: Partial<MsgExtendLockupResponse>): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    message.success = object.success ?? false;
    return message;
  }
};
function createBaseMsgForceUnlock(): MsgForceUnlock {
  return {
    owner: "",
    ID: BigInt(0),
    coins: []
  };
}
export const MsgForceUnlock = {
  encode(message: MsgForceUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
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
          message.ID = reader.uint64();
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
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgForceUnlock): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgForceUnlock>): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    message.owner = object.owner ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgForceUnlockResponse(): MsgForceUnlockResponse {
  return {
    success: false
  };
}
export const MsgForceUnlockResponse = {
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
  toJSON(message: MsgForceUnlockResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: Partial<MsgForceUnlockResponse>): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    message.success = object.success ?? false;
    return message;
  }
};