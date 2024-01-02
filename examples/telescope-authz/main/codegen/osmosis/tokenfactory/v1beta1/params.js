"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        denomCreationFee: []
    };
}
exports.Params = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
    aminoType: "osmosis/tokenfactory/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.denomCreationFee) && (!o.denomCreationFee.length || coin_1.Coin.is(o.denomCreationFee[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.denom_creation_fee) && (!o.denom_creation_fee.length || coin_1.Coin.isSDK(o.denom_creation_fee[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.denom_creation_fee) && (!o.denom_creation_fee.length || coin_1.Coin.isAmino(o.denom_creation_fee[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denomCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.denomCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            denomCreationFee: Array.isArray(object?.denomCreationFee) ? object.denomCreationFee.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denomCreationFee = message.denomCreationFee.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.denomCreationFee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denomCreationFee = object.denomCreationFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            denomCreationFee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denom_creation_fee = message.denomCreationFee.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.denomCreationFee = object.denom_creation_fee?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denom_creation_fee = message.denomCreationFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/params",
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
            typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
