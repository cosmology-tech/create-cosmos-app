"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleConfig = exports.Config = void 0;
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseConfig() {
    return {
        modules: []
    };
}
exports.Config = {
    typeUrl: "/cosmos.app.v1alpha1.Config",
    aminoType: "cosmos-sdk/Config",
    is(o) {
        return o && (o.$typeUrl === exports.Config.typeUrl || Array.isArray(o.modules) && (!o.modules.length || exports.ModuleConfig.is(o.modules[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Config.typeUrl || Array.isArray(o.modules) && (!o.modules.length || exports.ModuleConfig.isSDK(o.modules[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Config.typeUrl || Array.isArray(o.modules) && (!o.modules.length || exports.ModuleConfig.isAmino(o.modules[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.modules) {
            exports.ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modules.push(exports.ModuleConfig.decode(reader, reader.uint32()));
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
            modules: Array.isArray(object?.modules) ? object.modules.map((e) => exports.ModuleConfig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(e => e ? exports.ModuleConfig.toJSON(e) : undefined);
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfig();
        message.modules = object.modules?.map(e => exports.ModuleConfig.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            modules: Array.isArray(object?.modules) ? object.modules.map((e) => exports.ModuleConfig.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(e => e ? exports.ModuleConfig.toSDK(e) : undefined);
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConfig();
        message.modules = object.modules?.map(e => exports.ModuleConfig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(e => e ? exports.ModuleConfig.toAmino(e) : undefined);
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Config.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Config",
            value: exports.Config.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Config.decode(message.value);
    },
    toProto(message) {
        return exports.Config.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.Config",
            value: exports.Config.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Config.typeUrl, exports.Config);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Config.aminoType, exports.Config.typeUrl);
function createBaseModuleConfig() {
    return {
        name: "",
        config: undefined
    };
}
exports.ModuleConfig = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
    aminoType: "cosmos-sdk/ModuleConfig",
    is(o) {
        return o && (o.$typeUrl === exports.ModuleConfig.typeUrl || typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleConfig.typeUrl || typeof o.name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleConfig.typeUrl || typeof o.name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.config !== undefined) {
            any_1.Any.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.config = any_1.Any.decode(reader, reader.uint32());
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            config: (0, helpers_1.isSet)(object.config) ? any_1.Any.fromJSON(object.config) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.config !== undefined && (obj.config = message.config ? any_1.Any.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleConfig();
        message.name = object.name ?? "";
        message.config = object.config !== undefined && object.config !== null ? any_1.Any.fromPartial(object.config) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            config: object.config ? any_1.Any.fromSDK(object.config) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        message.config !== undefined && (obj.config = message.config ? any_1.Any.toSDK(message.config) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModuleConfig();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = any_1.Any.fromAmino(object.config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.config = message.config ? any_1.Any.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleConfig",
            value: exports.ModuleConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleConfig.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
            value: exports.ModuleConfig.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleConfig.typeUrl, exports.ModuleConfig);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleConfig.aminoType, exports.ModuleConfig.typeUrl);
