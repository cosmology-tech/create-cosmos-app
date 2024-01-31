"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const vesting_1 = require("./vesting");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgCreateVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: [],
        endTime: BigInt(0),
        delayed: false
    };
}
exports.MsgCreateVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateVestingAccount.typeUrl || typeof o.fromAddress === "string" && typeof o.toAddress === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])) && typeof o.endTime === "bigint" && typeof o.delayed === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])) && typeof o.end_time === "bigint" && typeof o.delayed === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])) && typeof o.end_time === "bigint" && typeof o.delayed === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== BigInt(0)) {
            writer.uint32(32).int64(message.endTime);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endTime = reader.int64();
                    break;
                case 5:
                    message.delayed = reader.bool();
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
            fromAddress: (0, helpers_1.isSet)(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: (0, helpers_1.isSet)(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            endTime: (0, helpers_1.isSet)(object.endTime) ? BigInt(object.endTime.toString()) : BigInt(0),
            delayed: (0, helpers_1.isSet)(object.delayed) ? Boolean(object.delayed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.endTime !== undefined && (obj.endTime = (message.endTime || BigInt(0)).toString());
        message.delayed !== undefined && (obj.delayed = message.delayed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateVestingAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
        message.delayed = object.delayed ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            fromAddress: object?.from_address,
            toAddress: object?.to_address,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : [],
            endTime: object?.end_time,
            delayed: object?.delayed
        };
    },
    toSDK(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.end_time = message.endTime;
        obj.delayed = message.delayed;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = BigInt(object.end_time);
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = object.delayed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.end_time = message.endTime ? message.endTime.toString() : undefined;
        obj.delayed = message.delayed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateVestingAccount.typeUrl, exports.MsgCreateVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateVestingAccount.aminoType, exports.MsgCreateVestingAccount.typeUrl);
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
    aminoType: "cosmos-sdk/MsgCreateVestingAccountResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreateVestingAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreateVestingAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreateVestingAccountResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
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
        const message = createBaseMsgCreateVestingAccountResponse();
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
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateVestingAccountResponse.typeUrl, exports.MsgCreateVestingAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateVestingAccountResponse.aminoType, exports.MsgCreateVestingAccountResponse.typeUrl);
function createBaseMsgCreatePermanentLockedAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: []
    };
}
exports.MsgCreatePermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
    aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccount",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreatePermanentLockedAccount.typeUrl || typeof o.fromAddress === "string" && typeof o.toAddress === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreatePermanentLockedAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreatePermanentLockedAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            fromAddress: (0, helpers_1.isSet)(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: (0, helpers_1.isSet)(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePermanentLockedAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            fromAddress: object?.from_address,
            toAddress: object?.to_address,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePermanentLockedAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermanentLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePermanentLockedAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePermanentLockedAccount.typeUrl, exports.MsgCreatePermanentLockedAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePermanentLockedAccount.aminoType, exports.MsgCreatePermanentLockedAccount.typeUrl);
function createBaseMsgCreatePermanentLockedAccountResponse() {
    return {};
}
exports.MsgCreatePermanentLockedAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
    aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreatePermanentLockedAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreatePermanentLockedAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreatePermanentLockedAccountResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePermanentLockedAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePermanentLockedAccountResponse.typeUrl, exports.MsgCreatePermanentLockedAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePermanentLockedAccountResponse.aminoType, exports.MsgCreatePermanentLockedAccountResponse.typeUrl);
function createBaseMsgCreatePeriodicVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        startTime: BigInt(0),
        vestingPeriods: []
    };
}
exports.MsgCreatePeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreatePeriodicVestingAccount.typeUrl || typeof o.fromAddress === "string" && typeof o.toAddress === "string" && typeof o.startTime === "bigint" && Array.isArray(o.vestingPeriods) && (!o.vestingPeriods.length || vesting_1.Period.is(o.vestingPeriods[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreatePeriodicVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || vesting_1.Period.isSDK(o.vesting_periods[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreatePeriodicVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || vesting_1.Period.isAmino(o.vesting_periods[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(24).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            vesting_1.Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.startTime = reader.int64();
                    break;
                case 4:
                    message.vestingPeriods.push(vesting_1.Period.decode(reader, reader.uint32()));
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
            fromAddress: (0, helpers_1.isSet)(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: (0, helpers_1.isSet)(object.toAddress) ? String(object.toAddress) : "",
            startTime: (0, helpers_1.isSet)(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
            vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e) => vesting_1.Period.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map(e => e ? vesting_1.Period.toJSON(e) : undefined);
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePeriodicVestingAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        message.vestingPeriods = object.vestingPeriods?.map(e => vesting_1.Period.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            fromAddress: object?.from_address,
            toAddress: object?.to_address,
            startTime: object?.start_time,
            vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e) => vesting_1.Period.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        obj.start_time = message.startTime;
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(e => e ? vesting_1.Period.toSDK(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePeriodicVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        message.vestingPeriods = object.vesting_periods?.map(e => vesting_1.Period.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        obj.start_time = message.startTime ? message.startTime.toString() : undefined;
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(e => e ? vesting_1.Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
            value: exports.MsgCreatePeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePeriodicVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
            value: exports.MsgCreatePeriodicVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePeriodicVestingAccount.typeUrl, exports.MsgCreatePeriodicVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePeriodicVestingAccount.aminoType, exports.MsgCreatePeriodicVestingAccount.typeUrl);
function createBaseMsgCreatePeriodicVestingAccountResponse() {
    return {};
}
exports.MsgCreatePeriodicVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreatePeriodicVestingAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreatePeriodicVestingAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreatePeriodicVestingAccountResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePeriodicVestingAccountResponse.typeUrl, exports.MsgCreatePeriodicVestingAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePeriodicVestingAccountResponse.aminoType, exports.MsgCreatePeriodicVestingAccountResponse.typeUrl);
