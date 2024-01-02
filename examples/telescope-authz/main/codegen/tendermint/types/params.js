"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = void 0;
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseConsensusParams() {
    return {
        block: exports.BlockParams.fromPartial({}),
        evidence: exports.EvidenceParams.fromPartial({}),
        validator: exports.ValidatorParams.fromPartial({}),
        version: exports.VersionParams.fromPartial({})
    };
}
exports.ConsensusParams = {
    typeUrl: "/tendermint.types.ConsensusParams",
    is(o) {
        return o && (o.$typeUrl === exports.ConsensusParams.typeUrl || exports.BlockParams.is(o.block) && exports.EvidenceParams.is(o.evidence) && exports.ValidatorParams.is(o.validator) && exports.VersionParams.is(o.version));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ConsensusParams.typeUrl || exports.BlockParams.isSDK(o.block) && exports.EvidenceParams.isSDK(o.evidence) && exports.ValidatorParams.isSDK(o.validator) && exports.VersionParams.isSDK(o.version));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ConsensusParams.typeUrl || exports.BlockParams.isAmino(o.block) && exports.EvidenceParams.isAmino(o.evidence) && exports.ValidatorParams.isAmino(o.validator) && exports.VersionParams.isAmino(o.version));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
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
            block: (0, helpers_1.isSet)(object.block) ? exports.BlockParams.fromJSON(object.block) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? exports.EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: (0, helpers_1.isSet)(object.validator) ? exports.ValidatorParams.fromJSON(object.validator) : undefined,
            version: (0, helpers_1.isSet)(object.version) ? exports.VersionParams.fromJSON(object.version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? exports.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? exports.ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? exports.VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? exports.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? exports.VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            block: object.block ? exports.BlockParams.fromSDK(object.block) : undefined,
            evidence: object.evidence ? exports.EvidenceParams.fromSDK(object.evidence) : undefined,
            validator: object.validator ? exports.ValidatorParams.fromSDK(object.validator) : undefined,
            version: object.version ? exports.VersionParams.fromSDK(object.version) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toSDK(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? exports.EvidenceParams.toSDK(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? exports.ValidatorParams.toSDK(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? exports.VersionParams.toSDK(message.version) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConsensusParams();
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromAmino(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = exports.EvidenceParams.fromAmino(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.ValidatorParams.fromAmino(object.validator);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = exports.VersionParams.fromAmino(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? exports.BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? exports.EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? exports.ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? exports.VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ConsensusParams",
            value: exports.ConsensusParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConsensusParams.typeUrl, exports.ConsensusParams);
function createBaseBlockParams() {
    return {
        maxBytes: BigInt(0),
        maxGas: BigInt(0),
        timeIotaMs: BigInt(0)
    };
}
exports.BlockParams = {
    typeUrl: "/tendermint.types.BlockParams",
    is(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.maxBytes === "bigint" && typeof o.maxGas === "bigint" && typeof o.timeIotaMs === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint" && typeof o.time_iota_ms === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint" && typeof o.time_iota_ms === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.maxGas);
        }
        if (message.timeIotaMs !== BigInt(0)) {
            writer.uint32(24).int64(message.timeIotaMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
                    break;
                case 3:
                    message.timeIotaMs = reader.int64();
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
            maxBytes: (0, helpers_1.isSet)(object.maxBytes) ? BigInt(object.maxBytes.toString()) : BigInt(0),
            maxGas: (0, helpers_1.isSet)(object.maxGas) ? BigInt(object.maxGas.toString()) : BigInt(0),
            timeIotaMs: (0, helpers_1.isSet)(object.timeIotaMs) ? BigInt(object.timeIotaMs.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || BigInt(0)).toString());
        message.maxGas !== undefined && (obj.maxGas = (message.maxGas || BigInt(0)).toString());
        message.timeIotaMs !== undefined && (obj.timeIotaMs = (message.timeIotaMs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
        message.timeIotaMs = object.timeIotaMs !== undefined && object.timeIotaMs !== null ? BigInt(object.timeIotaMs.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            maxBytes: object?.max_bytes,
            maxGas: object?.max_gas,
            timeIotaMs: object?.time_iota_ms
        };
    },
    toSDK(message) {
        const obj = {};
        obj.max_bytes = message.maxBytes;
        obj.max_gas = message.maxGas;
        obj.time_iota_ms = message.timeIotaMs;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBlockParams();
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.maxBytes = BigInt(object.max_bytes);
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.maxGas = BigInt(object.max_gas);
        }
        if (object.time_iota_ms !== undefined && object.time_iota_ms !== null) {
            message.timeIotaMs = BigInt(object.time_iota_ms);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
        obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
        obj.time_iota_ms = message.timeIotaMs ? message.timeIotaMs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockParams.decode(message.value);
    },
    toProto(message) {
        return exports.BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockParams",
            value: exports.BlockParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BlockParams.typeUrl, exports.BlockParams);
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: BigInt(0),
        maxAgeDuration: duration_1.Duration.fromPartial({}),
        maxBytes: BigInt(0)
    };
}
exports.EvidenceParams = {
    typeUrl: "/tendermint.types.EvidenceParams",
    is(o) {
        return o && (o.$typeUrl === exports.EvidenceParams.typeUrl || typeof o.maxAgeNumBlocks === "bigint" && duration_1.Duration.is(o.maxAgeDuration) && typeof o.maxBytes === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EvidenceParams.typeUrl || typeof o.max_age_num_blocks === "bigint" && duration_1.Duration.isSDK(o.max_age_duration) && typeof o.max_bytes === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EvidenceParams.typeUrl || typeof o.max_age_num_blocks === "bigint" && duration_1.Duration.isAmino(o.max_age_duration) && typeof o.max_bytes === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxAgeNumBlocks !== BigInt(0)) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            duration_1.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = reader.int64();
                    break;
                case 2:
                    message.maxAgeDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = reader.int64();
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
            maxAgeNumBlocks: (0, helpers_1.isSet)(object.maxAgeNumBlocks) ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0),
            maxAgeDuration: (0, helpers_1.isSet)(object.maxAgeDuration) ? duration_1.Duration.fromJSON(object.maxAgeDuration) : undefined,
            maxBytes: (0, helpers_1.isSet)(object.maxBytes) ? BigInt(object.maxBytes.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxAgeNumBlocks !== undefined && (obj.maxAgeNumBlocks = (message.maxAgeNumBlocks || BigInt(0)).toString());
        message.maxAgeDuration !== undefined && (obj.maxAgeDuration = message.maxAgeDuration ? duration_1.Duration.toJSON(message.maxAgeDuration) : undefined);
        message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
        message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? duration_1.Duration.fromPartial(object.maxAgeDuration) : undefined;
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            maxAgeNumBlocks: object?.max_age_num_blocks,
            maxAgeDuration: object.max_age_duration ? duration_1.Duration.fromSDK(object.max_age_duration) : undefined,
            maxBytes: object?.max_bytes
        };
    },
    toSDK(message) {
        const obj = {};
        obj.max_age_num_blocks = message.maxAgeNumBlocks;
        message.maxAgeDuration !== undefined && (obj.max_age_duration = message.maxAgeDuration ? duration_1.Duration.toSDK(message.maxAgeDuration) : undefined);
        obj.max_bytes = message.maxBytes;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEvidenceParams();
        if (object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null) {
            message.maxAgeNumBlocks = BigInt(object.max_age_num_blocks);
        }
        if (object.max_age_duration !== undefined && object.max_age_duration !== null) {
            message.maxAgeDuration = duration_1.Duration.fromAmino(object.max_age_duration);
        }
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.maxBytes = BigInt(object.max_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_age_num_blocks = message.maxAgeNumBlocks ? message.maxAgeNumBlocks.toString() : undefined;
        obj.max_age_duration = message.maxAgeDuration ? duration_1.Duration.toAmino(message.maxAgeDuration) : undefined;
        obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EvidenceParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EvidenceParams.decode(message.value);
    },
    toProto(message) {
        return exports.EvidenceParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceParams",
            value: exports.EvidenceParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EvidenceParams.typeUrl, exports.EvidenceParams);
function createBaseValidatorParams() {
    return {
        pubKeyTypes: []
    };
}
exports.ValidatorParams = {
    typeUrl: "/tendermint.types.ValidatorParams",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorParams.typeUrl || Array.isArray(o.pubKeyTypes) && (!o.pubKeyTypes.length || typeof o.pubKeyTypes[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorParams.typeUrl || Array.isArray(o.pub_key_types) && (!o.pub_key_types.length || typeof o.pub_key_types[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorParams.typeUrl || Array.isArray(o.pub_key_types) && (!o.pub_key_types.length || typeof o.pub_key_types[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pubKeyTypes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
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
            pubKeyTypes: Array.isArray(object?.pubKeyTypes) ? object.pubKeyTypes.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pubKeyTypes) {
            obj.pubKeyTypes = message.pubKeyTypes.map(e => e);
        }
        else {
            obj.pubKeyTypes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pubKeyTypes: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pubKeyTypes) {
            obj.pub_key_types = message.pubKeyTypes.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pub_key_types?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pubKeyTypes) {
            obj.pub_key_types = message.pubKeyTypes.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorParams.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorParams",
            value: exports.ValidatorParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorParams.typeUrl, exports.ValidatorParams);
function createBaseVersionParams() {
    return {
        appVersion: BigInt(0)
    };
}
exports.VersionParams = {
    typeUrl: "/tendermint.types.VersionParams",
    is(o) {
        return o && (o.$typeUrl === exports.VersionParams.typeUrl || typeof o.appVersion === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.VersionParams.typeUrl || typeof o.app_version === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.VersionParams.typeUrl || typeof o.app_version === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.appVersion !== BigInt(0)) {
            writer.uint32(8).uint64(message.appVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appVersion = reader.uint64();
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
            appVersion: (0, helpers_1.isSet)(object.appVersion) ? BigInt(object.appVersion.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.appVersion !== undefined && (obj.appVersion = (message.appVersion || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            appVersion: object?.app_version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.app_version = message.appVersion;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseVersionParams();
        if (object.app_version !== undefined && object.app_version !== null) {
            message.appVersion = BigInt(object.app_version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VersionParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VersionParams.decode(message.value);
    },
    toProto(message) {
        return exports.VersionParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.VersionParams",
            value: exports.VersionParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.VersionParams.typeUrl, exports.VersionParams);
function createBaseHashedParams() {
    return {
        blockMaxBytes: BigInt(0),
        blockMaxGas: BigInt(0)
    };
}
exports.HashedParams = {
    typeUrl: "/tendermint.types.HashedParams",
    is(o) {
        return o && (o.$typeUrl === exports.HashedParams.typeUrl || typeof o.blockMaxBytes === "bigint" && typeof o.blockMaxGas === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.HashedParams.typeUrl || typeof o.block_max_bytes === "bigint" && typeof o.block_max_gas === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.HashedParams.typeUrl || typeof o.block_max_bytes === "bigint" && typeof o.block_max_gas === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockMaxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (message.blockMaxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = reader.int64();
                    break;
                case 2:
                    message.blockMaxGas = reader.int64();
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
            blockMaxBytes: (0, helpers_1.isSet)(object.blockMaxBytes) ? BigInt(object.blockMaxBytes.toString()) : BigInt(0),
            blockMaxGas: (0, helpers_1.isSet)(object.blockMaxGas) ? BigInt(object.blockMaxGas.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockMaxBytes !== undefined && (obj.blockMaxBytes = (message.blockMaxBytes || BigInt(0)).toString());
        message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            blockMaxBytes: object?.block_max_bytes,
            blockMaxGas: object?.block_max_gas
        };
    },
    toSDK(message) {
        const obj = {};
        obj.block_max_bytes = message.blockMaxBytes;
        obj.block_max_gas = message.blockMaxGas;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseHashedParams();
        if (object.block_max_bytes !== undefined && object.block_max_bytes !== null) {
            message.blockMaxBytes = BigInt(object.block_max_bytes);
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.blockMaxGas = BigInt(object.block_max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_max_bytes = message.blockMaxBytes ? message.blockMaxBytes.toString() : undefined;
        obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HashedParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.HashedParams.decode(message.value);
    },
    toProto(message) {
        return exports.HashedParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.HashedParams",
            value: exports.HashedParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.HashedParams.typeUrl, exports.HashedParams);
