"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPinnedCodesResponse = exports.QueryPinnedCodesRequest = exports.QueryCodesResponse = exports.QueryCodesRequest = exports.QueryCodeResponse = exports.CodeInfoResponse = exports.QueryCodeRequest = exports.QuerySmartContractStateResponse = exports.QuerySmartContractStateRequest = exports.QueryRawContractStateResponse = exports.QueryRawContractStateRequest = exports.QueryAllContractStateResponse = exports.QueryAllContractStateRequest = exports.QueryContractsByCodeResponse = exports.QueryContractsByCodeRequest = exports.QueryContractHistoryResponse = exports.QueryContractHistoryRequest = exports.QueryContractInfoResponse = exports.QueryContractInfoRequest = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
const encoding_1 = require("@cosmjs/encoding");
function createBaseQueryContractInfoRequest() {
    return {
        address: ""
    };
}
exports.QueryContractInfoRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
    aminoType: "wasm/QueryContractInfoRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryContractInfoRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryContractInfoRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryContractInfoRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryContractInfoRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractInfoRequest",
            value: exports.QueryContractInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
            value: exports.QueryContractInfoRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryContractInfoRequest.typeUrl, exports.QueryContractInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryContractInfoRequest.aminoType, exports.QueryContractInfoRequest.typeUrl);
function createBaseQueryContractInfoResponse() {
    return {
        address: "",
        contractInfo: types_1.ContractInfo.fromPartial({})
    };
}
exports.QueryContractInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
    aminoType: "wasm/QueryContractInfoResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryContractInfoResponse.typeUrl || typeof o.address === "string" && types_1.ContractInfo.is(o.contractInfo));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryContractInfoResponse.typeUrl || typeof o.address === "string" && types_1.ContractInfo.isSDK(o.contract_info));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryContractInfoResponse.typeUrl || typeof o.address === "string" && types_1.ContractInfo.isAmino(o.contract_info));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.contractInfo !== undefined) {
            types_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.contractInfo = types_1.ContractInfo.decode(reader, reader.uint32());
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
            contractInfo: (0, helpers_1.isSet)(object.contractInfo) ? types_1.ContractInfo.fromJSON(object.contractInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? types_1.ContractInfo.toJSON(message.contractInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoResponse();
        message.address = object.address ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? types_1.ContractInfo.fromPartial(object.contractInfo) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            contractInfo: object.contract_info ? types_1.ContractInfo.fromSDK(object.contract_info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.contractInfo !== undefined && (obj.contract_info = message.contractInfo ? types_1.ContractInfo.toSDK(message.contractInfo) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryContractInfoResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = types_1.ContractInfo.fromAmino(object.contract_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.contract_info = message.contractInfo ? types_1.ContractInfo.toAmino(message.contractInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractInfoResponse",
            value: exports.QueryContractInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
            value: exports.QueryContractInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryContractInfoResponse.typeUrl, exports.QueryContractInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryContractInfoResponse.aminoType, exports.QueryContractInfoResponse.typeUrl);
function createBaseQueryContractHistoryRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryContractHistoryRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
    aminoType: "wasm/QueryContractHistoryRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractHistoryRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryContractHistoryRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractHistoryRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractHistoryRequest",
            value: exports.QueryContractHistoryRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractHistoryRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractHistoryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
            value: exports.QueryContractHistoryRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryContractHistoryRequest.typeUrl, exports.QueryContractHistoryRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryContractHistoryRequest.aminoType, exports.QueryContractHistoryRequest.typeUrl);
function createBaseQueryContractHistoryResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
exports.QueryContractHistoryResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
    aminoType: "wasm/QueryContractHistoryResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || types_1.ContractCodeHistoryEntry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || types_1.ContractCodeHistoryEntry.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || types_1.ContractCodeHistoryEntry.isAmino(o.entries[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            types_1.ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(types_1.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => types_1.ContractCodeHistoryEntry.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? types_1.ContractCodeHistoryEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractHistoryResponse();
        message.entries = object.entries?.map(e => types_1.ContractCodeHistoryEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => types_1.ContractCodeHistoryEntry.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? types_1.ContractCodeHistoryEntry.toSDK(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryContractHistoryResponse();
        message.entries = object.entries?.map(e => types_1.ContractCodeHistoryEntry.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? types_1.ContractCodeHistoryEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractHistoryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractHistoryResponse",
            value: exports.QueryContractHistoryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractHistoryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractHistoryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
            value: exports.QueryContractHistoryResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryContractHistoryResponse.typeUrl, exports.QueryContractHistoryResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryContractHistoryResponse.aminoType, exports.QueryContractHistoryResponse.typeUrl);
function createBaseQueryContractsByCodeRequest() {
    return {
        codeId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryContractsByCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
    aminoType: "wasm/QueryContractsByCodeRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryContractsByCodeRequest.typeUrl || typeof o.codeId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryContractsByCodeRequest.typeUrl || typeof o.code_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryContractsByCodeRequest.typeUrl || typeof o.code_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
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
            codeId: (0, helpers_1.isSet)(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCodeRequest();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            codeId: object?.code_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code_id = message.codeId;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCodeRequest();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractsByCodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCodeRequest",
            value: exports.QueryContractsByCodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractsByCodeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractsByCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
            value: exports.QueryContractsByCodeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryContractsByCodeRequest.typeUrl, exports.QueryContractsByCodeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryContractsByCodeRequest.aminoType, exports.QueryContractsByCodeRequest.typeUrl);
function createBaseQueryContractsByCodeResponse() {
    return {
        contracts: [],
        pagination: undefined
    };
}
exports.QueryContractsByCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
    aminoType: "wasm/QueryContractsByCodeResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.contracts) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contracts.push(reader.string());
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
            contracts: Array.isArray(object?.contracts) ? object.contracts.map((e) => String(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e);
        }
        else {
            obj.contracts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContractsByCodeResponse();
        message.contracts = object.contracts?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            contracts: Array.isArray(object?.contracts) ? object.contracts.map((e) => e) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e);
        }
        else {
            obj.contracts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCodeResponse();
        message.contracts = object.contracts?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e);
        }
        else {
            obj.contracts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractsByCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCodeResponse",
            value: exports.QueryContractsByCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractsByCodeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractsByCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
            value: exports.QueryContractsByCodeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryContractsByCodeResponse.typeUrl, exports.QueryContractsByCodeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryContractsByCodeResponse.aminoType, exports.QueryContractsByCodeResponse.typeUrl);
function createBaseQueryAllContractStateRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryAllContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
    aminoType: "wasm/QueryAllContractStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllContractStateRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryAllContractStateRequest",
            value: exports.QueryAllContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
            value: exports.QueryAllContractStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllContractStateRequest.typeUrl, exports.QueryAllContractStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllContractStateRequest.aminoType, exports.QueryAllContractStateRequest.typeUrl);
function createBaseQueryAllContractStateResponse() {
    return {
        models: [],
        pagination: undefined
    };
}
exports.QueryAllContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
    aminoType: "wasm/QueryAllContractStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || types_1.Model.is(o.models[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || types_1.Model.isSDK(o.models[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || types_1.Model.isAmino(o.models[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.models) {
            types_1.Model.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.models.push(types_1.Model.decode(reader, reader.uint32()));
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
            models: Array.isArray(object?.models) ? object.models.map((e) => types_1.Model.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map(e => e ? types_1.Model.toJSON(e) : undefined);
        }
        else {
            obj.models = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllContractStateResponse();
        message.models = object.models?.map(e => types_1.Model.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            models: Array.isArray(object?.models) ? object.models.map((e) => types_1.Model.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map(e => e ? types_1.Model.toSDK(e) : undefined);
        }
        else {
            obj.models = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAllContractStateResponse();
        message.models = object.models?.map(e => types_1.Model.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map(e => e ? types_1.Model.toAmino(e) : undefined);
        }
        else {
            obj.models = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryAllContractStateResponse",
            value: exports.QueryAllContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
            value: exports.QueryAllContractStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllContractStateResponse.typeUrl, exports.QueryAllContractStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllContractStateResponse.aminoType, exports.QueryAllContractStateResponse.typeUrl);
function createBaseQueryRawContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
exports.QueryRawContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
    aminoType: "wasm/QueryRawContractStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRawContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
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
            queryData: (0, helpers_1.isSet)(object.queryData) ? (0, helpers_1.bytesFromBase64)(object.queryData) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.queryData !== undefined && (obj.queryData = (0, helpers_1.base64FromBytes)(message.queryData !== undefined ? message.queryData : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRawContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            queryData: object?.query_data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.query_data = message.queryData;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryRawContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.query_data !== undefined && object.query_data !== null) {
            message.queryData = (0, helpers_1.bytesFromBase64)(object.query_data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.query_data = message.queryData ? (0, helpers_1.base64FromBytes)(message.queryData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRawContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryRawContractStateRequest",
            value: exports.QueryRawContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryRawContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRawContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
            value: exports.QueryRawContractStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryRawContractStateRequest.typeUrl, exports.QueryRawContractStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryRawContractStateRequest.aminoType, exports.QueryRawContractStateRequest.typeUrl);
function createBaseQueryRawContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.QueryRawContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
    aminoType: "wasm/QueryRawContractStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
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
        const message = createBaseQueryRawContractStateResponse();
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
        const message = createBaseQueryRawContractStateResponse();
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
        const message = createBaseQueryRawContractStateResponse();
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
        return exports.QueryRawContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryRawContractStateResponse",
            value: exports.QueryRawContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryRawContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRawContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
            value: exports.QueryRawContractStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryRawContractStateResponse.typeUrl, exports.QueryRawContractStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryRawContractStateResponse.aminoType, exports.QueryRawContractStateResponse.typeUrl);
function createBaseQuerySmartContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
exports.QuerySmartContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
    aminoType: "wasm/QuerySmartContractStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySmartContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
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
            queryData: (0, helpers_1.isSet)(object.queryData) ? (0, helpers_1.bytesFromBase64)(object.queryData) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.queryData !== undefined && (obj.queryData = (0, helpers_1.base64FromBytes)(message.queryData !== undefined ? message.queryData : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySmartContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            queryData: object?.query_data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.query_data = message.queryData;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySmartContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.query_data !== undefined && object.query_data !== null) {
            message.queryData = (0, encoding_1.toUtf8)(JSON.stringify(object.query_data));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.query_data = message.queryData ? JSON.parse((0, encoding_1.fromUtf8)(message.queryData)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySmartContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QuerySmartContractStateRequest",
            value: exports.QuerySmartContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySmartContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySmartContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
            value: exports.QuerySmartContractStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySmartContractStateRequest.typeUrl, exports.QuerySmartContractStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySmartContractStateRequest.aminoType, exports.QuerySmartContractStateRequest.typeUrl);
function createBaseQuerySmartContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.QuerySmartContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
    aminoType: "wasm/QuerySmartContractStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
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
        const message = createBaseQuerySmartContractStateResponse();
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
        const message = createBaseQuerySmartContractStateResponse();
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
        const message = createBaseQuerySmartContractStateResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, encoding_1.toUtf8)(JSON.stringify(object.data));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? JSON.parse((0, encoding_1.fromUtf8)(message.data)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySmartContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QuerySmartContractStateResponse",
            value: exports.QuerySmartContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySmartContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySmartContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
            value: exports.QuerySmartContractStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySmartContractStateResponse.typeUrl, exports.QuerySmartContractStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySmartContractStateResponse.aminoType, exports.QuerySmartContractStateResponse.typeUrl);
function createBaseQueryCodeRequest() {
    return {
        codeId: BigInt(0)
    };
}
exports.QueryCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
    aminoType: "wasm/QueryCodeRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCodeRequest.typeUrl || typeof o.codeId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCodeRequest.typeUrl || typeof o.code_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCodeRequest.typeUrl || typeof o.code_id === "bigint");
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
        const message = createBaseQueryCodeRequest();
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
        const message = createBaseQueryCodeRequest();
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
        const message = createBaseQueryCodeRequest();
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
        return exports.QueryCodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodeRequest",
            value: exports.QueryCodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
            value: exports.QueryCodeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCodeRequest.typeUrl, exports.QueryCodeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCodeRequest.aminoType, exports.QueryCodeRequest.typeUrl);
function createBaseCodeInfoResponse() {
    return {
        codeId: BigInt(0),
        creator: "",
        dataHash: new Uint8Array()
    };
}
exports.CodeInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
    aminoType: "wasm/CodeInfoResponse",
    is(o) {
        return o && (o.$typeUrl === exports.CodeInfoResponse.typeUrl || typeof o.codeId === "bigint" && typeof o.creator === "string" && (o.dataHash instanceof Uint8Array || typeof o.dataHash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CodeInfoResponse.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CodeInfoResponse.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(26).bytes(message.dataHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfoResponse();
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
                    message.dataHash = reader.bytes();
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
            dataHash: (0, helpers_1.isSet)(object.dataHash) ? (0, helpers_1.bytesFromBase64)(object.dataHash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.creator !== undefined && (obj.creator = message.creator);
        message.dataHash !== undefined && (obj.dataHash = (0, helpers_1.base64FromBytes)(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCodeInfoResponse();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        message.dataHash = object.dataHash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            codeId: object?.code_id,
            creator: object?.creator,
            dataHash: object?.data_hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code_id = message.codeId;
        obj.creator = message.creator;
        obj.data_hash = message.dataHash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCodeInfoResponse();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.dataHash = (0, helpers_1.bytesFromBase64)(object.data_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.creator = message.creator;
        obj.data_hash = message.dataHash ? (0, helpers_1.base64FromBytes)(message.dataHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CodeInfoResponse",
            value: exports.CodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.CodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
            value: exports.CodeInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CodeInfoResponse.typeUrl, exports.CodeInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CodeInfoResponse.aminoType, exports.CodeInfoResponse.typeUrl);
function createBaseQueryCodeResponse() {
    return {
        codeInfo: undefined,
        data: new Uint8Array()
    };
}
exports.QueryCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
    aminoType: "wasm/QueryCodeResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeInfo !== undefined) {
            exports.CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfo = exports.CodeInfoResponse.decode(reader, reader.uint32());
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
            codeInfo: (0, helpers_1.isSet)(object.codeInfo) ? exports.CodeInfoResponse.fromJSON(object.codeInfo) : undefined,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? exports.CodeInfoResponse.toJSON(message.codeInfo) : undefined);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeResponse();
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? exports.CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            codeInfo: object.code_info ? exports.CodeInfoResponse.fromSDK(object.code_info) : undefined,
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? exports.CodeInfoResponse.toSDK(message.codeInfo) : undefined);
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeResponse();
        if (object.code_info !== undefined && object.code_info !== null) {
            message.codeInfo = exports.CodeInfoResponse.fromAmino(object.code_info);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_info = message.codeInfo ? exports.CodeInfoResponse.toAmino(message.codeInfo) : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodeResponse",
            value: exports.QueryCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
            value: exports.QueryCodeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCodeResponse.typeUrl, exports.QueryCodeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCodeResponse.aminoType, exports.QueryCodeResponse.typeUrl);
function createBaseQueryCodesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
    aminoType: "wasm/QueryCodesRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryCodesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryCodesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryCodesRequest.typeUrl;
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
        const message = createBaseQueryCodesRequest();
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
        const message = createBaseQueryCodesRequest();
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
        const message = createBaseQueryCodesRequest();
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
        return exports.QueryCodesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodesRequest",
            value: exports.QueryCodesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
            value: exports.QueryCodesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCodesRequest.typeUrl, exports.QueryCodesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCodesRequest.aminoType, exports.QueryCodesRequest.typeUrl);
function createBaseQueryCodesResponse() {
    return {
        codeInfos: [],
        pagination: undefined
    };
}
exports.QueryCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
    aminoType: "wasm/QueryCodesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCodesResponse.typeUrl || Array.isArray(o.codeInfos) && (!o.codeInfos.length || exports.CodeInfoResponse.is(o.codeInfos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCodesResponse.typeUrl || Array.isArray(o.code_infos) && (!o.code_infos.length || exports.CodeInfoResponse.isSDK(o.code_infos[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCodesResponse.typeUrl || Array.isArray(o.code_infos) && (!o.code_infos.length || exports.CodeInfoResponse.isAmino(o.code_infos[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.codeInfos) {
            exports.CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfos.push(exports.CodeInfoResponse.decode(reader, reader.uint32()));
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
            codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e) => exports.CodeInfoResponse.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codeInfos) {
            obj.codeInfos = message.codeInfos.map(e => e ? exports.CodeInfoResponse.toJSON(e) : undefined);
        }
        else {
            obj.codeInfos = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodesResponse();
        message.codeInfos = object.codeInfos?.map(e => exports.CodeInfoResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            codeInfos: Array.isArray(object?.code_infos) ? object.code_infos.map((e) => exports.CodeInfoResponse.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.codeInfos) {
            obj.code_infos = message.codeInfos.map(e => e ? exports.CodeInfoResponse.toSDK(e) : undefined);
        }
        else {
            obj.code_infos = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryCodesResponse();
        message.codeInfos = object.code_infos?.map(e => exports.CodeInfoResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.codeInfos) {
            obj.code_infos = message.codeInfos.map(e => e ? exports.CodeInfoResponse.toAmino(e) : undefined);
        }
        else {
            obj.code_infos = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodesResponse",
            value: exports.QueryCodesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
            value: exports.QueryCodesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCodesResponse.typeUrl, exports.QueryCodesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCodesResponse.aminoType, exports.QueryCodesResponse.typeUrl);
function createBaseQueryPinnedCodesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryPinnedCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
    aminoType: "wasm/QueryPinnedCodesRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryPinnedCodesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryPinnedCodesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryPinnedCodesRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
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
        const message = createBaseQueryPinnedCodesRequest();
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
        const message = createBaseQueryPinnedCodesRequest();
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
        return exports.QueryPinnedCodesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryPinnedCodesRequest",
            value: exports.QueryPinnedCodesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPinnedCodesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPinnedCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
            value: exports.QueryPinnedCodesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPinnedCodesRequest.typeUrl, exports.QueryPinnedCodesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPinnedCodesRequest.aminoType, exports.QueryPinnedCodesRequest.typeUrl);
function createBaseQueryPinnedCodesResponse() {
    return {
        codeIds: [],
        pagination: undefined
    };
}
exports.QueryPinnedCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
    aminoType: "wasm/QueryPinnedCodesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPinnedCodesResponse.typeUrl || Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPinnedCodesResponse.typeUrl || Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPinnedCodesResponse.typeUrl || Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.codeIds = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPinnedCodesResponse();
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e) => e) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e);
        }
        else {
            obj.code_ids = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryPinnedCodesResponse();
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPinnedCodesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryPinnedCodesResponse",
            value: exports.QueryPinnedCodesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPinnedCodesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPinnedCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
            value: exports.QueryPinnedCodesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPinnedCodesResponse.typeUrl, exports.QueryPinnedCodesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPinnedCodesResponse.aminoType, exports.QueryPinnedCodesResponse.typeUrl);
