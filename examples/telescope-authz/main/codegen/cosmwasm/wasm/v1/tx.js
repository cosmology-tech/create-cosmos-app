"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClearAdminResponse = exports.MsgClearAdmin = exports.MsgUpdateAdminResponse = exports.MsgUpdateAdmin = exports.MsgMigrateContractResponse = exports.MsgMigrateContract = exports.MsgExecuteContractResponse = exports.MsgExecuteContract = exports.MsgInstantiateContractResponse = exports.MsgInstantiateContract = exports.MsgStoreCodeResponse = exports.MsgStoreCode = void 0;
const types_1 = require("./types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const encoding_1 = require("@cosmjs/encoding");
const registry_1 = require("../../../registry");
function createBaseMsgStoreCode() {
    return {
        sender: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined
    };
}
exports.MsgStoreCode = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
    aminoType: "wasm/MsgStoreCode",
    is(o) {
        return o && (o.$typeUrl === exports.MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgStoreCode.typeUrl || typeof o.sender === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(18).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 5:
                    message.instantiatePermission = types_1.AccessConfig.decode(reader, reader.uint32());
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            wasmByteCode: (0, helpers_1.isSet)(object.wasmByteCode) ? (0, helpers_1.bytesFromBase64)(object.wasmByteCode) : new Uint8Array(),
            instantiatePermission: (0, helpers_1.isSet)(object.instantiatePermission) ? types_1.AccessConfig.fromJSON(object.instantiatePermission) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.wasmByteCode !== undefined && (obj.wasmByteCode = (0, helpers_1.base64FromBytes)(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
        message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? types_1.AccessConfig.toJSON(message.instantiatePermission) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgStoreCode();
        message.sender = object.sender ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? types_1.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            wasmByteCode: object?.wasm_byte_code,
            instantiatePermission: object.instantiate_permission ? types_1.AccessConfig.fromSDK(object.instantiate_permission) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.wasm_byte_code = message.wasmByteCode;
        message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toSDK(message.instantiatePermission) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgStoreCode();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = (0, encoding_1.fromBase64)(object.wasm_byte_code);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = types_1.AccessConfig.fromAmino(object.instantiate_permission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.wasm_byte_code = message.wasmByteCode ? (0, encoding_1.toBase64)(message.wasmByteCode) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toAmino(message.instantiatePermission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStoreCode.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgStoreCode",
            value: exports.MsgStoreCode.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStoreCode.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStoreCode.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: exports.MsgStoreCode.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgStoreCode.typeUrl, exports.MsgStoreCode);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgStoreCode.aminoType, exports.MsgStoreCode.typeUrl);
function createBaseMsgStoreCodeResponse() {
    return {
        codeId: BigInt(0)
    };
}
exports.MsgStoreCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
    aminoType: "wasm/MsgStoreCodeResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgStoreCodeResponse.typeUrl || typeof o.codeId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgStoreCodeResponse.typeUrl || typeof o.code_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgStoreCodeResponse.typeUrl || typeof o.code_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
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
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgStoreCodeResponse();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            codeId: object?.code_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code_id = message.codeId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgStoreCodeResponse();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStoreCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgStoreCodeResponse",
            value: exports.MsgStoreCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStoreCodeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStoreCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
            value: exports.MsgStoreCodeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgStoreCodeResponse.typeUrl, exports.MsgStoreCodeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgStoreCodeResponse.aminoType, exports.MsgStoreCodeResponse.typeUrl);
function createBaseMsgInstantiateContract() {
    return {
        sender: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: []
    };
}
exports.MsgInstantiateContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    aminoType: "wasm/MsgInstantiateContract",
    is(o) {
        return o && (o.$typeUrl === exports.MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isSDK(o.funds[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgInstantiateContract.typeUrl || typeof o.sender === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isAmino(o.funds[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            label: (0, helpers_1.isSet)(object.label) ? String(object.label) : "",
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.admin !== undefined && (obj.admin = message.admin);
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.label !== undefined && (obj.label = message.label);
        message.msg !== undefined && (obj.msg = (0, helpers_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContract();
        message.sender = object.sender ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            admin: object?.admin,
            codeId: object?.code_id,
            label: object?.label,
            msg: object?.msg,
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.admin = message.admin;
        obj.code_id = message.codeId;
        obj.label = message.label;
        obj.msg = message.msg;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantiateContract();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.admin = message.admin;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.label = message.label;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgInstantiateContract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgInstantiateContract",
            value: exports.MsgInstantiateContract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgInstantiateContract.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantiateContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: exports.MsgInstantiateContract.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgInstantiateContract.typeUrl, exports.MsgInstantiateContract);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgInstantiateContract.aminoType, exports.MsgInstantiateContract.typeUrl);
function createBaseMsgInstantiateContractResponse() {
    return {
        address: "",
        data: new Uint8Array()
    };
}
exports.MsgInstantiateContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
    aminoType: "wasm/MsgInstantiateContractResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgInstantiateContractResponse.typeUrl || typeof o.address === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContractResponse();
        message.address = object.address ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantiateContractResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgInstantiateContractResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgInstantiateContractResponse",
            value: exports.MsgInstantiateContractResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgInstantiateContractResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantiateContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
            value: exports.MsgInstantiateContractResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgInstantiateContractResponse.typeUrl, exports.MsgInstantiateContractResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgInstantiateContractResponse.aminoType, exports.MsgInstantiateContractResponse.typeUrl);
function createBaseMsgExecuteContract() {
    return {
        sender: "",
        contract: "",
        msg: new Uint8Array(),
        funds: []
    };
}
exports.MsgExecuteContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    aminoType: "wasm/MsgExecuteContract",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isSDK(o.funds[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExecuteContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isAmino(o.funds[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(26).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.msg = reader.bytes();
                    break;
                case 5:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : "",
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined && (obj.msg = (0, helpers_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExecuteContract();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            contract: object?.contract,
            msg: object?.msg,
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        obj.msg = message.msg;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExecuteContract();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecuteContract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgExecuteContract",
            value: exports.MsgExecuteContract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecuteContract.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecuteContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: exports.MsgExecuteContract.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExecuteContract.typeUrl, exports.MsgExecuteContract);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExecuteContract.aminoType, exports.MsgExecuteContract.typeUrl);
function createBaseMsgExecuteContractResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.MsgExecuteContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
    aminoType: "wasm/MsgExecuteContractResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExecuteContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExecuteContractResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgExecuteContractResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecuteContractResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgExecuteContractResponse",
            value: exports.MsgExecuteContractResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecuteContractResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecuteContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
            value: exports.MsgExecuteContractResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExecuteContractResponse.typeUrl, exports.MsgExecuteContractResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExecuteContractResponse.aminoType, exports.MsgExecuteContractResponse.typeUrl);
function createBaseMsgMigrateContract() {
    return {
        sender: "",
        contract: "",
        codeId: BigInt(0),
        msg: new Uint8Array()
    };
}
exports.MsgMigrateContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
    aminoType: "wasm/MsgMigrateContract",
    is(o) {
        return o && (o.$typeUrl === exports.MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgMigrateContract.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.msg = reader.bytes();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : "",
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.contract !== undefined && (obj.contract = message.contract);
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.msg !== undefined && (obj.msg = (0, helpers_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMigrateContract();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            contract: object?.contract,
            codeId: object?.code_id,
            msg: object?.msg
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        obj.code_id = message.codeId;
        obj.msg = message.msg;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgMigrateContract();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMigrateContract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgMigrateContract",
            value: exports.MsgMigrateContract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMigrateContract.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMigrateContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: exports.MsgMigrateContract.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgMigrateContract.typeUrl, exports.MsgMigrateContract);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgMigrateContract.aminoType, exports.MsgMigrateContract.typeUrl);
function createBaseMsgMigrateContractResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.MsgMigrateContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
    aminoType: "wasm/MsgMigrateContractResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgMigrateContractResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMigrateContractResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgMigrateContractResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMigrateContractResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgMigrateContractResponse",
            value: exports.MsgMigrateContractResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMigrateContractResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMigrateContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
            value: exports.MsgMigrateContractResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgMigrateContractResponse.typeUrl, exports.MsgMigrateContractResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgMigrateContractResponse.aminoType, exports.MsgMigrateContractResponse.typeUrl);
function createBaseMsgUpdateAdmin() {
    return {
        sender: "",
        newAdmin: "",
        contract: ""
    };
}
exports.MsgUpdateAdmin = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
    aminoType: "wasm/MsgUpdateAdmin",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.newAdmin === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateAdmin.typeUrl || typeof o.sender === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.newAdmin !== "") {
            writer.uint32(18).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.newAdmin = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            newAdmin: (0, helpers_1.isSet)(object.newAdmin) ? String(object.newAdmin) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateAdmin();
        message.sender = object.sender ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            newAdmin: object?.new_admin,
            contract: object?.contract
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.new_admin = message.newAdmin;
        obj.contract = message.contract;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateAdmin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.new_admin = message.newAdmin;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgUpdateAdmin",
            value: exports.MsgUpdateAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: exports.MsgUpdateAdmin.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateAdmin.typeUrl, exports.MsgUpdateAdmin);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateAdmin.aminoType, exports.MsgUpdateAdmin.typeUrl);
function createBaseMsgUpdateAdminResponse() {
    return {};
}
exports.MsgUpdateAdminResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
    aminoType: "wasm/MsgUpdateAdminResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateAdminResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateAdminResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgUpdateAdminResponse",
            value: exports.MsgUpdateAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
            value: exports.MsgUpdateAdminResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateAdminResponse.typeUrl, exports.MsgUpdateAdminResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateAdminResponse.aminoType, exports.MsgUpdateAdminResponse.typeUrl);
function createBaseMsgClearAdmin() {
    return {
        sender: "",
        contract: ""
    };
}
exports.MsgClearAdmin = {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
    aminoType: "wasm/MsgClearAdmin",
    is(o) {
        return o && (o.$typeUrl === exports.MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgClearAdmin.typeUrl || typeof o.sender === "string" && typeof o.contract === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClearAdmin();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            contract: object?.contract
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgClearAdmin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClearAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgClearAdmin",
            value: exports.MsgClearAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgClearAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClearAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
            value: exports.MsgClearAdmin.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgClearAdmin.typeUrl, exports.MsgClearAdmin);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgClearAdmin.aminoType, exports.MsgClearAdmin.typeUrl);
function createBaseMsgClearAdminResponse() {
    return {};
}
exports.MsgClearAdminResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
    aminoType: "wasm/MsgClearAdminResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgClearAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgClearAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgClearAdminResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgClearAdminResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseMsgClearAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClearAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgClearAdminResponse",
            value: exports.MsgClearAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgClearAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClearAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
            value: exports.MsgClearAdminResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgClearAdminResponse.typeUrl, exports.MsgClearAdminResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgClearAdminResponse.aminoType, exports.MsgClearAdminResponse.typeUrl);
