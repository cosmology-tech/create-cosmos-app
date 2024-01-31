"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgStableSwapAdjustScalingFactorsResponse = exports.MsgStableSwapAdjustScalingFactors = exports.MsgCreateStableswapPoolResponse = exports.MsgCreateStableswapPool = void 0;
const stableswap_pool_1 = require("./stableswap_pool");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseMsgCreateStableswapPool() {
    return {
        sender: "",
        poolParams: undefined,
        initialPoolLiquidity: [],
        scalingFactors: [],
        futurePoolGovernor: "",
        scalingFactorController: ""
    };
}
exports.MsgCreateStableswapPool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
    aminoType: "osmosis/gamm/create-stableswap-pool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateStableswapPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.initialPoolLiquidity) && (!o.initialPoolLiquidity.length || coin_1.Coin.is(o.initialPoolLiquidity[0])) && Array.isArray(o.scalingFactors) && (!o.scalingFactors.length || typeof o.scalingFactors[0] === "bigint") && typeof o.futurePoolGovernor === "string" && typeof o.scalingFactorController === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateStableswapPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.initial_pool_liquidity) && (!o.initial_pool_liquidity.length || coin_1.Coin.isSDK(o.initial_pool_liquidity[0])) && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint") && typeof o.future_pool_governor === "string" && typeof o.scaling_factor_controller === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateStableswapPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.initial_pool_liquidity) && (!o.initial_pool_liquidity.length || coin_1.Coin.isAmino(o.initial_pool_liquidity[0])) && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint") && typeof o.future_pool_governor === "string" && typeof o.scaling_factor_controller === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolParams !== undefined) {
            stableswap_pool_1.PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initialPoolLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.futurePoolGovernor !== "") {
            writer.uint32(42).string(message.futurePoolGovernor);
        }
        if (message.scalingFactorController !== "") {
            writer.uint32(50).string(message.scalingFactorController);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolParams = stableswap_pool_1.PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialPoolLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
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
                case 5:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 6:
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            poolParams: (0, helpers_1.isSet)(object.poolParams) ? stableswap_pool_1.PoolParams.fromJSON(object.poolParams) : undefined,
            initialPoolLiquidity: Array.isArray(object?.initialPoolLiquidity) ? object.initialPoolLiquidity.map((e) => coin_1.Coin.fromJSON(e)) : [],
            scalingFactors: Array.isArray(object?.scalingFactors) ? object.scalingFactors.map((e) => BigInt(e.toString())) : [],
            futurePoolGovernor: (0, helpers_1.isSet)(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : "",
            scalingFactorController: (0, helpers_1.isSet)(object.scalingFactorController) ? String(object.scalingFactorController) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolParams !== undefined && (obj.poolParams = message.poolParams ? stableswap_pool_1.PoolParams.toJSON(message.poolParams) : undefined);
        if (message.initialPoolLiquidity) {
            obj.initialPoolLiquidity = message.initialPoolLiquidity.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.initialPoolLiquidity = [];
        }
        if (message.scalingFactors) {
            obj.scalingFactors = message.scalingFactors.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.scalingFactors = [];
        }
        message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
        message.scalingFactorController !== undefined && (obj.scalingFactorController = message.scalingFactorController);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStableswapPool();
        message.sender = object.sender ?? "";
        message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? stableswap_pool_1.PoolParams.fromPartial(object.poolParams) : undefined;
        message.initialPoolLiquidity = object.initialPoolLiquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        message.scalingFactorController = object.scalingFactorController ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolParams: object.pool_params ? stableswap_pool_1.PoolParams.fromSDK(object.pool_params) : undefined,
            initialPoolLiquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e) => coin_1.Coin.fromSDK(e)) : [],
            scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => e) : [],
            futurePoolGovernor: object?.future_pool_governor,
            scalingFactorController: object?.scaling_factor_controller
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        message.poolParams !== undefined && (obj.pool_params = message.poolParams ? stableswap_pool_1.PoolParams.toSDK(message.poolParams) : undefined);
        if (message.initialPoolLiquidity) {
            obj.initial_pool_liquidity = message.initialPoolLiquidity.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.initial_pool_liquidity = [];
        }
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e);
        }
        else {
            obj.scaling_factors = [];
        }
        obj.future_pool_governor = message.futurePoolGovernor;
        obj.scaling_factor_controller = message.scalingFactorController;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStableswapPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_params !== undefined && object.pool_params !== null) {
            message.poolParams = stableswap_pool_1.PoolParams.fromAmino(object.pool_params);
        }
        message.initialPoolLiquidity = object.initial_pool_liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        if (object.future_pool_governor !== undefined && object.future_pool_governor !== null) {
            message.futurePoolGovernor = object.future_pool_governor;
        }
        if (object.scaling_factor_controller !== undefined && object.scaling_factor_controller !== null) {
            message.scalingFactorController = object.scaling_factor_controller;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_params = message.poolParams ? stableswap_pool_1.PoolParams.toAmino(message.poolParams) : undefined;
        if (message.initialPoolLiquidity) {
            obj.initial_pool_liquidity = message.initialPoolLiquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_pool_liquidity = [];
        }
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = [];
        }
        obj.future_pool_governor = message.futurePoolGovernor;
        obj.scaling_factor_controller = message.scalingFactorController;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStableswapPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/create-stableswap-pool",
            value: exports.MsgCreateStableswapPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStableswapPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStableswapPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
            value: exports.MsgCreateStableswapPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateStableswapPool.typeUrl, exports.MsgCreateStableswapPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateStableswapPool.aminoType, exports.MsgCreateStableswapPool.typeUrl);
function createBaseMsgCreateStableswapPoolResponse() {
    return {
        poolId: BigInt(0)
    };
}
exports.MsgCreateStableswapPoolResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
    aminoType: "osmosis/gamm/create-stableswap-pool-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateStableswapPoolResponse.typeUrl || typeof o.poolId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateStableswapPoolResponse.typeUrl || typeof o.pool_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateStableswapPoolResponse.typeUrl || typeof o.pool_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPoolResponse();
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
    fromJSON(object) {
        return {
            poolId: (0, helpers_1.isSet)(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStableswapPoolResponse();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            poolId: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.poolId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStableswapPoolResponse();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStableswapPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/create-stableswap-pool-response",
            value: exports.MsgCreateStableswapPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStableswapPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStableswapPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
            value: exports.MsgCreateStableswapPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateStableswapPoolResponse.typeUrl, exports.MsgCreateStableswapPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateStableswapPoolResponse.aminoType, exports.MsgCreateStableswapPoolResponse.typeUrl);
function createBaseMsgStableSwapAdjustScalingFactors() {
    return {
        sender: "",
        poolId: BigInt(0),
        scalingFactors: []
    };
}
exports.MsgStableSwapAdjustScalingFactors = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
    is(o) {
        return o && (o.$typeUrl === exports.MsgStableSwapAdjustScalingFactors.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && Array.isArray(o.scalingFactors) && (!o.scalingFactors.length || typeof o.scalingFactors[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgStableSwapAdjustScalingFactors.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgStableSwapAdjustScalingFactors.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        writer.uint32(26).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            poolId: (0, helpers_1.isSet)(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
            scalingFactors: Array.isArray(object?.scalingFactors) ? object.scalingFactors.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        if (message.scalingFactors) {
            obj.scalingFactors = message.scalingFactors.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.scalingFactors = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id,
            scalingFactors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e);
        }
        else {
            obj.scaling_factors = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStableSwapAdjustScalingFactors.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/stable-swap-adjust-scaling-factors",
            value: exports.MsgStableSwapAdjustScalingFactors.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStableSwapAdjustScalingFactors.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStableSwapAdjustScalingFactors.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
            value: exports.MsgStableSwapAdjustScalingFactors.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgStableSwapAdjustScalingFactors.typeUrl, exports.MsgStableSwapAdjustScalingFactors);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgStableSwapAdjustScalingFactors.aminoType, exports.MsgStableSwapAdjustScalingFactors.typeUrl);
function createBaseMsgStableSwapAdjustScalingFactorsResponse() {
    return {};
}
exports.MsgStableSwapAdjustScalingFactorsResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors-response",
    is(o) {
        return o && o.$typeUrl === exports.MsgStableSwapAdjustScalingFactorsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgStableSwapAdjustScalingFactorsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgStableSwapAdjustScalingFactorsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response",
            value: exports.MsgStableSwapAdjustScalingFactorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
            value: exports.MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgStableSwapAdjustScalingFactorsResponse.typeUrl, exports.MsgStableSwapAdjustScalingFactorsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgStableSwapAdjustScalingFactorsResponse.aminoType, exports.MsgStableSwapAdjustScalingFactorsResponse.typeUrl);
