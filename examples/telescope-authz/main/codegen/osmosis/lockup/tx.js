"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgForceUnlockResponse = exports.MsgForceUnlock = exports.MsgExtendLockupResponse = exports.MsgExtendLockup = exports.MsgBeginUnlockingResponse = exports.MsgBeginUnlocking = exports.MsgBeginUnlockingAllResponse = exports.MsgBeginUnlockingAll = exports.MsgLockTokensResponse = exports.MsgLockTokens = void 0;
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("./lock");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseMsgLockTokens() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        coins: []
    };
}
exports.MsgLockTokens = {
    typeUrl: "/osmosis.lockup.MsgLockTokens",
    aminoType: "osmosis/lockup/lock-tokens",
    is(o) {
        return o && (o.$typeUrl === exports.MsgLockTokens.typeUrl || typeof o.owner === "string" && duration_1.Duration.is(o.duration) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgLockTokens.typeUrl || typeof o.owner === "string" && duration_1.Duration.isSDK(o.duration) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgLockTokens.typeUrl || typeof o.owner === "string" && duration_1.Duration.isAmino(o.duration) && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokens();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgLockTokens();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLockTokens.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens",
            value: exports.MsgLockTokens.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockTokens.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockTokens.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokens",
            value: exports.MsgLockTokens.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLockTokens.typeUrl, exports.MsgLockTokens);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLockTokens.aminoType, exports.MsgLockTokens.typeUrl);
function createBaseMsgLockTokensResponse() {
    return {
        ID: BigInt(0)
    };
}
exports.MsgLockTokensResponse = {
    typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
    aminoType: "osmosis/lockup/lock-tokens-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgLockTokensResponse.typeUrl || typeof o.ID === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgLockTokensResponse.typeUrl || typeof o.ID === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgLockTokensResponse.typeUrl || typeof o.ID === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
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
            ID: (0, helpers_1.isSet)(object.ID) ? BigInt(object.ID.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokensResponse();
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            ID: object?.ID
        };
    },
    toSDK(message) {
        const obj = {};
        obj.ID = message.ID;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgLockTokensResponse();
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ID = message.ID ? message.ID.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLockTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens-response",
            value: exports.MsgLockTokensResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockTokensResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
            value: exports.MsgLockTokensResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLockTokensResponse.typeUrl, exports.MsgLockTokensResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLockTokensResponse.aminoType, exports.MsgLockTokensResponse.typeUrl);
function createBaseMsgBeginUnlockingAll() {
    return {
        owner: ""
    };
}
exports.MsgBeginUnlockingAll = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
    aminoType: "osmosis/lockup/begin-unlock-tokens",
    is(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingAll.typeUrl || typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingAll.typeUrl || typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingAll.typeUrl || typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAll();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAll();
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingAll();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginUnlockingAll.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-tokens",
            value: exports.MsgBeginUnlockingAll.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlockingAll.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlockingAll.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
            value: exports.MsgBeginUnlockingAll.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBeginUnlockingAll.typeUrl, exports.MsgBeginUnlockingAll);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBeginUnlockingAll.aminoType, exports.MsgBeginUnlockingAll.typeUrl);
function createBaseMsgBeginUnlockingAllResponse() {
    return {
        unlocks: []
    };
}
exports.MsgBeginUnlockingAllResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
    aminoType: "osmosis/lockup/begin-unlocking-all-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingAllResponse.typeUrl || Array.isArray(o.unlocks) && (!o.unlocks.length || lock_1.PeriodLock.is(o.unlocks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingAllResponse.typeUrl || Array.isArray(o.unlocks) && (!o.unlocks.length || lock_1.PeriodLock.isSDK(o.unlocks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingAllResponse.typeUrl || Array.isArray(o.unlocks) && (!o.unlocks.length || lock_1.PeriodLock.isAmino(o.unlocks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.unlocks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlocks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginUnlockingAllResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-all-response",
            value: exports.MsgBeginUnlockingAllResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlockingAllResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlockingAllResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
            value: exports.MsgBeginUnlockingAllResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBeginUnlockingAllResponse.typeUrl, exports.MsgBeginUnlockingAllResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBeginUnlockingAllResponse.aminoType, exports.MsgBeginUnlockingAllResponse.typeUrl);
function createBaseMsgBeginUnlocking() {
    return {
        owner: "",
        ID: BigInt(0),
        coins: []
    };
}
exports.MsgBeginUnlocking = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
    aminoType: "osmosis/lockup/begin-unlock-period-lock",
    is(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlocking.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlocking.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlocking.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlocking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            ID: (0, helpers_1.isSet)(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlocking();
        message.owner = object.owner ?? "";
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            ID: object?.ID,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlocking();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID);
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID ? message.ID.toString() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginUnlocking.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-period-lock",
            value: exports.MsgBeginUnlocking.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlocking.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlocking.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
            value: exports.MsgBeginUnlocking.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBeginUnlocking.typeUrl, exports.MsgBeginUnlocking);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBeginUnlocking.aminoType, exports.MsgBeginUnlocking.typeUrl);
function createBaseMsgBeginUnlockingResponse() {
    return {
        success: false
    };
}
exports.MsgBeginUnlockingResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
    aminoType: "osmosis/lockup/begin-unlocking-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingResponse.typeUrl || typeof o.success === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingResponse.typeUrl || typeof o.success === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgBeginUnlockingResponse.typeUrl || typeof o.success === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: (0, helpers_1.isSet)(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            success: object?.success
        };
    },
    toSDK(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginUnlockingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-response",
            value: exports.MsgBeginUnlockingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlockingResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlockingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
            value: exports.MsgBeginUnlockingResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBeginUnlockingResponse.typeUrl, exports.MsgBeginUnlockingResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBeginUnlockingResponse.aminoType, exports.MsgBeginUnlockingResponse.typeUrl);
function createBaseMsgExtendLockup() {
    return {
        owner: "",
        ID: BigInt(0),
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.MsgExtendLockup = {
    typeUrl: "/osmosis.lockup.MsgExtendLockup",
    aminoType: "osmosis/lockup/extend-lockup",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExtendLockup.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && duration_1.Duration.is(o.duration));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExtendLockup.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && duration_1.Duration.isSDK(o.duration));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExtendLockup.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && duration_1.Duration.isAmino(o.duration));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            ID: (0, helpers_1.isSet)(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockup();
        message.owner = object.owner ?? "";
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            ID: object?.ID,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExtendLockup();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID ? message.ID.toString() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExtendLockup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup",
            value: exports.MsgExtendLockup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExtendLockup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExtendLockup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockup",
            value: exports.MsgExtendLockup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExtendLockup.typeUrl, exports.MsgExtendLockup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExtendLockup.aminoType, exports.MsgExtendLockup.typeUrl);
function createBaseMsgExtendLockupResponse() {
    return {
        success: false
    };
}
exports.MsgExtendLockupResponse = {
    typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
    aminoType: "osmosis/lockup/extend-lockup-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExtendLockupResponse.typeUrl || typeof o.success === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExtendLockupResponse.typeUrl || typeof o.success === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExtendLockupResponse.typeUrl || typeof o.success === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: (0, helpers_1.isSet)(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockupResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            success: object?.success
        };
    },
    toSDK(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExtendLockupResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExtendLockupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup-response",
            value: exports.MsgExtendLockupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExtendLockupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExtendLockupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
            value: exports.MsgExtendLockupResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExtendLockupResponse.typeUrl, exports.MsgExtendLockupResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExtendLockupResponse.aminoType, exports.MsgExtendLockupResponse.typeUrl);
function createBaseMsgForceUnlock() {
    return {
        owner: "",
        ID: BigInt(0),
        coins: []
    };
}
exports.MsgForceUnlock = {
    typeUrl: "/osmosis.lockup.MsgForceUnlock",
    aminoType: "osmosis/lockup/force-unlock",
    is(o) {
        return o && (o.$typeUrl === exports.MsgForceUnlock.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgForceUnlock.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgForceUnlock.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            ID: (0, helpers_1.isSet)(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlock();
        message.owner = object.owner ?? "";
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            ID: object?.ID,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgForceUnlock();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID);
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID ? message.ID.toString() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgForceUnlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock",
            value: exports.MsgForceUnlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgForceUnlock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceUnlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlock",
            value: exports.MsgForceUnlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgForceUnlock.typeUrl, exports.MsgForceUnlock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgForceUnlock.aminoType, exports.MsgForceUnlock.typeUrl);
function createBaseMsgForceUnlockResponse() {
    return {
        success: false
    };
}
exports.MsgForceUnlockResponse = {
    typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
    aminoType: "osmosis/lockup/force-unlock-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgForceUnlockResponse.typeUrl || typeof o.success === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgForceUnlockResponse.typeUrl || typeof o.success === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgForceUnlockResponse.typeUrl || typeof o.success === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: (0, helpers_1.isSet)(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlockResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            success: object?.success
        };
    },
    toSDK(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgForceUnlockResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgForceUnlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock-response",
            value: exports.MsgForceUnlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgForceUnlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceUnlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
            value: exports.MsgForceUnlockResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgForceUnlockResponse.typeUrl, exports.MsgForceUnlockResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgForceUnlockResponse.aminoType, exports.MsgForceUnlockResponse.typeUrl);
