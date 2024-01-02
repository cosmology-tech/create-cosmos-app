"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.AbsoluteTxPosition = exports.ContractCodeHistoryEntry = exports.ContractInfo = exports.CodeInfo = exports.Params = exports.AccessConfig = exports.AccessTypeParam = exports.contractCodeHistoryOperationTypeToJSON = exports.contractCodeHistoryOperationTypeFromJSON = exports.ContractCodeHistoryOperationTypeAmino = exports.ContractCodeHistoryOperationTypeSDKType = exports.ContractCodeHistoryOperationType = exports.accessTypeToJSON = exports.accessTypeFromJSON = exports.AccessTypeAmino = exports.AccessTypeSDKType = exports.AccessType = void 0;
const any_1 = require("../../../google/protobuf/any");
const helpers_1 = require("../../../helpers");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const encoding_1 = require("@cosmjs/encoding");
/** AccessType permission types */
var AccessType;
(function (AccessType) {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
    /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */
    AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
    AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType || (exports.AccessType = AccessType = {}));
exports.AccessTypeSDKType = AccessType;
exports.AccessTypeAmino = AccessType;
function accessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TYPE_UNSPECIFIED":
            return AccessType.ACCESS_TYPE_UNSPECIFIED;
        case 1:
        case "ACCESS_TYPE_NOBODY":
            return AccessType.ACCESS_TYPE_NOBODY;
        case 2:
        case "ACCESS_TYPE_ONLY_ADDRESS":
            return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
        case 3:
        case "ACCESS_TYPE_EVERYBODY":
            return AccessType.ACCESS_TYPE_EVERYBODY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessType.UNRECOGNIZED;
    }
}
exports.accessTypeFromJSON = accessTypeFromJSON;
function accessTypeToJSON(object) {
    switch (object) {
        case AccessType.ACCESS_TYPE_UNSPECIFIED:
            return "ACCESS_TYPE_UNSPECIFIED";
        case AccessType.ACCESS_TYPE_NOBODY:
            return "ACCESS_TYPE_NOBODY";
        case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
            return "ACCESS_TYPE_ONLY_ADDRESS";
        case AccessType.ACCESS_TYPE_EVERYBODY:
            return "ACCESS_TYPE_EVERYBODY";
        case AccessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accessTypeToJSON = accessTypeToJSON;
/** ContractCodeHistoryOperationType actions that caused a code change */
var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType || (exports.ContractCodeHistoryOperationType = ContractCodeHistoryOperationType = {}));
exports.ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
exports.ContractCodeHistoryOperationTypeAmino = ContractCodeHistoryOperationType;
function contractCodeHistoryOperationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
        case 2:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
        case 3:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContractCodeHistoryOperationType.UNRECOGNIZED;
    }
}
exports.contractCodeHistoryOperationTypeFromJSON = contractCodeHistoryOperationTypeFromJSON;
function contractCodeHistoryOperationTypeToJSON(object) {
    switch (object) {
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
        case ContractCodeHistoryOperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.contractCodeHistoryOperationTypeToJSON = contractCodeHistoryOperationTypeToJSON;
function createBaseAccessTypeParam() {
    return {
        value: 0
    };
}
exports.AccessTypeParam = {
    typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
    aminoType: "wasm/AccessTypeParam",
    is(o) {
        return o && (o.$typeUrl === exports.AccessTypeParam.typeUrl || (0, helpers_1.isSet)(o.value));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccessTypeParam.typeUrl || (0, helpers_1.isSet)(o.value));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccessTypeParam.typeUrl || (0, helpers_1.isSet)(o.value));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTypeParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
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
            value: (0, helpers_1.isSet)(object.value) ? accessTypeFromJSON(object.value) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = accessTypeToJSON(message.value));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccessTypeParam();
        message.value = object.value ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            value: (0, helpers_1.isSet)(object.value) ? accessTypeFromJSON(object.value) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.value !== undefined && (obj.value = accessTypeToJSON(message.value));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccessTypeParam();
        if (object.value !== undefined && object.value !== null) {
            message.value = accessTypeFromJSON(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.value = accessTypeToJSON(message.value);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccessTypeParam.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessTypeParam",
            value: exports.AccessTypeParam.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccessTypeParam.decode(message.value);
    },
    toProto(message) {
        return exports.AccessTypeParam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
            value: exports.AccessTypeParam.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccessTypeParam.typeUrl, exports.AccessTypeParam);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccessTypeParam.aminoType, exports.AccessTypeParam.typeUrl);
function createBaseAccessConfig() {
    return {
        permission: 0,
        address: ""
    };
}
exports.AccessConfig = {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
    aminoType: "wasm/AccessConfig",
    is(o) {
        return o && (o.$typeUrl === exports.AccessConfig.typeUrl || (0, helpers_1.isSet)(o.permission) && typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AccessConfig.typeUrl || (0, helpers_1.isSet)(o.permission) && typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccessConfig.typeUrl || (0, helpers_1.isSet)(o.permission) && typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.permission !== 0) {
            writer.uint32(8).int32(message.permission);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = reader.int32();
                    break;
                case 2:
                    message.address = reader.string();
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
            permission: (0, helpers_1.isSet)(object.permission) ? accessTypeFromJSON(object.permission) : -1,
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.permission !== undefined && (obj.permission = accessTypeToJSON(message.permission));
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccessConfig();
        message.permission = object.permission ?? 0;
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            permission: (0, helpers_1.isSet)(object.permission) ? accessTypeFromJSON(object.permission) : -1,
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        message.permission !== undefined && (obj.permission = accessTypeToJSON(message.permission));
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAccessConfig();
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = accessTypeFromJSON(object.permission);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.permission = accessTypeToJSON(message.permission);
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccessConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessConfig",
            value: exports.AccessConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccessConfig.decode(message.value);
    },
    toProto(message) {
        return exports.AccessConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
            value: exports.AccessConfig.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccessConfig.typeUrl, exports.AccessConfig);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccessConfig.aminoType, exports.AccessConfig.typeUrl);
function createBaseParams() {
    return {
        codeUploadAccess: exports.AccessConfig.fromPartial({}),
        instantiateDefaultPermission: 0,
        maxWasmCodeSize: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/cosmwasm.wasm.v1.Params",
    aminoType: "wasm/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || exports.AccessConfig.is(o.codeUploadAccess) && (0, helpers_1.isSet)(o.instantiateDefaultPermission) && typeof o.maxWasmCodeSize === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || exports.AccessConfig.isSDK(o.code_upload_access) && (0, helpers_1.isSet)(o.instantiate_default_permission) && typeof o.max_wasm_code_size === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || exports.AccessConfig.isAmino(o.code_upload_access) && (0, helpers_1.isSet)(o.instantiate_default_permission) && typeof o.max_wasm_code_size === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeUploadAccess !== undefined) {
            exports.AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateDefaultPermission !== 0) {
            writer.uint32(16).int32(message.instantiateDefaultPermission);
        }
        if (message.maxWasmCodeSize !== BigInt(0)) {
            writer.uint32(24).uint64(message.maxWasmCodeSize);
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
                    message.codeUploadAccess = exports.AccessConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateDefaultPermission = reader.int32();
                    break;
                case 3:
                    message.maxWasmCodeSize = reader.uint64();
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
            codeUploadAccess: (0, helpers_1.isSet)(object.codeUploadAccess) ? exports.AccessConfig.fromJSON(object.codeUploadAccess) : undefined,
            instantiateDefaultPermission: (0, helpers_1.isSet)(object.instantiateDefaultPermission) ? accessTypeFromJSON(object.instantiateDefaultPermission) : -1,
            maxWasmCodeSize: (0, helpers_1.isSet)(object.maxWasmCodeSize) ? BigInt(object.maxWasmCodeSize.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeUploadAccess !== undefined && (obj.codeUploadAccess = message.codeUploadAccess ? exports.AccessConfig.toJSON(message.codeUploadAccess) : undefined);
        message.instantiateDefaultPermission !== undefined && (obj.instantiateDefaultPermission = accessTypeToJSON(message.instantiateDefaultPermission));
        message.maxWasmCodeSize !== undefined && (obj.maxWasmCodeSize = (message.maxWasmCodeSize || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.codeUploadAccess = object.codeUploadAccess !== undefined && object.codeUploadAccess !== null ? exports.AccessConfig.fromPartial(object.codeUploadAccess) : undefined;
        message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
        message.maxWasmCodeSize = object.maxWasmCodeSize !== undefined && object.maxWasmCodeSize !== null ? BigInt(object.maxWasmCodeSize.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            codeUploadAccess: object.code_upload_access ? exports.AccessConfig.fromSDK(object.code_upload_access) : undefined,
            instantiateDefaultPermission: (0, helpers_1.isSet)(object.instantiate_default_permission) ? accessTypeFromJSON(object.instantiate_default_permission) : -1,
            maxWasmCodeSize: object?.max_wasm_code_size
        };
    },
    toSDK(message) {
        const obj = {};
        message.codeUploadAccess !== undefined && (obj.code_upload_access = message.codeUploadAccess ? exports.AccessConfig.toSDK(message.codeUploadAccess) : undefined);
        message.instantiateDefaultPermission !== undefined && (obj.instantiate_default_permission = accessTypeToJSON(message.instantiateDefaultPermission));
        obj.max_wasm_code_size = message.maxWasmCodeSize;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.code_upload_access !== undefined && object.code_upload_access !== null) {
            message.codeUploadAccess = exports.AccessConfig.fromAmino(object.code_upload_access);
        }
        if (object.instantiate_default_permission !== undefined && object.instantiate_default_permission !== null) {
            message.instantiateDefaultPermission = accessTypeFromJSON(object.instantiate_default_permission);
        }
        if (object.max_wasm_code_size !== undefined && object.max_wasm_code_size !== null) {
            message.maxWasmCodeSize = BigInt(object.max_wasm_code_size);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_upload_access = message.codeUploadAccess ? exports.AccessConfig.toAmino(message.codeUploadAccess) : undefined;
        obj.instantiate_default_permission = accessTypeToJSON(message.instantiateDefaultPermission);
        obj.max_wasm_code_size = message.maxWasmCodeSize ? message.maxWasmCodeSize.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Params",
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
            typeUrl: "/cosmwasm.wasm.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseCodeInfo() {
    return {
        codeHash: new Uint8Array(),
        creator: "",
        instantiateConfig: exports.AccessConfig.fromPartial({})
    };
}
exports.CodeInfo = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
    aminoType: "wasm/CodeInfo",
    is(o) {
        return o && (o.$typeUrl === exports.CodeInfo.typeUrl || (o.codeHash instanceof Uint8Array || typeof o.codeHash === "string") && typeof o.creator === "string" && exports.AccessConfig.is(o.instantiateConfig));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CodeInfo.typeUrl || (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string") && typeof o.creator === "string" && exports.AccessConfig.isSDK(o.instantiate_config));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CodeInfo.typeUrl || (o.code_hash instanceof Uint8Array || typeof o.code_hash === "string") && typeof o.creator === "string" && exports.AccessConfig.isAmino(o.instantiate_config));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeHash.length !== 0) {
            writer.uint32(10).bytes(message.codeHash);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.instantiateConfig !== undefined) {
            exports.AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeHash = reader.bytes();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.instantiateConfig = exports.AccessConfig.decode(reader, reader.uint32());
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
            codeHash: (0, helpers_1.isSet)(object.codeHash) ? (0, helpers_1.bytesFromBase64)(object.codeHash) : new Uint8Array(),
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : "",
            instantiateConfig: (0, helpers_1.isSet)(object.instantiateConfig) ? exports.AccessConfig.fromJSON(object.instantiateConfig) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeHash !== undefined && (obj.codeHash = (0, helpers_1.base64FromBytes)(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
        message.creator !== undefined && (obj.creator = message.creator);
        message.instantiateConfig !== undefined && (obj.instantiateConfig = message.instantiateConfig ? exports.AccessConfig.toJSON(message.instantiateConfig) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCodeInfo();
        message.codeHash = object.codeHash ?? new Uint8Array();
        message.creator = object.creator ?? "";
        message.instantiateConfig = object.instantiateConfig !== undefined && object.instantiateConfig !== null ? exports.AccessConfig.fromPartial(object.instantiateConfig) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            codeHash: object?.code_hash,
            creator: object?.creator,
            instantiateConfig: object.instantiate_config ? exports.AccessConfig.fromSDK(object.instantiate_config) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code_hash = message.codeHash;
        obj.creator = message.creator;
        message.instantiateConfig !== undefined && (obj.instantiate_config = message.instantiateConfig ? exports.AccessConfig.toSDK(message.instantiateConfig) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCodeInfo();
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = (0, helpers_1.bytesFromBase64)(object.code_hash);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.instantiate_config !== undefined && object.instantiate_config !== null) {
            message.instantiateConfig = exports.AccessConfig.fromAmino(object.instantiate_config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_hash = message.codeHash ? (0, helpers_1.base64FromBytes)(message.codeHash) : undefined;
        obj.creator = message.creator;
        obj.instantiate_config = message.instantiateConfig ? exports.AccessConfig.toAmino(message.instantiateConfig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CodeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CodeInfo",
            value: exports.CodeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
            value: exports.CodeInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CodeInfo.typeUrl, exports.CodeInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CodeInfo.aminoType, exports.CodeInfo.typeUrl);
function createBaseContractInfo() {
    return {
        codeId: BigInt(0),
        creator: "",
        admin: "",
        label: "",
        created: undefined,
        ibcPortId: "",
        extension: undefined
    };
}
exports.ContractInfo = {
    typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
    aminoType: "wasm/ContractInfo",
    is(o) {
        return o && (o.$typeUrl === exports.ContractInfo.typeUrl || typeof o.codeId === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string" && typeof o.ibcPortId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ContractInfo.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string" && typeof o.ibc_port_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ContractInfo.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string" && typeof o.ibc_port_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.created !== undefined) {
            exports.AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
        }
        if (message.ibcPortId !== "") {
            writer.uint32(50).string(message.ibcPortId);
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.extension), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.created = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ibcPortId = reader.string();
                    break;
                case 7:
                    message.extension = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
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
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : "",
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            label: (0, helpers_1.isSet)(object.label) ? String(object.label) : "",
            created: (0, helpers_1.isSet)(object.created) ? exports.AbsoluteTxPosition.fromJSON(object.created) : undefined,
            ibcPortId: (0, helpers_1.isSet)(object.ibcPortId) ? String(object.ibcPortId) : "",
            extension: (0, helpers_1.isSet)(object.extension) ? registry_1.GlobalDecoderRegistry.fromJSON(object.extension) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.creator !== undefined && (obj.creator = message.creator);
        message.admin !== undefined && (obj.admin = message.admin);
        message.label !== undefined && (obj.label = message.label);
        message.created !== undefined && (obj.created = message.created ? exports.AbsoluteTxPosition.toJSON(message.created) : undefined);
        message.ibcPortId !== undefined && (obj.ibcPortId = message.ibcPortId);
        message.extension !== undefined && (obj.extension = message.extension ? registry_1.GlobalDecoderRegistry.toJSON(message.extension) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContractInfo();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.created = object.created !== undefined && object.created !== null ? exports.AbsoluteTxPosition.fromPartial(object.created) : undefined;
        message.ibcPortId = object.ibcPortId ?? "";
        message.extension = object.extension !== undefined && object.extension !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.extension) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            codeId: object?.code_id,
            creator: object?.creator,
            admin: object?.admin,
            label: object?.label,
            created: object.created ? exports.AbsoluteTxPosition.fromSDK(object.created) : undefined,
            ibcPortId: object?.ibc_port_id,
            extension: object.extension ? registry_1.GlobalDecoderRegistry.fromSDK(object.extension) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code_id = message.codeId;
        obj.creator = message.creator;
        obj.admin = message.admin;
        obj.label = message.label;
        message.created !== undefined && (obj.created = message.created ? exports.AbsoluteTxPosition.toSDK(message.created) : undefined);
        obj.ibc_port_id = message.ibcPortId;
        message.extension !== undefined && (obj.extension = message.extension ? registry_1.GlobalDecoderRegistry.toSDK(message.extension) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseContractInfo();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = exports.AbsoluteTxPosition.fromAmino(object.created);
        }
        if (object.ibc_port_id !== undefined && object.ibc_port_id !== null) {
            message.ibcPortId = object.ibc_port_id;
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.extension);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.creator = message.creator;
        obj.admin = message.admin;
        obj.label = message.label;
        obj.created = message.created ? exports.AbsoluteTxPosition.toAmino(message.created) : undefined;
        obj.ibc_port_id = message.ibcPortId;
        obj.extension = message.extension ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.extension) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractInfo",
            value: exports.ContractInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContractInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ContractInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
            value: exports.ContractInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ContractInfo.typeUrl, exports.ContractInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ContractInfo.aminoType, exports.ContractInfo.typeUrl);
function createBaseContractCodeHistoryEntry() {
    return {
        operation: 0,
        codeId: BigInt(0),
        updated: undefined,
        msg: new Uint8Array()
    };
}
exports.ContractCodeHistoryEntry = {
    typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
    aminoType: "wasm/ContractCodeHistoryEntry",
    is(o) {
        return o && (o.$typeUrl === exports.ContractCodeHistoryEntry.typeUrl || (0, helpers_1.isSet)(o.operation) && typeof o.codeId === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ContractCodeHistoryEntry.typeUrl || (0, helpers_1.isSet)(o.operation) && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ContractCodeHistoryEntry.typeUrl || (0, helpers_1.isSet)(o.operation) && typeof o.code_id === "bigint" && (o.msg instanceof Uint8Array || typeof o.msg === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.operation !== 0) {
            writer.uint32(8).int32(message.operation);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.updated !== undefined) {
            exports.AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCodeHistoryEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operation = reader.int32();
                    break;
                case 2:
                    message.codeId = reader.uint64();
                    break;
                case 3:
                    message.updated = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
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
            operation: (0, helpers_1.isSet)(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            updated: (0, helpers_1.isSet)(object.updated) ? exports.AbsoluteTxPosition.fromJSON(object.updated) : undefined,
            msg: (0, helpers_1.isSet)(object.msg) ? (0, helpers_1.bytesFromBase64)(object.msg) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.operation !== undefined && (obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation));
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.updated !== undefined && (obj.updated = message.updated ? exports.AbsoluteTxPosition.toJSON(message.updated) : undefined);
        message.msg !== undefined && (obj.msg = (0, helpers_1.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContractCodeHistoryEntry();
        message.operation = object.operation ?? 0;
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.updated = object.updated !== undefined && object.updated !== null ? exports.AbsoluteTxPosition.fromPartial(object.updated) : undefined;
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            operation: (0, helpers_1.isSet)(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
            codeId: object?.code_id,
            updated: object.updated ? exports.AbsoluteTxPosition.fromSDK(object.updated) : undefined,
            msg: object?.msg
        };
    },
    toSDK(message) {
        const obj = {};
        message.operation !== undefined && (obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation));
        obj.code_id = message.codeId;
        message.updated !== undefined && (obj.updated = message.updated ? exports.AbsoluteTxPosition.toSDK(message.updated) : undefined);
        obj.msg = message.msg;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseContractCodeHistoryEntry();
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = contractCodeHistoryOperationTypeFromJSON(object.operation);
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = exports.AbsoluteTxPosition.fromAmino(object.updated);
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation);
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.updated = message.updated ? exports.AbsoluteTxPosition.toAmino(message.updated) : undefined;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractCodeHistoryEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractCodeHistoryEntry",
            value: exports.ContractCodeHistoryEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContractCodeHistoryEntry.decode(message.value);
    },
    toProto(message) {
        return exports.ContractCodeHistoryEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
            value: exports.ContractCodeHistoryEntry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ContractCodeHistoryEntry.typeUrl, exports.ContractCodeHistoryEntry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ContractCodeHistoryEntry.aminoType, exports.ContractCodeHistoryEntry.typeUrl);
function createBaseAbsoluteTxPosition() {
    return {
        blockHeight: BigInt(0),
        txIndex: BigInt(0)
    };
}
exports.AbsoluteTxPosition = {
    typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
    aminoType: "wasm/AbsoluteTxPosition",
    is(o) {
        return o && (o.$typeUrl === exports.AbsoluteTxPosition.typeUrl || typeof o.blockHeight === "bigint" && typeof o.txIndex === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AbsoluteTxPosition.typeUrl || typeof o.block_height === "bigint" && typeof o.tx_index === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AbsoluteTxPosition.typeUrl || typeof o.block_height === "bigint" && typeof o.tx_index === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        if (message.txIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.txIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAbsoluteTxPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint64();
                    break;
                case 2:
                    message.txIndex = reader.uint64();
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
            blockHeight: (0, helpers_1.isSet)(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
            txIndex: (0, helpers_1.isSet)(object.txIndex) ? BigInt(object.txIndex.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
        message.txIndex !== undefined && (obj.txIndex = (message.txIndex || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAbsoluteTxPosition();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            blockHeight: object?.block_height,
            txIndex: object?.tx_index
        };
    },
    toSDK(message) {
        const obj = {};
        obj.block_height = message.blockHeight;
        obj.tx_index = message.txIndex;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAbsoluteTxPosition();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = BigInt(object.tx_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        obj.tx_index = message.txIndex ? message.txIndex.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AbsoluteTxPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AbsoluteTxPosition",
            value: exports.AbsoluteTxPosition.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AbsoluteTxPosition.decode(message.value);
    },
    toProto(message) {
        return exports.AbsoluteTxPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
            value: exports.AbsoluteTxPosition.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AbsoluteTxPosition.typeUrl, exports.AbsoluteTxPosition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AbsoluteTxPosition.aminoType, exports.AbsoluteTxPosition.typeUrl);
function createBaseModel() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.Model = {
    typeUrl: "/cosmwasm.wasm.v1.Model",
    aminoType: "wasm/Model",
    is(o) {
        return o && (o.$typeUrl === exports.Model.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Model.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Model.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModel();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModel();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Model.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Model",
            value: exports.Model.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Model.decode(message.value);
    },
    toProto(message) {
        return exports.Model.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Model",
            value: exports.Model.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Model.typeUrl, exports.Model);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Model.aminoType, exports.Model.typeUrl);
