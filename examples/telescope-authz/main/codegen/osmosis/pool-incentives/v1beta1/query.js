"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryExternalIncentiveGaugesResponse = exports.QueryExternalIncentiveGaugesRequest = exports.QueryIncentivizedPoolsResponse = exports.IncentivizedPool = exports.QueryIncentivizedPoolsRequest = exports.QueryLockableDurationsResponse = exports.QueryLockableDurationsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDistrInfoResponse = exports.QueryDistrInfoRequest = exports.QueryGaugeIdsResponse_GaugeIdWithDuration = exports.QueryGaugeIdsResponse = exports.QueryGaugeIdsRequest = void 0;
const duration_1 = require("../../../google/protobuf/duration");
const incentives_1 = require("./incentives");
const gauge_1 = require("../../incentives/gauge");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryGaugeIdsRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryGaugeIdsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
    aminoType: "osmosis/poolincentives/query-gauge-ids-request",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsRequest.typeUrl || typeof o.poolId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsRequest.typeUrl || typeof o.pool_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsRequest.typeUrl || typeof o.pool_id === "bigint");
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
        const message = createBaseQueryGaugeIdsRequest();
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
        const message = createBaseQueryGaugeIdsRequest();
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
        const message = createBaseQueryGaugeIdsRequest();
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
        return exports.QueryGaugeIdsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-request",
            value: exports.QueryGaugeIdsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
            value: exports.QueryGaugeIdsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGaugeIdsRequest.typeUrl, exports.QueryGaugeIdsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGaugeIdsRequest.aminoType, exports.QueryGaugeIdsRequest.typeUrl);
function createBaseQueryGaugeIdsResponse() {
    return {
        gaugeIdsWithDuration: []
    };
}
exports.QueryGaugeIdsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
    aminoType: "osmosis/poolincentives/query-gauge-ids-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsResponse.typeUrl || Array.isArray(o.gaugeIdsWithDuration) && (!o.gaugeIdsWithDuration.length || exports.QueryGaugeIdsResponse_GaugeIdWithDuration.is(o.gaugeIdsWithDuration[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsResponse.typeUrl || Array.isArray(o.gauge_ids_with_duration) && (!o.gauge_ids_with_duration.length || exports.QueryGaugeIdsResponse_GaugeIdWithDuration.isSDK(o.gauge_ids_with_duration[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsResponse.typeUrl || Array.isArray(o.gauge_ids_with_duration) && (!o.gauge_ids_with_duration.length || exports.QueryGaugeIdsResponse_GaugeIdWithDuration.isAmino(o.gauge_ids_with_duration[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.gaugeIdsWithDuration) {
            exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeIdsWithDuration.push(exports.QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
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
            gaugeIdsWithDuration: Array.isArray(object?.gaugeIdsWithDuration) ? object.gaugeIdsWithDuration.map((e) => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.gaugeIdsWithDuration) {
            obj.gaugeIdsWithDuration = message.gaugeIdsWithDuration.map(e => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toJSON(e) : undefined);
        }
        else {
            obj.gaugeIdsWithDuration = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gaugeIdsWithDuration = object.gaugeIdsWithDuration?.map(e => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            gaugeIdsWithDuration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e) => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.gaugeIdsWithDuration) {
            obj.gauge_ids_with_duration = message.gaugeIdsWithDuration.map(e => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toSDK(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gaugeIdsWithDuration = object.gauge_ids_with_duration?.map(e => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.gaugeIdsWithDuration) {
            obj.gauge_ids_with_duration = message.gaugeIdsWithDuration.map(e => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-response",
            value: exports.QueryGaugeIdsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
            value: exports.QueryGaugeIdsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGaugeIdsResponse.typeUrl, exports.QueryGaugeIdsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGaugeIdsResponse.aminoType, exports.QueryGaugeIdsResponse.typeUrl);
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration() {
    return {
        gaugeId: BigInt(0),
        duration: duration_1.Duration.fromPartial({}),
        gaugeIncentivePercentage: ""
    };
}
exports.QueryGaugeIdsResponse_GaugeIdWithDuration = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
    aminoType: "osmosis/poolincentives/gauge-id-with-duration",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl || typeof o.gaugeId === "bigint" && duration_1.Duration.is(o.duration) && typeof o.gaugeIncentivePercentage === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl || typeof o.gauge_id === "bigint" && duration_1.Duration.isSDK(o.duration) && typeof o.gauge_incentive_percentage === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl || typeof o.gauge_id === "bigint" && duration_1.Duration.isAmino(o.duration) && typeof o.gauge_incentive_percentage === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeIncentivePercentage !== "") {
            writer.uint32(26).string(message.gaugeIncentivePercentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gaugeIncentivePercentage = reader.string();
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
            gaugeId: (0, helpers_1.isSet)(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0),
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            gaugeIncentivePercentage: (0, helpers_1.isSet)(object.gaugeIncentivePercentage) ? String(object.gaugeIncentivePercentage) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.gaugeIncentivePercentage !== undefined && (obj.gaugeIncentivePercentage = message.gaugeIncentivePercentage);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.gaugeIncentivePercentage = object.gaugeIncentivePercentage ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            gaugeId: object?.gauge_id,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            gaugeIncentivePercentage: object?.gauge_incentive_percentage
        };
    },
    toSDK(message) {
        const obj = {};
        obj.gauge_id = message.gaugeId;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        obj.gauge_incentive_percentage = message.gaugeIncentivePercentage;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.gauge_incentive_percentage !== undefined && object.gauge_incentive_percentage !== null) {
            message.gaugeIncentivePercentage = object.gauge_incentive_percentage;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.gauge_incentive_percentage = message.gaugeIncentivePercentage;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/gauge-id-with-duration",
            value: exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
            value: exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl, exports.QueryGaugeIdsResponse_GaugeIdWithDuration);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGaugeIdsResponse_GaugeIdWithDuration.aminoType, exports.QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl);
function createBaseQueryDistrInfoRequest() {
    return {};
}
exports.QueryDistrInfoRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
    aminoType: "osmosis/poolincentives/query-distr-info-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryDistrInfoRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryDistrInfoRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryDistrInfoRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoRequest();
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
        const message = createBaseQueryDistrInfoRequest();
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
        const message = createBaseQueryDistrInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDistrInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-request",
            value: exports.QueryDistrInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDistrInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDistrInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
            value: exports.QueryDistrInfoRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDistrInfoRequest.typeUrl, exports.QueryDistrInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDistrInfoRequest.aminoType, exports.QueryDistrInfoRequest.typeUrl);
function createBaseQueryDistrInfoResponse() {
    return {
        distrInfo: incentives_1.DistrInfo.fromPartial({})
    };
}
exports.QueryDistrInfoResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
    aminoType: "osmosis/poolincentives/query-distr-info-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDistrInfoResponse.typeUrl || incentives_1.DistrInfo.is(o.distrInfo));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDistrInfoResponse.typeUrl || incentives_1.DistrInfo.isSDK(o.distr_info));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDistrInfoResponse.typeUrl || incentives_1.DistrInfo.isAmino(o.distr_info));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distrInfo !== undefined) {
            incentives_1.DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distrInfo = incentives_1.DistrInfo.decode(reader, reader.uint32());
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
            distrInfo: (0, helpers_1.isSet)(object.distrInfo) ? incentives_1.DistrInfo.fromJSON(object.distrInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.distrInfo !== undefined && (obj.distrInfo = message.distrInfo ? incentives_1.DistrInfo.toJSON(message.distrInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDistrInfoResponse();
        message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? incentives_1.DistrInfo.fromPartial(object.distrInfo) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            distrInfo: object.distr_info ? incentives_1.DistrInfo.fromSDK(object.distr_info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.distrInfo !== undefined && (obj.distr_info = message.distrInfo ? incentives_1.DistrInfo.toSDK(message.distrInfo) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryDistrInfoResponse();
        if (object.distr_info !== undefined && object.distr_info !== null) {
            message.distrInfo = incentives_1.DistrInfo.fromAmino(object.distr_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distr_info = message.distrInfo ? incentives_1.DistrInfo.toAmino(message.distrInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDistrInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-response",
            value: exports.QueryDistrInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDistrInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDistrInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
            value: exports.QueryDistrInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDistrInfoResponse.typeUrl, exports.QueryDistrInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDistrInfoResponse.aminoType, exports.QueryDistrInfoResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
    aminoType: "osmosis/poolincentives/query-params-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: incentives_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
    aminoType: "osmosis/poolincentives/query-params-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || incentives_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || incentives_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || incentives_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? incentives_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? incentives_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? incentives_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = incentives_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? incentives_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryLockableDurationsRequest() {
    return {};
}
exports.QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
    aminoType: "osmosis/poolincentives/query-lockable-durations-request",
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
            type: "osmosis/poolincentives/query-lockable-durations-request",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
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
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
    aminoType: "osmosis/poolincentives/query-lockable-durations-response",
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
            type: "osmosis/poolincentives/query-lockable-durations-response",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
            value: exports.QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryLockableDurationsResponse.typeUrl, exports.QueryLockableDurationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryLockableDurationsResponse.aminoType, exports.QueryLockableDurationsResponse.typeUrl);
function createBaseQueryIncentivizedPoolsRequest() {
    return {};
}
exports.QueryIncentivizedPoolsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
    aminoType: "osmosis/poolincentives/query-incentivized-pools-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryIncentivizedPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryIncentivizedPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryIncentivizedPoolsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsRequest();
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
        const message = createBaseQueryIncentivizedPoolsRequest();
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
        const message = createBaseQueryIncentivizedPoolsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIncentivizedPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-request",
            value: exports.QueryIncentivizedPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryIncentivizedPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIncentivizedPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
            value: exports.QueryIncentivizedPoolsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryIncentivizedPoolsRequest.typeUrl, exports.QueryIncentivizedPoolsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryIncentivizedPoolsRequest.aminoType, exports.QueryIncentivizedPoolsRequest.typeUrl);
function createBaseIncentivizedPool() {
    return {
        poolId: BigInt(0),
        lockableDuration: duration_1.Duration.fromPartial({}),
        gaugeId: BigInt(0)
    };
}
exports.IncentivizedPool = {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
    aminoType: "osmosis/poolincentives/incentivized-pool",
    is(o) {
        return o && (o.$typeUrl === exports.IncentivizedPool.typeUrl || typeof o.poolId === "bigint" && duration_1.Duration.is(o.lockableDuration) && typeof o.gaugeId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.IncentivizedPool.typeUrl || typeof o.pool_id === "bigint" && duration_1.Duration.isSDK(o.lockable_duration) && typeof o.gauge_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.IncentivizedPool.typeUrl || typeof o.pool_id === "bigint" && duration_1.Duration.isAmino(o.lockable_duration) && typeof o.gauge_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.lockableDuration !== undefined) {
            duration_1.Duration.encode(message.lockableDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.lockableDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
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
            lockableDuration: (0, helpers_1.isSet)(object.lockableDuration) ? duration_1.Duration.fromJSON(object.lockableDuration) : undefined,
            gaugeId: (0, helpers_1.isSet)(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.lockableDuration !== undefined && (obj.lockableDuration = message.lockableDuration ? duration_1.Duration.toJSON(message.lockableDuration) : undefined);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentivizedPool();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.lockableDuration = object.lockableDuration !== undefined && object.lockableDuration !== null ? duration_1.Duration.fromPartial(object.lockableDuration) : undefined;
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            poolId: object?.pool_id,
            lockableDuration: object.lockable_duration ? duration_1.Duration.fromSDK(object.lockable_duration) : undefined,
            gaugeId: object?.gauge_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.poolId;
        message.lockableDuration !== undefined && (obj.lockable_duration = message.lockableDuration ? duration_1.Duration.toSDK(message.lockableDuration) : undefined);
        obj.gauge_id = message.gaugeId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseIncentivizedPool();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.lockable_duration !== undefined && object.lockable_duration !== null) {
            message.lockableDuration = duration_1.Duration.fromAmino(object.lockable_duration);
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.lockable_duration = message.lockableDuration ? duration_1.Duration.toAmino(message.lockableDuration) : undefined;
        obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IncentivizedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/incentivized-pool",
            value: exports.IncentivizedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IncentivizedPool.decode(message.value);
    },
    toProto(message) {
        return exports.IncentivizedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
            value: exports.IncentivizedPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.IncentivizedPool.typeUrl, exports.IncentivizedPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IncentivizedPool.aminoType, exports.IncentivizedPool.typeUrl);
function createBaseQueryIncentivizedPoolsResponse() {
    return {
        incentivizedPools: []
    };
}
exports.QueryIncentivizedPoolsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
    aminoType: "osmosis/poolincentives/query-incentivized-pools-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryIncentivizedPoolsResponse.typeUrl || Array.isArray(o.incentivizedPools) && (!o.incentivizedPools.length || exports.IncentivizedPool.is(o.incentivizedPools[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryIncentivizedPoolsResponse.typeUrl || Array.isArray(o.incentivized_pools) && (!o.incentivized_pools.length || exports.IncentivizedPool.isSDK(o.incentivized_pools[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryIncentivizedPoolsResponse.typeUrl || Array.isArray(o.incentivized_pools) && (!o.incentivized_pools.length || exports.IncentivizedPool.isAmino(o.incentivized_pools[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.incentivizedPools) {
            exports.IncentivizedPool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPools.push(exports.IncentivizedPool.decode(reader, reader.uint32()));
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
            incentivizedPools: Array.isArray(object?.incentivizedPools) ? object.incentivizedPools.map((e) => exports.IncentivizedPool.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivizedPools) {
            obj.incentivizedPools = message.incentivizedPools.map(e => e ? exports.IncentivizedPool.toJSON(e) : undefined);
        }
        else {
            obj.incentivizedPools = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivizedPools = object.incentivizedPools?.map(e => exports.IncentivizedPool.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            incentivizedPools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e) => exports.IncentivizedPool.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.incentivizedPools) {
            obj.incentivized_pools = message.incentivizedPools.map(e => e ? exports.IncentivizedPool.toSDK(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivizedPools = object.incentivized_pools?.map(e => exports.IncentivizedPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.incentivizedPools) {
            obj.incentivized_pools = message.incentivizedPools.map(e => e ? exports.IncentivizedPool.toAmino(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIncentivizedPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-response",
            value: exports.QueryIncentivizedPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryIncentivizedPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIncentivizedPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
            value: exports.QueryIncentivizedPoolsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryIncentivizedPoolsResponse.typeUrl, exports.QueryIncentivizedPoolsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryIncentivizedPoolsResponse.aminoType, exports.QueryIncentivizedPoolsResponse.typeUrl);
function createBaseQueryExternalIncentiveGaugesRequest() {
    return {};
}
exports.QueryExternalIncentiveGaugesRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
    aminoType: "osmosis/poolincentives/query-external-incentive-gauges-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryExternalIncentiveGaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryExternalIncentiveGaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryExternalIncentiveGaugesRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesRequest();
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
        const message = createBaseQueryExternalIncentiveGaugesRequest();
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
        const message = createBaseQueryExternalIncentiveGaugesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExternalIncentiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-request",
            value: exports.QueryExternalIncentiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExternalIncentiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExternalIncentiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
            value: exports.QueryExternalIncentiveGaugesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryExternalIncentiveGaugesRequest.typeUrl, exports.QueryExternalIncentiveGaugesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryExternalIncentiveGaugesRequest.aminoType, exports.QueryExternalIncentiveGaugesRequest.typeUrl);
function createBaseQueryExternalIncentiveGaugesResponse() {
    return {
        data: []
    };
}
exports.QueryExternalIncentiveGaugesResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
    aminoType: "osmosis/poolincentives/query-external-incentive-gauges-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryExternalIncentiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.is(o.data[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryExternalIncentiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isSDK(o.data[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryExternalIncentiveGaugesResponse.typeUrl || Array.isArray(o.data) && (!o.data.length || gauge_1.Gauge.isAmino(o.data[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromJSON(e)) : []
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromSDK(e)) : []
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
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
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
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExternalIncentiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-response",
            value: exports.QueryExternalIncentiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExternalIncentiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExternalIncentiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
            value: exports.QueryExternalIncentiveGaugesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryExternalIncentiveGaugesResponse.typeUrl, exports.QueryExternalIncentiveGaugesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryExternalIncentiveGaugesResponse.aminoType, exports.QueryExternalIncentiveGaugesResponse.typeUrl);
