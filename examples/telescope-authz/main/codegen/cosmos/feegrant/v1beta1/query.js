"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllowancesByGranterResponse = exports.QueryAllowancesByGranterRequest = exports.QueryAllowancesResponse = exports.QueryAllowancesRequest = exports.QueryAllowanceResponse = exports.QueryAllowanceRequest = void 0;
const pagination_1 = require("../../base/query/v1beta1/pagination");
const feegrant_1 = require("./feegrant");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryAllowanceRequest() {
    return {
        granter: "",
        grantee: ""
    };
}
exports.QueryAllowanceRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
    aminoType: "cosmos-sdk/QueryAllowanceRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllowanceRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllowanceRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllowanceRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
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
        const message = createBaseQueryAllowanceRequest();
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
        const message = createBaseQueryAllowanceRequest();
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
        const message = createBaseQueryAllowanceRequest();
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
        return exports.QueryAllowanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowanceRequest",
            value: exports.QueryAllowanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
            value: exports.QueryAllowanceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllowanceRequest.typeUrl, exports.QueryAllowanceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllowanceRequest.aminoType, exports.QueryAllowanceRequest.typeUrl);
function createBaseQueryAllowanceResponse() {
    return {
        allowance: undefined
    };
}
exports.QueryAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
    aminoType: "cosmos-sdk/QueryAllowanceResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryAllowanceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryAllowanceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryAllowanceResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            feegrant_1.Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = feegrant_1.Grant.decode(reader, reader.uint32());
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
            allowance: (0, helpers_1.isSet)(object.allowance) ? feegrant_1.Grant.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? feegrant_1.Grant.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceResponse();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? feegrant_1.Grant.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            allowance: object.allowance ? feegrant_1.Grant.fromSDK(object.allowance) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? feegrant_1.Grant.toSDK(message.allowance) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowanceResponse();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = feegrant_1.Grant.fromAmino(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? feegrant_1.Grant.toAmino(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowanceResponse",
            value: exports.QueryAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
            value: exports.QueryAllowanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllowanceResponse.typeUrl, exports.QueryAllowanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllowanceResponse.aminoType, exports.QueryAllowanceResponse.typeUrl);
function createBaseQueryAllowancesRequest() {
    return {
        grantee: "",
        pagination: undefined
    };
}
exports.QueryAllowancesRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
    aminoType: "cosmos-sdk/QueryAllowancesRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesRequest.typeUrl || typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesRequest.typeUrl || typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesRequest.typeUrl || typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
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
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesRequest();
        message.grantee = object.grantee ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            grantee: object?.grantee,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.grantee = message.grantee;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesRequest();
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesRequest",
            value: exports.QueryAllowancesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
            value: exports.QueryAllowancesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllowancesRequest.typeUrl, exports.QueryAllowancesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllowancesRequest.aminoType, exports.QueryAllowancesRequest.typeUrl);
function createBaseQueryAllowancesResponse() {
    return {
        allowances: [],
        pagination: undefined
    };
}
exports.QueryAllowancesResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
    aminoType: "cosmos-sdk/QueryAllowancesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.is(o.allowances[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.isSDK(o.allowances[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.isAmino(o.allowances[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesResponse();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toSDK(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesResponse();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesResponse",
            value: exports.QueryAllowancesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
            value: exports.QueryAllowancesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllowancesResponse.typeUrl, exports.QueryAllowancesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllowancesResponse.aminoType, exports.QueryAllowancesResponse.typeUrl);
function createBaseQueryAllowancesByGranterRequest() {
    return {
        granter: "",
        pagination: undefined
    };
}
exports.QueryAllowancesByGranterRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
    aminoType: "cosmos-sdk/QueryAllowancesByGranterRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesByGranterRequest.typeUrl || typeof o.granter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesByGranterRequest.typeUrl || typeof o.granter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesByGranterRequest.typeUrl || typeof o.granter === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterRequest();
        message.granter = object.granter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesByGranterRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesByGranterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesByGranterRequest",
            value: exports.QueryAllowancesByGranterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesByGranterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesByGranterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
            value: exports.QueryAllowancesByGranterRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllowancesByGranterRequest.typeUrl, exports.QueryAllowancesByGranterRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllowancesByGranterRequest.aminoType, exports.QueryAllowancesByGranterRequest.typeUrl);
function createBaseQueryAllowancesByGranterResponse() {
    return {
        allowances: [],
        pagination: undefined
    };
}
exports.QueryAllowancesByGranterResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
    aminoType: "cosmos-sdk/QueryAllowancesByGranterResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesByGranterResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.is(o.allowances[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesByGranterResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.isSDK(o.allowances[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllowancesByGranterResponse.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.isAmino(o.allowances[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterResponse();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toSDK(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesByGranterResponse();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowancesByGranterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesByGranterResponse",
            value: exports.QueryAllowancesByGranterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllowancesByGranterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowancesByGranterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
            value: exports.QueryAllowancesByGranterResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllowancesByGranterResponse.typeUrl, exports.QueryAllowancesByGranterResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllowancesByGranterResponse.aminoType, exports.QueryAllowancesByGranterResponse.typeUrl);
