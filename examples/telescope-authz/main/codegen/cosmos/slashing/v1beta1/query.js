"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySigningInfosResponse = exports.QuerySigningInfosRequest = exports.QuerySigningInfoResponse = exports.QuerySigningInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const pagination_1 = require("../../base/query/v1beta1/pagination");
const slashing_1 = require("./slashing");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
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
            typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: slashing_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || slashing_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || slashing_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || slashing_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? slashing_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? slashing_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = slashing_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? slashing_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQuerySigningInfoRequest() {
    return {
        consAddress: ""
    };
}
exports.QuerySigningInfoRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
    aminoType: "cosmos-sdk/QuerySigningInfoRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfoRequest.typeUrl || typeof o.consAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfoRequest.typeUrl || typeof o.cons_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfoRequest.typeUrl || typeof o.cons_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consAddress !== "") {
            writer.uint32(10).string(message.consAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consAddress = reader.string();
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
            consAddress: (0, helpers_1.isSet)(object.consAddress) ? String(object.consAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.consAddress !== undefined && (obj.consAddress = message.consAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoRequest();
        message.consAddress = object.consAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            consAddress: object?.cons_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.cons_address = message.consAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfoRequest();
        if (object.cons_address !== undefined && object.cons_address !== null) {
            message.consAddress = object.cons_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cons_address = message.consAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySigningInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfoRequest",
            value: exports.QuerySigningInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySigningInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySigningInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
            value: exports.QuerySigningInfoRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySigningInfoRequest.typeUrl, exports.QuerySigningInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySigningInfoRequest.aminoType, exports.QuerySigningInfoRequest.typeUrl);
function createBaseQuerySigningInfoResponse() {
    return {
        valSigningInfo: slashing_1.ValidatorSigningInfo.fromPartial({})
    };
}
exports.QuerySigningInfoResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
    aminoType: "cosmos-sdk/QuerySigningInfoResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfoResponse.typeUrl || slashing_1.ValidatorSigningInfo.is(o.valSigningInfo));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfoResponse.typeUrl || slashing_1.ValidatorSigningInfo.isSDK(o.val_signing_info));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfoResponse.typeUrl || slashing_1.ValidatorSigningInfo.isAmino(o.val_signing_info));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.valSigningInfo !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valSigningInfo = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            valSigningInfo: (0, helpers_1.isSet)(object.valSigningInfo) ? slashing_1.ValidatorSigningInfo.fromJSON(object.valSigningInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.valSigningInfo !== undefined && (obj.valSigningInfo = message.valSigningInfo ? slashing_1.ValidatorSigningInfo.toJSON(message.valSigningInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoResponse();
        message.valSigningInfo = object.valSigningInfo !== undefined && object.valSigningInfo !== null ? slashing_1.ValidatorSigningInfo.fromPartial(object.valSigningInfo) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            valSigningInfo: object.val_signing_info ? slashing_1.ValidatorSigningInfo.fromSDK(object.val_signing_info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.valSigningInfo !== undefined && (obj.val_signing_info = message.valSigningInfo ? slashing_1.ValidatorSigningInfo.toSDK(message.valSigningInfo) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfoResponse();
        if (object.val_signing_info !== undefined && object.val_signing_info !== null) {
            message.valSigningInfo = slashing_1.ValidatorSigningInfo.fromAmino(object.val_signing_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val_signing_info = message.valSigningInfo ? slashing_1.ValidatorSigningInfo.toAmino(message.valSigningInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySigningInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfoResponse",
            value: exports.QuerySigningInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySigningInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySigningInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
            value: exports.QuerySigningInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySigningInfoResponse.typeUrl, exports.QuerySigningInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySigningInfoResponse.aminoType, exports.QuerySigningInfoResponse.typeUrl);
function createBaseQuerySigningInfosRequest() {
    return {
        pagination: undefined
    };
}
exports.QuerySigningInfosRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
    aminoType: "cosmos-sdk/QuerySigningInfosRequest",
    is(o) {
        return o && o.$typeUrl === exports.QuerySigningInfosRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QuerySigningInfosRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QuerySigningInfosRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfosRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfosRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySigningInfosRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfosRequest",
            value: exports.QuerySigningInfosRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySigningInfosRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySigningInfosRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
            value: exports.QuerySigningInfosRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySigningInfosRequest.typeUrl, exports.QuerySigningInfosRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySigningInfosRequest.aminoType, exports.QuerySigningInfosRequest.typeUrl);
function createBaseQuerySigningInfosResponse() {
    return {
        info: [],
        pagination: undefined
    };
}
exports.QuerySigningInfosResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
    aminoType: "cosmos-sdk/QuerySigningInfosResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfosResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || slashing_1.ValidatorSigningInfo.is(o.info[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfosResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || slashing_1.ValidatorSigningInfo.isSDK(o.info[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySigningInfosResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || slashing_1.ValidatorSigningInfo.isAmino(o.info[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.info) {
            slashing_1.ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info.push(slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            info: Array.isArray(object?.info) ? object.info.map((e) => slashing_1.ValidatorSigningInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map(e => e ? slashing_1.ValidatorSigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.info = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfosResponse();
        message.info = object.info?.map(e => slashing_1.ValidatorSigningInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            info: Array.isArray(object?.info) ? object.info.map((e) => slashing_1.ValidatorSigningInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map(e => e ? slashing_1.ValidatorSigningInfo.toSDK(e) : undefined);
        }
        else {
            obj.info = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySigningInfosResponse();
        message.info = object.info?.map(e => slashing_1.ValidatorSigningInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map(e => e ? slashing_1.ValidatorSigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.info = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySigningInfosResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfosResponse",
            value: exports.QuerySigningInfosResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySigningInfosResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySigningInfosResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
            value: exports.QuerySigningInfosResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySigningInfosResponse.typeUrl, exports.QuerySigningInfosResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySigningInfosResponse.aminoType, exports.QuerySigningInfosResponse.typeUrl);
