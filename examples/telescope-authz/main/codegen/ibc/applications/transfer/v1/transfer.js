"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DenomTrace = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseDenomTrace() {
    return {
        path: "",
        baseDenom: ""
    };
}
exports.DenomTrace = {
    typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
    aminoType: "cosmos-sdk/DenomTrace",
    is(o) {
        return o && (o.$typeUrl === exports.DenomTrace.typeUrl || typeof o.path === "string" && typeof o.baseDenom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DenomTrace.typeUrl || typeof o.path === "string" && typeof o.base_denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DenomTrace.typeUrl || typeof o.path === "string" && typeof o.base_denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.baseDenom !== "") {
            writer.uint32(18).string(message.baseDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomTrace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.baseDenom = reader.string();
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
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            baseDenom: (0, helpers_1.isSet)(object.baseDenom) ? String(object.baseDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomTrace();
        message.path = object.path ?? "";
        message.baseDenom = object.baseDenom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            path: object?.path,
            baseDenom: object?.base_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.path = message.path;
        obj.base_denom = message.baseDenom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDenomTrace();
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.base_denom = message.baseDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomTrace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DenomTrace",
            value: exports.DenomTrace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DenomTrace.decode(message.value);
    },
    toProto(message) {
        return exports.DenomTrace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
            value: exports.DenomTrace.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DenomTrace.typeUrl, exports.DenomTrace);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DenomTrace.aminoType, exports.DenomTrace.typeUrl);
function createBaseParams() {
    return {
        sendEnabled: false,
        receiveEnabled: false
    };
}
exports.Params = {
    typeUrl: "/ibc.applications.transfer.v1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.sendEnabled === "boolean" && typeof o.receiveEnabled === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.send_enabled === "boolean" && typeof o.receive_enabled === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.send_enabled === "boolean" && typeof o.receive_enabled === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sendEnabled === true) {
            writer.uint32(8).bool(message.sendEnabled);
        }
        if (message.receiveEnabled === true) {
            writer.uint32(16).bool(message.receiveEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sendEnabled = reader.bool();
                    break;
                case 2:
                    message.receiveEnabled = reader.bool();
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
            sendEnabled: (0, helpers_1.isSet)(object.sendEnabled) ? Boolean(object.sendEnabled) : false,
            receiveEnabled: (0, helpers_1.isSet)(object.receiveEnabled) ? Boolean(object.receiveEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.sendEnabled !== undefined && (obj.sendEnabled = message.sendEnabled);
        message.receiveEnabled !== undefined && (obj.receiveEnabled = message.receiveEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.sendEnabled = object.sendEnabled ?? false;
        message.receiveEnabled = object.receiveEnabled ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            sendEnabled: object?.send_enabled,
            receiveEnabled: object?.receive_enabled
        };
    },
    toSDK(message) {
        const obj = {};
        obj.send_enabled = message.sendEnabled;
        obj.receive_enabled = message.receiveEnabled;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.send_enabled !== undefined && object.send_enabled !== null) {
            message.sendEnabled = object.send_enabled;
        }
        if (object.receive_enabled !== undefined && object.receive_enabled !== null) {
            message.receiveEnabled = object.receive_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.send_enabled = message.sendEnabled;
        obj.receive_enabled = message.receiveEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
