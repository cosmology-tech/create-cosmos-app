"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotSchema = exports.SnapshotKVItem = exports.SnapshotExtensionPayload = exports.SnapshotExtensionMeta = exports.SnapshotIAVLItem = exports.SnapshotStoreItem = exports.SnapshotItem = exports.Metadata = exports.Snapshot = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: exports.Metadata.fromPartial({})
    };
}
exports.Snapshot = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
    aminoType: "cosmos-sdk/Snapshot",
    is(o) {
        return o && (o.$typeUrl === exports.Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.Metadata.is(o.metadata));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.Metadata.isSDK(o.metadata));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.Metadata.isAmino(o.metadata));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunks: (0, helpers_1.isSet)(object.chunks) ? Number(object.chunks) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            metadata: (0, helpers_1.isSet)(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? exports.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunks: object?.chunks,
            hash: object?.hash,
            metadata: object.metadata ? exports.Metadata.fromSDK(object.metadata) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toSDK(message.metadata) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshot();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = object.chunks;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = exports.Metadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.metadata = message.metadata ? exports.Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Snapshot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Snapshot",
            value: exports.Snapshot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Snapshot.decode(message.value);
    },
    toProto(message) {
        return exports.Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
            value: exports.Snapshot.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Snapshot.typeUrl, exports.Snapshot);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Snapshot.aminoType, exports.Snapshot.typeUrl);
function createBaseMetadata() {
    return {
        chunkHashes: []
    };
}
exports.Metadata = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
    aminoType: "cosmos-sdk/Metadata",
    is(o) {
        return o && (o.$typeUrl === exports.Metadata.typeUrl || Array.isArray(o.chunkHashes) && (!o.chunkHashes.length || o.chunkHashes[0] instanceof Uint8Array || typeof o.chunkHashes[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Metadata.typeUrl || Array.isArray(o.chunk_hashes) && (!o.chunk_hashes.length || o.chunk_hashes[0] instanceof Uint8Array || typeof o.chunk_hashes[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Metadata.typeUrl || Array.isArray(o.chunk_hashes) && (!o.chunk_hashes.length || o.chunk_hashes[0] instanceof Uint8Array || typeof o.chunk_hashes[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.chunkHashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunkHashes.push(reader.bytes());
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
            chunkHashes: Array.isArray(object?.chunkHashes) ? object.chunkHashes.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunkHashes = message.chunkHashes.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.chunkHashes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.chunkHashes = object.chunkHashes?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            chunkHashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunk_hashes = message.chunkHashes.map(e => e);
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMetadata();
        message.chunkHashes = object.chunk_hashes?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunk_hashes = message.chunkHashes.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: exports.Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Metadata.decode(message.value);
    },
    toProto(message) {
        return exports.Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
            value: exports.Metadata.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Metadata.typeUrl, exports.Metadata);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Metadata.aminoType, exports.Metadata.typeUrl);
function createBaseSnapshotItem() {
    return {
        store: undefined,
        iavl: undefined,
        extension: undefined,
        extensionPayload: undefined,
        kv: undefined,
        schema: undefined
    };
}
exports.SnapshotItem = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
    aminoType: "cosmos-sdk/SnapshotItem",
    is(o) {
        return o && o.$typeUrl === exports.SnapshotItem.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.SnapshotItem.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.SnapshotItem.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.store !== undefined) {
            exports.SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            exports.SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            exports.SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extensionPayload !== undefined) {
            exports.SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
        }
        if (message.kv !== undefined) {
            exports.SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            exports.SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = exports.SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = exports.SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = exports.SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extensionPayload = exports.SnapshotExtensionPayload.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.kv = exports.SnapshotKVItem.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.schema = exports.SnapshotSchema.decode(reader, reader.uint32());
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
            store: (0, helpers_1.isSet)(object.store) ? exports.SnapshotStoreItem.fromJSON(object.store) : undefined,
            iavl: (0, helpers_1.isSet)(object.iavl) ? exports.SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
            extension: (0, helpers_1.isSet)(object.extension) ? exports.SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
            extensionPayload: (0, helpers_1.isSet)(object.extensionPayload) ? exports.SnapshotExtensionPayload.fromJSON(object.extensionPayload) : undefined,
            kv: (0, helpers_1.isSet)(object.kv) ? exports.SnapshotKVItem.fromJSON(object.kv) : undefined,
            schema: (0, helpers_1.isSet)(object.schema) ? exports.SnapshotSchema.fromJSON(object.schema) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.store !== undefined && (obj.store = message.store ? exports.SnapshotStoreItem.toJSON(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toJSON(message.iavl) : undefined);
        message.extension !== undefined && (obj.extension = message.extension ? exports.SnapshotExtensionMeta.toJSON(message.extension) : undefined);
        message.extensionPayload !== undefined && (obj.extensionPayload = message.extensionPayload ? exports.SnapshotExtensionPayload.toJSON(message.extensionPayload) : undefined);
        message.kv !== undefined && (obj.kv = message.kv ? exports.SnapshotKVItem.toJSON(message.kv) : undefined);
        message.schema !== undefined && (obj.schema = message.schema ? exports.SnapshotSchema.toJSON(message.schema) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store = object.store !== undefined && object.store !== null ? exports.SnapshotStoreItem.fromPartial(object.store) : undefined;
        message.iavl = object.iavl !== undefined && object.iavl !== null ? exports.SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
        message.extension = object.extension !== undefined && object.extension !== null ? exports.SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
        message.extensionPayload = object.extensionPayload !== undefined && object.extensionPayload !== null ? exports.SnapshotExtensionPayload.fromPartial(object.extensionPayload) : undefined;
        message.kv = object.kv !== undefined && object.kv !== null ? exports.SnapshotKVItem.fromPartial(object.kv) : undefined;
        message.schema = object.schema !== undefined && object.schema !== null ? exports.SnapshotSchema.fromPartial(object.schema) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            store: object.store ? exports.SnapshotStoreItem.fromSDK(object.store) : undefined,
            iavl: object.iavl ? exports.SnapshotIAVLItem.fromSDK(object.iavl) : undefined,
            extension: object.extension ? exports.SnapshotExtensionMeta.fromSDK(object.extension) : undefined,
            extensionPayload: object.extension_payload ? exports.SnapshotExtensionPayload.fromSDK(object.extension_payload) : undefined,
            kv: object.kv ? exports.SnapshotKVItem.fromSDK(object.kv) : undefined,
            schema: object.schema ? exports.SnapshotSchema.fromSDK(object.schema) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.store !== undefined && (obj.store = message.store ? exports.SnapshotStoreItem.toSDK(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toSDK(message.iavl) : undefined);
        message.extension !== undefined && (obj.extension = message.extension ? exports.SnapshotExtensionMeta.toSDK(message.extension) : undefined);
        message.extensionPayload !== undefined && (obj.extension_payload = message.extensionPayload ? exports.SnapshotExtensionPayload.toSDK(message.extensionPayload) : undefined);
        message.kv !== undefined && (obj.kv = message.kv ? exports.SnapshotKVItem.toSDK(message.kv) : undefined);
        message.schema !== undefined && (obj.schema = message.schema ? exports.SnapshotSchema.toSDK(message.schema) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshotItem();
        if (object.store !== undefined && object.store !== null) {
            message.store = exports.SnapshotStoreItem.fromAmino(object.store);
        }
        if (object.iavl !== undefined && object.iavl !== null) {
            message.iavl = exports.SnapshotIAVLItem.fromAmino(object.iavl);
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = exports.SnapshotExtensionMeta.fromAmino(object.extension);
        }
        if (object.extension_payload !== undefined && object.extension_payload !== null) {
            message.extensionPayload = exports.SnapshotExtensionPayload.fromAmino(object.extension_payload);
        }
        if (object.kv !== undefined && object.kv !== null) {
            message.kv = exports.SnapshotKVItem.fromAmino(object.kv);
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = exports.SnapshotSchema.fromAmino(object.schema);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.store = message.store ? exports.SnapshotStoreItem.toAmino(message.store) : undefined;
        obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toAmino(message.iavl) : undefined;
        obj.extension = message.extension ? exports.SnapshotExtensionMeta.toAmino(message.extension) : undefined;
        obj.extension_payload = message.extensionPayload ? exports.SnapshotExtensionPayload.toAmino(message.extensionPayload) : undefined;
        obj.kv = message.kv ? exports.SnapshotKVItem.toAmino(message.kv) : undefined;
        obj.schema = message.schema ? exports.SnapshotSchema.toAmino(message.schema) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotItem",
            value: exports.SnapshotItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
            value: exports.SnapshotItem.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SnapshotItem.typeUrl, exports.SnapshotItem);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SnapshotItem.aminoType, exports.SnapshotItem.typeUrl);
function createBaseSnapshotStoreItem() {
    return {
        name: ""
    };
}
exports.SnapshotStoreItem = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
    aminoType: "cosmos-sdk/SnapshotStoreItem",
    is(o) {
        return o && (o.$typeUrl === exports.SnapshotStoreItem.typeUrl || typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SnapshotStoreItem.typeUrl || typeof o.name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SnapshotStoreItem.typeUrl || typeof o.name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotStoreItem();
        message.name = object.name ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshotStoreItem();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotStoreItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotStoreItem",
            value: exports.SnapshotStoreItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotStoreItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotStoreItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
            value: exports.SnapshotStoreItem.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SnapshotStoreItem.typeUrl, exports.SnapshotStoreItem);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SnapshotStoreItem.aminoType, exports.SnapshotStoreItem.typeUrl);
function createBaseSnapshotIAVLItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        version: BigInt(0),
        height: 0
    };
}
exports.SnapshotIAVLItem = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
    aminoType: "cosmos-sdk/SnapshotIAVLItem",
    is(o) {
        return o && (o.$typeUrl === exports.SnapshotIAVLItem.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.version === "bigint" && typeof o.height === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SnapshotIAVLItem.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.version === "bigint" && typeof o.height === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SnapshotIAVLItem.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.version === "bigint" && typeof o.height === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.version = reader.int64();
                    break;
                case 4:
                    message.height = reader.int32();
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
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            height: (0, helpers_1.isSet)(object.height) ? Number(object.height) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotIAVLItem();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.height = object.height ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value,
            version: object?.version,
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.version = message.version;
        obj.height = message.height;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshotIAVLItem();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        obj.version = message.version ? message.version.toString() : undefined;
        obj.height = message.height;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotIAVLItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotIAVLItem",
            value: exports.SnapshotIAVLItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotIAVLItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotIAVLItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
            value: exports.SnapshotIAVLItem.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SnapshotIAVLItem.typeUrl, exports.SnapshotIAVLItem);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SnapshotIAVLItem.aminoType, exports.SnapshotIAVLItem.typeUrl);
function createBaseSnapshotExtensionMeta() {
    return {
        name: "",
        format: 0
    };
}
exports.SnapshotExtensionMeta = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
    aminoType: "cosmos-sdk/SnapshotExtensionMeta",
    is(o) {
        return o && (o.$typeUrl === exports.SnapshotExtensionMeta.typeUrl || typeof o.name === "string" && typeof o.format === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SnapshotExtensionMeta.typeUrl || typeof o.name === "string" && typeof o.format === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SnapshotExtensionMeta.typeUrl || typeof o.name === "string" && typeof o.format === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.format = reader.uint32();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.format !== undefined && (obj.format = Math.round(message.format));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionMeta();
        message.name = object.name ?? "";
        message.format = object.format ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            format: object?.format
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.format = message.format;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshotExtensionMeta();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.format = message.format;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotExtensionMeta.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionMeta",
            value: exports.SnapshotExtensionMeta.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotExtensionMeta.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotExtensionMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
            value: exports.SnapshotExtensionMeta.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SnapshotExtensionMeta.typeUrl, exports.SnapshotExtensionMeta);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SnapshotExtensionMeta.aminoType, exports.SnapshotExtensionMeta.typeUrl);
function createBaseSnapshotExtensionPayload() {
    return {
        payload: new Uint8Array()
    };
}
exports.SnapshotExtensionPayload = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
    aminoType: "cosmos-sdk/SnapshotExtensionPayload",
    is(o) {
        return o && (o.$typeUrl === exports.SnapshotExtensionPayload.typeUrl || o.payload instanceof Uint8Array || typeof o.payload === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SnapshotExtensionPayload.typeUrl || o.payload instanceof Uint8Array || typeof o.payload === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SnapshotExtensionPayload.typeUrl || o.payload instanceof Uint8Array || typeof o.payload === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.bytes();
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
            payload: (0, helpers_1.isSet)(object.payload) ? (0, helpers_1.bytesFromBase64)(object.payload) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined && (obj.payload = (0, helpers_1.base64FromBytes)(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionPayload();
        message.payload = object.payload ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            payload: object?.payload
        };
    },
    toSDK(message) {
        const obj = {};
        obj.payload = message.payload;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshotExtensionPayload();
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = (0, helpers_1.bytesFromBase64)(object.payload);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.payload = message.payload ? (0, helpers_1.base64FromBytes)(message.payload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotExtensionPayload.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionPayload",
            value: exports.SnapshotExtensionPayload.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotExtensionPayload.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotExtensionPayload.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
            value: exports.SnapshotExtensionPayload.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SnapshotExtensionPayload.typeUrl, exports.SnapshotExtensionPayload);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SnapshotExtensionPayload.aminoType, exports.SnapshotExtensionPayload.typeUrl);
function createBaseSnapshotKVItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.SnapshotKVItem = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
    aminoType: "cosmos-sdk/SnapshotKVItem",
    is(o) {
        return o && (o.$typeUrl === exports.SnapshotKVItem.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SnapshotKVItem.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SnapshotKVItem.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotKVItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotKVItem();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshotKVItem();
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
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotKVItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotKVItem",
            value: exports.SnapshotKVItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotKVItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotKVItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
            value: exports.SnapshotKVItem.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SnapshotKVItem.typeUrl, exports.SnapshotKVItem);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SnapshotKVItem.aminoType, exports.SnapshotKVItem.typeUrl);
function createBaseSnapshotSchema() {
    return {
        keys: []
    };
}
exports.SnapshotSchema = {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
    aminoType: "cosmos-sdk/SnapshotSchema",
    is(o) {
        return o && (o.$typeUrl === exports.SnapshotSchema.typeUrl || Array.isArray(o.keys) && (!o.keys.length || o.keys[0] instanceof Uint8Array || typeof o.keys[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SnapshotSchema.typeUrl || Array.isArray(o.keys) && (!o.keys.length || o.keys[0] instanceof Uint8Array || typeof o.keys[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SnapshotSchema.typeUrl || Array.isArray(o.keys) && (!o.keys.length || o.keys[0] instanceof Uint8Array || typeof o.keys[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.keys) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.bytes());
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
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotSchema();
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSnapshotSchema();
        message.keys = object.keys?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotSchema.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotSchema",
            value: exports.SnapshotSchema.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotSchema.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotSchema.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
            value: exports.SnapshotSchema.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SnapshotSchema.typeUrl, exports.SnapshotSchema);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SnapshotSchema.aminoType, exports.SnapshotSchema.typeUrl);
