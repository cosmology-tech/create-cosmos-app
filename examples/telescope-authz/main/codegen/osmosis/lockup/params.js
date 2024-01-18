"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
function createBaseParams() {
    return {
        forceUnlockAllowedAddresses: []
    };
}
exports.Params = {
    typeUrl: "/osmosis.lockup.Params",
    aminoType: "osmosis/lockup/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.forceUnlockAllowedAddresses) && (!o.forceUnlockAllowedAddresses.length || typeof o.forceUnlockAllowedAddresses[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.force_unlock_allowed_addresses) && (!o.force_unlock_allowed_addresses.length || typeof o.force_unlock_allowed_addresses[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.force_unlock_allowed_addresses) && (!o.force_unlock_allowed_addresses.length || typeof o.force_unlock_allowed_addresses[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.forceUnlockAllowedAddresses) {
            writer.uint32(10).string(v);
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
                    message.forceUnlockAllowedAddresses.push(reader.string());
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
            forceUnlockAllowedAddresses: Array.isArray(object?.forceUnlockAllowedAddresses) ? object.forceUnlockAllowedAddresses.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.forceUnlockAllowedAddresses) {
            obj.forceUnlockAllowedAddresses = message.forceUnlockAllowedAddresses.map(e => e);
        }
        else {
            obj.forceUnlockAllowedAddresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            forceUnlockAllowedAddresses: Array.isArray(object?.force_unlock_allowed_addresses) ? object.force_unlock_allowed_addresses.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.forceUnlockAllowedAddresses) {
            obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses.map(e => e);
        }
        else {
            obj.force_unlock_allowed_addresses = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.forceUnlockAllowedAddresses = object.force_unlock_allowed_addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.forceUnlockAllowedAddresses) {
            obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses.map(e => e);
        }
        else {
            obj.force_unlock_allowed_addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/params",
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
            typeUrl: "/osmosis.lockup.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
