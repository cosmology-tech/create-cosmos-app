"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRevokeResponse = exports.MsgRevoke = exports.MsgGrantResponse = exports.MsgExec = exports.MsgExecResponse = exports.MsgGrant = void 0;
const authz_1 = require("./authz");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgGrant() {
    return {
        granter: "",
        grantee: "",
        grant: authz_1.Grant.fromPartial({})
    };
}
exports.MsgGrant = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    aminoType: "cosmos-sdk/MsgGrant",
    is(o) {
        return o && (o.$typeUrl === exports.MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && authz_1.Grant.is(o.grant));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && authz_1.Grant.isSDK(o.grant));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && authz_1.Grant.isAmino(o.grant));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.grant !== undefined) {
            authz_1.Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrant();
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
                    message.grant = authz_1.Grant.decode(reader, reader.uint32());
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
            grant: (0, helpers_1.isSet)(object.grant) ? authz_1.Grant.fromJSON(object.grant) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.grant !== undefined && (obj.grant = message.grant ? authz_1.Grant.toJSON(message.grant) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.grant = object.grant !== undefined && object.grant !== null ? authz_1.Grant.fromPartial(object.grant) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            grant: object.grant ? authz_1.Grant.fromSDK(object.grant) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        message.grant !== undefined && (obj.grant = message.grant ? authz_1.Grant.toSDK(message.grant) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgGrant();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.grant !== undefined && object.grant !== null) {
            message.grant = authz_1.Grant.fromAmino(object.grant);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.grant = message.grant ? authz_1.Grant.toAmino(message.grant) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrant",
            value: exports.MsgGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrant.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
            value: exports.MsgGrant.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgGrant.typeUrl, exports.MsgGrant);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgGrant.aminoType, exports.MsgGrant.typeUrl);
function createBaseMsgExecResponse() {
    return {
        results: []
    };
}
exports.MsgExecResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
    aminoType: "cosmos-sdk/MsgExecResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.results) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(reader.bytes());
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
            results: Array.isArray(object?.results) ? object.results.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExecResponse();
        message.results = object.results?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            results: Array.isArray(object?.results) ? object.results.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => e);
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExecResponse();
        message.results = object.results?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExecResponse",
            value: exports.MsgExecResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
            value: exports.MsgExecResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExecResponse.typeUrl, exports.MsgExecResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExecResponse.aminoType, exports.MsgExecResponse.typeUrl);
function createBaseMsgExec() {
    return {
        grantee: "",
        msgs: []
    };
}
exports.MsgExec = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    aminoType: "cosmos-sdk/MsgExec",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || any_1.Any.is(o.msgs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || any_1.Any.isSDK(o.msgs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || any_1.Any.isAmino(o.msgs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        for (const v of message.msgs) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
                    message.msgs.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
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
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => registry_1.GlobalDecoderRegistry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? registry_1.GlobalDecoderRegistry.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.grantee = object.grantee ?? "";
        message.msgs = object.msgs?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            grantee: object?.grantee,
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => registry_1.GlobalDecoderRegistry.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.grantee = message.grantee;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? registry_1.GlobalDecoderRegistry.toSDK(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        message.msgs = object.msgs?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExec",
            value: exports.MsgExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExec.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExec",
            value: exports.MsgExec.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExec.typeUrl, exports.MsgExec);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExec.aminoType, exports.MsgExec.typeUrl);
function createBaseMsgGrantResponse() {
    return {};
}
exports.MsgGrantResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
    aminoType: "cosmos-sdk/MsgGrantResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgGrantResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgGrantResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgGrantResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantResponse();
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
        const message = createBaseMsgGrantResponse();
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
        const message = createBaseMsgGrantResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantResponse",
            value: exports.MsgGrantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
            value: exports.MsgGrantResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgGrantResponse.typeUrl, exports.MsgGrantResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgGrantResponse.aminoType, exports.MsgGrantResponse.typeUrl);
function createBaseMsgRevoke() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: ""
    };
}
exports.MsgRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    aminoType: "cosmos-sdk/MsgRevoke",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevoke();
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
            msgTypeUrl: (0, helpers_1.isSet)(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRevoke();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            msgTypeUrl: object?.msg_type_url
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.msg_type_url = message.msgTypeUrl;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgRevoke();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.msg_type_url = message.msgTypeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevoke.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevoke",
            value: exports.MsgRevoke.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevoke.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
            value: exports.MsgRevoke.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRevoke.typeUrl, exports.MsgRevoke);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRevoke.aminoType, exports.MsgRevoke.typeUrl);
function createBaseMsgRevokeResponse() {
    return {};
}
exports.MsgRevokeResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
    aminoType: "cosmos-sdk/MsgRevokeResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgRevokeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgRevokeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgRevokeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeResponse();
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
        const message = createBaseMsgRevokeResponse();
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
        const message = createBaseMsgRevokeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeResponse",
            value: exports.MsgRevokeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
            value: exports.MsgRevokeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRevokeResponse.typeUrl, exports.MsgRevokeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRevokeResponse.aminoType, exports.MsgRevokeResponse.typeUrl);
