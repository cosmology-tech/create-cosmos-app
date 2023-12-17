"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern = exports.HttpRule = exports.Http = void 0;
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseHttp() {
    return {
        rules: [],
        fullyDecodeReservedExpansion: false
    };
}
exports.Http = {
    typeUrl: "/google.api.Http",
    is(o) {
        return o && (o.$typeUrl === exports.Http.typeUrl || Array.isArray(o.rules) && (!o.rules.length || exports.HttpRule.is(o.rules[0])) && typeof o.fullyDecodeReservedExpansion === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Http.typeUrl || Array.isArray(o.rules) && (!o.rules.length || exports.HttpRule.isSDK(o.rules[0])) && typeof o.fully_decode_reserved_expansion === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Http.typeUrl || Array.isArray(o.rules) && (!o.rules.length || exports.HttpRule.isAmino(o.rules[0])) && typeof o.fully_decode_reserved_expansion === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rules) {
            exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fullyDecodeReservedExpansion = reader.bool();
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
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.HttpRule.fromJSON(e)) : [],
            fullyDecodeReservedExpansion: (0, helpers_1.isSet)(object.fullyDecodeReservedExpansion) ? Boolean(object.fullyDecodeReservedExpansion) : false
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(e => e ? exports.HttpRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        message.fullyDecodeReservedExpansion !== undefined && (obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHttp();
        message.rules = object.rules?.map(e => exports.HttpRule.fromPartial(e)) || [];
        message.fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.HttpRule.fromSDK(e)) : [],
            fullyDecodeReservedExpansion: object?.fully_decode_reserved_expansion
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(e => e ? exports.HttpRule.toSDK(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        obj.fully_decode_reserved_expansion = message.fullyDecodeReservedExpansion;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseHttp();
        message.rules = object.rules?.map(e => exports.HttpRule.fromAmino(e)) || [];
        if (object.fully_decode_reserved_expansion !== undefined && object.fully_decode_reserved_expansion !== null) {
            message.fullyDecodeReservedExpansion = object.fully_decode_reserved_expansion;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(e => e ? exports.HttpRule.toAmino(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        obj.fully_decode_reserved_expansion = message.fullyDecodeReservedExpansion;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Http.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Http.decode(message.value);
    },
    toProto(message) {
        return exports.Http.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.Http",
            value: exports.Http.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Http.typeUrl, exports.Http);
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        delete: undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        responseBody: "",
        additionalBindings: []
    };
}
exports.HttpRule = {
    typeUrl: "/google.api.HttpRule",
    is(o) {
        return o && (o.$typeUrl === exports.HttpRule.typeUrl || typeof o.selector === "string" && typeof o.body === "string" && typeof o.responseBody === "string" && Array.isArray(o.additionalBindings) && (!o.additionalBindings.length || exports.HttpRule.is(o.additionalBindings[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.HttpRule.typeUrl || typeof o.selector === "string" && typeof o.body === "string" && typeof o.response_body === "string" && Array.isArray(o.additional_bindings) && (!o.additional_bindings.length || exports.HttpRule.isSDK(o.additional_bindings[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.HttpRule.typeUrl || typeof o.selector === "string" && typeof o.body === "string" && typeof o.response_body === "string" && Array.isArray(o.additional_bindings) && (!o.additional_bindings.length || exports.HttpRule.isAmino(o.additional_bindings[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        for (const v of message.additionalBindings) {
            exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttpRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.get = reader.string();
                    break;
                case 3:
                    message.put = reader.string();
                    break;
                case 4:
                    message.post = reader.string();
                    break;
                case 5:
                    message.delete = reader.string();
                    break;
                case 6:
                    message.patch = reader.string();
                    break;
                case 8:
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 12:
                    message.responseBody = reader.string();
                    break;
                case 11:
                    message.additionalBindings.push(exports.HttpRule.decode(reader, reader.uint32()));
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
            selector: (0, helpers_1.isSet)(object.selector) ? String(object.selector) : "",
            get: (0, helpers_1.isSet)(object.get) ? String(object.get) : undefined,
            put: (0, helpers_1.isSet)(object.put) ? String(object.put) : undefined,
            post: (0, helpers_1.isSet)(object.post) ? String(object.post) : undefined,
            delete: (0, helpers_1.isSet)(object.delete) ? String(object.delete) : undefined,
            patch: (0, helpers_1.isSet)(object.patch) ? String(object.patch) : undefined,
            custom: (0, helpers_1.isSet)(object.custom) ? exports.CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: (0, helpers_1.isSet)(object.body) ? String(object.body) : "",
            responseBody: (0, helpers_1.isSet)(object.responseBody) ? String(object.responseBody) : "",
            additionalBindings: Array.isArray(object?.additionalBindings) ? object.additionalBindings.map((e) => exports.HttpRule.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.selector !== undefined && (obj.selector = message.selector);
        message.get !== undefined && (obj.get = message.get);
        message.put !== undefined && (obj.put = message.put);
        message.post !== undefined && (obj.post = message.post);
        message.delete !== undefined && (obj.delete = message.delete);
        message.patch !== undefined && (obj.patch = message.patch);
        message.custom !== undefined && (obj.custom = message.custom ? exports.CustomHttpPattern.toJSON(message.custom) : undefined);
        message.body !== undefined && (obj.body = message.body);
        message.responseBody !== undefined && (obj.responseBody = message.responseBody);
        if (message.additionalBindings) {
            obj.additionalBindings = message.additionalBindings.map(e => e ? exports.HttpRule.toJSON(e) : undefined);
        }
        else {
            obj.additionalBindings = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHttpRule();
        message.selector = object.selector ?? "";
        message.get = object.get ?? undefined;
        message.put = object.put ?? undefined;
        message.post = object.post ?? undefined;
        message.delete = object.delete ?? undefined;
        message.patch = object.patch ?? undefined;
        message.custom = object.custom !== undefined && object.custom !== null ? exports.CustomHttpPattern.fromPartial(object.custom) : undefined;
        message.body = object.body ?? "";
        message.responseBody = object.responseBody ?? "";
        message.additionalBindings = object.additionalBindings?.map(e => exports.HttpRule.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            selector: object?.selector,
            get: object?.get,
            put: object?.put,
            post: object?.post,
            delete: object?.delete,
            patch: object?.patch,
            custom: object.custom ? exports.CustomHttpPattern.fromSDK(object.custom) : undefined,
            body: object?.body,
            responseBody: object?.response_body,
            additionalBindings: Array.isArray(object?.additional_bindings) ? object.additional_bindings.map((e) => exports.HttpRule.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.selector = message.selector;
        obj.get = message.get;
        obj.put = message.put;
        obj.post = message.post;
        obj.delete = message.delete;
        obj.patch = message.patch;
        message.custom !== undefined && (obj.custom = message.custom ? exports.CustomHttpPattern.toSDK(message.custom) : undefined);
        obj.body = message.body;
        obj.response_body = message.responseBody;
        if (message.additionalBindings) {
            obj.additional_bindings = message.additionalBindings.map(e => e ? exports.HttpRule.toSDK(e) : undefined);
        }
        else {
            obj.additional_bindings = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseHttpRule();
        if (object.selector !== undefined && object.selector !== null) {
            message.selector = object.selector;
        }
        if (object.get !== undefined && object.get !== null) {
            message.get = object.get;
        }
        if (object.put !== undefined && object.put !== null) {
            message.put = object.put;
        }
        if (object.post !== undefined && object.post !== null) {
            message.post = object.post;
        }
        if (object.delete !== undefined && object.delete !== null) {
            message.delete = object.delete;
        }
        if (object.patch !== undefined && object.patch !== null) {
            message.patch = object.patch;
        }
        if (object.custom !== undefined && object.custom !== null) {
            message.custom = exports.CustomHttpPattern.fromAmino(object.custom);
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        if (object.response_body !== undefined && object.response_body !== null) {
            message.responseBody = object.response_body;
        }
        message.additionalBindings = object.additional_bindings?.map(e => exports.HttpRule.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.selector = message.selector;
        obj.get = message.get;
        obj.put = message.put;
        obj.post = message.post;
        obj.delete = message.delete;
        obj.patch = message.patch;
        obj.custom = message.custom ? exports.CustomHttpPattern.toAmino(message.custom) : undefined;
        obj.body = message.body;
        obj.response_body = message.responseBody;
        if (message.additionalBindings) {
            obj.additional_bindings = message.additionalBindings.map(e => e ? exports.HttpRule.toAmino(e) : undefined);
        }
        else {
            obj.additional_bindings = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HttpRule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.HttpRule.decode(message.value);
    },
    toProto(message) {
        return exports.HttpRule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.HttpRule",
            value: exports.HttpRule.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.HttpRule.typeUrl, exports.HttpRule);
function createBaseCustomHttpPattern() {
    return {
        kind: "",
        path: ""
    };
}
exports.CustomHttpPattern = {
    typeUrl: "/google.api.CustomHttpPattern",
    is(o) {
        return o && (o.$typeUrl === exports.CustomHttpPattern.typeUrl || typeof o.kind === "string" && typeof o.path === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CustomHttpPattern.typeUrl || typeof o.kind === "string" && typeof o.path === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CustomHttpPattern.typeUrl || typeof o.kind === "string" && typeof o.path === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
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
            kind: (0, helpers_1.isSet)(object.kind) ? String(object.kind) : "",
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined && (obj.kind = message.kind);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCustomHttpPattern();
        message.kind = object.kind ?? "";
        message.path = object.path ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            kind: object?.kind,
            path: object?.path
        };
    },
    toSDK(message) {
        const obj = {};
        obj.kind = message.kind;
        obj.path = message.path;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCustomHttpPattern();
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.kind = message.kind;
        obj.path = message.path;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CustomHttpPattern.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CustomHttpPattern.decode(message.value);
    },
    toProto(message) {
        return exports.CustomHttpPattern.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.CustomHttpPattern",
            value: exports.CustomHttpPattern.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CustomHttpPattern.typeUrl, exports.CustomHttpPattern);
