"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgVerifyInvariantResponse = exports.MsgVerifyInvariant = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgVerifyInvariant() {
    return {
        sender: "",
        invariantModuleName: "",
        invariantRoute: ""
    };
}
exports.MsgVerifyInvariant = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    is(o) {
        return o && (o.$typeUrl === exports.MsgVerifyInvariant.typeUrl || typeof o.sender === "string" && typeof o.invariantModuleName === "string" && typeof o.invariantRoute === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgVerifyInvariant.typeUrl || typeof o.sender === "string" && typeof o.invariant_module_name === "string" && typeof o.invariant_route === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgVerifyInvariant.typeUrl || typeof o.sender === "string" && typeof o.invariant_module_name === "string" && typeof o.invariant_route === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invariantModuleName !== "") {
            writer.uint32(18).string(message.invariantModuleName);
        }
        if (message.invariantRoute !== "") {
            writer.uint32(26).string(message.invariantRoute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invariantModuleName = reader.string();
                    break;
                case 3:
                    message.invariantRoute = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            invariantModuleName: (0, helpers_1.isSet)(object.invariantModuleName) ? String(object.invariantModuleName) : "",
            invariantRoute: (0, helpers_1.isSet)(object.invariantRoute) ? String(object.invariantRoute) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invariantModuleName !== undefined && (obj.invariantModuleName = message.invariantModuleName);
        message.invariantRoute !== undefined && (obj.invariantRoute = message.invariantRoute);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVerifyInvariant();
        message.sender = object.sender ?? "";
        message.invariantModuleName = object.invariantModuleName ?? "";
        message.invariantRoute = object.invariantRoute ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            invariantModuleName: object?.invariant_module_name,
            invariantRoute: object?.invariant_route
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.invariant_module_name = message.invariantModuleName;
        obj.invariant_route = message.invariantRoute;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgVerifyInvariant();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.invariant_module_name !== undefined && object.invariant_module_name !== null) {
            message.invariantModuleName = object.invariant_module_name;
        }
        if (object.invariant_route !== undefined && object.invariant_route !== null) {
            message.invariantRoute = object.invariant_route;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.invariant_module_name = message.invariantModuleName;
        obj.invariant_route = message.invariantRoute;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVerifyInvariant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariant",
            value: exports.MsgVerifyInvariant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVerifyInvariant.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVerifyInvariant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
            value: exports.MsgVerifyInvariant.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVerifyInvariant.typeUrl, exports.MsgVerifyInvariant);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVerifyInvariant.aminoType, exports.MsgVerifyInvariant.typeUrl);
function createBaseMsgVerifyInvariantResponse() {
    return {};
}
exports.MsgVerifyInvariantResponse = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
    aminoType: "cosmos-sdk/MsgVerifyInvariantResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgVerifyInvariantResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgVerifyInvariantResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgVerifyInvariantResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariantResponse();
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
        const message = createBaseMsgVerifyInvariantResponse();
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
        const message = createBaseMsgVerifyInvariantResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVerifyInvariantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariantResponse",
            value: exports.MsgVerifyInvariantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVerifyInvariantResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVerifyInvariantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
            value: exports.MsgVerifyInvariantResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVerifyInvariantResponse.typeUrl, exports.MsgVerifyInvariantResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVerifyInvariantResponse.aminoType, exports.MsgVerifyInvariantResponse.typeUrl);
