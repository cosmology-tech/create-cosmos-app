"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSendResponse = exports.MsgSend = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgSend() {
    return {
        classId: "",
        id: "",
        sender: "",
        receiver: ""
    };
}
exports.MsgSend = {
    typeUrl: "/cosmos.nft.v1beta1.MsgSend",
    aminoType: "cosmos-sdk/MsgNFTSend",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSend.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
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
        const message = createBaseMsgSend();
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
        const message = createBaseMsgSend();
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
        const message = createBaseMsgSend();
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
        return exports.MsgSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgNFTSend",
            value: exports.MsgSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.MsgSend",
            value: exports.MsgSend.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSend.typeUrl, exports.MsgSend);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSend.aminoType, exports.MsgSend.typeUrl);
function createBaseMsgSendResponse() {
    return {};
}
exports.MsgSendResponse = {
    typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
    aminoType: "cosmos-sdk/MsgSendResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgSendResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSendResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSendResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
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
        const message = createBaseMsgSendResponse();
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
        const message = createBaseMsgSendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendResponse",
            value: exports.MsgSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
            value: exports.MsgSendResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSendResponse.typeUrl, exports.MsgSendResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSendResponse.aminoType, exports.MsgSendResponse.typeUrl);
