"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGranteeGrantsResponse = exports.QueryGranteeGrantsRequest = exports.QueryGranterGrantsResponse = exports.QueryGranterGrantsRequest = exports.QueryGrantsResponse = exports.QueryGrantsRequest = void 0;
const pagination_1 = require("../../base/query/v1beta1/pagination");
const authz_1 = require("./authz");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryGrantsRequest() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: "",
        pagination: undefined
    };
}
exports.QueryGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
    aminoType: "cosmos-sdk/QueryGrantsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGrantsRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.msgTypeUrl !== "") {
            writer.uint32(26).string(message.msgTypeUrl);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsRequest();
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
                    message.msgTypeUrl = reader.string();
                    break;
                case 4:
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
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            msgTypeUrl: (0, helpers_1.isSet)(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGrantsRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            msgTypeUrl: object?.msg_type_url,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.msg_type_url = message.msgTypeUrl;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGrantsRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.msg_type_url = message.msgTypeUrl;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsRequest",
            value: exports.QueryGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
            value: exports.QueryGrantsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGrantsRequest.typeUrl, exports.QueryGrantsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGrantsRequest.aminoType, exports.QueryGrantsRequest.typeUrl);
function createBaseQueryGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
exports.QueryGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
    aminoType: "cosmos-sdk/QueryGrantsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.Grant.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.Grant.isSDK(o.grants[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.Grant.isAmino(o.grants[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            authz_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(authz_1.Grant.decode(reader, reader.uint32()));
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
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => authz_1.Grant.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => authz_1.Grant.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.Grant.toSDK(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.Grant.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsResponse",
            value: exports.QueryGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
            value: exports.QueryGrantsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGrantsResponse.typeUrl, exports.QueryGrantsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGrantsResponse.aminoType, exports.QueryGrantsResponse.typeUrl);
function createBaseQueryGranterGrantsRequest() {
    return {
        granter: "",
        pagination: undefined
    };
}
exports.QueryGranterGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
    aminoType: "cosmos-sdk/QueryGranterGrantsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGranterGrantsRequest.typeUrl || typeof o.granter === "string");
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
        const message = createBaseQueryGranterGrantsRequest();
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
        const message = createBaseQueryGranterGrantsRequest();
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
        const message = createBaseQueryGranterGrantsRequest();
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
        return exports.QueryGranterGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranterGrantsRequest",
            value: exports.QueryGranterGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranterGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranterGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
            value: exports.QueryGranterGrantsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGranterGrantsRequest.typeUrl, exports.QueryGranterGrantsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGranterGrantsRequest.aminoType, exports.QueryGranterGrantsRequest.typeUrl);
function createBaseQueryGranterGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
exports.QueryGranterGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
    aminoType: "cosmos-sdk/QueryGranterGrantsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.GrantAuthorization.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.GrantAuthorization.isSDK(o.grants[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGranterGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.GrantAuthorization.isAmino(o.grants[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            authz_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranterGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(authz_1.GrantAuthorization.decode(reader, reader.uint32()));
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
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => authz_1.GrantAuthorization.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGranterGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => authz_1.GrantAuthorization.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toSDK(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGranterGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGranterGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranterGrantsResponse",
            value: exports.QueryGranterGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranterGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranterGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
            value: exports.QueryGranterGrantsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGranterGrantsResponse.typeUrl, exports.QueryGranterGrantsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGranterGrantsResponse.aminoType, exports.QueryGranterGrantsResponse.typeUrl);
function createBaseQueryGranteeGrantsRequest() {
    return {
        grantee: "",
        pagination: undefined
    };
}
exports.QueryGranteeGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
    aminoType: "cosmos-sdk/QueryGranteeGrantsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGranteeGrantsRequest.typeUrl || typeof o.grantee === "string");
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
        const message = createBaseQueryGranteeGrantsRequest();
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
        const message = createBaseQueryGranteeGrantsRequest();
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
        const message = createBaseQueryGranteeGrantsRequest();
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
        return exports.QueryGranteeGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranteeGrantsRequest",
            value: exports.QueryGranteeGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranteeGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranteeGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
            value: exports.QueryGranteeGrantsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGranteeGrantsRequest.typeUrl, exports.QueryGranteeGrantsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGranteeGrantsRequest.aminoType, exports.QueryGranteeGrantsRequest.typeUrl);
function createBaseQueryGranteeGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
exports.QueryGranteeGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
    aminoType: "cosmos-sdk/QueryGranteeGrantsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.GrantAuthorization.is(o.grants[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.GrantAuthorization.isSDK(o.grants[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryGranteeGrantsResponse.typeUrl || Array.isArray(o.grants) && (!o.grants.length || authz_1.GrantAuthorization.isAmino(o.grants[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            authz_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranteeGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(authz_1.GrantAuthorization.decode(reader, reader.uint32()));
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
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => authz_1.GrantAuthorization.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGranteeGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => authz_1.GrantAuthorization.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toSDK(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryGranteeGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGranteeGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranteeGrantsResponse",
            value: exports.QueryGranteeGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranteeGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranteeGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
            value: exports.QueryGranteeGrantsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGranteeGrantsResponse.typeUrl, exports.QueryGranteeGrantsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGranteeGrantsResponse.aminoType, exports.QueryGranteeGrantsResponse.typeUrl);
