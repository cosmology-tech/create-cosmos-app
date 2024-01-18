"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const genesis_1 = require("../../client/v1/genesis");
const genesis_2 = require("../../connection/v1/genesis");
const genesis_3 = require("../../channel/v1/genesis");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseGenesisState() {
    return {
        clientGenesis: genesis_1.GenesisState.fromPartial({}),
        connectionGenesis: genesis_2.GenesisState.fromPartial({}),
        channelGenesis: genesis_3.GenesisState.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.core.types.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || genesis_1.GenesisState.is(o.clientGenesis) && genesis_2.GenesisState.is(o.connectionGenesis) && genesis_3.GenesisState.is(o.channelGenesis));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || genesis_1.GenesisState.isSDK(o.client_genesis) && genesis_2.GenesisState.isSDK(o.connection_genesis) && genesis_3.GenesisState.isSDK(o.channel_genesis));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || genesis_1.GenesisState.isAmino(o.client_genesis) && genesis_2.GenesisState.isAmino(o.connection_genesis) && genesis_3.GenesisState.isAmino(o.channel_genesis));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientGenesis !== undefined) {
            genesis_1.GenesisState.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionGenesis !== undefined) {
            genesis_2.GenesisState.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channelGenesis !== undefined) {
            genesis_3.GenesisState.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
                    message.clientGenesis = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.connectionGenesis = genesis_2.GenesisState.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.channelGenesis = genesis_3.GenesisState.decode(reader, reader.uint32());
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
            clientGenesis: (0, helpers_1.isSet)(object.clientGenesis) ? genesis_1.GenesisState.fromJSON(object.clientGenesis) : undefined,
            connectionGenesis: (0, helpers_1.isSet)(object.connectionGenesis) ? genesis_2.GenesisState.fromJSON(object.connectionGenesis) : undefined,
            channelGenesis: (0, helpers_1.isSet)(object.channelGenesis) ? genesis_3.GenesisState.fromJSON(object.channelGenesis) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientGenesis !== undefined && (obj.clientGenesis = message.clientGenesis ? genesis_1.GenesisState.toJSON(message.clientGenesis) : undefined);
        message.connectionGenesis !== undefined && (obj.connectionGenesis = message.connectionGenesis ? genesis_2.GenesisState.toJSON(message.connectionGenesis) : undefined);
        message.channelGenesis !== undefined && (obj.channelGenesis = message.channelGenesis ? genesis_3.GenesisState.toJSON(message.channelGenesis) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clientGenesis = object.clientGenesis !== undefined && object.clientGenesis !== null ? genesis_1.GenesisState.fromPartial(object.clientGenesis) : undefined;
        message.connectionGenesis = object.connectionGenesis !== undefined && object.connectionGenesis !== null ? genesis_2.GenesisState.fromPartial(object.connectionGenesis) : undefined;
        message.channelGenesis = object.channelGenesis !== undefined && object.channelGenesis !== null ? genesis_3.GenesisState.fromPartial(object.channelGenesis) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            clientGenesis: object.client_genesis ? genesis_1.GenesisState.fromSDK(object.client_genesis) : undefined,
            connectionGenesis: object.connection_genesis ? genesis_2.GenesisState.fromSDK(object.connection_genesis) : undefined,
            channelGenesis: object.channel_genesis ? genesis_3.GenesisState.fromSDK(object.channel_genesis) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.clientGenesis !== undefined && (obj.client_genesis = message.clientGenesis ? genesis_1.GenesisState.toSDK(message.clientGenesis) : undefined);
        message.connectionGenesis !== undefined && (obj.connection_genesis = message.connectionGenesis ? genesis_2.GenesisState.toSDK(message.connectionGenesis) : undefined);
        message.channelGenesis !== undefined && (obj.channel_genesis = message.channelGenesis ? genesis_3.GenesisState.toSDK(message.channelGenesis) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.client_genesis !== undefined && object.client_genesis !== null) {
            message.clientGenesis = genesis_1.GenesisState.fromAmino(object.client_genesis);
        }
        if (object.connection_genesis !== undefined && object.connection_genesis !== null) {
            message.connectionGenesis = genesis_2.GenesisState.fromAmino(object.connection_genesis);
        }
        if (object.channel_genesis !== undefined && object.channel_genesis !== null) {
            message.channelGenesis = genesis_3.GenesisState.fromAmino(object.channel_genesis);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_genesis = message.clientGenesis ? genesis_1.GenesisState.toAmino(message.clientGenesis) : undefined;
        obj.connection_genesis = message.connectionGenesis ? genesis_2.GenesisState.toAmino(message.connectionGenesis) : undefined;
        obj.channel_genesis = message.channelGenesis ? genesis_3.GenesisState.toAmino(message.channelGenesis) : undefined;
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
            typeUrl: "/ibc.core.types.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
