"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketSequence = exports.GenesisState = void 0;
const channel_1 = require("./channel");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.core.channel.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.is(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.is(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.is(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || channel_1.PacketState.is(o.receipts[0])) && Array.isArray(o.sendSequences) && (!o.sendSequences.length || exports.PacketSequence.is(o.sendSequences[0])) && Array.isArray(o.recvSequences) && (!o.recvSequences.length || exports.PacketSequence.is(o.recvSequences[0])) && Array.isArray(o.ackSequences) && (!o.ackSequences.length || exports.PacketSequence.is(o.ackSequences[0])) && typeof o.nextChannelSequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isSDK(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.isSDK(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.isSDK(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || channel_1.PacketState.isSDK(o.receipts[0])) && Array.isArray(o.send_sequences) && (!o.send_sequences.length || exports.PacketSequence.isSDK(o.send_sequences[0])) && Array.isArray(o.recv_sequences) && (!o.recv_sequences.length || exports.PacketSequence.isSDK(o.recv_sequences[0])) && Array.isArray(o.ack_sequences) && (!o.ack_sequences.length || exports.PacketSequence.isSDK(o.ack_sequences[0])) && typeof o.next_channel_sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isAmino(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.isAmino(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.isAmino(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || channel_1.PacketState.isAmino(o.receipts[0])) && Array.isArray(o.send_sequences) && (!o.send_sequences.length || exports.PacketSequence.isAmino(o.send_sequences[0])) && Array.isArray(o.recv_sequences) && (!o.recv_sequences.length || exports.PacketSequence.isAmino(o.recv_sequences[0])) && Array.isArray(o.ack_sequences) && (!o.ack_sequences.length || exports.PacketSequence.isAmino(o.ack_sequences[0])) && typeof o.next_channel_sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            channel_1.PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendSequences) {
            exports.PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recvSequences) {
            exports.PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ackSequences) {
            exports.PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.nextChannelSequence !== BigInt(0)) {
            writer.uint32(64).uint64(message.nextChannelSequence);
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
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recvSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ackSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nextChannelSequence = reader.uint64();
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
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            sendSequences: Array.isArray(object?.sendSequences) ? object.sendSequences.map((e) => exports.PacketSequence.fromJSON(e)) : [],
            recvSequences: Array.isArray(object?.recvSequences) ? object.recvSequences.map((e) => exports.PacketSequence.fromJSON(e)) : [],
            ackSequences: Array.isArray(object?.ackSequences) ? object.ackSequences.map((e) => exports.PacketSequence.fromJSON(e)) : [],
            nextChannelSequence: (0, helpers_1.isSet)(object.nextChannelSequence) ? BigInt(object.nextChannelSequence.toString()) : BigInt(0)
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
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.sendSequences = message.sendSequences.map(e => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.sendSequences = [];
        }
        if (message.recvSequences) {
            obj.recvSequences = message.recvSequences.map(e => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.recvSequences = [];
        }
        if (message.ackSequences) {
            obj.ackSequences = message.ackSequences.map(e => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.ackSequences = [];
        }
        message.nextChannelSequence !== undefined && (obj.nextChannelSequence = (message.nextChannelSequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.commitments = object.commitments?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.sendSequences = object.sendSequences?.map(e => exports.PacketSequence.fromPartial(e)) || [];
        message.recvSequences = object.recvSequences?.map(e => exports.PacketSequence.fromPartial(e)) || [];
        message.ackSequences = object.ackSequences?.map(e => exports.PacketSequence.fromPartial(e)) || [];
        message.nextChannelSequence = object.nextChannelSequence !== undefined && object.nextChannelSequence !== null ? BigInt(object.nextChannelSequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromSDK(e)) : [],
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromSDK(e)) : [],
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromSDK(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => channel_1.PacketState.fromSDK(e)) : [],
            sendSequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e) => exports.PacketSequence.fromSDK(e)) : [],
            recvSequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e) => exports.PacketSequence.fromSDK(e)) : [],
            ackSequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e) => exports.PacketSequence.fromSDK(e)) : [],
            nextChannelSequence: object?.next_channel_sequence
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
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toSDK(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toSDK(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? channel_1.PacketState.toSDK(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.send_sequences = message.sendSequences.map(e => e ? exports.PacketSequence.toSDK(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recvSequences) {
            obj.recv_sequences = message.recvSequences.map(e => e ? exports.PacketSequence.toSDK(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ackSequences) {
            obj.ack_sequences = message.ackSequences.map(e => e ? exports.PacketSequence.toSDK(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        obj.next_channel_sequence = message.nextChannelSequence;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromAmino(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => channel_1.PacketState.fromAmino(e)) || [];
        message.commitments = object.commitments?.map(e => channel_1.PacketState.fromAmino(e)) || [];
        message.receipts = object.receipts?.map(e => channel_1.PacketState.fromAmino(e)) || [];
        message.sendSequences = object.send_sequences?.map(e => exports.PacketSequence.fromAmino(e)) || [];
        message.recvSequences = object.recv_sequences?.map(e => exports.PacketSequence.fromAmino(e)) || [];
        message.ackSequences = object.ack_sequences?.map(e => exports.PacketSequence.fromAmino(e)) || [];
        if (object.next_channel_sequence !== undefined && object.next_channel_sequence !== null) {
            message.nextChannelSequence = BigInt(object.next_channel_sequence);
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
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.send_sequences = message.sendSequences.map(e => e ? exports.PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recvSequences) {
            obj.recv_sequences = message.recvSequences.map(e => e ? exports.PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ackSequences) {
            obj.ack_sequences = message.ackSequences.map(e => e ? exports.PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        obj.next_channel_sequence = message.nextChannelSequence ? message.nextChannelSequence.toString() : undefined;
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
            typeUrl: "/ibc.core.channel.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBasePacketSequence() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
exports.PacketSequence = {
    typeUrl: "/ibc.core.channel.v1.PacketSequence",
    aminoType: "cosmos-sdk/PacketSequence",
    is(o) {
        return o && (o.$typeUrl === exports.PacketSequence.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PacketSequence.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PacketSequence.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
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
        const message = createBasePacketSequence();
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
        const message = createBasePacketSequence();
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
        const message = createBasePacketSequence();
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
        return exports.PacketSequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketSequence",
            value: exports.PacketSequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketSequence.decode(message.value);
    },
    toProto(message) {
        return exports.PacketSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketSequence",
            value: exports.PacketSequence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PacketSequence.typeUrl, exports.PacketSequence);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PacketSequence.aminoType, exports.PacketSequence.typeUrl);
