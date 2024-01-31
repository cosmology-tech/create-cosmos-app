"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomAuthorityMetadata = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseDenomAuthorityMetadata() {
    return {
        admin: ""
    };
}
exports.DenomAuthorityMetadata = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
    aminoType: "osmosis/tokenfactory/denom-authority-metadata",
    is(o) {
        return o && (o.$typeUrl === exports.DenomAuthorityMetadata.typeUrl || typeof o.admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DenomAuthorityMetadata.typeUrl || typeof o.admin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DenomAuthorityMetadata.typeUrl || typeof o.admin === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomAuthorityMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
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
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomAuthorityMetadata();
        message.admin = object.admin ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDenomAuthorityMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomAuthorityMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/denom-authority-metadata",
            value: exports.DenomAuthorityMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DenomAuthorityMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.DenomAuthorityMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
            value: exports.DenomAuthorityMetadata.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DenomAuthorityMetadata.typeUrl, exports.DenomAuthorityMetadata);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DenomAuthorityMetadata.aminoType, exports.DenomAuthorityMetadata.typeUrl);
