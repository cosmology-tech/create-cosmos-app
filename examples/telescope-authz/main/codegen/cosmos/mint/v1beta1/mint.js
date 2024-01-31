"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Minter = void 0;
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMinter() {
    return {
        inflation: "",
        annualProvisions: ""
    };
}
exports.Minter = {
    typeUrl: "/cosmos.mint.v1beta1.Minter",
    aminoType: "cosmos-sdk/Minter",
    is(o) {
        return o && (o.$typeUrl === exports.Minter.typeUrl || typeof o.inflation === "string" && typeof o.annualProvisions === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Minter.typeUrl || typeof o.inflation === "string" && typeof o.annual_provisions === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Minter.typeUrl || typeof o.inflation === "string" && typeof o.annual_provisions === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inflation !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.inflation, 18).atomics);
        }
        if (message.annualProvisions !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.annualProvisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.annualProvisions = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            inflation: (0, helpers_1.isSet)(object.inflation) ? String(object.inflation) : "",
            annualProvisions: (0, helpers_1.isSet)(object.annualProvisions) ? String(object.annualProvisions) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.inflation !== undefined && (obj.inflation = message.inflation);
        message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.inflation = object.inflation ?? "";
        message.annualProvisions = object.annualProvisions ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            inflation: object?.inflation,
            annualProvisions: object?.annual_provisions
        };
    },
    toSDK(message) {
        const obj = {};
        obj.inflation = message.inflation;
        obj.annual_provisions = message.annualProvisions;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMinter();
        if (object.inflation !== undefined && object.inflation !== null) {
            message.inflation = object.inflation;
        }
        if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
            message.annualProvisions = object.annual_provisions;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation = message.inflation;
        obj.annual_provisions = message.annualProvisions;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Minter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Minter",
            value: exports.Minter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Minter.decode(message.value);
    },
    toProto(message) {
        return exports.Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.Minter",
            value: exports.Minter.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Minter.typeUrl, exports.Minter);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Minter.aminoType, exports.Minter.typeUrl);
function createBaseParams() {
    return {
        mintDenom: "",
        inflationRateChange: "",
        inflationMax: "",
        inflationMin: "",
        goalBonded: "",
        blocksPerYear: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/cosmos.mint.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.mintDenom === "string" && typeof o.inflationRateChange === "string" && typeof o.inflationMax === "string" && typeof o.inflationMin === "string" && typeof o.goalBonded === "string" && typeof o.blocksPerYear === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.mint_denom === "string" && typeof o.inflation_rate_change === "string" && typeof o.inflation_max === "string" && typeof o.inflation_min === "string" && typeof o.goal_bonded === "string" && typeof o.blocks_per_year === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.mint_denom === "string" && typeof o.inflation_rate_change === "string" && typeof o.inflation_max === "string" && typeof o.inflation_min === "string" && typeof o.goal_bonded === "string" && typeof o.blocks_per_year === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.inflationRateChange !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
        }
        if (message.inflationMax !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.inflationMax, 18).atomics);
        }
        if (message.inflationMin !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.inflationMin, 18).atomics);
        }
        if (message.goalBonded !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.goalBonded, 18).atomics);
        }
        if (message.blocksPerYear !== BigInt(0)) {
            writer.uint32(48).uint64(message.blocksPerYear);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.inflationRateChange = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.inflationMax = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.inflationMin = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.goalBonded = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.blocksPerYear = reader.uint64();
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
            mintDenom: (0, helpers_1.isSet)(object.mintDenom) ? String(object.mintDenom) : "",
            inflationRateChange: (0, helpers_1.isSet)(object.inflationRateChange) ? String(object.inflationRateChange) : "",
            inflationMax: (0, helpers_1.isSet)(object.inflationMax) ? String(object.inflationMax) : "",
            inflationMin: (0, helpers_1.isSet)(object.inflationMin) ? String(object.inflationMin) : "",
            goalBonded: (0, helpers_1.isSet)(object.goalBonded) ? String(object.goalBonded) : "",
            blocksPerYear: (0, helpers_1.isSet)(object.blocksPerYear) ? BigInt(object.blocksPerYear.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        message.inflationRateChange !== undefined && (obj.inflationRateChange = message.inflationRateChange);
        message.inflationMax !== undefined && (obj.inflationMax = message.inflationMax);
        message.inflationMin !== undefined && (obj.inflationMin = message.inflationMin);
        message.goalBonded !== undefined && (obj.goalBonded = message.goalBonded);
        message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintDenom = object.mintDenom ?? "";
        message.inflationRateChange = object.inflationRateChange ?? "";
        message.inflationMax = object.inflationMax ?? "";
        message.inflationMin = object.inflationMin ?? "";
        message.goalBonded = object.goalBonded ?? "";
        message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            mintDenom: object?.mint_denom,
            inflationRateChange: object?.inflation_rate_change,
            inflationMax: object?.inflation_max,
            inflationMin: object?.inflation_min,
            goalBonded: object?.goal_bonded,
            blocksPerYear: object?.blocks_per_year
        };
    },
    toSDK(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom;
        obj.inflation_rate_change = message.inflationRateChange;
        obj.inflation_max = message.inflationMax;
        obj.inflation_min = message.inflationMin;
        obj.goal_bonded = message.goalBonded;
        obj.blocks_per_year = message.blocksPerYear;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        if (object.inflation_rate_change !== undefined && object.inflation_rate_change !== null) {
            message.inflationRateChange = object.inflation_rate_change;
        }
        if (object.inflation_max !== undefined && object.inflation_max !== null) {
            message.inflationMax = object.inflation_max;
        }
        if (object.inflation_min !== undefined && object.inflation_min !== null) {
            message.inflationMin = object.inflation_min;
        }
        if (object.goal_bonded !== undefined && object.goal_bonded !== null) {
            message.goalBonded = object.goal_bonded;
        }
        if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
            message.blocksPerYear = BigInt(object.blocks_per_year);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom;
        obj.inflation_rate_change = message.inflationRateChange;
        obj.inflation_max = message.inflationMax;
        obj.inflation_min = message.inflationMin;
        obj.goal_bonded = message.goalBonded;
        obj.blocks_per_year = message.blocksPerYear ? message.blocksPerYear.toString() : undefined;
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
            typeUrl: "/cosmos.mint.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
