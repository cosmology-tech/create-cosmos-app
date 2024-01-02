"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ValidatorSigningInfo = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: BigInt(0),
        indexOffset: BigInt(0),
        jailedUntil: new Date(),
        tombstoned: false,
        missedBlocksCounter: BigInt(0)
    };
}
exports.ValidatorSigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
    aminoType: "cosmos-sdk/ValidatorSigningInfo",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorSigningInfo.typeUrl || typeof o.address === "string" && typeof o.startHeight === "bigint" && typeof o.indexOffset === "bigint" && timestamp_1.Timestamp.is(o.jailedUntil) && typeof o.tombstoned === "boolean" && typeof o.missedBlocksCounter === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorSigningInfo.typeUrl || typeof o.address === "string" && typeof o.start_height === "bigint" && typeof o.index_offset === "bigint" && timestamp_1.Timestamp.isSDK(o.jailed_until) && typeof o.tombstoned === "boolean" && typeof o.missed_blocks_counter === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorSigningInfo.typeUrl || typeof o.address === "string" && typeof o.start_height === "bigint" && typeof o.index_offset === "bigint" && timestamp_1.Timestamp.isAmino(o.jailed_until) && typeof o.tombstoned === "boolean" && typeof o.missed_blocks_counter === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.startHeight !== BigInt(0)) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (message.indexOffset !== BigInt(0)) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (message.missedBlocksCounter !== BigInt(0)) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            startHeight: (0, helpers_1.isSet)(object.startHeight) ? BigInt(object.startHeight.toString()) : BigInt(0),
            indexOffset: (0, helpers_1.isSet)(object.indexOffset) ? BigInt(object.indexOffset.toString()) : BigInt(0),
            jailedUntil: (0, helpers_1.isSet)(object.jailedUntil) ? new Date(object.jailedUntil) : undefined,
            tombstoned: (0, helpers_1.isSet)(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missedBlocksCounter: (0, helpers_1.isSet)(object.missedBlocksCounter) ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.startHeight !== undefined && (obj.startHeight = (message.startHeight || BigInt(0)).toString());
        message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || BigInt(0)).toString());
        message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missedBlocksCounter !== undefined && (obj.missedBlocksCounter = (message.missedBlocksCounter || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSigningInfo();
        message.address = object.address ?? "";
        message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
        message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt(0);
        message.jailedUntil = object.jailedUntil ?? undefined;
        message.tombstoned = object.tombstoned ?? false;
        message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            startHeight: object?.start_height,
            indexOffset: object?.index_offset,
            jailedUntil: object.jailed_until ?? undefined,
            tombstoned: object?.tombstoned,
            missedBlocksCounter: object?.missed_blocks_counter
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.start_height = message.startHeight;
        obj.index_offset = message.indexOffset;
        message.jailedUntil !== undefined && (obj.jailed_until = message.jailedUntil ?? undefined);
        obj.tombstoned = message.tombstoned;
        obj.missed_blocks_counter = message.missedBlocksCounter;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidatorSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.start_height !== undefined && object.start_height !== null) {
            message.startHeight = BigInt(object.start_height);
        }
        if (object.index_offset !== undefined && object.index_offset !== null) {
            message.indexOffset = BigInt(object.index_offset);
        }
        if (object.jailed_until !== undefined && object.jailed_until !== null) {
            message.jailedUntil = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.jailed_until));
        }
        if (object.tombstoned !== undefined && object.tombstoned !== null) {
            message.tombstoned = object.tombstoned;
        }
        if (object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null) {
            message.missedBlocksCounter = BigInt(object.missed_blocks_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
        obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
        obj.jailed_until = message.jailedUntil ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.jailedUntil)) : undefined;
        obj.tombstoned = message.tombstoned;
        obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSigningInfo",
            value: exports.ValidatorSigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSigningInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
            value: exports.ValidatorSigningInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorSigningInfo.typeUrl, exports.ValidatorSigningInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorSigningInfo.aminoType, exports.ValidatorSigningInfo.typeUrl);
function createBaseParams() {
    return {
        signedBlocksWindow: BigInt(0),
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: duration_1.Duration.fromPartial({}),
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array()
    };
}
exports.Params = {
    typeUrl: "/cosmos.slashing.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.signedBlocksWindow === "bigint" && (o.minSignedPerWindow instanceof Uint8Array || typeof o.minSignedPerWindow === "string") && duration_1.Duration.is(o.downtimeJailDuration) && (o.slashFractionDoubleSign instanceof Uint8Array || typeof o.slashFractionDoubleSign === "string") && (o.slashFractionDowntime instanceof Uint8Array || typeof o.slashFractionDowntime === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.signed_blocks_window === "bigint" && (o.min_signed_per_window instanceof Uint8Array || typeof o.min_signed_per_window === "string") && duration_1.Duration.isSDK(o.downtime_jail_duration) && (o.slash_fraction_double_sign instanceof Uint8Array || typeof o.slash_fraction_double_sign === "string") && (o.slash_fraction_downtime instanceof Uint8Array || typeof o.slash_fraction_downtime === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.signed_blocks_window === "bigint" && (o.min_signed_per_window instanceof Uint8Array || typeof o.min_signed_per_window === "string") && duration_1.Duration.isAmino(o.downtime_jail_duration) && (o.slash_fraction_double_sign instanceof Uint8Array || typeof o.slash_fraction_double_sign === "string") && (o.slash_fraction_downtime instanceof Uint8Array || typeof o.slash_fraction_downtime === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signedBlocksWindow !== BigInt(0)) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            duration_1.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
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
            signedBlocksWindow: (0, helpers_1.isSet)(object.signedBlocksWindow) ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0),
            minSignedPerWindow: (0, helpers_1.isSet)(object.minSignedPerWindow) ? (0, helpers_1.bytesFromBase64)(object.minSignedPerWindow) : new Uint8Array(),
            downtimeJailDuration: (0, helpers_1.isSet)(object.downtimeJailDuration) ? duration_1.Duration.fromJSON(object.downtimeJailDuration) : undefined,
            slashFractionDoubleSign: (0, helpers_1.isSet)(object.slashFractionDoubleSign) ? (0, helpers_1.bytesFromBase64)(object.slashFractionDoubleSign) : new Uint8Array(),
            slashFractionDowntime: (0, helpers_1.isSet)(object.slashFractionDowntime) ? (0, helpers_1.bytesFromBase64)(object.slashFractionDowntime) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedBlocksWindow !== undefined && (obj.signedBlocksWindow = (message.signedBlocksWindow || BigInt(0)).toString());
        message.minSignedPerWindow !== undefined && (obj.minSignedPerWindow = (0, helpers_1.base64FromBytes)(message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array()));
        message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration ? duration_1.Duration.toJSON(message.downtimeJailDuration) : undefined);
        message.slashFractionDoubleSign !== undefined && (obj.slashFractionDoubleSign = (0, helpers_1.base64FromBytes)(message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array()));
        message.slashFractionDowntime !== undefined && (obj.slashFractionDowntime = (0, helpers_1.base64FromBytes)(message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0);
        message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
        message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? duration_1.Duration.fromPartial(object.downtimeJailDuration) : undefined;
        message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
        message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            signedBlocksWindow: object?.signed_blocks_window,
            minSignedPerWindow: object?.min_signed_per_window,
            downtimeJailDuration: object.downtime_jail_duration ? duration_1.Duration.fromSDK(object.downtime_jail_duration) : undefined,
            slashFractionDoubleSign: object?.slash_fraction_double_sign,
            slashFractionDowntime: object?.slash_fraction_downtime
        };
    },
    toSDK(message) {
        const obj = {};
        obj.signed_blocks_window = message.signedBlocksWindow;
        obj.min_signed_per_window = message.minSignedPerWindow;
        message.downtimeJailDuration !== undefined && (obj.downtime_jail_duration = message.downtimeJailDuration ? duration_1.Duration.toSDK(message.downtimeJailDuration) : undefined);
        obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
        obj.slash_fraction_downtime = message.slashFractionDowntime;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.signed_blocks_window !== undefined && object.signed_blocks_window !== null) {
            message.signedBlocksWindow = BigInt(object.signed_blocks_window);
        }
        if (object.min_signed_per_window !== undefined && object.min_signed_per_window !== null) {
            message.minSignedPerWindow = (0, helpers_1.bytesFromBase64)(object.min_signed_per_window);
        }
        if (object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null) {
            message.downtimeJailDuration = duration_1.Duration.fromAmino(object.downtime_jail_duration);
        }
        if (object.slash_fraction_double_sign !== undefined && object.slash_fraction_double_sign !== null) {
            message.slashFractionDoubleSign = (0, helpers_1.bytesFromBase64)(object.slash_fraction_double_sign);
        }
        if (object.slash_fraction_downtime !== undefined && object.slash_fraction_downtime !== null) {
            message.slashFractionDowntime = (0, helpers_1.bytesFromBase64)(object.slash_fraction_downtime);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
        obj.min_signed_per_window = message.minSignedPerWindow ? (0, helpers_1.base64FromBytes)(message.minSignedPerWindow) : undefined;
        obj.downtime_jail_duration = message.downtimeJailDuration ? duration_1.Duration.toAmino(message.downtimeJailDuration) : undefined;
        obj.slash_fraction_double_sign = message.slashFractionDoubleSign ? (0, helpers_1.base64FromBytes)(message.slashFractionDoubleSign) : undefined;
        obj.slash_fraction_downtime = message.slashFractionDowntime ? (0, helpers_1.base64FromBytes)(message.slashFractionDowntime) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
