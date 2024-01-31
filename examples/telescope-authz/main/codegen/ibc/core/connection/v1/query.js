"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const connection_1 = require("./connection");
const client_1 = require("../../client/v1/client");
const any_1 = require("../../../../google/protobuf/any");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseQueryConnectionRequest() {
    return {
        connectionId: ""
    };
}
exports.QueryConnectionRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
    aminoType: "cosmos-sdk/QueryConnectionRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionRequest.typeUrl || typeof o.connectionId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionRequest.typeUrl || typeof o.connection_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionRequest.typeUrl || typeof o.connection_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionRequest();
        message.connectionId = object.connectionId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            connectionId: object?.connection_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionRequest",
            value: exports.QueryConnectionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
            value: exports.QueryConnectionRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionRequest.typeUrl, exports.QueryConnectionRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionRequest.aminoType, exports.QueryConnectionRequest.typeUrl);
function createBaseQueryConnectionResponse() {
    return {
        connection: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
    aminoType: "cosmos-sdk/QueryConnectionResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            connection: (0, helpers_1.isSet)(object.connection) ? connection_1.ConnectionEnd.fromJSON(object.connection) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toJSON(message.connection) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionResponse();
        message.connection = object.connection !== undefined && object.connection !== null ? connection_1.ConnectionEnd.fromPartial(object.connection) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            connection: object.connection ? connection_1.ConnectionEnd.fromSDK(object.connection) : undefined,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toSDK(message.connection) : undefined);
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionResponse();
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = connection_1.ConnectionEnd.fromAmino(object.connection);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection ? connection_1.ConnectionEnd.toAmino(message.connection) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionResponse",
            value: exports.QueryConnectionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
            value: exports.QueryConnectionResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionResponse.typeUrl, exports.QueryConnectionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionResponse.aminoType, exports.QueryConnectionResponse.typeUrl);
function createBaseQueryConnectionsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
    aminoType: "cosmos-sdk/QueryConnectionsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryConnectionsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryConnectionsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryConnectionsRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsRequest",
            value: exports.QueryConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
            value: exports.QueryConnectionsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionsRequest.typeUrl, exports.QueryConnectionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionsRequest.aminoType, exports.QueryConnectionsRequest.typeUrl);
function createBaseQueryConnectionsResponse() {
    return {
        connections: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
    aminoType: "cosmos-sdk/QueryConnectionsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionsResponse.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.is(o.connections[0])) && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionsResponse.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.isSDK(o.connections[0])) && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionsResponse.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.isAmino(o.connections[0])) && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
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
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
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
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
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
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = client_1.Height.fromAmino(object.height);
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsResponse",
            value: exports.QueryConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
            value: exports.QueryConnectionsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionsResponse.typeUrl, exports.QueryConnectionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionsResponse.aminoType, exports.QueryConnectionsResponse.typeUrl);
function createBaseQueryClientConnectionsRequest() {
    return {
        clientId: ""
    };
}
exports.QueryClientConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
    aminoType: "cosmos-sdk/QueryClientConnectionsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientConnectionsRequest.typeUrl || typeof o.clientId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientConnectionsRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientConnectionsRequest.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
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
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            clientId: object?.client_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.clientId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClientConnectionsRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsRequest",
            value: exports.QueryClientConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
            value: exports.QueryClientConnectionsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientConnectionsRequest.typeUrl, exports.QueryClientConnectionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientConnectionsRequest.aminoType, exports.QueryClientConnectionsRequest.typeUrl);
function createBaseQueryClientConnectionsResponse() {
    return {
        connectionPaths: [],
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryClientConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
    aminoType: "cosmos-sdk/QueryClientConnectionsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientConnectionsResponse.typeUrl || Array.isArray(o.connectionPaths) && (!o.connectionPaths.length || typeof o.connectionPaths[0] === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientConnectionsResponse.typeUrl || Array.isArray(o.connection_paths) && (!o.connection_paths.length || typeof o.connection_paths[0] === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientConnectionsResponse.typeUrl || Array.isArray(o.connection_paths) && (!o.connection_paths.length || typeof o.connection_paths[0] === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connectionPaths) {
            writer.uint32(10).string(v);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionPaths.push(reader.string());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            connectionPaths: Array.isArray(object?.connectionPaths) ? object.connectionPaths.map((e) => String(e)) : [],
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connectionPaths) {
            obj.connectionPaths = message.connectionPaths.map(e => e);
        }
        else {
            obj.connectionPaths = [];
        }
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connectionPaths = object.connectionPaths?.map(e => e) || [];
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            connectionPaths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e) => e) : [],
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.connectionPaths) {
            obj.connection_paths = message.connectionPaths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connectionPaths = object.connection_paths?.map(e => e) || [];
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.connectionPaths) {
            obj.connection_paths = message.connectionPaths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsResponse",
            value: exports.QueryClientConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
            value: exports.QueryClientConnectionsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientConnectionsResponse.typeUrl, exports.QueryClientConnectionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientConnectionsResponse.aminoType, exports.QueryClientConnectionsResponse.typeUrl);
function createBaseQueryConnectionClientStateRequest() {
    return {
        connectionId: ""
    };
}
exports.QueryConnectionClientStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
    aminoType: "cosmos-sdk/QueryConnectionClientStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionClientStateRequest.typeUrl || typeof o.connectionId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionClientStateRequest.typeUrl || typeof o.connection_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionClientStateRequest.typeUrl || typeof o.connection_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateRequest();
        message.connectionId = object.connectionId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            connectionId: object?.connection_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionClientStateRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateRequest",
            value: exports.QueryConnectionClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
            value: exports.QueryConnectionClientStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionClientStateRequest.typeUrl, exports.QueryConnectionClientStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionClientStateRequest.aminoType, exports.QueryConnectionClientStateRequest.typeUrl);
function createBaseQueryConnectionClientStateResponse() {
    return {
        identifiedClientState: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionClientStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
    aminoType: "cosmos-sdk/QueryConnectionClientStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifiedClientState !== undefined) {
            client_1.IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifiedClientState = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            identifiedClientState: (0, helpers_1.isSet)(object.identifiedClientState) ? client_1.IdentifiedClientState.fromJSON(object.identifiedClientState) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifiedClientState !== undefined && (obj.identifiedClientState = message.identifiedClientState ? client_1.IdentifiedClientState.toJSON(message.identifiedClientState) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateResponse();
        message.identifiedClientState = object.identifiedClientState !== undefined && object.identifiedClientState !== null ? client_1.IdentifiedClientState.fromPartial(object.identifiedClientState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            identifiedClientState: object.identified_client_state ? client_1.IdentifiedClientState.fromSDK(object.identified_client_state) : undefined,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.identifiedClientState !== undefined && (obj.identified_client_state = message.identifiedClientState ? client_1.IdentifiedClientState.toSDK(message.identifiedClientState) : undefined);
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionClientStateResponse();
        if (object.identified_client_state !== undefined && object.identified_client_state !== null) {
            message.identifiedClientState = client_1.IdentifiedClientState.fromAmino(object.identified_client_state);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.identified_client_state = message.identifiedClientState ? client_1.IdentifiedClientState.toAmino(message.identifiedClientState) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateResponse",
            value: exports.QueryConnectionClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
            value: exports.QueryConnectionClientStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionClientStateResponse.typeUrl, exports.QueryConnectionClientStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionClientStateResponse.aminoType, exports.QueryConnectionClientStateResponse.typeUrl);
function createBaseQueryConnectionConsensusStateRequest() {
    return {
        connectionId: "",
        revisionNumber: BigInt(0),
        revisionHeight: BigInt(0)
    };
}
exports.QueryConnectionConsensusStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryConnectionConsensusStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionConsensusStateRequest.typeUrl || typeof o.connectionId === "string" && typeof o.revisionNumber === "bigint" && typeof o.revisionHeight === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionConsensusStateRequest.typeUrl || typeof o.connection_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionConsensusStateRequest.typeUrl || typeof o.connection_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.revisionNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = reader.uint64();
                    break;
                case 3:
                    message.revisionHeight = reader.uint64();
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : "",
            revisionNumber: (0, helpers_1.isSet)(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
            revisionHeight: (0, helpers_1.isSet)(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || BigInt(0)).toString());
        message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connectionId = object.connectionId ?? "";
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            connectionId: object?.connection_id,
            revisionNumber: object?.revision_number,
            revisionHeight: object?.revision_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.revision_number = message.revisionNumber;
        obj.revision_height = message.revisionHeight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.revision_number !== undefined && object.revision_number !== null) {
            message.revisionNumber = BigInt(object.revision_number);
        }
        if (object.revision_height !== undefined && object.revision_height !== null) {
            message.revisionHeight = BigInt(object.revision_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
            value: exports.QueryConnectionConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
            value: exports.QueryConnectionConsensusStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionConsensusStateRequest.typeUrl, exports.QueryConnectionConsensusStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionConsensusStateRequest.aminoType, exports.QueryConnectionConsensusStateRequest.typeUrl);
function createBaseQueryConnectionConsensusStateResponse() {
    return {
        consensusState: undefined,
        clientId: "",
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionConsensusStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryConnectionConsensusStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionConsensusStateResponse.typeUrl || typeof o.clientId === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clientId = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            consensusState: (0, helpers_1.isSet)(object.consensusState) ? any_1.Any.fromJSON(object.consensusState) : undefined,
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : "",
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? any_1.Any.fromPartial(object.consensusState) : undefined;
        message.clientId = object.clientId ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            consensusState: object.consensus_state ? any_1.Any.fromSDK(object.consensus_state) : undefined,
            clientId: object?.client_id,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? any_1.Any.toSDK(message.consensusState) : undefined);
        obj.client_id = message.clientId;
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = any_1.Any.fromAmino(object.consensus_state);
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensusState ? any_1.Any.toAmino(message.consensusState) : undefined;
        obj.client_id = message.clientId;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
            value: exports.QueryConnectionConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
            value: exports.QueryConnectionConsensusStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionConsensusStateResponse.typeUrl, exports.QueryConnectionConsensusStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionConsensusStateResponse.aminoType, exports.QueryConnectionConsensusStateResponse.typeUrl);
