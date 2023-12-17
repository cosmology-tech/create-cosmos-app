"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = exports.Contract = exports.Code = exports.GenesisState_GenMsgs = exports.GenesisState = void 0;
const tx_1 = require("./tx");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: types_1.Params.fromPartial({}),
        codes: [],
        contracts: [],
        sequences: [],
        genMsgs: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmwasm.wasm.v1.GenesisState",
    aminoType: "wasm/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || types_1.Params.is(o.params) && Array.isArray(o.codes) && (!o.codes.length || exports.Code.is(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || exports.Contract.is(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || exports.Sequence.is(o.sequences[0])) && Array.isArray(o.genMsgs) && (!o.genMsgs.length || exports.GenesisState_GenMsgs.is(o.genMsgs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || types_1.Params.isSDK(o.params) && Array.isArray(o.codes) && (!o.codes.length || exports.Code.isSDK(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || exports.Contract.isSDK(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || exports.Sequence.isSDK(o.sequences[0])) && Array.isArray(o.gen_msgs) && (!o.gen_msgs.length || exports.GenesisState_GenMsgs.isSDK(o.gen_msgs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || types_1.Params.isAmino(o.params) && Array.isArray(o.codes) && (!o.codes.length || exports.Code.isAmino(o.codes[0])) && Array.isArray(o.contracts) && (!o.contracts.length || exports.Contract.isAmino(o.contracts[0])) && Array.isArray(o.sequences) && (!o.sequences.length || exports.Sequence.isAmino(o.sequences[0])) && Array.isArray(o.gen_msgs) && (!o.gen_msgs.length || exports.GenesisState_GenMsgs.isAmino(o.gen_msgs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            exports.Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            exports.Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            exports.Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.genMsgs) {
            exports.GenesisState_GenMsgs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codes.push(exports.Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(exports.Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.genMsgs.push(exports.GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? types_1.Params.fromJSON(object.params) : undefined,
            codes: Array.isArray(object?.codes) ? object.codes.map((e) => exports.Code.fromJSON(e)) : [],
            contracts: Array.isArray(object?.contracts) ? object.contracts.map((e) => exports.Contract.fromJSON(e)) : [],
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => exports.Sequence.fromJSON(e)) : [],
            genMsgs: Array.isArray(object?.genMsgs) ? object.genMsgs.map((e) => exports.GenesisState_GenMsgs.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? types_1.Params.toJSON(message.params) : undefined);
        if (message.codes) {
            obj.codes = message.codes.map(e => e ? exports.Code.toJSON(e) : undefined);
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e ? exports.Contract.toJSON(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? exports.Sequence.toJSON(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        if (message.genMsgs) {
            obj.genMsgs = message.genMsgs.map(e => e ? exports.GenesisState_GenMsgs.toJSON(e) : undefined);
        }
        else {
            obj.genMsgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        message.codes = object.codes?.map(e => exports.Code.fromPartial(e)) || [];
        message.contracts = object.contracts?.map(e => exports.Contract.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => exports.Sequence.fromPartial(e)) || [];
        message.genMsgs = object.genMsgs?.map(e => exports.GenesisState_GenMsgs.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? types_1.Params.fromSDK(object.params) : undefined,
            codes: Array.isArray(object?.codes) ? object.codes.map((e) => exports.Code.fromSDK(e)) : [],
            contracts: Array.isArray(object?.contracts) ? object.contracts.map((e) => exports.Contract.fromSDK(e)) : [],
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => exports.Sequence.fromSDK(e)) : [],
            genMsgs: Array.isArray(object?.gen_msgs) ? object.gen_msgs.map((e) => exports.GenesisState_GenMsgs.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? types_1.Params.toSDK(message.params) : undefined);
        if (message.codes) {
            obj.codes = message.codes.map(e => e ? exports.Code.toSDK(e) : undefined);
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e ? exports.Contract.toSDK(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? exports.Sequence.toSDK(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        if (message.genMsgs) {
            obj.gen_msgs = message.genMsgs.map(e => e ? exports.GenesisState_GenMsgs.toSDK(e) : undefined);
        }
        else {
            obj.gen_msgs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = types_1.Params.fromAmino(object.params);
        }
        message.codes = object.codes?.map(e => exports.Code.fromAmino(e)) || [];
        message.contracts = object.contracts?.map(e => exports.Contract.fromAmino(e)) || [];
        message.sequences = object.sequences?.map(e => exports.Sequence.fromAmino(e)) || [];
        message.genMsgs = object.gen_msgs?.map(e => exports.GenesisState_GenMsgs.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? types_1.Params.toAmino(message.params) : undefined;
        if (message.codes) {
            obj.codes = message.codes.map(e => e ? exports.Code.toAmino(e) : undefined);
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e ? exports.Contract.toAmino(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? exports.Sequence.toAmino(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        if (message.genMsgs) {
            obj.gen_msgs = message.genMsgs.map(e => e ? exports.GenesisState_GenMsgs.toAmino(e) : undefined);
        }
        else {
            obj.gen_msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBaseGenesisState_GenMsgs() {
    return {
        storeCode: undefined,
        instantiateContract: undefined,
        executeContract: undefined
    };
}
exports.GenesisState_GenMsgs = {
    typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
    aminoType: "wasm/GenMsgs",
    is(o) {
        return o && o.$typeUrl === exports.GenesisState_GenMsgs.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GenesisState_GenMsgs.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GenesisState_GenMsgs.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.storeCode !== undefined) {
            tx_1.MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateContract !== undefined) {
            tx_1.MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
        }
        if (message.executeContract !== undefined) {
            tx_1.MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState_GenMsgs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeCode = tx_1.MsgStoreCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateContract = tx_1.MsgInstantiateContract.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.executeContract = tx_1.MsgExecuteContract.decode(reader, reader.uint32());
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
            storeCode: (0, helpers_1.isSet)(object.storeCode) ? tx_1.MsgStoreCode.fromJSON(object.storeCode) : undefined,
            instantiateContract: (0, helpers_1.isSet)(object.instantiateContract) ? tx_1.MsgInstantiateContract.fromJSON(object.instantiateContract) : undefined,
            executeContract: (0, helpers_1.isSet)(object.executeContract) ? tx_1.MsgExecuteContract.fromJSON(object.executeContract) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.storeCode !== undefined && (obj.storeCode = message.storeCode ? tx_1.MsgStoreCode.toJSON(message.storeCode) : undefined);
        message.instantiateContract !== undefined && (obj.instantiateContract = message.instantiateContract ? tx_1.MsgInstantiateContract.toJSON(message.instantiateContract) : undefined);
        message.executeContract !== undefined && (obj.executeContract = message.executeContract ? tx_1.MsgExecuteContract.toJSON(message.executeContract) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState_GenMsgs();
        message.storeCode = object.storeCode !== undefined && object.storeCode !== null ? tx_1.MsgStoreCode.fromPartial(object.storeCode) : undefined;
        message.instantiateContract = object.instantiateContract !== undefined && object.instantiateContract !== null ? tx_1.MsgInstantiateContract.fromPartial(object.instantiateContract) : undefined;
        message.executeContract = object.executeContract !== undefined && object.executeContract !== null ? tx_1.MsgExecuteContract.fromPartial(object.executeContract) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            storeCode: object.store_code ? tx_1.MsgStoreCode.fromSDK(object.store_code) : undefined,
            instantiateContract: object.instantiate_contract ? tx_1.MsgInstantiateContract.fromSDK(object.instantiate_contract) : undefined,
            executeContract: object.execute_contract ? tx_1.MsgExecuteContract.fromSDK(object.execute_contract) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.storeCode !== undefined && (obj.store_code = message.storeCode ? tx_1.MsgStoreCode.toSDK(message.storeCode) : undefined);
        message.instantiateContract !== undefined && (obj.instantiate_contract = message.instantiateContract ? tx_1.MsgInstantiateContract.toSDK(message.instantiateContract) : undefined);
        message.executeContract !== undefined && (obj.execute_contract = message.executeContract ? tx_1.MsgExecuteContract.toSDK(message.executeContract) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState_GenMsgs();
        if (object.store_code !== undefined && object.store_code !== null) {
            message.storeCode = tx_1.MsgStoreCode.fromAmino(object.store_code);
        }
        if (object.instantiate_contract !== undefined && object.instantiate_contract !== null) {
            message.instantiateContract = tx_1.MsgInstantiateContract.fromAmino(object.instantiate_contract);
        }
        if (object.execute_contract !== undefined && object.execute_contract !== null) {
            message.executeContract = tx_1.MsgExecuteContract.fromAmino(object.execute_contract);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.store_code = message.storeCode ? tx_1.MsgStoreCode.toAmino(message.storeCode) : undefined;
        obj.instantiate_contract = message.instantiateContract ? tx_1.MsgInstantiateContract.toAmino(message.instantiateContract) : undefined;
        obj.execute_contract = message.executeContract ? tx_1.MsgExecuteContract.toAmino(message.executeContract) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState_GenMsgs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/GenMsgs",
            value: exports.GenesisState_GenMsgs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState_GenMsgs.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState_GenMsgs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
            value: exports.GenesisState_GenMsgs.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState_GenMsgs.typeUrl, exports.GenesisState_GenMsgs);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState_GenMsgs.aminoType, exports.GenesisState_GenMsgs.typeUrl);
function createBaseCode() {
    return {
        codeId: BigInt(0),
        codeInfo: types_1.CodeInfo.fromPartial({}),
        codeBytes: new Uint8Array(),
        pinned: false
    };
}
exports.Code = {
    typeUrl: "/cosmwasm.wasm.v1.Code",
    aminoType: "wasm/Code",
    is(o) {
        return o && (o.$typeUrl === exports.Code.typeUrl || typeof o.codeId === "bigint" && types_1.CodeInfo.is(o.codeInfo) && (o.codeBytes instanceof Uint8Array || typeof o.codeBytes === "string") && typeof o.pinned === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Code.typeUrl || typeof o.code_id === "bigint" && types_1.CodeInfo.isSDK(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Code.typeUrl || typeof o.code_id === "bigint" && types_1.CodeInfo.isAmino(o.code_info) && (o.code_bytes instanceof Uint8Array || typeof o.code_bytes === "string") && typeof o.pinned === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            types_1.CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.codeInfo = types_1.CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codeBytes = reader.bytes();
                    break;
                case 4:
                    message.pinned = reader.bool();
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
            codeInfo: (0, helpers_1.isSet)(object.codeInfo) ? types_1.CodeInfo.fromJSON(object.codeInfo) : undefined,
            codeBytes: (0, helpers_1.isSet)(object.codeBytes) ? (0, helpers_1.bytesFromBase64)(object.codeBytes) : new Uint8Array(),
            pinned: (0, helpers_1.isSet)(object.pinned) ? Boolean(object.pinned) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? types_1.CodeInfo.toJSON(message.codeInfo) : undefined);
        message.codeBytes !== undefined && (obj.codeBytes = (0, helpers_1.base64FromBytes)(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
        message.pinned !== undefined && (obj.pinned = message.pinned);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCode();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? types_1.CodeInfo.fromPartial(object.codeInfo) : undefined;
        message.codeBytes = object.codeBytes ?? new Uint8Array();
        message.pinned = object.pinned ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            codeId: object?.code_id,
            codeInfo: object.code_info ? types_1.CodeInfo.fromSDK(object.code_info) : undefined,
            codeBytes: object?.code_bytes,
            pinned: object?.pinned
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code_id = message.codeId;
        message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? types_1.CodeInfo.toSDK(message.codeInfo) : undefined);
        obj.code_bytes = message.codeBytes;
        obj.pinned = message.pinned;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCode();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.code_info !== undefined && object.code_info !== null) {
            message.codeInfo = types_1.CodeInfo.fromAmino(object.code_info);
        }
        if (object.code_bytes !== undefined && object.code_bytes !== null) {
            message.codeBytes = (0, helpers_1.bytesFromBase64)(object.code_bytes);
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.code_info = message.codeInfo ? types_1.CodeInfo.toAmino(message.codeInfo) : undefined;
        obj.code_bytes = message.codeBytes ? (0, helpers_1.base64FromBytes)(message.codeBytes) : undefined;
        obj.pinned = message.pinned;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Code.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Code",
            value: exports.Code.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Code.decode(message.value);
    },
    toProto(message) {
        return exports.Code.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Code",
            value: exports.Code.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Code.typeUrl, exports.Code);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Code.aminoType, exports.Code.typeUrl);
function createBaseContract() {
    return {
        contractAddress: "",
        contractInfo: types_1.ContractInfo.fromPartial({}),
        contractState: []
    };
}
exports.Contract = {
    typeUrl: "/cosmwasm.wasm.v1.Contract",
    aminoType: "wasm/Contract",
    is(o) {
        return o && (o.$typeUrl === exports.Contract.typeUrl || typeof o.contractAddress === "string" && types_1.ContractInfo.is(o.contractInfo) && Array.isArray(o.contractState) && (!o.contractState.length || types_1.Model.is(o.contractState[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Contract.typeUrl || typeof o.contract_address === "string" && types_1.ContractInfo.isSDK(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || types_1.Model.isSDK(o.contract_state[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Contract.typeUrl || typeof o.contract_address === "string" && types_1.ContractInfo.isAmino(o.contract_info) && Array.isArray(o.contract_state) && (!o.contract_state.length || types_1.Model.isAmino(o.contract_state[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            types_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contractState) {
            types_1.Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.contractInfo = types_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contractState.push(types_1.Model.decode(reader, reader.uint32()));
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
            contractAddress: (0, helpers_1.isSet)(object.contractAddress) ? String(object.contractAddress) : "",
            contractInfo: (0, helpers_1.isSet)(object.contractInfo) ? types_1.ContractInfo.fromJSON(object.contractInfo) : undefined,
            contractState: Array.isArray(object?.contractState) ? object.contractState.map((e) => types_1.Model.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? types_1.ContractInfo.toJSON(message.contractInfo) : undefined);
        if (message.contractState) {
            obj.contractState = message.contractState.map(e => e ? types_1.Model.toJSON(e) : undefined);
        }
        else {
            obj.contractState = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContract();
        message.contractAddress = object.contractAddress ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? types_1.ContractInfo.fromPartial(object.contractInfo) : undefined;
        message.contractState = object.contractState?.map(e => types_1.Model.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            contractAddress: object?.contract_address,
            contractInfo: object.contract_info ? types_1.ContractInfo.fromSDK(object.contract_info) : undefined,
            contractState: Array.isArray(object?.contract_state) ? object.contract_state.map((e) => types_1.Model.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        message.contractInfo !== undefined && (obj.contract_info = message.contractInfo ? types_1.ContractInfo.toSDK(message.contractInfo) : undefined);
        if (message.contractState) {
            obj.contract_state = message.contractState.map(e => e ? types_1.Model.toSDK(e) : undefined);
        }
        else {
            obj.contract_state = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseContract();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = types_1.ContractInfo.fromAmino(object.contract_info);
        }
        message.contractState = object.contract_state?.map(e => types_1.Model.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.contract_info = message.contractInfo ? types_1.ContractInfo.toAmino(message.contractInfo) : undefined;
        if (message.contractState) {
            obj.contract_state = message.contractState.map(e => e ? types_1.Model.toAmino(e) : undefined);
        }
        else {
            obj.contract_state = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Contract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Contract",
            value: exports.Contract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Contract.decode(message.value);
    },
    toProto(message) {
        return exports.Contract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Contract",
            value: exports.Contract.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Contract.typeUrl, exports.Contract);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Contract.aminoType, exports.Contract.typeUrl);
function createBaseSequence() {
    return {
        idKey: new Uint8Array(),
        value: BigInt(0)
    };
}
exports.Sequence = {
    typeUrl: "/cosmwasm.wasm.v1.Sequence",
    aminoType: "wasm/Sequence",
    is(o) {
        return o && (o.$typeUrl === exports.Sequence.typeUrl || (o.idKey instanceof Uint8Array || typeof o.idKey === "string") && typeof o.value === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idKey = reader.bytes();
                    break;
                case 2:
                    message.value = reader.uint64();
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
            idKey: (0, helpers_1.isSet)(object.idKey) ? (0, helpers_1.bytesFromBase64)(object.idKey) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? BigInt(object.value.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.idKey !== undefined && (obj.idKey = (0, helpers_1.base64FromBytes)(message.idKey !== undefined ? message.idKey : new Uint8Array()));
        message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSequence();
        message.idKey = object.idKey ?? new Uint8Array();
        message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            idKey: object?.id_key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id_key = message.idKey;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSequence();
        if (object.id_key !== undefined && object.id_key !== null) {
            message.idKey = (0, helpers_1.bytesFromBase64)(object.id_key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = BigInt(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id_key = message.idKey ? (0, helpers_1.base64FromBytes)(message.idKey) : undefined;
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Sequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Sequence",
            value: exports.Sequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Sequence.decode(message.value);
    },
    toProto(message) {
        return exports.Sequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Sequence",
            value: exports.Sequence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Sequence.typeUrl, exports.Sequence);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Sequence.aminoType, exports.Sequence.typeUrl);
