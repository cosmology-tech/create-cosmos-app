"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUnPoolWhitelistedPoolResponse = exports.MsgUnPoolWhitelistedPool = exports.MsgLockAndSuperfluidDelegateResponse = exports.MsgLockAndSuperfluidDelegate = exports.MsgSuperfluidUnbondLockResponse = exports.MsgSuperfluidUnbondLock = exports.MsgSuperfluidUndelegateResponse = exports.MsgSuperfluidUndelegate = exports.MsgSuperfluidDelegateResponse = exports.MsgSuperfluidDelegate = void 0;
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseMsgSuperfluidDelegate() {
    return {
        sender: "",
        lockId: BigInt(0),
        valAddr: ""
    };
}
exports.MsgSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
    aminoType: "osmosis/superfluid-delegate",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidDelegate.typeUrl || typeof o.sender === "string" && typeof o.lockId === "bigint" && typeof o.valAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidDelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint" && typeof o.val_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidDelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint" && typeof o.val_addr === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.valAddr = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            lockId: (0, helpers_1.isSet)(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0),
            valAddr: (0, helpers_1.isSet)(object.valAddr) ? String(object.valAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        message.valAddr = object.valAddr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            lockId: object?.lock_id,
            valAddr: object?.val_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lockId;
        obj.val_addr = message.valAddr;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
        obj.val_addr = message.valAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegate",
            value: exports.MsgSuperfluidDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
            value: exports.MsgSuperfluidDelegate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidDelegate.typeUrl, exports.MsgSuperfluidDelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidDelegate.aminoType, exports.MsgSuperfluidDelegate.typeUrl);
function createBaseMsgSuperfluidDelegateResponse() {
    return {};
}
exports.MsgSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
    aminoType: "osmosis/superfluid-delegate-response",
    is(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidDelegateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidDelegateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidDelegateResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegateResponse();
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
        const message = createBaseMsgSuperfluidDelegateResponse();
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
        const message = createBaseMsgSuperfluidDelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegate-response",
            value: exports.MsgSuperfluidDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
            value: exports.MsgSuperfluidDelegateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidDelegateResponse.typeUrl, exports.MsgSuperfluidDelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidDelegateResponse.aminoType, exports.MsgSuperfluidDelegateResponse.typeUrl);
function createBaseMsgSuperfluidUndelegate() {
    return {
        sender: "",
        lockId: BigInt(0)
    };
}
exports.MsgSuperfluidUndelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
    aminoType: "osmosis/superfluid-undelegate",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidUndelegate.typeUrl || typeof o.sender === "string" && typeof o.lockId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidUndelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidUndelegate.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            lockId: (0, helpers_1.isSet)(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        message.sender = object.sender ?? "";
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            lockId: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lockId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegate",
            value: exports.MsgSuperfluidUndelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
            value: exports.MsgSuperfluidUndelegate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUndelegate.typeUrl, exports.MsgSuperfluidUndelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUndelegate.aminoType, exports.MsgSuperfluidUndelegate.typeUrl);
function createBaseMsgSuperfluidUndelegateResponse() {
    return {};
}
exports.MsgSuperfluidUndelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
    aminoType: "osmosis/superfluid-undelegate-response",
    is(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUndelegateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUndelegateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUndelegateResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateResponse();
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
        const message = createBaseMsgSuperfluidUndelegateResponse();
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
        const message = createBaseMsgSuperfluidUndelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegate-response",
            value: exports.MsgSuperfluidUndelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
            value: exports.MsgSuperfluidUndelegateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUndelegateResponse.typeUrl, exports.MsgSuperfluidUndelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUndelegateResponse.aminoType, exports.MsgSuperfluidUndelegateResponse.typeUrl);
function createBaseMsgSuperfluidUnbondLock() {
    return {
        sender: "",
        lockId: BigInt(0)
    };
}
exports.MsgSuperfluidUnbondLock = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
    aminoType: "osmosis/superfluid-unbond-lock",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidUnbondLock.typeUrl || typeof o.sender === "string" && typeof o.lockId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidUnbondLock.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSuperfluidUnbondLock.typeUrl || typeof o.sender === "string" && typeof o.lock_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            lockId: (0, helpers_1.isSet)(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        message.sender = object.sender ?? "";
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            lockId: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lockId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUnbondLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-unbond-lock",
            value: exports.MsgSuperfluidUnbondLock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
            value: exports.MsgSuperfluidUnbondLock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUnbondLock.typeUrl, exports.MsgSuperfluidUnbondLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUnbondLock.aminoType, exports.MsgSuperfluidUnbondLock.typeUrl);
function createBaseMsgSuperfluidUnbondLockResponse() {
    return {};
}
exports.MsgSuperfluidUnbondLockResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
    aminoType: "osmosis/superfluid-unbond-lock-response",
    is(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLockResponse();
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
        const message = createBaseMsgSuperfluidUnbondLockResponse();
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
        const message = createBaseMsgSuperfluidUnbondLockResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUnbondLockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-unbond-lock-response",
            value: exports.MsgSuperfluidUnbondLockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
            value: exports.MsgSuperfluidUnbondLockResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUnbondLockResponse.typeUrl, exports.MsgSuperfluidUnbondLockResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUnbondLockResponse.aminoType, exports.MsgSuperfluidUnbondLockResponse.typeUrl);
function createBaseMsgLockAndSuperfluidDelegate() {
    return {
        sender: "",
        coins: [],
        valAddr: ""
    };
}
exports.MsgLockAndSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
    aminoType: "osmosis/lock-and-superfluid-delegate",
    is(o) {
        return o && (o.$typeUrl === exports.MsgLockAndSuperfluidDelegate.typeUrl || typeof o.sender === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])) && typeof o.valAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgLockAndSuperfluidDelegate.typeUrl || typeof o.sender === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) && typeof o.val_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgLockAndSuperfluidDelegate.typeUrl || typeof o.sender === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) && typeof o.val_addr === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.valAddr = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            valAddr: (0, helpers_1.isSet)(object.valAddr) ? String(object.valAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.valAddr = object.valAddr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            valAddr: object?.val_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.val_addr = message.valAddr;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.val_addr = message.valAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLockAndSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-and-superfluid-delegate",
            value: exports.MsgLockAndSuperfluidDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
            value: exports.MsgLockAndSuperfluidDelegate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLockAndSuperfluidDelegate.typeUrl, exports.MsgLockAndSuperfluidDelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLockAndSuperfluidDelegate.aminoType, exports.MsgLockAndSuperfluidDelegate.typeUrl);
function createBaseMsgLockAndSuperfluidDelegateResponse() {
    return {
        ID: BigInt(0)
    };
}
exports.MsgLockAndSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
    aminoType: "osmosis/lock-and-superfluid-delegate-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgLockAndSuperfluidDelegateResponse.typeUrl || typeof o.ID === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgLockAndSuperfluidDelegateResponse.typeUrl || typeof o.ID === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgLockAndSuperfluidDelegateResponse.typeUrl || typeof o.ID === "bigint");
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
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
        return exports.MsgLockAndSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-and-superfluid-delegate-response",
            value: exports.MsgLockAndSuperfluidDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
            value: exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLockAndSuperfluidDelegateResponse.typeUrl, exports.MsgLockAndSuperfluidDelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLockAndSuperfluidDelegateResponse.aminoType, exports.MsgLockAndSuperfluidDelegateResponse.typeUrl);
function createBaseMsgUnPoolWhitelistedPool() {
    return {
        sender: "",
        poolId: BigInt(0)
    };
}
exports.MsgUnPoolWhitelistedPool = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
    aminoType: "osmosis/unpool-whitelisted-pool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUnPoolWhitelistedPool.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUnPoolWhitelistedPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUnPoolWhitelistedPool.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            poolId: (0, helpers_1.isSet)(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            poolId: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnPoolWhitelistedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/unpool-whitelisted-pool",
            value: exports.MsgUnPoolWhitelistedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
            value: exports.MsgUnPoolWhitelistedPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnPoolWhitelistedPool.typeUrl, exports.MsgUnPoolWhitelistedPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnPoolWhitelistedPool.aminoType, exports.MsgUnPoolWhitelistedPool.typeUrl);
function createBaseMsgUnPoolWhitelistedPoolResponse() {
    return {
        exitedLockIds: []
    };
}
exports.MsgUnPoolWhitelistedPoolResponse = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
    aminoType: "osmosis/un-pool-whitelisted-pool-response",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUnPoolWhitelistedPoolResponse.typeUrl || Array.isArray(o.exitedLockIds) && (!o.exitedLockIds.length || typeof o.exitedLockIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUnPoolWhitelistedPoolResponse.typeUrl || Array.isArray(o.exited_lock_ids) && (!o.exited_lock_ids.length || typeof o.exited_lock_ids[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUnPoolWhitelistedPoolResponse.typeUrl || Array.isArray(o.exited_lock_ids) && (!o.exited_lock_ids.length || typeof o.exited_lock_ids[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.exitedLockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.exitedLockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.exitedLockIds.push(reader.uint64());
                    }
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
            exitedLockIds: Array.isArray(object?.exitedLockIds) ? object.exitedLockIds.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exitedLockIds) {
            obj.exitedLockIds = message.exitedLockIds.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.exitedLockIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exitedLockIds = object.exitedLockIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            exitedLockIds: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.exitedLockIds) {
            obj.exited_lock_ids = message.exitedLockIds.map(e => e);
        }
        else {
            obj.exited_lock_ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exitedLockIds = object.exited_lock_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exitedLockIds) {
            obj.exited_lock_ids = message.exitedLockIds.map(e => e.toString());
        }
        else {
            obj.exited_lock_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnPoolWhitelistedPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/un-pool-whitelisted-pool-response",
            value: exports.MsgUnPoolWhitelistedPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
            value: exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnPoolWhitelistedPoolResponse.typeUrl, exports.MsgUnPoolWhitelistedPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnPoolWhitelistedPoolResponse.aminoType, exports.MsgUnPoolWhitelistedPoolResponse.typeUrl);
