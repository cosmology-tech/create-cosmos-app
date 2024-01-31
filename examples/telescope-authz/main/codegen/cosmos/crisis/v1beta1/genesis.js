"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        constantFee: coin_1.Coin.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || coin_1.Coin.is(o.constantFee));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || coin_1.Coin.isSDK(o.constant_fee));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || coin_1.Coin.isAmino(o.constant_fee));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.constantFee !== undefined) {
            coin_1.Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.constantFee = coin_1.Coin.decode(reader, reader.uint32());
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
            constantFee: (0, helpers_1.isSet)(object.constantFee) ? coin_1.Coin.fromJSON(object.constantFee) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.constantFee !== undefined && (obj.constantFee = message.constantFee ? coin_1.Coin.toJSON(message.constantFee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? coin_1.Coin.fromPartial(object.constantFee) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            constantFee: object.constant_fee ? coin_1.Coin.fromSDK(object.constant_fee) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.constantFee !== undefined && (obj.constant_fee = message.constantFee ? coin_1.Coin.toSDK(message.constantFee) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.constant_fee !== undefined && object.constant_fee !== null) {
            message.constantFee = coin_1.Coin.fromAmino(object.constant_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.constant_fee = message.constantFee ? coin_1.Coin.toAmino(message.constantFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
