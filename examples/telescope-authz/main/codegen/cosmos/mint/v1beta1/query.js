"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAnnualProvisionsResponse = exports.QueryAnnualProvisionsRequest = exports.QueryInflationResponse = exports.QueryInflationRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const mint_1 = require("./mint");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
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
            type: "cosmos-sdk/QueryParamsRequest",
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
            typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
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
    typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
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
            type: "cosmos-sdk/QueryParamsResponse",
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
            typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryInflationRequest() {
    return {};
}
exports.QueryInflationRequest = {
    typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
    aminoType: "cosmos-sdk/QueryInflationRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryInflationRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryInflationRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryInflationRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationRequest();
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
        const message = createBaseQueryInflationRequest();
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
        const message = createBaseQueryInflationRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInflationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryInflationRequest",
            value: exports.QueryInflationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryInflationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInflationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
            value: exports.QueryInflationRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryInflationRequest.typeUrl, exports.QueryInflationRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryInflationRequest.aminoType, exports.QueryInflationRequest.typeUrl);
function createBaseQueryInflationResponse() {
    return {
        inflation: new Uint8Array()
    };
}
exports.QueryInflationResponse = {
    typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
    aminoType: "cosmos-sdk/QueryInflationResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryInflationResponse.typeUrl || o.inflation instanceof Uint8Array || typeof o.inflation === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryInflationResponse.typeUrl || o.inflation instanceof Uint8Array || typeof o.inflation === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryInflationResponse.typeUrl || o.inflation instanceof Uint8Array || typeof o.inflation === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inflation.length !== 0) {
            writer.uint32(10).bytes(message.inflation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.bytes();
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
            inflation: (0, helpers_1.isSet)(object.inflation) ? (0, helpers_1.bytesFromBase64)(object.inflation) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.inflation !== undefined && (obj.inflation = (0, helpers_1.base64FromBytes)(message.inflation !== undefined ? message.inflation : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInflationResponse();
        message.inflation = object.inflation ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            inflation: object?.inflation
        };
    },
    toSDK(message) {
        const obj = {};
        obj.inflation = message.inflation;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryInflationResponse();
        if (object.inflation !== undefined && object.inflation !== null) {
            message.inflation = (0, helpers_1.bytesFromBase64)(object.inflation);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation = message.inflation ? (0, helpers_1.base64FromBytes)(message.inflation) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInflationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryInflationResponse",
            value: exports.QueryInflationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryInflationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInflationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
            value: exports.QueryInflationResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryInflationResponse.typeUrl, exports.QueryInflationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryInflationResponse.aminoType, exports.QueryInflationResponse.typeUrl);
function createBaseQueryAnnualProvisionsRequest() {
    return {};
}
exports.QueryAnnualProvisionsRequest = {
    typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
    aminoType: "cosmos-sdk/QueryAnnualProvisionsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryAnnualProvisionsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryAnnualProvisionsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryAnnualProvisionsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnnualProvisionsRequest();
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
        const message = createBaseQueryAnnualProvisionsRequest();
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
        const message = createBaseQueryAnnualProvisionsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnnualProvisionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAnnualProvisionsRequest",
            value: exports.QueryAnnualProvisionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAnnualProvisionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnnualProvisionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
            value: exports.QueryAnnualProvisionsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAnnualProvisionsRequest.typeUrl, exports.QueryAnnualProvisionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAnnualProvisionsRequest.aminoType, exports.QueryAnnualProvisionsRequest.typeUrl);
function createBaseQueryAnnualProvisionsResponse() {
    return {
        annualProvisions: new Uint8Array()
    };
}
exports.QueryAnnualProvisionsResponse = {
    typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
    aminoType: "cosmos-sdk/QueryAnnualProvisionsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAnnualProvisionsResponse.typeUrl || o.annualProvisions instanceof Uint8Array || typeof o.annualProvisions === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAnnualProvisionsResponse.typeUrl || o.annual_provisions instanceof Uint8Array || typeof o.annual_provisions === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAnnualProvisionsResponse.typeUrl || o.annual_provisions instanceof Uint8Array || typeof o.annual_provisions === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.annualProvisions.length !== 0) {
            writer.uint32(10).bytes(message.annualProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnnualProvisionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annualProvisions = reader.bytes();
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
            annualProvisions: (0, helpers_1.isSet)(object.annualProvisions) ? (0, helpers_1.bytesFromBase64)(object.annualProvisions) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.annualProvisions !== undefined && (obj.annualProvisions = (0, helpers_1.base64FromBytes)(message.annualProvisions !== undefined ? message.annualProvisions : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAnnualProvisionsResponse();
        message.annualProvisions = object.annualProvisions ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            annualProvisions: object?.annual_provisions
        };
    },
    toSDK(message) {
        const obj = {};
        obj.annual_provisions = message.annualProvisions;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAnnualProvisionsResponse();
        if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
            message.annualProvisions = (0, helpers_1.bytesFromBase64)(object.annual_provisions);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.annual_provisions = message.annualProvisions ? (0, helpers_1.base64FromBytes)(message.annualProvisions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnnualProvisionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAnnualProvisionsResponse",
            value: exports.QueryAnnualProvisionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAnnualProvisionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnnualProvisionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
            value: exports.QueryAnnualProvisionsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAnnualProvisionsResponse.typeUrl, exports.QueryAnnualProvisionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAnnualProvisionsResponse.aminoType, exports.QueryAnnualProvisionsResponse.typeUrl);
