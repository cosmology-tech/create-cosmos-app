"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const connection_1 = require("./connection");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseGenesisState() {
    return {
        connections: [],
        clientConnectionPaths: [],
        nextConnectionSequence: BigInt(0),
        params: connection_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.core.connection.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.is(o.connections[0])) && Array.isArray(o.clientConnectionPaths) && (!o.clientConnectionPaths.length || connection_1.ConnectionPaths.is(o.clientConnectionPaths[0])) && typeof o.nextConnectionSequence === "bigint" && connection_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.isSDK(o.connections[0])) && Array.isArray(o.client_connection_paths) && (!o.client_connection_paths.length || connection_1.ConnectionPaths.isSDK(o.client_connection_paths[0])) && typeof o.next_connection_sequence === "bigint" && connection_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.isAmino(o.connections[0])) && Array.isArray(o.client_connection_paths) && (!o.client_connection_paths.length || connection_1.ConnectionPaths.isAmino(o.client_connection_paths[0])) && typeof o.next_connection_sequence === "bigint" && connection_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientConnectionPaths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextConnectionSequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.nextConnectionSequence);
        }
        if (message.params !== undefined) {
            connection_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientConnectionPaths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextConnectionSequence = reader.uint64();
                    break;
                case 4:
                    message.params = connection_1.Params.decode(reader, reader.uint32());
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
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromJSON(e)) : [],
            clientConnectionPaths: Array.isArray(object?.clientConnectionPaths) ? object.clientConnectionPaths.map((e) => connection_1.ConnectionPaths.fromJSON(e)) : [],
            nextConnectionSequence: (0, helpers_1.isSet)(object.nextConnectionSequence) ? BigInt(object.nextConnectionSequence.toString()) : BigInt(0),
            params: (0, helpers_1.isSet)(object.params) ? connection_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.clientConnectionPaths) {
            obj.clientConnectionPaths = message.clientConnectionPaths.map(e => e ? connection_1.ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.clientConnectionPaths = [];
        }
        message.nextConnectionSequence !== undefined && (obj.nextConnectionSequence = (message.nextConnectionSequence || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? connection_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.clientConnectionPaths = object.clientConnectionPaths?.map(e => connection_1.ConnectionPaths.fromPartial(e)) || [];
        message.nextConnectionSequence = object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null ? BigInt(object.nextConnectionSequence.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? connection_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromSDK(e)) : [],
            clientConnectionPaths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e) => connection_1.ConnectionPaths.fromSDK(e)) : [],
            nextConnectionSequence: object?.next_connection_sequence,
            params: object.params ? connection_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toSDK(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.clientConnectionPaths) {
            obj.client_connection_paths = message.clientConnectionPaths.map(e => e ? connection_1.ConnectionPaths.toSDK(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        obj.next_connection_sequence = message.nextConnectionSequence;
        message.params !== undefined && (obj.params = message.params ? connection_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromAmino(e)) || [];
        message.clientConnectionPaths = object.client_connection_paths?.map(e => connection_1.ConnectionPaths.fromAmino(e)) || [];
        if (object.next_connection_sequence !== undefined && object.next_connection_sequence !== null) {
            message.nextConnectionSequence = BigInt(object.next_connection_sequence);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = connection_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toAmino(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.clientConnectionPaths) {
            obj.client_connection_paths = message.clientConnectionPaths.map(e => e ? connection_1.ConnectionPaths.toAmino(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        obj.next_connection_sequence = message.nextConnectionSequence ? message.nextConnectionSequence.toString() : undefined;
        obj.params = message.params ? connection_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/ibc.core.connection.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
