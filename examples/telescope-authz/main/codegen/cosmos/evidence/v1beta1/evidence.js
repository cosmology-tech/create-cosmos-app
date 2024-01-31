"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equivocation = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseEquivocation() {
    return {
        height: BigInt(0),
        time: new Date(),
        power: BigInt(0),
        consensusAddress: ""
    };
}
exports.Equivocation = {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
    aminoType: "cosmos-sdk/Equivocation",
    is(o) {
        return o && (o.$typeUrl === exports.Equivocation.typeUrl || typeof o.height === "bigint" && timestamp_1.Timestamp.is(o.time) && typeof o.power === "bigint" && typeof o.consensusAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Equivocation.typeUrl || typeof o.height === "bigint" && timestamp_1.Timestamp.isSDK(o.time) && typeof o.power === "bigint" && typeof o.consensus_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Equivocation.typeUrl || typeof o.height === "bigint" && timestamp_1.Timestamp.isAmino(o.time) && typeof o.power === "bigint" && typeof o.consensus_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquivocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? new Date(object.time) : undefined,
            power: (0, helpers_1.isSet)(object.power) ? BigInt(object.power.toString()) : BigInt(0),
            consensusAddress: (0, helpers_1.isSet)(object.consensusAddress) ? String(object.consensusAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEquivocation();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        message.consensusAddress = object.consensusAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            time: object.time ?? undefined,
            power: object?.power,
            consensusAddress: object?.consensus_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ?? undefined);
        obj.power = message.power;
        obj.consensus_address = message.consensusAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEquivocation();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        if (object.consensus_address !== undefined && object.consensus_address !== null) {
            message.consensusAddress = object.consensus_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        obj.consensus_address = message.consensusAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Equivocation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Equivocation",
            value: exports.Equivocation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Equivocation.decode(message.value);
    },
    toProto(message) {
        return exports.Equivocation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
            value: exports.Equivocation.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Equivocation.typeUrl, exports.Equivocation);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Equivocation.aminoType, exports.Equivocation.typeUrl);
