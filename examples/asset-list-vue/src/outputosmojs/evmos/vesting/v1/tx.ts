import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "evmos.vesting.v1";
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccount {
  /**
   * from_address specifies the account to provide the funds and sign the
   * clawback request
   */
  fromAddress: string;
  /** to_address specifies the account to receive the funds */
  toAddress: string;
  /** start_time defines the time at which the vesting period begins */
  startTime: Date;
  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockupPeriods: Period[];
  /** vesting_periods defines thevesting schedule relative to the start_time */
  vestingPeriods: Period[];
  /**
   * merge specifies a the creation mechanism for existing
   * ClawbackVestingAccounts. If true, merge this new grant into an existing
   * ClawbackVestingAccount, or create it if it does not exist. If false,
   * creates a new account. New grants to an existing account must be from the
   * same from_address.
   */
  merge: boolean;
}
export interface MsgCreateClawbackVestingAccountProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount";
  value: Uint8Array;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time: Date;
  lockup_periods: PeriodSDKType[];
  vesting_periods: PeriodSDKType[];
  merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {}
export interface MsgCreateClawbackVestingAccountResponseProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse";
  value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseSDKType {}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawback {
  /** funder_address is the address which funded the account */
  funderAddress: string;
  /** account_address is the address of the ClawbackVestingAccount to claw back from. */
  accountAddress: string;
  /**
   * dest_address specifies where the clawed-back tokens should be transferred
   * to. If empty, the tokens will be transferred back to the original funder of
   * the account.
   */
  destAddress: string;
}
export interface MsgClawbackProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgClawback";
  value: Uint8Array;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackSDKType {
  funder_address: string;
  account_address: string;
  dest_address: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {}
export interface MsgClawbackResponseProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgClawbackResponse";
  value: Uint8Array;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {}
function createBaseMsgCreateClawbackVestingAccount(): MsgCreateClawbackVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: new Date(),
    lockupPeriods: [],
    vestingPeriods: [],
    merge: false
  };
}
export const MsgCreateClawbackVestingAccount = {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
  encode(message: MsgCreateClawbackVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lockupPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.merge === true) {
      writer.uint32(48).bool(message.merge);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClawbackVestingAccount();
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
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lockupPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        case 5:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        case 6:
          message.merge = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClawbackVestingAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined,
      lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e: any) => Period.fromJSON(e)) : [],
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : [],
      merge: isSet(object.merge) ? Boolean(object.merge) : false
    };
  },
  toJSON(message: MsgCreateClawbackVestingAccount): JsonSafe<MsgCreateClawbackVestingAccount> {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    if (message.lockupPeriods) {
      obj.lockupPeriods = message.lockupPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.lockupPeriods = [];
    }
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vestingPeriods = [];
    }
    message.merge !== undefined && (obj.merge = message.merge);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount {
    const message = createBaseMsgCreateClawbackVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.startTime = object.startTime ?? undefined;
    message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    message.merge = object.merge ?? false;
    return message;
  },
  fromSDK(object: MsgCreateClawbackVestingAccountSDKType): MsgCreateClawbackVestingAccount {
    return {
      fromAddress: object?.from_address,
      toAddress: object?.to_address,
      startTime: object.start_time ?? undefined,
      lockupPeriods: Array.isArray(object?.lockup_periods) ? object.lockup_periods.map((e: any) => Period.fromSDK(e)) : [],
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDK(e)) : [],
      merge: object?.merge
    };
  },
  fromSDKJSON(object: any): MsgCreateClawbackVestingAccountSDKType {
    return {
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined,
      lockup_periods: Array.isArray(object?.lockup_periods) ? object.lockup_periods.map((e: any) => Period.fromSDKJSON(e)) : [],
      vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDKJSON(e)) : [],
      merge: isSet(object.merge) ? Boolean(object.merge) : false
    };
  },
  toSDK(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountSDKType {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    if (message.lockupPeriods) {
      obj.lockup_periods = message.lockupPeriods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.lockup_periods = [];
    }
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    obj.merge = message.merge;
    return obj;
  },
  fromAmino(object: MsgCreateClawbackVestingAccountAmino): MsgCreateClawbackVestingAccount {
    const message = createBaseMsgCreateClawbackVestingAccount();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    message.lockupPeriods = object.lockup_periods?.map(e => Period.fromAmino(e)) || [];
    message.vestingPeriods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
    if (object.merge !== undefined && object.merge !== null) {
      message.merge = object.merge;
    }
    return message;
  },
  toAmino(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    if (message.lockupPeriods) {
      obj.lockup_periods = message.lockupPeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.lockup_periods = message.lockupPeriods;
    }
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.vesting_periods = message.vestingPeriods;
    }
    obj.merge = message.merge === false ? undefined : message.merge;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClawbackVestingAccountAminoMsg): MsgCreateClawbackVestingAccount {
    return MsgCreateClawbackVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClawbackVestingAccountProtoMsg): MsgCreateClawbackVestingAccount {
    return MsgCreateClawbackVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreateClawbackVestingAccount): Uint8Array {
    return MsgCreateClawbackVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
      value: MsgCreateClawbackVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClawbackVestingAccountResponse(): MsgCreateClawbackVestingAccountResponse {
  return {};
}
export const MsgCreateClawbackVestingAccountResponse = {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse",
  encode(_: MsgCreateClawbackVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClawbackVestingAccountResponse();
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
  fromJSON(_: any): MsgCreateClawbackVestingAccountResponse {
    return {};
  },
  toJSON(_: MsgCreateClawbackVestingAccountResponse): JsonSafe<MsgCreateClawbackVestingAccountResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse {
    const message = createBaseMsgCreateClawbackVestingAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreateClawbackVestingAccountResponseSDKType): MsgCreateClawbackVestingAccountResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCreateClawbackVestingAccountResponseSDKType {
    return {};
  },
  toSDK(_: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateClawbackVestingAccountResponseAmino): MsgCreateClawbackVestingAccountResponse {
    const message = createBaseMsgCreateClawbackVestingAccountResponse();
    return message;
  },
  toAmino(_: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateClawbackVestingAccountResponseAminoMsg): MsgCreateClawbackVestingAccountResponse {
    return MsgCreateClawbackVestingAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClawbackVestingAccountResponseProtoMsg): MsgCreateClawbackVestingAccountResponse {
    return MsgCreateClawbackVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateClawbackVestingAccountResponse): Uint8Array {
    return MsgCreateClawbackVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse",
      value: MsgCreateClawbackVestingAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClawback(): MsgClawback {
  return {
    funderAddress: "",
    accountAddress: "",
    destAddress: ""
  };
}
export const MsgClawback = {
  typeUrl: "/evmos.vesting.v1.MsgClawback",
  encode(message: MsgClawback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funderAddress !== "") {
      writer.uint32(10).string(message.funderAddress);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClawback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClawback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funderAddress = reader.string();
          break;
        case 2:
          message.accountAddress = reader.string();
          break;
        case 3:
          message.destAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClawback {
    return {
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : ""
    };
  },
  toJSON(message: MsgClawback): JsonSafe<MsgClawback> {
    const obj: any = {};
    message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClawback>): MsgClawback {
    const message = createBaseMsgClawback();
    message.funderAddress = object.funderAddress ?? "";
    message.accountAddress = object.accountAddress ?? "";
    message.destAddress = object.destAddress ?? "";
    return message;
  },
  fromSDK(object: MsgClawbackSDKType): MsgClawback {
    return {
      funderAddress: object?.funder_address,
      accountAddress: object?.account_address,
      destAddress: object?.dest_address
    };
  },
  fromSDKJSON(object: any): MsgClawbackSDKType {
    return {
      funder_address: isSet(object.funder_address) ? String(object.funder_address) : "",
      account_address: isSet(object.account_address) ? String(object.account_address) : "",
      dest_address: isSet(object.dest_address) ? String(object.dest_address) : ""
    };
  },
  toSDK(message: MsgClawback): MsgClawbackSDKType {
    const obj: any = {};
    obj.funder_address = message.funderAddress;
    obj.account_address = message.accountAddress;
    obj.dest_address = message.destAddress;
    return obj;
  },
  fromAmino(object: MsgClawbackAmino): MsgClawback {
    const message = createBaseMsgClawback();
    if (object.funder_address !== undefined && object.funder_address !== null) {
      message.funderAddress = object.funder_address;
    }
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.dest_address !== undefined && object.dest_address !== null) {
      message.destAddress = object.dest_address;
    }
    return message;
  },
  toAmino(message: MsgClawback): MsgClawbackAmino {
    const obj: any = {};
    obj.funder_address = message.funderAddress === "" ? undefined : message.funderAddress;
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.dest_address = message.destAddress === "" ? undefined : message.destAddress;
    return obj;
  },
  fromAminoMsg(object: MsgClawbackAminoMsg): MsgClawback {
    return MsgClawback.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClawbackProtoMsg): MsgClawback {
    return MsgClawback.decode(message.value);
  },
  toProto(message: MsgClawback): Uint8Array {
    return MsgClawback.encode(message).finish();
  },
  toProtoMsg(message: MsgClawback): MsgClawbackProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgClawback",
      value: MsgClawback.encode(message).finish()
    };
  }
};
function createBaseMsgClawbackResponse(): MsgClawbackResponse {
  return {};
}
export const MsgClawbackResponse = {
  typeUrl: "/evmos.vesting.v1.MsgClawbackResponse",
  encode(_: MsgClawbackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClawbackResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClawbackResponse();
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
  fromJSON(_: any): MsgClawbackResponse {
    return {};
  },
  toJSON(_: MsgClawbackResponse): JsonSafe<MsgClawbackResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgClawbackResponse>): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  },
  fromSDK(_: MsgClawbackResponseSDKType): MsgClawbackResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgClawbackResponseSDKType {
    return {};
  },
  toSDK(_: MsgClawbackResponse): MsgClawbackResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgClawbackResponseAmino): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  },
  toAmino(_: MsgClawbackResponse): MsgClawbackResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClawbackResponseAminoMsg): MsgClawbackResponse {
    return MsgClawbackResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse {
    return MsgClawbackResponse.decode(message.value);
  },
  toProto(message: MsgClawbackResponse): Uint8Array {
    return MsgClawbackResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgClawbackResponse",
      value: MsgClawbackResponse.encode(message).finish()
    };
  }
};