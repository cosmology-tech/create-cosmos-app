"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIP44Params = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseBIP44Params() {
    return {
        purpose: 0,
        coinType: 0,
        account: 0,
        change: false,
        addressIndex: 0
    };
}
exports.BIP44Params = {
    typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
    aminoType: "cosmos-sdk/BIP44Params",
    is(o) {
        return o && (o.$typeUrl === exports.BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coinType === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.addressIndex === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.purpose !== 0) {
            writer.uint32(8).uint32(message.purpose);
        }
        if (message.coinType !== 0) {
            writer.uint32(16).uint32(message.coinType);
        }
        if (message.account !== 0) {
            writer.uint32(24).uint32(message.account);
        }
        if (message.change === true) {
            writer.uint32(32).bool(message.change);
        }
        if (message.addressIndex !== 0) {
            writer.uint32(40).uint32(message.addressIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBIP44Params();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purpose = reader.uint32();
                    break;
                case 2:
                    message.coinType = reader.uint32();
                    break;
                case 3:
                    message.account = reader.uint32();
                    break;
                case 4:
                    message.change = reader.bool();
                    break;
                case 5:
                    message.addressIndex = reader.uint32();
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
            purpose: (0, helpers_1.isSet)(object.purpose) ? Number(object.purpose) : 0,
            coinType: (0, helpers_1.isSet)(object.coinType) ? Number(object.coinType) : 0,
            account: (0, helpers_1.isSet)(object.account) ? Number(object.account) : 0,
            change: (0, helpers_1.isSet)(object.change) ? Boolean(object.change) : false,
            addressIndex: (0, helpers_1.isSet)(object.addressIndex) ? Number(object.addressIndex) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.purpose !== undefined && (obj.purpose = Math.round(message.purpose));
        message.coinType !== undefined && (obj.coinType = Math.round(message.coinType));
        message.account !== undefined && (obj.account = Math.round(message.account));
        message.change !== undefined && (obj.change = message.change);
        message.addressIndex !== undefined && (obj.addressIndex = Math.round(message.addressIndex));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBIP44Params();
        message.purpose = object.purpose ?? 0;
        message.coinType = object.coinType ?? 0;
        message.account = object.account ?? 0;
        message.change = object.change ?? false;
        message.addressIndex = object.addressIndex ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            purpose: object?.purpose,
            coinType: object?.coin_type,
            account: object?.account,
            change: object?.change,
            addressIndex: object?.address_index
        };
    },
    toSDK(message) {
        const obj = {};
        obj.purpose = message.purpose;
        obj.coin_type = message.coinType;
        obj.account = message.account;
        obj.change = message.change;
        obj.address_index = message.addressIndex;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBIP44Params();
        if (object.purpose !== undefined && object.purpose !== null) {
            message.purpose = object.purpose;
        }
        if (object.coin_type !== undefined && object.coin_type !== null) {
            message.coinType = object.coin_type;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.change !== undefined && object.change !== null) {
            message.change = object.change;
        }
        if (object.address_index !== undefined && object.address_index !== null) {
            message.addressIndex = object.address_index;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.purpose = message.purpose;
        obj.coin_type = message.coinType;
        obj.account = message.account;
        obj.change = message.change;
        obj.address_index = message.addressIndex;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BIP44Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BIP44Params",
            value: exports.BIP44Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BIP44Params.decode(message.value);
    },
    toProto(message) {
        return exports.BIP44Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
            value: exports.BIP44Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BIP44Params.typeUrl, exports.BIP44Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BIP44Params.aminoType, exports.BIP44Params.typeUrl);
