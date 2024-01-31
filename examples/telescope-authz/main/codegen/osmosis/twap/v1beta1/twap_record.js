"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwapRecord = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
function createBaseTwapRecord() {
    return {
        poolId: BigInt(0),
        asset0Denom: "",
        asset1Denom: "",
        height: BigInt(0),
        time: new Date(),
        p0LastSpotPrice: "",
        p1LastSpotPrice: "",
        p0ArithmeticTwapAccumulator: "",
        p1ArithmeticTwapAccumulator: "",
        lastErrorTime: new Date()
    };
}
exports.TwapRecord = {
    typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
    aminoType: "osmosis/twap/twap-record",
    is(o) {
        return o && (o.$typeUrl === exports.TwapRecord.typeUrl || typeof o.poolId === "bigint" && typeof o.asset0Denom === "string" && typeof o.asset1Denom === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.is(o.time) && typeof o.p0LastSpotPrice === "string" && typeof o.p1LastSpotPrice === "string" && typeof o.p0ArithmeticTwapAccumulator === "string" && typeof o.p1ArithmeticTwapAccumulator === "string" && timestamp_1.Timestamp.is(o.lastErrorTime));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TwapRecord.typeUrl || typeof o.pool_id === "bigint" && typeof o.asset0_denom === "string" && typeof o.asset1_denom === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.isSDK(o.time) && typeof o.p0_last_spot_price === "string" && typeof o.p1_last_spot_price === "string" && typeof o.p0_arithmetic_twap_accumulator === "string" && typeof o.p1_arithmetic_twap_accumulator === "string" && timestamp_1.Timestamp.isSDK(o.last_error_time));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TwapRecord.typeUrl || typeof o.pool_id === "bigint" && typeof o.asset0_denom === "string" && typeof o.asset1_denom === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.isAmino(o.time) && typeof o.p0_last_spot_price === "string" && typeof o.p1_last_spot_price === "string" && typeof o.p0_arithmetic_twap_accumulator === "string" && typeof o.p1_arithmetic_twap_accumulator === "string" && timestamp_1.Timestamp.isAmino(o.last_error_time));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.asset0Denom !== "") {
            writer.uint32(18).string(message.asset0Denom);
        }
        if (message.asset1Denom !== "") {
            writer.uint32(26).string(message.asset1Denom);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(32).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(42).fork()).ldelim();
        }
        if (message.p0LastSpotPrice !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.p0LastSpotPrice, 18).atomics);
        }
        if (message.p1LastSpotPrice !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.p1LastSpotPrice, 18).atomics);
        }
        if (message.p0ArithmeticTwapAccumulator !== "") {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.p0ArithmeticTwapAccumulator, 18).atomics);
        }
        if (message.p1ArithmeticTwapAccumulator !== "") {
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.p1ArithmeticTwapAccumulator, 18).atomics);
        }
        if (message.lastErrorTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastErrorTime), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwapRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.asset0Denom = reader.string();
                    break;
                case 3:
                    message.asset1Denom = reader.string();
                    break;
                case 4:
                    message.height = reader.int64();
                    break;
                case 5:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.p0LastSpotPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.p1LastSpotPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.p0ArithmeticTwapAccumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.p1ArithmeticTwapAccumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.lastErrorTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            poolId: (0, helpers_1.isSet)(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
            asset0Denom: (0, helpers_1.isSet)(object.asset0Denom) ? String(object.asset0Denom) : "",
            asset1Denom: (0, helpers_1.isSet)(object.asset1Denom) ? String(object.asset1Denom) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? new Date(object.time) : undefined,
            p0LastSpotPrice: (0, helpers_1.isSet)(object.p0LastSpotPrice) ? String(object.p0LastSpotPrice) : "",
            p1LastSpotPrice: (0, helpers_1.isSet)(object.p1LastSpotPrice) ? String(object.p1LastSpotPrice) : "",
            p0ArithmeticTwapAccumulator: (0, helpers_1.isSet)(object.p0ArithmeticTwapAccumulator) ? String(object.p0ArithmeticTwapAccumulator) : "",
            p1ArithmeticTwapAccumulator: (0, helpers_1.isSet)(object.p1ArithmeticTwapAccumulator) ? String(object.p1ArithmeticTwapAccumulator) : "",
            lastErrorTime: (0, helpers_1.isSet)(object.lastErrorTime) ? new Date(object.lastErrorTime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.asset0Denom !== undefined && (obj.asset0Denom = message.asset0Denom);
        message.asset1Denom !== undefined && (obj.asset1Denom = message.asset1Denom);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.p0LastSpotPrice !== undefined && (obj.p0LastSpotPrice = message.p0LastSpotPrice);
        message.p1LastSpotPrice !== undefined && (obj.p1LastSpotPrice = message.p1LastSpotPrice);
        message.p0ArithmeticTwapAccumulator !== undefined && (obj.p0ArithmeticTwapAccumulator = message.p0ArithmeticTwapAccumulator);
        message.p1ArithmeticTwapAccumulator !== undefined && (obj.p1ArithmeticTwapAccumulator = message.p1ArithmeticTwapAccumulator);
        message.lastErrorTime !== undefined && (obj.lastErrorTime = message.lastErrorTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTwapRecord();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.asset0Denom = object.asset0Denom ?? "";
        message.asset1Denom = object.asset1Denom ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
        message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
        message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
        message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
        message.lastErrorTime = object.lastErrorTime ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            poolId: object?.pool_id,
            asset0Denom: object?.asset0_denom,
            asset1Denom: object?.asset1_denom,
            height: object?.height,
            time: object.time ?? undefined,
            p0LastSpotPrice: object?.p0_last_spot_price,
            p1LastSpotPrice: object?.p1_last_spot_price,
            p0ArithmeticTwapAccumulator: object?.p0_arithmetic_twap_accumulator,
            p1ArithmeticTwapAccumulator: object?.p1_arithmetic_twap_accumulator,
            lastErrorTime: object.last_error_time ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.poolId;
        obj.asset0_denom = message.asset0Denom;
        obj.asset1_denom = message.asset1Denom;
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ?? undefined);
        obj.p0_last_spot_price = message.p0LastSpotPrice;
        obj.p1_last_spot_price = message.p1LastSpotPrice;
        obj.p0_arithmetic_twap_accumulator = message.p0ArithmeticTwapAccumulator;
        obj.p1_arithmetic_twap_accumulator = message.p1ArithmeticTwapAccumulator;
        message.lastErrorTime !== undefined && (obj.last_error_time = message.lastErrorTime ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTwapRecord();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.asset0_denom !== undefined && object.asset0_denom !== null) {
            message.asset0Denom = object.asset0_denom;
        }
        if (object.asset1_denom !== undefined && object.asset1_denom !== null) {
            message.asset1Denom = object.asset1_denom;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.p0_last_spot_price !== undefined && object.p0_last_spot_price !== null) {
            message.p0LastSpotPrice = object.p0_last_spot_price;
        }
        if (object.p1_last_spot_price !== undefined && object.p1_last_spot_price !== null) {
            message.p1LastSpotPrice = object.p1_last_spot_price;
        }
        if (object.p0_arithmetic_twap_accumulator !== undefined && object.p0_arithmetic_twap_accumulator !== null) {
            message.p0ArithmeticTwapAccumulator = object.p0_arithmetic_twap_accumulator;
        }
        if (object.p1_arithmetic_twap_accumulator !== undefined && object.p1_arithmetic_twap_accumulator !== null) {
            message.p1ArithmeticTwapAccumulator = object.p1_arithmetic_twap_accumulator;
        }
        if (object.last_error_time !== undefined && object.last_error_time !== null) {
            message.lastErrorTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_error_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.asset0_denom = message.asset0Denom;
        obj.asset1_denom = message.asset1Denom;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.p0_last_spot_price = message.p0LastSpotPrice;
        obj.p1_last_spot_price = message.p1LastSpotPrice;
        obj.p0_arithmetic_twap_accumulator = message.p0ArithmeticTwapAccumulator;
        obj.p1_arithmetic_twap_accumulator = message.p1ArithmeticTwapAccumulator;
        obj.last_error_time = message.lastErrorTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastErrorTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TwapRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/twap-record",
            value: exports.TwapRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TwapRecord.decode(message.value);
    },
    toProto(message) {
        return exports.TwapRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
            value: exports.TwapRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TwapRecord.typeUrl, exports.TwapRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TwapRecord.aminoType, exports.TwapRecord.typeUrl);
