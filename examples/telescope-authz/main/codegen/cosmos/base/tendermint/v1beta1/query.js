"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = void 0;
const pagination_1 = require("../../query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const types_1 = require("../../../../tendermint/types/types");
const block_1 = require("../../../../tendermint/types/block");
const types_2 = require("../../../../tendermint/p2p/types");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseGetValidatorSetByHeightRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
exports.GetValidatorSetByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
    aminoType: "cosmos-sdk/GetValidatorSetByHeightRequest",
    is(o) {
        return o && (o.$typeUrl === exports.GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetValidatorSetByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightRequest",
            value: exports.GetValidatorSetByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetValidatorSetByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetValidatorSetByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
            value: exports.GetValidatorSetByHeightRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetValidatorSetByHeightRequest.typeUrl, exports.GetValidatorSetByHeightRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetValidatorSetByHeightRequest.aminoType, exports.GetValidatorSetByHeightRequest.typeUrl);
function createBaseGetValidatorSetByHeightResponse() {
    return {
        blockHeight: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
exports.GetValidatorSetByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
    aminoType: "cosmos-sdk/GetValidatorSetByHeightResponse",
    is(o) {
        return o && (o.$typeUrl === exports.GetValidatorSetByHeightResponse.typeUrl || typeof o.blockHeight === "bigint" && Array.isArray(o.validators) && (!o.validators.length || exports.Validator.is(o.validators[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetValidatorSetByHeightResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isSDK(o.validators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetValidatorSetByHeightResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isAmino(o.validators[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            blockHeight: (0, helpers_1.isSet)(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            blockHeight: object?.block_height,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.block_height = message.blockHeight;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        message.validators = object.validators?.map(e => exports.Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetValidatorSetByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightResponse",
            value: exports.GetValidatorSetByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetValidatorSetByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetValidatorSetByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
            value: exports.GetValidatorSetByHeightResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetValidatorSetByHeightResponse.typeUrl, exports.GetValidatorSetByHeightResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetValidatorSetByHeightResponse.aminoType, exports.GetValidatorSetByHeightResponse.typeUrl);
function createBaseGetLatestValidatorSetRequest() {
    return {
        pagination: undefined
    };
}
exports.GetLatestValidatorSetRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
    aminoType: "cosmos-sdk/GetLatestValidatorSetRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetLatestValidatorSetRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetLatestValidatorSetRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetLatestValidatorSetRequest.typeUrl;
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
        const message = createBaseGetLatestValidatorSetRequest();
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
        const message = createBaseGetLatestValidatorSetRequest();
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
        const message = createBaseGetLatestValidatorSetRequest();
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
        return exports.GetLatestValidatorSetRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetRequest",
            value: exports.GetLatestValidatorSetRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestValidatorSetRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestValidatorSetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
            value: exports.GetLatestValidatorSetRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetLatestValidatorSetRequest.typeUrl, exports.GetLatestValidatorSetRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetLatestValidatorSetRequest.aminoType, exports.GetLatestValidatorSetRequest.typeUrl);
function createBaseGetLatestValidatorSetResponse() {
    return {
        blockHeight: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
exports.GetLatestValidatorSetResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
    aminoType: "cosmos-sdk/GetLatestValidatorSetResponse",
    is(o) {
        return o && (o.$typeUrl === exports.GetLatestValidatorSetResponse.typeUrl || typeof o.blockHeight === "bigint" && Array.isArray(o.validators) && (!o.validators.length || exports.Validator.is(o.validators[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetLatestValidatorSetResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isSDK(o.validators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetLatestValidatorSetResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isAmino(o.validators[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            blockHeight: (0, helpers_1.isSet)(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            blockHeight: object?.block_height,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.block_height = message.blockHeight;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        message.validators = object.validators?.map(e => exports.Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetLatestValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetResponse",
            value: exports.GetLatestValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
            value: exports.GetLatestValidatorSetResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetLatestValidatorSetResponse.typeUrl, exports.GetLatestValidatorSetResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetLatestValidatorSetResponse.aminoType, exports.GetLatestValidatorSetResponse.typeUrl);
function createBaseValidator() {
    return {
        address: "",
        pubKey: undefined,
        votingPower: BigInt(0),
        proposerPriority: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    is(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || typeof o.address === "string" && typeof o.votingPower === "bigint" && typeof o.proposerPriority === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
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
                    message.votingPower = reader.int64();
                    break;
                case 4:
                    message.proposerPriority = reader.int64();
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
            votingPower: (0, helpers_1.isSet)(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0),
            proposerPriority: (0, helpers_1.isSet)(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? any_1.Any.toJSON(message.pubKey) : undefined);
        message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
        message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? any_1.Any.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pubKey: object.pub_key ? any_1.Any.fromSDK(object.pub_key) : undefined,
            votingPower: object?.voting_power,
            proposerPriority: object?.proposer_priority
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pubKey !== undefined && (obj.pub_key = message.pubKey ? any_1.Any.toSDK(message.pubKey) : undefined);
        obj.voting_power = message.votingPower;
        obj.proposer_priority = message.proposerPriority;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = any_1.Any.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.votingPower = BigInt(object.voting_power);
        }
        if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
            message.proposerPriority = BigInt(object.proposer_priority);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pubKey ? any_1.Any.toAmino(message.pubKey) : undefined;
        obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
        obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: exports.Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Validator.typeUrl, exports.Validator);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Validator.aminoType, exports.Validator.typeUrl);
function createBaseGetBlockByHeightRequest() {
    return {
        height: BigInt(0)
    };
}
exports.GetBlockByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
    aminoType: "cosmos-sdk/GetBlockByHeightRequest",
    is(o) {
        return o && (o.$typeUrl === exports.GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetBlockByHeightRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightRequest",
            value: exports.GetBlockByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
            value: exports.GetBlockByHeightRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetBlockByHeightRequest.typeUrl, exports.GetBlockByHeightRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetBlockByHeightRequest.aminoType, exports.GetBlockByHeightRequest.typeUrl);
function createBaseGetBlockByHeightResponse() {
    return {
        blockId: undefined,
        block: undefined
    };
}
exports.GetBlockByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
    aminoType: "cosmos-sdk/GetBlockByHeightResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetBlockByHeightResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetBlockByHeightResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetBlockByHeightResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockId !== undefined) {
            types_1.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
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
            blockId: (0, helpers_1.isSet)(object.blockId) ? types_1.BlockID.fromJSON(object.blockId) : undefined,
            block: (0, helpers_1.isSet)(object.block) ? block_1.Block.fromJSON(object.block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockId !== undefined && (obj.blockId = message.blockId ? types_1.BlockID.toJSON(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? types_1.BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? block_1.Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            blockId: object.block_id ? types_1.BlockID.fromSDK(object.block_id) : undefined,
            block: object.block ? block_1.Block.fromSDK(object.block) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.blockId !== undefined && (obj.block_id = message.blockId ? types_1.BlockID.toSDK(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toSDK(message.block) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetBlockByHeightResponse();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = types_1.BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = block_1.Block.fromAmino(object.block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? types_1.BlockID.toAmino(message.blockId) : undefined;
        obj.block = message.block ? block_1.Block.toAmino(message.block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightResponse",
            value: exports.GetBlockByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
            value: exports.GetBlockByHeightResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetBlockByHeightResponse.typeUrl, exports.GetBlockByHeightResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetBlockByHeightResponse.aminoType, exports.GetBlockByHeightResponse.typeUrl);
function createBaseGetLatestBlockRequest() {
    return {};
}
exports.GetLatestBlockRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
    aminoType: "cosmos-sdk/GetLatestBlockRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetLatestBlockRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetLatestBlockRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetLatestBlockRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockRequest();
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
        const message = createBaseGetLatestBlockRequest();
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
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetLatestBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockRequest",
            value: exports.GetLatestBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestBlockRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
            value: exports.GetLatestBlockRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetLatestBlockRequest.typeUrl, exports.GetLatestBlockRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetLatestBlockRequest.aminoType, exports.GetLatestBlockRequest.typeUrl);
function createBaseGetLatestBlockResponse() {
    return {
        blockId: undefined,
        block: undefined
    };
}
exports.GetLatestBlockResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
    aminoType: "cosmos-sdk/GetLatestBlockResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetLatestBlockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetLatestBlockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetLatestBlockResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockId !== undefined) {
            types_1.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
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
            blockId: (0, helpers_1.isSet)(object.blockId) ? types_1.BlockID.fromJSON(object.blockId) : undefined,
            block: (0, helpers_1.isSet)(object.block) ? block_1.Block.fromJSON(object.block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockId !== undefined && (obj.blockId = message.blockId ? types_1.BlockID.toJSON(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? types_1.BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? block_1.Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            blockId: object.block_id ? types_1.BlockID.fromSDK(object.block_id) : undefined,
            block: object.block ? block_1.Block.fromSDK(object.block) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.blockId !== undefined && (obj.block_id = message.blockId ? types_1.BlockID.toSDK(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toSDK(message.block) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetLatestBlockResponse();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = types_1.BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = block_1.Block.fromAmino(object.block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? types_1.BlockID.toAmino(message.blockId) : undefined;
        obj.block = message.block ? block_1.Block.toAmino(message.block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetLatestBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockResponse",
            value: exports.GetLatestBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetLatestBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetLatestBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
            value: exports.GetLatestBlockResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetLatestBlockResponse.typeUrl, exports.GetLatestBlockResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetLatestBlockResponse.aminoType, exports.GetLatestBlockResponse.typeUrl);
function createBaseGetSyncingRequest() {
    return {};
}
exports.GetSyncingRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
    aminoType: "cosmos-sdk/GetSyncingRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetSyncingRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetSyncingRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetSyncingRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingRequest();
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
        const message = createBaseGetSyncingRequest();
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
        const message = createBaseGetSyncingRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetSyncingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingRequest",
            value: exports.GetSyncingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetSyncingRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetSyncingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
            value: exports.GetSyncingRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetSyncingRequest.typeUrl, exports.GetSyncingRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetSyncingRequest.aminoType, exports.GetSyncingRequest.typeUrl);
function createBaseGetSyncingResponse() {
    return {
        syncing: false
    };
}
exports.GetSyncingResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
    aminoType: "cosmos-sdk/GetSyncingResponse",
    is(o) {
        return o && (o.$typeUrl === exports.GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
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
            syncing: (0, helpers_1.isSet)(object.syncing) ? Boolean(object.syncing) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetSyncingResponse();
        message.syncing = object.syncing ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            syncing: object?.syncing
        };
    },
    toSDK(message) {
        const obj = {};
        obj.syncing = message.syncing;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetSyncingResponse();
        if (object.syncing !== undefined && object.syncing !== null) {
            message.syncing = object.syncing;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.syncing = message.syncing;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetSyncingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingResponse",
            value: exports.GetSyncingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetSyncingResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetSyncingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
            value: exports.GetSyncingResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetSyncingResponse.typeUrl, exports.GetSyncingResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetSyncingResponse.aminoType, exports.GetSyncingResponse.typeUrl);
function createBaseGetNodeInfoRequest() {
    return {};
}
exports.GetNodeInfoRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
    aminoType: "cosmos-sdk/GetNodeInfoRequest",
    is(o) {
        return o && o.$typeUrl === exports.GetNodeInfoRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetNodeInfoRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetNodeInfoRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoRequest();
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
        const message = createBaseGetNodeInfoRequest();
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
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetNodeInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoRequest",
            value: exports.GetNodeInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetNodeInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetNodeInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
            value: exports.GetNodeInfoRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetNodeInfoRequest.typeUrl, exports.GetNodeInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetNodeInfoRequest.aminoType, exports.GetNodeInfoRequest.typeUrl);
function createBaseGetNodeInfoResponse() {
    return {
        nodeInfo: undefined,
        applicationVersion: undefined
    };
}
exports.GetNodeInfoResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
    aminoType: "cosmos-sdk/GetNodeInfoResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetNodeInfoResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetNodeInfoResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetNodeInfoResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nodeInfo !== undefined) {
            types_2.NodeInfo.encode(message.nodeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.applicationVersion !== undefined) {
            exports.VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeInfo = types_2.NodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.applicationVersion = exports.VersionInfo.decode(reader, reader.uint32());
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
            nodeInfo: (0, helpers_1.isSet)(object.nodeInfo) ? types_2.NodeInfo.fromJSON(object.nodeInfo) : undefined,
            applicationVersion: (0, helpers_1.isSet)(object.applicationVersion) ? exports.VersionInfo.fromJSON(object.applicationVersion) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.nodeInfo !== undefined && (obj.nodeInfo = message.nodeInfo ? types_2.NodeInfo.toJSON(message.nodeInfo) : undefined);
        message.applicationVersion !== undefined && (obj.applicationVersion = message.applicationVersion ? exports.VersionInfo.toJSON(message.applicationVersion) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.nodeInfo = object.nodeInfo !== undefined && object.nodeInfo !== null ? types_2.NodeInfo.fromPartial(object.nodeInfo) : undefined;
        message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? exports.VersionInfo.fromPartial(object.applicationVersion) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            nodeInfo: object.node_info ? types_2.NodeInfo.fromSDK(object.node_info) : undefined,
            applicationVersion: object.application_version ? exports.VersionInfo.fromSDK(object.application_version) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.nodeInfo !== undefined && (obj.node_info = message.nodeInfo ? types_2.NodeInfo.toSDK(message.nodeInfo) : undefined);
        message.applicationVersion !== undefined && (obj.application_version = message.applicationVersion ? exports.VersionInfo.toSDK(message.applicationVersion) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetNodeInfoResponse();
        if (object.node_info !== undefined && object.node_info !== null) {
            message.nodeInfo = types_2.NodeInfo.fromAmino(object.node_info);
        }
        if (object.application_version !== undefined && object.application_version !== null) {
            message.applicationVersion = exports.VersionInfo.fromAmino(object.application_version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.node_info = message.nodeInfo ? types_2.NodeInfo.toAmino(message.nodeInfo) : undefined;
        obj.application_version = message.applicationVersion ? exports.VersionInfo.toAmino(message.applicationVersion) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetNodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoResponse",
            value: exports.GetNodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetNodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetNodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
            value: exports.GetNodeInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetNodeInfoResponse.typeUrl, exports.GetNodeInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetNodeInfoResponse.aminoType, exports.GetNodeInfoResponse.typeUrl);
function createBaseVersionInfo() {
    return {
        name: "",
        appName: "",
        version: "",
        gitCommit: "",
        buildTags: "",
        goVersion: "",
        buildDeps: [],
        cosmosSdkVersion: ""
    };
}
exports.VersionInfo = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
    aminoType: "cosmos-sdk/VersionInfo",
    is(o) {
        return o && (o.$typeUrl === exports.VersionInfo.typeUrl || typeof o.name === "string" && typeof o.appName === "string" && typeof o.version === "string" && typeof o.gitCommit === "string" && typeof o.buildTags === "string" && typeof o.goVersion === "string" && Array.isArray(o.buildDeps) && (!o.buildDeps.length || exports.Module.is(o.buildDeps[0])) && typeof o.cosmosSdkVersion === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.VersionInfo.typeUrl || typeof o.name === "string" && typeof o.app_name === "string" && typeof o.version === "string" && typeof o.git_commit === "string" && typeof o.build_tags === "string" && typeof o.go_version === "string" && Array.isArray(o.build_deps) && (!o.build_deps.length || exports.Module.isSDK(o.build_deps[0])) && typeof o.cosmos_sdk_version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.VersionInfo.typeUrl || typeof o.name === "string" && typeof o.app_name === "string" && typeof o.version === "string" && typeof o.git_commit === "string" && typeof o.build_tags === "string" && typeof o.go_version === "string" && Array.isArray(o.build_deps) && (!o.build_deps.length || exports.Module.isAmino(o.build_deps[0])) && typeof o.cosmos_sdk_version === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.appName !== "") {
            writer.uint32(18).string(message.appName);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.gitCommit !== "") {
            writer.uint32(34).string(message.gitCommit);
        }
        if (message.buildTags !== "") {
            writer.uint32(42).string(message.buildTags);
        }
        if (message.goVersion !== "") {
            writer.uint32(50).string(message.goVersion);
        }
        for (const v of message.buildDeps) {
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmosSdkVersion !== "") {
            writer.uint32(66).string(message.cosmosSdkVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.appName = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.gitCommit = reader.string();
                    break;
                case 5:
                    message.buildTags = reader.string();
                    break;
                case 6:
                    message.goVersion = reader.string();
                    break;
                case 7:
                    message.buildDeps.push(exports.Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmosSdkVersion = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            appName: (0, helpers_1.isSet)(object.appName) ? String(object.appName) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            gitCommit: (0, helpers_1.isSet)(object.gitCommit) ? String(object.gitCommit) : "",
            buildTags: (0, helpers_1.isSet)(object.buildTags) ? String(object.buildTags) : "",
            goVersion: (0, helpers_1.isSet)(object.goVersion) ? String(object.goVersion) : "",
            buildDeps: Array.isArray(object?.buildDeps) ? object.buildDeps.map((e) => exports.Module.fromJSON(e)) : [],
            cosmosSdkVersion: (0, helpers_1.isSet)(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.appName !== undefined && (obj.appName = message.appName);
        message.version !== undefined && (obj.version = message.version);
        message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
        message.buildTags !== undefined && (obj.buildTags = message.buildTags);
        message.goVersion !== undefined && (obj.goVersion = message.goVersion);
        if (message.buildDeps) {
            obj.buildDeps = message.buildDeps.map(e => e ? exports.Module.toJSON(e) : undefined);
        }
        else {
            obj.buildDeps = [];
        }
        message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersionInfo();
        message.name = object.name ?? "";
        message.appName = object.appName ?? "";
        message.version = object.version ?? "";
        message.gitCommit = object.gitCommit ?? "";
        message.buildTags = object.buildTags ?? "";
        message.goVersion = object.goVersion ?? "";
        message.buildDeps = object.buildDeps?.map(e => exports.Module.fromPartial(e)) || [];
        message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            appName: object?.app_name,
            version: object?.version,
            gitCommit: object?.git_commit,
            buildTags: object?.build_tags,
            goVersion: object?.go_version,
            buildDeps: Array.isArray(object?.build_deps) ? object.build_deps.map((e) => exports.Module.fromSDK(e)) : [],
            cosmosSdkVersion: object?.cosmos_sdk_version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.app_name = message.appName;
        obj.version = message.version;
        obj.git_commit = message.gitCommit;
        obj.build_tags = message.buildTags;
        obj.go_version = message.goVersion;
        if (message.buildDeps) {
            obj.build_deps = message.buildDeps.map(e => e ? exports.Module.toSDK(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        obj.cosmos_sdk_version = message.cosmosSdkVersion;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseVersionInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.app_name !== undefined && object.app_name !== null) {
            message.appName = object.app_name;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.git_commit !== undefined && object.git_commit !== null) {
            message.gitCommit = object.git_commit;
        }
        if (object.build_tags !== undefined && object.build_tags !== null) {
            message.buildTags = object.build_tags;
        }
        if (object.go_version !== undefined && object.go_version !== null) {
            message.goVersion = object.go_version;
        }
        message.buildDeps = object.build_deps?.map(e => exports.Module.fromAmino(e)) || [];
        if (object.cosmos_sdk_version !== undefined && object.cosmos_sdk_version !== null) {
            message.cosmosSdkVersion = object.cosmos_sdk_version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.app_name = message.appName;
        obj.version = message.version;
        obj.git_commit = message.gitCommit;
        obj.build_tags = message.buildTags;
        obj.go_version = message.goVersion;
        if (message.buildDeps) {
            obj.build_deps = message.buildDeps.map(e => e ? exports.Module.toAmino(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        obj.cosmos_sdk_version = message.cosmosSdkVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VersionInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VersionInfo",
            value: exports.VersionInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.VersionInfo.decode(message.value);
    },
    toProto(message) {
        return exports.VersionInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
            value: exports.VersionInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.VersionInfo.typeUrl, exports.VersionInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.VersionInfo.aminoType, exports.VersionInfo.typeUrl);
function createBaseModule() {
    return {
        path: "",
        version: "",
        sum: ""
    };
}
exports.Module = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
    aminoType: "cosmos-sdk/Module",
    is(o) {
        return o && (o.$typeUrl === exports.Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
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
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            sum: (0, helpers_1.isSet)(object.sum) ? String(object.sum) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.path = object.path ?? "";
        message.version = object.version ?? "";
        message.sum = object.sum ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            path: object?.path,
            version: object?.version,
            sum: object?.sum
        };
    },
    toSDK(message) {
        const obj = {};
        obj.path = message.path;
        obj.version = message.version;
        obj.sum = message.sum;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModule();
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.sum !== undefined && object.sum !== null) {
            message.sum = object.sum;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.version = message.version;
        obj.sum = message.sum;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Module",
            value: exports.Module.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Module.decode(message.value);
    },
    toProto(message) {
        return exports.Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Module.typeUrl, exports.Module);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Module.aminoType, exports.Module.typeUrl);
