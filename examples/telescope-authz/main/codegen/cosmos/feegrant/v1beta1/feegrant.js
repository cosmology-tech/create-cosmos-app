"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseBasicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        spendLimit: [],
        expiration: undefined
    };
}
exports.BasicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    aminoType: "cosmos-sdk/BasicAllowance",
    is(o) {
        return o && (o.$typeUrl === exports.BasicAllowance.typeUrl || Array.isArray(o.spendLimit) && (!o.spendLimit.length || coin_1.Coin.is(o.spendLimit[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || coin_1.Coin.isSDK(o.spend_limit[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || coin_1.Coin.isAmino(o.spend_limit[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            expiration: (0, helpers_1.isSet)(object.expiration) ? new Date(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.spendLimit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBasicAllowance();
        message.spendLimit = object.spendLimit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            spendLimit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            expiration: object.expiration ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBasicAllowance();
        message.spendLimit = object.spend_limit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BasicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BasicAllowance",
            value: exports.BasicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BasicAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.BasicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
            value: exports.BasicAllowance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BasicAllowance.typeUrl, exports.BasicAllowance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BasicAllowance.aminoType, exports.BasicAllowance.typeUrl);
function createBasePeriodicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        basic: exports.BasicAllowance.fromPartial({}),
        period: duration_1.Duration.fromPartial({}),
        periodSpendLimit: [],
        periodCanSpend: [],
        periodReset: new Date()
    };
}
exports.PeriodicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    aminoType: "cosmos-sdk/PeriodicAllowance",
    is(o) {
        return o && (o.$typeUrl === exports.PeriodicAllowance.typeUrl || exports.BasicAllowance.is(o.basic) && duration_1.Duration.is(o.period) && Array.isArray(o.periodSpendLimit) && (!o.periodSpendLimit.length || coin_1.Coin.is(o.periodSpendLimit[0])) && Array.isArray(o.periodCanSpend) && (!o.periodCanSpend.length || coin_1.Coin.is(o.periodCanSpend[0])) && timestamp_1.Timestamp.is(o.periodReset));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PeriodicAllowance.typeUrl || exports.BasicAllowance.isSDK(o.basic) && duration_1.Duration.isSDK(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || coin_1.Coin.isSDK(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || coin_1.Coin.isSDK(o.period_can_spend[0])) && timestamp_1.Timestamp.isSDK(o.period_reset));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PeriodicAllowance.typeUrl || exports.BasicAllowance.isAmino(o.basic) && duration_1.Duration.isAmino(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || coin_1.Coin.isAmino(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || coin_1.Coin.isAmino(o.period_can_spend[0])) && timestamp_1.Timestamp.isAmino(o.period_reset));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.periodSpendLimit) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.periodCanSpend) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.periodReset !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.periodReset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.periodSpendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.periodCanSpend.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.periodReset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            basic: (0, helpers_1.isSet)(object.basic) ? exports.BasicAllowance.fromJSON(object.basic) : undefined,
            period: (0, helpers_1.isSet)(object.period) ? duration_1.Duration.fromJSON(object.period) : undefined,
            periodSpendLimit: Array.isArray(object?.periodSpendLimit) ? object.periodSpendLimit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            periodCanSpend: Array.isArray(object?.periodCanSpend) ? object.periodCanSpend.map((e) => coin_1.Coin.fromJSON(e)) : [],
            periodReset: (0, helpers_1.isSet)(object.periodReset) ? new Date(object.periodReset) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? exports.BasicAllowance.toJSON(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period ? duration_1.Duration.toJSON(message.period) : undefined);
        if (message.periodSpendLimit) {
            obj.periodSpendLimit = message.periodSpendLimit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.periodSpendLimit = [];
        }
        if (message.periodCanSpend) {
            obj.periodCanSpend = message.periodCanSpend.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.periodCanSpend = [];
        }
        message.periodReset !== undefined && (obj.periodReset = message.periodReset.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodicAllowance();
        message.basic = object.basic !== undefined && object.basic !== null ? exports.BasicAllowance.fromPartial(object.basic) : undefined;
        message.period = object.period !== undefined && object.period !== null ? duration_1.Duration.fromPartial(object.period) : undefined;
        message.periodSpendLimit = object.periodSpendLimit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.periodCanSpend = object.periodCanSpend?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.periodReset = object.periodReset ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            basic: object.basic ? exports.BasicAllowance.fromSDK(object.basic) : undefined,
            period: object.period ? duration_1.Duration.fromSDK(object.period) : undefined,
            periodSpendLimit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            periodCanSpend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e) => coin_1.Coin.fromSDK(e)) : [],
            periodReset: object.period_reset ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? exports.BasicAllowance.toSDK(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period ? duration_1.Duration.toSDK(message.period) : undefined);
        if (message.periodSpendLimit) {
            obj.period_spend_limit = message.periodSpendLimit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.periodCanSpend) {
            obj.period_can_spend = message.periodCanSpend.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        message.periodReset !== undefined && (obj.period_reset = message.periodReset ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBasePeriodicAllowance();
        if (object.basic !== undefined && object.basic !== null) {
            message.basic = exports.BasicAllowance.fromAmino(object.basic);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = duration_1.Duration.fromAmino(object.period);
        }
        message.periodSpendLimit = object.period_spend_limit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.periodCanSpend = object.period_can_spend?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.period_reset !== undefined && object.period_reset !== null) {
            message.periodReset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.period_reset));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basic = message.basic ? exports.BasicAllowance.toAmino(message.basic) : undefined;
        obj.period = message.period ? duration_1.Duration.toAmino(message.period) : undefined;
        if (message.periodSpendLimit) {
            obj.period_spend_limit = message.periodSpendLimit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.periodCanSpend) {
            obj.period_can_spend = message.periodCanSpend.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        obj.period_reset = message.periodReset ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.periodReset)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeriodicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicAllowance",
            value: exports.PeriodicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PeriodicAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.PeriodicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
            value: exports.PeriodicAllowance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PeriodicAllowance.typeUrl, exports.PeriodicAllowance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PeriodicAllowance.aminoType, exports.PeriodicAllowance.typeUrl);
function createBaseAllowedMsgAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        allowance: undefined,
        allowedMessages: []
    };
}
exports.AllowedMsgAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    aminoType: "cosmos-sdk/AllowedMsgAllowance",
    is(o) {
        return o && (o.$typeUrl === exports.AllowedMsgAllowance.typeUrl || Array.isArray(o.allowedMessages) && (!o.allowedMessages.length || typeof o.allowedMessages[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowedMessages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 2:
                    message.allowedMessages.push(reader.string());
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
            allowance: (0, helpers_1.isSet)(object.allowance) ? registry_1.GlobalDecoderRegistry.fromJSON(object.allowance) : undefined,
            allowedMessages: Array.isArray(object?.allowedMessages) ? object.allowedMessages.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
        if (message.allowedMessages) {
            obj.allowedMessages = message.allowedMessages.map(e => e);
        }
        else {
            obj.allowedMessages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllowedMsgAllowance();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
        message.allowedMessages = object.allowedMessages?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            allowance: object.allowance ? registry_1.GlobalDecoderRegistry.fromSDK(object.allowance) : undefined,
            allowedMessages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toSDK(message.allowance) : undefined);
        if (message.allowedMessages) {
            obj.allowed_messages = message.allowedMessages.map(e => e);
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAllowedMsgAllowance();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.allowance);
        }
        message.allowedMessages = object.allowed_messages?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
        if (message.allowedMessages) {
            obj.allowed_messages = message.allowedMessages.map(e => e);
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllowedMsgAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllowedMsgAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.AllowedMsgAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AllowedMsgAllowance.typeUrl, exports.AllowedMsgAllowance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllowedMsgAllowance.aminoType, exports.AllowedMsgAllowance.typeUrl);
function createBaseGrant() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.Grant = {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant",
    aminoType: "cosmos-sdk/Grant",
    is(o) {
        return o && (o.$typeUrl === exports.Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            allowance: (0, helpers_1.isSet)(object.allowance) ? registry_1.GlobalDecoderRegistry.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            allowance: object.allowance ? registry_1.GlobalDecoderRegistry.fromSDK(object.allowance) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        message.allowance !== undefined && (obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toSDK(message.allowance) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: exports.Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Grant.decode(message.value);
    },
    toProto(message) {
        return exports.Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.Grant",
            value: exports.Grant.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Grant.typeUrl, exports.Grant);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Grant.aminoType, exports.Grant.typeUrl);
