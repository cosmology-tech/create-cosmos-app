"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subspace = exports.QuerySubspacesResponse = exports.QuerySubspacesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const params_1 = require("./params");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {
        subspace: "",
        key: ""
    };
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
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
            subspace: (0, helpers_1.isSet)(object.subspace) ? String(object.subspace) : "",
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsRequest();
        message.subspace = object.subspace ?? "";
        message.key = object.key ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            subspace: object?.subspace,
            key: object?.key
        };
    },
    toSDK(message) {
        const obj = {};
        obj.subspace = message.subspace;
        obj.key = message.key;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsRequest();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace;
        obj.key = message.key;
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
            typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        param: params_1.ParamChange.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.ParamChange.is(o.param));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.ParamChange.isSDK(o.param));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.ParamChange.isAmino(o.param));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.param !== undefined) {
            params_1.ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
                    message.param = params_1.ParamChange.decode(reader, reader.uint32());
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
            param: (0, helpers_1.isSet)(object.param) ? params_1.ParamChange.fromJSON(object.param) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.param !== undefined && (obj.param = message.param ? params_1.ParamChange.toJSON(message.param) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.param = object.param !== undefined && object.param !== null ? params_1.ParamChange.fromPartial(object.param) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            param: object.param ? params_1.ParamChange.fromSDK(object.param) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.param !== undefined && (obj.param = message.param ? params_1.ParamChange.toSDK(message.param) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.param !== undefined && object.param !== null) {
            message.param = params_1.ParamChange.fromAmino(object.param);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.param = message.param ? params_1.ParamChange.toAmino(message.param) : undefined;
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
            typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQuerySubspacesRequest() {
    return {};
}
exports.QuerySubspacesRequest = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
    aminoType: "cosmos-sdk/QuerySubspacesRequest",
    is(o) {
        return o && o.$typeUrl === exports.QuerySubspacesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QuerySubspacesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QuerySubspacesRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesRequest();
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
        const message = createBaseQuerySubspacesRequest();
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
        const message = createBaseQuerySubspacesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubspacesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesRequest",
            value: exports.QuerySubspacesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySubspacesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubspacesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
            value: exports.QuerySubspacesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySubspacesRequest.typeUrl, exports.QuerySubspacesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySubspacesRequest.aminoType, exports.QuerySubspacesRequest.typeUrl);
function createBaseQuerySubspacesResponse() {
    return {
        subspaces: []
    };
}
exports.QuerySubspacesResponse = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
    aminoType: "cosmos-sdk/QuerySubspacesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || exports.Subspace.is(o.subspaces[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || exports.Subspace.isSDK(o.subspaces[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || exports.Subspace.isAmino(o.subspaces[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.subspaces) {
            exports.Subspace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspaces.push(exports.Subspace.decode(reader, reader.uint32()));
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
            subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e) => exports.Subspace.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(e => e ? exports.Subspace.toJSON(e) : undefined);
        }
        else {
            obj.subspaces = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map(e => exports.Subspace.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e) => exports.Subspace.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(e => e ? exports.Subspace.toSDK(e) : undefined);
        }
        else {
            obj.subspaces = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map(e => exports.Subspace.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(e => e ? exports.Subspace.toAmino(e) : undefined);
        }
        else {
            obj.subspaces = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubspacesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesResponse",
            value: exports.QuerySubspacesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySubspacesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubspacesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
            value: exports.QuerySubspacesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySubspacesResponse.typeUrl, exports.QuerySubspacesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySubspacesResponse.aminoType, exports.QuerySubspacesResponse.typeUrl);
function createBaseSubspace() {
    return {
        subspace: "",
        keys: []
    };
}
exports.Subspace = {
    typeUrl: "/cosmos.params.v1beta1.Subspace",
    aminoType: "cosmos-sdk/Subspace",
    is(o) {
        return o && (o.$typeUrl === exports.Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        for (const v of message.keys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubspace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.keys.push(reader.string());
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
            subspace: (0, helpers_1.isSet)(object.subspace) ? String(object.subspace) : "",
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSubspace();
        message.subspace = object.subspace ?? "";
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            subspace: object?.subspace,
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.subspace = message.subspace;
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSubspace();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace;
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Subspace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Subspace",
            value: exports.Subspace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Subspace.decode(message.value);
    },
    toProto(message) {
        return exports.Subspace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.Subspace",
            value: exports.Subspace.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Subspace.typeUrl, exports.Subspace);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Subspace.aminoType, exports.Subspace.typeUrl);
