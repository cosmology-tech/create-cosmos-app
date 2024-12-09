import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arbRoutes: Route[];
  /** Token denomination of the first asset */
  tokenIn: string;
  /** Token denomination of the second asset */
  tokenOut: string;
}
export interface ReactiveTokenPairArbRoutes {
  arbRoutes: ComputedRef<Route[]>;
  tokenIn: ComputedRef<string>;
  tokenOut: ComputedRef<string>;
}
export interface TokenPairArbRoutesProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes";
  value: Uint8Array;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
  arb_routes: RouteSDKType[];
  token_in: string;
  token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  trades: Trade[];
  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   */
  stepSize: string;
}
export interface ReactiveRoute {
  trades: ComputedRef<Trade[]>;
  stepSize: ComputedRef<string>;
}
export interface RouteProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Route";
  value: Uint8Array;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
  trades: TradeSDKType[];
  step_size: string;
}
/** Trade is a single trade in a route */
export interface Trade {
  /** The pool id of the pool that is traded on */
  pool: bigint;
  /** The denom of the token that is traded */
  tokenIn: string;
  /** The denom of the token that is received */
  tokenOut: string;
}
export interface ReactiveTrade {
  pool: ComputedRef<bigint>;
  tokenIn: ComputedRef<string>;
  tokenOut: ComputedRef<string>;
}
export interface TradeProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Trade";
  value: Uint8Array;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
  pool: bigint;
  token_in: string;
  token_out: string;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatistics {
  /** profits is the total profit from all trades on this route */
  profits: Coin[];
  /**
   * number_of_trades is the number of trades the module has executed using this
   * route
   */
  numberOfTrades: string;
  /** route is the route that was used (pool ids along the arbitrage route) */
  route: bigint[];
}
export interface ReactiveRouteStatistics {
  profits: ComputedRef<Coin[]>;
  numberOfTrades: ComputedRef<string>;
  route: ComputedRef<bigint[]>;
}
export interface RouteStatisticsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics";
  value: Uint8Array;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsSDKType {
  profits: CoinSDKType[];
  number_of_trades: string;
  route: bigint[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */
export interface PoolWeights {
  /** The weight of a stableswap pool */
  stableWeight: bigint;
  /** The weight of a balancer pool */
  balancerWeight: bigint;
  /** The weight of a concentrated pool */
  concentratedWeight: bigint;
}
export interface ReactivePoolWeights {
  stableWeight: ComputedRef<bigint>;
  balancerWeight: ComputedRef<bigint>;
  concentratedWeight: ComputedRef<bigint>;
}
export interface PoolWeightsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.PoolWeights";
  value: Uint8Array;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */
export interface PoolWeightsSDKType {
  stable_weight: bigint;
  balancer_weight: bigint;
  concentrated_weight: bigint;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenom {
  /** The denom i.e. name of the base denom (ex. uosmo) */
  denom: string;
  /**
   * The step size of the binary search that is used to find the optimal swap
   * amount
   */
  stepSize: string;
}
export interface ReactiveBaseDenom {
  denom: ComputedRef<string>;
  stepSize: ComputedRef<string>;
}
export interface BaseDenomProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.BaseDenom";
  value: Uint8Array;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomSDKType {
  denom: string;
  step_size: string;
}
function createBaseTokenPairArbRoutes(): TokenPairArbRoutes {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: ""
  };
}
export const TokenPairArbRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
  encode(message: TokenPairArbRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.arbRoutes) {
      Route.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPairArbRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairArbRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arbRoutes.push(Route.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPairArbRoutes {
    return {
      arbRoutes: Array.isArray(object?.arbRoutes) ? object.arbRoutes.map((e: any) => Route.fromJSON(e)) : [],
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: TokenPairArbRoutes): JsonSafe<TokenPairArbRoutes> {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arbRoutes = message.arbRoutes.map(e => e ? Route.toJSON(e) : undefined);
    } else {
      obj.arbRoutes = [];
    }
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<TokenPairArbRoutes>): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: TokenPairArbRoutesSDKType): TokenPairArbRoutes {
    return {
      arbRoutes: Array.isArray(object?.arb_routes) ? object.arb_routes.map((e: any) => Route.fromSDK(e)) : [],
      tokenIn: object?.token_in,
      tokenOut: object?.token_out
    };
  },
  fromSDKJSON(object: any): TokenPairArbRoutesSDKType {
    return {
      arb_routes: Array.isArray(object?.arb_routes) ? object.arb_routes.map((e: any) => Route.fromSDKJSON(e)) : [],
      token_in: isSet(object.token_in) ? String(object.token_in) : "",
      token_out: isSet(object.token_out) ? String(object.token_out) : ""
    };
  },
  toSDK(message: TokenPairArbRoutes): TokenPairArbRoutesSDKType {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arb_routes = message.arbRoutes.map(e => e ? Route.toSDK(e) : undefined);
    } else {
      obj.arb_routes = [];
    }
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAmino(object: TokenPairArbRoutesAmino): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arb_routes?.map(e => Route.fromAmino(e)) || [];
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: TokenPairArbRoutes): TokenPairArbRoutesAmino {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arb_routes = message.arbRoutes.map(e => e ? Route.toAmino(e) : undefined);
    } else {
      obj.arb_routes = message.arbRoutes;
    }
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: TokenPairArbRoutesAminoMsg): TokenPairArbRoutes {
    return TokenPairArbRoutes.fromAmino(object.value);
  },
  toAminoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesAminoMsg {
    return {
      type: "osmosis/protorev/token-pair-arb-routes",
      value: TokenPairArbRoutes.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenPairArbRoutesProtoMsg): TokenPairArbRoutes {
    return TokenPairArbRoutes.decode(message.value);
  },
  toProto(message: TokenPairArbRoutes): Uint8Array {
    return TokenPairArbRoutes.encode(message).finish();
  },
  toProtoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
      value: TokenPairArbRoutes.encode(message).finish()
    };
  }
};
function createBaseRoute(): Route {
  return {
    trades: [],
    stepSize: ""
  };
}
export const Route = {
  typeUrl: "/osmosis.protorev.v1beta1.Route",
  encode(message: Route, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Route {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stepSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Route {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromJSON(e)) : [],
      stepSize: isSet(object.stepSize) ? String(object.stepSize) : ""
    };
  },
  toJSON(message: Route): JsonSafe<Route> {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    message.stepSize !== undefined && (obj.stepSize = message.stepSize);
    return obj;
  },
  fromPartial(object: DeepPartial<Route>): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    message.stepSize = object.stepSize ?? "";
    return message;
  },
  fromSDK(object: RouteSDKType): Route {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromSDK(e)) : [],
      stepSize: object?.step_size
    };
  },
  fromSDKJSON(object: any): RouteSDKType {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromSDKJSON(e)) : [],
      step_size: isSet(object.step_size) ? String(object.step_size) : ""
    };
  },
  toSDK(message: Route): RouteSDKType {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toSDK(e) : undefined);
    } else {
      obj.trades = [];
    }
    obj.step_size = message.stepSize;
    return obj;
  },
  fromAmino(object: RouteAmino): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromAmino(e)) || [];
    if (object.step_size !== undefined && object.step_size !== null) {
      message.stepSize = object.step_size;
    }
    return message;
  },
  toAmino(message: Route): RouteAmino {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toAmino(e) : undefined);
    } else {
      obj.trades = message.trades;
    }
    obj.step_size = message.stepSize === "" ? undefined : message.stepSize;
    return obj;
  },
  fromAminoMsg(object: RouteAminoMsg): Route {
    return Route.fromAmino(object.value);
  },
  toAminoMsg(message: Route): RouteAminoMsg {
    return {
      type: "osmosis/protorev/route",
      value: Route.toAmino(message)
    };
  },
  fromProtoMsg(message: RouteProtoMsg): Route {
    return Route.decode(message.value);
  },
  toProto(message: Route): Uint8Array {
    return Route.encode(message).finish();
  },
  toProtoMsg(message: Route): RouteProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.Route",
      value: Route.encode(message).finish()
    };
  }
};
function createBaseTrade(): Trade {
  return {
    pool: BigInt(0),
    tokenIn: "",
    tokenOut: ""
  };
}
export const Trade = {
  typeUrl: "/osmosis.protorev.v1beta1.Trade",
  encode(message: Trade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Trade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Trade {
    return {
      pool: isSet(object.pool) ? BigInt(object.pool.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: Trade): JsonSafe<Trade> {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = (message.pool || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<Trade>): Trade {
    const message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? BigInt(object.pool.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: TradeSDKType): Trade {
    return {
      pool: object?.pool,
      tokenIn: object?.token_in,
      tokenOut: object?.token_out
    };
  },
  fromSDKJSON(object: any): TradeSDKType {
    return {
      pool: isSet(object.pool) ? BigInt(object.pool.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? String(object.token_in) : "",
      token_out: isSet(object.token_out) ? String(object.token_out) : ""
    };
  },
  toSDK(message: Trade): TradeSDKType {
    const obj: any = {};
    obj.pool = message.pool;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    return obj;
  },
  fromAmino(object: TradeAmino): Trade {
    const message = createBaseTrade();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = BigInt(object.pool);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: Trade): TradeAmino {
    const obj: any = {};
    obj.pool = message.pool !== BigInt(0) ? message.pool?.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: TradeAminoMsg): Trade {
    return Trade.fromAmino(object.value);
  },
  toAminoMsg(message: Trade): TradeAminoMsg {
    return {
      type: "osmosis/protorev/trade",
      value: Trade.toAmino(message)
    };
  },
  fromProtoMsg(message: TradeProtoMsg): Trade {
    return Trade.decode(message.value);
  },
  toProto(message: Trade): Uint8Array {
    return Trade.encode(message).finish();
  },
  toProtoMsg(message: Trade): TradeProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.Trade",
      value: Trade.encode(message).finish()
    };
  }
};
function createBaseRouteStatistics(): RouteStatistics {
  return {
    profits: [],
    numberOfTrades: "",
    route: []
  };
}
export const RouteStatistics = {
  typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics",
  encode(message: RouteStatistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }
    writer.uint32(26).fork();
    for (const v of message.route) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouteStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.numberOfTrades = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.route.push(reader.uint64());
            }
          } else {
            message.route.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RouteStatistics {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : [],
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : "",
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: RouteStatistics): JsonSafe<RouteStatistics> {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    if (message.route) {
      obj.route = message.route.map(e => (e || BigInt(0)).toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RouteStatistics>): RouteStatistics {
    const message = createBaseRouteStatistics();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    message.numberOfTrades = object.numberOfTrades ?? "";
    message.route = object.route?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: RouteStatisticsSDKType): RouteStatistics {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromSDK(e)) : [],
      numberOfTrades: object?.number_of_trades,
      route: Array.isArray(object?.route) ? object.route.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): RouteStatisticsSDKType {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromSDKJSON(e)) : [],
      number_of_trades: isSet(object.number_of_trades) ? String(object.number_of_trades) : "",
      route: Array.isArray(object?.route) ? object.route.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toSDK(message: RouteStatistics): RouteStatisticsSDKType {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.profits = [];
    }
    obj.number_of_trades = message.numberOfTrades;
    if (message.route) {
      obj.route = message.route.map(e => e);
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromAmino(object: RouteStatisticsAmino): RouteStatistics {
    const message = createBaseRouteStatistics();
    message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
    if (object.number_of_trades !== undefined && object.number_of_trades !== null) {
      message.numberOfTrades = object.number_of_trades;
    }
    message.route = object.route?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: RouteStatistics): RouteStatisticsAmino {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.profits = message.profits;
    }
    obj.number_of_trades = message.numberOfTrades === "" ? undefined : message.numberOfTrades;
    if (message.route) {
      obj.route = message.route.map(e => e.toString());
    } else {
      obj.route = message.route;
    }
    return obj;
  },
  fromAminoMsg(object: RouteStatisticsAminoMsg): RouteStatistics {
    return RouteStatistics.fromAmino(object.value);
  },
  toAminoMsg(message: RouteStatistics): RouteStatisticsAminoMsg {
    return {
      type: "osmosis/protorev/route-statistics",
      value: RouteStatistics.toAmino(message)
    };
  },
  fromProtoMsg(message: RouteStatisticsProtoMsg): RouteStatistics {
    return RouteStatistics.decode(message.value);
  },
  toProto(message: RouteStatistics): Uint8Array {
    return RouteStatistics.encode(message).finish();
  },
  toProtoMsg(message: RouteStatistics): RouteStatisticsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics",
      value: RouteStatistics.encode(message).finish()
    };
  }
};
function createBasePoolWeights(): PoolWeights {
  return {
    stableWeight: BigInt(0),
    balancerWeight: BigInt(0),
    concentratedWeight: BigInt(0)
  };
}
export const PoolWeights = {
  typeUrl: "/osmosis.protorev.v1beta1.PoolWeights",
  encode(message: PoolWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stableWeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.stableWeight);
    }
    if (message.balancerWeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.balancerWeight);
    }
    if (message.concentratedWeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.concentratedWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolWeights {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableWeight = reader.uint64();
          break;
        case 2:
          message.balancerWeight = reader.uint64();
          break;
        case 3:
          message.concentratedWeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolWeights {
    return {
      stableWeight: isSet(object.stableWeight) ? BigInt(object.stableWeight.toString()) : BigInt(0),
      balancerWeight: isSet(object.balancerWeight) ? BigInt(object.balancerWeight.toString()) : BigInt(0),
      concentratedWeight: isSet(object.concentratedWeight) ? BigInt(object.concentratedWeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolWeights): JsonSafe<PoolWeights> {
    const obj: any = {};
    message.stableWeight !== undefined && (obj.stableWeight = (message.stableWeight || BigInt(0)).toString());
    message.balancerWeight !== undefined && (obj.balancerWeight = (message.balancerWeight || BigInt(0)).toString());
    message.concentratedWeight !== undefined && (obj.concentratedWeight = (message.concentratedWeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<PoolWeights>): PoolWeights {
    const message = createBasePoolWeights();
    message.stableWeight = object.stableWeight !== undefined && object.stableWeight !== null ? BigInt(object.stableWeight.toString()) : BigInt(0);
    message.balancerWeight = object.balancerWeight !== undefined && object.balancerWeight !== null ? BigInt(object.balancerWeight.toString()) : BigInt(0);
    message.concentratedWeight = object.concentratedWeight !== undefined && object.concentratedWeight !== null ? BigInt(object.concentratedWeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: PoolWeightsSDKType): PoolWeights {
    return {
      stableWeight: object?.stable_weight,
      balancerWeight: object?.balancer_weight,
      concentratedWeight: object?.concentrated_weight
    };
  },
  fromSDKJSON(object: any): PoolWeightsSDKType {
    return {
      stable_weight: isSet(object.stable_weight) ? BigInt(object.stable_weight.toString()) : BigInt(0),
      balancer_weight: isSet(object.balancer_weight) ? BigInt(object.balancer_weight.toString()) : BigInt(0),
      concentrated_weight: isSet(object.concentrated_weight) ? BigInt(object.concentrated_weight.toString()) : BigInt(0)
    };
  },
  toSDK(message: PoolWeights): PoolWeightsSDKType {
    const obj: any = {};
    obj.stable_weight = message.stableWeight;
    obj.balancer_weight = message.balancerWeight;
    obj.concentrated_weight = message.concentratedWeight;
    return obj;
  },
  fromAmino(object: PoolWeightsAmino): PoolWeights {
    const message = createBasePoolWeights();
    if (object.stable_weight !== undefined && object.stable_weight !== null) {
      message.stableWeight = BigInt(object.stable_weight);
    }
    if (object.balancer_weight !== undefined && object.balancer_weight !== null) {
      message.balancerWeight = BigInt(object.balancer_weight);
    }
    if (object.concentrated_weight !== undefined && object.concentrated_weight !== null) {
      message.concentratedWeight = BigInt(object.concentrated_weight);
    }
    return message;
  },
  toAmino(message: PoolWeights): PoolWeightsAmino {
    const obj: any = {};
    obj.stable_weight = message.stableWeight !== BigInt(0) ? message.stableWeight?.toString() : undefined;
    obj.balancer_weight = message.balancerWeight !== BigInt(0) ? message.balancerWeight?.toString() : undefined;
    obj.concentrated_weight = message.concentratedWeight !== BigInt(0) ? message.concentratedWeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolWeightsAminoMsg): PoolWeights {
    return PoolWeights.fromAmino(object.value);
  },
  toAminoMsg(message: PoolWeights): PoolWeightsAminoMsg {
    return {
      type: "osmosis/protorev/pool-weights",
      value: PoolWeights.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolWeightsProtoMsg): PoolWeights {
    return PoolWeights.decode(message.value);
  },
  toProto(message: PoolWeights): Uint8Array {
    return PoolWeights.encode(message).finish();
  },
  toProtoMsg(message: PoolWeights): PoolWeightsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.PoolWeights",
      value: PoolWeights.encode(message).finish()
    };
  }
};
function createBaseBaseDenom(): BaseDenom {
  return {
    denom: "",
    stepSize: ""
  };
}
export const BaseDenom = {
  typeUrl: "/osmosis.protorev.v1beta1.BaseDenom",
  encode(message: BaseDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.stepSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      stepSize: isSet(object.stepSize) ? String(object.stepSize) : ""
    };
  },
  toJSON(message: BaseDenom): JsonSafe<BaseDenom> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.stepSize !== undefined && (obj.stepSize = message.stepSize);
    return obj;
  },
  fromPartial(object: DeepPartial<BaseDenom>): BaseDenom {
    const message = createBaseBaseDenom();
    message.denom = object.denom ?? "";
    message.stepSize = object.stepSize ?? "";
    return message;
  },
  fromSDK(object: BaseDenomSDKType): BaseDenom {
    return {
      denom: object?.denom,
      stepSize: object?.step_size
    };
  },
  fromSDKJSON(object: any): BaseDenomSDKType {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      step_size: isSet(object.step_size) ? String(object.step_size) : ""
    };
  },
  toSDK(message: BaseDenom): BaseDenomSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.step_size = message.stepSize;
    return obj;
  },
  fromAmino(object: BaseDenomAmino): BaseDenom {
    const message = createBaseBaseDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.step_size !== undefined && object.step_size !== null) {
      message.stepSize = object.step_size;
    }
    return message;
  },
  toAmino(message: BaseDenom): BaseDenomAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.step_size = message.stepSize === "" ? undefined : message.stepSize;
    return obj;
  },
  fromAminoMsg(object: BaseDenomAminoMsg): BaseDenom {
    return BaseDenom.fromAmino(object.value);
  },
  toAminoMsg(message: BaseDenom): BaseDenomAminoMsg {
    return {
      type: "osmosis/protorev/base-denom",
      value: BaseDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: BaseDenomProtoMsg): BaseDenom {
    return BaseDenom.decode(message.value);
  },
  toProto(message: BaseDenom): Uint8Array {
    return BaseDenom.encode(message).finish();
  },
  toProtoMsg(message: BaseDenom): BaseDenomProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.BaseDenom",
      value: BaseDenom.encode(message).finish()
    };
  }
};