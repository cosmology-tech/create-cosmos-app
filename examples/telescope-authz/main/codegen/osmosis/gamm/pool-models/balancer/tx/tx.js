"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreateBalancerPoolResponse = exports.MsgCreateBalancerPool = void 0;
const balancerPool_1 = require("../balancerPool");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
const registry_1 = require("../../../../../registry");
function createBaseMsgCreateBalancerPool() {
    return {
        sender: "",
        poolParams: undefined,
        poolAssets: [],
        futurePoolGovernor: ""
    };
}
exports.MsgCreateBalancerPool = {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
    aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateBalancerPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.poolAssets) && (!o.poolAssets.length || balancerPool_1.PoolAsset.is(o.poolAssets[0])) && typeof o.futurePoolGovernor === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateBalancerPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.pool_assets) && (!o.pool_assets.length || balancerPool_1.PoolAsset.isSDK(o.pool_assets[0])) && typeof o.future_pool_governor === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateBalancerPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.pool_assets) && (!o.pool_assets.length || balancerPool_1.PoolAsset.isAmino(o.pool_assets[0])) && typeof o.future_pool_governor === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolParams !== undefined) {
            balancerPool_1.PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.poolAssets) {
            balancerPool_1.PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.futurePoolGovernor !== "") {
            writer.uint32(34).string(message.futurePoolGovernor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBalancerPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolParams = balancerPool_1.PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolAssets.push(balancerPool_1.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.futurePoolGovernor = reader.string();
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
            poolParams: (0, helpers_1.isSet)(object.poolParams) ? balancerPool_1.PoolParams.fromJSON(object.poolParams) : undefined,
            poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e) => balancerPool_1.PoolAsset.fromJSON(e)) : [],
            futurePoolGovernor: (0, helpers_1.isSet)(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolParams !== undefined && (obj.poolParams = message.poolParams ? balancerPool_1.PoolParams.toJSON(message.poolParams) : undefined);
        if (message.poolAssets) {
            obj.poolAssets = message.poolAssets.map(e => e ? balancerPool_1.PoolAsset.toJSON(e) : undefined);
        }
        else {
            obj.poolAssets = [];
        }
        message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBalancerPool();
        message.sender = object.sender ?? "";
        message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? balancerPool_1.PoolParams.fromPartial(object.poolParams) : undefined;
        message.poolAssets = object.poolAssets?.map(e => balancerPool_1.PoolAsset.fromPartial(e)) || [];
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolParams: object.pool_params ? balancerPool_1.PoolParams.fromSDK(object.pool_params) : undefined,
            poolAssets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e) => balancerPool_1.PoolAsset.fromSDK(e)) : [],
            futurePoolGovernor: object?.future_pool_governor
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        message.poolParams !== undefined && (obj.pool_params = message.poolParams ? balancerPool_1.PoolParams.toSDK(message.poolParams) : undefined);
        if (message.poolAssets) {
            obj.pool_assets = message.poolAssets.map(e => e ? balancerPool_1.PoolAsset.toSDK(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        obj.future_pool_governor = message.futurePoolGovernor;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBalancerPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_params !== undefined && object.pool_params !== null) {
            message.poolParams = balancerPool_1.PoolParams.fromAmino(object.pool_params);
        }
        message.poolAssets = object.pool_assets?.map(e => balancerPool_1.PoolAsset.fromAmino(e)) || [];
        if (object.future_pool_governor !== undefined && object.future_pool_governor !== null) {
            message.futurePoolGovernor = object.future_pool_governor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_params = message.poolParams ? balancerPool_1.PoolParams.toAmino(message.poolParams) : undefined;
        if (message.poolAssets) {
            obj.pool_assets = message.poolAssets.map(e => e ? balancerPool_1.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        obj.future_pool_governor = message.futurePoolGovernor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBalancerPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
            value: exports.MsgCreateBalancerPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBalancerPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBalancerPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
            value: exports.MsgCreateBalancerPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateBalancerPool.typeUrl, exports.MsgCreateBalancerPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateBalancerPool.aminoType, exports.MsgCreateBalancerPool.typeUrl);
function createBaseMsgCreateBalancerPoolResponse() {
    return {
        poolId: BigInt(0)
    };
}
exports.MsgCreateBalancerPoolResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
    aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateBalancerPoolResponse.typeUrl || typeof o.poolId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateBalancerPoolResponse.typeUrl || typeof o.pool_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateBalancerPoolResponse.typeUrl || typeof o.pool_id === "bigint");
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
        const message = createBaseMsgCreateBalancerPoolResponse();
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
        const message = createBaseMsgCreateBalancerPoolResponse();
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
        const message = createBaseMsgCreateBalancerPoolResponse();
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
        return exports.MsgCreateBalancerPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response",
            value: exports.MsgCreateBalancerPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBalancerPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBalancerPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
            value: exports.MsgCreateBalancerPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateBalancerPoolResponse.typeUrl, exports.MsgCreateBalancerPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateBalancerPoolResponse.aminoType, exports.MsgCreateBalancerPoolResponse.typeUrl);
