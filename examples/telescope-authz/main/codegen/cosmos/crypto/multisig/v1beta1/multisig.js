"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactBitArray = exports.MultiSignature = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
exports.MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    aminoType: "cosmos-sdk/MultiSignature",
    is(o) {
        return o && (o.$typeUrl === exports.MultiSignature.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MultiSignature.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MultiSignature.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
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
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MultiSignature.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MultiSignature",
            value: exports.MultiSignature.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MultiSignature.decode(message.value);
    },
    toProto(message) {
        return exports.MultiSignature.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
            value: exports.MultiSignature.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MultiSignature.typeUrl, exports.MultiSignature);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MultiSignature.aminoType, exports.MultiSignature.typeUrl);
function createBaseCompactBitArray() {
    return {
        extraBitsStored: 0,
        elems: new Uint8Array()
    };
}
exports.CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    aminoType: "cosmos-sdk/CompactBitArray",
    is(o) {
        return o && (o.$typeUrl === exports.CompactBitArray.typeUrl || typeof o.extraBitsStored === "number" && (o.elems instanceof Uint8Array || typeof o.elems === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CompactBitArray.typeUrl || typeof o.extra_bits_stored === "number" && (o.elems instanceof Uint8Array || typeof o.elems === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CompactBitArray.typeUrl || typeof o.extra_bits_stored === "number" && (o.elems instanceof Uint8Array || typeof o.elems === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.extraBitsStored !== 0) {
            writer.uint32(8).uint32(message.extraBitsStored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompactBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extraBitsStored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
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
            extraBitsStored: (0, helpers_1.isSet)(object.extraBitsStored) ? Number(object.extraBitsStored) : 0,
            elems: (0, helpers_1.isSet)(object.elems) ? (0, helpers_1.bytesFromBase64)(object.elems) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.extraBitsStored !== undefined && (obj.extraBitsStored = Math.round(message.extraBitsStored));
        message.elems !== undefined && (obj.elems = (0, helpers_1.base64FromBytes)(message.elems !== undefined ? message.elems : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompactBitArray();
        message.extraBitsStored = object.extraBitsStored ?? 0;
        message.elems = object.elems ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            extraBitsStored: object?.extra_bits_stored,
            elems: object?.elems
        };
    },
    toSDK(message) {
        const obj = {};
        obj.extra_bits_stored = message.extraBitsStored;
        obj.elems = message.elems;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCompactBitArray();
        if (object.extra_bits_stored !== undefined && object.extra_bits_stored !== null) {
            message.extraBitsStored = object.extra_bits_stored;
        }
        if (object.elems !== undefined && object.elems !== null) {
            message.elems = (0, helpers_1.bytesFromBase64)(object.elems);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.extra_bits_stored = message.extraBitsStored;
        obj.elems = message.elems ? (0, helpers_1.base64FromBytes)(message.elems) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompactBitArray.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompactBitArray",
            value: exports.CompactBitArray.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompactBitArray.decode(message.value);
    },
    toProto(message) {
        return exports.CompactBitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
            value: exports.CompactBitArray.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CompactBitArray.typeUrl, exports.CompactBitArray);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CompactBitArray.aminoType, exports.CompactBitArray.typeUrl);
