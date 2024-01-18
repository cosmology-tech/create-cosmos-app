"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockableDurationsInfo = exports.Gauge = void 0;
const lock_1 = require("../lockup/lock");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseGauge() {
    return {
        id: BigInt(0),
        isPerpetual: false,
        distributeTo: lock_1.QueryCondition.fromPartial({}),
        coins: [],
        startTime: new Date(),
        numEpochsPaidOver: BigInt(0),
        filledEpochs: BigInt(0),
        distributedCoins: []
    };
}
exports.Gauge = {
    typeUrl: "/osmosis.incentives.Gauge",
    aminoType: "osmosis/incentives/gauge",
    is(o) {
        return o && (o.$typeUrl === exports.Gauge.typeUrl || typeof o.id === "bigint" && typeof o.isPerpetual === "boolean" && lock_1.QueryCondition.is(o.distributeTo) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])) && timestamp_1.Timestamp.is(o.startTime) && typeof o.numEpochsPaidOver === "bigint" && typeof o.filledEpochs === "bigint" && Array.isArray(o.distributedCoins) && (!o.distributedCoins.length || coin_1.Coin.is(o.distributedCoins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Gauge.typeUrl || typeof o.id === "bigint" && typeof o.is_perpetual === "boolean" && lock_1.QueryCondition.isSDK(o.distribute_to) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) && timestamp_1.Timestamp.isSDK(o.start_time) && typeof o.num_epochs_paid_over === "bigint" && typeof o.filled_epochs === "bigint" && Array.isArray(o.distributed_coins) && (!o.distributed_coins.length || coin_1.Coin.isSDK(o.distributed_coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Gauge.typeUrl || typeof o.id === "bigint" && typeof o.is_perpetual === "boolean" && lock_1.QueryCondition.isAmino(o.distribute_to) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) && timestamp_1.Timestamp.isAmino(o.start_time) && typeof o.num_epochs_paid_over === "bigint" && typeof o.filled_epochs === "bigint" && Array.isArray(o.distributed_coins) && (!o.distributed_coins.length || coin_1.Coin.isAmino(o.distributed_coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.isPerpetual === true) {
            writer.uint32(16).bool(message.isPerpetual);
        }
        if (message.distributeTo !== undefined) {
            lock_1.QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.numEpochsPaidOver !== BigInt(0)) {
            writer.uint32(48).uint64(message.numEpochsPaidOver);
        }
        if (message.filledEpochs !== BigInt(0)) {
            writer.uint32(56).uint64(message.filledEpochs);
        }
        for (const v of message.distributedCoins) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.isPerpetual = reader.bool();
                    break;
                case 3:
                    message.distributeTo = lock_1.QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.numEpochsPaidOver = reader.uint64();
                    break;
                case 7:
                    message.filledEpochs = reader.uint64();
                    break;
                case 8:
                    message.distributedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            isPerpetual: (0, helpers_1.isSet)(object.isPerpetual) ? Boolean(object.isPerpetual) : false,
            distributeTo: (0, helpers_1.isSet)(object.distributeTo) ? lock_1.QueryCondition.fromJSON(object.distributeTo) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            startTime: (0, helpers_1.isSet)(object.startTime) ? new Date(object.startTime) : undefined,
            numEpochsPaidOver: (0, helpers_1.isSet)(object.numEpochsPaidOver) ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0),
            filledEpochs: (0, helpers_1.isSet)(object.filledEpochs) ? BigInt(object.filledEpochs.toString()) : BigInt(0),
            distributedCoins: Array.isArray(object?.distributedCoins) ? object.distributedCoins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
        message.distributeTo !== undefined && (obj.distributeTo = message.distributeTo ? lock_1.QueryCondition.toJSON(message.distributeTo) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.numEpochsPaidOver !== undefined && (obj.numEpochsPaidOver = (message.numEpochsPaidOver || BigInt(0)).toString());
        message.filledEpochs !== undefined && (obj.filledEpochs = (message.filledEpochs || BigInt(0)).toString());
        if (message.distributedCoins) {
            obj.distributedCoins = message.distributedCoins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.distributedCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGauge();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.isPerpetual = object.isPerpetual ?? false;
        message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? lock_1.QueryCondition.fromPartial(object.distributeTo) : undefined;
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.startTime = object.startTime ?? undefined;
        message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0);
        message.filledEpochs = object.filledEpochs !== undefined && object.filledEpochs !== null ? BigInt(object.filledEpochs.toString()) : BigInt(0);
        message.distributedCoins = object.distributedCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            isPerpetual: object?.is_perpetual,
            distributeTo: object.distribute_to ? lock_1.QueryCondition.fromSDK(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            startTime: object.start_time ?? undefined,
            numEpochsPaidOver: object?.num_epochs_paid_over,
            filledEpochs: object?.filled_epochs,
            distributedCoins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.is_perpetual = message.isPerpetual;
        message.distributeTo !== undefined && (obj.distribute_to = message.distributeTo ? lock_1.QueryCondition.toSDK(message.distributeTo) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
        obj.num_epochs_paid_over = message.numEpochsPaidOver;
        obj.filled_epochs = message.filledEpochs;
        if (message.distributedCoins) {
            obj.distributed_coins = message.distributedCoins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.distributed_coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGauge();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.is_perpetual !== undefined && object.is_perpetual !== null) {
            message.isPerpetual = object.is_perpetual;
        }
        if (object.distribute_to !== undefined && object.distribute_to !== null) {
            message.distributeTo = lock_1.QueryCondition.fromAmino(object.distribute_to);
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null) {
            message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
        }
        if (object.filled_epochs !== undefined && object.filled_epochs !== null) {
            message.filledEpochs = BigInt(object.filled_epochs);
        }
        message.distributedCoins = object.distributed_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.is_perpetual = message.isPerpetual;
        obj.distribute_to = message.distributeTo ? lock_1.QueryCondition.toAmino(message.distributeTo) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.start_time = message.startTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime)) : undefined;
        obj.num_epochs_paid_over = message.numEpochsPaidOver ? message.numEpochsPaidOver.toString() : undefined;
        obj.filled_epochs = message.filledEpochs ? message.filledEpochs.toString() : undefined;
        if (message.distributedCoins) {
            obj.distributed_coins = message.distributedCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.distributed_coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Gauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge",
            value: exports.Gauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Gauge.decode(message.value);
    },
    toProto(message) {
        return exports.Gauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.Gauge",
            value: exports.Gauge.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Gauge.typeUrl, exports.Gauge);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Gauge.aminoType, exports.Gauge.typeUrl);
function createBaseLockableDurationsInfo() {
    return {
        lockableDurations: []
    };
}
exports.LockableDurationsInfo = {
    typeUrl: "/osmosis.incentives.LockableDurationsInfo",
    aminoType: "osmosis/incentives/lockable-durations-info",
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
            type: "osmosis/incentives/lockable-durations-info",
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
            typeUrl: "/osmosis.incentives.LockableDurationsInfo",
            value: exports.LockableDurationsInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockableDurationsInfo.typeUrl, exports.LockableDurationsInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LockableDurationsInfo.aminoType, exports.LockableDurationsInfo.typeUrl);
