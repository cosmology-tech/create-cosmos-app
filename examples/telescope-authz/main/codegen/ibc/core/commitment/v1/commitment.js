"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerkleProof = exports.MerklePath = exports.MerklePrefix = exports.MerkleRoot = void 0;
const proofs_1 = require("../../../../confio/proofs");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseMerkleRoot() {
    return {
        hash: new Uint8Array()
    };
}
exports.MerkleRoot = {
    typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
    aminoType: "cosmos-sdk/MerkleRoot",
    is(o) {
        return o && (o.$typeUrl === exports.MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleRoot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleRoot();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMerkleRoot();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerkleRoot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleRoot",
            value: exports.MerkleRoot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerkleRoot.decode(message.value);
    },
    toProto(message) {
        return exports.MerkleRoot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
            value: exports.MerkleRoot.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MerkleRoot.typeUrl, exports.MerkleRoot);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MerkleRoot.aminoType, exports.MerkleRoot.typeUrl);
function createBaseMerklePrefix() {
    return {
        keyPrefix: new Uint8Array()
    };
}
exports.MerklePrefix = {
    typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
    aminoType: "cosmos-sdk/MerklePrefix",
    is(o) {
        return o && (o.$typeUrl === exports.MerklePrefix.typeUrl || o.keyPrefix instanceof Uint8Array || typeof o.keyPrefix === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MerklePrefix.typeUrl || o.key_prefix instanceof Uint8Array || typeof o.key_prefix === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MerklePrefix.typeUrl || o.key_prefix instanceof Uint8Array || typeof o.key_prefix === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.keyPrefix.length !== 0) {
            writer.uint32(10).bytes(message.keyPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePrefix();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyPrefix = reader.bytes();
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
            keyPrefix: (0, helpers_1.isSet)(object.keyPrefix) ? (0, helpers_1.bytesFromBase64)(object.keyPrefix) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyPrefix !== undefined && (obj.keyPrefix = (0, helpers_1.base64FromBytes)(message.keyPrefix !== undefined ? message.keyPrefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePrefix();
        message.keyPrefix = object.keyPrefix ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            keyPrefix: object?.key_prefix
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key_prefix = message.keyPrefix;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMerklePrefix();
        if (object.key_prefix !== undefined && object.key_prefix !== null) {
            message.keyPrefix = (0, helpers_1.bytesFromBase64)(object.key_prefix);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_prefix = message.keyPrefix ? (0, helpers_1.base64FromBytes)(message.keyPrefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerklePrefix.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePrefix",
            value: exports.MerklePrefix.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerklePrefix.decode(message.value);
    },
    toProto(message) {
        return exports.MerklePrefix.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
            value: exports.MerklePrefix.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MerklePrefix.typeUrl, exports.MerklePrefix);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MerklePrefix.aminoType, exports.MerklePrefix.typeUrl);
function createBaseMerklePath() {
    return {
        keyPath: []
    };
}
exports.MerklePath = {
    typeUrl: "/ibc.core.commitment.v1.MerklePath",
    aminoType: "cosmos-sdk/MerklePath",
    is(o) {
        return o && (o.$typeUrl === exports.MerklePath.typeUrl || Array.isArray(o.keyPath) && (!o.keyPath.length || typeof o.keyPath[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MerklePath.typeUrl || Array.isArray(o.key_path) && (!o.key_path.length || typeof o.key_path[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MerklePath.typeUrl || Array.isArray(o.key_path) && (!o.key_path.length || typeof o.key_path[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.keyPath) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePath();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyPath.push(reader.string());
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
            keyPath: Array.isArray(object?.keyPath) ? object.keyPath.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyPath) {
            obj.keyPath = message.keyPath.map(e => e);
        }
        else {
            obj.keyPath = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePath();
        message.keyPath = object.keyPath?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            keyPath: Array.isArray(object?.key_path) ? object.key_path.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.keyPath) {
            obj.key_path = message.keyPath.map(e => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMerklePath();
        message.keyPath = object.key_path?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.keyPath) {
            obj.key_path = message.keyPath.map(e => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerklePath.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePath",
            value: exports.MerklePath.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerklePath.decode(message.value);
    },
    toProto(message) {
        return exports.MerklePath.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePath",
            value: exports.MerklePath.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MerklePath.typeUrl, exports.MerklePath);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MerklePath.aminoType, exports.MerklePath.typeUrl);
function createBaseMerkleProof() {
    return {
        proofs: []
    };
}
exports.MerkleProof = {
    typeUrl: "/ibc.core.commitment.v1.MerkleProof",
    aminoType: "cosmos-sdk/MerkleProof",
    is(o) {
        return o && (o.$typeUrl === exports.MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || proofs_1.CommitmentProof.is(o.proofs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || proofs_1.CommitmentProof.isSDK(o.proofs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || proofs_1.CommitmentProof.isAmino(o.proofs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.proofs) {
            proofs_1.CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proofs.push(proofs_1.CommitmentProof.decode(reader, reader.uint32()));
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
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => proofs_1.CommitmentProof.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? proofs_1.CommitmentProof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map(e => proofs_1.CommitmentProof.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => proofs_1.CommitmentProof.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? proofs_1.CommitmentProof.toSDK(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map(e => proofs_1.CommitmentProof.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? proofs_1.CommitmentProof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerkleProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleProof",
            value: exports.MerkleProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerkleProof.decode(message.value);
    },
    toProto(message) {
        return exports.MerkleProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleProof",
            value: exports.MerkleProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MerkleProof.typeUrl, exports.MerkleProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MerkleProof.aminoType, exports.MerkleProof.typeUrl);
