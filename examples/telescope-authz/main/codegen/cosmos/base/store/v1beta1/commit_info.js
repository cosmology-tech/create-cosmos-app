"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitID = exports.StoreInfo = exports.CommitInfo = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseCommitInfo() {
    return {
        version: BigInt(0),
        storeInfos: []
    };
}
exports.CommitInfo = {
    typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
    aminoType: "cosmos-sdk/CommitInfo",
    is(o) {
        return o && (o.$typeUrl === exports.CommitInfo.typeUrl || typeof o.version === "bigint" && Array.isArray(o.storeInfos) && (!o.storeInfos.length || exports.StoreInfo.is(o.storeInfos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CommitInfo.typeUrl || typeof o.version === "bigint" && Array.isArray(o.store_infos) && (!o.store_infos.length || exports.StoreInfo.isSDK(o.store_infos[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CommitInfo.typeUrl || typeof o.version === "bigint" && Array.isArray(o.store_infos) && (!o.store_infos.length || exports.StoreInfo.isAmino(o.store_infos[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.storeInfos) {
            exports.StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.storeInfos.push(exports.StoreInfo.decode(reader, reader.uint32()));
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
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            storeInfos: Array.isArray(object?.storeInfos) ? object.storeInfos.map((e) => exports.StoreInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        if (message.storeInfos) {
            obj.storeInfos = message.storeInfos.map(e => e ? exports.StoreInfo.toJSON(e) : undefined);
        }
        else {
            obj.storeInfos = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.storeInfos = object.storeInfos?.map(e => exports.StoreInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            version: object?.version,
            storeInfos: Array.isArray(object?.store_infos) ? object.store_infos.map((e) => exports.StoreInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.version = message.version;
        if (message.storeInfos) {
            obj.store_infos = message.storeInfos.map(e => e ? exports.StoreInfo.toSDK(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCommitInfo();
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        message.storeInfos = object.store_infos?.map(e => exports.StoreInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        if (message.storeInfos) {
            obj.store_infos = message.storeInfos.map(e => e ? exports.StoreInfo.toAmino(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitInfo",
            value: exports.CommitInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
            value: exports.CommitInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommitInfo.typeUrl, exports.CommitInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CommitInfo.aminoType, exports.CommitInfo.typeUrl);
function createBaseStoreInfo() {
    return {
        name: "",
        commitId: exports.CommitID.fromPartial({})
    };
}
exports.StoreInfo = {
    typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
    aminoType: "cosmos-sdk/StoreInfo",
    is(o) {
        return o && (o.$typeUrl === exports.StoreInfo.typeUrl || typeof o.name === "string" && exports.CommitID.is(o.commitId));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.StoreInfo.typeUrl || typeof o.name === "string" && exports.CommitID.isSDK(o.commit_id));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.StoreInfo.typeUrl || typeof o.name === "string" && exports.CommitID.isAmino(o.commit_id));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            exports.CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commitId = exports.CommitID.decode(reader, reader.uint32());
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
            commitId: (0, helpers_1.isSet)(object.commitId) ? exports.CommitID.fromJSON(object.commitId) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.commitId !== undefined && (obj.commitId = message.commitId ? exports.CommitID.toJSON(message.commitId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreInfo();
        message.name = object.name ?? "";
        message.commitId = object.commitId !== undefined && object.commitId !== null ? exports.CommitID.fromPartial(object.commitId) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            commitId: object.commit_id ? exports.CommitID.fromSDK(object.commit_id) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        message.commitId !== undefined && (obj.commit_id = message.commitId ? exports.CommitID.toSDK(message.commitId) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseStoreInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.commit_id !== undefined && object.commit_id !== null) {
            message.commitId = exports.CommitID.fromAmino(object.commit_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.commit_id = message.commitId ? exports.CommitID.toAmino(message.commitId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreInfo",
            value: exports.StoreInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreInfo.decode(message.value);
    },
    toProto(message) {
        return exports.StoreInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
            value: exports.StoreInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.StoreInfo.typeUrl, exports.StoreInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.StoreInfo.aminoType, exports.StoreInfo.typeUrl);
function createBaseCommitID() {
    return {
        version: BigInt(0),
        hash: new Uint8Array()
    };
}
exports.CommitID = {
    typeUrl: "/cosmos.base.store.v1beta1.CommitID",
    aminoType: "cosmos-sdk/CommitID",
    is(o) {
        return o && (o.$typeUrl === exports.CommitID.typeUrl || typeof o.version === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CommitID.typeUrl || typeof o.version === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CommitID.typeUrl || typeof o.version === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
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
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            version: object?.version,
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.version = message.version;
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCommitID();
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitID.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitID",
            value: exports.CommitID.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitID.decode(message.value);
    },
    toProto(message) {
        return exports.CommitID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitID",
            value: exports.CommitID.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommitID.typeUrl, exports.CommitID);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CommitID.aminoType, exports.CommitID.typeUrl);
