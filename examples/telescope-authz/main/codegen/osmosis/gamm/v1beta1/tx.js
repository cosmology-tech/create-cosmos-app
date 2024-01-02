"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgExitSwapExternAmountOutResponse = exports.MsgExitSwapExternAmountOut = exports.MsgExitSwapShareAmountInResponse = exports.MsgExitSwapShareAmountIn = exports.MsgJoinSwapShareAmountOutResponse = exports.MsgJoinSwapShareAmountOut = exports.MsgJoinSwapExternAmountInResponse = exports.MsgJoinSwapExternAmountIn = exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.SwapAmountOutRoute = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = exports.SwapAmountInRoute = exports.MsgExitPoolResponse = exports.MsgExitPool = exports.MsgJoinPoolResponse = exports.MsgJoinPool = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgJoinPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareOutAmount: "",
        tokenInMaxs: []
    };
}
exports.MsgJoinPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
    aminoType: "osmosis/gamm/join-pool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgJoinPool.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && typeof o.shareOutAmount === "string" && Array.isArray(o.tokenInMaxs) && (!o.tokenInMaxs.length || coin_1.Coin.is(o.tokenInMaxs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgJoinPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.share_out_amount === "string" && Array.isArray(o.token_in_maxs) && (!o.token_in_maxs.length || coin_1.Coin.isSDK(o.token_in_maxs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgJoinPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.share_out_amount === "string" && Array.isArray(o.token_in_maxs) && (!o.token_in_maxs.length || coin_1.Coin.isAmino(o.token_in_maxs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(26).string(message.shareOutAmount);
        }
        for (const v of message.tokenInMaxs) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPool();
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
                    message.shareOutAmount = reader.string();
                    break;
                case 4:
                    message.tokenInMaxs.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            shareOutAmount: (0, helpers_1.isSet)(object.shareOutAmount) ? String(object.shareOutAmount) : "",
            tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        if (message.tokenInMaxs) {
            obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokenInMaxs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxs = object.tokenInMaxs?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id,
            shareOutAmount: object?.share_out_amount,
            tokenInMaxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        obj.share_out_amount = message.shareOutAmount;
        if (message.tokenInMaxs) {
            obj.token_in_maxs = message.tokenInMaxs.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_in_maxs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokenInMaxs = object.token_in_maxs?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.share_out_amount = message.shareOutAmount;
        if (message.tokenInMaxs) {
            obj.token_in_maxs = message.tokenInMaxs.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in_maxs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool",
            value: exports.MsgJoinPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
            value: exports.MsgJoinPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgJoinPool.typeUrl, exports.MsgJoinPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgJoinPool.aminoType, exports.MsgJoinPool.typeUrl);
function createBaseMsgJoinPoolResponse() {
    return {
        shareOutAmount: "",
        tokenIn: []
    };
}
exports.MsgJoinPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
    aminoType: "osmosis/gamm/join-pool-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgJoinPoolResponse.typeUrl || typeof o.shareOutAmount === "string" && Array.isArray(o.tokenIn) && (!o.tokenIn.length || coin_1.Coin.is(o.tokenIn[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgJoinPoolResponse.typeUrl || typeof o.share_out_amount === "string" && Array.isArray(o.token_in) && (!o.token_in.length || coin_1.Coin.isSDK(o.token_in[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgJoinPoolResponse.typeUrl || typeof o.share_out_amount === "string" && Array.isArray(o.token_in) && (!o.token_in.length || coin_1.Coin.isAmino(o.token_in[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokenIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokenIn.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            shareOutAmount: (0, helpers_1.isSet)(object.shareOutAmount) ? String(object.shareOutAmount) : "",
            tokenIn: Array.isArray(object?.tokenIn) ? object.tokenIn.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        if (message.tokenIn) {
            obj.tokenIn = message.tokenIn.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokenIn = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPoolResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenIn = object.tokenIn?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            shareOutAmount: object?.share_out_amount,
            tokenIn: Array.isArray(object?.token_in) ? object.token_in.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount;
        if (message.tokenIn) {
            obj.token_in = message.tokenIn.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinPoolResponse();
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokenIn = object.token_in?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount;
        if (message.tokenIn) {
            obj.token_in = message.tokenIn.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool-response",
            value: exports.MsgJoinPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
            value: exports.MsgJoinPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgJoinPoolResponse.typeUrl, exports.MsgJoinPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgJoinPoolResponse.aminoType, exports.MsgJoinPoolResponse.typeUrl);
function createBaseMsgExitPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareInAmount: "",
        tokenOutMins: []
    };
}
exports.MsgExitPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
    aminoType: "osmosis/gamm/exit-pool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExitPool.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && typeof o.shareInAmount === "string" && Array.isArray(o.tokenOutMins) && (!o.tokenOutMins.length || coin_1.Coin.is(o.tokenOutMins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExitPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.share_in_amount === "string" && Array.isArray(o.token_out_mins) && (!o.token_out_mins.length || coin_1.Coin.isSDK(o.token_out_mins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExitPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.share_in_amount === "string" && Array.isArray(o.token_out_mins) && (!o.token_out_mins.length || coin_1.Coin.isAmino(o.token_out_mins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(26).string(message.shareInAmount);
        }
        for (const v of message.tokenOutMins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPool();
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
                    message.shareInAmount = reader.string();
                    break;
                case 4:
                    message.tokenOutMins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            shareInAmount: (0, helpers_1.isSet)(object.shareInAmount) ? String(object.shareInAmount) : "",
            tokenOutMins: Array.isArray(object?.tokenOutMins) ? object.tokenOutMins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
        if (message.tokenOutMins) {
            obj.tokenOutMins = message.tokenOutMins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokenOutMins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMins = object.tokenOutMins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id,
            shareInAmount: object?.share_in_amount,
            tokenOutMins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        obj.share_in_amount = message.shareInAmount;
        if (message.tokenOutMins) {
            obj.token_out_mins = message.tokenOutMins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_out_mins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExitPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        message.tokenOutMins = object.token_out_mins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.share_in_amount = message.shareInAmount;
        if (message.tokenOutMins) {
            obj.token_out_mins = message.tokenOutMins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out_mins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool",
            value: exports.MsgExitPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
            value: exports.MsgExitPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExitPool.typeUrl, exports.MsgExitPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExitPool.aminoType, exports.MsgExitPool.typeUrl);
function createBaseMsgExitPoolResponse() {
    return {
        tokenOut: []
    };
}
exports.MsgExitPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
    aminoType: "osmosis/gamm/exit-pool-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExitPoolResponse.typeUrl || Array.isArray(o.tokenOut) && (!o.tokenOut.length || coin_1.Coin.is(o.tokenOut[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExitPoolResponse.typeUrl || Array.isArray(o.token_out) && (!o.token_out.length || coin_1.Coin.isSDK(o.token_out[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExitPoolResponse.typeUrl || Array.isArray(o.token_out) && (!o.token_out.length || coin_1.Coin.isAmino(o.token_out[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokenOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            tokenOut: Array.isArray(object?.tokenOut) ? object.tokenOut.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenOut) {
            obj.tokenOut = message.tokenOut.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokenOut = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPoolResponse();
        message.tokenOut = object.tokenOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            tokenOut: Array.isArray(object?.token_out) ? object.token_out.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.tokenOut) {
            obj.token_out = message.tokenOut.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExitPoolResponse();
        message.tokenOut = object.token_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokenOut) {
            obj.token_out = message.tokenOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool-response",
            value: exports.MsgExitPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
            value: exports.MsgExitPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExitPoolResponse.typeUrl, exports.MsgExitPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExitPoolResponse.aminoType, exports.MsgExitPoolResponse.typeUrl);
function createBaseSwapAmountInRoute() {
    return {
        poolId: BigInt(0),
        tokenOutDenom: ""
    };
}
exports.SwapAmountInRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
    aminoType: "osmosis/gamm/swap-amount-in-route",
    is(o) {
        return o && (o.$typeUrl === exports.SwapAmountInRoute.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenOutDenom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SwapAmountInRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_out_denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SwapAmountInRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_out_denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
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
            poolId: (0, helpers_1.isSet)(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
            tokenOutDenom: (0, helpers_1.isSet)(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountInRoute();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            poolId: object?.pool_id,
            tokenOutDenom: object?.token_out_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.poolId;
        obj.token_out_denom = message.tokenOutDenom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountInRoute();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.token_out_denom = message.tokenOutDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountInRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-in-route",
            value: exports.SwapAmountInRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountInRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountInRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
            value: exports.SwapAmountInRoute.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SwapAmountInRoute.typeUrl, exports.SwapAmountInRoute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapAmountInRoute.aminoType, exports.SwapAmountInRoute.typeUrl);
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutMinAmount: ""
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
    aminoType: "osmosis/gamm/swap-exact-amount-in",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountIn.typeUrl || typeof o.sender === "string" && Array.isArray(o.routes) && (!o.routes.length || exports.SwapAmountInRoute.is(o.routes[0])) && coin_1.Coin.is(o.tokenIn) && typeof o.tokenOutMinAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountIn.typeUrl || typeof o.sender === "string" && Array.isArray(o.routes) && (!o.routes.length || exports.SwapAmountInRoute.isSDK(o.routes[0])) && coin_1.Coin.isSDK(o.token_in) && typeof o.token_out_min_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountIn.typeUrl || typeof o.sender === "string" && Array.isArray(o.routes) && (!o.routes.length || exports.SwapAmountInRoute.isAmino(o.routes[0])) && coin_1.Coin.isAmino(o.token_in) && typeof o.token_out_min_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            exports.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(exports.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountInRoute.fromJSON(e)) : [],
            tokenIn: (0, helpers_1.isSet)(object.tokenIn) ? coin_1.Coin.fromJSON(object.tokenIn) : undefined,
            tokenOutMinAmount: (0, helpers_1.isSet)(object.tokenOutMinAmount) ? String(object.tokenOutMinAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountInRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? coin_1.Coin.toJSON(message.tokenIn) : undefined);
        message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountIn();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => exports.SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? coin_1.Coin.fromPartial(object.tokenIn) : undefined;
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountInRoute.fromSDK(e)) : [],
            tokenIn: object.token_in ? coin_1.Coin.fromSDK(object.token_in) : undefined,
            tokenOutMinAmount: object?.token_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountInRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.tokenIn !== undefined && (obj.token_in = message.tokenIn ? coin_1.Coin.toSDK(message.tokenIn) : undefined);
        obj.token_out_min_amount = message.tokenOutMinAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => exports.SwapAmountInRoute.fromAmino(e)) || [];
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
        }
        if (object.token_out_min_amount !== undefined && object.token_out_min_amount !== null) {
            message.tokenOutMinAmount = object.token_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_min_amount = message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-in",
            value: exports.MsgSwapExactAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
            value: exports.MsgSwapExactAmountIn.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountIn.typeUrl, exports.MsgSwapExactAmountIn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountIn.aminoType, exports.MsgSwapExactAmountIn.typeUrl);
function createBaseMsgSwapExactAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
exports.MsgSwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
    aminoType: "osmosis/gamm/swap-exact-amount-in-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountInResponse.typeUrl || typeof o.tokenOutAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
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
            tokenOutAmount: (0, helpers_1.isSet)(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            tokenOutAmount: object?.token_out_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.token_out_amount = message.tokenOutAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountInResponse();
        if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out_amount = message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-in-response",
            value: exports.MsgSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
            value: exports.MsgSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountInResponse.typeUrl, exports.MsgSwapExactAmountInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountInResponse.aminoType, exports.MsgSwapExactAmountInResponse.typeUrl);
function createBaseSwapAmountOutRoute() {
    return {
        poolId: BigInt(0),
        tokenInDenom: ""
    };
}
exports.SwapAmountOutRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
    aminoType: "osmosis/gamm/swap-amount-out-route",
    is(o) {
        return o && (o.$typeUrl === exports.SwapAmountOutRoute.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenInDenom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SwapAmountOutRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SwapAmountOutRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
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
            poolId: (0, helpers_1.isSet)(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
            tokenInDenom: (0, helpers_1.isSet)(object.tokenInDenom) ? String(object.tokenInDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountOutRoute();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            poolId: object?.pool_id,
            tokenInDenom: object?.token_in_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.poolId;
        obj.token_in_denom = message.tokenInDenom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountOutRoute();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.token_in_denom = message.tokenInDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountOutRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-out-route",
            value: exports.SwapAmountOutRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountOutRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountOutRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
            value: exports.SwapAmountOutRoute.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SwapAmountOutRoute.typeUrl, exports.SwapAmountOutRoute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapAmountOutRoute.aminoType, exports.SwapAmountOutRoute.typeUrl);
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        tokenInMaxAmount: "",
        tokenOut: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSwapExactAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
    aminoType: "osmosis/gamm/swap-exact-amount-out",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountOut.typeUrl || typeof o.sender === "string" && Array.isArray(o.routes) && (!o.routes.length || exports.SwapAmountOutRoute.is(o.routes[0])) && typeof o.tokenInMaxAmount === "string" && coin_1.Coin.is(o.tokenOut));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountOut.typeUrl || typeof o.sender === "string" && Array.isArray(o.routes) && (!o.routes.length || exports.SwapAmountOutRoute.isSDK(o.routes[0])) && typeof o.token_in_max_amount === "string" && coin_1.Coin.isSDK(o.token_out));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountOut.typeUrl || typeof o.sender === "string" && Array.isArray(o.routes) && (!o.routes.length || exports.SwapAmountOutRoute.isAmino(o.routes[0])) && typeof o.token_in_max_amount === "string" && coin_1.Coin.isAmino(o.token_out));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            exports.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(exports.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountOutRoute.fromJSON(e)) : [],
            tokenInMaxAmount: (0, helpers_1.isSet)(object.tokenInMaxAmount) ? String(object.tokenInMaxAmount) : "",
            tokenOut: (0, helpers_1.isSet)(object.tokenOut) ? coin_1.Coin.fromJSON(object.tokenOut) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountOutRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? coin_1.Coin.toJSON(message.tokenOut) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => exports.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? coin_1.Coin.fromPartial(object.tokenOut) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountOutRoute.fromSDK(e)) : [],
            tokenInMaxAmount: object?.token_in_max_amount,
            tokenOut: object.token_out ? coin_1.Coin.fromSDK(object.token_out) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountOutRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in_max_amount = message.tokenInMaxAmount;
        message.tokenOut !== undefined && (obj.token_out = message.tokenOut ? coin_1.Coin.toSDK(message.tokenOut) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => exports.SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in_max_amount = message.tokenInMaxAmount;
        obj.token_out = message.tokenOut ? coin_1.Coin.toAmino(message.tokenOut) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-out",
            value: exports.MsgSwapExactAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
            value: exports.MsgSwapExactAmountOut.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountOut.typeUrl, exports.MsgSwapExactAmountOut);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountOut.aminoType, exports.MsgSwapExactAmountOut.typeUrl);
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
exports.MsgSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
    aminoType: "osmosis/gamm/swap-exact-amount-out-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountOutResponse.typeUrl || typeof o.tokenInAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
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
            tokenInAmount: (0, helpers_1.isSet)(object.tokenInAmount) ? String(object.tokenInAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            tokenInAmount: object?.token_in_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.token_in_amount = message.tokenInAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOutResponse();
        if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in_amount = message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-out-response",
            value: exports.MsgSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
            value: exports.MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountOutResponse.typeUrl, exports.MsgSwapExactAmountOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountOutResponse.aminoType, exports.MsgSwapExactAmountOutResponse.typeUrl);
function createBaseMsgJoinSwapExternAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: coin_1.Coin.fromPartial({}),
        shareOutMinAmount: ""
    };
}
exports.MsgJoinSwapExternAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    aminoType: "osmosis/gamm/join-swap-extern-amount-in",
    is(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapExternAmountIn.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && coin_1.Coin.is(o.tokenIn) && typeof o.shareOutMinAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapExternAmountIn.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && coin_1.Coin.isSDK(o.token_in) && typeof o.share_out_min_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapExternAmountIn.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && coin_1.Coin.isAmino(o.token_in) && typeof o.share_out_min_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareOutMinAmount !== "") {
            writer.uint32(34).string(message.shareOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountIn();
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
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareOutMinAmount = reader.string();
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
            tokenIn: (0, helpers_1.isSet)(object.tokenIn) ? coin_1.Coin.fromJSON(object.tokenIn) : undefined,
            shareOutMinAmount: (0, helpers_1.isSet)(object.shareOutMinAmount) ? String(object.shareOutMinAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? coin_1.Coin.toJSON(message.tokenIn) : undefined);
        message.shareOutMinAmount !== undefined && (obj.shareOutMinAmount = message.shareOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? coin_1.Coin.fromPartial(object.tokenIn) : undefined;
        message.shareOutMinAmount = object.shareOutMinAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id,
            tokenIn: object.token_in ? coin_1.Coin.fromSDK(object.token_in) : undefined,
            shareOutMinAmount: object?.share_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        message.tokenIn !== undefined && (obj.token_in = message.tokenIn ? coin_1.Coin.toSDK(message.tokenIn) : undefined);
        obj.share_out_min_amount = message.shareOutMinAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
        }
        if (object.share_out_min_amount !== undefined && object.share_out_min_amount !== null) {
            message.shareOutMinAmount = object.share_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        obj.share_out_min_amount = message.shareOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapExternAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in",
            value: exports.MsgJoinSwapExternAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapExternAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapExternAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
            value: exports.MsgJoinSwapExternAmountIn.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgJoinSwapExternAmountIn.typeUrl, exports.MsgJoinSwapExternAmountIn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgJoinSwapExternAmountIn.aminoType, exports.MsgJoinSwapExternAmountIn.typeUrl);
function createBaseMsgJoinSwapExternAmountInResponse() {
    return {
        shareOutAmount: ""
    };
}
exports.MsgJoinSwapExternAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
    aminoType: "osmosis/gamm/join-swap-extern-amount-in-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapExternAmountInResponse.typeUrl || typeof o.shareOutAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapExternAmountInResponse.typeUrl || typeof o.share_out_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapExternAmountInResponse.typeUrl || typeof o.share_out_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
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
            shareOutAmount: (0, helpers_1.isSet)(object.shareOutAmount) ? String(object.shareOutAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            shareOutAmount: object?.share_out_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapExternAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in-response",
            value: exports.MsgJoinSwapExternAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapExternAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapExternAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
            value: exports.MsgJoinSwapExternAmountInResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgJoinSwapExternAmountInResponse.typeUrl, exports.MsgJoinSwapExternAmountInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgJoinSwapExternAmountInResponse.aminoType, exports.MsgJoinSwapExternAmountInResponse.typeUrl);
function createBaseMsgJoinSwapShareAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenInDenom: "",
        shareOutAmount: "",
        tokenInMaxAmount: ""
    };
}
exports.MsgJoinSwapShareAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
    aminoType: "osmosis/gamm/join-swap-share-amount-out",
    is(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapShareAmountOut.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && typeof o.tokenInDenom === "string" && typeof o.shareOutAmount === "string" && typeof o.tokenInMaxAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapShareAmountOut.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string" && typeof o.share_out_amount === "string" && typeof o.token_in_max_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapShareAmountOut.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string" && typeof o.share_out_amount === "string" && typeof o.token_in_max_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(34).string(message.shareOutAmount);
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(42).string(message.tokenInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOut();
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
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.shareOutAmount = reader.string();
                    break;
                case 5:
                    message.tokenInMaxAmount = reader.string();
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
            tokenInDenom: (0, helpers_1.isSet)(object.tokenInDenom) ? String(object.tokenInDenom) : "",
            shareOutAmount: (0, helpers_1.isSet)(object.shareOutAmount) ? String(object.shareOutAmount) : "",
            tokenInMaxAmount: (0, helpers_1.isSet)(object.tokenInMaxAmount) ? String(object.tokenInMaxAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapShareAmountOut();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id,
            tokenInDenom: object?.token_in_denom,
            shareOutAmount: object?.share_out_amount,
            tokenInMaxAmount: object?.token_in_max_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        obj.token_in_denom = message.tokenInDenom;
        obj.share_out_amount = message.shareOutAmount;
        obj.token_in_max_amount = message.tokenInMaxAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapShareAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.token_in_denom = message.tokenInDenom;
        obj.share_out_amount = message.shareOutAmount;
        obj.token_in_max_amount = message.tokenInMaxAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapShareAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out",
            value: exports.MsgJoinSwapShareAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapShareAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapShareAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
            value: exports.MsgJoinSwapShareAmountOut.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgJoinSwapShareAmountOut.typeUrl, exports.MsgJoinSwapShareAmountOut);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgJoinSwapShareAmountOut.aminoType, exports.MsgJoinSwapShareAmountOut.typeUrl);
function createBaseMsgJoinSwapShareAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
exports.MsgJoinSwapShareAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
    aminoType: "osmosis/gamm/join-swap-share-amount-out-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapShareAmountOutResponse.typeUrl || typeof o.tokenInAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapShareAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgJoinSwapShareAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
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
            tokenInAmount: (0, helpers_1.isSet)(object.tokenInAmount) ? String(object.tokenInAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            tokenInAmount: object?.token_in_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.token_in_amount = message.tokenInAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
        if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in_amount = message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapShareAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out-response",
            value: exports.MsgJoinSwapShareAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapShareAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapShareAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
            value: exports.MsgJoinSwapShareAmountOutResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgJoinSwapShareAmountOutResponse.typeUrl, exports.MsgJoinSwapShareAmountOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgJoinSwapShareAmountOutResponse.aminoType, exports.MsgJoinSwapShareAmountOutResponse.typeUrl);
function createBaseMsgExitSwapShareAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOutDenom: "",
        shareInAmount: "",
        tokenOutMinAmount: ""
    };
}
exports.MsgExitSwapShareAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    aminoType: "osmosis/gamm/exit-swap-share-amount-in",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapShareAmountIn.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && typeof o.tokenOutDenom === "string" && typeof o.shareInAmount === "string" && typeof o.tokenOutMinAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapShareAmountIn.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_out_denom === "string" && typeof o.share_in_amount === "string" && typeof o.token_out_min_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapShareAmountIn.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_out_denom === "string" && typeof o.share_in_amount === "string" && typeof o.token_out_min_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(34).string(message.shareInAmount);
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(42).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountIn();
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
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.shareInAmount = reader.string();
                    break;
                case 5:
                    message.tokenOutMinAmount = reader.string();
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
            tokenOutDenom: (0, helpers_1.isSet)(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
            shareInAmount: (0, helpers_1.isSet)(object.shareInAmount) ? String(object.shareInAmount) : "",
            tokenOutMinAmount: (0, helpers_1.isSet)(object.tokenOutMinAmount) ? String(object.tokenOutMinAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
        message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapShareAmountIn();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id,
            tokenOutDenom: object?.token_out_denom,
            shareInAmount: object?.share_in_amount,
            tokenOutMinAmount: object?.token_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        obj.token_out_denom = message.tokenOutDenom;
        obj.share_in_amount = message.shareInAmount;
        obj.token_out_min_amount = message.tokenOutMinAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapShareAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        if (object.token_out_min_amount !== undefined && object.token_out_min_amount !== null) {
            message.tokenOutMinAmount = object.token_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.token_out_denom = message.tokenOutDenom;
        obj.share_in_amount = message.shareInAmount;
        obj.token_out_min_amount = message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapShareAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in",
            value: exports.MsgExitSwapShareAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapShareAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapShareAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
            value: exports.MsgExitSwapShareAmountIn.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExitSwapShareAmountIn.typeUrl, exports.MsgExitSwapShareAmountIn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExitSwapShareAmountIn.aminoType, exports.MsgExitSwapShareAmountIn.typeUrl);
function createBaseMsgExitSwapShareAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
exports.MsgExitSwapShareAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
    aminoType: "osmosis/gamm/exit-swap-share-amount-in-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapShareAmountInResponse.typeUrl || typeof o.tokenOutAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapShareAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapShareAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
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
            tokenOutAmount: (0, helpers_1.isSet)(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapShareAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            tokenOutAmount: object?.token_out_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.token_out_amount = message.tokenOutAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapShareAmountInResponse();
        if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out_amount = message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapShareAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in-response",
            value: exports.MsgExitSwapShareAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapShareAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapShareAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
            value: exports.MsgExitSwapShareAmountInResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExitSwapShareAmountInResponse.typeUrl, exports.MsgExitSwapShareAmountInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExitSwapShareAmountInResponse.aminoType, exports.MsgExitSwapShareAmountInResponse.typeUrl);
function createBaseMsgExitSwapExternAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOut: coin_1.Coin.fromPartial({}),
        shareInMaxAmount: ""
    };
}
exports.MsgExitSwapExternAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
    aminoType: "osmosis/gamm/exit-swap-extern-amount-out",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapExternAmountOut.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && coin_1.Coin.is(o.tokenOut) && typeof o.shareInMaxAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapExternAmountOut.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && coin_1.Coin.isSDK(o.token_out) && typeof o.share_in_max_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapExternAmountOut.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && coin_1.Coin.isAmino(o.token_out) && typeof o.share_in_max_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareInMaxAmount !== "") {
            writer.uint32(34).string(message.shareInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOut();
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
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareInMaxAmount = reader.string();
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
            tokenOut: (0, helpers_1.isSet)(object.tokenOut) ? coin_1.Coin.fromJSON(object.tokenOut) : undefined,
            shareInMaxAmount: (0, helpers_1.isSet)(object.shareInMaxAmount) ? String(object.shareInMaxAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? coin_1.Coin.toJSON(message.tokenOut) : undefined);
        message.shareInMaxAmount !== undefined && (obj.shareInMaxAmount = message.shareInMaxAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? coin_1.Coin.fromPartial(object.tokenOut) : undefined;
        message.shareInMaxAmount = object.shareInMaxAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id,
            tokenOut: object.token_out ? coin_1.Coin.fromSDK(object.token_out) : undefined,
            shareInMaxAmount: object?.share_in_max_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        message.tokenOut !== undefined && (obj.token_out = message.tokenOut ? coin_1.Coin.toSDK(message.tokenOut) : undefined);
        obj.share_in_max_amount = message.shareInMaxAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
        }
        if (object.share_in_max_amount !== undefined && object.share_in_max_amount !== null) {
            message.shareInMaxAmount = object.share_in_max_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.token_out = message.tokenOut ? coin_1.Coin.toAmino(message.tokenOut) : undefined;
        obj.share_in_max_amount = message.shareInMaxAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapExternAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out",
            value: exports.MsgExitSwapExternAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapExternAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapExternAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
            value: exports.MsgExitSwapExternAmountOut.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExitSwapExternAmountOut.typeUrl, exports.MsgExitSwapExternAmountOut);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExitSwapExternAmountOut.aminoType, exports.MsgExitSwapExternAmountOut.typeUrl);
function createBaseMsgExitSwapExternAmountOutResponse() {
    return {
        shareInAmount: ""
    };
}
exports.MsgExitSwapExternAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
    aminoType: "osmosis/gamm/exit-swap-extern-amount-out-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapExternAmountOutResponse.typeUrl || typeof o.shareInAmount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapExternAmountOutResponse.typeUrl || typeof o.share_in_amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExitSwapExternAmountOutResponse.typeUrl || typeof o.share_in_amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareInAmount !== "") {
            writer.uint32(10).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareInAmount = reader.string();
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
            shareInAmount: (0, helpers_1.isSet)(object.shareInAmount) ? String(object.shareInAmount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        message.shareInAmount = object.shareInAmount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            shareInAmount: object?.share_in_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_in_amount = message.shareInAmount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_in_amount = message.shareInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapExternAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out-response",
            value: exports.MsgExitSwapExternAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapExternAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapExternAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
            value: exports.MsgExitSwapExternAmountOutResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExitSwapExternAmountOutResponse.typeUrl, exports.MsgExitSwapExternAmountOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExitSwapExternAmountOutResponse.aminoType, exports.MsgExitSwapExternAmountOutResponse.typeUrl);
