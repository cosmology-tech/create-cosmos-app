//@ts-nocheck
import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "osmosis.incentives";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  isPerpetual: boolean;
  /** owner is the address of gauge creator */
  owner: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distributeTo: QueryCondition;
  /** coins are coin(s) to be distributed by the gauge */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Date;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  numEpochsPaidOver: bigint;
}
export interface MsgCreateGaugeProtoMsg {
  typeUrl: "/osmosis.incentives.MsgCreateGauge";
  value: Uint8Array;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeAmino {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  is_perpetual?: boolean;
  /** owner is the address of gauge creator */
  owner?: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distribute_to?: QueryConditionAmino;
  /** coins are coin(s) to be distributed by the gauge */
  coins?: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: string;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  num_epochs_paid_over?: string;
}
export interface MsgCreateGaugeAminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: MsgCreateGaugeAmino;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
  is_perpetual: boolean;
  owner: string;
  distribute_to: QueryConditionSDKType;
  coins: CoinSDKType[];
  start_time: Date;
  num_epochs_paid_over: bigint;
}
export interface MsgCreateGaugeResponse {}
export interface MsgCreateGaugeResponseProtoMsg {
  typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse";
  value: Uint8Array;
}
export interface MsgCreateGaugeResponseAmino {}
export interface MsgCreateGaugeResponseAminoMsg {
  type: "osmosis/incentives/create-gauge-response";
  value: MsgCreateGaugeResponseAmino;
}
export interface MsgCreateGaugeResponseSDKType {}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
  /** owner is the gauge owner's address */
  owner: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gaugeId: bigint;
  /** rewards are the coin(s) to add to gauge */
  rewards: Coin[];
}
export interface MsgAddToGaugeProtoMsg {
  typeUrl: "/osmosis.incentives.MsgAddToGauge";
  value: Uint8Array;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeAmino {
  /** owner is the gauge owner's address */
  owner?: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gauge_id?: string;
  /** rewards are the coin(s) to add to gauge */
  rewards?: CoinAmino[];
}
export interface MsgAddToGaugeAminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: MsgAddToGaugeAmino;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
  owner: string;
  gauge_id: bigint;
  rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {}
export interface MsgAddToGaugeResponseProtoMsg {
  typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse";
  value: Uint8Array;
}
export interface MsgAddToGaugeResponseAmino {}
export interface MsgAddToGaugeResponseAminoMsg {
  type: "osmosis/incentives/add-to-gauge-response";
  value: MsgAddToGaugeResponseAmino;
}
export interface MsgAddToGaugeResponseSDKType {}
function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    isPerpetual: false,
    owner: "",
    distributeTo: QueryCondition.fromPartial({}),
    coins: [],
    startTime: new Date(),
    numEpochsPaidOver: BigInt(0)
  };
}
export const MsgCreateGauge = {
  typeUrl: "/osmosis.incentives.MsgCreateGauge",
  aminoType: "osmosis/incentives/create-gauge",
  is(o: any): o is MsgCreateGauge {
    return o && (o.$typeUrl === MsgCreateGauge.typeUrl || typeof o.isPerpetual === "boolean" && typeof o.owner === "string" && QueryCondition.is(o.distributeTo) && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])) && Timestamp.is(o.startTime) && typeof o.numEpochsPaidOver === "bigint");
  },
  isSDK(o: any): o is MsgCreateGaugeSDKType {
    return o && (o.$typeUrl === MsgCreateGauge.typeUrl || typeof o.is_perpetual === "boolean" && typeof o.owner === "string" && QueryCondition.isSDK(o.distribute_to) && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])) && Timestamp.isSDK(o.start_time) && typeof o.num_epochs_paid_over === "bigint");
  },
  isAmino(o: any): o is MsgCreateGaugeAmino {
    return o && (o.$typeUrl === MsgCreateGauge.typeUrl || typeof o.is_perpetual === "boolean" && typeof o.owner === "string" && QueryCondition.isAmino(o.distribute_to) && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])) && Timestamp.isAmino(o.start_time) && typeof o.num_epochs_paid_over === "bigint");
  },
  encode(message: MsgCreateGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isPerpetual !== undefined) {
      writer.uint32(8).bool(message.isPerpetual);
    }
    if (message.owner !== undefined) {
      writer.uint32(18).string(message.owner);
    }
    if (message.distributeTo !== undefined) {
      QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.numEpochsPaidOver !== undefined) {
      writer.uint32(48).uint64(message.numEpochsPaidOver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isPerpetual = reader.bool();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.distributeTo = QueryCondition.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.numEpochsPaidOver = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGauge {
    const obj = createBaseMsgCreateGauge();
    if (isSet(object.isPerpetual)) obj.isPerpetual = Boolean(object.isPerpetual);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.distributeTo)) obj.distributeTo = QueryCondition.fromJSON(object.distributeTo);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    if (isSet(object.numEpochsPaidOver)) obj.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
    return obj;
  },
  toJSON(message: MsgCreateGauge): JsonSafe<MsgCreateGauge> {
    const obj: any = {};
    message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
    message.owner !== undefined && (obj.owner = message.owner);
    message.distributeTo !== undefined && (obj.distributeTo = message.distributeTo ? QueryCondition.toJSON(message.distributeTo) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.numEpochsPaidOver !== undefined && (obj.numEpochsPaidOver = (message.numEpochsPaidOver || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGauge>): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.isPerpetual = object.isPerpetual ?? false;
    message.owner = object.owner ?? "";
    if (object.distributeTo !== undefined && object.distributeTo !== null) {
      message.distributeTo = QueryCondition.fromPartial(object.distributeTo);
    }
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    if (object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null) {
      message.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
    }
    return message;
  },
  fromSDK(object: MsgCreateGaugeSDKType): MsgCreateGauge {
    return {
      isPerpetual: object?.is_perpetual,
      owner: object?.owner,
      distributeTo: object.distribute_to ? QueryCondition.fromSDK(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : [],
      startTime: object.start_time ?? undefined,
      numEpochsPaidOver: object?.num_epochs_paid_over
    };
  },
  toSDK(message: MsgCreateGauge): MsgCreateGaugeSDKType {
    const obj: any = {};
    obj.is_perpetual = message.isPerpetual;
    obj.owner = message.owner;
    message.distributeTo !== undefined && (obj.distribute_to = message.distributeTo ? QueryCondition.toSDK(message.distributeTo) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    obj.num_epochs_paid_over = message.numEpochsPaidOver;
    return obj;
  },
  fromAmino(object: MsgCreateGaugeAmino): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    if (object.is_perpetual !== undefined && object.is_perpetual !== null) {
      message.isPerpetual = object.is_perpetual;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.distribute_to !== undefined && object.distribute_to !== null) {
      message.distributeTo = QueryCondition.fromAmino(object.distribute_to);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null) {
      message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
    }
    return message;
  },
  toAmino(message: MsgCreateGauge): MsgCreateGaugeAmino {
    const obj: any = {};
    obj.is_perpetual = message.isPerpetual === false ? undefined : message.isPerpetual;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.distribute_to = message.distributeTo ? QueryCondition.toAmino(message.distributeTo) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.num_epochs_paid_over = message.numEpochsPaidOver !== BigInt(0) ? message.numEpochsPaidOver.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGaugeAminoMsg): MsgCreateGauge {
    return MsgCreateGauge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGauge): MsgCreateGaugeAminoMsg {
    return {
      type: "osmosis/incentives/create-gauge",
      value: MsgCreateGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGaugeProtoMsg): MsgCreateGauge {
    return MsgCreateGauge.decode(message.value);
  },
  toProto(message: MsgCreateGauge): Uint8Array {
    return MsgCreateGauge.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGauge): MsgCreateGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgCreateGauge",
      value: MsgCreateGauge.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGauge.typeUrl, MsgCreateGauge);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGauge.aminoType, MsgCreateGauge.typeUrl);
function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}
export const MsgCreateGaugeResponse = {
  typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
  aminoType: "osmosis/incentives/create-gauge-response",
  is(o: any): o is MsgCreateGaugeResponse {
    return o && o.$typeUrl === MsgCreateGaugeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateGaugeResponseSDKType {
    return o && o.$typeUrl === MsgCreateGaugeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateGaugeResponseAmino {
    return o && o.$typeUrl === MsgCreateGaugeResponse.typeUrl;
  },
  encode(_: MsgCreateGaugeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGaugeResponse();
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
  fromJSON(_: any): MsgCreateGaugeResponse {
    const obj = createBaseMsgCreateGaugeResponse();
    return obj;
  },
  toJSON(_: MsgCreateGaugeResponse): JsonSafe<MsgCreateGaugeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  },
  fromSDK(_: MsgCreateGaugeResponseSDKType): MsgCreateGaugeResponse {
    return {};
  },
  toSDK(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateGaugeResponseAmino): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  },
  toAmino(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateGaugeResponseAminoMsg): MsgCreateGaugeResponse {
    return MsgCreateGaugeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseAminoMsg {
    return {
      type: "osmosis/incentives/create-gauge-response",
      value: MsgCreateGaugeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGaugeResponseProtoMsg): MsgCreateGaugeResponse {
    return MsgCreateGaugeResponse.decode(message.value);
  },
  toProto(message: MsgCreateGaugeResponse): Uint8Array {
    return MsgCreateGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
      value: MsgCreateGaugeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateGaugeResponse.typeUrl, MsgCreateGaugeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGaugeResponse.aminoType, MsgCreateGaugeResponse.typeUrl);
function createBaseMsgAddToGauge(): MsgAddToGauge {
  return {
    owner: "",
    gaugeId: BigInt(0),
    rewards: []
  };
}
export const MsgAddToGauge = {
  typeUrl: "/osmosis.incentives.MsgAddToGauge",
  aminoType: "osmosis/incentives/add-to-gauge",
  is(o: any): o is MsgAddToGauge {
    return o && (o.$typeUrl === MsgAddToGauge.typeUrl || typeof o.owner === "string" && typeof o.gaugeId === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])));
  },
  isSDK(o: any): o is MsgAddToGaugeSDKType {
    return o && (o.$typeUrl === MsgAddToGauge.typeUrl || typeof o.owner === "string" && typeof o.gauge_id === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is MsgAddToGaugeAmino {
    return o && (o.$typeUrl === MsgAddToGauge.typeUrl || typeof o.owner === "string" && typeof o.gauge_id === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])));
  },
  encode(message: MsgAddToGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.gaugeId !== undefined) {
      writer.uint32(16).uint64(message.gaugeId);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.gaugeId = reader.uint64();
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddToGauge {
    const obj = createBaseMsgAddToGauge();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgAddToGauge): JsonSafe<MsgAddToGauge> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAddToGauge>): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    message.owner = object.owner ?? "";
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgAddToGaugeSDKType): MsgAddToGauge {
    return {
      owner: object?.owner,
      gaugeId: object?.gauge_id,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgAddToGauge): MsgAddToGaugeSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.gauge_id = message.gaugeId;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAmino(object: MsgAddToGaugeAmino): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddToGauge): MsgAddToGaugeAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.gauge_id = message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddToGaugeAminoMsg): MsgAddToGauge {
    return MsgAddToGauge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddToGauge): MsgAddToGaugeAminoMsg {
    return {
      type: "osmosis/incentives/add-to-gauge",
      value: MsgAddToGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddToGaugeProtoMsg): MsgAddToGauge {
    return MsgAddToGauge.decode(message.value);
  },
  toProto(message: MsgAddToGauge): Uint8Array {
    return MsgAddToGauge.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToGauge): MsgAddToGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgAddToGauge",
      value: MsgAddToGauge.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddToGauge.typeUrl, MsgAddToGauge);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddToGauge.aminoType, MsgAddToGauge.typeUrl);
function createBaseMsgAddToGaugeResponse(): MsgAddToGaugeResponse {
  return {};
}
export const MsgAddToGaugeResponse = {
  typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
  aminoType: "osmosis/incentives/add-to-gauge-response",
  is(o: any): o is MsgAddToGaugeResponse {
    return o && o.$typeUrl === MsgAddToGaugeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAddToGaugeResponseSDKType {
    return o && o.$typeUrl === MsgAddToGaugeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAddToGaugeResponseAmino {
    return o && o.$typeUrl === MsgAddToGaugeResponse.typeUrl;
  },
  encode(_: MsgAddToGaugeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGaugeResponse();
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
  fromJSON(_: any): MsgAddToGaugeResponse {
    const obj = createBaseMsgAddToGaugeResponse();
    return obj;
  },
  toJSON(_: MsgAddToGaugeResponse): JsonSafe<MsgAddToGaugeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  },
  fromSDK(_: MsgAddToGaugeResponseSDKType): MsgAddToGaugeResponse {
    return {};
  },
  toSDK(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgAddToGaugeResponseAmino): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  },
  toAmino(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddToGaugeResponseAminoMsg): MsgAddToGaugeResponse {
    return MsgAddToGaugeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseAminoMsg {
    return {
      type: "osmosis/incentives/add-to-gauge-response",
      value: MsgAddToGaugeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddToGaugeResponseProtoMsg): MsgAddToGaugeResponse {
    return MsgAddToGaugeResponse.decode(message.value);
  },
  toProto(message: MsgAddToGaugeResponse): Uint8Array {
    return MsgAddToGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
      value: MsgAddToGaugeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddToGaugeResponse.typeUrl, MsgAddToGaugeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddToGaugeResponse.aminoType, MsgAddToGaugeResponse.typeUrl);