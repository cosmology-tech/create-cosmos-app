"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.QueryModuleAccountsResponse = exports.QueryParamsRequest = exports.QueryAccountResponse = exports.QueryParamsResponse = exports.QueryModuleAccountsRequest = exports.QueryAccountRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const any_1 = require("../../../google/protobuf/any");
const auth_1 = require("./auth");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryAccountsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
    aminoType: "cosmos-sdk/QueryAccountsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryAccountsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryAccountsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryAccountsRequest.typeUrl;
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
        const message = createBaseQueryAccountsRequest();
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
        const message = createBaseQueryAccountsRequest();
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
        const message = createBaseQueryAccountsRequest();
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
        return exports.QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: exports.QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
            value: exports.QueryAccountsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAccountsRequest.typeUrl, exports.QueryAccountsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAccountsRequest.aminoType, exports.QueryAccountsRequest.typeUrl);
function createBaseQueryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
exports.QueryAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
    aminoType: "cosmos-sdk/QueryAccountsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || auth_1.BaseAccount.is(o.accounts[0]) || any_1.Any.is(o.accounts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || auth_1.BaseAccount.isSDK(o.accounts[0]) || any_1.Any.isSDK(o.accounts[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || auth_1.BaseAccount.isAmino(o.accounts[0]) || any_1.Any.isAmino(o.accounts[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => registry_1.GlobalDecoderRegistry.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? registry_1.GlobalDecoderRegistry.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => registry_1.GlobalDecoderRegistry.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? registry_1.GlobalDecoderRegistry.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsResponse",
            value: exports.QueryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
            value: exports.QueryAccountsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAccountsResponse.typeUrl, exports.QueryAccountsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAccountsResponse.aminoType, exports.QueryAccountsResponse.typeUrl);
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryAccountRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
    aminoType: "cosmos-sdk/QueryAccountRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAccountRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAccountRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAccountRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: exports.QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
            value: exports.QueryAccountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAccountRequest.typeUrl, exports.QueryAccountRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAccountRequest.aminoType, exports.QueryAccountRequest.typeUrl);
function createBaseQueryModuleAccountsRequest() {
    return {};
}
exports.QueryModuleAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
    aminoType: "cosmos-sdk/QueryModuleAccountsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryModuleAccountsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryModuleAccountsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryModuleAccountsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsRequest();
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
        const message = createBaseQueryModuleAccountsRequest();
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
        const message = createBaseQueryModuleAccountsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsRequest",
            value: exports.QueryModuleAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
            value: exports.QueryModuleAccountsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryModuleAccountsRequest.typeUrl, exports.QueryModuleAccountsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryModuleAccountsRequest.aminoType, exports.QueryModuleAccountsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: auth_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || auth_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || auth_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || auth_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = auth_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? auth_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? auth_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? auth_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = auth_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? auth_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryAccountResponse() {
    return {
        account: undefined
    };
}
exports.QueryAccountResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
    aminoType: "cosmos-sdk/QueryAccountResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryAccountResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.account), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
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
            account: (0, helpers_1.isSet)(object.account) ? registry_1.GlobalDecoderRegistry.fromJSON(object.account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? registry_1.GlobalDecoderRegistry.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.account) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            account: object.account ? registry_1.GlobalDecoderRegistry.fromSDK(object.account) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? registry_1.GlobalDecoderRegistry.toSDK(message.account) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountResponse",
            value: exports.QueryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
            value: exports.QueryAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAccountResponse.typeUrl, exports.QueryAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAccountResponse.aminoType, exports.QueryAccountResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
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
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryModuleAccountsResponse() {
    return {
        accounts: []
    };
}
exports.QueryModuleAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
    aminoType: "cosmos-sdk/QueryModuleAccountsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryModuleAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || auth_1.ModuleAccount.is(o.accounts[0]) || any_1.Any.is(o.accounts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryModuleAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || auth_1.ModuleAccount.isSDK(o.accounts[0]) || any_1.Any.isSDK(o.accounts[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryModuleAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || auth_1.ModuleAccount.isAmino(o.accounts[0]) || any_1.Any.isAmino(o.accounts[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => registry_1.GlobalDecoderRegistry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? registry_1.GlobalDecoderRegistry.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => registry_1.GlobalDecoderRegistry.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? registry_1.GlobalDecoderRegistry.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsResponse",
            value: exports.QueryModuleAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
            value: exports.QueryModuleAccountsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryModuleAccountsResponse.typeUrl, exports.QueryModuleAccountsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryModuleAccountsResponse.aminoType, exports.QueryModuleAccountsResponse.typeUrl);
function createBaseBech32PrefixRequest() {
    return {};
}
exports.Bech32PrefixRequest = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
    aminoType: "cosmos-sdk/Bech32PrefixRequest",
    is(o) {
        return o && o.$typeUrl === exports.Bech32PrefixRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Bech32PrefixRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Bech32PrefixRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixRequest();
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
        const message = createBaseBech32PrefixRequest();
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
        const message = createBaseBech32PrefixRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Bech32PrefixRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixRequest",
            value: exports.Bech32PrefixRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Bech32PrefixRequest.decode(message.value);
    },
    toProto(message) {
        return exports.Bech32PrefixRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
            value: exports.Bech32PrefixRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Bech32PrefixRequest.typeUrl, exports.Bech32PrefixRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Bech32PrefixRequest.aminoType, exports.Bech32PrefixRequest.typeUrl);
function createBaseBech32PrefixResponse() {
    return {
        bech32Prefix: ""
    };
}
exports.Bech32PrefixResponse = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
    aminoType: "cosmos-sdk/Bech32PrefixResponse",
    is(o) {
        return o && (o.$typeUrl === exports.Bech32PrefixResponse.typeUrl || typeof o.bech32Prefix === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Bech32PrefixResponse.typeUrl || typeof o.bech32_prefix === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Bech32PrefixResponse.typeUrl || typeof o.bech32_prefix === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bech32Prefix !== "") {
            writer.uint32(10).string(message.bech32Prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32Prefix = reader.string();
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
            bech32Prefix: (0, helpers_1.isSet)(object.bech32Prefix) ? String(object.bech32Prefix) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBech32PrefixResponse();
        message.bech32Prefix = object.bech32Prefix ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            bech32Prefix: object?.bech32_prefix
        };
    },
    toSDK(message) {
        const obj = {};
        obj.bech32_prefix = message.bech32Prefix;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBech32PrefixResponse();
        if (object.bech32_prefix !== undefined && object.bech32_prefix !== null) {
            message.bech32Prefix = object.bech32_prefix;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_prefix = message.bech32Prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Bech32PrefixResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixResponse",
            value: exports.Bech32PrefixResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Bech32PrefixResponse.decode(message.value);
    },
    toProto(message) {
        return exports.Bech32PrefixResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
            value: exports.Bech32PrefixResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Bech32PrefixResponse.typeUrl, exports.Bech32PrefixResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Bech32PrefixResponse.aminoType, exports.Bech32PrefixResponse.typeUrl);
function createBaseAddressBytesToStringRequest() {
    return {
        addressBytes: new Uint8Array()
    };
}
exports.AddressBytesToStringRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
    aminoType: "cosmos-sdk/AddressBytesToStringRequest",
    is(o) {
        return o && (o.$typeUrl === exports.AddressBytesToStringRequest.typeUrl || o.addressBytes instanceof Uint8Array || typeof o.addressBytes === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AddressBytesToStringRequest.typeUrl || o.address_bytes instanceof Uint8Array || typeof o.address_bytes === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AddressBytesToStringRequest.typeUrl || o.address_bytes instanceof Uint8Array || typeof o.address_bytes === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressBytes = reader.bytes();
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
            addressBytes: (0, helpers_1.isSet)(object.addressBytes) ? (0, helpers_1.bytesFromBase64)(object.addressBytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.addressBytes !== undefined && (obj.addressBytes = (0, helpers_1.base64FromBytes)(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringRequest();
        message.addressBytes = object.addressBytes ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            addressBytes: object?.address_bytes
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAddressBytesToStringRequest();
        if (object.address_bytes !== undefined && object.address_bytes !== null) {
            message.addressBytes = (0, helpers_1.bytesFromBase64)(object.address_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes ? (0, helpers_1.base64FromBytes)(message.addressBytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressBytesToStringRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringRequest",
            value: exports.AddressBytesToStringRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressBytesToStringRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AddressBytesToStringRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
            value: exports.AddressBytesToStringRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AddressBytesToStringRequest.typeUrl, exports.AddressBytesToStringRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AddressBytesToStringRequest.aminoType, exports.AddressBytesToStringRequest.typeUrl);
function createBaseAddressBytesToStringResponse() {
    return {
        addressString: ""
    };
}
exports.AddressBytesToStringResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
    aminoType: "cosmos-sdk/AddressBytesToStringResponse",
    is(o) {
        return o && (o.$typeUrl === exports.AddressBytesToStringResponse.typeUrl || typeof o.addressString === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AddressBytesToStringResponse.typeUrl || typeof o.address_string === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AddressBytesToStringResponse.typeUrl || typeof o.address_string === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressString = reader.string();
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
            addressString: (0, helpers_1.isSet)(object.addressString) ? String(object.addressString) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.addressString !== undefined && (obj.addressString = message.addressString);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringResponse();
        message.addressString = object.addressString ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            addressString: object?.address_string
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_string = message.addressString;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAddressBytesToStringResponse();
        if (object.address_string !== undefined && object.address_string !== null) {
            message.addressString = object.address_string;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.addressString;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressBytesToStringResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringResponse",
            value: exports.AddressBytesToStringResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressBytesToStringResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AddressBytesToStringResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
            value: exports.AddressBytesToStringResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AddressBytesToStringResponse.typeUrl, exports.AddressBytesToStringResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AddressBytesToStringResponse.aminoType, exports.AddressBytesToStringResponse.typeUrl);
function createBaseAddressStringToBytesRequest() {
    return {
        addressString: ""
    };
}
exports.AddressStringToBytesRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
    aminoType: "cosmos-sdk/AddressStringToBytesRequest",
    is(o) {
        return o && (o.$typeUrl === exports.AddressStringToBytesRequest.typeUrl || typeof o.addressString === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AddressStringToBytesRequest.typeUrl || typeof o.address_string === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AddressStringToBytesRequest.typeUrl || typeof o.address_string === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressString = reader.string();
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
            addressString: (0, helpers_1.isSet)(object.addressString) ? String(object.addressString) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.addressString !== undefined && (obj.addressString = message.addressString);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesRequest();
        message.addressString = object.addressString ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            addressString: object?.address_string
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_string = message.addressString;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAddressStringToBytesRequest();
        if (object.address_string !== undefined && object.address_string !== null) {
            message.addressString = object.address_string;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.addressString;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressStringToBytesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesRequest",
            value: exports.AddressStringToBytesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressStringToBytesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AddressStringToBytesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
            value: exports.AddressStringToBytesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AddressStringToBytesRequest.typeUrl, exports.AddressStringToBytesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AddressStringToBytesRequest.aminoType, exports.AddressStringToBytesRequest.typeUrl);
function createBaseAddressStringToBytesResponse() {
    return {
        addressBytes: new Uint8Array()
    };
}
exports.AddressStringToBytesResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
    aminoType: "cosmos-sdk/AddressStringToBytesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.AddressStringToBytesResponse.typeUrl || o.addressBytes instanceof Uint8Array || typeof o.addressBytes === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AddressStringToBytesResponse.typeUrl || o.address_bytes instanceof Uint8Array || typeof o.address_bytes === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AddressStringToBytesResponse.typeUrl || o.address_bytes instanceof Uint8Array || typeof o.address_bytes === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressBytes = reader.bytes();
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
            addressBytes: (0, helpers_1.isSet)(object.addressBytes) ? (0, helpers_1.bytesFromBase64)(object.addressBytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.addressBytes !== undefined && (obj.addressBytes = (0, helpers_1.base64FromBytes)(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesResponse();
        message.addressBytes = object.addressBytes ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            addressBytes: object?.address_bytes
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAddressStringToBytesResponse();
        if (object.address_bytes !== undefined && object.address_bytes !== null) {
            message.addressBytes = (0, helpers_1.bytesFromBase64)(object.address_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes ? (0, helpers_1.base64FromBytes)(message.addressBytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressStringToBytesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesResponse",
            value: exports.AddressStringToBytesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressStringToBytesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AddressStringToBytesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
            value: exports.AddressStringToBytesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AddressStringToBytesResponse.typeUrl, exports.AddressStringToBytesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AddressStringToBytesResponse.aminoType, exports.AddressStringToBytesResponse.typeUrl);
