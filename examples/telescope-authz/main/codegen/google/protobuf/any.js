"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Any = void 0;
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseAny() {
    return {
        $typeUrl: "/google.protobuf.Any",
        typeUrl: "",
        value: new Uint8Array()
    };
}
exports.Any = {
    typeUrl: "/google.protobuf.Any",
    is(o) {
        return o && (o.$typeUrl === exports.Any.typeUrl || typeof o.typeUrl === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Any.typeUrl || typeof o.type_url === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Any.typeUrl || typeof o.type === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.typeUrl !== "") {
            writer.uint32(10).string(message.typeUrl);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAny();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typeUrl = reader.string();
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
            typeUrl: (0, helpers_1.isSet)(object.typeUrl) ? String(object.typeUrl) : "",
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAny();
        message.typeUrl = object.typeUrl ?? "";
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            typeUrl: object?.type_url,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.type_url = message.typeUrl;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        return {
            typeUrl: object.type,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.typeUrl;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Any.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Any.decode(message.value);
    },
    toProto(message) {
        return exports.Any.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Any",
            value: exports.Any.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Any.typeUrl, exports.Any);
