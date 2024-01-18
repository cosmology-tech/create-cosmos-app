"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicKey = void 0;
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBasePublicKey() {
    return {
        ed25519: undefined,
        secp256k1: undefined
    };
}
exports.PublicKey = {
    typeUrl: "/tendermint.crypto.PublicKey",
    is(o) {
        return o && o.$typeUrl === exports.PublicKey.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.PublicKey.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.PublicKey.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
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
            ed25519: (0, helpers_1.isSet)(object.ed25519) ? (0, helpers_1.bytesFromBase64)(object.ed25519) : undefined,
            secp256k1: (0, helpers_1.isSet)(object.secp256k1) ? (0, helpers_1.bytesFromBase64)(object.secp256k1) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.ed25519 !== undefined && (obj.ed25519 = message.ed25519 !== undefined ? (0, helpers_1.base64FromBytes)(message.ed25519) : undefined);
        message.secp256k1 !== undefined && (obj.secp256k1 = message.secp256k1 !== undefined ? (0, helpers_1.base64FromBytes)(message.secp256k1) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePublicKey();
        message.ed25519 = object.ed25519 ?? undefined;
        message.secp256k1 = object.secp256k1 ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            ed25519: object?.ed25519,
            secp256k1: object?.secp256k1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.ed25519 = message.ed25519;
        obj.secp256k1 = message.secp256k1;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePublicKey();
        if (object.ed25519 !== undefined && object.ed25519 !== null) {
            message.ed25519 = (0, helpers_1.bytesFromBase64)(object.ed25519);
        }
        if (object.secp256k1 !== undefined && object.secp256k1 !== null) {
            message.secp256k1 = (0, helpers_1.bytesFromBase64)(object.secp256k1);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ed25519 = message.ed25519 ? (0, helpers_1.base64FromBytes)(message.ed25519) : undefined;
        obj.secp256k1 = message.secp256k1 ? (0, helpers_1.base64FromBytes)(message.secp256k1) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PublicKey.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PublicKey.decode(message.value);
    },
    toProto(message) {
        return exports.PublicKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.PublicKey",
            value: exports.PublicKey.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PublicKey.typeUrl, exports.PublicKey);
