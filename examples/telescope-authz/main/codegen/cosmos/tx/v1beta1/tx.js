"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxSignerData = exports.Tip = exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDocDirectAux = exports.SignDoc = exports.TxRaw = exports.Tx = void 0;
const any_1 = require("../../../google/protobuf/any");
const signing_1 = require("../signing/v1beta1/signing");
const multisig_1 = require("../../crypto/multisig/v1beta1/multisig");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseTx() {
    return {
        body: undefined,
        authInfo: undefined,
        signatures: []
    };
}
exports.Tx = {
    typeUrl: "/cosmos.tx.v1beta1.Tx",
    aminoType: "cosmos-sdk/Tx",
    is(o) {
        return o && (o.$typeUrl === exports.Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            exports.AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body: (0, helpers_1.isSet)(object.body) ? exports.TxBody.fromJSON(object.body) : undefined,
            authInfo: (0, helpers_1.isSet)(object.authInfo) ? exports.AuthInfo.fromJSON(object.authInfo) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.body !== undefined && (obj.body = message.body ? exports.TxBody.toJSON(message.body) : undefined);
        message.authInfo !== undefined && (obj.authInfo = message.authInfo ? exports.AuthInfo.toJSON(message.authInfo) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTx();
        message.body = object.body !== undefined && object.body !== null ? exports.TxBody.fromPartial(object.body) : undefined;
        message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? exports.AuthInfo.fromPartial(object.authInfo) : undefined;
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            body: object.body ? exports.TxBody.fromSDK(object.body) : undefined,
            authInfo: object.auth_info ? exports.AuthInfo.fromSDK(object.auth_info) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.body !== undefined && (obj.body = message.body ? exports.TxBody.toSDK(message.body) : undefined);
        message.authInfo !== undefined && (obj.auth_info = message.authInfo ? exports.AuthInfo.toSDK(message.authInfo) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTx();
        if (object.body !== undefined && object.body !== null) {
            message.body = exports.TxBody.fromAmino(object.body);
        }
        if (object.auth_info !== undefined && object.auth_info !== null) {
            message.authInfo = exports.AuthInfo.fromAmino(object.auth_info);
        }
        message.signatures = object.signatures?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body = message.body ? exports.TxBody.toAmino(message.body) : undefined;
        obj.auth_info = message.authInfo ? exports.AuthInfo.toAmino(message.authInfo) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Tx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tx",
            value: exports.Tx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Tx.decode(message.value);
    },
    toProto(message) {
        return exports.Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tx",
            value: exports.Tx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Tx.typeUrl, exports.Tx);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Tx.aminoType, exports.Tx.typeUrl);
function createBaseTxRaw() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        signatures: []
    };
}
exports.TxRaw = {
    typeUrl: "/cosmos.tx.v1beta1.TxRaw",
    aminoType: "cosmos-sdk/TxRaw",
    is(o) {
        return o && (o.$typeUrl === exports.TxRaw.typeUrl || (o.bodyBytes instanceof Uint8Array || typeof o.bodyBytes === "string") && (o.authInfoBytes instanceof Uint8Array || typeof o.authInfoBytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxRaw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            bodyBytes: (0, helpers_1.isSet)(object.bodyBytes) ? (0, helpers_1.bytesFromBase64)(object.bodyBytes) : new Uint8Array(),
            authInfoBytes: (0, helpers_1.isSet)(object.authInfoBytes) ? (0, helpers_1.bytesFromBase64)(object.authInfoBytes) : new Uint8Array(),
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bodyBytes !== undefined && (obj.bodyBytes = (0, helpers_1.base64FromBytes)(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
        message.authInfoBytes !== undefined && (obj.authInfoBytes = (0, helpers_1.base64FromBytes)(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxRaw();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            bodyBytes: object?.body_bytes,
            authInfoBytes: object?.auth_info_bytes,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes;
        obj.auth_info_bytes = message.authInfoBytes;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTxRaw();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = (0, helpers_1.bytesFromBase64)(object.auth_info_bytes);
        }
        message.signatures = object.signatures?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? (0, helpers_1.base64FromBytes)(message.authInfoBytes) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxRaw.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxRaw",
            value: exports.TxRaw.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxRaw.decode(message.value);
    },
    toProto(message) {
        return exports.TxRaw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxRaw",
            value: exports.TxRaw.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxRaw.typeUrl, exports.TxRaw);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TxRaw.aminoType, exports.TxRaw.typeUrl);
function createBaseSignDoc() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: "",
        accountNumber: BigInt(0)
    };
}
exports.SignDoc = {
    typeUrl: "/cosmos.tx.v1beta1.SignDoc",
    aminoType: "cosmos-sdk/SignDoc",
    is(o) {
        return o && (o.$typeUrl === exports.SignDoc.typeUrl || (o.bodyBytes instanceof Uint8Array || typeof o.bodyBytes === "string") && (o.authInfoBytes instanceof Uint8Array || typeof o.authInfoBytes === "string") && typeof o.chainId === "string" && typeof o.accountNumber === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
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
            bodyBytes: (0, helpers_1.isSet)(object.bodyBytes) ? (0, helpers_1.bytesFromBase64)(object.bodyBytes) : new Uint8Array(),
            authInfoBytes: (0, helpers_1.isSet)(object.authInfoBytes) ? (0, helpers_1.bytesFromBase64)(object.authInfoBytes) : new Uint8Array(),
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            accountNumber: (0, helpers_1.isSet)(object.accountNumber) ? BigInt(object.accountNumber.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.bodyBytes !== undefined && (obj.bodyBytes = (0, helpers_1.base64FromBytes)(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
        message.authInfoBytes !== undefined && (obj.authInfoBytes = (0, helpers_1.base64FromBytes)(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignDoc();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.chainId = object.chainId ?? "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            bodyBytes: object?.body_bytes,
            authInfoBytes: object?.auth_info_bytes,
            chainId: object?.chain_id,
            accountNumber: object?.account_number
        };
    },
    toSDK(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes;
        obj.auth_info_bytes = message.authInfoBytes;
        obj.chain_id = message.chainId;
        obj.account_number = message.accountNumber;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSignDoc();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = (0, helpers_1.bytesFromBase64)(object.auth_info_bytes);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? (0, helpers_1.base64FromBytes)(message.authInfoBytes) : undefined;
        obj.chain_id = message.chainId;
        obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignDoc.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDoc",
            value: exports.SignDoc.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignDoc.decode(message.value);
    },
    toProto(message) {
        return exports.SignDoc.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDoc",
            value: exports.SignDoc.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SignDoc.typeUrl, exports.SignDoc);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SignDoc.aminoType, exports.SignDoc.typeUrl);
function createBaseSignDocDirectAux() {
    return {
        bodyBytes: new Uint8Array(),
        publicKey: undefined,
        chainId: "",
        accountNumber: BigInt(0),
        sequence: BigInt(0),
        tip: undefined
    };
}
exports.SignDocDirectAux = {
    typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
    aminoType: "cosmos-sdk/SignDocDirectAux",
    is(o) {
        return o && (o.$typeUrl === exports.SignDocDirectAux.typeUrl || (o.bodyBytes instanceof Uint8Array || typeof o.bodyBytes === "string") && typeof o.chainId === "string" && typeof o.accountNumber === "bigint" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
            bodyBytes: (0, helpers_1.isSet)(object.bodyBytes) ? (0, helpers_1.bytesFromBase64)(object.bodyBytes) : new Uint8Array(),
            publicKey: (0, helpers_1.isSet)(object.publicKey) ? any_1.Any.fromJSON(object.publicKey) : undefined,
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            accountNumber: (0, helpers_1.isSet)(object.accountNumber) ? BigInt(object.accountNumber.toString()) : BigInt(0),
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            tip: (0, helpers_1.isSet)(object.tip) ? exports.Tip.fromJSON(object.tip) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.bodyBytes !== undefined && (obj.bodyBytes = (0, helpers_1.base64FromBytes)(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
        message.publicKey !== undefined && (obj.publicKey = message.publicKey ? any_1.Any.toJSON(message.publicKey) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignDocDirectAux();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.chainId = object.chainId ?? "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            bodyBytes: object?.body_bytes,
            publicKey: object.public_key ? any_1.Any.fromSDK(object.public_key) : undefined,
            chainId: object?.chain_id,
            accountNumber: object?.account_number,
            sequence: object?.sequence,
            tip: object.tip ? exports.Tip.fromSDK(object.tip) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes;
        message.publicKey !== undefined && (obj.public_key = message.publicKey ? any_1.Any.toSDK(message.publicKey) : undefined);
        obj.chain_id = message.chainId;
        obj.account_number = message.accountNumber;
        obj.sequence = message.sequence;
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toSDK(message.tip) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSignDocDirectAux();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = any_1.Any.fromAmino(object.public_key);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = exports.Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.public_key = message.publicKey ? any_1.Any.toAmino(message.publicKey) : undefined;
        obj.chain_id = message.chainId;
        obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignDocDirectAux.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDocDirectAux",
            value: exports.SignDocDirectAux.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignDocDirectAux.decode(message.value);
    },
    toProto(message) {
        return exports.SignDocDirectAux.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
            value: exports.SignDocDirectAux.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SignDocDirectAux.typeUrl, exports.SignDocDirectAux);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SignDocDirectAux.aminoType, exports.SignDocDirectAux.typeUrl);
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeoutHeight: BigInt(0),
        extensionOptions: [],
        nonCriticalExtensionOptions: []
    };
}
exports.TxBody = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    aminoType: "cosmos-sdk/TxBody",
    is(o) {
        return o && (o.$typeUrl === exports.TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || any_1.Any.is(o.messages[0])) && typeof o.memo === "string" && typeof o.timeoutHeight === "bigint" && Array.isArray(o.extensionOptions) && (!o.extensionOptions.length || any_1.Any.is(o.extensionOptions[0])) && Array.isArray(o.nonCriticalExtensionOptions) && (!o.nonCriticalExtensionOptions.length || any_1.Any.is(o.nonCriticalExtensionOptions[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || any_1.Any.isSDK(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || any_1.Any.isSDK(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || any_1.Any.isSDK(o.non_critical_extension_options[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || any_1.Any.isAmino(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || any_1.Any.isAmino(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || any_1.Any.isAmino(o.non_critical_extension_options[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (const v of message.extensionOptions) {
            any_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.nonCriticalExtensionOptions) {
            any_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : [],
            memo: (0, helpers_1.isSet)(object.memo) ? String(object.memo) : "",
            timeoutHeight: (0, helpers_1.isSet)(object.timeoutHeight) ? BigInt(object.timeoutHeight.toString()) : BigInt(0),
            extensionOptions: Array.isArray(object?.extensionOptions) ? object.extensionOptions.map((e) => any_1.Any.fromJSON(e)) : [],
            nonCriticalExtensionOptions: Array.isArray(object?.nonCriticalExtensionOptions) ? object.nonCriticalExtensionOptions.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || BigInt(0)).toString());
        if (message.extensionOptions) {
            obj.extensionOptions = message.extensionOptions.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.extensionOptions = [];
        }
        if (message.nonCriticalExtensionOptions) {
            obj.nonCriticalExtensionOptions = message.nonCriticalExtensionOptions.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.nonCriticalExtensionOptions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.memo = object.memo ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.extensionOptions = object.extensionOptions?.map(e => any_1.Any.fromPartial(e)) || [];
        message.nonCriticalExtensionOptions = object.nonCriticalExtensionOptions?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromSDK(e)) : [],
            memo: object?.memo,
            timeoutHeight: object?.timeout_height,
            extensionOptions: Array.isArray(object?.extension_options) ? object.extension_options.map((e) => any_1.Any.fromSDK(e)) : [],
            nonCriticalExtensionOptions: Array.isArray(object?.non_critical_extension_options) ? object.non_critical_extension_options.map((e) => any_1.Any.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.memo = message.memo;
        obj.timeout_height = message.timeoutHeight;
        if (message.extensionOptions) {
            obj.extension_options = message.extensionOptions.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.extension_options = [];
        }
        if (message.nonCriticalExtensionOptions) {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = BigInt(object.timeout_height);
        }
        message.extensionOptions = object.extension_options?.map(e => any_1.Any.fromAmino(e)) || [];
        message.nonCriticalExtensionOptions = object.non_critical_extension_options?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.memo = message.memo;
        obj.timeout_height = message.timeoutHeight ? message.timeoutHeight.toString() : undefined;
        if (message.extensionOptions) {
            obj.extension_options = message.extensionOptions.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.extension_options = [];
        }
        if (message.nonCriticalExtensionOptions) {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxBody.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxBody",
            value: exports.TxBody.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxBody.decode(message.value);
    },
    toProto(message) {
        return exports.TxBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: exports.TxBody.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxBody.typeUrl, exports.TxBody);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TxBody.aminoType, exports.TxBody.typeUrl);
function createBaseAuthInfo() {
    return {
        signerInfos: [],
        fee: undefined,
        tip: undefined
    };
}
exports.AuthInfo = {
    typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
    aminoType: "cosmos-sdk/AuthInfo",
    is(o) {
        return o && (o.$typeUrl === exports.AuthInfo.typeUrl || Array.isArray(o.signerInfos) && (!o.signerInfos.length || exports.SignerInfo.is(o.signerInfos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || exports.SignerInfo.isSDK(o.signer_infos[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || exports.SignerInfo.isAmino(o.signer_infos[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signerInfos) {
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
            signerInfos: Array.isArray(object?.signerInfos) ? object.signerInfos.map((e) => exports.SignerInfo.fromJSON(e)) : [],
            fee: (0, helpers_1.isSet)(object.fee) ? exports.Fee.fromJSON(object.fee) : undefined,
            tip: (0, helpers_1.isSet)(object.tip) ? exports.Tip.fromJSON(object.tip) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signerInfos) {
            obj.signerInfos = message.signerInfos.map(e => e ? exports.SignerInfo.toJSON(e) : undefined);
        }
        else {
            obj.signerInfos = [];
        }
        message.fee !== undefined && (obj.fee = message.fee ? exports.Fee.toJSON(message.fee) : undefined);
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuthInfo();
        message.signerInfos = object.signerInfos?.map(e => exports.SignerInfo.fromPartial(e)) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? exports.Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            signerInfos: Array.isArray(object?.signer_infos) ? object.signer_infos.map((e) => exports.SignerInfo.fromSDK(e)) : [],
            fee: object.fee ? exports.Fee.fromSDK(object.fee) : undefined,
            tip: object.tip ? exports.Tip.fromSDK(object.tip) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.signerInfos) {
            obj.signer_infos = message.signerInfos.map(e => e ? exports.SignerInfo.toSDK(e) : undefined);
        }
        else {
            obj.signer_infos = [];
        }
        message.fee !== undefined && (obj.fee = message.fee ? exports.Fee.toSDK(message.fee) : undefined);
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toSDK(message.tip) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAuthInfo();
        message.signerInfos = object.signer_infos?.map(e => exports.SignerInfo.fromAmino(e)) || [];
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = exports.Fee.fromAmino(object.fee);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = exports.Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signerInfos) {
            obj.signer_infos = message.signerInfos.map(e => e ? exports.SignerInfo.toAmino(e) : undefined);
        }
        else {
            obj.signer_infos = [];
        }
        obj.fee = message.fee ? exports.Fee.toAmino(message.fee) : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuthInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthInfo",
            value: exports.AuthInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuthInfo.decode(message.value);
    },
    toProto(message) {
        return exports.AuthInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
            value: exports.AuthInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AuthInfo.typeUrl, exports.AuthInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AuthInfo.aminoType, exports.AuthInfo.typeUrl);
function createBaseSignerInfo() {
    return {
        publicKey: undefined,
        modeInfo: undefined,
        sequence: BigInt(0)
    };
}
exports.SignerInfo = {
    typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
    aminoType: "cosmos-sdk/SignerInfo",
    is(o) {
        return o && (o.$typeUrl === exports.SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            exports.ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = exports.ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            publicKey: (0, helpers_1.isSet)(object.publicKey) ? any_1.Any.fromJSON(object.publicKey) : undefined,
            modeInfo: (0, helpers_1.isSet)(object.modeInfo) ? exports.ModeInfo.fromJSON(object.modeInfo) : undefined,
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.publicKey !== undefined && (obj.publicKey = message.publicKey ? any_1.Any.toJSON(message.publicKey) : undefined);
        message.modeInfo !== undefined && (obj.modeInfo = message.modeInfo ? exports.ModeInfo.toJSON(message.modeInfo) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignerInfo();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? exports.ModeInfo.fromPartial(object.modeInfo) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            publicKey: object.public_key ? any_1.Any.fromSDK(object.public_key) : undefined,
            modeInfo: object.mode_info ? exports.ModeInfo.fromSDK(object.mode_info) : undefined,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        message.publicKey !== undefined && (obj.public_key = message.publicKey ? any_1.Any.toSDK(message.publicKey) : undefined);
        message.modeInfo !== undefined && (obj.mode_info = message.modeInfo ? exports.ModeInfo.toSDK(message.modeInfo) : undefined);
        obj.sequence = message.sequence;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSignerInfo();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = any_1.Any.fromAmino(object.public_key);
        }
        if (object.mode_info !== undefined && object.mode_info !== null) {
            message.modeInfo = exports.ModeInfo.fromAmino(object.mode_info);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.publicKey ? any_1.Any.toAmino(message.publicKey) : undefined;
        obj.mode_info = message.modeInfo ? exports.ModeInfo.toAmino(message.modeInfo) : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignerInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignerInfo",
            value: exports.SignerInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignerInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SignerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
            value: exports.SignerInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SignerInfo.typeUrl, exports.SignerInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SignerInfo.aminoType, exports.SignerInfo.typeUrl);
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
exports.ModeInfo = {
    typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
    aminoType: "cosmos-sdk/ModeInfo",
    is(o) {
        return o && o.$typeUrl === exports.ModeInfo.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ModeInfo.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ModeInfo.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
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
            single: (0, helpers_1.isSet)(object.single) ? exports.ModeInfo_Single.fromJSON(object.single) : undefined,
            multi: (0, helpers_1.isSet)(object.multi) ? exports.ModeInfo_Multi.fromJSON(object.multi) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.single !== undefined && (obj.single = message.single ? exports.ModeInfo_Single.toJSON(message.single) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.ModeInfo_Multi.toJSON(message.multi) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo();
        message.single = object.single !== undefined && object.single !== null ? exports.ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            single: object.single ? exports.ModeInfo_Single.fromSDK(object.single) : undefined,
            multi: object.multi ? exports.ModeInfo_Multi.fromSDK(object.multi) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.single !== undefined && (obj.single = message.single ? exports.ModeInfo_Single.toSDK(message.single) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.ModeInfo_Multi.toSDK(message.multi) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModeInfo();
        if (object.single !== undefined && object.single !== null) {
            message.single = exports.ModeInfo_Single.fromAmino(object.single);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = exports.ModeInfo_Multi.fromAmino(object.multi);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.single = message.single ? exports.ModeInfo_Single.toAmino(message.single) : undefined;
        obj.multi = message.multi ? exports.ModeInfo_Multi.toAmino(message.multi) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModeInfo",
            value: exports.ModeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
            value: exports.ModeInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModeInfo.typeUrl, exports.ModeInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModeInfo.aminoType, exports.ModeInfo.typeUrl);
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
exports.ModeInfo_Single = {
    typeUrl: "/cosmos.tx.v1beta1.Single",
    aminoType: "cosmos-sdk/Single",
    is(o) {
        return o && (o.$typeUrl === exports.ModeInfo_Single.typeUrl || (0, helpers_1.isSet)(o.mode));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModeInfo_Single.typeUrl || (0, helpers_1.isSet)(o.mode));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModeInfo_Single.typeUrl || (0, helpers_1.isSet)(o.mode));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Single();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModeInfo_Single();
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = (0, signing_1.signModeFromJSON)(object.mode);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mode = (0, signing_1.signModeToJSON)(message.mode);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo_Single.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Single",
            value: exports.ModeInfo_Single.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo_Single.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Single",
            value: exports.ModeInfo_Single.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModeInfo_Single.typeUrl, exports.ModeInfo_Single);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModeInfo_Single.aminoType, exports.ModeInfo_Single.typeUrl);
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        modeInfos: []
    };
}
exports.ModeInfo_Multi = {
    typeUrl: "/cosmos.tx.v1beta1.Multi",
    aminoType: "cosmos-sdk/Multi",
    is(o) {
        return o && (o.$typeUrl === exports.ModeInfo_Multi.typeUrl || Array.isArray(o.modeInfos) && (!o.modeInfos.length || exports.ModeInfo.is(o.modeInfos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || exports.ModeInfo.isSDK(o.mode_infos[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || exports.ModeInfo.isAmino(o.mode_infos[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modeInfos) {
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(exports.ModeInfo.decode(reader, reader.uint32()));
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
            bitarray: (0, helpers_1.isSet)(object.bitarray) ? multisig_1.CompactBitArray.fromJSON(object.bitarray) : undefined,
            modeInfos: Array.isArray(object?.modeInfos) ? object.modeInfos.map((e) => exports.ModeInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bitarray !== undefined && (obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toJSON(message.bitarray) : undefined);
        if (message.modeInfos) {
            obj.modeInfos = message.modeInfos.map(e => e ? exports.ModeInfo.toJSON(e) : undefined);
        }
        else {
            obj.modeInfos = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? multisig_1.CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.modeInfos = object.modeInfos?.map(e => exports.ModeInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            bitarray: object.bitarray ? multisig_1.CompactBitArray.fromSDK(object.bitarray) : undefined,
            modeInfos: Array.isArray(object?.mode_infos) ? object.mode_infos.map((e) => exports.ModeInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.bitarray !== undefined && (obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toSDK(message.bitarray) : undefined);
        if (message.modeInfos) {
            obj.mode_infos = message.modeInfos.map(e => e ? exports.ModeInfo.toSDK(e) : undefined);
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModeInfo_Multi();
        if (object.bitarray !== undefined && object.bitarray !== null) {
            message.bitarray = multisig_1.CompactBitArray.fromAmino(object.bitarray);
        }
        message.modeInfos = object.mode_infos?.map(e => exports.ModeInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toAmino(message.bitarray) : undefined;
        if (message.modeInfos) {
            obj.mode_infos = message.modeInfos.map(e => e ? exports.ModeInfo.toAmino(e) : undefined);
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: exports.ModeInfo_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo_Multi.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Multi",
            value: exports.ModeInfo_Multi.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModeInfo_Multi.typeUrl, exports.ModeInfo_Multi);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModeInfo_Multi.aminoType, exports.ModeInfo_Multi.typeUrl);
function createBaseFee() {
    return {
        amount: [],
        gasLimit: BigInt(0),
        payer: "",
        granter: ""
    };
}
exports.Fee = {
    typeUrl: "/cosmos.tx.v1beta1.Fee",
    aminoType: "cosmos-sdk/Fee",
    is(o) {
        return o && (o.$typeUrl === exports.Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])) && typeof o.gasLimit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gasLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            gasLimit: (0, helpers_1.isSet)(object.gasLimit) ? BigInt(object.gasLimit.toString()) : BigInt(0),
            payer: (0, helpers_1.isSet)(object.payer) ? String(object.payer) : "",
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || BigInt(0)).toString());
        message.payer !== undefined && (obj.payer = message.payer);
        message.granter !== undefined && (obj.granter = message.granter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
        message.payer = object.payer ?? "";
        message.granter = object.granter ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : [],
            gasLimit: object?.gas_limit,
            payer: object?.payer,
            granter: object?.granter
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.gas_limit = message.gasLimit;
        obj.payer = message.payer;
        obj.granter = message.granter;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.gas_limit !== undefined && object.gas_limit !== null) {
            message.gasLimit = BigInt(object.gas_limit);
        }
        if (object.payer !== undefined && object.payer !== null) {
            message.payer = object.payer;
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.gas_limit = message.gasLimit ? message.gasLimit.toString() : undefined;
        obj.payer = message.payer;
        obj.granter = message.granter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Fee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fee",
            value: exports.Fee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Fee.decode(message.value);
    },
    toProto(message) {
        return exports.Fee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Fee",
            value: exports.Fee.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Fee.typeUrl, exports.Fee);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Fee.aminoType, exports.Fee.typeUrl);
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
exports.Tip = {
    typeUrl: "/cosmos.tx.v1beta1.Tip",
    aminoType: "cosmos-sdk/Tip",
    is(o) {
        return o && (o.$typeUrl === exports.Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])) && typeof o.tipper === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])) && typeof o.tipper === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])) && typeof o.tipper === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTip();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            tipper: (0, helpers_1.isSet)(object.tipper) ? String(object.tipper) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.tipper !== undefined && (obj.tipper = message.tipper);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.tipper = object.tipper ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : [],
            tipper: object?.tipper
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.tipper = message.tipper;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.tipper !== undefined && object.tipper !== null) {
            message.tipper = object.tipper;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.tipper = message.tipper;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Tip.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tip",
            value: exports.Tip.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Tip.decode(message.value);
    },
    toProto(message) {
        return exports.Tip.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tip",
            value: exports.Tip.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Tip.typeUrl, exports.Tip);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Tip.aminoType, exports.Tip.typeUrl);
function createBaseAuxSignerData() {
    return {
        address: "",
        signDoc: undefined,
        mode: 0,
        sig: new Uint8Array()
    };
}
exports.AuxSignerData = {
    typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
    aminoType: "cosmos-sdk/AuxSignerData",
    is(o) {
        return o && (o.$typeUrl === exports.AuxSignerData.typeUrl || typeof o.address === "string" && (0, helpers_1.isSet)(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AuxSignerData.typeUrl || typeof o.address === "string" && (0, helpers_1.isSet)(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AuxSignerData.typeUrl || typeof o.address === "string" && (0, helpers_1.isSet)(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.signDoc !== undefined) {
            exports.SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuxSignerData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signDoc = exports.SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
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
            signDoc: (0, helpers_1.isSet)(object.signDoc) ? exports.SignDocDirectAux.fromJSON(object.signDoc) : undefined,
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1,
            sig: (0, helpers_1.isSet)(object.sig) ? (0, helpers_1.bytesFromBase64)(object.sig) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.signDoc !== undefined && (obj.signDoc = message.signDoc ? exports.SignDocDirectAux.toJSON(message.signDoc) : undefined);
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        message.sig !== undefined && (obj.sig = (0, helpers_1.base64FromBytes)(message.sig !== undefined ? message.sig : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuxSignerData();
        message.address = object.address ?? "";
        message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? exports.SignDocDirectAux.fromPartial(object.signDoc) : undefined;
        message.mode = object.mode ?? 0;
        message.sig = object.sig ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            signDoc: object.sign_doc ? exports.SignDocDirectAux.fromSDK(object.sign_doc) : undefined,
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1,
            sig: object?.sig
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.signDoc !== undefined && (obj.sign_doc = message.signDoc ? exports.SignDocDirectAux.toSDK(message.signDoc) : undefined);
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        obj.sig = message.sig;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAuxSignerData();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.sign_doc !== undefined && object.sign_doc !== null) {
            message.signDoc = exports.SignDocDirectAux.fromAmino(object.sign_doc);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = (0, signing_1.signModeFromJSON)(object.mode);
        }
        if (object.sig !== undefined && object.sig !== null) {
            message.sig = (0, helpers_1.bytesFromBase64)(object.sig);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.sign_doc = message.signDoc ? exports.SignDocDirectAux.toAmino(message.signDoc) : undefined;
        obj.mode = (0, signing_1.signModeToJSON)(message.mode);
        obj.sig = message.sig ? (0, helpers_1.base64FromBytes)(message.sig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuxSignerData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuxSignerData",
            value: exports.AuxSignerData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuxSignerData.decode(message.value);
    },
    toProto(message) {
        return exports.AuxSignerData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
            value: exports.AuxSignerData.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AuxSignerData.typeUrl, exports.AuxSignerData);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AuxSignerData.aminoType, exports.AuxSignerData.typeUrl);
