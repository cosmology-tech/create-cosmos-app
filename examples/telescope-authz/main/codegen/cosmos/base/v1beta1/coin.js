"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.Coin = {
    typeUrl: "/cosmos.base.v1beta1.Coin",
    aminoType: "cosmos-sdk/Coin",
    is(o) {
        return o && (o.$typeUrl === exports.Coin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Coin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Coin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCoin();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Coin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Coin",
            value: exports.Coin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Coin.decode(message.value);
    },
    toProto(message) {
        return exports.Coin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.Coin",
            value: exports.Coin.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Coin.typeUrl, exports.Coin);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Coin.aminoType, exports.Coin.typeUrl);
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.DecCoin = {
    typeUrl: "/cosmos.base.v1beta1.DecCoin",
    aminoType: "cosmos-sdk/DecCoin",
    is(o) {
        return o && (o.$typeUrl === exports.DecCoin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DecCoin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DecCoin.typeUrl || typeof o.denom === "string" && typeof o.amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDecCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDecCoin();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecCoin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecCoin",
            value: exports.DecCoin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecCoin.decode(message.value);
    },
    toProto(message) {
        return exports.DecCoin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecCoin",
            value: exports.DecCoin.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DecCoin.typeUrl, exports.DecCoin);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DecCoin.aminoType, exports.DecCoin.typeUrl);
function createBaseIntProto() {
    return {
        int: ""
    };
}
exports.IntProto = {
    typeUrl: "/cosmos.base.v1beta1.IntProto",
    aminoType: "cosmos-sdk/IntProto",
    is(o) {
        return o && (o.$typeUrl === exports.IntProto.typeUrl || typeof o.int === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.IntProto.typeUrl || typeof o.int === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.IntProto.typeUrl || typeof o.int === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIntProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.int = reader.string();
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
            int: (0, helpers_1.isSet)(object.int) ? String(object.int) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.int !== undefined && (obj.int = message.int);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIntProto();
        message.int = object.int ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            int: object?.int
        };
    },
    toSDK(message) {
        const obj = {};
        obj.int = message.int;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseIntProto();
        if (object.int !== undefined && object.int !== null) {
            message.int = object.int;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.int = message.int;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IntProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IntProto",
            value: exports.IntProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IntProto.decode(message.value);
    },
    toProto(message) {
        return exports.IntProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.IntProto",
            value: exports.IntProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.IntProto.typeUrl, exports.IntProto);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IntProto.aminoType, exports.IntProto.typeUrl);
function createBaseDecProto() {
    return {
        dec: ""
    };
}
exports.DecProto = {
    typeUrl: "/cosmos.base.v1beta1.DecProto",
    aminoType: "cosmos-sdk/DecProto",
    is(o) {
        return o && (o.$typeUrl === exports.DecProto.typeUrl || typeof o.dec === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DecProto.typeUrl || typeof o.dec === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DecProto.typeUrl || typeof o.dec === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.dec !== "") {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dec = reader.string();
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
            dec: (0, helpers_1.isSet)(object.dec) ? String(object.dec) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.dec !== undefined && (obj.dec = message.dec);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDecProto();
        message.dec = object.dec ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            dec: object?.dec
        };
    },
    toSDK(message) {
        const obj = {};
        obj.dec = message.dec;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDecProto();
        if (object.dec !== undefined && object.dec !== null) {
            message.dec = object.dec;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.dec = message.dec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecProto",
            value: exports.DecProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecProto.decode(message.value);
    },
    toProto(message) {
        return exports.DecProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecProto",
            value: exports.DecProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DecProto.typeUrl, exports.DecProto);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DecProto.aminoType, exports.DecProto.typeUrl);
