"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryConfigResponse = exports.QueryConfigRequest = void 0;
const config_1 = require("./config");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryConfigRequest() {
    return {};
}
exports.QueryConfigRequest = {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
    aminoType: "cosmos-sdk/QueryConfigRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryConfigRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryConfigRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryConfigRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigRequest();
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
        const message = createBaseQueryConfigRequest();
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
        const message = createBaseQueryConfigRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConfigRequest",
            value: exports.QueryConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConfigRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
            value: exports.QueryConfigRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConfigRequest.typeUrl, exports.QueryConfigRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConfigRequest.aminoType, exports.QueryConfigRequest.typeUrl);
function createBaseQueryConfigResponse() {
    return {
        config: undefined
    };
}
exports.QueryConfigResponse = {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
    aminoType: "cosmos-sdk/QueryConfigResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryConfigResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryConfigResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryConfigResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.config !== undefined) {
            config_1.Config.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = config_1.Config.decode(reader, reader.uint32());
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
            config: (0, helpers_1.isSet)(object.config) ? config_1.Config.fromJSON(object.config) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? config_1.Config.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConfigResponse();
        message.config = object.config !== undefined && object.config !== null ? config_1.Config.fromPartial(object.config) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            config: object.config ? config_1.Config.fromSDK(object.config) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? config_1.Config.toSDK(message.config) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConfigResponse();
        if (object.config !== undefined && object.config !== null) {
            message.config = config_1.Config.fromAmino(object.config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.config = message.config ? config_1.Config.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConfigResponse",
            value: exports.QueryConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConfigResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
            value: exports.QueryConfigResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConfigResponse.typeUrl, exports.QueryConfigResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConfigResponse.aminoType, exports.QueryConfigResponse.typeUrl);
