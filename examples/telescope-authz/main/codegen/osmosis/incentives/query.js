"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryLockableDurationsResponse = exports.QueryLockableDurationsRequest = exports.RewardsEstResponse = exports.RewardsEstRequest = exports.UpcomingGaugesPerDenomResponse = exports.UpcomingGaugesPerDenomRequest = exports.UpcomingGaugesResponse = exports.UpcomingGaugesRequest = exports.ActiveGaugesPerDenomResponse = exports.ActiveGaugesPerDenomRequest = exports.ActiveGaugesResponse = exports.ActiveGaugesRequest = exports.GaugesResponse = exports.GaugesRequest = exports.GaugeByIDResponse = exports.GaugeByIDRequest = exports.ModuleToDistributeCoinsResponse = exports.ModuleToDistributeCoinsRequest = void 0;
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const gauge_1 = require("./gauge");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseModuleToDistributeCoinsRequest() {
    return {};
}
exports.ModuleToDistributeCoinsRequest = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
    aminoType: "osmosis/incentives/module-to-distribute-coins-request",
    is(o) {
        return o && o.$typeUrl === exports.ModuleToDistributeCoinsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ModuleToDistributeCoinsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ModuleToDistributeCoinsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsRequest();
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
        const message = createBaseModuleToDistributeCoinsRequest();
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
        const message = createBaseModuleToDistributeCoinsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleToDistributeCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/module-to-distribute-coins-request",
            value: exports.ModuleToDistributeCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleToDistributeCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleToDistributeCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
            value: exports.ModuleToDistributeCoinsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleToDistributeCoinsRequest.typeUrl, exports.ModuleToDistributeCoinsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleToDistributeCoinsRequest.aminoType, exports.ModuleToDistributeCoinsRequest.typeUrl);
function createBaseModuleToDistributeCoinsResponse() {
    return {
        coins: []
    };
}
exports.ModuleToDistributeCoinsResponse = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
    aminoType: "osmosis/incentives/module-to-distribute-coins-response",
    is(o) {
        return o && (o.$typeUrl === exports.ModuleToDistributeCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleToDistributeCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleToDistributeCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleToDistributeCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/module-to-distribute-coins-response",
            value: exports.ModuleToDistributeCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleToDistributeCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleToDistributeCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
            value: exports.ModuleToDistributeCoinsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleToDistributeCoinsResponse.typeUrl, exports.ModuleToDistributeCoinsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleToDistributeCoinsResponse.aminoType, exports.ModuleToDistributeCoinsResponse.typeUrl);
function createBaseGaugeByIDRequest() {
    return {
        id: BigInt(0)
    };
}
exports.GaugeByIDRequest = {
    typeUrl: "/osmosis.incentives.GaugeByIDRequest",
    aminoType: "osmosis/incentives/gauge-by-id-request",
    is(o) {
        return o && (o.$typeUrl === exports.GaugeByIDRequest.typeUrl || typeof o.id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GaugeByIDRequest.typeUrl || typeof o.id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GaugeByIDRequest.typeUrl || typeof o.id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGaugeByIDRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugeByIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge-by-id-request",
            value: exports.GaugeByIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugeByIDRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GaugeByIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugeByIDRequest",
            value: exports.GaugeByIDRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GaugeByIDRequest.typeUrl, exports.GaugeByIDRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GaugeByIDRequest.aminoType, exports.GaugeByIDRequest.typeUrl);
function createBaseGaugeByIDResponse() {
    return {
        gauge: undefined
    };
}
exports.GaugeByIDResponse = {
    typeUrl: "/osmosis.incentives.GaugeByIDResponse",
    aminoType: "osmosis/incentives/gauge-by-id-response",
    is(o) {
        return o && o.$typeUrl === exports.GaugeByIDResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GaugeByIDResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GaugeByIDResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gauge !== undefined) {
            gauge_1.Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge = gauge_1.Gauge.decode(reader, reader.uint32());
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
            gauge: (0, helpers_1.isSet)(object.gauge) ? gauge_1.Gauge.fromJSON(object.gauge) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.gauge !== undefined && (obj.gauge = message.gauge ? gauge_1.Gauge.toJSON(message.gauge) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDResponse();
        message.gauge = object.gauge !== undefined && object.gauge !== null ? gauge_1.Gauge.fromPartial(object.gauge) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            gauge: object.gauge ? gauge_1.Gauge.fromSDK(object.gauge) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.gauge !== undefined && (obj.gauge = message.gauge ? gauge_1.Gauge.toSDK(message.gauge) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGaugeByIDResponse();
        if (object.gauge !== undefined && object.gauge !== null) {
            message.gauge = gauge_1.Gauge.fromAmino(object.gauge);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge = message.gauge ? gauge_1.Gauge.toAmino(message.gauge) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugeByIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge-by-id-response",
            value: exports.GaugeByIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugeByIDResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GaugeByIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugeByIDResponse",
            value: exports.GaugeByIDResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GaugeByIDResponse.typeUrl, exports.GaugeByIDResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GaugeByIDResponse.aminoType, exports.GaugeByIDResponse.typeUrl);
function createBaseGaugesRequest() {
    return {
        pagination: undefined
    };
}
exports.GaugesRequest = {
    typeUrl: "/osmosis.incentives.GaugesRequest",
    aminoType: "osmosis/incentives/gauges-request",
    is(o) {
        return o && o.$typeUrl === exports.GaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GaugesRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauges-request",
            value: exports.GaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugesRequest",
            value: exports.GaugesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GaugesRequest.typeUrl, exports.GaugesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GaugesRequest.aminoType, exports.GaugesRequest.typeUrl);
function createBaseGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.GaugesResponse = {
    typeUrl: "/osmosis.incentives.GaugesResponse",
    aminoType: "osmosis/incentives/gauges-response",
    is(o) {
        return o && (o.$typeUrl === exports.GaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.is(o.data[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isSDK(o.data[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isAmino(o.data[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toSDK(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauges-response",
            value: exports.GaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugesResponse",
            value: exports.GaugesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GaugesResponse.typeUrl, exports.GaugesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GaugesResponse.aminoType, exports.GaugesResponse.typeUrl);
function createBaseActiveGaugesRequest() {
    return {
        pagination: undefined
    };
}
exports.ActiveGaugesRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
    aminoType: "osmosis/incentives/active-gauges-request",
    is(o) {
        return o && o.$typeUrl === exports.ActiveGaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ActiveGaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ActiveGaugesRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-request",
            value: exports.ActiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
            value: exports.ActiveGaugesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ActiveGaugesRequest.typeUrl, exports.ActiveGaugesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ActiveGaugesRequest.aminoType, exports.ActiveGaugesRequest.typeUrl);
function createBaseActiveGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.ActiveGaugesResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
    aminoType: "osmosis/incentives/active-gauges-response",
    is(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.is(o.data[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isSDK(o.data[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isAmino(o.data[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toSDK(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-response",
            value: exports.ActiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
            value: exports.ActiveGaugesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ActiveGaugesResponse.typeUrl, exports.ActiveGaugesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ActiveGaugesResponse.aminoType, exports.ActiveGaugesResponse.typeUrl);
function createBaseActiveGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
exports.ActiveGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
    aminoType: "osmosis/incentives/active-gauges-per-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesPerDenomRequest();
        message.denom = object.denom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-per-denom-request",
            value: exports.ActiveGaugesPerDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
            value: exports.ActiveGaugesPerDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ActiveGaugesPerDenomRequest.typeUrl, exports.ActiveGaugesPerDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ActiveGaugesPerDenomRequest.aminoType, exports.ActiveGaugesPerDenomRequest.typeUrl);
function createBaseActiveGaugesPerDenomResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.ActiveGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
    aminoType: "osmosis/incentives/active-gauges-per-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesPerDenomResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.is(o.data[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesPerDenomResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isSDK(o.data[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ActiveGaugesPerDenomResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isAmino(o.data[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toSDK(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-per-denom-response",
            value: exports.ActiveGaugesPerDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
            value: exports.ActiveGaugesPerDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ActiveGaugesPerDenomResponse.typeUrl, exports.ActiveGaugesPerDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ActiveGaugesPerDenomResponse.aminoType, exports.ActiveGaugesPerDenomResponse.typeUrl);
function createBaseUpcomingGaugesRequest() {
    return {
        pagination: undefined
    };
}
exports.UpcomingGaugesRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
    aminoType: "osmosis/incentives/upcoming-gauges-request",
    is(o) {
        return o && o.$typeUrl === exports.UpcomingGaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.UpcomingGaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.UpcomingGaugesRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-request",
            value: exports.UpcomingGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
            value: exports.UpcomingGaugesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpcomingGaugesRequest.typeUrl, exports.UpcomingGaugesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpcomingGaugesRequest.aminoType, exports.UpcomingGaugesRequest.typeUrl);
function createBaseUpcomingGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.UpcomingGaugesResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
    aminoType: "osmosis/incentives/upcoming-gauges-response",
    is(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.is(o.data[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isSDK(o.data[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isAmino(o.data[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toSDK(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-response",
            value: exports.UpcomingGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
            value: exports.UpcomingGaugesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpcomingGaugesResponse.typeUrl, exports.UpcomingGaugesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpcomingGaugesResponse.aminoType, exports.UpcomingGaugesResponse.typeUrl);
function createBaseUpcomingGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
exports.UpcomingGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
    aminoType: "osmosis/incentives/upcoming-gauges-per-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesPerDenomRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesPerDenomRequest();
        message.denom = object.denom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-per-denom-request",
            value: exports.UpcomingGaugesPerDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
            value: exports.UpcomingGaugesPerDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpcomingGaugesPerDenomRequest.typeUrl, exports.UpcomingGaugesPerDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpcomingGaugesPerDenomRequest.aminoType, exports.UpcomingGaugesPerDenomRequest.typeUrl);
function createBaseUpcomingGaugesPerDenomResponse() {
    return {
        upcomingGauges: [],
        pagination: undefined
    };
}
exports.UpcomingGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
    aminoType: "osmosis/incentives/upcoming-gauges-per-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesPerDenomResponse.typeUrl || Array.isArray(o.upcomingGauges) && (!o.upcomingGauges.length || gauge_1.Gauge.is(o.upcomingGauges[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesPerDenomResponse.typeUrl || Array.isArray(o.upcoming_gauges) && (!o.upcoming_gauges.length || gauge_1.Gauge.isSDK(o.upcoming_gauges[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpcomingGaugesPerDenomResponse.typeUrl || Array.isArray(o.upcoming_gauges) && (!o.upcoming_gauges.length || gauge_1.Gauge.isAmino(o.upcoming_gauges[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.upcomingGauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upcomingGauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            upcomingGauges: Array.isArray(object?.upcomingGauges) ? object.upcomingGauges.map((e) => gauge_1.Gauge.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.upcomingGauges) {
            obj.upcomingGauges = message.upcomingGauges.map(e => e ? gauge_1.Gauge.toJSON(e) : undefined);
        }
        else {
            obj.upcomingGauges = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges = object.upcomingGauges?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            upcomingGauges: Array.isArray(object?.upcoming_gauges) ? object.upcoming_gauges.map((e) => gauge_1.Gauge.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.upcomingGauges) {
            obj.upcoming_gauges = message.upcomingGauges.map(e => e ? gauge_1.Gauge.toSDK(e) : undefined);
        }
        else {
            obj.upcoming_gauges = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges = object.upcoming_gauges?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.upcomingGauges) {
            obj.upcoming_gauges = message.upcomingGauges.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.upcoming_gauges = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-per-denom-response",
            value: exports.UpcomingGaugesPerDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
            value: exports.UpcomingGaugesPerDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpcomingGaugesPerDenomResponse.typeUrl, exports.UpcomingGaugesPerDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpcomingGaugesPerDenomResponse.aminoType, exports.UpcomingGaugesPerDenomResponse.typeUrl);
function createBaseRewardsEstRequest() {
    return {
        owner: "",
        lockIds: [],
        endEpoch: BigInt(0)
    };
}
exports.RewardsEstRequest = {
    typeUrl: "/osmosis.incentives.RewardsEstRequest",
    aminoType: "osmosis/incentives/rewards-est-request",
    is(o) {
        return o && (o.$typeUrl === exports.RewardsEstRequest.typeUrl || typeof o.owner === "string" && Array.isArray(o.lockIds) && (!o.lockIds.length || typeof o.lockIds[0] === "bigint") && typeof o.endEpoch === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RewardsEstRequest.typeUrl || typeof o.owner === "string" && Array.isArray(o.lock_ids) && (!o.lock_ids.length || typeof o.lock_ids[0] === "bigint") && typeof o.end_epoch === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RewardsEstRequest.typeUrl || typeof o.owner === "string" && Array.isArray(o.lock_ids) && (!o.lock_ids.length || typeof o.lock_ids[0] === "bigint") && typeof o.end_epoch === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.lockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.endEpoch !== BigInt(0)) {
            writer.uint32(24).int64(message.endEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.lockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.lockIds.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.endEpoch = reader.int64();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            lockIds: Array.isArray(object?.lockIds) ? object.lockIds.map((e) => BigInt(e.toString())) : [],
            endEpoch: (0, helpers_1.isSet)(object.endEpoch) ? BigInt(object.endEpoch.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.lockIds) {
            obj.lockIds = message.lockIds.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.lockIds = [];
        }
        message.endEpoch !== undefined && (obj.endEpoch = (message.endEpoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstRequest();
        message.owner = object.owner ?? "";
        message.lockIds = object.lockIds?.map(e => BigInt(e.toString())) || [];
        message.endEpoch = object.endEpoch !== undefined && object.endEpoch !== null ? BigInt(object.endEpoch.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            lockIds: Array.isArray(object?.lock_ids) ? object.lock_ids.map((e) => e) : [],
            endEpoch: object?.end_epoch
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.lockIds) {
            obj.lock_ids = message.lockIds.map(e => e);
        }
        else {
            obj.lock_ids = [];
        }
        obj.end_epoch = message.endEpoch;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRewardsEstRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.lockIds = object.lock_ids?.map(e => BigInt(e)) || [];
        if (object.end_epoch !== undefined && object.end_epoch !== null) {
            message.endEpoch = BigInt(object.end_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.lockIds) {
            obj.lock_ids = message.lockIds.map(e => e.toString());
        }
        else {
            obj.lock_ids = [];
        }
        obj.end_epoch = message.endEpoch ? message.endEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RewardsEstRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/rewards-est-request",
            value: exports.RewardsEstRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RewardsEstRequest.decode(message.value);
    },
    toProto(message) {
        return exports.RewardsEstRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.RewardsEstRequest",
            value: exports.RewardsEstRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RewardsEstRequest.typeUrl, exports.RewardsEstRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RewardsEstRequest.aminoType, exports.RewardsEstRequest.typeUrl);
function createBaseRewardsEstResponse() {
    return {
        coins: []
    };
}
exports.RewardsEstResponse = {
    typeUrl: "/osmosis.incentives.RewardsEstResponse",
    aminoType: "osmosis/incentives/rewards-est-response",
    is(o) {
        return o && (o.$typeUrl === exports.RewardsEstResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RewardsEstResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RewardsEstResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RewardsEstResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/rewards-est-response",
            value: exports.RewardsEstResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RewardsEstResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RewardsEstResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.RewardsEstResponse",
            value: exports.RewardsEstResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RewardsEstResponse.typeUrl, exports.RewardsEstResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RewardsEstResponse.aminoType, exports.RewardsEstResponse.typeUrl);
function createBaseQueryLockableDurationsRequest() {
    return {};
}
exports.QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
    aminoType: "osmosis/incentives/query-lockable-durations-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryLockableDurationsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryLockableDurationsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryLockableDurationsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsRequest();
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
        const message = createBaseQueryLockableDurationsRequest();
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
        const message = createBaseQueryLockableDurationsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLockableDurationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/query-lockable-durations-request",
            value: exports.QueryLockableDurationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLockableDurationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockableDurationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
            value: exports.QueryLockableDurationsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryLockableDurationsRequest.typeUrl, exports.QueryLockableDurationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryLockableDurationsRequest.aminoType, exports.QueryLockableDurationsRequest.typeUrl);
function createBaseQueryLockableDurationsResponse() {
    return {
        lockableDurations: []
    };
}
exports.QueryLockableDurationsResponse = {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
    aminoType: "osmosis/incentives/query-lockable-durations-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryLockableDurationsResponse.typeUrl || Array.isArray(o.lockableDurations) && (!o.lockableDurations.length || duration_1.Duration.is(o.lockableDurations[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryLockableDurationsResponse.typeUrl || Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || duration_1.Duration.isSDK(o.lockable_durations[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryLockableDurationsResponse.typeUrl || Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || duration_1.Duration.isAmino(o.lockable_durations[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
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
            lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e) => duration_1.Duration.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockableDurations = message.lockableDurations.map(e => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockableDurations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockableDurations = object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockableDurations = object.lockable_durations?.map(e => duration_1.Duration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLockableDurationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/query-lockable-durations-response",
            value: exports.QueryLockableDurationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLockableDurationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockableDurationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
            value: exports.QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryLockableDurationsResponse.typeUrl, exports.QueryLockableDurationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryLockableDurationsResponse.aminoType, exports.QueryLockableDurationsResponse.typeUrl);
