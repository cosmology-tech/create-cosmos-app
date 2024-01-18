"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEpochProvisionsResponse = exports.QueryEpochProvisionsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const mint_1 = require("./mint");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.mint.v1beta1.QueryParamsRequest",
    aminoType: "osmosis/mint/query-params-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: mint_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.mint.v1beta1.QueryParamsResponse",
    aminoType: "osmosis/mint/query-params-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || mint_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || mint_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || mint_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            mint_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = mint_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? mint_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? mint_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? mint_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? mint_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? mint_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = mint_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? mint_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryEpochProvisionsRequest() {
    return {};
}
exports.QueryEpochProvisionsRequest = {
    typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest",
    aminoType: "osmosis/mint/query-epoch-provisions-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryEpochProvisionsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryEpochProvisionsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryEpochProvisionsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochProvisionsRequest();
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
        const message = createBaseQueryEpochProvisionsRequest();
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
        const message = createBaseQueryEpochProvisionsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochProvisionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/query-epoch-provisions-request",
            value: exports.QueryEpochProvisionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEpochProvisionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochProvisionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest",
            value: exports.QueryEpochProvisionsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEpochProvisionsRequest.typeUrl, exports.QueryEpochProvisionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryEpochProvisionsRequest.aminoType, exports.QueryEpochProvisionsRequest.typeUrl);
function createBaseQueryEpochProvisionsResponse() {
    return {
        epochProvisions: new Uint8Array()
    };
}
exports.QueryEpochProvisionsResponse = {
    typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse",
    aminoType: "osmosis/mint/query-epoch-provisions-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEpochProvisionsResponse.typeUrl || o.epochProvisions instanceof Uint8Array || typeof o.epochProvisions === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEpochProvisionsResponse.typeUrl || o.epoch_provisions instanceof Uint8Array || typeof o.epoch_provisions === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEpochProvisionsResponse.typeUrl || o.epoch_provisions instanceof Uint8Array || typeof o.epoch_provisions === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.epochProvisions.length !== 0) {
            writer.uint32(10).bytes(message.epochProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochProvisionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochProvisions = reader.bytes();
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
            epochProvisions: (0, helpers_1.isSet)(object.epochProvisions) ? (0, helpers_1.bytesFromBase64)(object.epochProvisions) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochProvisions !== undefined && (obj.epochProvisions = (0, helpers_1.base64FromBytes)(message.epochProvisions !== undefined ? message.epochProvisions : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochProvisionsResponse();
        message.epochProvisions = object.epochProvisions ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            epochProvisions: object?.epoch_provisions
        };
    },
    toSDK(message) {
        const obj = {};
        obj.epoch_provisions = message.epochProvisions;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryEpochProvisionsResponse();
        if (object.epoch_provisions !== undefined && object.epoch_provisions !== null) {
            message.epochProvisions = (0, helpers_1.bytesFromBase64)(object.epoch_provisions);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_provisions = message.epochProvisions ? (0, helpers_1.base64FromBytes)(message.epochProvisions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochProvisionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/query-epoch-provisions-response",
            value: exports.QueryEpochProvisionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEpochProvisionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochProvisionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse",
            value: exports.QueryEpochProvisionsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEpochProvisionsResponse.typeUrl, exports.QueryEpochProvisionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryEpochProvisionsResponse.aminoType, exports.QueryEpochProvisionsResponse.typeUrl);
