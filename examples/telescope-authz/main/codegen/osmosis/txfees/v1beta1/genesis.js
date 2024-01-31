"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        basedenom: "",
        feetokens: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
    aminoType: "osmosis/txfees/genesis-state",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.basedenom === "string" && Array.isArray(o.feetokens) && (!o.feetokens.length || feetoken_1.FeeToken.is(o.feetokens[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.basedenom === "string" && Array.isArray(o.feetokens) && (!o.feetokens.length || feetoken_1.FeeToken.isSDK(o.feetokens[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.basedenom === "string" && Array.isArray(o.feetokens) && (!o.feetokens.length || feetoken_1.FeeToken.isAmino(o.feetokens[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basedenom !== "") {
            writer.uint32(10).string(message.basedenom);
        }
        for (const v of message.feetokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.basedenom = reader.string();
                    break;
                case 2:
                    message.feetokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
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
            basedenom: (0, helpers_1.isSet)(object.basedenom) ? String(object.basedenom) : "",
            feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e) => feetoken_1.FeeToken.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.basedenom !== undefined && (obj.basedenom = message.basedenom);
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? feetoken_1.FeeToken.toJSON(e) : undefined);
        }
        else {
            obj.feetokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.basedenom = object.basedenom ?? "";
        message.feetokens = object.feetokens?.map(e => feetoken_1.FeeToken.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            basedenom: object?.basedenom,
            feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e) => feetoken_1.FeeToken.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.basedenom = message.basedenom;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? feetoken_1.FeeToken.toSDK(e) : undefined);
        }
        else {
            obj.feetokens = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.basedenom !== undefined && object.basedenom !== null) {
            message.basedenom = object.basedenom;
        }
        message.feetokens = object.feetokens?.map(e => feetoken_1.FeeToken.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basedenom = message.basedenom;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? feetoken_1.FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.feetokens = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/genesis-state",
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
            typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
