//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
  $typeUrl?: "/cosmos.feegrant.v1beta1.BasicAllowance";
  /**
   * spend_limit specifies the maximum amount of tokens that can be spent
   * by this allowance and will be updated as tokens are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   */
  spendLimit: Coin[];
  /** expiration specifies an optional time when this allowance expires */
  expiration?: Date;
}
export interface BasicAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";
  value: Uint8Array;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceAmino {
  /**
   * spend_limit specifies the maximum amount of tokens that can be spent
   * by this allowance and will be updated as tokens are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   */
  spend_limit?: CoinAmino[];
  /** expiration specifies an optional time when this allowance expires */
  expiration?: string;
}
export interface BasicAllowanceAminoMsg {
  type: "cosmos-sdk/BasicAllowance";
  value: BasicAllowanceAmino;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceSDKType {
  $typeUrl?: "/cosmos.feegrant.v1beta1.BasicAllowance";
  spend_limit: CoinSDKType[];
  expiration?: Date;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
  $typeUrl?: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
  /** basic specifies a struct of `BasicAllowance` */
  basic: BasicAllowance;
  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   */
  period: Duration;
  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   */
  periodSpendLimit: Coin[];
  /** period_can_spend is the number of coins left to be spent before the period_reset time */
  periodCanSpend: Coin[];
  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   */
  periodReset: Date;
}
export interface PeriodicAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
  value: Uint8Array;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceAmino {
  /** basic specifies a struct of `BasicAllowance` */
  basic?: BasicAllowanceAmino;
  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   */
  period?: DurationAmino;
  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   */
  period_spend_limit?: CoinAmino[];
  /** period_can_spend is the number of coins left to be spent before the period_reset time */
  period_can_spend?: CoinAmino[];
  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   */
  period_reset?: string;
}
export interface PeriodicAllowanceAminoMsg {
  type: "cosmos-sdk/PeriodicAllowance";
  value: PeriodicAllowanceAmino;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceSDKType {
  $typeUrl?: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
  basic: BasicAllowanceSDKType;
  period: DurationSDKType;
  period_spend_limit: CoinSDKType[];
  period_can_spend: CoinSDKType[];
  period_reset: Date;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
  $typeUrl?: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
  /** allowance can be any of basic and periodic fee allowance. */
  allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
  /** allowed_messages are the messages for which the grantee has the access. */
  allowedMessages: string[];
}
export interface AllowedMsgAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
  value: Uint8Array;
}
export type AllowedMsgAllowanceEncoded = Omit<AllowedMsgAllowance, "allowance"> & {
  /** allowance can be any of basic and periodic fee allowance. */allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceAmino {
  /** allowance can be any of basic and periodic fee allowance. */
  allowance?: AnyAmino;
  /** allowed_messages are the messages for which the grantee has the access. */
  allowed_messages?: string[];
}
export interface AllowedMsgAllowanceAminoMsg {
  type: "cosmos-sdk/AllowedMsgAllowance";
  value: AllowedMsgAllowanceAmino;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceSDKType {
  $typeUrl?: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
  allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
  allowed_messages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
}
export interface GrantProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant";
  value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "allowance"> & {
  /** allowance can be any of basic, periodic, allowed fee allowance. */allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter?: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee?: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: AnyAmino;
}
export interface GrantAminoMsg {
  type: "cosmos-sdk/Grant";
  value: GrantAmino;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantSDKType {
  granter: string;
  grantee: string;
  allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
}
function createBaseBasicAllowance(): BasicAllowance {
  return {
    $typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    spendLimit: [],
    expiration: undefined
  };
}
export const BasicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
  aminoType: "cosmos-sdk/BasicAllowance",
  is(o: any): o is BasicAllowance {
    return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spendLimit) && (!o.spendLimit.length || Coin.is(o.spendLimit[0])));
  },
  isSDK(o: any): o is BasicAllowanceSDKType {
    return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isSDK(o.spend_limit[0])));
  },
  isAmino(o: any): o is BasicAllowanceAmino {
    return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isAmino(o.spend_limit[0])));
  },
  encode(message: BasicAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BasicAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BasicAllowance {
    const obj = createBaseBasicAllowance();
    if (Array.isArray(object?.spendLimit)) obj.spendLimit = object.spendLimit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.expiration)) obj.expiration = new Date(object.expiration);
    return obj;
  },
  toJSON(message: BasicAllowance): JsonSafe<BasicAllowance> {
    const obj: any = {};
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.spendLimit = [];
    }
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<BasicAllowance>): BasicAllowance {
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromSDK(object: BasicAllowanceSDKType): BasicAllowance {
    return {
      spendLimit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromSDK(e)) : [],
      expiration: object.expiration ?? undefined
    };
  },
  toSDK(message: BasicAllowance): BasicAllowanceSDKType {
    const obj: any = {};
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.spend_limit = [];
    }
    message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
    return obj;
  },
  fromAmino(object: BasicAllowanceAmino): BasicAllowance {
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: BasicAllowance): BasicAllowanceAmino {
    const obj: any = {};
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spend_limit = message.spendLimit;
    }
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: BasicAllowanceAminoMsg): BasicAllowance {
    return BasicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: BasicAllowance): BasicAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/BasicAllowance",
      value: BasicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: BasicAllowanceProtoMsg): BasicAllowance {
    return BasicAllowance.decode(message.value);
  },
  toProto(message: BasicAllowance): Uint8Array {
    return BasicAllowance.encode(message).finish();
  },
  toProtoMsg(message: BasicAllowance): BasicAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
      value: BasicAllowance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BasicAllowance.typeUrl, BasicAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(BasicAllowance.aminoType, BasicAllowance.typeUrl);
function createBasePeriodicAllowance(): PeriodicAllowance {
  return {
    $typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    basic: BasicAllowance.fromPartial({}),
    period: Duration.fromPartial({}),
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: new Date()
  };
}
export const PeriodicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
  aminoType: "cosmos-sdk/PeriodicAllowance",
  is(o: any): o is PeriodicAllowance {
    return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.is(o.basic) && Duration.is(o.period) && Array.isArray(o.periodSpendLimit) && (!o.periodSpendLimit.length || Coin.is(o.periodSpendLimit[0])) && Array.isArray(o.periodCanSpend) && (!o.periodCanSpend.length || Coin.is(o.periodCanSpend[0])) && Timestamp.is(o.periodReset));
  },
  isSDK(o: any): o is PeriodicAllowanceSDKType {
    return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.isSDK(o.basic) && Duration.isSDK(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || Coin.isSDK(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || Coin.isSDK(o.period_can_spend[0])) && Timestamp.isSDK(o.period_reset));
  },
  isAmino(o: any): o is PeriodicAllowanceAmino {
    return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.isAmino(o.basic) && Duration.isAmino(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || Coin.isAmino(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || Coin.isAmino(o.period_can_spend[0])) && Timestamp.isAmino(o.period_reset));
  },
  encode(message: PeriodicAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodCanSpend) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodReset !== undefined) {
      Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodicAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodicAllowance {
    const obj = createBasePeriodicAllowance();
    if (isSet(object.basic)) obj.basic = BasicAllowance.fromJSON(object.basic);
    if (isSet(object.period)) obj.period = Duration.fromJSON(object.period);
    if (Array.isArray(object?.periodSpendLimit)) obj.periodSpendLimit = object.periodSpendLimit.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.periodCanSpend)) obj.periodCanSpend = object.periodCanSpend.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.periodReset)) obj.periodReset = new Date(object.periodReset);
    return obj;
  },
  toJSON(message: PeriodicAllowance): JsonSafe<PeriodicAllowance> {
    const obj: any = {};
    message.basic !== undefined && (obj.basic = message.basic ? BasicAllowance.toJSON(message.basic) : undefined);
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
    if (message.periodSpendLimit) {
      obj.periodSpendLimit = message.periodSpendLimit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.periodSpendLimit = [];
    }
    if (message.periodCanSpend) {
      obj.periodCanSpend = message.periodCanSpend.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.periodCanSpend = [];
    }
    message.periodReset !== undefined && (obj.periodReset = message.periodReset.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<PeriodicAllowance>): PeriodicAllowance {
    const message = createBasePeriodicAllowance();
    if (object.basic !== undefined && object.basic !== null) {
      message.basic = BasicAllowance.fromPartial(object.basic);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromPartial(object.period);
    }
    message.periodSpendLimit = object.periodSpendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.periodCanSpend = object.periodCanSpend?.map(e => Coin.fromPartial(e)) || [];
    message.periodReset = object.periodReset ?? undefined;
    return message;
  },
  fromSDK(object: PeriodicAllowanceSDKType): PeriodicAllowance {
    return {
      basic: object.basic ? BasicAllowance.fromSDK(object.basic) : undefined,
      period: object.period ? Duration.fromSDK(object.period) : undefined,
      periodSpendLimit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e: any) => Coin.fromSDK(e)) : [],
      periodCanSpend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e: any) => Coin.fromSDK(e)) : [],
      periodReset: object.period_reset ?? undefined
    };
  },
  toSDK(message: PeriodicAllowance): PeriodicAllowanceSDKType {
    const obj: any = {};
    message.basic !== undefined && (obj.basic = message.basic ? BasicAllowance.toSDK(message.basic) : undefined);
    message.period !== undefined && (obj.period = message.period ? Duration.toSDK(message.period) : undefined);
    if (message.periodSpendLimit) {
      obj.period_spend_limit = message.periodSpendLimit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.period_spend_limit = [];
    }
    if (message.periodCanSpend) {
      obj.period_can_spend = message.periodCanSpend.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.period_can_spend = [];
    }
    message.periodReset !== undefined && (obj.period_reset = message.periodReset ?? undefined);
    return obj;
  },
  fromAmino(object: PeriodicAllowanceAmino): PeriodicAllowance {
    const message = createBasePeriodicAllowance();
    if (object.basic !== undefined && object.basic !== null) {
      message.basic = BasicAllowance.fromAmino(object.basic);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromAmino(object.period);
    }
    message.periodSpendLimit = object.period_spend_limit?.map(e => Coin.fromAmino(e)) || [];
    message.periodCanSpend = object.period_can_spend?.map(e => Coin.fromAmino(e)) || [];
    if (object.period_reset !== undefined && object.period_reset !== null) {
      message.periodReset = fromTimestamp(Timestamp.fromAmino(object.period_reset));
    }
    return message;
  },
  toAmino(message: PeriodicAllowance): PeriodicAllowanceAmino {
    const obj: any = {};
    obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : undefined;
    obj.period = message.period ? Duration.toAmino(message.period) : undefined;
    if (message.periodSpendLimit) {
      obj.period_spend_limit = message.periodSpendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.period_spend_limit = message.periodSpendLimit;
    }
    if (message.periodCanSpend) {
      obj.period_can_spend = message.periodCanSpend.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.period_can_spend = message.periodCanSpend;
    }
    obj.period_reset = message.periodReset ? Timestamp.toAmino(toTimestamp(message.periodReset)) : undefined;
    return obj;
  },
  fromAminoMsg(object: PeriodicAllowanceAminoMsg): PeriodicAllowance {
    return PeriodicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: PeriodicAllowance): PeriodicAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/PeriodicAllowance",
      value: PeriodicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodicAllowanceProtoMsg): PeriodicAllowance {
    return PeriodicAllowance.decode(message.value);
  },
  toProto(message: PeriodicAllowance): Uint8Array {
    return PeriodicAllowance.encode(message).finish();
  },
  toProtoMsg(message: PeriodicAllowance): PeriodicAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
      value: PeriodicAllowance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PeriodicAllowance.typeUrl, PeriodicAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(PeriodicAllowance.aminoType, PeriodicAllowance.typeUrl);
function createBaseAllowedMsgAllowance(): AllowedMsgAllowance {
  return {
    $typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    allowance: undefined,
    allowedMessages: []
  };
}
export const AllowedMsgAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  aminoType: "cosmos-sdk/AllowedMsgAllowance",
  is(o: any): o is AllowedMsgAllowance {
    return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowedMessages) && (!o.allowedMessages.length || typeof o.allowedMessages[0] === "string"));
  },
  isSDK(o: any): o is AllowedMsgAllowanceSDKType {
    return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
  },
  isAmino(o: any): o is AllowedMsgAllowanceAmino {
    return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
  },
  encode(message: AllowedMsgAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowance !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowedMsgAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllowedMsgAllowance {
    const obj = createBaseAllowedMsgAllowance();
    if (isSet(object.allowance)) obj.allowance = GlobalDecoderRegistry.fromJSON(object.allowance);
    if (Array.isArray(object?.allowedMessages)) obj.allowedMessages = object.allowedMessages.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: AllowedMsgAllowance): JsonSafe<AllowedMsgAllowance> {
    const obj: any = {};
    message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
    if (message.allowedMessages) {
      obj.allowedMessages = message.allowedMessages.map(e => e);
    } else {
      obj.allowedMessages = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AllowedMsgAllowance>): AllowedMsgAllowance {
    const message = createBaseAllowedMsgAllowance();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromPartial(object.allowance);
    }
    message.allowedMessages = object.allowedMessages?.map(e => e) || [];
    return message;
  },
  fromSDK(object: AllowedMsgAllowanceSDKType): AllowedMsgAllowance {
    return {
      allowance: object.allowance ? GlobalDecoderRegistry.fromSDK(object.allowance) : undefined,
      allowedMessages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e: any) => e) : []
    };
  },
  toSDK(message: AllowedMsgAllowance): AllowedMsgAllowanceSDKType {
    const obj: any = {};
    message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toSDK(message.allowance) : undefined);
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = [];
    }
    return obj;
  },
  fromAmino(object: AllowedMsgAllowanceAmino): AllowedMsgAllowance {
    const message = createBaseAllowedMsgAllowance();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
    }
    message.allowedMessages = object.allowed_messages?.map(e => e) || [];
    return message;
  },
  toAmino(message: AllowedMsgAllowance): AllowedMsgAllowanceAmino {
    const obj: any = {};
    obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = message.allowedMessages;
    }
    return obj;
  },
  fromAminoMsg(object: AllowedMsgAllowanceAminoMsg): AllowedMsgAllowance {
    return AllowedMsgAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/AllowedMsgAllowance",
      value: AllowedMsgAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: AllowedMsgAllowanceProtoMsg): AllowedMsgAllowance {
    return AllowedMsgAllowance.decode(message.value);
  },
  toProto(message: AllowedMsgAllowance): Uint8Array {
    return AllowedMsgAllowance.encode(message).finish();
  },
  toProtoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
      value: AllowedMsgAllowance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllowedMsgAllowance.typeUrl, AllowedMsgAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(AllowedMsgAllowance.aminoType, AllowedMsgAllowance.typeUrl);
function createBaseGrant(): Grant {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}
export const Grant = {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant",
  aminoType: "cosmos-sdk/Grant",
  is(o: any): o is Grant {
    return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is GrantSDKType {
    return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is GrantAmino {
    return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== undefined) {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== undefined) {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grant {
    const obj = createBaseGrant();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.allowance)) obj.allowance = GlobalDecoderRegistry.fromJSON(object.allowance);
    return obj;
  },
  toJSON(message: Grant): JsonSafe<Grant> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromPartial(object.allowance);
    }
    return message;
  },
  fromSDK(object: GrantSDKType): Grant {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      allowance: object.allowance ? GlobalDecoderRegistry.fromSDK(object.allowance) : undefined
    };
  },
  toSDK(message: Grant): GrantSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toSDK(message.allowance) : undefined);
    return obj;
  },
  fromAmino(object: GrantAmino): Grant {
    const message = createBaseGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
    }
    return message;
  },
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAminoMsg): Grant {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message: Grant): GrantAminoMsg {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Grant.typeUrl, Grant);
GlobalDecoderRegistry.registerAminoProtoMapping(Grant.aminoType, Grant.typeUrl);