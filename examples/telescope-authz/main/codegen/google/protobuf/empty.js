"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = void 0;
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
function createBaseEmpty() {
    return {};
}
exports.Empty = {
    typeUrl: "/google.protobuf.Empty",
    is(o) {
        return o && o.$typeUrl === exports.Empty.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Empty.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Empty.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
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
        const message = createBaseEmpty();
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
        const message = createBaseEmpty();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Empty.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Empty.decode(message.value);
    },
    toProto(message) {
        return exports.Empty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Empty",
            value: exports.Empty.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Empty.typeUrl, exports.Empty);
