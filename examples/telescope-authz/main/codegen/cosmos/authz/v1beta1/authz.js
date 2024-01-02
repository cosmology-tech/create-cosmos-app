"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantQueueItem = exports.GrantAuthorization = exports.Grant = exports.GenericAuthorization = void 0;
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenericAuthorization() {
    return {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        msg: ""
    };
}
exports.GenericAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    aminoType: "cosmos-sdk/GenericAuthorization",
    is(o) {
        return o && (o.$typeUrl === exports.GenericAuthorization.typeUrl || typeof o.msg === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenericAuthorization.typeUrl || typeof o.msg === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenericAuthorization.typeUrl || typeof o.msg === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
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
            msg: (0, helpers_1.isSet)(object.msg) ? String(object.msg) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msg: object?.msg
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg = message.msg;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenericAuthorization();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: exports.GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: exports.GenericAuthorization.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenericAuthorization.typeUrl, exports.GenericAuthorization);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenericAuthorization.aminoType, exports.GenericAuthorization.typeUrl);
function createBaseGrant() {
    return {
        authorization: undefined,
        expiration: undefined
    };
}
exports.Grant = {
    typeUrl: "/cosmos.authz.v1beta1.Grant",
    aminoType: "cosmos-sdk/Grant",
    is(o) {
        return o && o.$typeUrl === exports.Grant.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Grant.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Grant.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authorization !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 2:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            authorization: (0, helpers_1.isSet)(object.authorization) ? registry_1.GlobalDecoderRegistry.fromJSON(object.authorization) : undefined,
            expiration: (0, helpers_1.isSet)(object.expiration) ? new Date(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authorization !== undefined && (obj.authorization = message.authorization ? registry_1.GlobalDecoderRegistry.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = object.authorization !== undefined && object.authorization !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authorization: object.authorization ? registry_1.GlobalDecoderRegistry.fromSDK(object.authorization) : undefined,
            expiration: object.expiration ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.authorization !== undefined && (obj.authorization = message.authorization ? registry_1.GlobalDecoderRegistry.toSDK(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: exports.Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Grant.decode(message.value);
    },
    toProto(message) {
        return exports.Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: exports.Grant.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Grant.typeUrl, exports.Grant);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Grant.aminoType, exports.Grant.typeUrl);
function createBaseGrantAuthorization() {
    return {
        granter: "",
        grantee: "",
        authorization: undefined,
        expiration: undefined
    };
}
exports.GrantAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
    aminoType: "cosmos-sdk/GrantAuthorization",
    is(o) {
        return o && (o.$typeUrl === exports.GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantAuthorization();
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
                    message.authorization = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 4:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            authorization: (0, helpers_1.isSet)(object.authorization) ? registry_1.GlobalDecoderRegistry.fromJSON(object.authorization) : undefined,
            expiration: (0, helpers_1.isSet)(object.expiration) ? new Date(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.authorization !== undefined && (obj.authorization = message.authorization ? registry_1.GlobalDecoderRegistry.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrantAuthorization();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.authorization = object.authorization !== undefined && object.authorization !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            authorization: object.authorization ? registry_1.GlobalDecoderRegistry.fromSDK(object.authorization) : undefined,
            expiration: object.expiration ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        message.authorization !== undefined && (obj.authorization = message.authorization ? registry_1.GlobalDecoderRegistry.toSDK(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGrantAuthorization();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.authorization = message.authorization ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantAuthorization",
            value: exports.GrantAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GrantAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.GrantAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
            value: exports.GrantAuthorization.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GrantAuthorization.typeUrl, exports.GrantAuthorization);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GrantAuthorization.aminoType, exports.GrantAuthorization.typeUrl);
function createBaseGrantQueueItem() {
    return {
        msgTypeUrls: []
    };
}
exports.GrantQueueItem = {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
    aminoType: "cosmos-sdk/GrantQueueItem",
    is(o) {
        return o && (o.$typeUrl === exports.GrantQueueItem.typeUrl || Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.msgTypeUrls) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantQueueItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgTypeUrls.push(reader.string());
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
            msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.msgTypeUrls) {
            obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
        }
        else {
            obj.msgTypeUrls = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrantQueueItem();
        message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.msgTypeUrls) {
            obj.msg_type_urls = message.msgTypeUrls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGrantQueueItem();
        message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.msgTypeUrls) {
            obj.msg_type_urls = message.msgTypeUrls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantQueueItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantQueueItem",
            value: exports.GrantQueueItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GrantQueueItem.decode(message.value);
    },
    toProto(message) {
        return exports.GrantQueueItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
            value: exports.GrantQueueItem.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GrantQueueItem.typeUrl, exports.GrantQueueItem);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GrantQueueItem.aminoType, exports.GrantQueueItem.typeUrl);
