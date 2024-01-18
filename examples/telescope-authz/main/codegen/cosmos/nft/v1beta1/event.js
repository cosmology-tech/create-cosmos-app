"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBurn = exports.EventMint = exports.EventSend = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseEventSend() {
    return {
        classId: "",
        id: "",
        sender: "",
        receiver: ""
    };
}
exports.EventSend = {
    typeUrl: "/cosmos.nft.v1beta1.EventSend",
    aminoType: "cosmos-sdk/EventSend",
    is(o) {
        return o && (o.$typeUrl === exports.EventSend.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSend();
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
                    message.sender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventSend();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            id: object?.id,
            sender: object?.sender,
            receiver: object?.receiver
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventSend();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSend",
            value: exports.EventSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventSend.decode(message.value);
    },
    toProto(message) {
        return exports.EventSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventSend",
            value: exports.EventSend.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventSend.typeUrl, exports.EventSend);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventSend.aminoType, exports.EventSend.typeUrl);
function createBaseEventMint() {
    return {
        classId: "",
        id: "",
        owner: ""
    };
}
exports.EventMint = {
    typeUrl: "/cosmos.nft.v1beta1.EventMint",
    aminoType: "cosmos-sdk/EventMint",
    is(o) {
        return o && (o.$typeUrl === exports.EventMint.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMint();
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
                    message.owner = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventMint();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            id: object?.id,
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventMint();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventMint",
            value: exports.EventMint.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventMint.decode(message.value);
    },
    toProto(message) {
        return exports.EventMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventMint",
            value: exports.EventMint.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventMint.typeUrl, exports.EventMint);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventMint.aminoType, exports.EventMint.typeUrl);
function createBaseEventBurn() {
    return {
        classId: "",
        id: "",
        owner: ""
    };
}
exports.EventBurn = {
    typeUrl: "/cosmos.nft.v1beta1.EventBurn",
    aminoType: "cosmos-sdk/EventBurn",
    is(o) {
        return o && (o.$typeUrl === exports.EventBurn.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBurn();
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
                    message.owner = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventBurn();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            id: object?.id,
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventBurn();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventBurn",
            value: exports.EventBurn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventBurn.decode(message.value);
    },
    toProto(message) {
        return exports.EventBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventBurn",
            value: exports.EventBurn.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventBurn.typeUrl, exports.EventBurn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventBurn.aminoType, exports.EventBurn.typeUrl);
