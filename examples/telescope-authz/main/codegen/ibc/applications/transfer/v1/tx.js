"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTransferResponse = exports.MsgTransfer = void 0;
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const client_1 = require("../../../core/client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseMsgTransfer() {
    return {
        sourcePort: "",
        sourceChannel: "",
        token: coin_1.Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeoutHeight: client_1.Height.fromPartial({}),
        timeoutTimestamp: BigInt(0)
    };
}
exports.MsgTransfer = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    aminoType: "cosmos-sdk/MsgTransfer",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTransfer.typeUrl || typeof o.sourcePort === "string" && typeof o.sourceChannel === "string" && coin_1.Coin.is(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && client_1.Height.is(o.timeoutHeight) && typeof o.timeoutTimestamp === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgTransfer.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && coin_1.Coin.isSDK(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && client_1.Height.isSDK(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTransfer.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && coin_1.Coin.isAmino(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && client_1.Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sourcePort !== "") {
            writer.uint32(10).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(18).string(message.sourceChannel);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeoutHeight !== undefined) {
            client_1.Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(56).uint64(message.timeoutTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourcePort = reader.string();
                    break;
                case 2:
                    message.sourceChannel = reader.string();
                    break;
                case 3:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeoutTimestamp = reader.uint64();
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
            sourcePort: (0, helpers_1.isSet)(object.sourcePort) ? String(object.sourcePort) : "",
            sourceChannel: (0, helpers_1.isSet)(object.sourceChannel) ? String(object.sourceChannel) : "",
            token: (0, helpers_1.isSet)(object.token) ? coin_1.Coin.fromJSON(object.token) : undefined,
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : "",
            timeoutHeight: (0, helpers_1.isSet)(object.timeoutHeight) ? client_1.Height.fromJSON(object.timeoutHeight) : undefined,
            timeoutTimestamp: (0, helpers_1.isSet)(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? client_1.Height.toJSON(message.timeoutHeight) : undefined);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransfer();
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.token = object.token !== undefined && object.token !== null ? coin_1.Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? client_1.Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sourcePort: object?.source_port,
            sourceChannel: object?.source_channel,
            token: object.token ? coin_1.Coin.fromSDK(object.token) : undefined,
            sender: object?.sender,
            receiver: object?.receiver,
            timeoutHeight: object.timeout_height ? client_1.Height.fromSDK(object.timeout_height) : undefined,
            timeoutTimestamp: object?.timeout_timestamp
        };
    },
    toSDK(message) {
        const obj = {};
        obj.source_port = message.sourcePort;
        obj.source_channel = message.sourceChannel;
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toSDK(message.token) : undefined);
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        message.timeoutHeight !== undefined && (obj.timeout_height = message.timeoutHeight ? client_1.Height.toSDK(message.timeoutHeight) : undefined);
        obj.timeout_timestamp = message.timeoutTimestamp;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgTransfer();
        if (object.source_port !== undefined && object.source_port !== null) {
            message.sourcePort = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.sourceChannel = object.source_channel;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = coin_1.Coin.fromAmino(object.token);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = client_1.Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_port = message.sourcePort;
        obj.source_channel = message.sourceChannel;
        obj.token = message.token ? coin_1.Coin.toAmino(message.token) : undefined;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.timeout_height = message.timeoutHeight ? client_1.Height.toAmino(message.timeoutHeight) : {};
        obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransfer",
            value: exports.MsgTransfer.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: exports.MsgTransfer.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTransfer.typeUrl, exports.MsgTransfer);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTransfer.aminoType, exports.MsgTransfer.typeUrl);
function createBaseMsgTransferResponse() {
    return {};
}
exports.MsgTransferResponse = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
    aminoType: "cosmos-sdk/MsgTransferResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgTransferResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgTransferResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgTransferResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
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
        const message = createBaseMsgTransferResponse();
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
        const message = createBaseMsgTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferResponse",
            value: exports.MsgTransferResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
            value: exports.MsgTransferResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTransferResponse.typeUrl, exports.MsgTransferResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTransferResponse.aminoType, exports.MsgTransferResponse.typeUrl);
