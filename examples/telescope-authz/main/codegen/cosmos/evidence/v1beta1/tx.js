"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSubmitEvidenceResponse = exports.MsgSubmitEvidence = void 0;
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgSubmitEvidence() {
    return {
        submitter: "",
        evidence: undefined
    };
}
exports.MsgSubmitEvidence = {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
    aminoType: "cosmos-sdk/MsgSubmitEvidence",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitEvidence.typeUrl || typeof o.submitter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSubmitEvidence.typeUrl || typeof o.submitter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitEvidence.typeUrl || typeof o.submitter === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.submitter !== "") {
            writer.uint32(10).string(message.submitter);
        }
        if (message.evidence !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.evidence), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.submitter = reader.string();
                    break;
                case 2:
                    message.evidence = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
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
            submitter: (0, helpers_1.isSet)(object.submitter) ? String(object.submitter) : "",
            evidence: (0, helpers_1.isSet)(object.evidence) ? registry_1.GlobalDecoderRegistry.fromJSON(object.evidence) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.submitter !== undefined && (obj.submitter = message.submitter);
        message.evidence !== undefined && (obj.evidence = message.evidence ? registry_1.GlobalDecoderRegistry.toJSON(message.evidence) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidence();
        message.submitter = object.submitter ?? "";
        message.evidence = object.evidence !== undefined && object.evidence !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.evidence) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            submitter: object?.submitter,
            evidence: object.evidence ? registry_1.GlobalDecoderRegistry.fromSDK(object.evidence) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.submitter = message.submitter;
        message.evidence !== undefined && (obj.evidence = message.evidence ? registry_1.GlobalDecoderRegistry.toSDK(message.evidence) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitEvidence();
        if (object.submitter !== undefined && object.submitter !== null) {
            message.submitter = object.submitter;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.evidence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.submitter = message.submitter;
        obj.evidence = message.evidence ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.evidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitEvidence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitEvidence",
            value: exports.MsgSubmitEvidence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitEvidence.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
            value: exports.MsgSubmitEvidence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitEvidence.typeUrl, exports.MsgSubmitEvidence);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitEvidence.aminoType, exports.MsgSubmitEvidence.typeUrl);
function createBaseMsgSubmitEvidenceResponse() {
    return {
        hash: new Uint8Array()
    };
}
exports.MsgSubmitEvidenceResponse = {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
    aminoType: "cosmos-sdk/MsgSubmitEvidenceResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitEvidenceResponse.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSubmitEvidenceResponse.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitEvidenceResponse.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidenceResponse();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitEvidenceResponse();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitEvidenceResponse",
            value: exports.MsgSubmitEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
            value: exports.MsgSubmitEvidenceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitEvidenceResponse.typeUrl, exports.MsgSubmitEvidenceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitEvidenceResponse.aminoType, exports.MsgSubmitEvidenceResponse.typeUrl);
