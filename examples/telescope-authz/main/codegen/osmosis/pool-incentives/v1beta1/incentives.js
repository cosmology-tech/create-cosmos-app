"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolToGauges = exports.PoolToGauge = exports.DistrRecord = exports.DistrInfo = exports.LockableDurationsInfo = exports.Params = void 0;
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        mintedDenom: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.poolincentives.v1beta1.Params",
    aminoType: "osmosis/poolincentives/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.mintedDenom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.minted_denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.minted_denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintedDenom !== "") {
            writer.uint32(10).string(message.mintedDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintedDenom = reader.string();
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
            mintedDenom: (0, helpers_1.isSet)(object.mintedDenom) ? String(object.mintedDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.mintedDenom !== undefined && (obj.mintedDenom = message.mintedDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintedDenom = object.mintedDenom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            mintedDenom: object?.minted_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.minted_denom = message.mintedDenom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.minted_denom !== undefined && object.minted_denom !== null) {
            message.mintedDenom = object.minted_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minted_denom = message.mintedDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseLockableDurationsInfo() {
    return {
        lockableDurations: []
    };
}
exports.LockableDurationsInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
    aminoType: "osmosis/poolincentives/lockable-durations-info",
    is(o) {
        return o && (o.$typeUrl === exports.LockableDurationsInfo.typeUrl || Array.isArray(o.lockableDurations) && (!o.lockableDurations.length || duration_1.Duration.is(o.lockableDurations[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LockableDurationsInfo.typeUrl || Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || duration_1.Duration.isSDK(o.lockable_durations[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LockableDurationsInfo.typeUrl || Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || duration_1.Duration.isAmino(o.lockable_durations[0])));
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
        const message = createBaseLockableDurationsInfo();
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
        const message = createBaseLockableDurationsInfo();
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
        const message = createBaseLockableDurationsInfo();
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
        return exports.LockableDurationsInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/lockable-durations-info",
            value: exports.LockableDurationsInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockableDurationsInfo.decode(message.value);
    },
    toProto(message) {
        return exports.LockableDurationsInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
            value: exports.LockableDurationsInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockableDurationsInfo.typeUrl, exports.LockableDurationsInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LockableDurationsInfo.aminoType, exports.LockableDurationsInfo.typeUrl);
function createBaseDistrInfo() {
    return {
        totalWeight: "",
        records: []
    };
}
exports.DistrInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
    aminoType: "osmosis/poolincentives/distr-info",
    is(o) {
        return o && (o.$typeUrl === exports.DistrInfo.typeUrl || typeof o.totalWeight === "string" && Array.isArray(o.records) && (!o.records.length || exports.DistrRecord.is(o.records[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DistrInfo.typeUrl || typeof o.total_weight === "string" && Array.isArray(o.records) && (!o.records.length || exports.DistrRecord.isSDK(o.records[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DistrInfo.typeUrl || typeof o.total_weight === "string" && Array.isArray(o.records) && (!o.records.length || exports.DistrRecord.isAmino(o.records[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalWeight !== "") {
            writer.uint32(10).string(message.totalWeight);
        }
        for (const v of message.records) {
            exports.DistrRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalWeight = reader.string();
                    break;
                case 2:
                    message.records.push(exports.DistrRecord.decode(reader, reader.uint32()));
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
            totalWeight: (0, helpers_1.isSet)(object.totalWeight) ? String(object.totalWeight) : "",
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.DistrRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.DistrRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistrInfo();
        message.totalWeight = object.totalWeight ?? "";
        message.records = object.records?.map(e => exports.DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            totalWeight: object?.total_weight,
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.DistrRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.total_weight = message.totalWeight;
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.DistrRecord.toSDK(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDistrInfo();
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
        }
        message.records = object.records?.map(e => exports.DistrRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_weight = message.totalWeight;
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistrInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/distr-info",
            value: exports.DistrInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DistrInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DistrInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
            value: exports.DistrInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DistrInfo.typeUrl, exports.DistrInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DistrInfo.aminoType, exports.DistrInfo.typeUrl);
function createBaseDistrRecord() {
    return {
        gaugeId: BigInt(0),
        weight: ""
    };
}
exports.DistrRecord = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
    aminoType: "osmosis/poolincentives/distr-record",
    is(o) {
        return o && (o.$typeUrl === exports.DistrRecord.typeUrl || typeof o.gaugeId === "bigint" && typeof o.weight === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DistrRecord.typeUrl || typeof o.gauge_id === "bigint" && typeof o.weight === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DistrRecord.typeUrl || typeof o.gauge_id === "bigint" && typeof o.weight === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.weight = reader.string();
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
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistrRecord();
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.weight = object.weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            gaugeId: object?.gauge_id,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        obj.gauge_id = message.gaugeId;
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDistrRecord();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistrRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/distr-record",
            value: exports.DistrRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DistrRecord.decode(message.value);
    },
    toProto(message) {
        return exports.DistrRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
            value: exports.DistrRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DistrRecord.typeUrl, exports.DistrRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DistrRecord.aminoType, exports.DistrRecord.typeUrl);
function createBasePoolToGauge() {
    return {
        poolId: BigInt(0),
        gaugeId: BigInt(0),
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.PoolToGauge = {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
    aminoType: "osmosis/poolincentives/pool-to-gauge",
    is(o) {
        return o && (o.$typeUrl === exports.PoolToGauge.typeUrl || typeof o.poolId === "bigint" && typeof o.gaugeId === "bigint" && duration_1.Duration.is(o.duration));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PoolToGauge.typeUrl || typeof o.pool_id === "bigint" && typeof o.gauge_id === "bigint" && duration_1.Duration.isSDK(o.duration));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PoolToGauge.typeUrl || typeof o.pool_id === "bigint" && typeof o.gauge_id === "bigint" && duration_1.Duration.isAmino(o.duration));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.gaugeId = reader.uint64();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            gaugeId: (0, helpers_1.isSet)(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0),
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolToGauge();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            poolId: object?.pool_id,
            gaugeId: object?.gauge_id,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.poolId;
        obj.gauge_id = message.gaugeId;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBasePoolToGauge();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/pool-to-gauge",
            value: exports.PoolToGauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolToGauge.decode(message.value);
    },
    toProto(message) {
        return exports.PoolToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
            value: exports.PoolToGauge.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PoolToGauge.typeUrl, exports.PoolToGauge);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolToGauge.aminoType, exports.PoolToGauge.typeUrl);
function createBasePoolToGauges() {
    return {
        poolToGauge: []
    };
}
exports.PoolToGauges = {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
    aminoType: "osmosis/poolincentives/pool-to-gauges",
    is(o) {
        return o && (o.$typeUrl === exports.PoolToGauges.typeUrl || Array.isArray(o.poolToGauge) && (!o.poolToGauge.length || exports.PoolToGauge.is(o.poolToGauge[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PoolToGauges.typeUrl || Array.isArray(o.pool_to_gauge) && (!o.pool_to_gauge.length || exports.PoolToGauge.isSDK(o.pool_to_gauge[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PoolToGauges.typeUrl || Array.isArray(o.pool_to_gauge) && (!o.pool_to_gauge.length || exports.PoolToGauge.isAmino(o.pool_to_gauge[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolToGauge) {
            exports.PoolToGauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.poolToGauge.push(exports.PoolToGauge.decode(reader, reader.uint32()));
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
            poolToGauge: Array.isArray(object?.poolToGauge) ? object.poolToGauge.map((e) => exports.PoolToGauge.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.poolToGauge = message.poolToGauge.map(e => e ? exports.PoolToGauge.toJSON(e) : undefined);
        }
        else {
            obj.poolToGauge = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolToGauges();
        message.poolToGauge = object.poolToGauge?.map(e => exports.PoolToGauge.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            poolToGauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e) => exports.PoolToGauge.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.pool_to_gauge = message.poolToGauge.map(e => e ? exports.PoolToGauge.toSDK(e) : undefined);
        }
        else {
            obj.pool_to_gauge = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBasePoolToGauges();
        message.poolToGauge = object.pool_to_gauge?.map(e => exports.PoolToGauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.pool_to_gauge = message.poolToGauge.map(e => e ? exports.PoolToGauge.toAmino(e) : undefined);
        }
        else {
            obj.pool_to_gauge = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolToGauges.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/pool-to-gauges",
            value: exports.PoolToGauges.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolToGauges.decode(message.value);
    },
    toProto(message) {
        return exports.PoolToGauges.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
            value: exports.PoolToGauges.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PoolToGauges.typeUrl, exports.PoolToGauges);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolToGauges.aminoType, exports.PoolToGauges.typeUrl);
