"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnpinCodesProposal = exports.PinCodesProposal = exports.ClearAdminProposal = exports.UpdateAdminProposal = exports.ExecuteContractProposal = exports.SudoContractProposal = exports.MigrateContractProposal = exports.InstantiateContractProposal = exports.StoreCodeProposal = void 0;
const types_1 = require("./types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const encoding_1 = require("@cosmjs/encoding");
const registry_1 = require("../../../registry");
function createBaseStoreCodeProposal() {
    return {
        title: "",
        description: "",
        runAs: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined
    };
}
exports.StoreCodeProposal = {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    aminoType: "wasm/StoreCodeProposal",
    is(o) {
        return o && (o.$typeUrl === exports.StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && (o.wasmByteCode instanceof Uint8Array || typeof o.wasmByteCode === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.StoreCodeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && (o.wasm_byte_code instanceof Uint8Array || typeof o.wasm_byte_code === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreCodeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 7:
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            runAs: (0, helpers_1.isSet)(object.runAs) ? String(object.runAs) : "",
            wasmByteCode: (0, helpers_1.isSet)(object.wasmByteCode) ? (0, helpers_1.bytesFromBase64)(object.wasmByteCode) : new Uint8Array(),
            instantiatePermission: (0, helpers_1.isSet)(object.instantiatePermission) ? types_1.AccessConfig.fromJSON(object.instantiatePermission) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
        message.wasmByteCode !== undefined && (obj.wasmByteCode = (0, helpers_1.base64FromBytes)(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
        message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? types_1.AccessConfig.toJSON(message.instantiatePermission) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreCodeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? types_1.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            runAs: object?.run_as,
            wasmByteCode: object?.wasm_byte_code,
            instantiatePermission: object.instantiate_permission ? types_1.AccessConfig.fromSDK(object.instantiate_permission) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
        obj.wasm_byte_code = message.wasmByteCode;
        message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toSDK(message.instantiatePermission) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseStoreCodeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
        obj.wasm_byte_code = message.wasmByteCode ? (0, encoding_1.toBase64)(message.wasmByteCode) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toAmino(message.instantiatePermission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreCodeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/StoreCodeProposal",
            value: exports.StoreCodeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreCodeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.StoreCodeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
            value: exports.StoreCodeProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.StoreCodeProposal.typeUrl, exports.StoreCodeProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.StoreCodeProposal.aminoType, exports.StoreCodeProposal.typeUrl);
function createBaseInstantiateContractProposal() {
    return {
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: []
    };
}
exports.InstantiateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    aminoType: "wasm/InstantiateContractProposal",
    is(o) {
        return o && (o.$typeUrl === exports.InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.admin === "string" && typeof o.codeId === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isSDK(o.funds[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InstantiateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.admin === "string" && typeof o.code_id === "bigint" && typeof o.label === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isAmino(o.funds[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.admin = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.label = reader.string();
                    break;
                case 7:
                    message.msg = reader.bytes();
                    break;
                case 8:
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            runAs: (0, helpers_1.isSet)(object.runAs) ? String(object.runAs) : "",
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            label: (0, helpers_1.isSet)(object.label) ? String(object.label) : "",
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
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
        const message = createBaseInstantiateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            runAs: object?.run_as,
            admin: object?.admin,
            codeId: object?.code_id,
            label: object?.label,
            msg: object?.msg,
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
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
        const message = createBaseInstantiateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
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
        return exports.InstantiateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/InstantiateContractProposal",
            value: exports.InstantiateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InstantiateContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.InstantiateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
            value: exports.InstantiateContractProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InstantiateContractProposal.typeUrl, exports.InstantiateContractProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InstantiateContractProposal.aminoType, exports.InstantiateContractProposal.typeUrl);
function createBaseMigrateContractProposal() {
    return {
        title: "",
        description: "",
        contract: "",
        codeId: BigInt(0),
        msg: new Uint8Array()
    };
}
exports.MigrateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    aminoType: "wasm/MigrateContractProposal",
    is(o) {
        return o && (o.$typeUrl === exports.MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MigrateContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : "",
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.msg !== undefined && (obj.msg = (0, helpers_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMigrateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            contract: object?.contract,
            codeId: object?.code_id,
            msg: object?.msg
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        obj.code_id = message.codeId;
        obj.msg = message.msg;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMigrateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MigrateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MigrateContractProposal",
            value: exports.MigrateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MigrateContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MigrateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
            value: exports.MigrateContractProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MigrateContractProposal.typeUrl, exports.MigrateContractProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MigrateContractProposal.aminoType, exports.MigrateContractProposal.typeUrl);
function createBaseSudoContractProposal() {
    return {
        title: "",
        description: "",
        contract: "",
        msg: new Uint8Array()
    };
}
exports.SudoContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    aminoType: "wasm/SudoContractProposal",
    is(o) {
        return o && (o.$typeUrl === exports.SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SudoContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSudoContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : "",
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined && (obj.msg = (0, helpers_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSudoContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            contract: object?.contract,
            msg: object?.msg
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        obj.msg = message.msg;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSudoContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SudoContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/SudoContractProposal",
            value: exports.SudoContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SudoContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SudoContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
            value: exports.SudoContractProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SudoContractProposal.typeUrl, exports.SudoContractProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SudoContractProposal.aminoType, exports.SudoContractProposal.typeUrl);
function createBaseExecuteContractProposal() {
    return {
        title: "",
        description: "",
        runAs: "",
        contract: "",
        msg: new Uint8Array(),
        funds: []
    };
}
exports.ExecuteContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    aminoType: "wasm/ExecuteContractProposal",
    is(o) {
        return o && (o.$typeUrl === exports.ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.runAs === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.is(o.funds[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isSDK(o.funds[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ExecuteContractProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.run_as === "string" && typeof o.contract === "string" && (o.msg instanceof Uint8Array || typeof o.msg === "string") && Array.isArray(o.funds) && (!o.funds.length || coin_1.Coin.isAmino(o.funds[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
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
        const message = createBaseExecuteContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            runAs: (0, helpers_1.isSet)(object.runAs) ? String(object.runAs) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : "",
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
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
        const message = createBaseExecuteContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            runAs: object?.run_as,
            contract: object?.contract,
            msg: object?.msg,
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
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
        const message = createBaseExecuteContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
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
        return exports.ExecuteContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ExecuteContractProposal",
            value: exports.ExecuteContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ExecuteContractProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ExecuteContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
            value: exports.ExecuteContractProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExecuteContractProposal.typeUrl, exports.ExecuteContractProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ExecuteContractProposal.aminoType, exports.ExecuteContractProposal.typeUrl);
function createBaseUpdateAdminProposal() {
    return {
        title: "",
        description: "",
        newAdmin: "",
        contract: ""
    };
}
exports.UpdateAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    aminoType: "wasm/UpdateAdminProposal",
    is(o) {
        return o && (o.$typeUrl === exports.UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.newAdmin === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpdateAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.new_admin === "string" && typeof o.contract === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateAdminProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                case 4:
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            newAdmin: (0, helpers_1.isSet)(object.newAdmin) ? String(object.newAdmin) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            newAdmin: object?.new_admin,
            contract: object?.contract
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.new_admin = message.newAdmin;
        obj.contract = message.contract;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpdateAdminProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.new_admin = message.newAdmin;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateAdminProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UpdateAdminProposal",
            value: exports.UpdateAdminProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateAdminProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
            value: exports.UpdateAdminProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpdateAdminProposal.typeUrl, exports.UpdateAdminProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpdateAdminProposal.aminoType, exports.UpdateAdminProposal.typeUrl);
function createBaseClearAdminProposal() {
    return {
        title: "",
        description: "",
        contract: ""
    };
}
exports.ClearAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    aminoType: "wasm/ClearAdminProposal",
    is(o) {
        return o && (o.$typeUrl === exports.ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClearAdminProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.contract === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClearAdminProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            contract: (0, helpers_1.isSet)(object.contract) ? String(object.contract) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClearAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            contract: object?.contract
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseClearAdminProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClearAdminProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ClearAdminProposal",
            value: exports.ClearAdminProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClearAdminProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ClearAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
            value: exports.ClearAdminProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClearAdminProposal.typeUrl, exports.ClearAdminProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClearAdminProposal.aminoType, exports.ClearAdminProposal.typeUrl);
function createBasePinCodesProposal() {
    return {
        title: "",
        description: "",
        codeIds: []
    };
}
exports.PinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    aminoType: "wasm/PinCodesProposal",
    is(o) {
        return o && (o.$typeUrl === exports.PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePinCodesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.codeIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e);
        }
        else {
            obj.code_ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBasePinCodesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PinCodesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/PinCodesProposal",
            value: exports.PinCodesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return exports.PinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
            value: exports.PinCodesProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PinCodesProposal.typeUrl, exports.PinCodesProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PinCodesProposal.aminoType, exports.PinCodesProposal.typeUrl);
function createBaseUnpinCodesProposal() {
    return {
        title: "",
        description: "",
        codeIds: []
    };
}
exports.UnpinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    aminoType: "wasm/UnpinCodesProposal",
    is(o) {
        return o && (o.$typeUrl === exports.UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UnpinCodesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpinCodesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.codeIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnpinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e);
        }
        else {
            obj.code_ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUnpinCodesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnpinCodesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UnpinCodesProposal",
            value: exports.UnpinCodesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnpinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UnpinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
            value: exports.UnpinCodesProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UnpinCodesProposal.typeUrl, exports.UnpinCodesProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UnpinCodesProposal.aminoType, exports.UnpinCodesProposal.typeUrl);
