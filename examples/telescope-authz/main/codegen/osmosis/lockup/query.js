"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.AccountLockedLongerDurationDenomResponse = exports.AccountLockedLongerDurationDenomRequest = exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = exports.AccountLockedDurationResponse = exports.AccountLockedDurationRequest = exports.AccountLockedLongerDurationResponse = exports.AccountLockedLongerDurationRequest = exports.SyntheticLockupsByLockupIDResponse = exports.SyntheticLockupsByLockupIDRequest = exports.LockedResponse = exports.LockedRequest = exports.LockedDenomResponse = exports.LockedDenomRequest = exports.AccountLockedPastTimeDenomResponse = exports.AccountLockedPastTimeDenomRequest = exports.AccountUnlockedBeforeTimeResponse = exports.AccountUnlockedBeforeTimeRequest = exports.AccountLockedPastTimeNotUnlockingOnlyResponse = exports.AccountLockedPastTimeNotUnlockingOnlyRequest = exports.AccountLockedPastTimeResponse = exports.AccountLockedPastTimeRequest = exports.AccountLockedCoinsResponse = exports.AccountLockedCoinsRequest = exports.AccountUnlockingCoinsResponse = exports.AccountUnlockingCoinsRequest = exports.AccountUnlockableCoinsResponse = exports.AccountUnlockableCoinsRequest = exports.ModuleLockedAmountResponse = exports.ModuleLockedAmountRequest = exports.ModuleBalanceResponse = exports.ModuleBalanceRequest = void 0;
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("./lock");
const params_1 = require("./params");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseModuleBalanceRequest() {
    return {};
}
exports.ModuleBalanceRequest = {
    typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
    aminoType: "osmosis/lockup/module-balance-request",
    is(o) {
        return o && o.$typeUrl === exports.ModuleBalanceRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ModuleBalanceRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ModuleBalanceRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceRequest();
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
        const message = createBaseModuleBalanceRequest();
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
        const message = createBaseModuleBalanceRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-balance-request",
            value: exports.ModuleBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
            value: exports.ModuleBalanceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleBalanceRequest.typeUrl, exports.ModuleBalanceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleBalanceRequest.aminoType, exports.ModuleBalanceRequest.typeUrl);
function createBaseModuleBalanceResponse() {
    return {
        coins: []
    };
}
exports.ModuleBalanceResponse = {
    typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
    aminoType: "osmosis/lockup/module-balance-response",
    is(o) {
        return o && (o.$typeUrl === exports.ModuleBalanceResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleBalanceResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleBalanceResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
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
        const message = createBaseModuleBalanceResponse();
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
        const message = createBaseModuleBalanceResponse();
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
        const message = createBaseModuleBalanceResponse();
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
        return exports.ModuleBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-balance-response",
            value: exports.ModuleBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
            value: exports.ModuleBalanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleBalanceResponse.typeUrl, exports.ModuleBalanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleBalanceResponse.aminoType, exports.ModuleBalanceResponse.typeUrl);
function createBaseModuleLockedAmountRequest() {
    return {};
}
exports.ModuleLockedAmountRequest = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
    aminoType: "osmosis/lockup/module-locked-amount-request",
    is(o) {
        return o && o.$typeUrl === exports.ModuleLockedAmountRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ModuleLockedAmountRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ModuleLockedAmountRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountRequest();
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
        const message = createBaseModuleLockedAmountRequest();
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
        const message = createBaseModuleLockedAmountRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleLockedAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-locked-amount-request",
            value: exports.ModuleLockedAmountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleLockedAmountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleLockedAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
            value: exports.ModuleLockedAmountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleLockedAmountRequest.typeUrl, exports.ModuleLockedAmountRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleLockedAmountRequest.aminoType, exports.ModuleLockedAmountRequest.typeUrl);
function createBaseModuleLockedAmountResponse() {
    return {
        coins: []
    };
}
exports.ModuleLockedAmountResponse = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
    aminoType: "osmosis/lockup/module-locked-amount-response",
    is(o) {
        return o && (o.$typeUrl === exports.ModuleLockedAmountResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleLockedAmountResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleLockedAmountResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
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
        const message = createBaseModuleLockedAmountResponse();
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
        const message = createBaseModuleLockedAmountResponse();
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
        const message = createBaseModuleLockedAmountResponse();
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
        return exports.ModuleLockedAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-locked-amount-response",
            value: exports.ModuleLockedAmountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleLockedAmountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleLockedAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
            value: exports.ModuleLockedAmountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleLockedAmountResponse.typeUrl, exports.ModuleLockedAmountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleLockedAmountResponse.aminoType, exports.ModuleLockedAmountResponse.typeUrl);
function createBaseAccountUnlockableCoinsRequest() {
    return {
        owner: ""
    };
}
exports.AccountUnlockableCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
    aminoType: "osmosis/lockup/account-unlockable-coins-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountUnlockableCoinsRequest.typeUrl || typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountUnlockableCoinsRequest.typeUrl || typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountUnlockableCoinsRequest.typeUrl || typeof o.owner === "string");
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
        const message = createBaseAccountUnlockableCoinsRequest();
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
        const message = createBaseAccountUnlockableCoinsRequest();
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
        const message = createBaseAccountUnlockableCoinsRequest();
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
        return exports.AccountUnlockableCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlockable-coins-request",
            value: exports.AccountUnlockableCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockableCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockableCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
            value: exports.AccountUnlockableCoinsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountUnlockableCoinsRequest.typeUrl, exports.AccountUnlockableCoinsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountUnlockableCoinsRequest.aminoType, exports.AccountUnlockableCoinsRequest.typeUrl);
function createBaseAccountUnlockableCoinsResponse() {
    return {
        coins: []
    };
}
exports.AccountUnlockableCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
    aminoType: "osmosis/lockup/account-unlockable-coins-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountUnlockableCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountUnlockableCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountUnlockableCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
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
        const message = createBaseAccountUnlockableCoinsResponse();
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
        const message = createBaseAccountUnlockableCoinsResponse();
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
        const message = createBaseAccountUnlockableCoinsResponse();
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
        return exports.AccountUnlockableCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlockable-coins-response",
            value: exports.AccountUnlockableCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockableCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockableCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
            value: exports.AccountUnlockableCoinsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountUnlockableCoinsResponse.typeUrl, exports.AccountUnlockableCoinsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountUnlockableCoinsResponse.aminoType, exports.AccountUnlockableCoinsResponse.typeUrl);
function createBaseAccountUnlockingCoinsRequest() {
    return {
        owner: ""
    };
}
exports.AccountUnlockingCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
    aminoType: "osmosis/lockup/account-unlocking-coins-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountUnlockingCoinsRequest.typeUrl || typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountUnlockingCoinsRequest.typeUrl || typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountUnlockingCoinsRequest.typeUrl || typeof o.owner === "string");
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
        const message = createBaseAccountUnlockingCoinsRequest();
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
        const message = createBaseAccountUnlockingCoinsRequest();
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
        const message = createBaseAccountUnlockingCoinsRequest();
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
        return exports.AccountUnlockingCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocking-coins-request",
            value: exports.AccountUnlockingCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockingCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockingCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
            value: exports.AccountUnlockingCoinsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountUnlockingCoinsRequest.typeUrl, exports.AccountUnlockingCoinsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountUnlockingCoinsRequest.aminoType, exports.AccountUnlockingCoinsRequest.typeUrl);
function createBaseAccountUnlockingCoinsResponse() {
    return {
        coins: []
    };
}
exports.AccountUnlockingCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
    aminoType: "osmosis/lockup/account-unlocking-coins-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountUnlockingCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountUnlockingCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountUnlockingCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
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
        const message = createBaseAccountUnlockingCoinsResponse();
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
        const message = createBaseAccountUnlockingCoinsResponse();
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
        const message = createBaseAccountUnlockingCoinsResponse();
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
        return exports.AccountUnlockingCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocking-coins-response",
            value: exports.AccountUnlockingCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockingCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockingCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
            value: exports.AccountUnlockingCoinsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountUnlockingCoinsResponse.typeUrl, exports.AccountUnlockingCoinsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountUnlockingCoinsResponse.aminoType, exports.AccountUnlockingCoinsResponse.typeUrl);
function createBaseAccountLockedCoinsRequest() {
    return {
        owner: ""
    };
}
exports.AccountLockedCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
    aminoType: "osmosis/lockup/account-locked-coins-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedCoinsRequest.typeUrl || typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedCoinsRequest.typeUrl || typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedCoinsRequest.typeUrl || typeof o.owner === "string");
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
        const message = createBaseAccountLockedCoinsRequest();
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
        const message = createBaseAccountLockedCoinsRequest();
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
        const message = createBaseAccountLockedCoinsRequest();
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
        return exports.AccountLockedCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-coins-request",
            value: exports.AccountLockedCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
            value: exports.AccountLockedCoinsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedCoinsRequest.typeUrl, exports.AccountLockedCoinsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedCoinsRequest.aminoType, exports.AccountLockedCoinsRequest.typeUrl);
function createBaseAccountLockedCoinsResponse() {
    return {
        coins: []
    };
}
exports.AccountLockedCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
    aminoType: "osmosis/lockup/account-locked-coins-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedCoinsResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
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
        const message = createBaseAccountLockedCoinsResponse();
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
        const message = createBaseAccountLockedCoinsResponse();
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
        const message = createBaseAccountLockedCoinsResponse();
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
        return exports.AccountLockedCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-coins-response",
            value: exports.AccountLockedCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
            value: exports.AccountLockedCoinsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedCoinsResponse.typeUrl, exports.AccountLockedCoinsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedCoinsResponse.aminoType, exports.AccountLockedCoinsResponse.typeUrl);
function createBaseAccountLockedPastTimeRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
exports.AccountLockedPastTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
    aminoType: "osmosis/lockup/account-locked-past-time-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.is(o.timestamp));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isSDK(o.timestamp));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isAmino(o.timestamp));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-request",
            value: exports.AccountLockedPastTimeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
            value: exports.AccountLockedPastTimeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedPastTimeRequest.typeUrl, exports.AccountLockedPastTimeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedPastTimeRequest.aminoType, exports.AccountLockedPastTimeRequest.typeUrl);
function createBaseAccountLockedPastTimeResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedPastTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
    aminoType: "osmosis/lockup/account-locked-past-time-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-response",
            value: exports.AccountLockedPastTimeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
            value: exports.AccountLockedPastTimeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedPastTimeResponse.typeUrl, exports.AccountLockedPastTimeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedPastTimeResponse.aminoType, exports.AccountLockedPastTimeResponse.typeUrl);
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
exports.AccountLockedPastTimeNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
    aminoType: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.is(o.timestamp));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isSDK(o.timestamp));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isAmino(o.timestamp));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl, exports.AccountLockedPastTimeNotUnlockingOnlyRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedPastTimeNotUnlockingOnlyRequest.aminoType, exports.AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl);
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedPastTimeNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
    aminoType: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl, exports.AccountLockedPastTimeNotUnlockingOnlyResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedPastTimeNotUnlockingOnlyResponse.aminoType, exports.AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl);
function createBaseAccountUnlockedBeforeTimeRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
exports.AccountUnlockedBeforeTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
    aminoType: "osmosis/lockup/account-unlocked-before-time-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountUnlockedBeforeTimeRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.is(o.timestamp));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountUnlockedBeforeTimeRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isSDK(o.timestamp));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountUnlockedBeforeTimeRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isAmino(o.timestamp));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountUnlockedBeforeTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocked-before-time-request",
            value: exports.AccountUnlockedBeforeTimeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockedBeforeTimeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockedBeforeTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
            value: exports.AccountUnlockedBeforeTimeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountUnlockedBeforeTimeRequest.typeUrl, exports.AccountUnlockedBeforeTimeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountUnlockedBeforeTimeRequest.aminoType, exports.AccountUnlockedBeforeTimeRequest.typeUrl);
function createBaseAccountUnlockedBeforeTimeResponse() {
    return {
        locks: []
    };
}
exports.AccountUnlockedBeforeTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
    aminoType: "osmosis/lockup/account-unlocked-before-time-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountUnlockedBeforeTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountUnlockedBeforeTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountUnlockedBeforeTimeResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountUnlockedBeforeTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocked-before-time-response",
            value: exports.AccountUnlockedBeforeTimeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockedBeforeTimeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockedBeforeTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
            value: exports.AccountUnlockedBeforeTimeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountUnlockedBeforeTimeResponse.typeUrl, exports.AccountUnlockedBeforeTimeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountUnlockedBeforeTimeResponse.aminoType, exports.AccountUnlockedBeforeTimeResponse.typeUrl);
function createBaseAccountLockedPastTimeDenomRequest() {
    return {
        owner: "",
        timestamp: new Date(),
        denom: ""
    };
}
exports.AccountLockedPastTimeDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
    aminoType: "osmosis/lockup/account-locked-past-time-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeDenomRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.is(o.timestamp) && typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeDenomRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isSDK(o.timestamp) && typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeDenomRequest.typeUrl || typeof o.owner === "string" && timestamp_1.Timestamp.isAmino(o.timestamp) && typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.denom = reader.string();
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
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined,
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ?? undefined,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeDenomRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-denom-request",
            value: exports.AccountLockedPastTimeDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
            value: exports.AccountLockedPastTimeDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedPastTimeDenomRequest.typeUrl, exports.AccountLockedPastTimeDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedPastTimeDenomRequest.aminoType, exports.AccountLockedPastTimeDenomRequest.typeUrl);
function createBaseAccountLockedPastTimeDenomResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedPastTimeDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
    aminoType: "osmosis/lockup/account-locked-past-time-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedPastTimeDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeDenomResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-denom-response",
            value: exports.AccountLockedPastTimeDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
            value: exports.AccountLockedPastTimeDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedPastTimeDenomResponse.typeUrl, exports.AccountLockedPastTimeDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedPastTimeDenomResponse.aminoType, exports.AccountLockedPastTimeDenomResponse.typeUrl);
function createBaseLockedDenomRequest() {
    return {
        denom: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.LockedDenomRequest = {
    typeUrl: "/osmosis.lockup.LockedDenomRequest",
    aminoType: "osmosis/lockup/locked-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.LockedDenomRequest.typeUrl || typeof o.denom === "string" && duration_1.Duration.is(o.duration));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LockedDenomRequest.typeUrl || typeof o.denom === "string" && duration_1.Duration.isSDK(o.duration));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LockedDenomRequest.typeUrl || typeof o.denom === "string" && duration_1.Duration.isAmino(o.duration));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomRequest();
        message.denom = object.denom ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLockedDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockedDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-denom-request",
            value: exports.LockedDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.LockedDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedDenomRequest",
            value: exports.LockedDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockedDenomRequest.typeUrl, exports.LockedDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LockedDenomRequest.aminoType, exports.LockedDenomRequest.typeUrl);
function createBaseLockedDenomResponse() {
    return {
        amount: ""
    };
}
exports.LockedDenomResponse = {
    typeUrl: "/osmosis.lockup.LockedDenomResponse",
    aminoType: "osmosis/lockup/locked-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.LockedDenomResponse.typeUrl || typeof o.amount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LockedDenomResponse.typeUrl || typeof o.amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LockedDenomResponse.typeUrl || typeof o.amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
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
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomResponse();
        message.amount = object.amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLockedDenomResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockedDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-denom-response",
            value: exports.LockedDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.LockedDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedDenomResponse",
            value: exports.LockedDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockedDenomResponse.typeUrl, exports.LockedDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LockedDenomResponse.aminoType, exports.LockedDenomResponse.typeUrl);
function createBaseLockedRequest() {
    return {
        lockId: BigInt(0)
    };
}
exports.LockedRequest = {
    typeUrl: "/osmosis.lockup.LockedRequest",
    aminoType: "osmosis/lockup/locked-request",
    is(o) {
        return o && (o.$typeUrl === exports.LockedRequest.typeUrl || typeof o.lockId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LockedRequest.typeUrl || typeof o.lock_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LockedRequest.typeUrl || typeof o.lock_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
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
            lockId: (0, helpers_1.isSet)(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedRequest();
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            lockId: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lockId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLockedRequest();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockedRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-request",
            value: exports.LockedRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedRequest.decode(message.value);
    },
    toProto(message) {
        return exports.LockedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedRequest",
            value: exports.LockedRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockedRequest.typeUrl, exports.LockedRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LockedRequest.aminoType, exports.LockedRequest.typeUrl);
function createBaseLockedResponse() {
    return {
        lock: undefined
    };
}
exports.LockedResponse = {
    typeUrl: "/osmosis.lockup.LockedResponse",
    aminoType: "osmosis/lockup/locked-response",
    is(o) {
        return o && o.$typeUrl === exports.LockedResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.LockedResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.LockedResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lock !== undefined) {
            lock_1.PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock = lock_1.PeriodLock.decode(reader, reader.uint32());
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
            lock: (0, helpers_1.isSet)(object.lock) ? lock_1.PeriodLock.fromJSON(object.lock) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock !== undefined && (obj.lock = message.lock ? lock_1.PeriodLock.toJSON(message.lock) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedResponse();
        message.lock = object.lock !== undefined && object.lock !== null ? lock_1.PeriodLock.fromPartial(object.lock) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            lock: object.lock ? lock_1.PeriodLock.fromSDK(object.lock) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.lock !== undefined && (obj.lock = message.lock ? lock_1.PeriodLock.toSDK(message.lock) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLockedResponse();
        if (object.lock !== undefined && object.lock !== null) {
            message.lock = lock_1.PeriodLock.fromAmino(object.lock);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock = message.lock ? lock_1.PeriodLock.toAmino(message.lock) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-response",
            value: exports.LockedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.LockedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedResponse",
            value: exports.LockedResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockedResponse.typeUrl, exports.LockedResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LockedResponse.aminoType, exports.LockedResponse.typeUrl);
function createBaseSyntheticLockupsByLockupIDRequest() {
    return {
        lockId: BigInt(0)
    };
}
exports.SyntheticLockupsByLockupIDRequest = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
    aminoType: "osmosis/lockup/synthetic-lockups-by-lockup-id-request",
    is(o) {
        return o && (o.$typeUrl === exports.SyntheticLockupsByLockupIDRequest.typeUrl || typeof o.lockId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SyntheticLockupsByLockupIDRequest.typeUrl || typeof o.lock_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SyntheticLockupsByLockupIDRequest.typeUrl || typeof o.lock_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
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
            lockId: (0, helpers_1.isSet)(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupsByLockupIDRequest();
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            lockId: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lockId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLockupsByLockupIDRequest();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SyntheticLockupsByLockupIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lockups-by-lockup-id-request",
            value: exports.SyntheticLockupsByLockupIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SyntheticLockupsByLockupIDRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SyntheticLockupsByLockupIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
            value: exports.SyntheticLockupsByLockupIDRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SyntheticLockupsByLockupIDRequest.typeUrl, exports.SyntheticLockupsByLockupIDRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SyntheticLockupsByLockupIDRequest.aminoType, exports.SyntheticLockupsByLockupIDRequest.typeUrl);
function createBaseSyntheticLockupsByLockupIDResponse() {
    return {
        syntheticLocks: []
    };
}
exports.SyntheticLockupsByLockupIDResponse = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
    aminoType: "osmosis/lockup/synthetic-lockups-by-lockup-id-response",
    is(o) {
        return o && (o.$typeUrl === exports.SyntheticLockupsByLockupIDResponse.typeUrl || Array.isArray(o.syntheticLocks) && (!o.syntheticLocks.length || lock_1.SyntheticLock.is(o.syntheticLocks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SyntheticLockupsByLockupIDResponse.typeUrl || Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || lock_1.SyntheticLock.isSDK(o.synthetic_locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SyntheticLockupsByLockupIDResponse.typeUrl || Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || lock_1.SyntheticLock.isAmino(o.synthetic_locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.syntheticLocks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syntheticLocks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
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
            syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e) => lock_1.SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.syntheticLocks) {
            obj.syntheticLocks = message.syntheticLocks.map(e => e ? lock_1.SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.syntheticLocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        message.syntheticLocks = object.syntheticLocks?.map(e => lock_1.SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.syntheticLocks) {
            obj.synthetic_locks = message.syntheticLocks.map(e => e ? lock_1.SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        message.syntheticLocks = object.synthetic_locks?.map(e => lock_1.SyntheticLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.syntheticLocks) {
            obj.synthetic_locks = message.syntheticLocks.map(e => e ? lock_1.SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SyntheticLockupsByLockupIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lockups-by-lockup-id-response",
            value: exports.SyntheticLockupsByLockupIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SyntheticLockupsByLockupIDResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SyntheticLockupsByLockupIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
            value: exports.SyntheticLockupsByLockupIDResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SyntheticLockupsByLockupIDResponse.typeUrl, exports.SyntheticLockupsByLockupIDResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SyntheticLockupsByLockupIDResponse.aminoType, exports.SyntheticLockupsByLockupIDResponse.typeUrl);
function createBaseAccountLockedLongerDurationRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.AccountLockedLongerDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
    aminoType: "osmosis/lockup/account-locked-longer-duration-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.is(o.duration));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isSDK(o.duration));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isAmino(o.duration));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-request",
            value: exports.AccountLockedLongerDurationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
            value: exports.AccountLockedLongerDurationRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedLongerDurationRequest.typeUrl, exports.AccountLockedLongerDurationRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedLongerDurationRequest.aminoType, exports.AccountLockedLongerDurationRequest.typeUrl);
function createBaseAccountLockedLongerDurationResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedLongerDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
    aminoType: "osmosis/lockup/account-locked-longer-duration-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-response",
            value: exports.AccountLockedLongerDurationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
            value: exports.AccountLockedLongerDurationResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedLongerDurationResponse.typeUrl, exports.AccountLockedLongerDurationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedLongerDurationResponse.aminoType, exports.AccountLockedLongerDurationResponse.typeUrl);
function createBaseAccountLockedDurationRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.AccountLockedDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
    aminoType: "osmosis/lockup/account-locked-duration-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedDurationRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.is(o.duration));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedDurationRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isSDK(o.duration));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedDurationRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isAmino(o.duration));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedDurationRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-duration-request",
            value: exports.AccountLockedDurationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedDurationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
            value: exports.AccountLockedDurationRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedDurationRequest.typeUrl, exports.AccountLockedDurationRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedDurationRequest.aminoType, exports.AccountLockedDurationRequest.typeUrl);
function createBaseAccountLockedDurationResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
    aminoType: "osmosis/lockup/account-locked-duration-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedDurationResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedDurationResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-duration-response",
            value: exports.AccountLockedDurationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedDurationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
            value: exports.AccountLockedDurationResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedDurationResponse.typeUrl, exports.AccountLockedDurationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedDurationResponse.aminoType, exports.AccountLockedDurationResponse.typeUrl);
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
    aminoType: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.is(o.duration));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isSDK(o.duration));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isAmino(o.duration));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl, exports.AccountLockedLongerDurationNotUnlockingOnlyRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.aminoType, exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl);
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
    aminoType: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl, exports.AccountLockedLongerDurationNotUnlockingOnlyResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.aminoType, exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl);
function createBaseAccountLockedLongerDurationDenomRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        denom: ""
    };
}
exports.AccountLockedLongerDurationDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
    aminoType: "osmosis/lockup/account-locked-longer-duration-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationDenomRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.is(o.duration) && typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationDenomRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isSDK(o.duration) && typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationDenomRequest.typeUrl || typeof o.owner === "string" && duration_1.Duration.isAmino(o.duration) && typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomRequest();
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
                    message.denom = reader.string();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-denom-request",
            value: exports.AccountLockedLongerDurationDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
            value: exports.AccountLockedLongerDurationDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedLongerDurationDenomRequest.typeUrl, exports.AccountLockedLongerDurationDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedLongerDurationDenomRequest.aminoType, exports.AccountLockedLongerDurationDenomRequest.typeUrl);
function createBaseAccountLockedLongerDurationDenomResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedLongerDurationDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
    aminoType: "osmosis/lockup/account-locked-longer-duration-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.is(o.locks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isSDK(o.locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccountLockedLongerDurationDenomResponse.typeUrl || Array.isArray(o.locks) && (!o.locks.length || lock_1.PeriodLock.isAmino(o.locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-denom-response",
            value: exports.AccountLockedLongerDurationDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
            value: exports.AccountLockedLongerDurationDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccountLockedLongerDurationDenomResponse.typeUrl, exports.AccountLockedLongerDurationDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccountLockedLongerDurationDenomResponse.aminoType, exports.AccountLockedLongerDurationDenomResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.lockup.QueryParamsRequest",
    aminoType: "osmosis/lockup/query-params-request",
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
            type: "osmosis/lockup/query-params-request",
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
            typeUrl: "/osmosis.lockup.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.lockup.QueryParamsResponse",
    aminoType: "osmosis/lockup/query-params-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/query-params-response",
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
            typeUrl: "/osmosis.lockup.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
