"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = void 0;
const slashing_1 = require("./slashing");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: slashing_1.Params.fromPartial({}),
        signingInfos: [],
        missedBlocks: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || slashing_1.Params.is(o.params) && Array.isArray(o.signingInfos) && (!o.signingInfos.length || exports.SigningInfo.is(o.signingInfos[0])) && Array.isArray(o.missedBlocks) && (!o.missedBlocks.length || exports.ValidatorMissedBlocks.is(o.missedBlocks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || slashing_1.Params.isSDK(o.params) && Array.isArray(o.signing_infos) && (!o.signing_infos.length || exports.SigningInfo.isSDK(o.signing_infos[0])) && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || exports.ValidatorMissedBlocks.isSDK(o.missed_blocks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || slashing_1.Params.isAmino(o.params) && Array.isArray(o.signing_infos) && (!o.signing_infos.length || exports.SigningInfo.isAmino(o.signing_infos[0])) && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || exports.ValidatorMissedBlocks.isAmino(o.missed_blocks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingInfos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined,
            signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e) => exports.SigningInfo.fromJSON(e)) : [],
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => exports.ValidatorMissedBlocks.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        if (message.signingInfos) {
            obj.signingInfos = message.signingInfos.map(e => e ? exports.SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signingInfos = [];
        }
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(e => e ? exports.ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? slashing_1.Params.fromPartial(object.params) : undefined;
        message.signingInfos = object.signingInfos?.map(e => exports.SigningInfo.fromPartial(e)) || [];
        message.missedBlocks = object.missedBlocks?.map(e => exports.ValidatorMissedBlocks.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? slashing_1.Params.fromSDK(object.params) : undefined,
            signingInfos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e) => exports.SigningInfo.fromSDK(e)) : [],
            missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => exports.ValidatorMissedBlocks.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toSDK(message.params) : undefined);
        if (message.signingInfos) {
            obj.signing_infos = message.signingInfos.map(e => e ? exports.SigningInfo.toSDK(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? exports.ValidatorMissedBlocks.toSDK(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = slashing_1.Params.fromAmino(object.params);
        }
        message.signingInfos = object.signing_infos?.map(e => exports.SigningInfo.fromAmino(e)) || [];
        message.missedBlocks = object.missed_blocks?.map(e => exports.ValidatorMissedBlocks.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? slashing_1.Params.toAmino(message.params) : undefined;
        if (message.signingInfos) {
            obj.signing_infos = message.signingInfos.map(e => e ? exports.SigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? exports.ValidatorMissedBlocks.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBaseSigningInfo() {
    return {
        address: "",
        validatorSigningInfo: slashing_1.ValidatorSigningInfo.fromPartial({})
    };
}
exports.SigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
    aminoType: "cosmos-sdk/SigningInfo",
    is(o) {
        return o && (o.$typeUrl === exports.SigningInfo.typeUrl || typeof o.address === "string" && slashing_1.ValidatorSigningInfo.is(o.validatorSigningInfo));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SigningInfo.typeUrl || typeof o.address === "string" && slashing_1.ValidatorSigningInfo.isSDK(o.validator_signing_info));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SigningInfo.typeUrl || typeof o.address === "string" && slashing_1.ValidatorSigningInfo.isAmino(o.validator_signing_info));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            validatorSigningInfo: (0, helpers_1.isSet)(object.validatorSigningInfo) ? slashing_1.ValidatorSigningInfo.fromJSON(object.validatorSigningInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validatorSigningInfo !== undefined && (obj.validatorSigningInfo = message.validatorSigningInfo ? slashing_1.ValidatorSigningInfo.toJSON(message.validatorSigningInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningInfo();
        message.address = object.address ?? "";
        message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? slashing_1.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            validatorSigningInfo: object.validator_signing_info ? slashing_1.ValidatorSigningInfo.fromSDK(object.validator_signing_info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.validatorSigningInfo !== undefined && (obj.validator_signing_info = message.validatorSigningInfo ? slashing_1.ValidatorSigningInfo.toSDK(message.validatorSigningInfo) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
            message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.fromAmino(object.validator_signing_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.validator_signing_info = message.validatorSigningInfo ? slashing_1.ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningInfo",
            value: exports.SigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SigningInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
            value: exports.SigningInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SigningInfo.typeUrl, exports.SigningInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SigningInfo.aminoType, exports.SigningInfo.typeUrl);
function createBaseValidatorMissedBlocks() {
    return {
        address: "",
        missedBlocks: []
    };
}
exports.ValidatorMissedBlocks = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
    aminoType: "cosmos-sdk/ValidatorMissedBlocks",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missedBlocks) && (!o.missedBlocks.length || exports.MissedBlock.is(o.missedBlocks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || exports.MissedBlock.isSDK(o.missed_blocks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || exports.MissedBlock.isAmino(o.missed_blocks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missedBlocks) {
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missedBlocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => exports.MissedBlock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(e => e ? exports.MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlocks();
        message.address = object.address ?? "";
        message.missedBlocks = object.missedBlocks?.map(e => exports.MissedBlock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => exports.MissedBlock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? exports.MissedBlock.toSDK(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidatorMissedBlocks();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.missedBlocks = object.missed_blocks?.map(e => exports.MissedBlock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? exports.MissedBlock.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorMissedBlocks.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlocks",
            value: exports.ValidatorMissedBlocks.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorMissedBlocks.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorMissedBlocks.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
            value: exports.ValidatorMissedBlocks.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorMissedBlocks.typeUrl, exports.ValidatorMissedBlocks);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorMissedBlocks.aminoType, exports.ValidatorMissedBlocks.typeUrl);
function createBaseMissedBlock() {
    return {
        index: BigInt(0),
        missed: false
    };
}
exports.MissedBlock = {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
    aminoType: "cosmos-sdk/MissedBlock",
    is(o) {
        return o && (o.$typeUrl === exports.MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissedBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int64();
                    break;
                case 2:
                    message.missed = reader.bool();
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
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            missed: (0, helpers_1.isSet)(object.missed) ? Boolean(object.missed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMissedBlock();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.missed = object.missed ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index,
            missed: object?.missed
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        obj.missed = message.missed;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMissedBlock();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = object.missed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.missed = message.missed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MissedBlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MissedBlock",
            value: exports.MissedBlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MissedBlock.decode(message.value);
    },
    toProto(message) {
        return exports.MissedBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
            value: exports.MissedBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MissedBlock.typeUrl, exports.MissedBlock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MissedBlock.aminoType, exports.MissedBlock.typeUrl);
