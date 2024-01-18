"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryNextSequenceReceiveResponse = exports.QueryNextSequenceReceiveRequest = exports.QueryUnreceivedAcksResponse = exports.QueryUnreceivedAcksRequest = exports.QueryUnreceivedPacketsResponse = exports.QueryUnreceivedPacketsRequest = exports.QueryPacketAcknowledgementsResponse = exports.QueryPacketAcknowledgementsRequest = exports.QueryPacketAcknowledgementResponse = exports.QueryPacketAcknowledgementRequest = exports.QueryPacketReceiptResponse = exports.QueryPacketReceiptRequest = exports.QueryPacketCommitmentsResponse = exports.QueryPacketCommitmentsRequest = exports.QueryPacketCommitmentResponse = exports.QueryPacketCommitmentRequest = exports.QueryChannelConsensusStateResponse = exports.QueryChannelConsensusStateRequest = exports.QueryChannelClientStateResponse = exports.QueryChannelClientStateRequest = exports.QueryConnectionChannelsResponse = exports.QueryConnectionChannelsRequest = exports.QueryChannelsResponse = exports.QueryChannelsRequest = exports.QueryChannelResponse = exports.QueryChannelRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
const any_1 = require("../../../../google/protobuf/any");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseQueryChannelRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
exports.QueryChannelRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
    aminoType: "cosmos-sdk/QueryChannelRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryChannelRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelRequest",
            value: exports.QueryChannelRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
            value: exports.QueryChannelRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelRequest.typeUrl, exports.QueryChannelRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelRequest.aminoType, exports.QueryChannelRequest.typeUrl);
function createBaseQueryChannelResponse() {
    return {
        channel: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
    aminoType: "cosmos-sdk/QueryChannelResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
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
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelResponse();
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            channel: object.channel ? channel_1.Channel.fromSDK(object.channel) : undefined,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toSDK(message.channel) : undefined);
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelResponse();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_1.Channel.fromAmino(object.channel);
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
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelResponse",
            value: exports.QueryChannelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
            value: exports.QueryChannelResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelResponse.typeUrl, exports.QueryChannelResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelResponse.aminoType, exports.QueryChannelResponse.typeUrl);
function createBaseQueryChannelsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
    aminoType: "cosmos-sdk/QueryChannelsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryChannelsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryChannelsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryChannelsRequest.typeUrl;
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
        const message = createBaseQueryChannelsRequest();
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
        const message = createBaseQueryChannelsRequest();
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
        const message = createBaseQueryChannelsRequest();
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
        return exports.QueryChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsRequest",
            value: exports.QueryChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
            value: exports.QueryChannelsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelsRequest.typeUrl, exports.QueryChannelsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelsRequest.aminoType, exports.QueryChannelsRequest.typeUrl);
function createBaseQueryChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
    aminoType: "cosmos-sdk/QueryChannelsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.is(o.channels[0])) && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isSDK(o.channels[0])) && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isAmino(o.channels[0])) && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toSDK(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromAmino(e)) || [];
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
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsResponse",
            value: exports.QueryChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
            value: exports.QueryChannelsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelsResponse.typeUrl, exports.QueryChannelsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelsResponse.aminoType, exports.QueryChannelsResponse.typeUrl);
function createBaseQueryConnectionChannelsRequest() {
    return {
        connection: "",
        pagination: undefined
    };
}
exports.QueryConnectionChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
    aminoType: "cosmos-sdk/QueryConnectionChannelsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = reader.string();
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
            connection: (0, helpers_1.isSet)(object.connection) ? String(object.connection) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = object.connection ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            connection: object?.connection,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.connection = message.connection;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = object.connection;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsRequest",
            value: exports.QueryConnectionChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
            value: exports.QueryConnectionChannelsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionChannelsRequest.typeUrl, exports.QueryConnectionChannelsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionChannelsRequest.aminoType, exports.QueryConnectionChannelsRequest.typeUrl);
function createBaseQueryConnectionChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
    aminoType: "cosmos-sdk/QueryConnectionChannelsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.is(o.channels[0])) && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isSDK(o.channels[0])) && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isAmino(o.channels[0])) && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConnectionChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toSDK(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromAmino(e)) || [];
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
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsResponse",
            value: exports.QueryConnectionChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
            value: exports.QueryConnectionChannelsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConnectionChannelsResponse.typeUrl, exports.QueryConnectionChannelsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConnectionChannelsResponse.aminoType, exports.QueryConnectionChannelsResponse.typeUrl);
function createBaseQueryChannelClientStateRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
exports.QueryChannelClientStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
    aminoType: "cosmos-sdk/QueryChannelClientStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryChannelClientStateRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelClientStateRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateRequest",
            value: exports.QueryChannelClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
            value: exports.QueryChannelClientStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelClientStateRequest.typeUrl, exports.QueryChannelClientStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelClientStateRequest.aminoType, exports.QueryChannelClientStateRequest.typeUrl);
function createBaseQueryChannelClientStateResponse() {
    return {
        identifiedClientState: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelClientStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
    aminoType: "cosmos-sdk/QueryChannelClientStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
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
        const message = createBaseQueryChannelClientStateResponse();
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
        const message = createBaseQueryChannelClientStateResponse();
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
        const message = createBaseQueryChannelClientStateResponse();
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
        return exports.QueryChannelClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateResponse",
            value: exports.QueryChannelClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
            value: exports.QueryChannelClientStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelClientStateResponse.typeUrl, exports.QueryChannelClientStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelClientStateResponse.aminoType, exports.QueryChannelClientStateResponse.typeUrl);
function createBaseQueryChannelConsensusStateRequest() {
    return {
        portId: "",
        channelId: "",
        revisionNumber: BigInt(0),
        revisionHeight: BigInt(0)
    };
}
exports.QueryChannelConsensusStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryChannelConsensusStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryChannelConsensusStateRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.revisionNumber === "bigint" && typeof o.revisionHeight === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.revisionNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.revisionNumber = reader.uint64();
                    break;
                case 4:
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            revisionNumber: (0, helpers_1.isSet)(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
            revisionHeight: (0, helpers_1.isSet)(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || BigInt(0)).toString());
        message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            revisionNumber: object?.revision_number,
            revisionHeight: object?.revision_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.revision_number = message.revisionNumber;
        obj.revision_height = message.revisionHeight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
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
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateRequest",
            value: exports.QueryChannelConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
            value: exports.QueryChannelConsensusStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelConsensusStateRequest.typeUrl, exports.QueryChannelConsensusStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelConsensusStateRequest.aminoType, exports.QueryChannelConsensusStateRequest.typeUrl);
function createBaseQueryChannelConsensusStateResponse() {
    return {
        consensusState: undefined,
        clientId: "",
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelConsensusStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryChannelConsensusStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryChannelConsensusStateResponse.typeUrl || typeof o.clientId === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
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
        const message = createBaseQueryChannelConsensusStateResponse();
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
        const message = createBaseQueryChannelConsensusStateResponse();
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
        const message = createBaseQueryChannelConsensusStateResponse();
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
        return exports.QueryChannelConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateResponse",
            value: exports.QueryChannelConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
            value: exports.QueryChannelConsensusStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryChannelConsensusStateResponse.typeUrl, exports.QueryChannelConsensusStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryChannelConsensusStateResponse.aminoType, exports.QueryChannelConsensusStateResponse.typeUrl);
function createBaseQueryPacketCommitmentRequest() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
exports.QueryPacketCommitmentRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
    aminoType: "cosmos-sdk/QueryPacketCommitmentRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketCommitmentRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentRequest",
            value: exports.QueryPacketCommitmentRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
            value: exports.QueryPacketCommitmentRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketCommitmentRequest.typeUrl, exports.QueryPacketCommitmentRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketCommitmentRequest.aminoType, exports.QueryPacketCommitmentRequest.typeUrl);
function createBaseQueryPacketCommitmentResponse() {
    return {
        commitment: new Uint8Array(),
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketCommitmentResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
    aminoType: "cosmos-sdk/QueryPacketCommitmentResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
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
        const message = createBaseQueryPacketCommitmentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitment = reader.bytes();
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
            commitment: (0, helpers_1.isSet)(object.commitment) ? (0, helpers_1.bytesFromBase64)(object.commitment) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitment !== undefined && (obj.commitment = (0, helpers_1.base64FromBytes)(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = object.commitment ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            commitment: object?.commitment,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.commitment = message.commitment;
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        if (object.commitment !== undefined && object.commitment !== null) {
            message.commitment = (0, helpers_1.bytesFromBase64)(object.commitment);
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
        obj.commitment = message.commitment ? (0, helpers_1.base64FromBytes)(message.commitment) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketCommitmentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentResponse",
            value: exports.QueryPacketCommitmentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
            value: exports.QueryPacketCommitmentResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketCommitmentResponse.typeUrl, exports.QueryPacketCommitmentResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketCommitmentResponse.aminoType, exports.QueryPacketCommitmentResponse.typeUrl);
function createBaseQueryPacketCommitmentsRequest() {
    return {
        portId: "",
        channelId: "",
        pagination: undefined
    };
}
exports.QueryPacketCommitmentsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
    aminoType: "cosmos-sdk/QueryPacketCommitmentsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentsRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketCommitmentsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsRequest",
            value: exports.QueryPacketCommitmentsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
            value: exports.QueryPacketCommitmentsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketCommitmentsRequest.typeUrl, exports.QueryPacketCommitmentsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketCommitmentsRequest.aminoType, exports.QueryPacketCommitmentsRequest.typeUrl);
function createBaseQueryPacketCommitmentsResponse() {
    return {
        commitments: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketCommitmentsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
    aminoType: "cosmos-sdk/QueryPacketCommitmentsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.is(o.commitments[0])) && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.isSDK(o.commitments[0])) && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.isAmino(o.commitments[0])) && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryPacketCommitmentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
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
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toSDK(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map(e => channel_1.PacketState.fromAmino(e)) || [];
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
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketCommitmentsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsResponse",
            value: exports.QueryPacketCommitmentsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
            value: exports.QueryPacketCommitmentsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketCommitmentsResponse.typeUrl, exports.QueryPacketCommitmentsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketCommitmentsResponse.aminoType, exports.QueryPacketCommitmentsResponse.typeUrl);
function createBaseQueryPacketReceiptRequest() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
exports.QueryPacketReceiptRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
    aminoType: "cosmos-sdk/QueryPacketReceiptRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketReceiptRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketReceiptRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketReceiptRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptRequest",
            value: exports.QueryPacketReceiptRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketReceiptRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketReceiptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
            value: exports.QueryPacketReceiptRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketReceiptRequest.typeUrl, exports.QueryPacketReceiptRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketReceiptRequest.aminoType, exports.QueryPacketReceiptRequest.typeUrl);
function createBaseQueryPacketReceiptResponse() {
    return {
        received: false,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketReceiptResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
    aminoType: "cosmos-sdk/QueryPacketReceiptResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
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
        const message = createBaseQueryPacketReceiptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.received = reader.bool();
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
            received: (0, helpers_1.isSet)(object.received) ? Boolean(object.received) : false,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.received !== undefined && (obj.received = message.received);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptResponse();
        message.received = object.received ?? false;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            received: object?.received,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.received = message.received;
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketReceiptResponse();
        if (object.received !== undefined && object.received !== null) {
            message.received = object.received;
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
        obj.received = message.received;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketReceiptResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptResponse",
            value: exports.QueryPacketReceiptResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketReceiptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketReceiptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
            value: exports.QueryPacketReceiptResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketReceiptResponse.typeUrl, exports.QueryPacketReceiptResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketReceiptResponse.aminoType, exports.QueryPacketReceiptResponse.typeUrl);
function createBaseQueryPacketAcknowledgementRequest() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
exports.QueryPacketAcknowledgementRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketAcknowledgementRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
            value: exports.QueryPacketAcknowledgementRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
            value: exports.QueryPacketAcknowledgementRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketAcknowledgementRequest.typeUrl, exports.QueryPacketAcknowledgementRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketAcknowledgementRequest.aminoType, exports.QueryPacketAcknowledgementRequest.typeUrl);
function createBaseQueryPacketAcknowledgementResponse() {
    return {
        acknowledgement: new Uint8Array(),
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
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
        const message = createBaseQueryPacketAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgement = reader.bytes();
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
            acknowledgement: (0, helpers_1.isSet)(object.acknowledgement) ? (0, helpers_1.bytesFromBase64)(object.acknowledgement) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledgement !== undefined && (obj.acknowledgement = (0, helpers_1.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            acknowledgement: object?.acknowledgement,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.acknowledgement = message.acknowledgement;
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = (0, helpers_1.bytesFromBase64)(object.acknowledgement);
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
        obj.acknowledgement = message.acknowledgement ? (0, helpers_1.base64FromBytes)(message.acknowledgement) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
            value: exports.QueryPacketAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
            value: exports.QueryPacketAcknowledgementResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketAcknowledgementResponse.typeUrl, exports.QueryPacketAcknowledgementResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketAcknowledgementResponse.aminoType, exports.QueryPacketAcknowledgementResponse.typeUrl);
function createBaseQueryPacketAcknowledgementsRequest() {
    return {
        portId: "",
        channelId: "",
        pagination: undefined,
        packetCommitmentSequences: []
    };
}
exports.QueryPacketAcknowledgementsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementsRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && Array.isArray(o.packetCommitmentSequences) && (!o.packetCommitmentSequences.length || typeof o.packetCommitmentSequences[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.packetCommitmentSequences.push(reader.uint64());
                    }
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        if (message.packetCommitmentSequences) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.packetCommitmentSequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined,
            packetCommitmentSequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        if (message.packetCommitmentSequences) {
            obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        message.packetCommitmentSequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        if (message.packetCommitmentSequences) {
            obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e.toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketAcknowledgementsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
            value: exports.QueryPacketAcknowledgementsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
            value: exports.QueryPacketAcknowledgementsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketAcknowledgementsRequest.typeUrl, exports.QueryPacketAcknowledgementsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketAcknowledgementsRequest.aminoType, exports.QueryPacketAcknowledgementsRequest.typeUrl);
function createBaseQueryPacketAcknowledgementsResponse() {
    return {
        acknowledgements: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketAcknowledgementsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.is(o.acknowledgements[0])) && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.isSDK(o.acknowledgements[0])) && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.isAmino(o.acknowledgements[0])) && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryPacketAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
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
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toSDK(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map(e => channel_1.PacketState.fromAmino(e)) || [];
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
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketAcknowledgementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
            value: exports.QueryPacketAcknowledgementsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
            value: exports.QueryPacketAcknowledgementsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPacketAcknowledgementsResponse.typeUrl, exports.QueryPacketAcknowledgementsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPacketAcknowledgementsResponse.aminoType, exports.QueryPacketAcknowledgementsResponse.typeUrl);
function createBaseQueryUnreceivedPacketsRequest() {
    return {
        portId: "",
        channelId: "",
        packetCommitmentSequences: []
    };
}
exports.QueryUnreceivedPacketsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
    aminoType: "cosmos-sdk/QueryUnreceivedPacketsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedPacketsRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && Array.isArray(o.packetCommitmentSequences) && (!o.packetCommitmentSequences.length || typeof o.packetCommitmentSequences[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.packetCommitmentSequences.push(reader.uint64());
                    }
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.packetCommitmentSequences) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.packetCommitmentSequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            packetCommitmentSequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        if (message.packetCommitmentSequences) {
            obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        message.packetCommitmentSequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        if (message.packetCommitmentSequences) {
            obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e.toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedPacketsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
            value: exports.QueryUnreceivedPacketsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedPacketsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedPacketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
            value: exports.QueryUnreceivedPacketsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUnreceivedPacketsRequest.typeUrl, exports.QueryUnreceivedPacketsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnreceivedPacketsRequest.aminoType, exports.QueryUnreceivedPacketsRequest.typeUrl);
function createBaseQueryUnreceivedPacketsResponse() {
    return {
        sequences: [],
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryUnreceivedPacketsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
    aminoType: "cosmos-sdk/QueryUnreceivedPacketsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.sequences.push(reader.uint64());
                    }
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => e) : [],
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => BigInt(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = client_1.Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedPacketsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
            value: exports.QueryUnreceivedPacketsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedPacketsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedPacketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
            value: exports.QueryUnreceivedPacketsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUnreceivedPacketsResponse.typeUrl, exports.QueryUnreceivedPacketsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnreceivedPacketsResponse.aminoType, exports.QueryUnreceivedPacketsResponse.typeUrl);
function createBaseQueryUnreceivedAcksRequest() {
    return {
        portId: "",
        channelId: "",
        packetAckSequences: []
    };
}
exports.QueryUnreceivedAcksRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
    aminoType: "cosmos-sdk/QueryUnreceivedAcksRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedAcksRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && Array.isArray(o.packetAckSequences) && (!o.packetAckSequences.length || typeof o.packetAckSequences[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetAckSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetAckSequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.packetAckSequences.push(reader.uint64());
                    }
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            packetAckSequences: Array.isArray(object?.packetAckSequences) ? object.packetAckSequences.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.packetAckSequences) {
            obj.packetAckSequences = message.packetAckSequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.packetAckSequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetAckSequences = object.packetAckSequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            packetAckSequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        if (message.packetAckSequences) {
            obj.packet_ack_sequences = message.packetAckSequences.map(e => e);
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        message.packetAckSequences = object.packet_ack_sequences?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        if (message.packetAckSequences) {
            obj.packet_ack_sequences = message.packetAckSequences.map(e => e.toString());
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedAcksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksRequest",
            value: exports.QueryUnreceivedAcksRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedAcksRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedAcksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
            value: exports.QueryUnreceivedAcksRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUnreceivedAcksRequest.typeUrl, exports.QueryUnreceivedAcksRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnreceivedAcksRequest.aminoType, exports.QueryUnreceivedAcksRequest.typeUrl);
function createBaseQueryUnreceivedAcksResponse() {
    return {
        sequences: [],
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryUnreceivedAcksResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
    aminoType: "cosmos-sdk/QueryUnreceivedAcksResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && client_1.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && client_1.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && client_1.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.sequences.push(reader.uint64());
                    }
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => e) : [],
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => BigInt(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = client_1.Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedAcksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksResponse",
            value: exports.QueryUnreceivedAcksResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedAcksResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedAcksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
            value: exports.QueryUnreceivedAcksResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUnreceivedAcksResponse.typeUrl, exports.QueryUnreceivedAcksResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnreceivedAcksResponse.aminoType, exports.QueryUnreceivedAcksResponse.typeUrl);
function createBaseQueryNextSequenceReceiveRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
exports.QueryNextSequenceReceiveRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
    aminoType: "cosmos-sdk/QueryNextSequenceReceiveRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryNextSequenceReceiveRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryNextSequenceReceiveRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNextSequenceReceiveRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
            value: exports.QueryNextSequenceReceiveRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNextSequenceReceiveRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNextSequenceReceiveRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
            value: exports.QueryNextSequenceReceiveRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNextSequenceReceiveRequest.typeUrl, exports.QueryNextSequenceReceiveRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNextSequenceReceiveRequest.aminoType, exports.QueryNextSequenceReceiveRequest.typeUrl);
function createBaseQueryNextSequenceReceiveResponse() {
    return {
        nextSequenceReceive: BigInt(0),
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryNextSequenceReceiveResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
    aminoType: "cosmos-sdk/QueryNextSequenceReceiveResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryNextSequenceReceiveResponse.typeUrl || typeof o.nextSequenceReceive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proofHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nextSequenceReceive !== BigInt(0)) {
            writer.uint32(8).uint64(message.nextSequenceReceive);
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
        const message = createBaseQueryNextSequenceReceiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextSequenceReceive = reader.uint64();
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
            nextSequenceReceive: (0, helpers_1.isSet)(object.nextSequenceReceive) ? BigInt(object.nextSequenceReceive.toString()) : BigInt(0),
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proofHeight: (0, helpers_1.isSet)(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.nextSequenceReceive !== undefined && (obj.nextSequenceReceive = (message.nextSequenceReceive || BigInt(0)).toString());
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.nextSequenceReceive = object.nextSequenceReceive !== undefined && object.nextSequenceReceive !== null ? BigInt(object.nextSequenceReceive.toString()) : BigInt(0);
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            nextSequenceReceive: object?.next_sequence_receive,
            proof: object?.proof,
            proofHeight: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.next_sequence_receive = message.nextSequenceReceive;
        obj.proof = message.proof;
        message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? client_1.Height.toSDK(message.proofHeight) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        if (object.next_sequence_receive !== undefined && object.next_sequence_receive !== null) {
            message.nextSequenceReceive = BigInt(object.next_sequence_receive);
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
        obj.next_sequence_receive = message.nextSequenceReceive ? message.nextSequenceReceive.toString() : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNextSequenceReceiveResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
            value: exports.QueryNextSequenceReceiveResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNextSequenceReceiveResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNextSequenceReceiveResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
            value: exports.QueryNextSequenceReceiveResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNextSequenceReceiveResponse.typeUrl, exports.QueryNextSequenceReceiveResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNextSequenceReceiveResponse.aminoType, exports.QueryNextSequenceReceiveResponse.typeUrl);
