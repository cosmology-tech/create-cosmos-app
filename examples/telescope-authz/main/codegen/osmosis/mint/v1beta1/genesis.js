"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const mint_1 = require("./mint");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        minter: mint_1.Minter.fromPartial({}),
        params: mint_1.Params.fromPartial({}),
        reductionStartedEpoch: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.mint.v1beta1.GenesisState",
    aminoType: "osmosis/mint/genesis-state",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || mint_1.Minter.is(o.minter) && mint_1.Params.is(o.params) && typeof o.reductionStartedEpoch === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || mint_1.Minter.isSDK(o.minter) && mint_1.Params.isSDK(o.params) && typeof o.reduction_started_epoch === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || mint_1.Minter.isAmino(o.minter) && mint_1.Params.isAmino(o.params) && typeof o.reduction_started_epoch === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minter !== undefined) {
            mint_1.Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            mint_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        if (message.reductionStartedEpoch !== BigInt(0)) {
            writer.uint32(24).int64(message.reductionStartedEpoch);
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
                case 1:
                    message.minter = mint_1.Minter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = mint_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reductionStartedEpoch = reader.int64();
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
            minter: (0, helpers_1.isSet)(object.minter) ? mint_1.Minter.fromJSON(object.minter) : undefined,
            params: (0, helpers_1.isSet)(object.params) ? mint_1.Params.fromJSON(object.params) : undefined,
            reductionStartedEpoch: (0, helpers_1.isSet)(object.reductionStartedEpoch) ? BigInt(object.reductionStartedEpoch.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.minter !== undefined && (obj.minter = message.minter ? mint_1.Minter.toJSON(message.minter) : undefined);
        message.params !== undefined && (obj.params = message.params ? mint_1.Params.toJSON(message.params) : undefined);
        message.reductionStartedEpoch !== undefined && (obj.reductionStartedEpoch = (message.reductionStartedEpoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.minter = object.minter !== undefined && object.minter !== null ? mint_1.Minter.fromPartial(object.minter) : undefined;
        message.params = object.params !== undefined && object.params !== null ? mint_1.Params.fromPartial(object.params) : undefined;
        message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? BigInt(object.reductionStartedEpoch.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            minter: object.minter ? mint_1.Minter.fromSDK(object.minter) : undefined,
            params: object.params ? mint_1.Params.fromSDK(object.params) : undefined,
            reductionStartedEpoch: object?.reduction_started_epoch
        };
    },
    toSDK(message) {
        const obj = {};
        message.minter !== undefined && (obj.minter = message.minter ? mint_1.Minter.toSDK(message.minter) : undefined);
        message.params !== undefined && (obj.params = message.params ? mint_1.Params.toSDK(message.params) : undefined);
        obj.reduction_started_epoch = message.reductionStartedEpoch;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.minter !== undefined && object.minter !== null) {
            message.minter = mint_1.Minter.fromAmino(object.minter);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = mint_1.Params.fromAmino(object.params);
        }
        if (object.reduction_started_epoch !== undefined && object.reduction_started_epoch !== null) {
            message.reductionStartedEpoch = BigInt(object.reduction_started_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minter = message.minter ? mint_1.Minter.toAmino(message.minter) : undefined;
        obj.params = message.params ? mint_1.Params.toAmino(message.params) : undefined;
        obj.reduction_started_epoch = message.reductionStartedEpoch ? message.reductionStartedEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/genesis-state",
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
            typeUrl: "/osmosis.mint.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
