import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodAmino, PeriodSDKType } from "./vesting";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  endTime: Long;
  delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
  from_address: string;
  to_address: string;
  amount: CoinAmino[];
  end_time: string;
  delayed: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccount";
  value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
  end_time: Long;
  delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}
export interface MsgCreateVestingAccountResponseProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
  value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {}
export interface MsgCreateVestingAccountResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccountResponse";
  value: MsgCreateVestingAccountResponseAmino;
}
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
export interface MsgCreatePermanentLockedAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
  value: Uint8Array;
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccountAmino {
  from_address: string;
  to_address: string;
  amount: CoinAmino[];
}
export interface MsgCreatePermanentLockedAccountAminoMsg {
  type: "cosmos-sdk/MsgCreatePermanentLockedAccount";
  value: MsgCreatePermanentLockedAccountAmino;
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
export interface MsgCreatePermanentLockedAccountResponseProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
  value: Uint8Array;
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponseAmino {}
export interface MsgCreatePermanentLockedAccountResponseAminoMsg {
  type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse";
  value: MsgCreatePermanentLockedAccountResponseAmino;
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponseSDKType {}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
  fromAddress: string;
  toAddress: string;
  startTime: Long;
  vestingPeriods: Period[];
}
export interface MsgCreatePeriodicVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountAmino {
  from_address: string;
  to_address: string;
  start_time: string;
  vesting_periods: PeriodAmino[];
}
export interface MsgCreatePeriodicVestingAccountAminoMsg {
  type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
  value: MsgCreatePeriodicVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time: Long;
  vesting_periods: PeriodSDKType[];
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {}
export interface MsgCreatePeriodicVestingAccountResponseProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseAmino {}
export interface MsgCreatePeriodicVestingAccountResponseAminoMsg {
  type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse";
  value: MsgCreatePeriodicVestingAccountResponseAmino;
}
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
    endTime: Long.ZERO,
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  aminoType: "cosmos-sdk/MsgCreateVestingAccount",
  encode(message: MsgCreateVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.endTime = (reader.int64() as Long);
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
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
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
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    message.delayed = object.delayed ?? false;
    return message;
  },
  fromSDK(object: MsgCreateVestingAccountSDKType): MsgCreateVestingAccount {
    return {
      fromAddress: object?.from_address,
      toAddress: object?.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : [],
      endTime: object?.end_time,
      delayed: object?.delayed
    };
  },
  toSDK(message: MsgCreateVestingAccount): MsgCreateVestingAccountSDKType {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.end_time = message.endTime;
    obj.delayed = message.delayed;
    return obj;
  },
  fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount {
    return {
      fromAddress: object.from_address,
      toAddress: object.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      endTime: Long.fromString(object.end_time),
      delayed: object.delayed
    };
  },
  toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.end_time = message.endTime ? message.endTime.toString() : undefined;
    obj.delayed = message.delayed;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccount): Uint8Array {
    return MsgCreateVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
  aminoType: "cosmos-sdk/MsgCreateVestingAccountResponse",
  encode(_: MsgCreateVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreateVestingAccountResponseSDKType): MsgCreateVestingAccountResponse {
    return {};
  },
  toSDK(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccountResponse): Uint8Array {
    return MsgCreateVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.encode(message).finish()
    };
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
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
  aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccount",
  encode(message: MsgCreatePermanentLockedAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<MsgCreatePermanentLockedAccount>): MsgCreatePermanentLockedAccount {
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCreatePermanentLockedAccountSDKType): MsgCreatePermanentLockedAccount {
    return {
      fromAddress: object?.from_address,
      toAddress: object?.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountSDKType {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgCreatePermanentLockedAccountAmino): MsgCreatePermanentLockedAccount {
    return {
      fromAddress: object.from_address,
      toAddress: object.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePermanentLockedAccountAminoMsg): MsgCreatePermanentLockedAccount {
    return MsgCreatePermanentLockedAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePermanentLockedAccountProtoMsg): MsgCreatePermanentLockedAccount {
    return MsgCreatePermanentLockedAccount.decode(message.value);
  },
  toProto(message: MsgCreatePermanentLockedAccount): Uint8Array {
    return MsgCreatePermanentLockedAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePermanentLockedAccountResponse(): MsgCreatePermanentLockedAccountResponse {
  return {};
}
export const MsgCreatePermanentLockedAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
  aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
  encode(_: MsgCreatePermanentLockedAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(_: DeepPartial<MsgCreatePermanentLockedAccountResponse>): MsgCreatePermanentLockedAccountResponse {
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreatePermanentLockedAccountResponseSDKType): MsgCreatePermanentLockedAccountResponse {
    return {};
  },
  toSDK(_: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreatePermanentLockedAccountResponseAmino): MsgCreatePermanentLockedAccountResponse {
    return {};
  },
  toAmino(_: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePermanentLockedAccountResponseAminoMsg): MsgCreatePermanentLockedAccountResponse {
    return MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
      value: MsgCreatePermanentLockedAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePermanentLockedAccountResponseProtoMsg): MsgCreatePermanentLockedAccountResponse {
    return MsgCreatePermanentLockedAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreatePermanentLockedAccountResponse): Uint8Array {
    return MsgCreatePermanentLockedAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
      value: MsgCreatePermanentLockedAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePeriodicVestingAccount(): MsgCreatePeriodicVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: Long.ZERO,
    vestingPeriods: []
  };
}
export const MsgCreatePeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
  aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
  encode(message: MsgCreatePeriodicVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.startTime = (reader.int64() as Long);
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
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.ZERO,
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount {
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.ZERO;
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCreatePeriodicVestingAccountSDKType): MsgCreatePeriodicVestingAccount {
    return {
      fromAddress: object?.from_address,
      toAddress: object?.to_address,
      startTime: object?.start_time,
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountSDKType {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    obj.start_time = message.startTime;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAmino(object: MsgCreatePeriodicVestingAccountAmino): MsgCreatePeriodicVestingAccount {
    return {
      fromAddress: object.from_address,
      toAddress: object.to_address,
      startTime: Long.fromString(object.start_time),
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePeriodicVestingAccountAminoMsg): MsgCreatePeriodicVestingAccount {
    return MsgCreatePeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePeriodicVestingAccountProtoMsg): MsgCreatePeriodicVestingAccount {
    return MsgCreatePeriodicVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreatePeriodicVestingAccount): Uint8Array {
    return MsgCreatePeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePeriodicVestingAccountResponse(): MsgCreatePeriodicVestingAccountResponse {
  return {};
}
export const MsgCreatePeriodicVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
  aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
  encode(_: MsgCreatePeriodicVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(_: DeepPartial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse {
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreatePeriodicVestingAccountResponseSDKType): MsgCreatePeriodicVestingAccountResponse {
    return {};
  },
  toSDK(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreatePeriodicVestingAccountResponseAmino): MsgCreatePeriodicVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePeriodicVestingAccountResponseAminoMsg): MsgCreatePeriodicVestingAccountResponse {
    return MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
      value: MsgCreatePeriodicVestingAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePeriodicVestingAccountResponseProtoMsg): MsgCreatePeriodicVestingAccountResponse {
    return MsgCreatePeriodicVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreatePeriodicVestingAccountResponse): Uint8Array {
    return MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
      value: MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
    };
  }
};