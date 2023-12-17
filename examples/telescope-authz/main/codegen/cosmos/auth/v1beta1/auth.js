"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ModuleAccount = exports.BaseAccount = void 0;
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseBaseAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        address: "",
        pubKey: undefined,
        accountNumber: BigInt(0),
        sequence: BigInt(0)
    };
}
exports.BaseAccount = {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
    aminoType: "cosmos-sdk/BaseAccount",
    is(o) {
        return o && (o.$typeUrl === exports.BaseAccount.typeUrl || typeof o.address === "string" && typeof o.accountNumber === "bigint" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BaseAccount.typeUrl || typeof o.address === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BaseAccount.typeUrl || typeof o.address === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                case 4:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pubKey: (0, helpers_1.isSet)(object.pubKey) ? any_1.Any.fromJSON(object.pubKey) : undefined,
            accountNumber: (0, helpers_1.isSet)(object.accountNumber) ? BigInt(object.accountNumber.toString()) : BigInt(0),
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? any_1.Any.toJSON(message.pubKey) : undefined);
        message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBaseAccount();
        message.address = object.address ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? any_1.Any.fromPartial(object.pubKey) : undefined;
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pubKey: object.pub_key ? any_1.Any.fromSDK(object.pub_key) : undefined,
            accountNumber: object?.account_number,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pubKey !== undefined && (obj.pub_key = message.pubKey ? any_1.Any.toSDK(message.pubKey) : undefined);
        obj.account_number = message.accountNumber;
        obj.sequence = message.sequence;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBaseAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = any_1.Any.fromAmino(object.pub_key);
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pubKey ? any_1.Any.toAmino(message.pubKey) : undefined;
        obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseAccount",
            value: exports.BaseAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BaseAccount.decode(message.value);
    },
    toProto(message) {
        return exports.BaseAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
            value: exports.BaseAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BaseAccount.typeUrl, exports.BaseAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BaseAccount.aminoType, exports.BaseAccount.typeUrl);
function createBaseModuleAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
        baseAccount: undefined,
        name: "",
        permissions: []
    };
}
exports.ModuleAccount = {
    typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
    aminoType: "cosmos-sdk/ModuleAccount",
    is(o) {
        return o && (o.$typeUrl === exports.ModuleAccount.typeUrl || typeof o.name === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleAccount.typeUrl || typeof o.name === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleAccount.typeUrl || typeof o.name === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            exports.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
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
            baseAccount: (0, helpers_1.isSet)(object.baseAccount) ? exports.BaseAccount.fromJSON(object.baseAccount) : undefined,
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            permissions: Array.isArray(object?.permissions) ? object.permissions.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? exports.BaseAccount.toJSON(message.baseAccount) : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? exports.BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.name = object.name ?? "";
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            baseAccount: object.base_account ? exports.BaseAccount.fromSDK(object.base_account) : undefined,
            name: object?.name,
            permissions: Array.isArray(object?.permissions) ? object.permissions.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.base_account = message.baseAccount ? exports.BaseAccount.toSDK(message.baseAccount) : undefined);
        obj.name = message.name;
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModuleAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = exports.BaseAccount.fromAmino(object.base_account);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? exports.BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.name = message.name;
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleAccount",
            value: exports.ModuleAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleAccount.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
            value: exports.ModuleAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleAccount.typeUrl, exports.ModuleAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleAccount.aminoType, exports.ModuleAccount.typeUrl);
function createBaseParams() {
    return {
        maxMemoCharacters: BigInt(0),
        txSigLimit: BigInt(0),
        txSizeCostPerByte: BigInt(0),
        sigVerifyCostEd25519: BigInt(0),
        sigVerifyCostSecp256k1: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/cosmos.auth.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.maxMemoCharacters === "bigint" && typeof o.txSigLimit === "bigint" && typeof o.txSizeCostPerByte === "bigint" && typeof o.sigVerifyCostEd25519 === "bigint" && typeof o.sigVerifyCostSecp256k1 === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.max_memo_characters === "bigint" && typeof o.tx_sig_limit === "bigint" && typeof o.tx_size_cost_per_byte === "bigint" && typeof o.sig_verify_cost_ed25519 === "bigint" && typeof o.sig_verify_cost_secp256k1 === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.max_memo_characters === "bigint" && typeof o.tx_sig_limit === "bigint" && typeof o.tx_size_cost_per_byte === "bigint" && typeof o.sig_verify_cost_ed25519 === "bigint" && typeof o.sig_verify_cost_secp256k1 === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxMemoCharacters !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (message.txSigLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (message.txSizeCostPerByte !== BigInt(0)) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (message.sigVerifyCostEd25519 !== BigInt(0)) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (message.sigVerifyCostSecp256k1 !== BigInt(0)) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
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
                    message.maxMemoCharacters = reader.uint64();
                    break;
                case 2:
                    message.txSigLimit = reader.uint64();
                    break;
                case 3:
                    message.txSizeCostPerByte = reader.uint64();
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = reader.uint64();
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = reader.uint64();
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
            maxMemoCharacters: (0, helpers_1.isSet)(object.maxMemoCharacters) ? BigInt(object.maxMemoCharacters.toString()) : BigInt(0),
            txSigLimit: (0, helpers_1.isSet)(object.txSigLimit) ? BigInt(object.txSigLimit.toString()) : BigInt(0),
            txSizeCostPerByte: (0, helpers_1.isSet)(object.txSizeCostPerByte) ? BigInt(object.txSizeCostPerByte.toString()) : BigInt(0),
            sigVerifyCostEd25519: (0, helpers_1.isSet)(object.sigVerifyCostEd25519) ? BigInt(object.sigVerifyCostEd25519.toString()) : BigInt(0),
            sigVerifyCostSecp256k1: (0, helpers_1.isSet)(object.sigVerifyCostSecp256k1) ? BigInt(object.sigVerifyCostSecp256k1.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxMemoCharacters !== undefined && (obj.maxMemoCharacters = (message.maxMemoCharacters || BigInt(0)).toString());
        message.txSigLimit !== undefined && (obj.txSigLimit = (message.txSigLimit || BigInt(0)).toString());
        message.txSizeCostPerByte !== undefined && (obj.txSizeCostPerByte = (message.txSizeCostPerByte || BigInt(0)).toString());
        message.sigVerifyCostEd25519 !== undefined && (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || BigInt(0)).toString());
        message.sigVerifyCostSecp256k1 !== undefined && (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? BigInt(object.maxMemoCharacters.toString()) : BigInt(0);
        message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? BigInt(object.txSigLimit.toString()) : BigInt(0);
        message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? BigInt(object.txSizeCostPerByte.toString()) : BigInt(0);
        message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? BigInt(object.sigVerifyCostEd25519.toString()) : BigInt(0);
        message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? BigInt(object.sigVerifyCostSecp256k1.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            maxMemoCharacters: object?.max_memo_characters,
            txSigLimit: object?.tx_sig_limit,
            txSizeCostPerByte: object?.tx_size_cost_per_byte,
            sigVerifyCostEd25519: object?.sig_verify_cost_ed25519,
            sigVerifyCostSecp256k1: object?.sig_verify_cost_secp256k1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.max_memo_characters = message.maxMemoCharacters;
        obj.tx_sig_limit = message.txSigLimit;
        obj.tx_size_cost_per_byte = message.txSizeCostPerByte;
        obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519;
        obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.max_memo_characters !== undefined && object.max_memo_characters !== null) {
            message.maxMemoCharacters = BigInt(object.max_memo_characters);
        }
        if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
            message.txSigLimit = BigInt(object.tx_sig_limit);
        }
        if (object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null) {
            message.txSizeCostPerByte = BigInt(object.tx_size_cost_per_byte);
        }
        if (object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null) {
            message.sigVerifyCostEd25519 = BigInt(object.sig_verify_cost_ed25519);
        }
        if (object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null) {
            message.sigVerifyCostSecp256k1 = BigInt(object.sig_verify_cost_secp256k1);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_memo_characters = message.maxMemoCharacters ? message.maxMemoCharacters.toString() : undefined;
        obj.tx_sig_limit = message.txSigLimit ? message.txSigLimit.toString() : undefined;
        obj.tx_size_cost_per_byte = message.txSizeCostPerByte ? message.txSizeCostPerByte.toString() : undefined;
        obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519 ? message.sigVerifyCostEd25519.toString() : undefined;
        obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1 ? message.sigVerifyCostSecp256k1.toString() : undefined;
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
            typeUrl: "/cosmos.auth.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
