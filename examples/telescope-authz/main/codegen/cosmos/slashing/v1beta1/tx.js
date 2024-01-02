"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUnjailResponse = exports.MsgUnjail = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgUnjail() {
    return {
        validatorAddr: ""
    };
}
exports.MsgUnjail = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
    aminoType: "cosmos-sdk/MsgUnjail",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUnjail.typeUrl || typeof o.validatorAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUnjail.typeUrl || typeof o.validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUnjail.typeUrl || typeof o.validator_addr === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
            validatorAddr: (0, helpers_1.isSet)(object.validatorAddr) ? String(object.validatorAddr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnjail();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validatorAddr: object?.validator_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgUnjail();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnjail.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjail",
            value: exports.MsgUnjail.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnjail.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnjail.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
            value: exports.MsgUnjail.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnjail.typeUrl, exports.MsgUnjail);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnjail.aminoType, exports.MsgUnjail.typeUrl);
function createBaseMsgUnjailResponse() {
    return {};
}
exports.MsgUnjailResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
    aminoType: "cosmos-sdk/MsgUnjailResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUnjailResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUnjailResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUnjailResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjailResponse();
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
        const message = createBaseMsgUnjailResponse();
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
        const message = createBaseMsgUnjailResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnjailResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjailResponse",
            value: exports.MsgUnjailResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnjailResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnjailResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
            value: exports.MsgUnjailResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnjailResponse.typeUrl, exports.MsgUnjailResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnjailResponse.aminoType, exports.MsgUnjailResponse.typeUrl);
