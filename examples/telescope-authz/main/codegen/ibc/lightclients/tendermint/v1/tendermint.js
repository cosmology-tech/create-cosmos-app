"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = void 0;
const duration_1 = require("../../../../google/protobuf/duration");
const client_1 = require("../../../core/client/v1/client");
const proofs_1 = require("../../../../confio/proofs");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const commitment_1 = require("../../../core/commitment/v1/commitment");
const types_1 = require("../../../../tendermint/types/types");
const validator_1 = require("../../../../tendermint/types/validator");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseClientState() {
    return {
        chainId: "",
        trustLevel: exports.Fraction.fromPartial({}),
        trustingPeriod: duration_1.Duration.fromPartial({}),
        unbondingPeriod: duration_1.Duration.fromPartial({}),
        maxClockDrift: duration_1.Duration.fromPartial({}),
        frozenHeight: client_1.Height.fromPartial({}),
        latestHeight: client_1.Height.fromPartial({}),
        proofSpecs: [],
        upgradePath: [],
        allowUpdateAfterExpiry: false,
        allowUpdateAfterMisbehaviour: false
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
    aminoType: "cosmos-sdk/ClientState",
    is(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || typeof o.chainId === "string" && exports.Fraction.is(o.trustLevel) && duration_1.Duration.is(o.trustingPeriod) && duration_1.Duration.is(o.unbondingPeriod) && duration_1.Duration.is(o.maxClockDrift) && client_1.Height.is(o.frozenHeight) && client_1.Height.is(o.latestHeight) && Array.isArray(o.proofSpecs) && (!o.proofSpecs.length || proofs_1.ProofSpec.is(o.proofSpecs[0])) && Array.isArray(o.upgradePath) && (!o.upgradePath.length || typeof o.upgradePath[0] === "string") && typeof o.allowUpdateAfterExpiry === "boolean" && typeof o.allowUpdateAfterMisbehaviour === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || typeof o.chain_id === "string" && exports.Fraction.isSDK(o.trust_level) && duration_1.Duration.isSDK(o.trusting_period) && duration_1.Duration.isSDK(o.unbonding_period) && duration_1.Duration.isSDK(o.max_clock_drift) && client_1.Height.isSDK(o.frozen_height) && client_1.Height.isSDK(o.latest_height) && Array.isArray(o.proof_specs) && (!o.proof_specs.length || proofs_1.ProofSpec.isSDK(o.proof_specs[0])) && Array.isArray(o.upgrade_path) && (!o.upgrade_path.length || typeof o.upgrade_path[0] === "string") && typeof o.allow_update_after_expiry === "boolean" && typeof o.allow_update_after_misbehaviour === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || typeof o.chain_id === "string" && exports.Fraction.isAmino(o.trust_level) && duration_1.Duration.isAmino(o.trusting_period) && duration_1.Duration.isAmino(o.unbonding_period) && duration_1.Duration.isAmino(o.max_clock_drift) && client_1.Height.isAmino(o.frozen_height) && client_1.Height.isAmino(o.latest_height) && Array.isArray(o.proof_specs) && (!o.proof_specs.length || proofs_1.ProofSpec.isAmino(o.proof_specs[0])) && Array.isArray(o.upgrade_path) && (!o.upgrade_path.length || typeof o.upgrade_path[0] === "string") && typeof o.allow_update_after_expiry === "boolean" && typeof o.allow_update_after_misbehaviour === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.trustLevel !== undefined) {
            exports.Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustingPeriod !== undefined) {
            duration_1.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbondingPeriod !== undefined) {
            duration_1.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxClockDrift !== undefined) {
            duration_1.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozenHeight !== undefined) {
            client_1.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestHeight !== undefined) {
            client_1.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.proofSpecs) {
            proofs_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.upgradePath) {
            writer.uint32(74).string(v);
        }
        if (message.allowUpdateAfterExpiry === true) {
            writer.uint32(80).bool(message.allowUpdateAfterExpiry);
        }
        if (message.allowUpdateAfterMisbehaviour === true) {
            writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.trustLevel = exports.Fraction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unbondingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxClockDrift = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.frozenHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.latestHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proofSpecs.push(proofs_1.ProofSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.upgradePath.push(reader.string());
                    break;
                case 10:
                    message.allowUpdateAfterExpiry = reader.bool();
                    break;
                case 11:
                    message.allowUpdateAfterMisbehaviour = reader.bool();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            trustLevel: (0, helpers_1.isSet)(object.trustLevel) ? exports.Fraction.fromJSON(object.trustLevel) : undefined,
            trustingPeriod: (0, helpers_1.isSet)(object.trustingPeriod) ? duration_1.Duration.fromJSON(object.trustingPeriod) : undefined,
            unbondingPeriod: (0, helpers_1.isSet)(object.unbondingPeriod) ? duration_1.Duration.fromJSON(object.unbondingPeriod) : undefined,
            maxClockDrift: (0, helpers_1.isSet)(object.maxClockDrift) ? duration_1.Duration.fromJSON(object.maxClockDrift) : undefined,
            frozenHeight: (0, helpers_1.isSet)(object.frozenHeight) ? client_1.Height.fromJSON(object.frozenHeight) : undefined,
            latestHeight: (0, helpers_1.isSet)(object.latestHeight) ? client_1.Height.fromJSON(object.latestHeight) : undefined,
            proofSpecs: Array.isArray(object?.proofSpecs) ? object.proofSpecs.map((e) => proofs_1.ProofSpec.fromJSON(e)) : [],
            upgradePath: Array.isArray(object?.upgradePath) ? object.upgradePath.map((e) => String(e)) : [],
            allowUpdateAfterExpiry: (0, helpers_1.isSet)(object.allowUpdateAfterExpiry) ? Boolean(object.allowUpdateAfterExpiry) : false,
            allowUpdateAfterMisbehaviour: (0, helpers_1.isSet)(object.allowUpdateAfterMisbehaviour) ? Boolean(object.allowUpdateAfterMisbehaviour) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.trustLevel !== undefined && (obj.trustLevel = message.trustLevel ? exports.Fraction.toJSON(message.trustLevel) : undefined);
        message.trustingPeriod !== undefined && (obj.trustingPeriod = message.trustingPeriod ? duration_1.Duration.toJSON(message.trustingPeriod) : undefined);
        message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod ? duration_1.Duration.toJSON(message.unbondingPeriod) : undefined);
        message.maxClockDrift !== undefined && (obj.maxClockDrift = message.maxClockDrift ? duration_1.Duration.toJSON(message.maxClockDrift) : undefined);
        message.frozenHeight !== undefined && (obj.frozenHeight = message.frozenHeight ? client_1.Height.toJSON(message.frozenHeight) : undefined);
        message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? client_1.Height.toJSON(message.latestHeight) : undefined);
        if (message.proofSpecs) {
            obj.proofSpecs = message.proofSpecs.map(e => e ? proofs_1.ProofSpec.toJSON(e) : undefined);
        }
        else {
            obj.proofSpecs = [];
        }
        if (message.upgradePath) {
            obj.upgradePath = message.upgradePath.map(e => e);
        }
        else {
            obj.upgradePath = [];
        }
        message.allowUpdateAfterExpiry !== undefined && (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
        message.allowUpdateAfterMisbehaviour !== undefined && (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.chainId = object.chainId ?? "";
        message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? exports.Fraction.fromPartial(object.trustLevel) : undefined;
        message.trustingPeriod = object.trustingPeriod !== undefined && object.trustingPeriod !== null ? duration_1.Duration.fromPartial(object.trustingPeriod) : undefined;
        message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? duration_1.Duration.fromPartial(object.unbondingPeriod) : undefined;
        message.maxClockDrift = object.maxClockDrift !== undefined && object.maxClockDrift !== null ? duration_1.Duration.fromPartial(object.maxClockDrift) : undefined;
        message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? client_1.Height.fromPartial(object.frozenHeight) : undefined;
        message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? client_1.Height.fromPartial(object.latestHeight) : undefined;
        message.proofSpecs = object.proofSpecs?.map(e => proofs_1.ProofSpec.fromPartial(e)) || [];
        message.upgradePath = object.upgradePath?.map(e => e) || [];
        message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
        message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            chainId: object?.chain_id,
            trustLevel: object.trust_level ? exports.Fraction.fromSDK(object.trust_level) : undefined,
            trustingPeriod: object.trusting_period ? duration_1.Duration.fromSDK(object.trusting_period) : undefined,
            unbondingPeriod: object.unbonding_period ? duration_1.Duration.fromSDK(object.unbonding_period) : undefined,
            maxClockDrift: object.max_clock_drift ? duration_1.Duration.fromSDK(object.max_clock_drift) : undefined,
            frozenHeight: object.frozen_height ? client_1.Height.fromSDK(object.frozen_height) : undefined,
            latestHeight: object.latest_height ? client_1.Height.fromSDK(object.latest_height) : undefined,
            proofSpecs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e) => proofs_1.ProofSpec.fromSDK(e)) : [],
            upgradePath: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e) => e) : [],
            allowUpdateAfterExpiry: object?.allow_update_after_expiry,
            allowUpdateAfterMisbehaviour: object?.allow_update_after_misbehaviour
        };
    },
    toSDK(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        message.trustLevel !== undefined && (obj.trust_level = message.trustLevel ? exports.Fraction.toSDK(message.trustLevel) : undefined);
        message.trustingPeriod !== undefined && (obj.trusting_period = message.trustingPeriod ? duration_1.Duration.toSDK(message.trustingPeriod) : undefined);
        message.unbondingPeriod !== undefined && (obj.unbonding_period = message.unbondingPeriod ? duration_1.Duration.toSDK(message.unbondingPeriod) : undefined);
        message.maxClockDrift !== undefined && (obj.max_clock_drift = message.maxClockDrift ? duration_1.Duration.toSDK(message.maxClockDrift) : undefined);
        message.frozenHeight !== undefined && (obj.frozen_height = message.frozenHeight ? client_1.Height.toSDK(message.frozenHeight) : undefined);
        message.latestHeight !== undefined && (obj.latest_height = message.latestHeight ? client_1.Height.toSDK(message.latestHeight) : undefined);
        if (message.proofSpecs) {
            obj.proof_specs = message.proofSpecs.map(e => e ? proofs_1.ProofSpec.toSDK(e) : undefined);
        }
        else {
            obj.proof_specs = [];
        }
        if (message.upgradePath) {
            obj.upgrade_path = message.upgradePath.map(e => e);
        }
        else {
            obj.upgrade_path = [];
        }
        obj.allow_update_after_expiry = message.allowUpdateAfterExpiry;
        obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.trust_level !== undefined && object.trust_level !== null) {
            message.trustLevel = exports.Fraction.fromAmino(object.trust_level);
        }
        if (object.trusting_period !== undefined && object.trusting_period !== null) {
            message.trustingPeriod = duration_1.Duration.fromAmino(object.trusting_period);
        }
        if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
            message.unbondingPeriod = duration_1.Duration.fromAmino(object.unbonding_period);
        }
        if (object.max_clock_drift !== undefined && object.max_clock_drift !== null) {
            message.maxClockDrift = duration_1.Duration.fromAmino(object.max_clock_drift);
        }
        if (object.frozen_height !== undefined && object.frozen_height !== null) {
            message.frozenHeight = client_1.Height.fromAmino(object.frozen_height);
        }
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latestHeight = client_1.Height.fromAmino(object.latest_height);
        }
        message.proofSpecs = object.proof_specs?.map(e => proofs_1.ProofSpec.fromAmino(e)) || [];
        message.upgradePath = object.upgrade_path?.map(e => e) || [];
        if (object.allow_update_after_expiry !== undefined && object.allow_update_after_expiry !== null) {
            message.allowUpdateAfterExpiry = object.allow_update_after_expiry;
        }
        if (object.allow_update_after_misbehaviour !== undefined && object.allow_update_after_misbehaviour !== null) {
            message.allowUpdateAfterMisbehaviour = object.allow_update_after_misbehaviour;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.trust_level = message.trustLevel ? exports.Fraction.toAmino(message.trustLevel) : undefined;
        obj.trusting_period = message.trustingPeriod ? duration_1.Duration.toAmino(message.trustingPeriod) : undefined;
        obj.unbonding_period = message.unbondingPeriod ? duration_1.Duration.toAmino(message.unbondingPeriod) : undefined;
        obj.max_clock_drift = message.maxClockDrift ? duration_1.Duration.toAmino(message.maxClockDrift) : undefined;
        obj.frozen_height = message.frozenHeight ? client_1.Height.toAmino(message.frozenHeight) : {};
        obj.latest_height = message.latestHeight ? client_1.Height.toAmino(message.latestHeight) : {};
        if (message.proofSpecs) {
            obj.proof_specs = message.proofSpecs.map(e => e ? proofs_1.ProofSpec.toAmino(e) : undefined);
        }
        else {
            obj.proof_specs = [];
        }
        if (message.upgradePath) {
            obj.upgrade_path = message.upgradePath.map(e => e);
        }
        else {
            obj.upgrade_path = [];
        }
        obj.allow_update_after_expiry = message.allowUpdateAfterExpiry;
        obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: exports.ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientState.decode(message.value);
    },
    toProto(message) {
        return exports.ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
            value: exports.ClientState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClientState.typeUrl, exports.ClientState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClientState.aminoType, exports.ClientState.typeUrl);
function createBaseConsensusState() {
    return {
        timestamp: new Date(),
        root: commitment_1.MerkleRoot.fromPartial({}),
        nextValidatorsHash: new Uint8Array()
    };
}
exports.ConsensusState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
    aminoType: "cosmos-sdk/ConsensusState",
    is(o) {
        return o && (o.$typeUrl === exports.ConsensusState.typeUrl || timestamp_1.Timestamp.is(o.timestamp) && commitment_1.MerkleRoot.is(o.root) && (o.nextValidatorsHash instanceof Uint8Array || typeof o.nextValidatorsHash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ConsensusState.typeUrl || timestamp_1.Timestamp.isSDK(o.timestamp) && commitment_1.MerkleRoot.isSDK(o.root) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ConsensusState.typeUrl || timestamp_1.Timestamp.isAmino(o.timestamp) && commitment_1.MerkleRoot.isAmino(o.root) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            commitment_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(26).bytes(message.nextValidatorsHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.root = commitment_1.MerkleRoot.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextValidatorsHash = reader.bytes();
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
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined,
            root: (0, helpers_1.isSet)(object.root) ? commitment_1.MerkleRoot.fromJSON(object.root) : undefined,
            nextValidatorsHash: (0, helpers_1.isSet)(object.nextValidatorsHash) ? (0, helpers_1.bytesFromBase64)(object.nextValidatorsHash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.root !== undefined && (obj.root = message.root ? commitment_1.MerkleRoot.toJSON(message.root) : undefined);
        message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = (0, helpers_1.base64FromBytes)(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.timestamp = object.timestamp ?? undefined;
        message.root = object.root !== undefined && object.root !== null ? commitment_1.MerkleRoot.fromPartial(object.root) : undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            timestamp: object.timestamp ?? undefined,
            root: object.root ? commitment_1.MerkleRoot.fromSDK(object.root) : undefined,
            nextValidatorsHash: object?.next_validators_hash
        };
    },
    toSDK(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        message.root !== undefined && (obj.root = message.root ? commitment_1.MerkleRoot.toSDK(message.root) : undefined);
        obj.next_validators_hash = message.nextValidatorsHash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConsensusState();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.root !== undefined && object.root !== null) {
            message.root = commitment_1.MerkleRoot.fromAmino(object.root);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = (0, helpers_1.bytesFromBase64)(object.next_validators_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.root = message.root ? commitment_1.MerkleRoot.toAmino(message.root) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? (0, helpers_1.base64FromBytes)(message.nextValidatorsHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: exports.ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusState.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
            value: exports.ConsensusState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConsensusState.typeUrl, exports.ConsensusState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConsensusState.aminoType, exports.ConsensusState.typeUrl);
function createBaseMisbehaviour() {
    return {
        clientId: "",
        header1: undefined,
        header2: undefined
    };
}
exports.Misbehaviour = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
    aminoType: "cosmos-sdk/Misbehaviour",
    is(o) {
        return o && (o.$typeUrl === exports.Misbehaviour.typeUrl || typeof o.clientId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Misbehaviour.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Misbehaviour.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header1 !== undefined) {
            exports.Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            exports.Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.header1 = exports.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header2 = exports.Header.decode(reader, reader.uint32());
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
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : "",
            header1: (0, helpers_1.isSet)(object.header1) ? exports.Header.fromJSON(object.header1) : undefined,
            header2: (0, helpers_1.isSet)(object.header2) ? exports.Header.fromJSON(object.header2) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.header1 !== undefined && (obj.header1 = message.header1 ? exports.Header.toJSON(message.header1) : undefined);
        message.header2 !== undefined && (obj.header2 = message.header2 ? exports.Header.toJSON(message.header2) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.clientId = object.clientId ?? "";
        message.header1 = object.header1 !== undefined && object.header1 !== null ? exports.Header.fromPartial(object.header1) : undefined;
        message.header2 = object.header2 !== undefined && object.header2 !== null ? exports.Header.fromPartial(object.header2) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            clientId: object?.client_id,
            header1: object.header_1 ? exports.Header.fromSDK(object.header_1) : undefined,
            header2: object.header_2 ? exports.Header.fromSDK(object.header_2) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.clientId;
        message.header1 !== undefined && (obj.header_1 = message.header1 ? exports.Header.toSDK(message.header1) : undefined);
        message.header2 !== undefined && (obj.header_2 = message.header2 ? exports.Header.toSDK(message.header2) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMisbehaviour();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.header_1 !== undefined && object.header_1 !== null) {
            message.header1 = exports.Header.fromAmino(object.header_1);
        }
        if (object.header_2 !== undefined && object.header_2 !== null) {
            message.header2 = exports.Header.fromAmino(object.header_2);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.header_1 = message.header1 ? exports.Header.toAmino(message.header1) : undefined;
        obj.header_2 = message.header2 ? exports.Header.toAmino(message.header2) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: exports.Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return exports.Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
            value: exports.Misbehaviour.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Misbehaviour.typeUrl, exports.Misbehaviour);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Misbehaviour.aminoType, exports.Misbehaviour.typeUrl);
function createBaseHeader() {
    return {
        signedHeader: undefined,
        validatorSet: undefined,
        trustedHeight: client_1.Height.fromPartial({}),
        trustedValidators: undefined
    };
}
exports.Header = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Header",
    aminoType: "cosmos-sdk/Header",
    is(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || client_1.Height.is(o.trustedHeight));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || client_1.Height.isSDK(o.trusted_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || client_1.Height.isAmino(o.trusted_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signedHeader !== undefined) {
            types_1.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustedHeight !== undefined) {
            client_1.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.trustedValidators !== undefined) {
            validator_1.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = types_1.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustedHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trustedValidators = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signedHeader: (0, helpers_1.isSet)(object.signedHeader) ? types_1.SignedHeader.fromJSON(object.signedHeader) : undefined,
            validatorSet: (0, helpers_1.isSet)(object.validatorSet) ? validator_1.ValidatorSet.fromJSON(object.validatorSet) : undefined,
            trustedHeight: (0, helpers_1.isSet)(object.trustedHeight) ? client_1.Height.fromJSON(object.trustedHeight) : undefined,
            trustedValidators: (0, helpers_1.isSet)(object.trustedValidators) ? validator_1.ValidatorSet.fromJSON(object.trustedValidators) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? types_1.SignedHeader.toJSON(message.signedHeader) : undefined);
        message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? validator_1.ValidatorSet.toJSON(message.validatorSet) : undefined);
        message.trustedHeight !== undefined && (obj.trustedHeight = message.trustedHeight ? client_1.Height.toJSON(message.trustedHeight) : undefined);
        message.trustedValidators !== undefined && (obj.trustedValidators = message.trustedValidators ? validator_1.ValidatorSet.toJSON(message.trustedValidators) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? types_1.SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? validator_1.ValidatorSet.fromPartial(object.validatorSet) : undefined;
        message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? client_1.Height.fromPartial(object.trustedHeight) : undefined;
        message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? validator_1.ValidatorSet.fromPartial(object.trustedValidators) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            signedHeader: object.signed_header ? types_1.SignedHeader.fromSDK(object.signed_header) : undefined,
            validatorSet: object.validator_set ? validator_1.ValidatorSet.fromSDK(object.validator_set) : undefined,
            trustedHeight: object.trusted_height ? client_1.Height.fromSDK(object.trusted_height) : undefined,
            trustedValidators: object.trusted_validators ? validator_1.ValidatorSet.fromSDK(object.trusted_validators) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.signedHeader !== undefined && (obj.signed_header = message.signedHeader ? types_1.SignedHeader.toSDK(message.signedHeader) : undefined);
        message.validatorSet !== undefined && (obj.validator_set = message.validatorSet ? validator_1.ValidatorSet.toSDK(message.validatorSet) : undefined);
        message.trustedHeight !== undefined && (obj.trusted_height = message.trustedHeight ? client_1.Height.toSDK(message.trustedHeight) : undefined);
        message.trustedValidators !== undefined && (obj.trusted_validators = message.trustedValidators ? validator_1.ValidatorSet.toSDK(message.trustedValidators) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.signed_header !== undefined && object.signed_header !== null) {
            message.signedHeader = types_1.SignedHeader.fromAmino(object.signed_header);
        }
        if (object.validator_set !== undefined && object.validator_set !== null) {
            message.validatorSet = validator_1.ValidatorSet.fromAmino(object.validator_set);
        }
        if (object.trusted_height !== undefined && object.trusted_height !== null) {
            message.trustedHeight = client_1.Height.fromAmino(object.trusted_height);
        }
        if (object.trusted_validators !== undefined && object.trusted_validators !== null) {
            message.trustedValidators = validator_1.ValidatorSet.fromAmino(object.trusted_validators);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signedHeader ? types_1.SignedHeader.toAmino(message.signedHeader) : undefined;
        obj.validator_set = message.validatorSet ? validator_1.ValidatorSet.toAmino(message.validatorSet) : undefined;
        obj.trusted_height = message.trustedHeight ? client_1.Height.toAmino(message.trustedHeight) : {};
        obj.trusted_validators = message.trustedValidators ? validator_1.ValidatorSet.toAmino(message.trustedValidators) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: exports.Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Header.typeUrl, exports.Header);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Header.aminoType, exports.Header.typeUrl);
function createBaseFraction() {
    return {
        numerator: BigInt(0),
        denominator: BigInt(0)
    };
}
exports.Fraction = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
    aminoType: "cosmos-sdk/Fraction",
    is(o) {
        return o && (o.$typeUrl === exports.Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numerator !== BigInt(0)) {
            writer.uint32(8).uint64(message.numerator);
        }
        if (message.denominator !== BigInt(0)) {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFraction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numerator = reader.uint64();
                    break;
                case 2:
                    message.denominator = reader.uint64();
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
            numerator: (0, helpers_1.isSet)(object.numerator) ? BigInt(object.numerator.toString()) : BigInt(0),
            denominator: (0, helpers_1.isSet)(object.denominator) ? BigInt(object.denominator.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.numerator !== undefined && (obj.numerator = (message.numerator || BigInt(0)).toString());
        message.denominator !== undefined && (obj.denominator = (message.denominator || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFraction();
        message.numerator = object.numerator !== undefined && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
        message.denominator = object.denominator !== undefined && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            numerator: object?.numerator,
            denominator: object?.denominator
        };
    },
    toSDK(message) {
        const obj = {};
        obj.numerator = message.numerator;
        obj.denominator = message.denominator;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseFraction();
        if (object.numerator !== undefined && object.numerator !== null) {
            message.numerator = BigInt(object.numerator);
        }
        if (object.denominator !== undefined && object.denominator !== null) {
            message.denominator = BigInt(object.denominator);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.numerator = message.numerator ? message.numerator.toString() : undefined;
        obj.denominator = message.denominator ? message.denominator.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Fraction.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fraction",
            value: exports.Fraction.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Fraction.decode(message.value);
    },
    toProto(message) {
        return exports.Fraction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
            value: exports.Fraction.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Fraction.typeUrl, exports.Fraction);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Fraction.aminoType, exports.Fraction.typeUrl);
