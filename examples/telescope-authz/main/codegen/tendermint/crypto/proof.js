"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProofOps = exports.ProofOp = exports.DominoOp = exports.ValueOp = exports.Proof = void 0;
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseProof() {
    return {
        total: BigInt(0),
        index: BigInt(0),
        leafHash: new Uint8Array(),
        aunts: []
    };
}
exports.Proof = {
    typeUrl: "/tendermint.crypto.Proof",
    is(o) {
        return o && (o.$typeUrl === exports.Proof.typeUrl || typeof o.total === "bigint" && typeof o.index === "bigint" && (o.leafHash instanceof Uint8Array || typeof o.leafHash === "string") && Array.isArray(o.aunts) && (!o.aunts.length || o.aunts[0] instanceof Uint8Array || typeof o.aunts[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Proof.typeUrl || typeof o.total === "bigint" && typeof o.index === "bigint" && (o.leaf_hash instanceof Uint8Array || typeof o.leaf_hash === "string") && Array.isArray(o.aunts) && (!o.aunts.length || o.aunts[0] instanceof Uint8Array || typeof o.aunts[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Proof.typeUrl || typeof o.total === "bigint" && typeof o.index === "bigint" && (o.leaf_hash instanceof Uint8Array || typeof o.leaf_hash === "string") && Array.isArray(o.aunts) && (!o.aunts.length || o.aunts[0] instanceof Uint8Array || typeof o.aunts[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total !== BigInt(0)) {
            writer.uint32(8).int64(message.total);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(16).int64(message.index);
        }
        if (message.leafHash.length !== 0) {
            writer.uint32(26).bytes(message.leafHash);
        }
        for (const v of message.aunts) {
            writer.uint32(34).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                case 3:
                    message.leafHash = reader.bytes();
                    break;
                case 4:
                    message.aunts.push(reader.bytes());
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
            total: (0, helpers_1.isSet)(object.total) ? BigInt(object.total.toString()) : BigInt(0),
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            leafHash: (0, helpers_1.isSet)(object.leafHash) ? (0, helpers_1.bytesFromBase64)(object.leafHash) : new Uint8Array(),
            aunts: Array.isArray(object?.aunts) ? object.aunts.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.leafHash !== undefined && (obj.leafHash = (0, helpers_1.base64FromBytes)(message.leafHash !== undefined ? message.leafHash : new Uint8Array()));
        if (message.aunts) {
            obj.aunts = message.aunts.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.aunts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProof();
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.leafHash = object.leafHash ?? new Uint8Array();
        message.aunts = object.aunts?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            total: object?.total,
            index: object?.index,
            leafHash: object?.leaf_hash,
            aunts: Array.isArray(object?.aunts) ? object.aunts.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.total = message.total;
        obj.index = message.index;
        obj.leaf_hash = message.leafHash;
        if (message.aunts) {
            obj.aunts = message.aunts.map(e => e);
        }
        else {
            obj.aunts = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseProof();
        if (object.total !== undefined && object.total !== null) {
            message.total = BigInt(object.total);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.leaf_hash !== undefined && object.leaf_hash !== null) {
            message.leafHash = (0, helpers_1.bytesFromBase64)(object.leaf_hash);
        }
        message.aunts = object.aunts?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total ? message.total.toString() : undefined;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.leaf_hash = message.leafHash ? (0, helpers_1.base64FromBytes)(message.leafHash) : undefined;
        if (message.aunts) {
            obj.aunts = message.aunts.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.aunts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proof.decode(message.value);
    },
    toProto(message) {
        return exports.Proof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.Proof",
            value: exports.Proof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Proof.typeUrl, exports.Proof);
function createBaseValueOp() {
    return {
        key: new Uint8Array(),
        proof: undefined
    };
}
exports.ValueOp = {
    typeUrl: "/tendermint.crypto.ValueOp",
    is(o) {
        return o && (o.$typeUrl === exports.ValueOp.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValueOp.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValueOp.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.proof !== undefined) {
            exports.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValueOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.proof = exports.Proof.decode(reader, reader.uint32());
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? exports.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? exports.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValueOp();
        message.key = object.key ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? exports.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            proof: object.proof ? exports.Proof.fromSDK(object.proof) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        message.proof !== undefined && (obj.proof = message.proof ? exports.Proof.toSDK(message.proof) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValueOp();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = exports.Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.proof = message.proof ? exports.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValueOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValueOp.decode(message.value);
    },
    toProto(message) {
        return exports.ValueOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ValueOp",
            value: exports.ValueOp.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValueOp.typeUrl, exports.ValueOp);
function createBaseDominoOp() {
    return {
        key: "",
        input: "",
        output: ""
    };
}
exports.DominoOp = {
    typeUrl: "/tendermint.crypto.DominoOp",
    is(o) {
        return o && (o.$typeUrl === exports.DominoOp.typeUrl || typeof o.key === "string" && typeof o.input === "string" && typeof o.output === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DominoOp.typeUrl || typeof o.key === "string" && typeof o.input === "string" && typeof o.output === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DominoOp.typeUrl || typeof o.key === "string" && typeof o.input === "string" && typeof o.output === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.input !== "") {
            writer.uint32(18).string(message.input);
        }
        if (message.output !== "") {
            writer.uint32(26).string(message.output);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDominoOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.input = reader.string();
                    break;
                case 3:
                    message.output = reader.string();
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
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            input: (0, helpers_1.isSet)(object.input) ? String(object.input) : "",
            output: (0, helpers_1.isSet)(object.output) ? String(object.output) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.input !== undefined && (obj.input = message.input);
        message.output !== undefined && (obj.output = message.output);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDominoOp();
        message.key = object.key ?? "";
        message.input = object.input ?? "";
        message.output = object.output ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            input: object?.input,
            output: object?.output
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.input = message.input;
        obj.output = message.output;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDominoOp();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = object.input;
        }
        if (object.output !== undefined && object.output !== null) {
            message.output = object.output;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.input = message.input;
        obj.output = message.output;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DominoOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DominoOp.decode(message.value);
    },
    toProto(message) {
        return exports.DominoOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.DominoOp",
            value: exports.DominoOp.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DominoOp.typeUrl, exports.DominoOp);
function createBaseProofOp() {
    return {
        type: "",
        key: new Uint8Array(),
        data: new Uint8Array()
    };
}
exports.ProofOp = {
    typeUrl: "/tendermint.crypto.ProofOp",
    is(o) {
        return o && (o.$typeUrl === exports.ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProofOp();
        message.type = object.type ?? "";
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            type: object?.type,
            key: object?.key,
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.type = message.type;
        obj.key = message.key;
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseProofOp();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProofOp.decode(message.value);
    },
    toProto(message) {
        return exports.ProofOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOp",
            value: exports.ProofOp.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ProofOp.typeUrl, exports.ProofOp);
function createBaseProofOps() {
    return {
        ops: []
    };
}
exports.ProofOps = {
    typeUrl: "/tendermint.crypto.ProofOps",
    is(o) {
        return o && (o.$typeUrl === exports.ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || exports.ProofOp.is(o.ops[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || exports.ProofOp.isSDK(o.ops[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || exports.ProofOp.isAmino(o.ops[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.ops) {
            exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
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
            ops: Array.isArray(object?.ops) ? object.ops.map((e) => exports.ProofOp.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? exports.ProofOp.toJSON(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map(e => exports.ProofOp.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            ops: Array.isArray(object?.ops) ? object.ops.map((e) => exports.ProofOp.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? exports.ProofOp.toSDK(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map(e => exports.ProofOp.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? exports.ProofOp.toAmino(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofOps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProofOps.decode(message.value);
    },
    toProto(message) {
        return exports.ProofOps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOps",
            value: exports.ProofOps.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ProofOps.typeUrl, exports.ProofOps);
