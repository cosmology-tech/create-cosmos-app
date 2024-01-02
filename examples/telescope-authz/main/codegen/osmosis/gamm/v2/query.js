"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySpotPriceResponse = exports.QuerySpotPriceRequest = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQuerySpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: "",
        quoteAssetDenom: ""
    };
}
exports.QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
    aminoType: "osmosis/gamm/v2/query-spot-price-request",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySpotPriceRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.baseAssetDenom === "string" && typeof o.quoteAssetDenom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAssetDenom !== "") {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        if (message.quoteAssetDenom !== "") {
            writer.uint32(26).string(message.quoteAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                case 3:
                    message.quoteAssetDenom = reader.string();
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
            baseAssetDenom: (0, helpers_1.isSet)(object.baseAssetDenom) ? String(object.baseAssetDenom) : "",
            quoteAssetDenom: (0, helpers_1.isSet)(object.quoteAssetDenom) ? String(object.quoteAssetDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
        message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.baseAssetDenom = object.baseAssetDenom ?? "";
        message.quoteAssetDenom = object.quoteAssetDenom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            poolId: object?.pool_id,
            baseAssetDenom: object?.base_asset_denom,
            quoteAssetDenom: object?.quote_asset_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.poolId;
        obj.base_asset_denom = message.baseAssetDenom;
        obj.quote_asset_denom = message.quoteAssetDenom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
            message.baseAssetDenom = object.base_asset_denom;
        }
        if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
            message.quoteAssetDenom = object.quote_asset_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.base_asset_denom = message.baseAssetDenom;
        obj.quote_asset_denom = message.quoteAssetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/v2/query-spot-price-request",
            value: exports.QuerySpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
            value: exports.QuerySpotPriceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySpotPriceRequest.typeUrl, exports.QuerySpotPriceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySpotPriceRequest.aminoType, exports.QuerySpotPriceRequest.typeUrl);
function createBaseQuerySpotPriceResponse() {
    return {
        spotPrice: ""
    };
}
exports.QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
    aminoType: "osmosis/gamm/v2/query-spot-price-response",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySpotPriceResponse.typeUrl || typeof o.spotPrice === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = reader.string();
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
            spotPrice: (0, helpers_1.isSet)(object.spotPrice) ? String(object.spotPrice) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceResponse();
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            spotPrice: object?.spot_price
        };
    },
    toSDK(message) {
        const obj = {};
        obj.spot_price = message.spotPrice;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceResponse();
        if (object.spot_price !== undefined && object.spot_price !== null) {
            message.spotPrice = object.spot_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spotPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/v2/query-spot-price-response",
            value: exports.QuerySpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
            value: exports.QuerySpotPriceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySpotPriceResponse.typeUrl, exports.QuerySpotPriceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySpotPriceResponse.aminoType, exports.QuerySpotPriceResponse.typeUrl);
