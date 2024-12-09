import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
export interface Pool {
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentivesAddress: string;
  id: bigint;
  /** Amount of total liquidity */
  currentTickLiquidity: string;
  token0: string;
  token1: string;
  currentSqrtPrice: string;
  currentTick: string;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tickSpacing: bigint;
  exponentAtPriceOne: string;
  /** swap_fee is the ratio that is charged on the amount of token in. */
  swapFee: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  lastLiquidityUpdate: Date;
}
export interface ReactivePool {
  address: ComputedRef<string>;
  incentivesAddress: ComputedRef<string>;
  id: ComputedRef<bigint>;
  currentTickLiquidity: ComputedRef<string>;
  token0: ComputedRef<string>;
  token1: ComputedRef<string>;
  currentSqrtPrice: ComputedRef<string>;
  currentTick: ComputedRef<string>;
  tickSpacing: ComputedRef<bigint>;
  exponentAtPriceOne: ComputedRef<string>;
  swapFee: ComputedRef<string>;
  lastLiquidityUpdate: ComputedRef<Date>;
}
export interface PoolProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool";
  value: Uint8Array;
}
export interface PoolSDKType {
  address: string;
  incentives_address: string;
  id: bigint;
  current_tick_liquidity: string;
  token0: string;
  token1: string;
  current_sqrt_price: string;
  current_tick: string;
  tick_spacing: bigint;
  exponent_at_price_one: string;
  swap_fee: string;
  last_liquidity_update: Date;
}
function createBasePool(): Pool {
  return {
    address: "",
    incentivesAddress: "",
    id: BigInt(0),
    currentTickLiquidity: "",
    token0: "",
    token1: "",
    currentSqrtPrice: "",
    currentTick: "",
    tickSpacing: BigInt(0),
    exponentAtPriceOne: "",
    swapFee: "",
    lastLiquidityUpdate: new Date()
  };
}
export const Pool = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.incentivesAddress !== "") {
      writer.uint32(18).string(message.incentivesAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.currentTickLiquidity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.currentTickLiquidity, 18).atomics);
    }
    if (message.token0 !== "") {
      writer.uint32(42).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(50).string(message.token1);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.currentSqrtPrice, 18).atomics);
    }
    if (message.currentTick !== "") {
      writer.uint32(66).string(message.currentTick);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(72).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== "") {
      writer.uint32(82).string(message.exponentAtPriceOne);
    }
    if (message.swapFee !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.lastLiquidityUpdate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastLiquidityUpdate), writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.incentivesAddress = reader.string();
          break;
        case 3:
          message.id = reader.uint64();
          break;
        case 4:
          message.currentTickLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.token0 = reader.string();
          break;
        case 6:
          message.token1 = reader.string();
          break;
        case 7:
          message.currentSqrtPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.currentTick = reader.string();
          break;
        case 9:
          message.tickSpacing = reader.uint64();
          break;
        case 10:
          message.exponentAtPriceOne = reader.string();
          break;
        case 11:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.lastLiquidityUpdate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      incentivesAddress: isSet(object.incentivesAddress) ? String(object.incentivesAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      currentTickLiquidity: isSet(object.currentTickLiquidity) ? String(object.currentTickLiquidity) : "",
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : "",
      currentSqrtPrice: isSet(object.currentSqrtPrice) ? String(object.currentSqrtPrice) : "",
      currentTick: isSet(object.currentTick) ? String(object.currentTick) : "",
      tickSpacing: isSet(object.tickSpacing) ? BigInt(object.tickSpacing.toString()) : BigInt(0),
      exponentAtPriceOne: isSet(object.exponentAtPriceOne) ? String(object.exponentAtPriceOne) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      lastLiquidityUpdate: isSet(object.lastLiquidityUpdate) ? new Date(object.lastLiquidityUpdate) : undefined
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.incentivesAddress !== undefined && (obj.incentivesAddress = message.incentivesAddress);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.currentTickLiquidity !== undefined && (obj.currentTickLiquidity = message.currentTickLiquidity);
    message.token0 !== undefined && (obj.token0 = message.token0);
    message.token1 !== undefined && (obj.token1 = message.token1);
    message.currentSqrtPrice !== undefined && (obj.currentSqrtPrice = message.currentSqrtPrice);
    message.currentTick !== undefined && (obj.currentTick = message.currentTick);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.exponentAtPriceOne !== undefined && (obj.exponentAtPriceOne = message.exponentAtPriceOne);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.lastLiquidityUpdate !== undefined && (obj.lastLiquidityUpdate = message.lastLiquidityUpdate.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.incentivesAddress = object.incentivesAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.currentTickLiquidity = object.currentTickLiquidity ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    message.currentTick = object.currentTick ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.exponentAtPriceOne = object.exponentAtPriceOne ?? "";
    message.swapFee = object.swapFee ?? "";
    message.lastLiquidityUpdate = object.lastLiquidityUpdate ?? undefined;
    return message;
  },
  fromSDK(object: PoolSDKType): Pool {
    return {
      address: object?.address,
      incentivesAddress: object?.incentives_address,
      id: object?.id,
      currentTickLiquidity: object?.current_tick_liquidity,
      token0: object?.token0,
      token1: object?.token1,
      currentSqrtPrice: object?.current_sqrt_price,
      currentTick: object?.current_tick,
      tickSpacing: object?.tick_spacing,
      exponentAtPriceOne: object?.exponent_at_price_one,
      swapFee: object?.swap_fee,
      lastLiquidityUpdate: object.last_liquidity_update ?? undefined
    };
  },
  fromSDKJSON(object: any): PoolSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      incentives_address: isSet(object.incentives_address) ? String(object.incentives_address) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      current_tick_liquidity: isSet(object.current_tick_liquidity) ? String(object.current_tick_liquidity) : "",
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : "",
      current_sqrt_price: isSet(object.current_sqrt_price) ? String(object.current_sqrt_price) : "",
      current_tick: isSet(object.current_tick) ? String(object.current_tick) : "",
      tick_spacing: isSet(object.tick_spacing) ? BigInt(object.tick_spacing.toString()) : BigInt(0),
      exponent_at_price_one: isSet(object.exponent_at_price_one) ? String(object.exponent_at_price_one) : "",
      swap_fee: isSet(object.swap_fee) ? String(object.swap_fee) : "",
      last_liquidity_update: isSet(object.last_liquidity_update) ? new Date(object.last_liquidity_update) : undefined
    };
  },
  toSDK(message: Pool): PoolSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.incentives_address = message.incentivesAddress;
    obj.id = message.id;
    obj.current_tick_liquidity = message.currentTickLiquidity;
    obj.token0 = message.token0;
    obj.token1 = message.token1;
    obj.current_sqrt_price = message.currentSqrtPrice;
    obj.current_tick = message.currentTick;
    obj.tick_spacing = message.tickSpacing;
    obj.exponent_at_price_one = message.exponentAtPriceOne;
    obj.swap_fee = message.swapFee;
    message.lastLiquidityUpdate !== undefined && (obj.last_liquidity_update = message.lastLiquidityUpdate ?? undefined);
    return obj;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.incentives_address !== undefined && object.incentives_address !== null) {
      message.incentivesAddress = object.incentives_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.current_tick_liquidity !== undefined && object.current_tick_liquidity !== null) {
      message.currentTickLiquidity = object.current_tick_liquidity;
    }
    if (object.token0 !== undefined && object.token0 !== null) {
      message.token0 = object.token0;
    }
    if (object.token1 !== undefined && object.token1 !== null) {
      message.token1 = object.token1;
    }
    if (object.current_sqrt_price !== undefined && object.current_sqrt_price !== null) {
      message.currentSqrtPrice = object.current_sqrt_price;
    }
    if (object.current_tick !== undefined && object.current_tick !== null) {
      message.currentTick = object.current_tick;
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
    if (object.last_liquidity_update !== undefined && object.last_liquidity_update !== null) {
      message.lastLiquidityUpdate = fromTimestamp(Timestamp.fromAmino(object.last_liquidity_update));
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.incentives_address = message.incentivesAddress === "" ? undefined : message.incentivesAddress;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.current_tick_liquidity = message.currentTickLiquidity === "" ? undefined : message.currentTickLiquidity;
    obj.token0 = message.token0 === "" ? undefined : message.token0;
    obj.token1 = message.token1 === "" ? undefined : message.token1;
    obj.current_sqrt_price = message.currentSqrtPrice === "" ? undefined : message.currentSqrtPrice;
    obj.current_tick = message.currentTick === "" ? undefined : message.currentTick;
    obj.tick_spacing = message.tickSpacing !== BigInt(0) ? message.tickSpacing?.toString() : undefined;
    obj.exponent_at_price_one = message.exponentAtPriceOne === "" ? undefined : message.exponentAtPriceOne;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.last_liquidity_update = message.lastLiquidityUpdate ? Timestamp.toAmino(toTimestamp(message.lastLiquidityUpdate)) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message: Pool): PoolAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};