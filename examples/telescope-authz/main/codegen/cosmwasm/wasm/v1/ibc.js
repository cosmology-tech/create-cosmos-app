"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgIBCCloseChannel = exports.MsgIBCSend = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgIBCSend() {
    return {
        channel: "",
        timeoutHeight: BigInt(0),
        timeoutTimestamp: BigInt(0),
        data: new Uint8Array()
    };
}
exports.MsgIBCSend = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
    aminoType: "wasm/MsgIBCSend",
    is(o) {
        return o && (o.$typeUrl === exports.MsgIBCSend.typeUrl || typeof o.channel === "string" && typeof o.timeoutHeight === "bigint" && typeof o.timeoutTimestamp === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgIBCSend.typeUrl || typeof o.channel === "string" && typeof o.timeout_height === "bigint" && typeof o.timeout_timestamp === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgIBCSend.typeUrl || typeof o.channel === "string" && typeof o.timeout_height === "bigint" && typeof o.timeout_timestamp === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.timeoutHeight);
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(40).uint64(message.timeoutTimestamp);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                case 4:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 5:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                case 6:
                    message.data = reader.bytes();
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
            channel: (0, helpers_1.isSet)(object.channel) ? String(object.channel) : "",
            timeoutHeight: (0, helpers_1.isSet)(object.timeoutHeight) ? BigInt(object.timeoutHeight.toString()) : BigInt(0),
            timeoutTimestamp: (0, helpers_1.isSet)(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || BigInt(0)).toString());
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt(0)).toString());
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSend();
        message.channel = object.channel ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            channel: object?.channel,
            timeoutHeight: object?.timeout_height,
            timeoutTimestamp: object?.timeout_timestamp,
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.channel = message.channel;
        obj.timeout_height = message.timeoutHeight;
        obj.timeout_timestamp = message.timeoutTimestamp;
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCSend();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = BigInt(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel;
        obj.timeout_height = message.timeoutHeight ? message.timeoutHeight.toString() : undefined;
        obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgIBCSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgIBCSend",
            value: exports.MsgIBCSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgIBCSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIBCSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
            value: exports.MsgIBCSend.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgIBCSend.typeUrl, exports.MsgIBCSend);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgIBCSend.aminoType, exports.MsgIBCSend.typeUrl);
function createBaseMsgIBCCloseChannel() {
    return {
        channel: ""
    };
}
exports.MsgIBCCloseChannel = {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
    aminoType: "wasm/MsgIBCCloseChannel",
    is(o) {
        return o && (o.$typeUrl === exports.MsgIBCCloseChannel.typeUrl || typeof o.channel === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgIBCCloseChannel.typeUrl || typeof o.channel === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgIBCCloseChannel.typeUrl || typeof o.channel === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCCloseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
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
            channel: (0, helpers_1.isSet)(object.channel) ? String(object.channel) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCCloseChannel();
        message.channel = object.channel ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            channel: object?.channel
        };
    },
    toSDK(message) {
        const obj = {};
        obj.channel = message.channel;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCCloseChannel();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgIBCCloseChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgIBCCloseChannel",
            value: exports.MsgIBCCloseChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgIBCCloseChannel.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIBCCloseChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
            value: exports.MsgIBCCloseChannel.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgIBCCloseChannel.typeUrl, exports.MsgIBCCloseChannel);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgIBCCloseChannel.aminoType, exports.MsgIBCCloseChannel.typeUrl);
