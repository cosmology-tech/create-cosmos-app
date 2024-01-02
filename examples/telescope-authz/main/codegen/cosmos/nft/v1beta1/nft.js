"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = exports.Class = void 0;
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseClass() {
    return {
        id: "",
        name: "",
        symbol: "",
        description: "",
        uri: "",
        uriHash: "",
        data: undefined
    };
}
exports.Class = {
    typeUrl: "/cosmos.nft.v1beta1.Class",
    aminoType: "cosmos-sdk/Class",
    is(o) {
        return o && (o.$typeUrl === exports.Class.typeUrl || typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uriHash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Class.typeUrl || typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Class.typeUrl || typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.uri !== "") {
            writer.uint32(42).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(50).string(message.uriHash);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.uri = reader.string();
                    break;
                case 6:
                    message.uriHash = reader.string();
                    break;
                case 7:
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            symbol: (0, helpers_1.isSet)(object.symbol) ? String(object.symbol) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            uri: (0, helpers_1.isSet)(object.uri) ? String(object.uri) : "",
            uriHash: (0, helpers_1.isSet)(object.uriHash) ? String(object.uriHash) : "",
            data: (0, helpers_1.isSet)(object.data) ? any_1.Any.fromJSON(object.data) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.description !== undefined && (obj.description = message.description);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClass();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.description = object.description ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        message.data = object.data !== undefined && object.data !== null ? any_1.Any.fromPartial(object.data) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            name: object?.name,
            symbol: object?.symbol,
            description: object?.description,
            uri: object?.uri,
            uriHash: object?.uri_hash,
            data: object.data ? any_1.Any.fromSDK(object.data) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.description = message.description;
        obj.uri = message.uri;
        obj.uri_hash = message.uriHash;
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toSDK(message.data) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseClass();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.description = message.description;
        obj.uri = message.uri;
        obj.uri_hash = message.uriHash;
        obj.data = message.data ? any_1.Any.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Class.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Class",
            value: exports.Class.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Class.decode(message.value);
    },
    toProto(message) {
        return exports.Class.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Class",
            value: exports.Class.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Class.typeUrl, exports.Class);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Class.aminoType, exports.Class.typeUrl);
function createBaseNFT() {
    return {
        classId: "",
        id: "",
        uri: "",
        uriHash: "",
        data: undefined
    };
}
exports.NFT = {
    typeUrl: "/cosmos.nft.v1beta1.NFT",
    aminoType: "cosmos-sdk/NFT",
    is(o) {
        return o && (o.$typeUrl === exports.NFT.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.uri === "string" && typeof o.uriHash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.NFT.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.NFT.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.uri !== "") {
            writer.uint32(26).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(34).string(message.uriHash);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.uri = reader.string();
                    break;
                case 4:
                    message.uriHash = reader.string();
                    break;
                case 10:
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            classId: (0, helpers_1.isSet)(object.classId) ? String(object.classId) : "",
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            uri: (0, helpers_1.isSet)(object.uri) ? String(object.uri) : "",
            uriHash: (0, helpers_1.isSet)(object.uriHash) ? String(object.uriHash) : "",
            data: (0, helpers_1.isSet)(object.data) ? any_1.Any.fromJSON(object.data) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNFT();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        message.data = object.data !== undefined && object.data !== null ? any_1.Any.fromPartial(object.data) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            id: object?.id,
            uri: object?.uri,
            uriHash: object?.uri_hash,
            data: object.data ? any_1.Any.fromSDK(object.data) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.uri = message.uri;
        obj.uri_hash = message.uriHash;
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toSDK(message.data) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseNFT();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.uri = message.uri;
        obj.uri_hash = message.uriHash;
        obj.data = message.data ? any_1.Any.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NFT",
            value: exports.NFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NFT.decode(message.value);
    },
    toProto(message) {
        return exports.NFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.NFT",
            value: exports.NFT.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.NFT.typeUrl, exports.NFT);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NFT.aminoType, exports.NFT.typeUrl);
