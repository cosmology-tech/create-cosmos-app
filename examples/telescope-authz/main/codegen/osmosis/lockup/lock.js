"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticLock = exports.QueryCondition = exports.PeriodLock = exports.lockQueryTypeToJSON = exports.lockQueryTypeFromJSON = exports.LockQueryTypeAmino = exports.LockQueryTypeSDKType = exports.LockQueryType = void 0;
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
var LockQueryType;
(function (LockQueryType) {
    LockQueryType[LockQueryType["ByDuration"] = 0] = "ByDuration";
    LockQueryType[LockQueryType["ByTime"] = 1] = "ByTime";
    LockQueryType[LockQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LockQueryType || (exports.LockQueryType = LockQueryType = {}));
exports.LockQueryTypeSDKType = LockQueryType;
exports.LockQueryTypeAmino = LockQueryType;
function lockQueryTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ByDuration":
            return LockQueryType.ByDuration;
        case 1:
        case "ByTime":
            return LockQueryType.ByTime;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LockQueryType.UNRECOGNIZED;
    }
}
exports.lockQueryTypeFromJSON = lockQueryTypeFromJSON;
function lockQueryTypeToJSON(object) {
    switch (object) {
        case LockQueryType.ByDuration:
            return "ByDuration";
        case LockQueryType.ByTime:
            return "ByTime";
        case LockQueryType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.lockQueryTypeToJSON = lockQueryTypeToJSON;
function createBasePeriodLock() {
    return {
        ID: BigInt(0),
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        endTime: new Date(),
        coins: []
    };
}
exports.PeriodLock = {
    typeUrl: "/osmosis.lockup.PeriodLock",
    aminoType: "osmosis/lockup/period-lock",
    is(o) {
        return o && (o.$typeUrl === exports.PeriodLock.typeUrl || typeof o.ID === "bigint" && typeof o.owner === "string" && duration_1.Duration.is(o.duration) && timestamp_1.Timestamp.is(o.endTime) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PeriodLock.typeUrl || typeof o.ID === "bigint" && typeof o.owner === "string" && duration_1.Duration.isSDK(o.duration) && timestamp_1.Timestamp.isSDK(o.end_time) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PeriodLock.typeUrl || typeof o.ID === "bigint" && typeof o.owner === "string" && duration_1.Duration.isAmino(o.duration) && timestamp_1.Timestamp.isAmino(o.end_time) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
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
            ID: (0, helpers_1.isSet)(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            endTime: (0, helpers_1.isSet)(object.endTime) ? new Date(object.endTime) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodLock();
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.endTime = object.endTime ?? undefined;
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            ID: object?.ID,
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            endTime: object.end_time ?? undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.ID = message.ID;
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBasePeriodLock();
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ID = message.ID ? message.ID.toString() : undefined;
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.end_time = message.endTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime)) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeriodLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/period-lock",
            value: exports.PeriodLock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PeriodLock.decode(message.value);
    },
    toProto(message) {
        return exports.PeriodLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.PeriodLock",
            value: exports.PeriodLock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PeriodLock.typeUrl, exports.PeriodLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PeriodLock.aminoType, exports.PeriodLock.typeUrl);
function createBaseQueryCondition() {
    return {
        lockQueryType: 0,
        denom: "",
        duration: duration_1.Duration.fromPartial({}),
        timestamp: new Date()
    };
}
exports.QueryCondition = {
    typeUrl: "/osmosis.lockup.QueryCondition",
    aminoType: "osmosis/lockup/query-condition",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCondition.typeUrl || (0, helpers_1.isSet)(o.lockQueryType) && typeof o.denom === "string" && duration_1.Duration.is(o.duration) && timestamp_1.Timestamp.is(o.timestamp));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCondition.typeUrl || (0, helpers_1.isSet)(o.lock_query_type) && typeof o.denom === "string" && duration_1.Duration.isSDK(o.duration) && timestamp_1.Timestamp.isSDK(o.timestamp));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCondition.typeUrl || (0, helpers_1.isSet)(o.lock_query_type) && typeof o.denom === "string" && duration_1.Duration.isAmino(o.duration) && timestamp_1.Timestamp.isAmino(o.timestamp));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockQueryType !== 0) {
            writer.uint32(8).int32(message.lockQueryType);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockQueryType = reader.int32();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            lockQueryType: (0, helpers_1.isSet)(object.lockQueryType) ? lockQueryTypeFromJSON(object.lockQueryType) : -1,
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockQueryType !== undefined && (obj.lockQueryType = lockQueryTypeToJSON(message.lockQueryType));
        message.denom !== undefined && (obj.denom = message.denom);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCondition();
        message.lockQueryType = object.lockQueryType ?? 0;
        message.denom = object.denom ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            lockQueryType: (0, helpers_1.isSet)(object.lock_query_type) ? lockQueryTypeFromJSON(object.lock_query_type) : -1,
            denom: object?.denom,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            timestamp: object.timestamp ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.lockQueryType !== undefined && (obj.lock_query_type = lockQueryTypeToJSON(message.lockQueryType));
        obj.denom = message.denom;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryCondition();
        if (object.lock_query_type !== undefined && object.lock_query_type !== null) {
            message.lockQueryType = lockQueryTypeFromJSON(object.lock_query_type);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_query_type = lockQueryTypeToJSON(message.lockQueryType);
        obj.denom = message.denom;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCondition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/query-condition",
            value: exports.QueryCondition.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCondition.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCondition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.QueryCondition",
            value: exports.QueryCondition.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCondition.typeUrl, exports.QueryCondition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCondition.aminoType, exports.QueryCondition.typeUrl);
function createBaseSyntheticLock() {
    return {
        underlyingLockId: BigInt(0),
        synthDenom: "",
        endTime: new Date(),
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.SyntheticLock = {
    typeUrl: "/osmosis.lockup.SyntheticLock",
    aminoType: "osmosis/lockup/synthetic-lock",
    is(o) {
        return o && (o.$typeUrl === exports.SyntheticLock.typeUrl || typeof o.underlyingLockId === "bigint" && typeof o.synthDenom === "string" && timestamp_1.Timestamp.is(o.endTime) && duration_1.Duration.is(o.duration));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SyntheticLock.typeUrl || typeof o.underlying_lock_id === "bigint" && typeof o.synth_denom === "string" && timestamp_1.Timestamp.isSDK(o.end_time) && duration_1.Duration.isSDK(o.duration));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SyntheticLock.typeUrl || typeof o.underlying_lock_id === "bigint" && typeof o.synth_denom === "string" && timestamp_1.Timestamp.isAmino(o.end_time) && duration_1.Duration.isAmino(o.duration));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.underlyingLockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.underlyingLockId);
        }
        if (message.synthDenom !== "") {
            writer.uint32(18).string(message.synthDenom);
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.underlyingLockId = reader.uint64();
                    break;
                case 2:
                    message.synthDenom = reader.string();
                    break;
                case 3:
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
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
            underlyingLockId: (0, helpers_1.isSet)(object.underlyingLockId) ? BigInt(object.underlyingLockId.toString()) : BigInt(0),
            synthDenom: (0, helpers_1.isSet)(object.synthDenom) ? String(object.synthDenom) : "",
            endTime: (0, helpers_1.isSet)(object.endTime) ? new Date(object.endTime) : undefined,
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.underlyingLockId !== undefined && (obj.underlyingLockId = (message.underlyingLockId || BigInt(0)).toString());
        message.synthDenom !== undefined && (obj.synthDenom = message.synthDenom);
        message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLock();
        message.underlyingLockId = object.underlyingLockId !== undefined && object.underlyingLockId !== null ? BigInt(object.underlyingLockId.toString()) : BigInt(0);
        message.synthDenom = object.synthDenom ?? "";
        message.endTime = object.endTime ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            underlyingLockId: object?.underlying_lock_id,
            synthDenom: object?.synth_denom,
            endTime: object.end_time ?? undefined,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.underlying_lock_id = message.underlyingLockId;
        obj.synth_denom = message.synthDenom;
        message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLock();
        if (object.underlying_lock_id !== undefined && object.underlying_lock_id !== null) {
            message.underlyingLockId = BigInt(object.underlying_lock_id);
        }
        if (object.synth_denom !== undefined && object.synth_denom !== null) {
            message.synthDenom = object.synth_denom;
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.underlying_lock_id = message.underlyingLockId ? message.underlyingLockId.toString() : undefined;
        obj.synth_denom = message.synthDenom;
        obj.end_time = message.endTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime)) : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SyntheticLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lock",
            value: exports.SyntheticLock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SyntheticLock.decode(message.value);
    },
    toProto(message) {
        return exports.SyntheticLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLock",
            value: exports.SyntheticLock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SyntheticLock.typeUrl, exports.SyntheticLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SyntheticLock.aminoType, exports.SyntheticLock.typeUrl);
