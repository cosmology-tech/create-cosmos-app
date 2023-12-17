"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreKVPair = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseStoreKVPair() {
    return {
        storeKey: "",
        delete: false,
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.StoreKVPair = {
    typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
    aminoType: "cosmos-sdk/StoreKVPair",
    is(o) {
        return o && (o.$typeUrl === exports.StoreKVPair.typeUrl || typeof o.storeKey === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.StoreKVPair.typeUrl || typeof o.store_key === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.StoreKVPair.typeUrl || typeof o.store_key === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.storeKey !== "") {
            writer.uint32(10).string(message.storeKey);
        }
        if (message.delete === true) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeKey = reader.string();
                    break;
                case 2:
                    message.delete = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
                    break;
                case 4:
                    message.value = reader.bytes();
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
            storeKey: (0, helpers_1.isSet)(object.storeKey) ? String(object.storeKey) : "",
            delete: (0, helpers_1.isSet)(object.delete) ? Boolean(object.delete) : false,
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.storeKey !== undefined && (obj.storeKey = message.storeKey);
        message.delete !== undefined && (obj.delete = message.delete);
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreKVPair();
        message.storeKey = object.storeKey ?? "";
        message.delete = object.delete ?? false;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            storeKey: object?.store_key,
            delete: object?.delete,
            key: object?.key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.store_key = message.storeKey;
        obj.delete = message.delete;
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseStoreKVPair();
        if (object.store_key !== undefined && object.store_key !== null) {
            message.storeKey = object.store_key;
        }
        if (object.delete !== undefined && object.delete !== null) {
            message.delete = object.delete;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.store_key = message.storeKey;
        obj.delete = message.delete;
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreKVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreKVPair",
            value: exports.StoreKVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreKVPair.decode(message.value);
    },
    toProto(message) {
        return exports.StoreKVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
            value: exports.StoreKVPair.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.StoreKVPair.typeUrl, exports.StoreKVPair);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.StoreKVPair.aminoType, exports.StoreKVPair.typeUrl);
