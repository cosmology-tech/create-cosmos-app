import { Params, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, BaseDenom, BaseDenomSDKType, PoolWeights, PoolWeightsSDKType } from "./protorev";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
  /** Parameters for the protorev module. */
  params: Params;
  /** Token pair arb routes for the protorev module (hot routes). */
  tokenPairArbRoutes: TokenPairArbRoutes[];
  /**
   * The base denominations being used to create cyclic arbitrage routes via the
   * highest liquidity method.
   */
  baseDenoms: BaseDenom[];
  /**
   * The pool weights that are being used to calculate the weight (compute cost)
   * of each route.
   */
  poolWeights: PoolWeights;
  /** The number of days since module genesis. */
  daysSinceModuleGenesis: bigint;
  /** The fees the developer account has accumulated over time. */
  developerFees: Coin[];
  /** The latest block height that the module has processed. */
  latestBlockHeight: bigint;
  /** The developer account address of the module. */
  developerAddress: string;
  /**
   * Max pool points per block i.e. the maximum compute time (in ms)
   * that protorev can use per block.
   */
  maxPoolPointsPerBlock: bigint;
  /**
   * Max pool points per tx i.e. the maximum compute time (in ms) that
   * protorev can use per tx.
   */
  maxPoolPointsPerTx: bigint;
  /** The number of pool points that have been consumed in the current block. */
  pointCountForBlock: bigint;
}
export interface ReactiveGenesisState {
  params: ComputedRef<Params>;
  tokenPairArbRoutes: ComputedRef<TokenPairArbRoutes[]>;
  baseDenoms: ComputedRef<BaseDenom[]>;
  poolWeights: ComputedRef<PoolWeights>;
  daysSinceModuleGenesis: ComputedRef<bigint>;
  developerFees: ComputedRef<Coin[]>;
  latestBlockHeight: ComputedRef<bigint>;
  developerAddress: ComputedRef<string>;
  maxPoolPointsPerBlock: ComputedRef<bigint>;
  maxPoolPointsPerTx: ComputedRef<bigint>;
  pointCountForBlock: ComputedRef<bigint>;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_pair_arb_routes: TokenPairArbRoutesSDKType[];
  base_denoms: BaseDenomSDKType[];
  pool_weights: PoolWeightsSDKType;
  days_since_module_genesis: bigint;
  developer_fees: CoinSDKType[];
  latest_block_height: bigint;
  developer_address: string;
  max_pool_points_per_block: bigint;
  max_pool_points_per_tx: bigint;
  point_count_for_block: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairArbRoutes: [],
    baseDenoms: [],
    poolWeights: PoolWeights.fromPartial({}),
    daysSinceModuleGenesis: BigInt(0),
    developerFees: [],
    latestBlockHeight: BigInt(0),
    developerAddress: "",
    maxPoolPointsPerBlock: BigInt(0),
    maxPoolPointsPerTx: BigInt(0),
    pointCountForBlock: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairArbRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(34).fork()).ldelim();
    }
    if (message.daysSinceModuleGenesis !== BigInt(0)) {
      writer.uint32(40).uint64(message.daysSinceModuleGenesis);
    }
    for (const v of message.developerFees) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestBlockHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.latestBlockHeight);
    }
    if (message.developerAddress !== "") {
      writer.uint32(66).string(message.developerAddress);
    }
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
    }
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxPoolPointsPerTx);
    }
    if (message.pointCountForBlock !== BigInt(0)) {
      writer.uint32(88).uint64(message.pointCountForBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairArbRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        case 3:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        case 4:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;
        case 5:
          message.daysSinceModuleGenesis = reader.uint64();
          break;
        case 6:
          message.developerFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.latestBlockHeight = reader.uint64();
          break;
        case 8:
          message.developerAddress = reader.string();
          break;
        case 9:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        case 10:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        case 11:
          message.pointCountForBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokenPairArbRoutes: Array.isArray(object?.tokenPairArbRoutes) ? object.tokenPairArbRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : [],
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : [],
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined,
      daysSinceModuleGenesis: isSet(object.daysSinceModuleGenesis) ? BigInt(object.daysSinceModuleGenesis.toString()) : BigInt(0),
      developerFees: Array.isArray(object?.developerFees) ? object.developerFees.map((e: any) => Coin.fromJSON(e)) : [],
      latestBlockHeight: isSet(object.latestBlockHeight) ? BigInt(object.latestBlockHeight.toString()) : BigInt(0),
      developerAddress: isSet(object.developerAddress) ? String(object.developerAddress) : "",
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0),
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0),
      pointCountForBlock: isSet(object.pointCountForBlock) ? BigInt(object.pointCountForBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenPairArbRoutes) {
      obj.tokenPairArbRoutes = message.tokenPairArbRoutes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.tokenPairArbRoutes = [];
    }
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    message.poolWeights !== undefined && (obj.poolWeights = message.poolWeights ? PoolWeights.toJSON(message.poolWeights) : undefined);
    message.daysSinceModuleGenesis !== undefined && (obj.daysSinceModuleGenesis = (message.daysSinceModuleGenesis || BigInt(0)).toString());
    if (message.developerFees) {
      obj.developerFees = message.developerFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.developerFees = [];
    }
    message.latestBlockHeight !== undefined && (obj.latestBlockHeight = (message.latestBlockHeight || BigInt(0)).toString());
    message.developerAddress !== undefined && (obj.developerAddress = message.developerAddress);
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    message.pointCountForBlock !== undefined && (obj.pointCountForBlock = (message.pointCountForBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairArbRoutes = object.tokenPairArbRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    message.daysSinceModuleGenesis = object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null ? BigInt(object.daysSinceModuleGenesis.toString()) : BigInt(0);
    message.developerFees = object.developerFees?.map(e => Coin.fromPartial(e)) || [];
    message.latestBlockHeight = object.latestBlockHeight !== undefined && object.latestBlockHeight !== null ? BigInt(object.latestBlockHeight.toString()) : BigInt(0);
    message.developerAddress = object.developerAddress ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    message.pointCountForBlock = object.pointCountForBlock !== undefined && object.pointCountForBlock !== null ? BigInt(object.pointCountForBlock.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      tokenPairArbRoutes: Array.isArray(object?.token_pair_arb_routes) ? object.token_pair_arb_routes.map((e: any) => TokenPairArbRoutes.fromSDK(e)) : [],
      baseDenoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDK(e)) : [],
      poolWeights: object.pool_weights ? PoolWeights.fromSDK(object.pool_weights) : undefined,
      daysSinceModuleGenesis: object?.days_since_module_genesis,
      developerFees: Array.isArray(object?.developer_fees) ? object.developer_fees.map((e: any) => Coin.fromSDK(e)) : [],
      latestBlockHeight: object?.latest_block_height,
      developerAddress: object?.developer_address,
      maxPoolPointsPerBlock: object?.max_pool_points_per_block,
      maxPoolPointsPerTx: object?.max_pool_points_per_tx,
      pointCountForBlock: object?.point_count_for_block
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      token_pair_arb_routes: Array.isArray(object?.token_pair_arb_routes) ? object.token_pair_arb_routes.map((e: any) => TokenPairArbRoutes.fromSDKJSON(e)) : [],
      base_denoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromSDKJSON(e)) : [],
      pool_weights: isSet(object.pool_weights) ? PoolWeights.fromSDKJSON(object.pool_weights) : undefined,
      days_since_module_genesis: isSet(object.days_since_module_genesis) ? BigInt(object.days_since_module_genesis.toString()) : BigInt(0),
      developer_fees: Array.isArray(object?.developer_fees) ? object.developer_fees.map((e: any) => Coin.fromSDKJSON(e)) : [],
      latest_block_height: isSet(object.latest_block_height) ? BigInt(object.latest_block_height.toString()) : BigInt(0),
      developer_address: isSet(object.developer_address) ? String(object.developer_address) : "",
      max_pool_points_per_block: isSet(object.max_pool_points_per_block) ? BigInt(object.max_pool_points_per_block.toString()) : BigInt(0),
      max_pool_points_per_tx: isSet(object.max_pool_points_per_tx) ? BigInt(object.max_pool_points_per_tx.toString()) : BigInt(0),
      point_count_for_block: isSet(object.point_count_for_block) ? BigInt(object.point_count_for_block.toString()) : BigInt(0)
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.tokenPairArbRoutes) {
      obj.token_pair_arb_routes = message.tokenPairArbRoutes.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
    } else {
      obj.token_pair_arb_routes = [];
    }
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toSDK(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    message.poolWeights !== undefined && (obj.pool_weights = message.poolWeights ? PoolWeights.toSDK(message.poolWeights) : undefined);
    obj.days_since_module_genesis = message.daysSinceModuleGenesis;
    if (message.developerFees) {
      obj.developer_fees = message.developerFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.developer_fees = [];
    }
    obj.latest_block_height = message.latestBlockHeight;
    obj.developer_address = message.developerAddress;
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock;
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx;
    obj.point_count_for_block = message.pointCountForBlock;
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenPairArbRoutes = object.token_pair_arb_routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
    message.baseDenoms = object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
    if (object.pool_weights !== undefined && object.pool_weights !== null) {
      message.poolWeights = PoolWeights.fromAmino(object.pool_weights);
    }
    if (object.days_since_module_genesis !== undefined && object.days_since_module_genesis !== null) {
      message.daysSinceModuleGenesis = BigInt(object.days_since_module_genesis);
    }
    message.developerFees = object.developer_fees?.map(e => Coin.fromAmino(e)) || [];
    if (object.latest_block_height !== undefined && object.latest_block_height !== null) {
      message.latestBlockHeight = BigInt(object.latest_block_height);
    }
    if (object.developer_address !== undefined && object.developer_address !== null) {
      message.developerAddress = object.developer_address;
    }
    if (object.max_pool_points_per_block !== undefined && object.max_pool_points_per_block !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
    }
    if (object.max_pool_points_per_tx !== undefined && object.max_pool_points_per_tx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
    }
    if (object.point_count_for_block !== undefined && object.point_count_for_block !== null) {
      message.pointCountForBlock = BigInt(object.point_count_for_block);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokenPairArbRoutes) {
      obj.token_pair_arb_routes = message.tokenPairArbRoutes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.token_pair_arb_routes = message.tokenPairArbRoutes;
    }
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
    } else {
      obj.base_denoms = message.baseDenoms;
    }
    obj.pool_weights = message.poolWeights ? PoolWeights.toAmino(message.poolWeights) : undefined;
    obj.days_since_module_genesis = message.daysSinceModuleGenesis !== BigInt(0) ? message.daysSinceModuleGenesis?.toString() : undefined;
    if (message.developerFees) {
      obj.developer_fees = message.developerFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.developer_fees = message.developerFees;
    }
    obj.latest_block_height = message.latestBlockHeight !== BigInt(0) ? message.latestBlockHeight?.toString() : undefined;
    obj.developer_address = message.developerAddress === "" ? undefined : message.developerAddress;
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock !== BigInt(0) ? message.maxPoolPointsPerBlock?.toString() : undefined;
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx !== BigInt(0) ? message.maxPoolPointsPerTx?.toString() : undefined;
    obj.point_count_for_block = message.pointCountForBlock !== BigInt(0) ? message.pointCountForBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/protorev/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};