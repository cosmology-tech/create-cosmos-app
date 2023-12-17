"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientState = void 0;
const client_1 = require("../../../core/client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseClientState() {
    return {
        chainId: "",
        height: client_1.Height.fromPartial({})
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
    aminoType: "cosmos-sdk/ClientState",
    is(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || typeof o.chainId === "string" && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || typeof o.chain_id === "string" && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || typeof o.chain_id === "string" && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            chainId: object?.chain_id,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = client_1.Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: exports.ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientState.decode(message.value);
    },
    toProto(message) {
        return exports.ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
            value: exports.ClientState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClientState.typeUrl, exports.ClientState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClientState.aminoType, exports.ClientState.typeUrl);
