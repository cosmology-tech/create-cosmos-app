import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  endTime: bigint;
  delayed: boolean;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
  end_time: bigint;
  delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponse {}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponseSDKType {}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
  fromAddress: string;
  toAddress: string;
  startTime: bigint;
  vestingPeriods: Period[];
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time: bigint;
  vesting_periods: PeriodSDKType[];
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseSDKType {}
function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: BigInt(0),
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  encode(message: MsgCreateVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = reader.int64();
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateVestingAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? BigInt(object.endTime.toString()) : BigInt(0),
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || BigInt(0)).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.delayed = object.delayed ?? false;
    return message;
  }
};
function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  encode(_: MsgCreateVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
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
  fromJSON(_: any): MsgCreateVestingAccountResponse {
    return {};
  },
  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  }
};
function createBaseMsgCreatePermanentLockedAccount(): MsgCreatePermanentLockedAccount {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
export const MsgCreatePermanentLockedAccount = {
  encode(message: MsgCreatePermanentLockedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePermanentLockedAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePermanentLockedAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePermanentLockedAccount>): MsgCreatePermanentLockedAccount {
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgCreatePermanentLockedAccountResponse(): MsgCreatePermanentLockedAccountResponse {
  return {};
}
export const MsgCreatePermanentLockedAccountResponse = {
  encode(_: MsgCreatePermanentLockedAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
  fromJSON(_: any): MsgCreatePermanentLockedAccountResponse {
    return {};
  },
  toJSON(_: MsgCreatePermanentLockedAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreatePermanentLockedAccountResponse>): MsgCreatePermanentLockedAccountResponse {
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccount(): MsgCreatePeriodicVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: BigInt(0),
    vestingPeriods: []
  };
}
export const MsgCreatePeriodicVestingAccount = {
  encode(message: MsgCreatePeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = reader.int64();
          break;
        case 4:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePeriodicVestingAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount {
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccountResponse(): MsgCreatePeriodicVestingAccountResponse {
  return {};
}
export const MsgCreatePeriodicVestingAccountResponse = {
  encode(_: MsgCreatePeriodicVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
  fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse {
    return {};
  },
  toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse {
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  }
};