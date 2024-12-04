import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
export interface TickInfo {
  liquidityGross: string;
  liquidityNet: string;
  feeGrowthOutside: DecCoin[];
  uptimeTrackers: UptimeTracker[];
}
export interface TickInfoProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo";
  value: Uint8Array;
}
export interface TickInfoSDKType {
  liquidity_gross: string;
  liquidity_net: string;
  fee_growth_outside: DecCoinSDKType[];
  uptime_trackers: UptimeTrackerSDKType[];
}
export interface UptimeTracker {
  uptimeGrowthOutside: DecCoin[];
}
export interface UptimeTrackerProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker";
  value: Uint8Array;
}
export interface UptimeTrackerSDKType {
  uptime_growth_outside: DecCoinSDKType[];
}
function createBaseTickInfo(): TickInfo {
  return {
    liquidityGross: "",
    liquidityNet: "",
    feeGrowthOutside: [],
    uptimeTrackers: []
  };
}
export const TickInfo = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo",
  encode(message: TickInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityGross !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.liquidityGross, 18).atomics);
    }
    if (message.liquidityNet !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.liquidityNet, 18).atomics);
    }
    for (const v of message.feeGrowthOutside) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.uptimeTrackers) {
      UptimeTracker.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityGross = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.liquidityNet = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.feeGrowthOutside.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.uptimeTrackers.push(UptimeTracker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickInfo {
    return {
      liquidityGross: isSet(object.liquidityGross) ? String(object.liquidityGross) : "",
      liquidityNet: isSet(object.liquidityNet) ? String(object.liquidityNet) : "",
      feeGrowthOutside: Array.isArray(object?.feeGrowthOutside) ? object.feeGrowthOutside.map((e: any) => DecCoin.fromJSON(e)) : [],
      uptimeTrackers: Array.isArray(object?.uptimeTrackers) ? object.uptimeTrackers.map((e: any) => UptimeTracker.fromJSON(e)) : []
    };
  },
  toJSON(message: TickInfo): JsonSafe<TickInfo> {
    const obj: any = {};
    message.liquidityGross !== undefined && (obj.liquidityGross = message.liquidityGross);
    message.liquidityNet !== undefined && (obj.liquidityNet = message.liquidityNet);
    if (message.feeGrowthOutside) {
      obj.feeGrowthOutside = message.feeGrowthOutside.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.feeGrowthOutside = [];
    }
    if (message.uptimeTrackers) {
      obj.uptimeTrackers = message.uptimeTrackers.map(e => e ? UptimeTracker.toJSON(e) : undefined);
    } else {
      obj.uptimeTrackers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TickInfo>): TickInfo {
    const message = createBaseTickInfo();
    message.liquidityGross = object.liquidityGross ?? "";
    message.liquidityNet = object.liquidityNet ?? "";
    message.feeGrowthOutside = object.feeGrowthOutside?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeTrackers = object.uptimeTrackers?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: TickInfoSDKType): TickInfo {
    return {
      liquidityGross: object?.liquidity_gross,
      liquidityNet: object?.liquidity_net,
      feeGrowthOutside: Array.isArray(object?.fee_growth_outside) ? object.fee_growth_outside.map((e: any) => DecCoin.fromSDK(e)) : [],
      uptimeTrackers: Array.isArray(object?.uptime_trackers) ? object.uptime_trackers.map((e: any) => UptimeTracker.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): TickInfoSDKType {
    return {
      liquidity_gross: isSet(object.liquidity_gross) ? String(object.liquidity_gross) : "",
      liquidity_net: isSet(object.liquidity_net) ? String(object.liquidity_net) : "",
      fee_growth_outside: Array.isArray(object?.fee_growth_outside) ? object.fee_growth_outside.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      uptime_trackers: Array.isArray(object?.uptime_trackers) ? object.uptime_trackers.map((e: any) => UptimeTracker.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: TickInfo): TickInfoSDKType {
    const obj: any = {};
    obj.liquidity_gross = message.liquidityGross;
    obj.liquidity_net = message.liquidityNet;
    if (message.feeGrowthOutside) {
      obj.fee_growth_outside = message.feeGrowthOutside.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.fee_growth_outside = [];
    }
    if (message.uptimeTrackers) {
      obj.uptime_trackers = message.uptimeTrackers.map(e => e ? UptimeTracker.toSDK(e) : undefined);
    } else {
      obj.uptime_trackers = [];
    }
    return obj;
  },
  fromAmino(object: TickInfoAmino): TickInfo {
    const message = createBaseTickInfo();
    if (object.liquidity_gross !== undefined && object.liquidity_gross !== null) {
      message.liquidityGross = object.liquidity_gross;
    }
    if (object.liquidity_net !== undefined && object.liquidity_net !== null) {
      message.liquidityNet = object.liquidity_net;
    }
    message.feeGrowthOutside = object.fee_growth_outside?.map(e => DecCoin.fromAmino(e)) || [];
    message.uptimeTrackers = object.uptime_trackers?.map(e => UptimeTracker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TickInfo): TickInfoAmino {
    const obj: any = {};
    obj.liquidity_gross = message.liquidityGross === "" ? undefined : message.liquidityGross;
    obj.liquidity_net = message.liquidityNet === "" ? undefined : message.liquidityNet;
    if (message.feeGrowthOutside) {
      obj.fee_growth_outside = message.feeGrowthOutside.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.fee_growth_outside = message.feeGrowthOutside;
    }
    if (message.uptimeTrackers) {
      obj.uptime_trackers = message.uptimeTrackers.map(e => e ? UptimeTracker.toAmino(e) : undefined);
    } else {
      obj.uptime_trackers = message.uptimeTrackers;
    }
    return obj;
  },
  fromAminoMsg(object: TickInfoAminoMsg): TickInfo {
    return TickInfo.fromAmino(object.value);
  },
  toAminoMsg(message: TickInfo): TickInfoAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/tick-info",
      value: TickInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: TickInfoProtoMsg): TickInfo {
    return TickInfo.decode(message.value);
  },
  toProto(message: TickInfo): Uint8Array {
    return TickInfo.encode(message).finish();
  },
  toProtoMsg(message: TickInfo): TickInfoProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo",
      value: TickInfo.encode(message).finish()
    };
  }
};
function createBaseUptimeTracker(): UptimeTracker {
  return {
    uptimeGrowthOutside: []
  };
}
export const UptimeTracker = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
  encode(message: UptimeTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uptimeGrowthOutside) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UptimeTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUptimeTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uptimeGrowthOutside.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UptimeTracker {
    return {
      uptimeGrowthOutside: Array.isArray(object?.uptimeGrowthOutside) ? object.uptimeGrowthOutside.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: UptimeTracker): JsonSafe<UptimeTracker> {
    const obj: any = {};
    if (message.uptimeGrowthOutside) {
      obj.uptimeGrowthOutside = message.uptimeGrowthOutside.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.uptimeGrowthOutside = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UptimeTracker>): UptimeTracker {
    const message = createBaseUptimeTracker();
    message.uptimeGrowthOutside = object.uptimeGrowthOutside?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: UptimeTrackerSDKType): UptimeTracker {
    return {
      uptimeGrowthOutside: Array.isArray(object?.uptime_growth_outside) ? object.uptime_growth_outside.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): UptimeTrackerSDKType {
    return {
      uptime_growth_outside: Array.isArray(object?.uptime_growth_outside) ? object.uptime_growth_outside.map((e: any) => DecCoin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: UptimeTracker): UptimeTrackerSDKType {
    const obj: any = {};
    if (message.uptimeGrowthOutside) {
      obj.uptime_growth_outside = message.uptimeGrowthOutside.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.uptime_growth_outside = [];
    }
    return obj;
  },
  fromAmino(object: UptimeTrackerAmino): UptimeTracker {
    const message = createBaseUptimeTracker();
    message.uptimeGrowthOutside = object.uptime_growth_outside?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UptimeTracker): UptimeTrackerAmino {
    const obj: any = {};
    if (message.uptimeGrowthOutside) {
      obj.uptime_growth_outside = message.uptimeGrowthOutside.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.uptime_growth_outside = message.uptimeGrowthOutside;
    }
    return obj;
  },
  fromAminoMsg(object: UptimeTrackerAminoMsg): UptimeTracker {
    return UptimeTracker.fromAmino(object.value);
  },
  toAminoMsg(message: UptimeTracker): UptimeTrackerAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/uptime-tracker",
      value: UptimeTracker.toAmino(message)
    };
  },
  fromProtoMsg(message: UptimeTrackerProtoMsg): UptimeTracker {
    return UptimeTracker.decode(message.value);
  },
  toProto(message: UptimeTracker): Uint8Array {
    return UptimeTracker.encode(message).finish();
  },
  toProtoMsg(message: UptimeTracker): UptimeTrackerProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
      value: UptimeTracker.encode(message).finish()
    };
  }
};