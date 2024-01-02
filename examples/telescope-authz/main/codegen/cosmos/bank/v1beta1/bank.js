"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.DenomUnit = exports.Supply = exports.Output = exports.Input = exports.SendEnabled = exports.Params = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        sendEnabled: [],
        defaultSendEnabled: false
    };
}
exports.Params = {
    typeUrl: "/cosmos.bank.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.sendEnabled) && (!o.sendEnabled.length || exports.SendEnabled.is(o.sendEnabled[0])) && typeof o.defaultSendEnabled === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.send_enabled) && (!o.send_enabled.length || exports.SendEnabled.isSDK(o.send_enabled[0])) && typeof o.default_send_enabled === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.send_enabled) && (!o.send_enabled.length || exports.SendEnabled.isAmino(o.send_enabled[0])) && typeof o.default_send_enabled === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.sendEnabled) {
            exports.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultSendEnabled === true) {
            writer.uint32(16).bool(message.defaultSendEnabled);
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
                    message.sendEnabled.push(exports.SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.defaultSendEnabled = reader.bool();
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
            sendEnabled: Array.isArray(object?.sendEnabled) ? object.sendEnabled.map((e) => exports.SendEnabled.fromJSON(e)) : [],
            defaultSendEnabled: (0, helpers_1.isSet)(object.defaultSendEnabled) ? Boolean(object.defaultSendEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sendEnabled) {
            obj.sendEnabled = message.sendEnabled.map(e => e ? exports.SendEnabled.toJSON(e) : undefined);
        }
        else {
            obj.sendEnabled = [];
        }
        message.defaultSendEnabled !== undefined && (obj.defaultSendEnabled = message.defaultSendEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.sendEnabled = object.sendEnabled?.map(e => exports.SendEnabled.fromPartial(e)) || [];
        message.defaultSendEnabled = object.defaultSendEnabled ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            sendEnabled: Array.isArray(object?.send_enabled) ? object.send_enabled.map((e) => exports.SendEnabled.fromSDK(e)) : [],
            defaultSendEnabled: object?.default_send_enabled
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.sendEnabled) {
            obj.send_enabled = message.sendEnabled.map(e => e ? exports.SendEnabled.toSDK(e) : undefined);
        }
        else {
            obj.send_enabled = [];
        }
        obj.default_send_enabled = message.defaultSendEnabled;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.sendEnabled = object.send_enabled?.map(e => exports.SendEnabled.fromAmino(e)) || [];
        if (object.default_send_enabled !== undefined && object.default_send_enabled !== null) {
            message.defaultSendEnabled = object.default_send_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sendEnabled) {
            obj.send_enabled = message.sendEnabled.map(e => e ? exports.SendEnabled.toAmino(e) : undefined);
        }
        else {
            obj.send_enabled = [];
        }
        obj.default_send_enabled = message.defaultSendEnabled;
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
            typeUrl: "/cosmos.bank.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseSendEnabled() {
    return {
        denom: "",
        enabled: false
    };
}
exports.SendEnabled = {
    typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
    aminoType: "cosmos-sdk/SendEnabled",
    is(o) {
        return o && (o.$typeUrl === exports.SendEnabled.typeUrl || typeof o.denom === "string" && typeof o.enabled === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SendEnabled.typeUrl || typeof o.denom === "string" && typeof o.enabled === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SendEnabled.typeUrl || typeof o.denom === "string" && typeof o.enabled === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEnabled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            enabled: (0, helpers_1.isSet)(object.enabled) ? Boolean(object.enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSendEnabled();
        message.denom = object.denom ?? "";
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            enabled: object?.enabled
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.enabled = message.enabled;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSendEnabled();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.enabled = message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SendEnabled.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendEnabled",
            value: exports.SendEnabled.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SendEnabled.decode(message.value);
    },
    toProto(message) {
        return exports.SendEnabled.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
            value: exports.SendEnabled.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SendEnabled.typeUrl, exports.SendEnabled);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SendEnabled.aminoType, exports.SendEnabled.typeUrl);
function createBaseInput() {
    return {
        address: "",
        coins: []
    };
}
exports.Input = {
    typeUrl: "/cosmos.bank.v1beta1.Input",
    aminoType: "cosmos-sdk/Input",
    is(o) {
        return o && (o.$typeUrl === exports.Input.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Input.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Input.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseInput();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Input.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Input",
            value: exports.Input.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Input.decode(message.value);
    },
    toProto(message) {
        return exports.Input.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Input",
            value: exports.Input.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Input.typeUrl, exports.Input);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Input.aminoType, exports.Input.typeUrl);
function createBaseOutput() {
    return {
        address: "",
        coins: []
    };
}
exports.Output = {
    typeUrl: "/cosmos.bank.v1beta1.Output",
    aminoType: "cosmos-sdk/Output",
    is(o) {
        return o && (o.$typeUrl === exports.Output.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Output.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Output.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOutput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseOutput();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Output.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Output",
            value: exports.Output.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Output.decode(message.value);
    },
    toProto(message) {
        return exports.Output.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Output",
            value: exports.Output.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Output.typeUrl, exports.Output);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Output.aminoType, exports.Output.typeUrl);
function createBaseSupply() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.Supply",
        total: []
    };
}
exports.Supply = {
    typeUrl: "/cosmos.bank.v1beta1.Supply",
    aminoType: "cosmos-sdk/Supply",
    is(o) {
        return o && (o.$typeUrl === exports.Supply.typeUrl || Array.isArray(o.total) && (!o.total.length || coin_1.Coin.is(o.total[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Supply.typeUrl || Array.isArray(o.total) && (!o.total.length || coin_1.Coin.isSDK(o.total[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Supply.typeUrl || Array.isArray(o.total) && (!o.total.length || coin_1.Coin.isAmino(o.total[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.total) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSupply();
        message.total = object.total?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSupply();
        message.total = object.total?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Supply.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Supply",
            value: exports.Supply.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Supply.decode(message.value);
    },
    toProto(message) {
        return exports.Supply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Supply",
            value: exports.Supply.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Supply.typeUrl, exports.Supply);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Supply.aminoType, exports.Supply.typeUrl);
function createBaseDenomUnit() {
    return {
        denom: "",
        exponent: 0,
        aliases: []
    };
}
exports.DenomUnit = {
    typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
    aminoType: "cosmos-sdk/DenomUnit",
    is(o) {
        return o && (o.$typeUrl === exports.DenomUnit.typeUrl || typeof o.denom === "string" && typeof o.exponent === "number" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DenomUnit.typeUrl || typeof o.denom === "string" && typeof o.exponent === "number" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DenomUnit.typeUrl || typeof o.denom === "string" && typeof o.exponent === "number" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (const v of message.aliases) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomUnit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            exponent: (0, helpers_1.isSet)(object.exponent) ? Number(object.exponent) : 0,
            aliases: Array.isArray(object?.aliases) ? object.aliases.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
        if (message.aliases) {
            obj.aliases = message.aliases.map(e => e);
        }
        else {
            obj.aliases = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomUnit();
        message.denom = object.denom ?? "";
        message.exponent = object.exponent ?? 0;
        message.aliases = object.aliases?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            exponent: object?.exponent,
            aliases: Array.isArray(object?.aliases) ? object.aliases.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.exponent = message.exponent;
        if (message.aliases) {
            obj.aliases = message.aliases.map(e => e);
        }
        else {
            obj.aliases = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDenomUnit();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        message.aliases = object.aliases?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.exponent = message.exponent;
        if (message.aliases) {
            obj.aliases = message.aliases.map(e => e);
        }
        else {
            obj.aliases = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomUnit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DenomUnit",
            value: exports.DenomUnit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DenomUnit.decode(message.value);
    },
    toProto(message) {
        return exports.DenomUnit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
            value: exports.DenomUnit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DenomUnit.typeUrl, exports.DenomUnit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DenomUnit.aminoType, exports.DenomUnit.typeUrl);
function createBaseMetadata() {
    return {
        description: "",
        denomUnits: [],
        base: "",
        display: "",
        name: "",
        symbol: "",
        uri: "",
        uriHash: ""
    };
}
exports.Metadata = {
    typeUrl: "/cosmos.bank.v1beta1.Metadata",
    aminoType: "cosmos-sdk/Metadata",
    is(o) {
        return o && (o.$typeUrl === exports.Metadata.typeUrl || typeof o.description === "string" && Array.isArray(o.denomUnits) && (!o.denomUnits.length || exports.DenomUnit.is(o.denomUnits[0])) && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uriHash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Metadata.typeUrl || typeof o.description === "string" && Array.isArray(o.denom_units) && (!o.denom_units.length || exports.DenomUnit.isSDK(o.denom_units[0])) && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Metadata.typeUrl || typeof o.description === "string" && Array.isArray(o.denom_units) && (!o.denom_units.length || exports.DenomUnit.isAmino(o.denom_units[0])) && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        for (const v of message.denomUnits) {
            exports.DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(66).string(message.uriHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denomUnits.push(exports.DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.uri = reader.string();
                    break;
                case 8:
                    message.uriHash = reader.string();
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
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            denomUnits: Array.isArray(object?.denomUnits) ? object.denomUnits.map((e) => exports.DenomUnit.fromJSON(e)) : [],
            base: (0, helpers_1.isSet)(object.base) ? String(object.base) : "",
            display: (0, helpers_1.isSet)(object.display) ? String(object.display) : "",
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            symbol: (0, helpers_1.isSet)(object.symbol) ? String(object.symbol) : "",
            uri: (0, helpers_1.isSet)(object.uri) ? String(object.uri) : "",
            uriHash: (0, helpers_1.isSet)(object.uriHash) ? String(object.uriHash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description);
        if (message.denomUnits) {
            obj.denomUnits = message.denomUnits.map(e => e ? exports.DenomUnit.toJSON(e) : undefined);
        }
        else {
            obj.denomUnits = [];
        }
        message.base !== undefined && (obj.base = message.base);
        message.display !== undefined && (obj.display = message.display);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.description = object.description ?? "";
        message.denomUnits = object.denomUnits?.map(e => exports.DenomUnit.fromPartial(e)) || [];
        message.base = object.base ?? "";
        message.display = object.display ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            description: object?.description,
            denomUnits: Array.isArray(object?.denom_units) ? object.denom_units.map((e) => exports.DenomUnit.fromSDK(e)) : [],
            base: object?.base,
            display: object?.display,
            name: object?.name,
            symbol: object?.symbol,
            uri: object?.uri,
            uriHash: object?.uri_hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.description = message.description;
        if (message.denomUnits) {
            obj.denom_units = message.denomUnits.map(e => e ? exports.DenomUnit.toSDK(e) : undefined);
        }
        else {
            obj.denom_units = [];
        }
        obj.base = message.base;
        obj.display = message.display;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.uri = message.uri;
        obj.uri_hash = message.uriHash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMetadata();
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.denomUnits = object.denom_units?.map(e => exports.DenomUnit.fromAmino(e)) || [];
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.display !== undefined && object.display !== null) {
            message.display = object.display;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description;
        if (message.denomUnits) {
            obj.denom_units = message.denomUnits.map(e => e ? exports.DenomUnit.toAmino(e) : undefined);
        }
        else {
            obj.denom_units = [];
        }
        obj.base = message.base;
        obj.display = message.display;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.uri = message.uri;
        obj.uri_hash = message.uriHash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: exports.Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Metadata.decode(message.value);
    },
    toProto(message) {
        return exports.Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Metadata",
            value: exports.Metadata.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Metadata.typeUrl, exports.Metadata);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Metadata.aminoType, exports.Metadata.typeUrl);
