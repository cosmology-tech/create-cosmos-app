"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        contractAddress: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
    aminoType: "osmosis/ibcratelimit/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.contractAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.contract_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.contract_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
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
                    message.contractAddress = reader.string();
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
            contractAddress: (0, helpers_1.isSet)(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            contractAddress: object?.contract_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/ibcratelimit/params",
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
            typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
