"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseParams() {
    return {
        distrEpochIdentifier: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.incentives.Params",
    aminoType: "osmosis/incentives/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.distrEpochIdentifier === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.distr_epoch_identifier === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.distr_epoch_identifier === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distrEpochIdentifier !== "") {
            writer.uint32(10).string(message.distrEpochIdentifier);
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
                    message.distrEpochIdentifier = reader.string();
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
            distrEpochIdentifier: (0, helpers_1.isSet)(object.distrEpochIdentifier) ? String(object.distrEpochIdentifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.distrEpochIdentifier !== undefined && (obj.distrEpochIdentifier = message.distrEpochIdentifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            distrEpochIdentifier: object?.distr_epoch_identifier
        };
    },
    toSDK(message) {
        const obj = {};
        obj.distr_epoch_identifier = message.distrEpochIdentifier;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.distr_epoch_identifier !== undefined && object.distr_epoch_identifier !== null) {
            message.distrEpochIdentifier = object.distr_epoch_identifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distr_epoch_identifier = message.distrEpochIdentifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/params",
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
            typeUrl: "/osmosis.incentives.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
