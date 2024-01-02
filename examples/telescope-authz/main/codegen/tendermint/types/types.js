"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.signedMsgTypeToJSON = exports.signedMsgTypeFromJSON = exports.SignedMsgTypeAmino = exports.SignedMsgTypeSDKType = exports.SignedMsgType = exports.blockIDFlagToJSON = exports.blockIDFlagFromJSON = exports.BlockIDFlagAmino = exports.BlockIDFlagSDKType = exports.BlockIDFlag = void 0;
const proof_1 = require("../crypto/proof");
const types_1 = require("../version/types");
const timestamp_1 = require("../../google/protobuf/timestamp");
const validator_1 = require("./validator");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
/** BlockIdFlag indicates which BlcokID the signature is for */
var BlockIDFlag;
(function (BlockIDFlag) {
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (exports.BlockIDFlag = BlockIDFlag = {}));
exports.BlockIDFlagSDKType = BlockIDFlag;
exports.BlockIDFlagAmino = BlockIDFlag;
function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.blockIDFlagToJSON = blockIDFlagToJSON;
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (exports.SignedMsgType = SignedMsgType = {}));
exports.SignedMsgTypeSDKType = SignedMsgType;
exports.SignedMsgTypeAmino = SignedMsgType;
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
exports.PartSetHeader = {
    typeUrl: "/tendermint.types.PartSetHeader",
    is(o) {
        return o && (o.$typeUrl === exports.PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            total: (0, helpers_1.isSet)(object.total) ? Number(object.total) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            total: object?.total,
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.total = message.total;
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePartSetHeader();
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PartSetHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PartSetHeader.decode(message.value);
    },
    toProto(message) {
        return exports.PartSetHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.PartSetHeader",
            value: exports.PartSetHeader.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PartSetHeader.typeUrl, exports.PartSetHeader);
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: proof_1.Proof.fromPartial({})
    };
}
exports.Part = {
    typeUrl: "/tendermint.types.Part",
    is(o) {
        return o && (o.$typeUrl === exports.Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && proof_1.Proof.is(o.proof));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && proof_1.Proof.isSDK(o.proof));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && proof_1.Proof.isAmino(o.proof));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            bytes: (0, helpers_1.isSet)(object.bytes) ? (0, helpers_1.bytesFromBase64)(object.bytes) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.bytes !== undefined && (obj.bytes = (0, helpers_1.base64FromBytes)(message.bytes !== undefined ? message.bytes : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index,
            bytes: object?.bytes,
            proof: object.proof ? proof_1.Proof.fromSDK(object.proof) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        obj.bytes = message.bytes;
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toSDK(message.proof) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBasePart();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = (0, helpers_1.bytesFromBase64)(object.bytes);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.bytes = message.bytes ? (0, helpers_1.base64FromBytes)(message.bytes) : undefined;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Part.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Part.decode(message.value);
    },
    toProto(message) {
        return exports.Part.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Part",
            value: exports.Part.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Part.typeUrl, exports.Part);
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        partSetHeader: exports.PartSetHeader.fromPartial({})
    };
}
exports.BlockID = {
    typeUrl: "/tendermint.types.BlockID",
    is(o) {
        return o && (o.$typeUrl === exports.BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.PartSetHeader.is(o.partSetHeader));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.PartSetHeader.isSDK(o.part_set_header));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.PartSetHeader.isAmino(o.part_set_header));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            exports.PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.partSetHeader = exports.PartSetHeader.decode(reader, reader.uint32());
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            partSetHeader: (0, helpers_1.isSet)(object.partSetHeader) ? exports.PartSetHeader.fromJSON(object.partSetHeader) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.partSetHeader !== undefined && (obj.partSetHeader = message.partSetHeader ? exports.PartSetHeader.toJSON(message.partSetHeader) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? exports.PartSetHeader.fromPartial(object.partSetHeader) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash,
            partSetHeader: object.part_set_header ? exports.PartSetHeader.fromSDK(object.part_set_header) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        message.partSetHeader !== undefined && (obj.part_set_header = message.partSetHeader ? exports.PartSetHeader.toSDK(message.partSetHeader) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBlockID();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.part_set_header !== undefined && object.part_set_header !== null) {
            message.partSetHeader = exports.PartSetHeader.fromAmino(object.part_set_header);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.part_set_header = message.partSetHeader ? exports.PartSetHeader.toAmino(message.partSetHeader) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockID.decode(message.value);
    },
    toProto(message) {
        return exports.BlockID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockID",
            value: exports.BlockID.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BlockID.typeUrl, exports.BlockID);
function createBaseHeader() {
    return {
        version: types_1.Consensus.fromPartial({}),
        chainId: "",
        height: BigInt(0),
        time: new Date(),
        lastBlockId: exports.BlockID.fromPartial({}),
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.Header = {
    typeUrl: "/tendermint.types.Header",
    is(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || types_1.Consensus.is(o.version) && typeof o.chainId === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.is(o.time) && exports.BlockID.is(o.lastBlockId) && (o.lastCommitHash instanceof Uint8Array || typeof o.lastCommitHash === "string") && (o.dataHash instanceof Uint8Array || typeof o.dataHash === "string") && (o.validatorsHash instanceof Uint8Array || typeof o.validatorsHash === "string") && (o.nextValidatorsHash instanceof Uint8Array || typeof o.nextValidatorsHash === "string") && (o.consensusHash instanceof Uint8Array || typeof o.consensusHash === "string") && (o.appHash instanceof Uint8Array || typeof o.appHash === "string") && (o.lastResultsHash instanceof Uint8Array || typeof o.lastResultsHash === "string") && (o.evidenceHash instanceof Uint8Array || typeof o.evidenceHash === "string") && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || types_1.Consensus.isSDK(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.isSDK(o.time) && exports.BlockID.isSDK(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || types_1.Consensus.isAmino(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.isAmino(o.time) && exports.BlockID.isAmino(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            exports.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(114).bytes(message.proposerAddress);
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
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastBlockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastCommitHash = reader.bytes();
                    break;
                case 7:
                    message.dataHash = reader.bytes();
                    break;
                case 8:
                    message.validatorsHash = reader.bytes();
                    break;
                case 9:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 10:
                    message.consensusHash = reader.bytes();
                    break;
                case 11:
                    message.appHash = reader.bytes();
                    break;
                case 12:
                    message.lastResultsHash = reader.bytes();
                    break;
                case 13:
                    message.evidenceHash = reader.bytes();
                    break;
                case 14:
                    message.proposerAddress = reader.bytes();
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
            version: (0, helpers_1.isSet)(object.version) ? types_1.Consensus.fromJSON(object.version) : undefined,
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? new Date(object.time) : undefined,
            lastBlockId: (0, helpers_1.isSet)(object.lastBlockId) ? exports.BlockID.fromJSON(object.lastBlockId) : undefined,
            lastCommitHash: (0, helpers_1.isSet)(object.lastCommitHash) ? (0, helpers_1.bytesFromBase64)(object.lastCommitHash) : new Uint8Array(),
            dataHash: (0, helpers_1.isSet)(object.dataHash) ? (0, helpers_1.bytesFromBase64)(object.dataHash) : new Uint8Array(),
            validatorsHash: (0, helpers_1.isSet)(object.validatorsHash) ? (0, helpers_1.bytesFromBase64)(object.validatorsHash) : new Uint8Array(),
            nextValidatorsHash: (0, helpers_1.isSet)(object.nextValidatorsHash) ? (0, helpers_1.bytesFromBase64)(object.nextValidatorsHash) : new Uint8Array(),
            consensusHash: (0, helpers_1.isSet)(object.consensusHash) ? (0, helpers_1.bytesFromBase64)(object.consensusHash) : new Uint8Array(),
            appHash: (0, helpers_1.isSet)(object.appHash) ? (0, helpers_1.bytesFromBase64)(object.appHash) : new Uint8Array(),
            lastResultsHash: (0, helpers_1.isSet)(object.lastResultsHash) ? (0, helpers_1.bytesFromBase64)(object.lastResultsHash) : new Uint8Array(),
            evidenceHash: (0, helpers_1.isSet)(object.evidenceHash) ? (0, helpers_1.bytesFromBase64)(object.evidenceHash) : new Uint8Array(),
            proposerAddress: (0, helpers_1.isSet)(object.proposerAddress) ? (0, helpers_1.bytesFromBase64)(object.proposerAddress) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? types_1.Consensus.toJSON(message.version) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? exports.BlockID.toJSON(message.lastBlockId) : undefined);
        message.lastCommitHash !== undefined && (obj.lastCommitHash = (0, helpers_1.base64FromBytes)(message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array()));
        message.dataHash !== undefined && (obj.dataHash = (0, helpers_1.base64FromBytes)(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
        message.validatorsHash !== undefined && (obj.validatorsHash = (0, helpers_1.base64FromBytes)(message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array()));
        message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = (0, helpers_1.base64FromBytes)(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
        message.consensusHash !== undefined && (obj.consensusHash = (0, helpers_1.base64FromBytes)(message.consensusHash !== undefined ? message.consensusHash : new Uint8Array()));
        message.appHash !== undefined && (obj.appHash = (0, helpers_1.base64FromBytes)(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        message.lastResultsHash !== undefined && (obj.lastResultsHash = (0, helpers_1.base64FromBytes)(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
        message.evidenceHash !== undefined && (obj.evidenceHash = (0, helpers_1.base64FromBytes)(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
        message.proposerAddress !== undefined && (obj.proposerAddress = (0, helpers_1.base64FromBytes)(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? types_1.Consensus.fromPartial(object.version) : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? exports.BlockID.fromPartial(object.lastBlockId) : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.validatorsHash = object.validatorsHash ?? new Uint8Array();
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.consensusHash = object.consensusHash ?? new Uint8Array();
        message.appHash = object.appHash ?? new Uint8Array();
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            version: object.version ? types_1.Consensus.fromSDK(object.version) : undefined,
            chainId: object?.chain_id,
            height: object?.height,
            time: object.time ?? undefined,
            lastBlockId: object.last_block_id ? exports.BlockID.fromSDK(object.last_block_id) : undefined,
            lastCommitHash: object?.last_commit_hash,
            dataHash: object?.data_hash,
            validatorsHash: object?.validators_hash,
            nextValidatorsHash: object?.next_validators_hash,
            consensusHash: object?.consensus_hash,
            appHash: object?.app_hash,
            lastResultsHash: object?.last_results_hash,
            evidenceHash: object?.evidence_hash,
            proposerAddress: object?.proposer_address
        };
    },
    toSDK(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? types_1.Consensus.toSDK(message.version) : undefined);
        obj.chain_id = message.chainId;
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ?? undefined);
        message.lastBlockId !== undefined && (obj.last_block_id = message.lastBlockId ? exports.BlockID.toSDK(message.lastBlockId) : undefined);
        obj.last_commit_hash = message.lastCommitHash;
        obj.data_hash = message.dataHash;
        obj.validators_hash = message.validatorsHash;
        obj.next_validators_hash = message.nextValidatorsHash;
        obj.consensus_hash = message.consensusHash;
        obj.app_hash = message.appHash;
        obj.last_results_hash = message.lastResultsHash;
        obj.evidence_hash = message.evidenceHash;
        obj.proposer_address = message.proposerAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.version !== undefined && object.version !== null) {
            message.version = types_1.Consensus.fromAmino(object.version);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.last_block_id !== undefined && object.last_block_id !== null) {
            message.lastBlockId = exports.BlockID.fromAmino(object.last_block_id);
        }
        if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
            message.lastCommitHash = (0, helpers_1.bytesFromBase64)(object.last_commit_hash);
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.dataHash = (0, helpers_1.bytesFromBase64)(object.data_hash);
        }
        if (object.validators_hash !== undefined && object.validators_hash !== null) {
            message.validatorsHash = (0, helpers_1.bytesFromBase64)(object.validators_hash);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = (0, helpers_1.bytesFromBase64)(object.next_validators_hash);
        }
        if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
            message.consensusHash = (0, helpers_1.bytesFromBase64)(object.consensus_hash);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
            message.lastResultsHash = (0, helpers_1.bytesFromBase64)(object.last_results_hash);
        }
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidenceHash = (0, helpers_1.bytesFromBase64)(object.evidence_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? types_1.Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chainId;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.last_block_id = message.lastBlockId ? exports.BlockID.toAmino(message.lastBlockId) : undefined;
        obj.last_commit_hash = message.lastCommitHash ? (0, helpers_1.base64FromBytes)(message.lastCommitHash) : undefined;
        obj.data_hash = message.dataHash ? (0, helpers_1.base64FromBytes)(message.dataHash) : undefined;
        obj.validators_hash = message.validatorsHash ? (0, helpers_1.base64FromBytes)(message.validatorsHash) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? (0, helpers_1.base64FromBytes)(message.nextValidatorsHash) : undefined;
        obj.consensus_hash = message.consensusHash ? (0, helpers_1.base64FromBytes)(message.consensusHash) : undefined;
        obj.app_hash = message.appHash ? (0, helpers_1.base64FromBytes)(message.appHash) : undefined;
        obj.last_results_hash = message.lastResultsHash ? (0, helpers_1.base64FromBytes)(message.lastResultsHash) : undefined;
        obj.evidence_hash = message.evidenceHash ? (0, helpers_1.base64FromBytes)(message.evidenceHash) : undefined;
        obj.proposer_address = message.proposerAddress ? (0, helpers_1.base64FromBytes)(message.proposerAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Header.typeUrl, exports.Header);
function createBaseData() {
    return {
        txs: []
    };
}
exports.Data = {
    typeUrl: "/tendermint.types.Data",
    is(o) {
        return o && (o.$typeUrl === exports.Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Data.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Data.decode(message.value);
    },
    toProto(message) {
        return exports.Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Data",
            value: exports.Data.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Data.typeUrl, exports.Data);
function createBaseVote() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        blockId: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        validatorAddress: new Uint8Array(),
        validatorIndex: 0,
        signature: new Uint8Array()
    };
}
exports.Vote = {
    typeUrl: "/tendermint.types.Vote",
    is(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.is(o.blockId) && timestamp_1.Timestamp.is(o.timestamp) && (o.validatorAddress instanceof Uint8Array || typeof o.validatorAddress === "string") && typeof o.validatorIndex === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isSDK(o.block_id) && timestamp_1.Timestamp.isSDK(o.timestamp) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.validator_index === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isAmino(o.block_id) && timestamp_1.Timestamp.isAmino(o.timestamp) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.validator_index === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(50).bytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            writer.uint32(56).int32(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAddress = reader.bytes();
                    break;
                case 7:
                    message.validatorIndex = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined,
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? (0, helpers_1.bytesFromBase64)(object.validatorAddress) : new Uint8Array(),
            validatorIndex: (0, helpers_1.isSet)(object.validatorIndex) ? Number(object.validatorIndex) : 0,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.validatorAddress !== undefined && (obj.validatorAddress = (0, helpers_1.base64FromBytes)(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
        message.validatorIndex !== undefined && (obj.validatorIndex = Math.round(message.validatorIndex));
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.validatorIndex = object.validatorIndex ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: object?.height,
            round: object?.round,
            blockId: object.block_id ? exports.BlockID.fromSDK(object.block_id) : undefined,
            timestamp: object.timestamp ?? undefined,
            validatorAddress: object?.validator_address,
            validatorIndex: object?.validator_index,
            signature: object?.signature
        };
    },
    toSDK(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        obj.height = message.height;
        obj.round = message.round;
        message.blockId !== undefined && (obj.block_id = message.blockId ? exports.BlockID.toSDK(message.blockId) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        obj.validator_address = message.validatorAddress;
        obj.validator_index = message.validatorIndex;
        obj.signature = message.signature;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseVote();
        if (object.type !== undefined && object.type !== null) {
            message.type = signedMsgTypeFromJSON(object.type);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = exports.BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = (0, helpers_1.bytesFromBase64)(object.validator_address);
        }
        if (object.validator_index !== undefined && object.validator_index !== null) {
            message.validatorIndex = object.validator_index;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = signedMsgTypeToJSON(message.type);
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.validator_address = message.validatorAddress ? (0, helpers_1.base64FromBytes)(message.validatorAddress) : undefined;
        obj.validator_index = message.validatorIndex;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Vote.typeUrl, exports.Vote);
function createBaseCommit() {
    return {
        height: BigInt(0),
        round: 0,
        blockId: exports.BlockID.fromPartial({}),
        signatures: []
    };
}
exports.Commit = {
    typeUrl: "/tendermint.types.Commit",
    is(o) {
        return o && (o.$typeUrl === exports.Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.is(o.blockId) && Array.isArray(o.signatures) && (!o.signatures.length || exports.CommitSig.is(o.signatures[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isSDK(o.block_id) && Array.isArray(o.signatures) && (!o.signatures.length || exports.CommitSig.isSDK(o.signatures[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isAmino(o.block_id) && Array.isArray(o.signatures) && (!o.signatures.length || exports.CommitSig.isAmino(o.signatures[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
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
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.signatures = object.signatures?.map(e => exports.CommitSig.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            round: object?.round,
            blockId: object.block_id ? exports.BlockID.fromSDK(object.block_id) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.round = message.round;
        message.blockId !== undefined && (obj.block_id = message.blockId ? exports.BlockID.toSDK(message.blockId) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toSDK(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCommit();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = exports.BlockID.fromAmino(object.block_id);
        }
        message.signatures = object.signatures?.map(e => exports.CommitSig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Commit.decode(message.value);
    },
    toProto(message) {
        return exports.Commit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Commit",
            value: exports.Commit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Commit.typeUrl, exports.Commit);
function createBaseCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.CommitSig = {
    typeUrl: "/tendermint.types.CommitSig",
    is(o) {
        return o && (o.$typeUrl === exports.CommitSig.typeUrl || (0, helpers_1.isSet)(o.blockIdFlag) && (o.validatorAddress instanceof Uint8Array || typeof o.validatorAddress === "string") && timestamp_1.Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.isSDK(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockIdFlag = reader.int32();
                    break;
                case 2:
                    message.validatorAddress = reader.bytes();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
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
            blockIdFlag: (0, helpers_1.isSet)(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : -1,
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? (0, helpers_1.bytesFromBase64)(object.validatorAddress) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
        message.validatorAddress !== undefined && (obj.validatorAddress = (0, helpers_1.base64FromBytes)(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.blockIdFlag = object.blockIdFlag ?? 0;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            blockIdFlag: (0, helpers_1.isSet)(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
            validatorAddress: object?.validator_address,
            timestamp: object.timestamp ?? undefined,
            signature: object?.signature
        };
    },
    toSDK(message) {
        const obj = {};
        message.blockIdFlag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.blockIdFlag));
        obj.validator_address = message.validatorAddress;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        obj.signature = message.signature;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCommitSig();
        if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
            message.blockIdFlag = blockIDFlagFromJSON(object.block_id_flag);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = (0, helpers_1.bytesFromBase64)(object.validator_address);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = blockIDFlagToJSON(message.blockIdFlag);
        obj.validator_address = message.validatorAddress ? (0, helpers_1.base64FromBytes)(message.validatorAddress) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CommitSig.decode(message.value);
    },
    toProto(message) {
        return exports.CommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.CommitSig",
            value: exports.CommitSig.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommitSig.typeUrl, exports.CommitSig);
function createBaseProposal() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        polRound: 0,
        blockId: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.Proposal = {
    typeUrl: "/tendermint.types.Proposal",
    is(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.polRound === "number" && exports.BlockID.is(o.blockId) && timestamp_1.Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.pol_round === "number" && exports.BlockID.isSDK(o.block_id) && timestamp_1.Timestamp.isSDK(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.pol_round === "number" && exports.BlockID.isAmino(o.block_id) && timestamp_1.Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.polRound !== 0) {
            writer.uint32(32).int32(message.polRound);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.polRound = reader.int32();
                    break;
                case 5:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            polRound: (0, helpers_1.isSet)(object.polRound) ? Number(object.polRound) : 0,
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? new Date(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.polRound !== undefined && (obj.polRound = Math.round(message.polRound));
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.polRound = object.polRound ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: object?.height,
            round: object?.round,
            polRound: object?.pol_round,
            blockId: object.block_id ? exports.BlockID.fromSDK(object.block_id) : undefined,
            timestamp: object.timestamp ?? undefined,
            signature: object?.signature
        };
    },
    toSDK(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        obj.height = message.height;
        obj.round = message.round;
        obj.pol_round = message.polRound;
        message.blockId !== undefined && (obj.block_id = message.blockId ? exports.BlockID.toSDK(message.blockId) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
        obj.signature = message.signature;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.type !== undefined && object.type !== null) {
            message.type = signedMsgTypeFromJSON(object.type);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.pol_round !== undefined && object.pol_round !== null) {
            message.polRound = object.pol_round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = exports.BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = signedMsgTypeToJSON(message.type);
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.pol_round = message.polRound;
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Proposal.typeUrl, exports.Proposal);
function createBaseSignedHeader() {
    return {
        header: undefined,
        commit: undefined
    };
}
exports.SignedHeader = {
    typeUrl: "/tendermint.types.SignedHeader",
    is(o) {
        return o && o.$typeUrl === exports.SignedHeader.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.SignedHeader.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.SignedHeader.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = exports.Commit.decode(reader, reader.uint32());
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
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.Commit.fromJSON(object.commit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.Commit.toJSON(message.commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.Commit.fromPartial(object.commit) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            header: object.header ? exports.Header.fromSDK(object.header) : undefined,
            commit: object.commit ? exports.Commit.fromSDK(object.commit) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Header.toSDK(message.header) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.Commit.toSDK(message.commit) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSignedHeader();
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.Header.fromAmino(object.header);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.Commit.fromAmino(object.commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.commit = message.commit ? exports.Commit.toAmino(message.commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignedHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SignedHeader.decode(message.value);
    },
    toProto(message) {
        return exports.SignedHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SignedHeader",
            value: exports.SignedHeader.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SignedHeader.typeUrl, exports.SignedHeader);
function createBaseLightBlock() {
    return {
        signedHeader: undefined,
        validatorSet: undefined
    };
}
exports.LightBlock = {
    typeUrl: "/tendermint.types.LightBlock",
    is(o) {
        return o && o.$typeUrl === exports.LightBlock.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.LightBlock.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.LightBlock.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signedHeader !== undefined) {
            exports.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = exports.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signedHeader: (0, helpers_1.isSet)(object.signedHeader) ? exports.SignedHeader.fromJSON(object.signedHeader) : undefined,
            validatorSet: (0, helpers_1.isSet)(object.validatorSet) ? validator_1.ValidatorSet.fromJSON(object.validatorSet) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? exports.SignedHeader.toJSON(message.signedHeader) : undefined);
        message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? validator_1.ValidatorSet.toJSON(message.validatorSet) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? exports.SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? validator_1.ValidatorSet.fromPartial(object.validatorSet) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            signedHeader: object.signed_header ? exports.SignedHeader.fromSDK(object.signed_header) : undefined,
            validatorSet: object.validator_set ? validator_1.ValidatorSet.fromSDK(object.validator_set) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.signedHeader !== undefined && (obj.signed_header = message.signedHeader ? exports.SignedHeader.toSDK(message.signedHeader) : undefined);
        message.validatorSet !== undefined && (obj.validator_set = message.validatorSet ? validator_1.ValidatorSet.toSDK(message.validatorSet) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLightBlock();
        if (object.signed_header !== undefined && object.signed_header !== null) {
            message.signedHeader = exports.SignedHeader.fromAmino(object.signed_header);
        }
        if (object.validator_set !== undefined && object.validator_set !== null) {
            message.validatorSet = validator_1.ValidatorSet.fromAmino(object.validator_set);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signedHeader ? exports.SignedHeader.toAmino(message.signedHeader) : undefined;
        obj.validator_set = message.validatorSet ? validator_1.ValidatorSet.toAmino(message.validatorSet) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LightBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LightBlock.decode(message.value);
    },
    toProto(message) {
        return exports.LightBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightBlock",
            value: exports.LightBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LightBlock.typeUrl, exports.LightBlock);
function createBaseBlockMeta() {
    return {
        blockId: exports.BlockID.fromPartial({}),
        blockSize: BigInt(0),
        header: exports.Header.fromPartial({}),
        numTxs: BigInt(0)
    };
}
exports.BlockMeta = {
    typeUrl: "/tendermint.types.BlockMeta",
    is(o) {
        return o && (o.$typeUrl === exports.BlockMeta.typeUrl || exports.BlockID.is(o.blockId) && typeof o.blockSize === "bigint" && exports.Header.is(o.header) && typeof o.numTxs === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BlockMeta.typeUrl || exports.BlockID.isSDK(o.block_id) && typeof o.block_size === "bigint" && exports.Header.isSDK(o.header) && typeof o.num_txs === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BlockMeta.typeUrl || exports.BlockID.isAmino(o.block_id) && typeof o.block_size === "bigint" && exports.Header.isAmino(o.header) && typeof o.num_txs === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockSize !== BigInt(0)) {
            writer.uint32(16).int64(message.blockSize);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.numTxs !== BigInt(0)) {
            writer.uint32(32).int64(message.numTxs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockSize = reader.int64();
                    break;
                case 3:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.numTxs = reader.int64();
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
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            blockSize: (0, helpers_1.isSet)(object.blockSize) ? BigInt(object.blockSize.toString()) : BigInt(0),
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            numTxs: (0, helpers_1.isSet)(object.numTxs) ? BigInt(object.numTxs.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        message.blockSize !== undefined && (obj.blockSize = (message.blockSize || BigInt(0)).toString());
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.numTxs !== undefined && (obj.numTxs = (message.numTxs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? BigInt(object.blockSize.toString()) : BigInt(0);
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? BigInt(object.numTxs.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            blockId: object.block_id ? exports.BlockID.fromSDK(object.block_id) : undefined,
            blockSize: object?.block_size,
            header: object.header ? exports.Header.fromSDK(object.header) : undefined,
            numTxs: object?.num_txs
        };
    },
    toSDK(message) {
        const obj = {};
        message.blockId !== undefined && (obj.block_id = message.blockId ? exports.BlockID.toSDK(message.blockId) : undefined);
        obj.block_size = message.blockSize;
        message.header !== undefined && (obj.header = message.header ? exports.Header.toSDK(message.header) : undefined);
        obj.num_txs = message.numTxs;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBlockMeta();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = exports.BlockID.fromAmino(object.block_id);
        }
        if (object.block_size !== undefined && object.block_size !== null) {
            message.blockSize = BigInt(object.block_size);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.Header.fromAmino(object.header);
        }
        if (object.num_txs !== undefined && object.num_txs !== null) {
            message.numTxs = BigInt(object.num_txs);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        obj.block_size = message.blockSize ? message.blockSize.toString() : undefined;
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.num_txs = message.numTxs ? message.numTxs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockMeta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockMeta.decode(message.value);
    },
    toProto(message) {
        return exports.BlockMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockMeta",
            value: exports.BlockMeta.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BlockMeta.typeUrl, exports.BlockMeta);
function createBaseTxProof() {
    return {
        rootHash: new Uint8Array(),
        data: new Uint8Array(),
        proof: undefined
    };
}
exports.TxProof = {
    typeUrl: "/tendermint.types.TxProof",
    is(o) {
        return o && (o.$typeUrl === exports.TxProof.typeUrl || (o.rootHash instanceof Uint8Array || typeof o.rootHash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxProof.typeUrl || (o.root_hash instanceof Uint8Array || typeof o.root_hash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxProof.typeUrl || (o.root_hash instanceof Uint8Array || typeof o.root_hash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rootHash.length !== 0) {
            writer.uint32(10).bytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rootHash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            rootHash: (0, helpers_1.isSet)(object.rootHash) ? (0, helpers_1.bytesFromBase64)(object.rootHash) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.rootHash !== undefined && (obj.rootHash = (0, helpers_1.base64FromBytes)(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.rootHash = object.rootHash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            rootHash: object?.root_hash,
            data: object?.data,
            proof: object.proof ? proof_1.Proof.fromSDK(object.proof) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.root_hash = message.rootHash;
        obj.data = message.data;
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toSDK(message.proof) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTxProof();
        if (object.root_hash !== undefined && object.root_hash !== null) {
            message.rootHash = (0, helpers_1.bytesFromBase64)(object.root_hash);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.root_hash = message.rootHash ? (0, helpers_1.base64FromBytes)(message.rootHash) : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxProof.decode(message.value);
    },
    toProto(message) {
        return exports.TxProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.TxProof",
            value: exports.TxProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxProof.typeUrl, exports.TxProof);
