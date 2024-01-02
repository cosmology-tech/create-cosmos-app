"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgAddToGaugeResponse = exports.MsgAddToGauge = exports.MsgCreateGaugeResponse = exports.MsgCreateGauge = void 0;
const lock_1 = require("../lockup/lock");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseMsgCreateGauge() {
    return {
        isPerpetual: false,
        owner: "",
        distributeTo: lock_1.QueryCondition.fromPartial({}),
        coins: [],
        startTime: new Date(),
        numEpochsPaidOver: BigInt(0)
    };
}
exports.MsgCreateGauge = {
    typeUrl: "/osmosis.incentives.MsgCreateGauge",
    aminoType: "osmosis/incentives/create-gauge",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateGauge.typeUrl || typeof o.isPerpetual === "boolean" && typeof o.owner === "string" && lock_1.QueryCondition.is(o.distributeTo) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])) && timestamp_1.Timestamp.is(o.startTime) && typeof o.numEpochsPaidOver === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateGauge.typeUrl || typeof o.is_perpetual === "boolean" && typeof o.owner === "string" && lock_1.QueryCondition.isSDK(o.distribute_to) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) && timestamp_1.Timestamp.isSDK(o.start_time) && typeof o.num_epochs_paid_over === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateGauge.typeUrl || typeof o.is_perpetual === "boolean" && typeof o.owner === "string" && lock_1.QueryCondition.isAmino(o.distribute_to) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) && timestamp_1.Timestamp.isAmino(o.start_time) && typeof o.num_epochs_paid_over === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.isPerpetual === true) {
            writer.uint32(8).bool(message.isPerpetual);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isPerpetual = reader.bool();
                    break;
                case 2:
                    message.owner = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            isPerpetual: (0, helpers_1.isSet)(object.isPerpetual) ? Boolean(object.isPerpetual) : false,
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            distributeTo: (0, helpers_1.isSet)(object.distributeTo) ? lock_1.QueryCondition.fromJSON(object.distributeTo) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            startTime: (0, helpers_1.isSet)(object.startTime) ? new Date(object.startTime) : undefined,
            numEpochsPaidOver: (0, helpers_1.isSet)(object.numEpochsPaidOver) ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
        message.owner !== undefined && (obj.owner = message.owner);
        message.distributeTo !== undefined && (obj.distributeTo = message.distributeTo ? lock_1.QueryCondition.toJSON(message.distributeTo) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.numEpochsPaidOver !== undefined && (obj.numEpochsPaidOver = (message.numEpochsPaidOver || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGauge();
        message.isPerpetual = object.isPerpetual ?? false;
        message.owner = object.owner ?? "";
        message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? lock_1.QueryCondition.fromPartial(object.distributeTo) : undefined;
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.startTime = object.startTime ?? undefined;
        message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            isPerpetual: object?.is_perpetual,
            owner: object?.owner,
            distributeTo: object.distribute_to ? lock_1.QueryCondition.fromSDK(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            startTime: object.start_time ?? undefined,
            numEpochsPaidOver: object?.num_epochs_paid_over
        };
    },
    toSDK(message) {
        const obj = {};
        obj.is_perpetual = message.isPerpetual;
        obj.owner = message.owner;
        message.distributeTo !== undefined && (obj.distribute_to = message.distributeTo ? lock_1.QueryCondition.toSDK(message.distributeTo) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
        obj.num_epochs_paid_over = message.numEpochsPaidOver;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGauge();
        if (object.is_perpetual !== undefined && object.is_perpetual !== null) {
            message.isPerpetual = object.is_perpetual;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
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
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.is_perpetual = message.isPerpetual;
        obj.owner = message.owner;
        obj.distribute_to = message.distributeTo ? lock_1.QueryCondition.toAmino(message.distributeTo) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.start_time = message.startTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime)) : undefined;
        obj.num_epochs_paid_over = message.numEpochsPaidOver ? message.numEpochsPaidOver.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/create-gauge",
            value: exports.MsgCreateGauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGauge.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgCreateGauge",
            value: exports.MsgCreateGauge.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGauge.typeUrl, exports.MsgCreateGauge);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGauge.aminoType, exports.MsgCreateGauge.typeUrl);
function createBaseMsgCreateGaugeResponse() {
    return {};
}
exports.MsgCreateGaugeResponse = {
    typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
    aminoType: "osmosis/incentives/create-gauge-response",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreateGaugeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreateGaugeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreateGaugeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGaugeResponse();
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
        const message = createBaseMsgCreateGaugeResponse();
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
        const message = createBaseMsgCreateGaugeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/create-gauge-response",
            value: exports.MsgCreateGaugeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
            value: exports.MsgCreateGaugeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGaugeResponse.typeUrl, exports.MsgCreateGaugeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGaugeResponse.aminoType, exports.MsgCreateGaugeResponse.typeUrl);
function createBaseMsgAddToGauge() {
    return {
        owner: "",
        gaugeId: BigInt(0),
        rewards: []
    };
}
exports.MsgAddToGauge = {
    typeUrl: "/osmosis.incentives.MsgAddToGauge",
    aminoType: "osmosis/incentives/add-to-gauge",
    is(o) {
        return o && (o.$typeUrl === exports.MsgAddToGauge.typeUrl || typeof o.owner === "string" && typeof o.gaugeId === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || coin_1.Coin.is(o.rewards[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgAddToGauge.typeUrl || typeof o.owner === "string" && typeof o.gauge_id === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || coin_1.Coin.isSDK(o.rewards[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgAddToGauge.typeUrl || typeof o.owner === "string" && typeof o.gauge_id === "bigint" && Array.isArray(o.rewards) && (!o.rewards.length || coin_1.Coin.isAmino(o.rewards[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        for (const v of message.rewards) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.gaugeId = reader.uint64();
                    break;
                case 3:
                    message.rewards.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            gaugeId: (0, helpers_1.isSet)(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0),
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToGauge();
        message.owner = object.owner ?? "";
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.rewards = object.rewards?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            gaugeId: object?.gauge_id,
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.gauge_id = message.gaugeId;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgAddToGauge();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        message.rewards = object.rewards?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/add-to-gauge",
            value: exports.MsgAddToGauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToGauge.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgAddToGauge",
            value: exports.MsgAddToGauge.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToGauge.typeUrl, exports.MsgAddToGauge);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToGauge.aminoType, exports.MsgAddToGauge.typeUrl);
function createBaseMsgAddToGaugeResponse() {
    return {};
}
exports.MsgAddToGaugeResponse = {
    typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
    aminoType: "osmosis/incentives/add-to-gauge-response",
    is(o) {
        return o && o.$typeUrl === exports.MsgAddToGaugeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgAddToGaugeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgAddToGaugeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGaugeResponse();
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
        const message = createBaseMsgAddToGaugeResponse();
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
        const message = createBaseMsgAddToGaugeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddToGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/add-to-gauge-response",
            value: exports.MsgAddToGaugeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
            value: exports.MsgAddToGaugeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToGaugeResponse.typeUrl, exports.MsgAddToGaugeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToGaugeResponse.aminoType, exports.MsgAddToGaugeResponse.typeUrl);
