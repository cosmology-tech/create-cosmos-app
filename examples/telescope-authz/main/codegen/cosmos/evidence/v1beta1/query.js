"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllEvidenceResponse = exports.QueryAllEvidenceRequest = exports.QueryEvidenceResponse = exports.QueryEvidenceRequest = void 0;
const pagination_1 = require("../../base/query/v1beta1/pagination");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryEvidenceRequest() {
    return {
        evidenceHash: new Uint8Array()
    };
}
exports.QueryEvidenceRequest = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
    aminoType: "cosmos-sdk/QueryEvidenceRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEvidenceRequest.typeUrl || o.evidenceHash instanceof Uint8Array || typeof o.evidenceHash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEvidenceRequest.typeUrl || o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEvidenceRequest.typeUrl || o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.evidenceHash.length !== 0) {
            writer.uint32(10).bytes(message.evidenceHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvidenceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidenceHash = reader.bytes();
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
            evidenceHash: (0, helpers_1.isSet)(object.evidenceHash) ? (0, helpers_1.bytesFromBase64)(object.evidenceHash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.evidenceHash !== undefined && (obj.evidenceHash = (0, helpers_1.base64FromBytes)(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEvidenceRequest();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            evidenceHash: object?.evidence_hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.evidence_hash = message.evidenceHash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryEvidenceRequest();
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidenceHash = (0, helpers_1.bytesFromBase64)(object.evidence_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.evidence_hash = message.evidenceHash ? (0, helpers_1.base64FromBytes)(message.evidenceHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEvidenceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEvidenceRequest",
            value: exports.QueryEvidenceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEvidenceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEvidenceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
            value: exports.QueryEvidenceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEvidenceRequest.typeUrl, exports.QueryEvidenceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryEvidenceRequest.aminoType, exports.QueryEvidenceRequest.typeUrl);
function createBaseQueryEvidenceResponse() {
    return {
        evidence: undefined
    };
}
exports.QueryEvidenceResponse = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
    aminoType: "cosmos-sdk/QueryEvidenceResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryEvidenceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryEvidenceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryEvidenceResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.evidence !== undefined) {
            any_1.Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence = any_1.Any.decode(reader, reader.uint32());
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
            evidence: (0, helpers_1.isSet)(object.evidence) ? any_1.Any.fromJSON(object.evidence) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.evidence !== undefined && (obj.evidence = message.evidence ? any_1.Any.toJSON(message.evidence) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEvidenceResponse();
        message.evidence = object.evidence !== undefined && object.evidence !== null ? any_1.Any.fromPartial(object.evidence) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            evidence: object.evidence ? any_1.Any.fromSDK(object.evidence) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.evidence !== undefined && (obj.evidence = message.evidence ? any_1.Any.toSDK(message.evidence) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryEvidenceResponse();
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = any_1.Any.fromAmino(object.evidence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.evidence = message.evidence ? any_1.Any.toAmino(message.evidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEvidenceResponse",
            value: exports.QueryEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
            value: exports.QueryEvidenceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEvidenceResponse.typeUrl, exports.QueryEvidenceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryEvidenceResponse.aminoType, exports.QueryEvidenceResponse.typeUrl);
function createBaseQueryAllEvidenceRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllEvidenceRequest = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
    aminoType: "cosmos-sdk/QueryAllEvidenceRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryAllEvidenceRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryAllEvidenceRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryAllEvidenceRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEvidenceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllEvidenceRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllEvidenceRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllEvidenceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllEvidenceRequest",
            value: exports.QueryAllEvidenceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllEvidenceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllEvidenceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
            value: exports.QueryAllEvidenceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllEvidenceRequest.typeUrl, exports.QueryAllEvidenceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllEvidenceRequest.aminoType, exports.QueryAllEvidenceRequest.typeUrl);
function createBaseQueryAllEvidenceResponse() {
    return {
        evidence: [],
        pagination: undefined
    };
}
exports.QueryAllEvidenceResponse = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
    aminoType: "cosmos-sdk/QueryAllEvidenceResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllEvidenceResponse.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || any_1.Any.is(o.evidence[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllEvidenceResponse.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || any_1.Any.isSDK(o.evidence[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllEvidenceResponse.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || any_1.Any.isAmino(o.evidence[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.evidence) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => any_1.Any.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllEvidenceResponse();
        message.evidence = object.evidence?.map(e => any_1.Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => any_1.Any.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllEvidenceResponse();
        message.evidence = object.evidence?.map(e => any_1.Any.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllEvidenceResponse",
            value: exports.QueryAllEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
            value: exports.QueryAllEvidenceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllEvidenceResponse.typeUrl, exports.QueryAllEvidenceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllEvidenceResponse.aminoType, exports.QueryAllEvidenceResponse.typeUrl);
