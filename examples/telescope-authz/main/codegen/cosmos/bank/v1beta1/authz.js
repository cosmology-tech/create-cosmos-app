"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAuthorization = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseSendAuthorization() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        spendLimit: []
    };
}
exports.SendAuthorization = {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    aminoType: "cosmos-sdk/SendAuthorization",
    is(o) {
        return o && (o.$typeUrl === exports.SendAuthorization.typeUrl || Array.isArray(o.spendLimit) && (!o.spendLimit.length || coin_1.Coin.is(o.spendLimit[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SendAuthorization.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || coin_1.Coin.isSDK(o.spend_limit[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SendAuthorization.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || coin_1.Coin.isAmino(o.spend_limit[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.spendLimit = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSendAuthorization();
        message.spendLimit = object.spendLimit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            spendLimit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSendAuthorization();
        message.spendLimit = object.spend_limit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SendAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendAuthorization",
            value: exports.SendAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SendAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.SendAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
            value: exports.SendAuthorization.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SendAuthorization.typeUrl, exports.SendAuthorization);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SendAuthorization.aminoType, exports.SendAuthorization.typeUrl);
