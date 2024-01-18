"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRevokeAllowanceResponse = exports.MsgRevokeAllowance = exports.MsgGrantAllowanceResponse = exports.MsgGrantAllowance = void 0;
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgGrantAllowance() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.MsgGrantAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    is(o) {
        return o && (o.$typeUrl === exports.MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            allowance: (0, helpers_1.isSet)(object.allowance) ? registry_1.GlobalDecoderRegistry.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGrantAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            allowance: object.allowance ? registry_1.GlobalDecoderRegistry.fromSDK(object.allowance) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        message.allowance !== undefined && (obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toSDK(message.allowance) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgGrantAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowance",
            value: exports.MsgGrantAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: exports.MsgGrantAllowance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgGrantAllowance.typeUrl, exports.MsgGrantAllowance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgGrantAllowance.aminoType, exports.MsgGrantAllowance.typeUrl);
function createBaseMsgGrantAllowanceResponse() {
    return {};
}
exports.MsgGrantAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
    aminoType: "cosmos-sdk/MsgGrantAllowanceResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgGrantAllowanceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgGrantAllowanceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgGrantAllowanceResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowanceResponse();
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
        const message = createBaseMsgGrantAllowanceResponse();
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
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgGrantAllowanceResponse.typeUrl, exports.MsgGrantAllowanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgGrantAllowanceResponse.aminoType, exports.MsgGrantAllowanceResponse.typeUrl);
function createBaseMsgRevokeAllowance() {
    return {
        granter: "",
        grantee: ""
    };
}
exports.MsgRevokeAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgRevokeAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRevokeAllowance.typeUrl, exports.MsgRevokeAllowance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRevokeAllowance.aminoType, exports.MsgRevokeAllowance.typeUrl);
function createBaseMsgRevokeAllowanceResponse() {
    return {};
}
exports.MsgRevokeAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
    aminoType: "cosmos-sdk/MsgRevokeAllowanceResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgRevokeAllowanceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgRevokeAllowanceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgRevokeAllowanceResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowanceResponse();
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
        const message = createBaseMsgRevokeAllowanceResponse();
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
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRevokeAllowanceResponse.typeUrl, exports.MsgRevokeAllowanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRevokeAllowanceResponse.aminoType, exports.MsgRevokeAllowanceResponse.typeUrl);
