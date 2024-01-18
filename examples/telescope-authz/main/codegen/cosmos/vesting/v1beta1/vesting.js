"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = void 0;
const auth_1 = require("../../auth/v1beta1/auth");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseBaseVestingAccount() {
    return {
        baseAccount: undefined,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: BigInt(0)
    };
}
exports.BaseVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
    aminoType: "cosmos-sdk/BaseVestingAccount",
    is(o) {
        return o && (o.$typeUrl === exports.BaseVestingAccount.typeUrl || Array.isArray(o.originalVesting) && (!o.originalVesting.length || coin_1.Coin.is(o.originalVesting[0])) && Array.isArray(o.delegatedFree) && (!o.delegatedFree.length || coin_1.Coin.is(o.delegatedFree[0])) && Array.isArray(o.delegatedVesting) && (!o.delegatedVesting.length || coin_1.Coin.is(o.delegatedVesting[0])) && typeof o.endTime === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BaseVestingAccount.typeUrl || Array.isArray(o.original_vesting) && (!o.original_vesting.length || coin_1.Coin.isSDK(o.original_vesting[0])) && Array.isArray(o.delegated_free) && (!o.delegated_free.length || coin_1.Coin.isSDK(o.delegated_free[0])) && Array.isArray(o.delegated_vesting) && (!o.delegated_vesting.length || coin_1.Coin.isSDK(o.delegated_vesting[0])) && typeof o.end_time === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BaseVestingAccount.typeUrl || Array.isArray(o.original_vesting) && (!o.original_vesting.length || coin_1.Coin.isAmino(o.original_vesting[0])) && Array.isArray(o.delegated_free) && (!o.delegated_free.length || coin_1.Coin.isAmino(o.delegated_free[0])) && Array.isArray(o.delegated_vesting) && (!o.delegated_vesting.length || coin_1.Coin.isAmino(o.delegated_vesting[0])) && typeof o.end_time === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.originalVesting) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatedFree) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegatedVesting) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== BigInt(0)) {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.originalVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegatedFree.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegatedVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = reader.int64();
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
            baseAccount: (0, helpers_1.isSet)(object.baseAccount) ? auth_1.BaseAccount.fromJSON(object.baseAccount) : undefined,
            originalVesting: Array.isArray(object?.originalVesting) ? object.originalVesting.map((e) => coin_1.Coin.fromJSON(e)) : [],
            delegatedFree: Array.isArray(object?.delegatedFree) ? object.delegatedFree.map((e) => coin_1.Coin.fromJSON(e)) : [],
            delegatedVesting: Array.isArray(object?.delegatedVesting) ? object.delegatedVesting.map((e) => coin_1.Coin.fromJSON(e)) : [],
            endTime: (0, helpers_1.isSet)(object.endTime) ? BigInt(object.endTime.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? auth_1.BaseAccount.toJSON(message.baseAccount) : undefined);
        if (message.originalVesting) {
            obj.originalVesting = message.originalVesting.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.originalVesting = [];
        }
        if (message.delegatedFree) {
            obj.delegatedFree = message.delegatedFree.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedFree = [];
        }
        if (message.delegatedVesting) {
            obj.delegatedVesting = message.delegatedVesting.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedVesting = [];
        }
        message.endTime !== undefined && (obj.endTime = (message.endTime || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBaseVestingAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? auth_1.BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.originalVesting = object.originalVesting?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.delegatedFree = object.delegatedFree?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.delegatedVesting = object.delegatedVesting?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            baseAccount: object.base_account ? auth_1.BaseAccount.fromSDK(object.base_account) : undefined,
            originalVesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e) => coin_1.Coin.fromSDK(e)) : [],
            delegatedFree: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e) => coin_1.Coin.fromSDK(e)) : [],
            delegatedVesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e) => coin_1.Coin.fromSDK(e)) : [],
            endTime: object?.end_time
        };
    },
    toSDK(message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.base_account = message.baseAccount ? auth_1.BaseAccount.toSDK(message.baseAccount) : undefined);
        if (message.originalVesting) {
            obj.original_vesting = message.originalVesting.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.original_vesting = [];
        }
        if (message.delegatedFree) {
            obj.delegated_free = message.delegatedFree.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.delegated_free = [];
        }
        if (message.delegatedVesting) {
            obj.delegated_vesting = message.delegatedVesting.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.delegated_vesting = [];
        }
        obj.end_time = message.endTime;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBaseVestingAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = auth_1.BaseAccount.fromAmino(object.base_account);
        }
        message.originalVesting = object.original_vesting?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.delegatedFree = object.delegated_free?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.delegatedVesting = object.delegated_vesting?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = BigInt(object.end_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? auth_1.BaseAccount.toAmino(message.baseAccount) : undefined;
        if (message.originalVesting) {
            obj.original_vesting = message.originalVesting.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.original_vesting = [];
        }
        if (message.delegatedFree) {
            obj.delegated_free = message.delegatedFree.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.delegated_free = [];
        }
        if (message.delegatedVesting) {
            obj.delegated_vesting = message.delegatedVesting.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.delegated_vesting = [];
        }
        obj.end_time = message.endTime ? message.endTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseVestingAccount",
            value: exports.BaseVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BaseVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.BaseVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
            value: exports.BaseVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BaseVestingAccount.typeUrl, exports.BaseVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BaseVestingAccount.aminoType, exports.BaseVestingAccount.typeUrl);
function createBaseContinuousVestingAccount() {
    return {
        baseVestingAccount: undefined,
        startTime: BigInt(0)
    };
}
exports.ContinuousVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
    aminoType: "cosmos-sdk/ContinuousVestingAccount",
    is(o) {
        return o && (o.$typeUrl === exports.ContinuousVestingAccount.typeUrl || typeof o.startTime === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ContinuousVestingAccount.typeUrl || typeof o.start_time === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ContinuousVestingAccount.typeUrl || typeof o.start_time === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
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
            baseVestingAccount: (0, helpers_1.isSet)(object.baseVestingAccount) ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
            startTime: (0, helpers_1.isSet)(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
        message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContinuousVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            baseVestingAccount: object.base_vesting_account ? exports.BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined,
            startTime: object?.start_time
        };
    },
    toSDK(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
        obj.start_time = message.startTime;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseContinuousVestingAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        obj.start_time = message.startTime ? message.startTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContinuousVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ContinuousVestingAccount",
            value: exports.ContinuousVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContinuousVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.ContinuousVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
            value: exports.ContinuousVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ContinuousVestingAccount.typeUrl, exports.ContinuousVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ContinuousVestingAccount.aminoType, exports.ContinuousVestingAccount.typeUrl);
function createBaseDelayedVestingAccount() {
    return {
        baseVestingAccount: undefined
    };
}
exports.DelayedVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
    aminoType: "cosmos-sdk/DelayedVestingAccount",
    is(o) {
        return o && o.$typeUrl === exports.DelayedVestingAccount.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.DelayedVestingAccount.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.DelayedVestingAccount.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: (0, helpers_1.isSet)(object.baseVestingAccount) ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelayedVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            baseVestingAccount: object.base_vesting_account ? exports.BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDelayedVestingAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelayedVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelayedVestingAccount",
            value: exports.DelayedVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelayedVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.DelayedVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
            value: exports.DelayedVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DelayedVestingAccount.typeUrl, exports.DelayedVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DelayedVestingAccount.aminoType, exports.DelayedVestingAccount.typeUrl);
function createBasePeriod() {
    return {
        length: BigInt(0),
        amount: []
    };
}
exports.Period = {
    typeUrl: "/cosmos.vesting.v1beta1.Period",
    aminoType: "cosmos-sdk/Period",
    is(o) {
        return o && (o.$typeUrl === exports.Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Period.typeUrl || typeof o.length === "bigint" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.length !== BigInt(0)) {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = reader.int64();
                    break;
                case 2:
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
            length: (0, helpers_1.isSet)(object.length) ? BigInt(object.length.toString()) : BigInt(0),
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined && (obj.length = (message.length || BigInt(0)).toString());
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriod();
        message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            length: object?.length,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.length = message.length;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBasePeriod();
        if (object.length !== undefined && object.length !== null) {
            message.length = BigInt(object.length);
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.length = message.length ? message.length.toString() : undefined;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Period.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Period",
            value: exports.Period.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Period.decode(message.value);
    },
    toProto(message) {
        return exports.Period.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.Period",
            value: exports.Period.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Period.typeUrl, exports.Period);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Period.aminoType, exports.Period.typeUrl);
function createBasePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        startTime: BigInt(0),
        vestingPeriods: []
    };
}
exports.PeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
    aminoType: "cosmos-sdk/PeriodicVestingAccount",
    is(o) {
        return o && (o.$typeUrl === exports.PeriodicVestingAccount.typeUrl || typeof o.startTime === "bigint" && Array.isArray(o.vestingPeriods) && (!o.vestingPeriods.length || exports.Period.is(o.vestingPeriods[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PeriodicVestingAccount.typeUrl || typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || exports.Period.isSDK(o.vesting_periods[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PeriodicVestingAccount.typeUrl || typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || exports.Period.isAmino(o.vesting_periods[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(16).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                case 3:
                    message.vestingPeriods.push(exports.Period.decode(reader, reader.uint32()));
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
            baseVestingAccount: (0, helpers_1.isSet)(object.baseVestingAccount) ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
            startTime: (0, helpers_1.isSet)(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
            vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e) => exports.Period.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
        message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map(e => e ? exports.Period.toJSON(e) : undefined);
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodicVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        message.vestingPeriods = object.vestingPeriods?.map(e => exports.Period.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            baseVestingAccount: object.base_vesting_account ? exports.BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined,
            startTime: object?.start_time,
            vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e) => exports.Period.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
        obj.start_time = message.startTime;
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(e => e ? exports.Period.toSDK(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBasePeriodicVestingAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        message.vestingPeriods = object.vesting_periods?.map(e => exports.Period.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        obj.start_time = message.startTime ? message.startTime.toString() : undefined;
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(e => e ? exports.Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicVestingAccount",
            value: exports.PeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PeriodicVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.PeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
            value: exports.PeriodicVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PeriodicVestingAccount.typeUrl, exports.PeriodicVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PeriodicVestingAccount.aminoType, exports.PeriodicVestingAccount.typeUrl);
function createBasePermanentLockedAccount() {
    return {
        baseVestingAccount: undefined
    };
}
exports.PermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
    aminoType: "cosmos-sdk/PermanentLockedAccount",
    is(o) {
        return o && o.$typeUrl === exports.PermanentLockedAccount.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.PermanentLockedAccount.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.PermanentLockedAccount.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: (0, helpers_1.isSet)(object.baseVestingAccount) ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePermanentLockedAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            baseVestingAccount: object.base_vesting_account ? exports.BaseVestingAccount.fromSDK(object.base_vesting_account) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toSDK(message.baseVestingAccount) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBasePermanentLockedAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? exports.BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PermanentLockedAccount",
            value: exports.PermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PermanentLockedAccount.decode(message.value);
    },
    toProto(message) {
        return exports.PermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
            value: exports.PermanentLockedAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PermanentLockedAccount.typeUrl, exports.PermanentLockedAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PermanentLockedAccount.aminoType, exports.PermanentLockedAccount.typeUrl);
