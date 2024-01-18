"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMethodDescriptor = exports.QueryServiceDescriptor = exports.QueryServicesDescriptor = exports.GetTxDescriptorResponse = exports.GetTxDescriptorRequest = exports.GetQueryServicesDescriptorResponse = exports.GetQueryServicesDescriptorRequest = exports.GetConfigurationDescriptorResponse = exports.GetConfigurationDescriptorRequest = exports.GetCodecDescriptorResponse = exports.GetCodecDescriptorRequest = exports.GetChainDescriptorResponse = exports.GetChainDescriptorRequest = exports.GetAuthnDescriptorResponse = exports.GetAuthnDescriptorRequest = exports.MsgDescriptor = exports.ConfigurationDescriptor = exports.InterfaceAcceptingMessageDescriptor = exports.InterfaceImplementerDescriptor = exports.InterfaceDescriptor = exports.CodecDescriptor = exports.ChainDescriptor = exports.SigningModeDescriptor = exports.AuthnDescriptor = exports.TxDescriptor = exports.AppDescriptor = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseAppDescriptor() {
    return {
        authn: undefined,
        chain: undefined,
        codec: undefined,
        configuration: undefined,
        queryServices: undefined,
        tx: undefined
    };
}
exports.AppDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
    aminoType: "cosmos-sdk/AppDescriptor",
    is(o) {
        return o && o.$typeUrl === exports.AppDescriptor.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.AppDescriptor.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.AppDescriptor.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
        }
        if (message.configuration !== undefined) {
            exports.ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.queryServices !== undefined) {
            exports.QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
        }
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configuration = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.queryServices = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
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
            authn: (0, helpers_1.isSet)(object.authn) ? exports.AuthnDescriptor.fromJSON(object.authn) : undefined,
            chain: (0, helpers_1.isSet)(object.chain) ? exports.ChainDescriptor.fromJSON(object.chain) : undefined,
            codec: (0, helpers_1.isSet)(object.codec) ? exports.CodecDescriptor.fromJSON(object.codec) : undefined,
            configuration: (0, helpers_1.isSet)(object.configuration) ? exports.ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
            queryServices: (0, helpers_1.isSet)(object.queryServices) ? exports.QueryServicesDescriptor.fromJSON(object.queryServices) : undefined,
            tx: (0, helpers_1.isSet)(object.tx) ? exports.TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toJSON(message.authn) : undefined);
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toJSON(message.chain) : undefined);
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toJSON(message.codec) : undefined);
        message.configuration !== undefined && (obj.configuration = message.configuration ? exports.ConfigurationDescriptor.toJSON(message.configuration) : undefined);
        message.queryServices !== undefined && (obj.queryServices = message.queryServices ? exports.QueryServicesDescriptor.toJSON(message.queryServices) : undefined);
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppDescriptor();
        message.authn = object.authn !== undefined && object.authn !== null ? exports.AuthnDescriptor.fromPartial(object.authn) : undefined;
        message.chain = object.chain !== undefined && object.chain !== null ? exports.ChainDescriptor.fromPartial(object.chain) : undefined;
        message.codec = object.codec !== undefined && object.codec !== null ? exports.CodecDescriptor.fromPartial(object.codec) : undefined;
        message.configuration = object.configuration !== undefined && object.configuration !== null ? exports.ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
        message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? exports.QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
        message.tx = object.tx !== undefined && object.tx !== null ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authn: object.authn ? exports.AuthnDescriptor.fromSDK(object.authn) : undefined,
            chain: object.chain ? exports.ChainDescriptor.fromSDK(object.chain) : undefined,
            codec: object.codec ? exports.CodecDescriptor.fromSDK(object.codec) : undefined,
            configuration: object.configuration ? exports.ConfigurationDescriptor.fromSDK(object.configuration) : undefined,
            queryServices: object.query_services ? exports.QueryServicesDescriptor.fromSDK(object.query_services) : undefined,
            tx: object.tx ? exports.TxDescriptor.fromSDK(object.tx) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toSDK(message.authn) : undefined);
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toSDK(message.chain) : undefined);
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toSDK(message.codec) : undefined);
        message.configuration !== undefined && (obj.configuration = message.configuration ? exports.ConfigurationDescriptor.toSDK(message.configuration) : undefined);
        message.queryServices !== undefined && (obj.query_services = message.queryServices ? exports.QueryServicesDescriptor.toSDK(message.queryServices) : undefined);
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toSDK(message.tx) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAppDescriptor();
        if (object.authn !== undefined && object.authn !== null) {
            message.authn = exports.AuthnDescriptor.fromAmino(object.authn);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = exports.ChainDescriptor.fromAmino(object.chain);
        }
        if (object.codec !== undefined && object.codec !== null) {
            message.codec = exports.CodecDescriptor.fromAmino(object.codec);
        }
        if (object.configuration !== undefined && object.configuration !== null) {
            message.configuration = exports.ConfigurationDescriptor.fromAmino(object.configuration);
        }
        if (object.query_services !== undefined && object.query_services !== null) {
            message.queryServices = exports.QueryServicesDescriptor.fromAmino(object.query_services);
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = exports.TxDescriptor.fromAmino(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? exports.AuthnDescriptor.toAmino(message.authn) : undefined;
        obj.chain = message.chain ? exports.ChainDescriptor.toAmino(message.chain) : undefined;
        obj.codec = message.codec ? exports.CodecDescriptor.toAmino(message.codec) : undefined;
        obj.configuration = message.configuration ? exports.ConfigurationDescriptor.toAmino(message.configuration) : undefined;
        obj.query_services = message.queryServices ? exports.QueryServicesDescriptor.toAmino(message.queryServices) : undefined;
        obj.tx = message.tx ? exports.TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AppDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AppDescriptor",
            value: exports.AppDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AppDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.AppDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
            value: exports.AppDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AppDescriptor.typeUrl, exports.AppDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AppDescriptor.aminoType, exports.AppDescriptor.typeUrl);
function createBaseTxDescriptor() {
    return {
        fullname: "",
        msgs: []
    };
}
exports.TxDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
    aminoType: "cosmos-sdk/TxDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.TxDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.msgs) && (!o.msgs.length || exports.MsgDescriptor.is(o.msgs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.msgs) && (!o.msgs.length || exports.MsgDescriptor.isSDK(o.msgs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.msgs) && (!o.msgs.length || exports.MsgDescriptor.isAmino(o.msgs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.msgs) {
            exports.MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.msgs.push(exports.MsgDescriptor.decode(reader, reader.uint32()));
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => exports.MsgDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? exports.MsgDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxDescriptor();
        message.fullname = object.fullname ?? "";
        message.msgs = object.msgs?.map(e => exports.MsgDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            fullname: object?.fullname,
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => exports.MsgDescriptor.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? exports.MsgDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTxDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        message.msgs = object.msgs?.map(e => exports.MsgDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? exports.MsgDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDescriptor",
            value: exports.TxDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.TxDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
            value: exports.TxDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxDescriptor.typeUrl, exports.TxDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TxDescriptor.aminoType, exports.TxDescriptor.typeUrl);
function createBaseAuthnDescriptor() {
    return {
        signModes: []
    };
}
exports.AuthnDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
    aminoType: "cosmos-sdk/AuthnDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.AuthnDescriptor.typeUrl || Array.isArray(o.signModes) && (!o.signModes.length || exports.SigningModeDescriptor.is(o.signModes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AuthnDescriptor.typeUrl || Array.isArray(o.sign_modes) && (!o.sign_modes.length || exports.SigningModeDescriptor.isSDK(o.sign_modes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AuthnDescriptor.typeUrl || Array.isArray(o.sign_modes) && (!o.sign_modes.length || exports.SigningModeDescriptor.isAmino(o.sign_modes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signModes) {
            exports.SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthnDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signModes.push(exports.SigningModeDescriptor.decode(reader, reader.uint32()));
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
            signModes: Array.isArray(object?.signModes) ? object.signModes.map((e) => exports.SigningModeDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signModes) {
            obj.signModes = message.signModes.map(e => e ? exports.SigningModeDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.signModes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuthnDescriptor();
        message.signModes = object.signModes?.map(e => exports.SigningModeDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            signModes: Array.isArray(object?.sign_modes) ? object.sign_modes.map((e) => exports.SigningModeDescriptor.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.signModes) {
            obj.sign_modes = message.signModes.map(e => e ? exports.SigningModeDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.sign_modes = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAuthnDescriptor();
        message.signModes = object.sign_modes?.map(e => exports.SigningModeDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signModes) {
            obj.sign_modes = message.signModes.map(e => e ? exports.SigningModeDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.sign_modes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuthnDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthnDescriptor",
            value: exports.AuthnDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuthnDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.AuthnDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
            value: exports.AuthnDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AuthnDescriptor.typeUrl, exports.AuthnDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AuthnDescriptor.aminoType, exports.AuthnDescriptor.typeUrl);
function createBaseSigningModeDescriptor() {
    return {
        name: "",
        number: 0,
        authnInfoProviderMethodFullname: ""
    };
}
exports.SigningModeDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
    aminoType: "cosmos-sdk/SigningModeDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.SigningModeDescriptor.typeUrl || typeof o.name === "string" && typeof o.number === "number" && typeof o.authnInfoProviderMethodFullname === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SigningModeDescriptor.typeUrl || typeof o.name === "string" && typeof o.number === "number" && typeof o.authn_info_provider_method_fullname === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SigningModeDescriptor.typeUrl || typeof o.name === "string" && typeof o.number === "number" && typeof o.authn_info_provider_method_fullname === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.authnInfoProviderMethodFullname !== "") {
            writer.uint32(26).string(message.authnInfoProviderMethodFullname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningModeDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.authnInfoProviderMethodFullname = reader.string();
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
            number: (0, helpers_1.isSet)(object.number) ? Number(object.number) : 0,
            authnInfoProviderMethodFullname: (0, helpers_1.isSet)(object.authnInfoProviderMethodFullname) ? String(object.authnInfoProviderMethodFullname) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.authnInfoProviderMethodFullname !== undefined && (obj.authnInfoProviderMethodFullname = message.authnInfoProviderMethodFullname);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningModeDescriptor();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            number: object?.number,
            authnInfoProviderMethodFullname: object?.authn_info_provider_method_fullname
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.number = message.number;
        obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSigningModeDescriptor();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        if (object.authn_info_provider_method_fullname !== undefined && object.authn_info_provider_method_fullname !== null) {
            message.authnInfoProviderMethodFullname = object.authn_info_provider_method_fullname;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.number = message.number;
        obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SigningModeDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningModeDescriptor",
            value: exports.SigningModeDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SigningModeDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.SigningModeDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
            value: exports.SigningModeDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SigningModeDescriptor.typeUrl, exports.SigningModeDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SigningModeDescriptor.aminoType, exports.SigningModeDescriptor.typeUrl);
function createBaseChainDescriptor() {
    return {
        id: ""
    };
}
exports.ChainDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
    aminoType: "cosmos-sdk/ChainDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.ChainDescriptor.typeUrl || typeof o.id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ChainDescriptor.typeUrl || typeof o.id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ChainDescriptor.typeUrl || typeof o.id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChainDescriptor();
        message.id = object.id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseChainDescriptor();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ChainDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChainDescriptor",
            value: exports.ChainDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ChainDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ChainDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
            value: exports.ChainDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ChainDescriptor.typeUrl, exports.ChainDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ChainDescriptor.aminoType, exports.ChainDescriptor.typeUrl);
function createBaseCodecDescriptor() {
    return {
        interfaces: []
    };
}
exports.CodecDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
    aminoType: "cosmos-sdk/CodecDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.CodecDescriptor.typeUrl || Array.isArray(o.interfaces) && (!o.interfaces.length || exports.InterfaceDescriptor.is(o.interfaces[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CodecDescriptor.typeUrl || Array.isArray(o.interfaces) && (!o.interfaces.length || exports.InterfaceDescriptor.isSDK(o.interfaces[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CodecDescriptor.typeUrl || Array.isArray(o.interfaces) && (!o.interfaces.length || exports.InterfaceDescriptor.isAmino(o.interfaces[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.interfaces) {
            exports.InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodecDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaces.push(exports.InterfaceDescriptor.decode(reader, reader.uint32()));
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
            interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e) => exports.InterfaceDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? exports.InterfaceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCodecDescriptor();
        message.interfaces = object.interfaces?.map(e => exports.InterfaceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e) => exports.InterfaceDescriptor.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? exports.InterfaceDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCodecDescriptor();
        message.interfaces = object.interfaces?.map(e => exports.InterfaceDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? exports.InterfaceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CodecDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CodecDescriptor",
            value: exports.CodecDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CodecDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.CodecDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
            value: exports.CodecDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CodecDescriptor.typeUrl, exports.CodecDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CodecDescriptor.aminoType, exports.CodecDescriptor.typeUrl);
function createBaseInterfaceDescriptor() {
    return {
        fullname: "",
        interfaceAcceptingMessages: [],
        interfaceImplementers: []
    };
}
exports.InterfaceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
    aminoType: "cosmos-sdk/InterfaceDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.InterfaceDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.interfaceAcceptingMessages) && (!o.interfaceAcceptingMessages.length || exports.InterfaceAcceptingMessageDescriptor.is(o.interfaceAcceptingMessages[0])) && Array.isArray(o.interfaceImplementers) && (!o.interfaceImplementers.length || exports.InterfaceImplementerDescriptor.is(o.interfaceImplementers[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.InterfaceDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.interface_accepting_messages) && (!o.interface_accepting_messages.length || exports.InterfaceAcceptingMessageDescriptor.isSDK(o.interface_accepting_messages[0])) && Array.isArray(o.interface_implementers) && (!o.interface_implementers.length || exports.InterfaceImplementerDescriptor.isSDK(o.interface_implementers[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InterfaceDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.interface_accepting_messages) && (!o.interface_accepting_messages.length || exports.InterfaceAcceptingMessageDescriptor.isAmino(o.interface_accepting_messages[0])) && Array.isArray(o.interface_implementers) && (!o.interface_implementers.length || exports.InterfaceImplementerDescriptor.isAmino(o.interface_implementers[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.interfaceAcceptingMessages) {
            exports.InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.interfaceImplementers) {
            exports.InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.interfaceAcceptingMessages.push(exports.InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.interfaceImplementers.push(exports.InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            interfaceAcceptingMessages: Array.isArray(object?.interfaceAcceptingMessages) ? object.interfaceAcceptingMessages.map((e) => exports.InterfaceAcceptingMessageDescriptor.fromJSON(e)) : [],
            interfaceImplementers: Array.isArray(object?.interfaceImplementers) ? object.interfaceImplementers.map((e) => exports.InterfaceImplementerDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.interfaceAcceptingMessages) {
            obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map(e => e ? exports.InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaceAcceptingMessages = [];
        }
        if (message.interfaceImplementers) {
            obj.interfaceImplementers = message.interfaceImplementers.map(e => e ? exports.InterfaceImplementerDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaceImplementers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceDescriptor();
        message.fullname = object.fullname ?? "";
        message.interfaceAcceptingMessages = object.interfaceAcceptingMessages?.map(e => exports.InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
        message.interfaceImplementers = object.interfaceImplementers?.map(e => exports.InterfaceImplementerDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            fullname: object?.fullname,
            interfaceAcceptingMessages: Array.isArray(object?.interface_accepting_messages) ? object.interface_accepting_messages.map((e) => exports.InterfaceAcceptingMessageDescriptor.fromSDK(e)) : [],
            interfaceImplementers: Array.isArray(object?.interface_implementers) ? object.interface_implementers.map((e) => exports.InterfaceImplementerDescriptor.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.interfaceAcceptingMessages) {
            obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? exports.InterfaceAcceptingMessageDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.interface_accepting_messages = [];
        }
        if (message.interfaceImplementers) {
            obj.interface_implementers = message.interfaceImplementers.map(e => e ? exports.InterfaceImplementerDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.interface_implementers = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseInterfaceDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        message.interfaceAcceptingMessages = object.interface_accepting_messages?.map(e => exports.InterfaceAcceptingMessageDescriptor.fromAmino(e)) || [];
        message.interfaceImplementers = object.interface_implementers?.map(e => exports.InterfaceImplementerDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.interfaceAcceptingMessages) {
            obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? exports.InterfaceAcceptingMessageDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_accepting_messages = [];
        }
        if (message.interfaceImplementers) {
            obj.interface_implementers = message.interfaceImplementers.map(e => e ? exports.InterfaceImplementerDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_implementers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterfaceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceDescriptor",
            value: exports.InterfaceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterfaceDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.InterfaceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
            value: exports.InterfaceDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InterfaceDescriptor.typeUrl, exports.InterfaceDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InterfaceDescriptor.aminoType, exports.InterfaceDescriptor.typeUrl);
function createBaseInterfaceImplementerDescriptor() {
    return {
        fullname: "",
        typeUrl: ""
    };
}
exports.InterfaceImplementerDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
    aminoType: "cosmos-sdk/InterfaceImplementerDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.InterfaceImplementerDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.typeUrl === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.InterfaceImplementerDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.type_url === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InterfaceImplementerDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.type_url === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.typeUrl !== "") {
            writer.uint32(18).string(message.typeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceImplementerDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.typeUrl = reader.string();
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            typeUrl: (0, helpers_1.isSet)(object.typeUrl) ? String(object.typeUrl) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceImplementerDescriptor();
        message.fullname = object.fullname ?? "";
        message.typeUrl = object.typeUrl ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            fullname: object?.fullname,
            typeUrl: object?.type_url
        };
    },
    toSDK(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.type_url = message.typeUrl;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseInterfaceImplementerDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        if (object.type_url !== undefined && object.type_url !== null) {
            message.typeUrl = object.type_url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.type_url = message.typeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterfaceImplementerDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceImplementerDescriptor",
            value: exports.InterfaceImplementerDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterfaceImplementerDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.InterfaceImplementerDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
            value: exports.InterfaceImplementerDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InterfaceImplementerDescriptor.typeUrl, exports.InterfaceImplementerDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InterfaceImplementerDescriptor.aminoType, exports.InterfaceImplementerDescriptor.typeUrl);
function createBaseInterfaceAcceptingMessageDescriptor() {
    return {
        fullname: "",
        fieldDescriptorNames: []
    };
}
exports.InterfaceAcceptingMessageDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
    aminoType: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.InterfaceAcceptingMessageDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.fieldDescriptorNames) && (!o.fieldDescriptorNames.length || typeof o.fieldDescriptorNames[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.InterfaceAcceptingMessageDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.field_descriptor_names) && (!o.field_descriptor_names.length || typeof o.field_descriptor_names[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InterfaceAcceptingMessageDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.field_descriptor_names) && (!o.field_descriptor_names.length || typeof o.field_descriptor_names[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.fieldDescriptorNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.fieldDescriptorNames.push(reader.string());
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            fieldDescriptorNames: Array.isArray(object?.fieldDescriptorNames) ? object.fieldDescriptorNames.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.fieldDescriptorNames) {
            obj.fieldDescriptorNames = message.fieldDescriptorNames.map(e => e);
        }
        else {
            obj.fieldDescriptorNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        message.fullname = object.fullname ?? "";
        message.fieldDescriptorNames = object.fieldDescriptorNames?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            fullname: object?.fullname,
            fieldDescriptorNames: Array.isArray(object?.field_descriptor_names) ? object.field_descriptor_names.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.fieldDescriptorNames) {
            obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
        }
        else {
            obj.field_descriptor_names = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        message.fieldDescriptorNames = object.field_descriptor_names?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.fieldDescriptorNames) {
            obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
        }
        else {
            obj.field_descriptor_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
            value: exports.InterfaceAcceptingMessageDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterfaceAcceptingMessageDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.InterfaceAcceptingMessageDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
            value: exports.InterfaceAcceptingMessageDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InterfaceAcceptingMessageDescriptor.typeUrl, exports.InterfaceAcceptingMessageDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InterfaceAcceptingMessageDescriptor.aminoType, exports.InterfaceAcceptingMessageDescriptor.typeUrl);
function createBaseConfigurationDescriptor() {
    return {
        bech32AccountAddressPrefix: ""
    };
}
exports.ConfigurationDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
    aminoType: "cosmos-sdk/ConfigurationDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.ConfigurationDescriptor.typeUrl || typeof o.bech32AccountAddressPrefix === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ConfigurationDescriptor.typeUrl || typeof o.bech32_account_address_prefix === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ConfigurationDescriptor.typeUrl || typeof o.bech32_account_address_prefix === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bech32AccountAddressPrefix !== "") {
            writer.uint32(10).string(message.bech32AccountAddressPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32AccountAddressPrefix = reader.string();
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
            bech32AccountAddressPrefix: (0, helpers_1.isSet)(object.bech32AccountAddressPrefix) ? String(object.bech32AccountAddressPrefix) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.bech32AccountAddressPrefix !== undefined && (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfigurationDescriptor();
        message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            bech32AccountAddressPrefix: object?.bech32_account_address_prefix
        };
    },
    toSDK(message) {
        const obj = {};
        obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConfigurationDescriptor();
        if (object.bech32_account_address_prefix !== undefined && object.bech32_account_address_prefix !== null) {
            message.bech32AccountAddressPrefix = object.bech32_account_address_prefix;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConfigurationDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigurationDescriptor",
            value: exports.ConfigurationDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigurationDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigurationDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
            value: exports.ConfigurationDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConfigurationDescriptor.typeUrl, exports.ConfigurationDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConfigurationDescriptor.aminoType, exports.ConfigurationDescriptor.typeUrl);
function createBaseMsgDescriptor() {
    return {
        msgTypeUrl: ""
    };
}
exports.MsgDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
    aminoType: "cosmos-sdk/MsgDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.MsgDescriptor.typeUrl || typeof o.msgTypeUrl === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgDescriptor.typeUrl || typeof o.msg_type_url === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgDescriptor.typeUrl || typeof o.msg_type_url === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(10).string(message.msgTypeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            msgTypeUrl: (0, helpers_1.isSet)(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDescriptor();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msgTypeUrl: object?.msg_type_url
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgDescriptor();
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDescriptor",
            value: exports.MsgDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
            value: exports.MsgDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDescriptor.typeUrl, exports.MsgDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDescriptor.aminoType, exports.MsgDescriptor.typeUrl);
function createBaseGetAuthnDescriptorRequest() {
    return {};
}
exports.GetAuthnDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
    aminoType: "cosmos-sdk/GetAuthnDescriptorRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetAuthnDescriptorRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetAuthnDescriptorRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetAuthnDescriptorRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorRequest();
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
        const message = createBaseGetAuthnDescriptorRequest();
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
        const message = createBaseGetAuthnDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetAuthnDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorRequest",
            value: exports.GetAuthnDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetAuthnDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetAuthnDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
            value: exports.GetAuthnDescriptorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetAuthnDescriptorRequest.typeUrl, exports.GetAuthnDescriptorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetAuthnDescriptorRequest.aminoType, exports.GetAuthnDescriptorRequest.typeUrl);
function createBaseGetAuthnDescriptorResponse() {
    return {
        authn: undefined
    };
}
exports.GetAuthnDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
    aminoType: "cosmos-sdk/GetAuthnDescriptorResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetAuthnDescriptorResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetAuthnDescriptorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetAuthnDescriptorResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
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
            authn: (0, helpers_1.isSet)(object.authn) ? exports.AuthnDescriptor.fromJSON(object.authn) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toJSON(message.authn) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthnDescriptorResponse();
        message.authn = object.authn !== undefined && object.authn !== null ? exports.AuthnDescriptor.fromPartial(object.authn) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authn: object.authn ? exports.AuthnDescriptor.fromSDK(object.authn) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toSDK(message.authn) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetAuthnDescriptorResponse();
        if (object.authn !== undefined && object.authn !== null) {
            message.authn = exports.AuthnDescriptor.fromAmino(object.authn);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? exports.AuthnDescriptor.toAmino(message.authn) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetAuthnDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorResponse",
            value: exports.GetAuthnDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetAuthnDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetAuthnDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
            value: exports.GetAuthnDescriptorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetAuthnDescriptorResponse.typeUrl, exports.GetAuthnDescriptorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetAuthnDescriptorResponse.aminoType, exports.GetAuthnDescriptorResponse.typeUrl);
function createBaseGetChainDescriptorRequest() {
    return {};
}
exports.GetChainDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
    aminoType: "cosmos-sdk/GetChainDescriptorRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetChainDescriptorRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetChainDescriptorRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetChainDescriptorRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorRequest();
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
        const message = createBaseGetChainDescriptorRequest();
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
        const message = createBaseGetChainDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetChainDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorRequest",
            value: exports.GetChainDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetChainDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetChainDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
            value: exports.GetChainDescriptorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetChainDescriptorRequest.typeUrl, exports.GetChainDescriptorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetChainDescriptorRequest.aminoType, exports.GetChainDescriptorRequest.typeUrl);
function createBaseGetChainDescriptorResponse() {
    return {
        chain: undefined
    };
}
exports.GetChainDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
    aminoType: "cosmos-sdk/GetChainDescriptorResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetChainDescriptorResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetChainDescriptorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetChainDescriptorResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
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
            chain: (0, helpers_1.isSet)(object.chain) ? exports.ChainDescriptor.fromJSON(object.chain) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toJSON(message.chain) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetChainDescriptorResponse();
        message.chain = object.chain !== undefined && object.chain !== null ? exports.ChainDescriptor.fromPartial(object.chain) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            chain: object.chain ? exports.ChainDescriptor.fromSDK(object.chain) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toSDK(message.chain) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetChainDescriptorResponse();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = exports.ChainDescriptor.fromAmino(object.chain);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain ? exports.ChainDescriptor.toAmino(message.chain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetChainDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorResponse",
            value: exports.GetChainDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetChainDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetChainDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
            value: exports.GetChainDescriptorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetChainDescriptorResponse.typeUrl, exports.GetChainDescriptorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetChainDescriptorResponse.aminoType, exports.GetChainDescriptorResponse.typeUrl);
function createBaseGetCodecDescriptorRequest() {
    return {};
}
exports.GetCodecDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
    aminoType: "cosmos-sdk/GetCodecDescriptorRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetCodecDescriptorRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetCodecDescriptorRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetCodecDescriptorRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorRequest();
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
        const message = createBaseGetCodecDescriptorRequest();
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
        const message = createBaseGetCodecDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetCodecDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorRequest",
            value: exports.GetCodecDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetCodecDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetCodecDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
            value: exports.GetCodecDescriptorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetCodecDescriptorRequest.typeUrl, exports.GetCodecDescriptorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetCodecDescriptorRequest.aminoType, exports.GetCodecDescriptorRequest.typeUrl);
function createBaseGetCodecDescriptorResponse() {
    return {
        codec: undefined
    };
}
exports.GetCodecDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
    aminoType: "cosmos-sdk/GetCodecDescriptorResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetCodecDescriptorResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetCodecDescriptorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetCodecDescriptorResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
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
            codec: (0, helpers_1.isSet)(object.codec) ? exports.CodecDescriptor.fromJSON(object.codec) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toJSON(message.codec) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetCodecDescriptorResponse();
        message.codec = object.codec !== undefined && object.codec !== null ? exports.CodecDescriptor.fromPartial(object.codec) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            codec: object.codec ? exports.CodecDescriptor.fromSDK(object.codec) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toSDK(message.codec) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetCodecDescriptorResponse();
        if (object.codec !== undefined && object.codec !== null) {
            message.codec = exports.CodecDescriptor.fromAmino(object.codec);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.codec = message.codec ? exports.CodecDescriptor.toAmino(message.codec) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetCodecDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorResponse",
            value: exports.GetCodecDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetCodecDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetCodecDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
            value: exports.GetCodecDescriptorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetCodecDescriptorResponse.typeUrl, exports.GetCodecDescriptorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetCodecDescriptorResponse.aminoType, exports.GetCodecDescriptorResponse.typeUrl);
function createBaseGetConfigurationDescriptorRequest() {
    return {};
}
exports.GetConfigurationDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
    aminoType: "cosmos-sdk/GetConfigurationDescriptorRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetConfigurationDescriptorRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetConfigurationDescriptorRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetConfigurationDescriptorRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorRequest();
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
        const message = createBaseGetConfigurationDescriptorRequest();
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
        const message = createBaseGetConfigurationDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetConfigurationDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorRequest",
            value: exports.GetConfigurationDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetConfigurationDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetConfigurationDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
            value: exports.GetConfigurationDescriptorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetConfigurationDescriptorRequest.typeUrl, exports.GetConfigurationDescriptorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetConfigurationDescriptorRequest.aminoType, exports.GetConfigurationDescriptorRequest.typeUrl);
function createBaseGetConfigurationDescriptorResponse() {
    return {
        config: undefined
    };
}
exports.GetConfigurationDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
    aminoType: "cosmos-sdk/GetConfigurationDescriptorResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetConfigurationDescriptorResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetConfigurationDescriptorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetConfigurationDescriptorResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.config !== undefined) {
            exports.ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
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
            config: (0, helpers_1.isSet)(object.config) ? exports.ConfigurationDescriptor.fromJSON(object.config) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? exports.ConfigurationDescriptor.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetConfigurationDescriptorResponse();
        message.config = object.config !== undefined && object.config !== null ? exports.ConfigurationDescriptor.fromPartial(object.config) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            config: object.config ? exports.ConfigurationDescriptor.fromSDK(object.config) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? exports.ConfigurationDescriptor.toSDK(message.config) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetConfigurationDescriptorResponse();
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.ConfigurationDescriptor.fromAmino(object.config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.config = message.config ? exports.ConfigurationDescriptor.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetConfigurationDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorResponse",
            value: exports.GetConfigurationDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetConfigurationDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetConfigurationDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
            value: exports.GetConfigurationDescriptorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetConfigurationDescriptorResponse.typeUrl, exports.GetConfigurationDescriptorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetConfigurationDescriptorResponse.aminoType, exports.GetConfigurationDescriptorResponse.typeUrl);
function createBaseGetQueryServicesDescriptorRequest() {
    return {};
}
exports.GetQueryServicesDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
    aminoType: "cosmos-sdk/GetQueryServicesDescriptorRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetQueryServicesDescriptorRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetQueryServicesDescriptorRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetQueryServicesDescriptorRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorRequest();
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
        const message = createBaseGetQueryServicesDescriptorRequest();
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
        const message = createBaseGetQueryServicesDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetQueryServicesDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
            value: exports.GetQueryServicesDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetQueryServicesDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetQueryServicesDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
            value: exports.GetQueryServicesDescriptorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetQueryServicesDescriptorRequest.typeUrl, exports.GetQueryServicesDescriptorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetQueryServicesDescriptorRequest.aminoType, exports.GetQueryServicesDescriptorRequest.typeUrl);
function createBaseGetQueryServicesDescriptorResponse() {
    return {
        queries: undefined
    };
}
exports.GetQueryServicesDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
    aminoType: "cosmos-sdk/GetQueryServicesDescriptorResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetQueryServicesDescriptorResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetQueryServicesDescriptorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetQueryServicesDescriptorResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.queries !== undefined) {
            exports.QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
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
            queries: (0, helpers_1.isSet)(object.queries) ? exports.QueryServicesDescriptor.fromJSON(object.queries) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.queries !== undefined && (obj.queries = message.queries ? exports.QueryServicesDescriptor.toJSON(message.queries) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetQueryServicesDescriptorResponse();
        message.queries = object.queries !== undefined && object.queries !== null ? exports.QueryServicesDescriptor.fromPartial(object.queries) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            queries: object.queries ? exports.QueryServicesDescriptor.fromSDK(object.queries) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.queries !== undefined && (obj.queries = message.queries ? exports.QueryServicesDescriptor.toSDK(message.queries) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetQueryServicesDescriptorResponse();
        if (object.queries !== undefined && object.queries !== null) {
            message.queries = exports.QueryServicesDescriptor.fromAmino(object.queries);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.queries = message.queries ? exports.QueryServicesDescriptor.toAmino(message.queries) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetQueryServicesDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
            value: exports.GetQueryServicesDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetQueryServicesDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetQueryServicesDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
            value: exports.GetQueryServicesDescriptorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetQueryServicesDescriptorResponse.typeUrl, exports.GetQueryServicesDescriptorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetQueryServicesDescriptorResponse.aminoType, exports.GetQueryServicesDescriptorResponse.typeUrl);
function createBaseGetTxDescriptorRequest() {
    return {};
}
exports.GetTxDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
    aminoType: "cosmos-sdk/GetTxDescriptorRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetTxDescriptorRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetTxDescriptorRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetTxDescriptorRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorRequest();
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
        const message = createBaseGetTxDescriptorRequest();
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
        const message = createBaseGetTxDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorRequest",
            value: exports.GetTxDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
            value: exports.GetTxDescriptorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetTxDescriptorRequest.typeUrl, exports.GetTxDescriptorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTxDescriptorRequest.aminoType, exports.GetTxDescriptorRequest.typeUrl);
function createBaseGetTxDescriptorResponse() {
    return {
        tx: undefined
    };
}
exports.GetTxDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
    aminoType: "cosmos-sdk/GetTxDescriptorResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetTxDescriptorResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetTxDescriptorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetTxDescriptorResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
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
            tx: (0, helpers_1.isSet)(object.tx) ? exports.TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxDescriptorResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            tx: object.tx ? exports.TxDescriptor.fromSDK(object.tx) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toSDK(message.tx) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetTxDescriptorResponse();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = exports.TxDescriptor.fromAmino(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? exports.TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorResponse",
            value: exports.GetTxDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
            value: exports.GetTxDescriptorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetTxDescriptorResponse.typeUrl, exports.GetTxDescriptorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTxDescriptorResponse.aminoType, exports.GetTxDescriptorResponse.typeUrl);
function createBaseQueryServicesDescriptor() {
    return {
        queryServices: []
    };
}
exports.QueryServicesDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
    aminoType: "cosmos-sdk/QueryServicesDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.QueryServicesDescriptor.typeUrl || Array.isArray(o.queryServices) && (!o.queryServices.length || exports.QueryServiceDescriptor.is(o.queryServices[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryServicesDescriptor.typeUrl || Array.isArray(o.query_services) && (!o.query_services.length || exports.QueryServiceDescriptor.isSDK(o.query_services[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryServicesDescriptor.typeUrl || Array.isArray(o.query_services) && (!o.query_services.length || exports.QueryServiceDescriptor.isAmino(o.query_services[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.queryServices) {
            exports.QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServicesDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryServices.push(exports.QueryServiceDescriptor.decode(reader, reader.uint32()));
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
            queryServices: Array.isArray(object?.queryServices) ? object.queryServices.map((e) => exports.QueryServiceDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.queryServices) {
            obj.queryServices = message.queryServices.map(e => e ? exports.QueryServiceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.queryServices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryServicesDescriptor();
        message.queryServices = object.queryServices?.map(e => exports.QueryServiceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            queryServices: Array.isArray(object?.query_services) ? object.query_services.map((e) => exports.QueryServiceDescriptor.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.queryServices) {
            obj.query_services = message.queryServices.map(e => e ? exports.QueryServiceDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.query_services = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryServicesDescriptor();
        message.queryServices = object.query_services?.map(e => exports.QueryServiceDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.queryServices) {
            obj.query_services = message.queryServices.map(e => e ? exports.QueryServiceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.query_services = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryServicesDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServicesDescriptor",
            value: exports.QueryServicesDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryServicesDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.QueryServicesDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
            value: exports.QueryServicesDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryServicesDescriptor.typeUrl, exports.QueryServicesDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryServicesDescriptor.aminoType, exports.QueryServicesDescriptor.typeUrl);
function createBaseQueryServiceDescriptor() {
    return {
        fullname: "",
        isModule: false,
        methods: []
    };
}
exports.QueryServiceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
    aminoType: "cosmos-sdk/QueryServiceDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.QueryServiceDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.isModule === "boolean" && Array.isArray(o.methods) && (!o.methods.length || exports.QueryMethodDescriptor.is(o.methods[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryServiceDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.is_module === "boolean" && Array.isArray(o.methods) && (!o.methods.length || exports.QueryMethodDescriptor.isSDK(o.methods[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryServiceDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.is_module === "boolean" && Array.isArray(o.methods) && (!o.methods.length || exports.QueryMethodDescriptor.isAmino(o.methods[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.isModule === true) {
            writer.uint32(16).bool(message.isModule);
        }
        for (const v of message.methods) {
            exports.QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServiceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.isModule = reader.bool();
                    break;
                case 3:
                    message.methods.push(exports.QueryMethodDescriptor.decode(reader, reader.uint32()));
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            isModule: (0, helpers_1.isSet)(object.isModule) ? Boolean(object.isModule) : false,
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => exports.QueryMethodDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.isModule !== undefined && (obj.isModule = message.isModule);
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? exports.QueryMethodDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryServiceDescriptor();
        message.fullname = object.fullname ?? "";
        message.isModule = object.isModule ?? false;
        message.methods = object.methods?.map(e => exports.QueryMethodDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            fullname: object?.fullname,
            isModule: object?.is_module,
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => exports.QueryMethodDescriptor.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.is_module = message.isModule;
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? exports.QueryMethodDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryServiceDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        if (object.is_module !== undefined && object.is_module !== null) {
            message.isModule = object.is_module;
        }
        message.methods = object.methods?.map(e => exports.QueryMethodDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.is_module = message.isModule;
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? exports.QueryMethodDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryServiceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServiceDescriptor",
            value: exports.QueryServiceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryServiceDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.QueryServiceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
            value: exports.QueryServiceDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryServiceDescriptor.typeUrl, exports.QueryServiceDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryServiceDescriptor.aminoType, exports.QueryServiceDescriptor.typeUrl);
function createBaseQueryMethodDescriptor() {
    return {
        name: "",
        fullQueryPath: ""
    };
}
exports.QueryMethodDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
    aminoType: "cosmos-sdk/QueryMethodDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.QueryMethodDescriptor.typeUrl || typeof o.name === "string" && typeof o.fullQueryPath === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryMethodDescriptor.typeUrl || typeof o.name === "string" && typeof o.full_query_path === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryMethodDescriptor.typeUrl || typeof o.name === "string" && typeof o.full_query_path === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.fullQueryPath !== "") {
            writer.uint32(18).string(message.fullQueryPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMethodDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.fullQueryPath = reader.string();
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
            fullQueryPath: (0, helpers_1.isSet)(object.fullQueryPath) ? String(object.fullQueryPath) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.fullQueryPath !== undefined && (obj.fullQueryPath = message.fullQueryPath);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMethodDescriptor();
        message.name = object.name ?? "";
        message.fullQueryPath = object.fullQueryPath ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            fullQueryPath: object?.full_query_path
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.full_query_path = message.fullQueryPath;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryMethodDescriptor();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.full_query_path !== undefined && object.full_query_path !== null) {
            message.fullQueryPath = object.full_query_path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.full_query_path = message.fullQueryPath;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMethodDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryMethodDescriptor",
            value: exports.QueryMethodDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryMethodDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMethodDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
            value: exports.QueryMethodDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryMethodDescriptor.typeUrl, exports.QueryMethodDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryMethodDescriptor.aminoType, exports.QueryMethodDescriptor.typeUrl);
