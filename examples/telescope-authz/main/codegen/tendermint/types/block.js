"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const types_1 = require("./types");
const evidence_1 = require("./evidence");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseBlock() {
    return {
        header: types_1.Header.fromPartial({}),
        data: types_1.Data.fromPartial({}),
        evidence: evidence_1.EvidenceList.fromPartial({}),
        lastCommit: undefined
    };
}
exports.Block = {
    typeUrl: "/tendermint.types.Block",
    is(o) {
        return o && (o.$typeUrl === exports.Block.typeUrl || types_1.Header.is(o.header) && types_1.Data.is(o.data) && evidence_1.EvidenceList.is(o.evidence));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Block.typeUrl || types_1.Header.isSDK(o.header) && types_1.Data.isSDK(o.data) && evidence_1.EvidenceList.isSDK(o.evidence));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Block.typeUrl || types_1.Header.isAmino(o.header) && types_1.Data.isAmino(o.data) && evidence_1.EvidenceList.isAmino(o.evidence));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastCommit !== undefined) {
            types_1.Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = types_1.Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = evidence_1.EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lastCommit = types_1.Commit.decode(reader, reader.uint32());
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
            header: (0, helpers_1.isSet)(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            data: (0, helpers_1.isSet)(object.data) ? types_1.Data.fromJSON(object.data) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? evidence_1.EvidenceList.fromJSON(object.evidence) : undefined,
            lastCommit: (0, helpers_1.isSet)(object.lastCommit) ? types_1.Commit.fromJSON(object.lastCommit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.data !== undefined && (obj.data = message.data ? types_1.Data.toJSON(message.data) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? evidence_1.EvidenceList.toJSON(message.evidence) : undefined);
        message.lastCommit !== undefined && (obj.lastCommit = message.lastCommit ? types_1.Commit.toJSON(message.lastCommit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.data = object.data !== undefined && object.data !== null ? types_1.Data.fromPartial(object.data) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? evidence_1.EvidenceList.fromPartial(object.evidence) : undefined;
        message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? types_1.Commit.fromPartial(object.lastCommit) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            header: object.header ? types_1.Header.fromSDK(object.header) : undefined,
            data: object.data ? types_1.Data.fromSDK(object.data) : undefined,
            evidence: object.evidence ? evidence_1.EvidenceList.fromSDK(object.evidence) : undefined,
            lastCommit: object.last_commit ? types_1.Commit.fromSDK(object.last_commit) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toSDK(message.header) : undefined);
        message.data !== undefined && (obj.data = message.data ? types_1.Data.toSDK(message.data) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? evidence_1.EvidenceList.toSDK(message.evidence) : undefined);
        message.lastCommit !== undefined && (obj.last_commit = message.lastCommit ? types_1.Commit.toSDK(message.lastCommit) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBlock();
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromAmino(object.header);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = types_1.Data.fromAmino(object.data);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = evidence_1.EvidenceList.fromAmino(object.evidence);
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.lastCommit = types_1.Commit.fromAmino(object.last_commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        obj.data = message.data ? types_1.Data.toAmino(message.data) : undefined;
        obj.evidence = message.evidence ? evidence_1.EvidenceList.toAmino(message.evidence) : undefined;
        obj.last_commit = message.lastCommit ? types_1.Commit.toAmino(message.lastCommit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Block.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Block.decode(message.value);
    },
    toProto(message) {
        return exports.Block.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Block",
            value: exports.Block.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Block.typeUrl, exports.Block);
