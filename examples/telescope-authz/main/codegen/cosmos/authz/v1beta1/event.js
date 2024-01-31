"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRevoke = exports.EventGrant = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseEventGrant() {
    return {
        msgTypeUrl: "",
        granter: "",
        grantee: ""
    };
}
exports.EventGrant = {
    typeUrl: "/cosmos.authz.v1beta1.EventGrant",
    aminoType: "cosmos-sdk/EventGrant",
    is(o) {
        return o && (o.$typeUrl === exports.EventGrant.typeUrl || typeof o.msgTypeUrl === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventGrant.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventGrant.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
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
            msgTypeUrl: (0, helpers_1.isSet)(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventGrant();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msgTypeUrl: object?.msg_type_url,
            granter: object?.granter,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventGrant();
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
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
        obj.msg_type_url = message.msgTypeUrl;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventGrant",
            value: exports.EventGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventGrant.decode(message.value);
    },
    toProto(message) {
        return exports.EventGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventGrant",
            value: exports.EventGrant.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventGrant.typeUrl, exports.EventGrant);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventGrant.aminoType, exports.EventGrant.typeUrl);
function createBaseEventRevoke() {
    return {
        msgTypeUrl: "",
        granter: "",
        grantee: ""
    };
}
exports.EventRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
    aminoType: "cosmos-sdk/EventRevoke",
    is(o) {
        return o && (o.$typeUrl === exports.EventRevoke.typeUrl || typeof o.msgTypeUrl === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventRevoke.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventRevoke.typeUrl || typeof o.msg_type_url === "string" && typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(18).string(message.msgTypeUrl);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRevoke();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
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
            msgTypeUrl: (0, helpers_1.isSet)(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventRevoke();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msgTypeUrl: object?.msg_type_url,
            granter: object?.granter,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventRevoke();
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
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
        obj.msg_type_url = message.msgTypeUrl;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventRevoke.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventRevoke",
            value: exports.EventRevoke.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventRevoke.decode(message.value);
    },
    toProto(message) {
        return exports.EventRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
            value: exports.EventRevoke.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventRevoke.typeUrl, exports.EventRevoke);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventRevoke.aminoType, exports.EventRevoke.typeUrl);
