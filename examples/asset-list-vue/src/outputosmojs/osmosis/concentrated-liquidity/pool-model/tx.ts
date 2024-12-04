import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
  sender: string;
  denom0: string;
  denom1: string;
  tickSpacing: bigint;
  exponentAtPriceOne: string;
  swapFee: string;
}
export interface MsgCreateConcentratedPoolProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPool";
  value: Uint8Array;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
  sender: string;
  denom0: string;
  denom1: string;
  tick_spacing: bigint;
  exponent_at_price_one: string;
  swap_fee: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
  poolId: bigint;
}
export interface MsgCreateConcentratedPoolResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPoolResponse";
  value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
  pool_id: bigint;
}
function createBaseMsgCreateConcentratedPool(): MsgCreateConcentratedPool {
  return {
    sender: "",
    denom0: "",
    denom1: "",
    tickSpacing: BigInt(0),
    exponentAtPriceOne: "",
    swapFee: ""
  };
}
export const MsgCreateConcentratedPool = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPool",
  encode(message: MsgCreateConcentratedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(32).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== "") {
      writer.uint32(42).string(message.exponentAtPriceOne);
    }
    if (message.swapFee !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom0 = reader.string();
          break;
        case 3:
          message.denom1 = reader.string();
          break;
        case 4:
          message.tickSpacing = reader.uint64();
          break;
        case 5:
          message.exponentAtPriceOne = reader.string();
          break;
        case 9:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateConcentratedPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      tickSpacing: isSet(object.tickSpacing) ? BigInt(object.tickSpacing.toString()) : BigInt(0),
      exponentAtPriceOne: isSet(object.exponentAtPriceOne) ? String(object.exponentAtPriceOne) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  toJSON(message: MsgCreateConcentratedPool): JsonSafe<MsgCreateConcentratedPool> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.exponentAtPriceOne !== undefined && (obj.exponentAtPriceOne = message.exponentAtPriceOne);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateConcentratedPool>): MsgCreateConcentratedPool {
    const message = createBaseMsgCreateConcentratedPool();
    message.sender = object.sender ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.exponentAtPriceOne = object.exponentAtPriceOne ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
  fromSDK(object: MsgCreateConcentratedPoolSDKType): MsgCreateConcentratedPool {
    return {
      sender: object?.sender,
      denom0: object?.denom0,
      denom1: object?.denom1,
      tickSpacing: object?.tick_spacing,
      exponentAtPriceOne: object?.exponent_at_price_one,
      swapFee: object?.swap_fee
    };
  },
  fromSDKJSON(object: any): MsgCreateConcentratedPoolSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      tick_spacing: isSet(object.tick_spacing) ? BigInt(object.tick_spacing.toString()) : BigInt(0),
      exponent_at_price_one: isSet(object.exponent_at_price_one) ? String(object.exponent_at_price_one) : "",
      swap_fee: isSet(object.swap_fee) ? String(object.swap_fee) : ""
    };
  },
  toSDK(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom0 = message.denom0;
    obj.denom1 = message.denom1;
    obj.tick_spacing = message.tickSpacing;
    obj.exponent_at_price_one = message.exponentAtPriceOne;
    obj.swap_fee = message.swapFee;
    return obj;
  },
  fromAmino(object: MsgCreateConcentratedPoolAmino): MsgCreateConcentratedPool {
    const message = createBaseMsgCreateConcentratedPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom0 !== undefined && object.denom0 !== null) {
      message.denom0 = object.denom0;
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1;
    }
    if (object.tick_spacing !== undefined && object.tick_spacing !== null) {
      message.tickSpacing = BigInt(object.tick_spacing);
    }
    if (object.exponent_at_price_one !== undefined && object.exponent_at_price_one !== null) {
      message.exponentAtPriceOne = object.exponent_at_price_one;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    return message;
  },
  toAmino(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom0 = message.denom0 === "" ? undefined : message.denom0;
    obj.denom1 = message.denom1 === "" ? undefined : message.denom1;
    obj.tick_spacing = message.tickSpacing !== BigInt(0) ? message.tickSpacing?.toString() : undefined;
    obj.exponent_at_price_one = message.exponentAtPriceOne === "" ? undefined : message.exponentAtPriceOne;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConcentratedPoolAminoMsg): MsgCreateConcentratedPool {
    return MsgCreateConcentratedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/create-concentrated-pool",
      value: MsgCreateConcentratedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateConcentratedPoolProtoMsg): MsgCreateConcentratedPool {
    return MsgCreateConcentratedPool.decode(message.value);
  },
  toProto(message: MsgCreateConcentratedPool): Uint8Array {
    return MsgCreateConcentratedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPool",
      value: MsgCreateConcentratedPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateConcentratedPoolResponse(): MsgCreateConcentratedPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateConcentratedPoolResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPoolResponse",
  encode(message: MsgCreateConcentratedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateConcentratedPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateConcentratedPoolResponse): JsonSafe<MsgCreateConcentratedPoolResponse> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateConcentratedPoolResponse>): MsgCreateConcentratedPoolResponse {
    const message = createBaseMsgCreateConcentratedPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreateConcentratedPoolResponseSDKType): MsgCreateConcentratedPoolResponse {
    return {
      poolId: object?.pool_id
    };
  },
  fromSDKJSON(object: any): MsgCreateConcentratedPoolResponseSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: MsgCreateConcentratedPoolResponseAmino): MsgCreateConcentratedPoolResponse {
    const message = createBaseMsgCreateConcentratedPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConcentratedPoolResponseAminoMsg): MsgCreateConcentratedPoolResponse {
    return MsgCreateConcentratedPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/create-concentrated-pool-response",
      value: MsgCreateConcentratedPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateConcentratedPoolResponseProtoMsg): MsgCreateConcentratedPoolResponse {
    return MsgCreateConcentratedPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateConcentratedPoolResponse): Uint8Array {
    return MsgCreateConcentratedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreateConcentratedPoolResponse",
      value: MsgCreateConcentratedPoolResponse.encode(message).finish()
    };
  }
};