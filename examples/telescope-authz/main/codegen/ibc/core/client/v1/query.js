"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryUpgradedClientStateResponse = exports.QueryUpgradedClientStateRequest = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = exports.QueryClientStatusResponse = exports.QueryClientStatusRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("./client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseQueryClientStateRequest() {
    return {
        clientId: ""
    };
}
exports.QueryClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
    aminoType: "cosmos-sdk/QueryClientStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStateRequest.typeUrl || typeof o.clientId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
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
        const message = createBaseQueryClientStateRequest();
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
        const message = createBaseQueryClientStateRequest();
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
        const message = createBaseQueryClientStateRequest();
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
        return exports.QueryClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateRequest",
            value: exports.QueryClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
            value: exports.QueryClientStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStateRequest.typeUrl, exports.QueryClientStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStateRequest.aminoType, exports.QueryClientStateRequest.typeUrl);
function createBaseQueryClientStateResponse() {
    return {
        clientState: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
    aminoType: "cosmos-sdk/QueryClientStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
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
            clientState: (0, helpers_1.isSet)(object.clientState) ? any_1.Any.fromJSON(object.clientState) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateResponse();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? any_1.Any.fromPartial(object.clientState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            clientState: object.client_state ? any_1.Any.fromSDK(object.client_state) : undefined,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.clientState !== undefined && (obj.client_state = message.clientState ? any_1.Any.toSDK(message.clientState) : undefined);
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStateResponse();
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = any_1.Any.fromAmino(object.client_state);
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
        obj.client_state = message.clientState ? any_1.Any.toAmino(message.clientState) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateResponse",
            value: exports.QueryClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
            value: exports.QueryClientStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStateResponse.typeUrl, exports.QueryClientStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStateResponse.aminoType, exports.QueryClientStateResponse.typeUrl);
function createBaseQueryClientStatesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryClientStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
    aminoType: "cosmos-sdk/QueryClientStatesRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryClientStatesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClientStatesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClientStatesRequest.typeUrl;
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
        const message = createBaseQueryClientStatesRequest();
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
        const message = createBaseQueryClientStatesRequest();
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
        const message = createBaseQueryClientStatesRequest();
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
        return exports.QueryClientStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatesRequest.typeUrl, exports.QueryClientStatesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatesRequest.aminoType, exports.QueryClientStatesRequest.typeUrl);
function createBaseQueryClientStatesResponse() {
    return {
        clientStates: [],
        pagination: undefined
    };
}
exports.QueryClientStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
    aminoType: "cosmos-sdk/QueryClientStatesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStatesResponse.typeUrl || Array.isArray(o.clientStates) && (!o.clientStates.length || client_1.IdentifiedClientState.is(o.clientStates[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || client_1.IdentifiedClientState.isSDK(o.client_states[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || client_1.IdentifiedClientState.isAmino(o.client_states[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.clientStates) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientStates.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            clientStates: Array.isArray(object?.clientStates) ? object.clientStates.map((e) => client_1.IdentifiedClientState.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientStates) {
            obj.clientStates = message.clientStates.map(e => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clientStates = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatesResponse();
        message.clientStates = object.clientStates?.map(e => client_1.IdentifiedClientState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            clientStates: Array.isArray(object?.client_states) ? object.client_states.map((e) => client_1.IdentifiedClientState.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.clientStates) {
            obj.client_states = message.clientStates.map(e => e ? client_1.IdentifiedClientState.toSDK(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatesResponse();
        message.clientStates = object.client_states?.map(e => client_1.IdentifiedClientState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.clientStates) {
            obj.client_states = message.clientStates.map(e => e ? client_1.IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatesResponse.typeUrl, exports.QueryClientStatesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatesResponse.aminoType, exports.QueryClientStatesResponse.typeUrl);
function createBaseQueryConsensusStateRequest() {
    return {
        clientId: "",
        revisionNumber: BigInt(0),
        revisionHeight: BigInt(0),
        latestHeight: false
    };
}
exports.QueryConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryConsensusStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateRequest.typeUrl || typeof o.clientId === "string" && typeof o.revisionNumber === "bigint" && typeof o.revisionHeight === "bigint" && typeof o.latestHeight === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.revisionNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            writer.uint32(32).bool(message.latestHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = reader.uint64();
                    break;
                case 3:
                    message.revisionHeight = reader.uint64();
                    break;
                case 4:
                    message.latestHeight = reader.bool();
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
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : "",
            revisionNumber: (0, helpers_1.isSet)(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
            revisionHeight: (0, helpers_1.isSet)(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0),
            latestHeight: (0, helpers_1.isSet)(object.latestHeight) ? Boolean(object.latestHeight) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || BigInt(0)).toString());
        message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || BigInt(0)).toString());
        message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateRequest();
        message.clientId = object.clientId ?? "";
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
        message.latestHeight = object.latestHeight ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            clientId: object?.client_id,
            revisionNumber: object?.revision_number,
            revisionHeight: object?.revision_height,
            latestHeight: object?.latest_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.revision_number = message.revisionNumber;
        obj.revision_height = message.revisionHeight;
        obj.latest_height = message.latestHeight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.revision_number !== undefined && object.revision_number !== null) {
            message.revisionNumber = BigInt(object.revision_number);
        }
        if (object.revision_height !== undefined && object.revision_height !== null) {
            message.revisionHeight = BigInt(object.revision_height);
        }
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latestHeight = object.latest_height;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
        obj.latest_height = message.latestHeight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStateRequest.typeUrl, exports.QueryConsensusStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStateRequest.aminoType, exports.QueryConsensusStateRequest.typeUrl);
function createBaseQueryConsensusStateResponse() {
    return {
        consensusState: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryConsensusStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
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
            consensusState: (0, helpers_1.isSet)(object.consensusState) ? any_1.Any.fromJSON(object.consensusState) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? any_1.Any.fromPartial(object.consensusState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            consensusState: object.consensus_state ? any_1.Any.fromSDK(object.consensus_state) : undefined,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? any_1.Any.toSDK(message.consensusState) : undefined);
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateResponse();
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = any_1.Any.fromAmino(object.consensus_state);
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
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStateResponse.typeUrl, exports.QueryConsensusStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStateResponse.aminoType, exports.QueryConsensusStateResponse.typeUrl);
function createBaseQueryConsensusStatesRequest() {
    return {
        clientId: "",
        pagination: undefined
    };
}
exports.QueryConsensusStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
    aminoType: "cosmos-sdk/QueryConsensusStatesRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesRequest.typeUrl || typeof o.clientId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
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
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesRequest();
        message.clientId = object.clientId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            clientId: object?.client_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.clientId;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStatesRequest.typeUrl, exports.QueryConsensusStatesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStatesRequest.aminoType, exports.QueryConsensusStatesRequest.typeUrl);
function createBaseQueryConsensusStatesResponse() {
    return {
        consensusStates: [],
        pagination: undefined
    };
}
exports.QueryConsensusStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
    aminoType: "cosmos-sdk/QueryConsensusStatesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensusStates) && (!o.consensusStates.length || client_1.ConsensusStateWithHeight.is(o.consensusStates[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || client_1.ConsensusStateWithHeight.isSDK(o.consensus_states[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || client_1.ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.consensusStates) {
            client_1.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusStates.push(client_1.ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            consensusStates: Array.isArray(object?.consensusStates) ? object.consensusStates.map((e) => client_1.ConsensusStateWithHeight.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusStates) {
            obj.consensusStates = message.consensusStates.map(e => e ? client_1.ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensusStates = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = object.consensusStates?.map(e => client_1.ConsensusStateWithHeight.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => client_1.ConsensusStateWithHeight.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.consensusStates) {
            obj.consensus_states = message.consensusStates.map(e => e ? client_1.ConsensusStateWithHeight.toSDK(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = object.consensus_states?.map(e => client_1.ConsensusStateWithHeight.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.consensusStates) {
            obj.consensus_states = message.consensusStates.map(e => e ? client_1.ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStatesResponse.typeUrl, exports.QueryConsensusStatesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStatesResponse.aminoType, exports.QueryConsensusStatesResponse.typeUrl);
function createBaseQueryClientStatusRequest() {
    return {
        clientId: ""
    };
}
exports.QueryClientStatusRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
    aminoType: "cosmos-sdk/QueryClientStatusRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusRequest.typeUrl || typeof o.clientId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
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
        const message = createBaseQueryClientStatusRequest();
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
        const message = createBaseQueryClientStatusRequest();
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
        const message = createBaseQueryClientStatusRequest();
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
        return exports.QueryClientStatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatusRequest.typeUrl, exports.QueryClientStatusRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatusRequest.aminoType, exports.QueryClientStatusRequest.typeUrl);
function createBaseQueryClientStatusResponse() {
    return {
        status: ""
    };
}
exports.QueryClientStatusResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
    aminoType: "cosmos-sdk/QueryClientStatusResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusResponse.typeUrl || typeof o.status === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusResponse.typeUrl || typeof o.status === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusResponse.typeUrl || typeof o.status === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
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
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusResponse();
        message.status = object.status ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            status: object?.status
        };
    },
    toSDK(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatusResponse();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatusResponse.typeUrl, exports.QueryClientStatusResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatusResponse.aminoType, exports.QueryClientStatusResponse.typeUrl);
function createBaseQueryClientParamsRequest() {
    return {};
}
exports.QueryClientParamsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
    aminoType: "cosmos-sdk/QueryClientParamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryClientParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClientParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClientParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientParamsRequest.typeUrl, exports.QueryClientParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientParamsRequest.aminoType, exports.QueryClientParamsRequest.typeUrl);
function createBaseQueryClientParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryClientParamsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
    aminoType: "cosmos-sdk/QueryClientParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryClientParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClientParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClientParamsResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = client_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? client_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? client_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClientParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientParamsResponse.typeUrl, exports.QueryClientParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientParamsResponse.aminoType, exports.QueryClientParamsResponse.typeUrl);
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
exports.QueryUpgradedClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
    aminoType: "cosmos-sdk/QueryUpgradedClientStateRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedClientStateRequest.typeUrl, exports.QueryUpgradedClientStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedClientStateRequest.aminoType, exports.QueryUpgradedClientStateRequest.typeUrl);
function createBaseQueryUpgradedClientStateResponse() {
    return {
        upgradedClientState: undefined
    };
}
exports.QueryUpgradedClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
    aminoType: "cosmos-sdk/QueryUpgradedClientStateResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradedClientState !== undefined) {
            any_1.Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradedClientState = any_1.Any.decode(reader, reader.uint32());
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
            upgradedClientState: (0, helpers_1.isSet)(object.upgradedClientState) ? any_1.Any.fromJSON(object.upgradedClientState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? any_1.Any.toJSON(message.upgradedClientState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? any_1.Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            upgradedClientState: object.upgraded_client_state ? any_1.Any.fromSDK(object.upgraded_client_state) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.upgradedClientState !== undefined && (obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toSDK(message.upgradedClientState) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgradedClientState = any_1.Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedClientStateResponse.typeUrl, exports.QueryUpgradedClientStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedClientStateResponse.aminoType, exports.QueryUpgradedClientStateResponse.typeUrl);
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
exports.QueryUpgradedConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedConsensusStateRequest.typeUrl, exports.QueryUpgradedConsensusStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedConsensusStateRequest.aminoType, exports.QueryUpgradedConsensusStateRequest.typeUrl);
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: undefined
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradedConsensusState !== undefined) {
            any_1.Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradedConsensusState = any_1.Any.decode(reader, reader.uint32());
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
            upgradedConsensusState: (0, helpers_1.isSet)(object.upgradedConsensusState) ? any_1.Any.fromJSON(object.upgradedConsensusState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = message.upgradedConsensusState ? any_1.Any.toJSON(message.upgradedConsensusState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null ? any_1.Any.fromPartial(object.upgradedConsensusState) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            upgradedConsensusState: object.upgraded_consensus_state ? any_1.Any.fromSDK(object.upgraded_consensus_state) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.upgradedConsensusState !== undefined && (obj.upgraded_consensus_state = message.upgradedConsensusState ? any_1.Any.toSDK(message.upgradedConsensusState) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
            message.upgradedConsensusState = any_1.Any.fromAmino(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState ? any_1.Any.toAmino(message.upgradedConsensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedConsensusStateResponse.typeUrl, exports.QueryUpgradedConsensusStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedConsensusStateResponse.aminoType, exports.QueryUpgradedConsensusStateResponse.typeUrl);
