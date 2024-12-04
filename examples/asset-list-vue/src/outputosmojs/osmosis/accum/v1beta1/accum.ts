import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.accum.v1beta1";
export interface AccumulatorContent {
  accumValue: DecCoin[];
  totalShares: string;
}
export interface AccumulatorContentProtoMsg {
  typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent";
  value: Uint8Array;
}
export interface AccumulatorContentSDKType {
  accum_value: DecCoinSDKType[];
  total_shares: string;
}
export interface Options {}
export interface OptionsProtoMsg {
  typeUrl: "/osmosis.accum.v1beta1.Options";
  value: Uint8Array;
}
export interface OptionsSDKType {}
export interface Record {
  numShares: string;
  initAccumValue: DecCoin[];
  unclaimedRewards: DecCoin[];
  options?: Options;
}
export interface RecordProtoMsg {
  typeUrl: "/osmosis.accum.v1beta1.Record";
  value: Uint8Array;
}
export interface RecordSDKType {
  num_shares: string;
  init_accum_value: DecCoinSDKType[];
  unclaimed_rewards: DecCoinSDKType[];
  options?: OptionsSDKType;
}
function createBaseAccumulatorContent(): AccumulatorContent {
  return {
    accumValue: [],
    totalShares: ""
  };
}
export const AccumulatorContent = {
  typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent",
  encode(message: AccumulatorContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accumValue) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalShares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccumulatorContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccumulatorContent {
    return {
      accumValue: Array.isArray(object?.accumValue) ? object.accumValue.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  toJSON(message: AccumulatorContent): JsonSafe<AccumulatorContent> {
    const obj: any = {};
    if (message.accumValue) {
      obj.accumValue = message.accumValue.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.accumValue = [];
    }
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },
  fromPartial(object: DeepPartial<AccumulatorContent>): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accumValue?.map(e => DecCoin.fromPartial(e)) || [];
    message.totalShares = object.totalShares ?? "";
    return message;
  },
  fromSDK(object: AccumulatorContentSDKType): AccumulatorContent {
    return {
      accumValue: Array.isArray(object?.accum_value) ? object.accum_value.map((e: any) => DecCoin.fromSDK(e)) : [],
      totalShares: object?.total_shares
    };
  },
  fromSDKJSON(object: any): AccumulatorContentSDKType {
    return {
      accum_value: Array.isArray(object?.accum_value) ? object.accum_value.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      total_shares: isSet(object.total_shares) ? String(object.total_shares) : ""
    };
  },
  toSDK(message: AccumulatorContent): AccumulatorContentSDKType {
    const obj: any = {};
    if (message.accumValue) {
      obj.accum_value = message.accumValue.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.accum_value = [];
    }
    obj.total_shares = message.totalShares;
    return obj;
  },
  fromAmino(object: AccumulatorContentAmino): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accum_value?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = object.total_shares;
    }
    return message;
  },
  toAmino(message: AccumulatorContent): AccumulatorContentAmino {
    const obj: any = {};
    if (message.accumValue) {
      obj.accum_value = message.accumValue.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.accum_value = message.accumValue;
    }
    obj.total_shares = message.totalShares === "" ? undefined : message.totalShares;
    return obj;
  },
  fromAminoMsg(object: AccumulatorContentAminoMsg): AccumulatorContent {
    return AccumulatorContent.fromAmino(object.value);
  },
  toAminoMsg(message: AccumulatorContent): AccumulatorContentAminoMsg {
    return {
      type: "osmosis/accum/accumulator-content",
      value: AccumulatorContent.toAmino(message)
    };
  },
  fromProtoMsg(message: AccumulatorContentProtoMsg): AccumulatorContent {
    return AccumulatorContent.decode(message.value);
  },
  toProto(message: AccumulatorContent): Uint8Array {
    return AccumulatorContent.encode(message).finish();
  },
  toProtoMsg(message: AccumulatorContent): AccumulatorContentProtoMsg {
    return {
      typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent",
      value: AccumulatorContent.encode(message).finish()
    };
  }
};
function createBaseOptions(): Options {
  return {};
}
export const Options = {
  typeUrl: "/osmosis.accum.v1beta1.Options",
  encode(_: Options, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Options {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
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
  fromJSON(_: any): Options {
    return {};
  },
  toJSON(_: Options): JsonSafe<Options> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<Options>): Options {
    const message = createBaseOptions();
    return message;
  },
  fromSDK(_: OptionsSDKType): Options {
    return {};
  },
  fromSDKJSON(_: any): OptionsSDKType {
    return {};
  },
  toSDK(_: Options): OptionsSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: OptionsAmino): Options {
    const message = createBaseOptions();
    return message;
  },
  toAmino(_: Options): OptionsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: OptionsAminoMsg): Options {
    return Options.fromAmino(object.value);
  },
  toAminoMsg(message: Options): OptionsAminoMsg {
    return {
      type: "osmosis/accum/options",
      value: Options.toAmino(message)
    };
  },
  fromProtoMsg(message: OptionsProtoMsg): Options {
    return Options.decode(message.value);
  },
  toProto(message: Options): Uint8Array {
    return Options.encode(message).finish();
  },
  toProtoMsg(message: Options): OptionsProtoMsg {
    return {
      typeUrl: "/osmosis.accum.v1beta1.Options",
      value: Options.encode(message).finish()
    };
  }
};
function createBaseRecord(): Record {
  return {
    numShares: "",
    initAccumValue: [],
    unclaimedRewards: [],
    options: undefined
  };
}
export const Record = {
  typeUrl: "/osmosis.accum.v1beta1.Record",
  encode(message: Record, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numShares !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.numShares, 18).atomics);
    }
    for (const v of message.initAccumValue) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unclaimedRewards) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.initAccumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unclaimedRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Record {
    return {
      numShares: isSet(object.numShares) ? String(object.numShares) : "",
      initAccumValue: Array.isArray(object?.initAccumValue) ? object.initAccumValue.map((e: any) => DecCoin.fromJSON(e)) : [],
      unclaimedRewards: Array.isArray(object?.unclaimedRewards) ? object.unclaimedRewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: Record): JsonSafe<Record> {
    const obj: any = {};
    message.numShares !== undefined && (obj.numShares = message.numShares);
    if (message.initAccumValue) {
      obj.initAccumValue = message.initAccumValue.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.initAccumValue = [];
    }
    if (message.unclaimedRewards) {
      obj.unclaimedRewards = message.unclaimedRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.unclaimedRewards = [];
    }
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Record>): Record {
    const message = createBaseRecord();
    message.numShares = object.numShares ?? "";
    message.initAccumValue = object.initAccumValue?.map(e => DecCoin.fromPartial(e)) || [];
    message.unclaimedRewards = object.unclaimedRewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  },
  fromSDK(object: RecordSDKType): Record {
    return {
      numShares: object?.num_shares,
      initAccumValue: Array.isArray(object?.init_accum_value) ? object.init_accum_value.map((e: any) => DecCoin.fromSDK(e)) : [],
      unclaimedRewards: Array.isArray(object?.unclaimed_rewards) ? object.unclaimed_rewards.map((e: any) => DecCoin.fromSDK(e)) : [],
      options: object.options ? Options.fromSDK(object.options) : undefined
    };
  },
  fromSDKJSON(object: any): RecordSDKType {
    return {
      num_shares: isSet(object.num_shares) ? String(object.num_shares) : "",
      init_accum_value: Array.isArray(object?.init_accum_value) ? object.init_accum_value.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      unclaimed_rewards: Array.isArray(object?.unclaimed_rewards) ? object.unclaimed_rewards.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      options: isSet(object.options) ? Options.fromSDKJSON(object.options) : undefined
    };
  },
  toSDK(message: Record): RecordSDKType {
    const obj: any = {};
    obj.num_shares = message.numShares;
    if (message.initAccumValue) {
      obj.init_accum_value = message.initAccumValue.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.init_accum_value = [];
    }
    if (message.unclaimedRewards) {
      obj.unclaimed_rewards = message.unclaimedRewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.unclaimed_rewards = [];
    }
    message.options !== undefined && (obj.options = message.options ? Options.toSDK(message.options) : undefined);
    return obj;
  },
  fromAmino(object: RecordAmino): Record {
    const message = createBaseRecord();
    if (object.num_shares !== undefined && object.num_shares !== null) {
      message.numShares = object.num_shares;
    }
    message.initAccumValue = object.init_accum_value?.map(e => DecCoin.fromAmino(e)) || [];
    message.unclaimedRewards = object.unclaimed_rewards?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: Record): RecordAmino {
    const obj: any = {};
    obj.num_shares = message.numShares === "" ? undefined : message.numShares;
    if (message.initAccumValue) {
      obj.init_accum_value = message.initAccumValue.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.init_accum_value = message.initAccumValue;
    }
    if (message.unclaimedRewards) {
      obj.unclaimed_rewards = message.unclaimedRewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.unclaimed_rewards = message.unclaimedRewards;
    }
    obj.options = message.options ? Options.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecordAminoMsg): Record {
    return Record.fromAmino(object.value);
  },
  toAminoMsg(message: Record): RecordAminoMsg {
    return {
      type: "osmosis/accum/record",
      value: Record.toAmino(message)
    };
  },
  fromProtoMsg(message: RecordProtoMsg): Record {
    return Record.decode(message.value);
  },
  toProto(message: Record): Uint8Array {
    return Record.encode(message).finish();
  },
  toProtoMsg(message: Record): RecordProtoMsg {
    return {
      typeUrl: "/osmosis.accum.v1beta1.Record",
      value: Record.encode(message).finish()
    };
  }
};