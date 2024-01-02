"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeToken = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseFeeToken() {
    return {
        denom: "",
        poolID: BigInt(0)
    };
}
exports.FeeToken = {
    typeUrl: "/osmosis.txfees.v1beta1.FeeToken",
    aminoType: "osmosis/txfees/fee-token",
    is(o) {
        return o && (o.$typeUrl === exports.FeeToken.typeUrl || typeof o.denom === "string" && typeof o.poolID === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FeeToken.typeUrl || typeof o.denom === "string" && typeof o.poolID === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FeeToken.typeUrl || typeof o.denom === "string" && typeof o.poolID === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.poolID !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.poolID = reader.uint64();
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
            poolID: (0, helpers_1.isSet)(object.poolID) ? BigInt(object.poolID.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeeToken();
        message.denom = object.denom ?? "";
        message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            poolID: object?.poolID
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.poolID = message.poolID;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseFeeToken();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.poolID !== undefined && object.poolID !== null) {
            message.poolID = BigInt(object.poolID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.poolID = message.poolID ? message.poolID.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeeToken.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/fee-token",
            value: exports.FeeToken.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.FeeToken.decode(message.value);
    },
    toProto(message) {
        return exports.FeeToken.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.FeeToken",
            value: exports.FeeToken.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FeeToken.typeUrl, exports.FeeToken);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.FeeToken.aminoType, exports.FeeToken.typeUrl);
