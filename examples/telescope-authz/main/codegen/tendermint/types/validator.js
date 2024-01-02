"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = void 0;
const keys_1 = require("../crypto/keys");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseValidatorSet() {
    return {
        validators: [],
        proposer: undefined,
        totalVotingPower: BigInt(0)
    };
}
exports.ValidatorSet = {
    typeUrl: "/tendermint.types.ValidatorSet",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.Validator.is(o.validators[0])) && typeof o.totalVotingPower === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isSDK(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isAmino(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalVotingPower = reader.int64();
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            proposer: (0, helpers_1.isSet)(object.proposer) ? exports.Validator.fromJSON(object.proposer) : undefined,
            totalVotingPower: (0, helpers_1.isSet)(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer ? exports.Validator.toJSON(message.proposer) : undefined);
        message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.proposer = object.proposer !== undefined && object.proposer !== null ? exports.Validator.fromPartial(object.proposer) : undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromSDK(e)) : [],
            proposer: object.proposer ? exports.Validator.fromSDK(object.proposer) : undefined,
            totalVotingPower: object?.total_voting_power
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer ? exports.Validator.toSDK(message.proposer) : undefined);
        obj.total_voting_power = message.totalVotingPower;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => exports.Validator.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = exports.Validator.fromAmino(object.proposer);
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.totalVotingPower = BigInt(object.total_voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.proposer = message.proposer ? exports.Validator.toAmino(message.proposer) : undefined;
        obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorSet",
            value: exports.ValidatorSet.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorSet.typeUrl, exports.ValidatorSet);
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        pubKey: keys_1.PublicKey.fromPartial({}),
        votingPower: BigInt(0),
        proposerPriority: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/tendermint.types.Validator",
    is(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && keys_1.PublicKey.is(o.pubKey) && typeof o.votingPower === "bigint" && typeof o.proposerPriority === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && keys_1.PublicKey.isSDK(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && keys_1.PublicKey.isAmino(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPower = reader.int64();
                    break;
                case 4:
                    message.proposerPriority = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? (0, helpers_1.bytesFromBase64)(object.address) : new Uint8Array(),
            pubKey: (0, helpers_1.isSet)(object.pubKey) ? keys_1.PublicKey.fromJSON(object.pubKey) : undefined,
            votingPower: (0, helpers_1.isSet)(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0),
            proposerPriority: (0, helpers_1.isSet)(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = (0, helpers_1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
        message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
        message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? keys_1.PublicKey.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pubKey: object.pub_key ? keys_1.PublicKey.fromSDK(object.pub_key) : undefined,
            votingPower: object?.voting_power,
            proposerPriority: object?.proposer_priority
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pubKey !== undefined && (obj.pub_key = message.pubKey ? keys_1.PublicKey.toSDK(message.pubKey) : undefined);
        obj.voting_power = message.votingPower;
        obj.proposer_priority = message.proposerPriority;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = (0, helpers_1.bytesFromBase64)(object.address);
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = keys_1.PublicKey.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.votingPower = BigInt(object.voting_power);
        }
        if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
            message.proposerPriority = BigInt(object.proposer_priority);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? (0, helpers_1.base64FromBytes)(message.address) : undefined;
        obj.pub_key = message.pubKey ? keys_1.PublicKey.toAmino(message.pubKey) : undefined;
        obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
        obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Validator.typeUrl, exports.Validator);
function createBaseSimpleValidator() {
    return {
        pubKey: undefined,
        votingPower: BigInt(0)
    };
}
exports.SimpleValidator = {
    typeUrl: "/tendermint.types.SimpleValidator",
    is(o) {
        return o && (o.$typeUrl === exports.SimpleValidator.typeUrl || typeof o.votingPower === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(16).int64(message.votingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimpleValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.votingPower = reader.int64();
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
            pubKey: (0, helpers_1.isSet)(object.pubKey) ? keys_1.PublicKey.fromJSON(object.pubKey) : undefined,
            votingPower: (0, helpers_1.isSet)(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
        message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimpleValidator();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? keys_1.PublicKey.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pubKey: object.pub_key ? keys_1.PublicKey.fromSDK(object.pub_key) : undefined,
            votingPower: object?.voting_power
        };
    },
    toSDK(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pub_key = message.pubKey ? keys_1.PublicKey.toSDK(message.pubKey) : undefined);
        obj.voting_power = message.votingPower;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSimpleValidator();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = keys_1.PublicKey.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.votingPower = BigInt(object.voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? keys_1.PublicKey.toAmino(message.pubKey) : undefined;
        obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimpleValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SimpleValidator.decode(message.value);
    },
    toProto(message) {
        return exports.SimpleValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SimpleValidator",
            value: exports.SimpleValidator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SimpleValidator.typeUrl, exports.SimpleValidator);
