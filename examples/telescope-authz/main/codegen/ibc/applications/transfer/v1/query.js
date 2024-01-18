"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDenomTracesResponse = exports.QueryDenomTracesRequest = exports.QueryDenomTraceResponse = exports.QueryDenomTraceRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const transfer_1 = require("./transfer");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseQueryDenomTraceRequest() {
    return {
        hash: ""
    };
}
exports.QueryDenomTraceRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
    aminoType: "cosmos-sdk/QueryDenomTraceRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomTraceRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTraceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceRequest",
            value: exports.QueryDenomTraceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTraceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTraceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
            value: exports.QueryDenomTraceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomTraceRequest.typeUrl, exports.QueryDenomTraceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomTraceRequest.aminoType, exports.QueryDenomTraceRequest.typeUrl);
function createBaseQueryDenomTraceResponse() {
    return {
        denomTrace: undefined
    };
}
exports.QueryDenomTraceResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
    aminoType: "cosmos-sdk/QueryDenomTraceResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryDenomTraceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryDenomTraceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryDenomTraceResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denomTrace !== undefined) {
            transfer_1.DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTrace = transfer_1.DenomTrace.decode(reader, reader.uint32());
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
            denomTrace: (0, helpers_1.isSet)(object.denomTrace) ? transfer_1.DenomTrace.fromJSON(object.denomTrace) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denomTrace !== undefined && (obj.denomTrace = message.denomTrace ? transfer_1.DenomTrace.toJSON(message.denomTrace) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceResponse();
        message.denomTrace = object.denomTrace !== undefined && object.denomTrace !== null ? transfer_1.DenomTrace.fromPartial(object.denomTrace) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denomTrace: object.denom_trace ? transfer_1.DenomTrace.fromSDK(object.denom_trace) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.denomTrace !== undefined && (obj.denom_trace = message.denomTrace ? transfer_1.DenomTrace.toSDK(message.denomTrace) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomTraceResponse();
        if (object.denom_trace !== undefined && object.denom_trace !== null) {
            message.denomTrace = transfer_1.DenomTrace.fromAmino(object.denom_trace);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_trace = message.denomTrace ? transfer_1.DenomTrace.toAmino(message.denomTrace) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTraceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceResponse",
            value: exports.QueryDenomTraceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTraceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTraceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
            value: exports.QueryDenomTraceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomTraceResponse.typeUrl, exports.QueryDenomTraceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomTraceResponse.aminoType, exports.QueryDenomTraceResponse.typeUrl);
function createBaseQueryDenomTracesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryDenomTracesRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
    aminoType: "cosmos-sdk/QueryDenomTracesRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryDenomTracesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryDenomTracesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryDenomTracesRequest.typeUrl;
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
        const message = createBaseQueryDenomTracesRequest();
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
        const message = createBaseQueryDenomTracesRequest();
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
        const message = createBaseQueryDenomTracesRequest();
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
        return exports.QueryDenomTracesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesRequest",
            value: exports.QueryDenomTracesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTracesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTracesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
            value: exports.QueryDenomTracesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomTracesRequest.typeUrl, exports.QueryDenomTracesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomTracesRequest.aminoType, exports.QueryDenomTracesRequest.typeUrl);
function createBaseQueryDenomTracesResponse() {
    return {
        denomTraces: [],
        pagination: undefined
    };
}
exports.QueryDenomTracesResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
    aminoType: "cosmos-sdk/QueryDenomTracesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDenomTracesResponse.typeUrl || Array.isArray(o.denomTraces) && (!o.denomTraces.length || transfer_1.DenomTrace.is(o.denomTraces[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDenomTracesResponse.typeUrl || Array.isArray(o.denom_traces) && (!o.denom_traces.length || transfer_1.DenomTrace.isSDK(o.denom_traces[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDenomTracesResponse.typeUrl || Array.isArray(o.denom_traces) && (!o.denom_traces.length || transfer_1.DenomTrace.isAmino(o.denom_traces[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denomTraces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
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
            denomTraces: Array.isArray(object?.denomTraces) ? object.denomTraces.map((e) => transfer_1.DenomTrace.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denomTraces = message.denomTraces.map(e => e ? transfer_1.DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denomTraces = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTracesResponse();
        message.denomTraces = object.denomTraces?.map(e => transfer_1.DenomTrace.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denomTraces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => transfer_1.DenomTrace.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denom_traces = message.denomTraces.map(e => e ? transfer_1.DenomTrace.toSDK(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomTracesResponse();
        message.denomTraces = object.denom_traces?.map(e => transfer_1.DenomTrace.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denom_traces = message.denomTraces.map(e => e ? transfer_1.DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTracesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesResponse",
            value: exports.QueryDenomTracesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTracesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTracesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
            value: exports.QueryDenomTracesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomTracesResponse.typeUrl, exports.QueryDenomTracesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomTracesResponse.aminoType, exports.QueryDenomTracesResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
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
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? transfer_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? transfer_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? transfer_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? transfer_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = transfer_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? transfer_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
