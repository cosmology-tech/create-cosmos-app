"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.PoolParams = void 0;
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBasePoolParams() {
    return {
        swapFee: "",
        exitFee: ""
    };
}
exports.PoolParams = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
    aminoType: "osmosis/gamm/pool-params",
    is(o) {
        return o && (o.$typeUrl === exports.PoolParams.typeUrl || typeof o.swapFee === "string" && typeof o.exitFee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PoolParams.typeUrl || typeof o.swap_fee === "string" && typeof o.exit_fee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PoolParams.typeUrl || typeof o.swap_fee === "string" && typeof o.exit_fee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapFee !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        if (message.exitFee !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.exitFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.exitFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            swapFee: (0, helpers_1.isSet)(object.swapFee) ? String(object.swapFee) : "",
            exitFee: (0, helpers_1.isSet)(object.exitFee) ? String(object.exitFee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        message.exitFee !== undefined && (obj.exitFee = message.exitFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolParams();
        message.swapFee = object.swapFee ?? "";
        message.exitFee = object.exitFee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            swapFee: object?.swap_fee,
            exitFee: object?.exit_fee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.swap_fee = message.swapFee;
        obj.exit_fee = message.exitFee;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePoolParams();
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        if (object.exit_fee !== undefined && object.exit_fee !== null) {
            message.exitFee = object.exit_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_fee = message.swapFee;
        obj.exit_fee = message.exitFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/pool-params",
            value: exports.PoolParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolParams.decode(message.value);
    },
    toProto(message) {
        return exports.PoolParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
            value: exports.PoolParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PoolParams.typeUrl, exports.PoolParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolParams.aminoType, exports.PoolParams.typeUrl);
function createBasePool() {
    return {
        $typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        address: "",
        id: BigInt(0),
        poolParams: exports.PoolParams.fromPartial({}),
        futurePoolGovernor: "",
        totalShares: coin_1.Coin.fromPartial({}),
        poolLiquidity: [],
        scalingFactors: [],
        scalingFactorController: ""
    };
}
exports.Pool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
    aminoType: "osmosis/gamm/pool",
    is(o) {
        return o && (o.$typeUrl === exports.Pool.typeUrl || typeof o.address === "string" && typeof o.id === "bigint" && exports.PoolParams.is(o.poolParams) && typeof o.futurePoolGovernor === "string" && coin_1.Coin.is(o.totalShares) && Array.isArray(o.poolLiquidity) && (!o.poolLiquidity.length || coin_1.Coin.is(o.poolLiquidity[0])) && Array.isArray(o.scalingFactors) && (!o.scalingFactors.length || typeof o.scalingFactors[0] === "bigint") && typeof o.scalingFactorController === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Pool.typeUrl || typeof o.address === "string" && typeof o.id === "bigint" && exports.PoolParams.isSDK(o.pool_params) && typeof o.future_pool_governor === "string" && coin_1.Coin.isSDK(o.total_shares) && Array.isArray(o.pool_liquidity) && (!o.pool_liquidity.length || coin_1.Coin.isSDK(o.pool_liquidity[0])) && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint") && typeof o.scaling_factor_controller === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Pool.typeUrl || typeof o.address === "string" && typeof o.id === "bigint" && exports.PoolParams.isAmino(o.pool_params) && typeof o.future_pool_governor === "string" && coin_1.Coin.isAmino(o.total_shares) && Array.isArray(o.pool_liquidity) && (!o.pool_liquidity.length || coin_1.Coin.isAmino(o.pool_liquidity[0])) && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint") && typeof o.scaling_factor_controller === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.poolParams !== undefined) {
            exports.PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
        }
        if (message.futurePoolGovernor !== "") {
            writer.uint32(34).string(message.futurePoolGovernor);
        }
        if (message.totalShares !== undefined) {
            coin_1.Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.poolLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.scalingFactorController !== "") {
            writer.uint32(66).string(message.scalingFactorController);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.poolParams = exports.PoolParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 5:
                    message.totalShares = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.poolLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scalingFactors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scalingFactors.push(reader.uint64());
                    }
                    break;
                case 8:
                    message.scalingFactorController = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            poolParams: (0, helpers_1.isSet)(object.poolParams) ? exports.PoolParams.fromJSON(object.poolParams) : undefined,
            futurePoolGovernor: (0, helpers_1.isSet)(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : "",
            totalShares: (0, helpers_1.isSet)(object.totalShares) ? coin_1.Coin.fromJSON(object.totalShares) : undefined,
            poolLiquidity: Array.isArray(object?.poolLiquidity) ? object.poolLiquidity.map((e) => coin_1.Coin.fromJSON(e)) : [],
            scalingFactors: Array.isArray(object?.scalingFactors) ? object.scalingFactors.map((e) => BigInt(e.toString())) : [],
            scalingFactorController: (0, helpers_1.isSet)(object.scalingFactorController) ? String(object.scalingFactorController) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.poolParams !== undefined && (obj.poolParams = message.poolParams ? exports.PoolParams.toJSON(message.poolParams) : undefined);
        message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
        message.totalShares !== undefined && (obj.totalShares = message.totalShares ? coin_1.Coin.toJSON(message.totalShares) : undefined);
        if (message.poolLiquidity) {
            obj.poolLiquidity = message.poolLiquidity.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.poolLiquidity = [];
        }
        if (message.scalingFactors) {
            obj.scalingFactors = message.scalingFactors.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.scalingFactors = [];
        }
        message.scalingFactorController !== undefined && (obj.scalingFactorController = message.scalingFactorController);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.address = object.address ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? exports.PoolParams.fromPartial(object.poolParams) : undefined;
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? coin_1.Coin.fromPartial(object.totalShares) : undefined;
        message.poolLiquidity = object.poolLiquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        message.scalingFactorController = object.scalingFactorController ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            id: object?.id,
            poolParams: object.pool_params ? exports.PoolParams.fromSDK(object.pool_params) : undefined,
            futurePoolGovernor: object?.future_pool_governor,
            totalShares: object.total_shares ? coin_1.Coin.fromSDK(object.total_shares) : undefined,
            poolLiquidity: Array.isArray(object?.pool_liquidity) ? object.pool_liquidity.map((e) => coin_1.Coin.fromSDK(e)) : [],
            scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => e) : [],
            scalingFactorController: object?.scaling_factor_controller
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.id = message.id;
        message.poolParams !== undefined && (obj.pool_params = message.poolParams ? exports.PoolParams.toSDK(message.poolParams) : undefined);
        obj.future_pool_governor = message.futurePoolGovernor;
        message.totalShares !== undefined && (obj.total_shares = message.totalShares ? coin_1.Coin.toSDK(message.totalShares) : undefined);
        if (message.poolLiquidity) {
            obj.pool_liquidity = message.poolLiquidity.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.pool_liquidity = [];
        }
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e);
        }
        else {
            obj.scaling_factors = [];
        }
        obj.scaling_factor_controller = message.scalingFactorController;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.pool_params !== undefined && object.pool_params !== null) {
            message.poolParams = exports.PoolParams.fromAmino(object.pool_params);
        }
        if (object.future_pool_governor !== undefined && object.future_pool_governor !== null) {
            message.futurePoolGovernor = object.future_pool_governor;
        }
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = coin_1.Coin.fromAmino(object.total_shares);
        }
        message.poolLiquidity = object.pool_liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        if (object.scaling_factor_controller !== undefined && object.scaling_factor_controller !== null) {
            message.scalingFactorController = object.scaling_factor_controller;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.id = message.id ? message.id.toString() : undefined;
        obj.pool_params = message.poolParams ? exports.PoolParams.toAmino(message.poolParams) : undefined;
        obj.future_pool_governor = message.futurePoolGovernor;
        obj.total_shares = message.totalShares ? coin_1.Coin.toAmino(message.totalShares) : undefined;
        if (message.poolLiquidity) {
            obj.pool_liquidity = message.poolLiquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_liquidity = [];
        }
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = [];
        }
        obj.scaling_factor_controller = message.scalingFactorController;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/pool",
            value: exports.Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Pool.typeUrl, exports.Pool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Pool.aminoType, exports.Pool.typeUrl);
