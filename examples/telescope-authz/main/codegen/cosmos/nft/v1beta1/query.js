"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClassesResponse = exports.QueryClassesRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryNFTResponse = exports.QueryNFTRequest = exports.QueryNFTsResponse = exports.QueryNFTsRequest = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryOwnerResponse = exports.QueryOwnerRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = void 0;
const pagination_1 = require("../../base/query/v1beta1/pagination");
const nft_1 = require("./nft");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryBalanceRequest() {
    return {
        classId: "",
        owner: ""
    };
}
exports.QueryBalanceRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
    aminoType: "cosmos-sdk/QueryBalanceRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBalanceRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBalanceRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBalanceRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
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
            classId: (0, helpers_1.isSet)(object.classId) ? String(object.classId) : "",
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.classId = object.classId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceRequest",
            value: exports.QueryBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
            value: exports.QueryBalanceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBalanceRequest.typeUrl, exports.QueryBalanceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryBalanceRequest.aminoType, exports.QueryBalanceRequest.typeUrl);
function createBaseQueryBalanceResponse() {
    return {
        amount: BigInt(0)
    };
}
exports.QueryBalanceResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
    aminoType: "cosmos-sdk/QueryBalanceResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== BigInt(0)) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: (0, helpers_1.isSet)(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceResponse",
            value: exports.QueryBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
            value: exports.QueryBalanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBalanceResponse.typeUrl, exports.QueryBalanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryBalanceResponse.aminoType, exports.QueryBalanceResponse.typeUrl);
function createBaseQueryOwnerRequest() {
    return {
        classId: "",
        id: ""
    };
}
exports.QueryOwnerRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
    aminoType: "cosmos-sdk/QueryOwnerRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryOwnerRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryOwnerRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryOwnerRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            classId: (0, helpers_1.isSet)(object.classId) ? String(object.classId) : "",
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerRequest();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryOwnerRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOwnerRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryOwnerRequest",
            value: exports.QueryOwnerRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryOwnerRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOwnerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
            value: exports.QueryOwnerRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryOwnerRequest.typeUrl, exports.QueryOwnerRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryOwnerRequest.aminoType, exports.QueryOwnerRequest.typeUrl);
function createBaseQueryOwnerResponse() {
    return {
        owner: ""
    };
}
exports.QueryOwnerResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
    aminoType: "cosmos-sdk/QueryOwnerResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryOwnerResponse.typeUrl || typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryOwnerResponse.typeUrl || typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryOwnerResponse.typeUrl || typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerResponse();
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryOwnerResponse();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOwnerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryOwnerResponse",
            value: exports.QueryOwnerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryOwnerResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOwnerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
            value: exports.QueryOwnerResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryOwnerResponse.typeUrl, exports.QueryOwnerResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryOwnerResponse.aminoType, exports.QueryOwnerResponse.typeUrl);
function createBaseQuerySupplyRequest() {
    return {
        classId: ""
    };
}
exports.QuerySupplyRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
    aminoType: "cosmos-sdk/QuerySupplyRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySupplyRequest.typeUrl || typeof o.classId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySupplyRequest.typeUrl || typeof o.class_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySupplyRequest.typeUrl || typeof o.class_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
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
            classId: (0, helpers_1.isSet)(object.classId) ? String(object.classId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyRequest();
        message.classId = object.classId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyRequest",
            value: exports.QuerySupplyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
            value: exports.QuerySupplyRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySupplyRequest.typeUrl, exports.QuerySupplyRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySupplyRequest.aminoType, exports.QuerySupplyRequest.typeUrl);
function createBaseQuerySupplyResponse() {
    return {
        amount: BigInt(0)
    };
}
exports.QuerySupplyResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
    aminoType: "cosmos-sdk/QuerySupplyResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== BigInt(0)) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: (0, helpers_1.isSet)(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyResponse",
            value: exports.QuerySupplyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
            value: exports.QuerySupplyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySupplyResponse.typeUrl, exports.QuerySupplyResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySupplyResponse.aminoType, exports.QuerySupplyResponse.typeUrl);
function createBaseQueryNFTsRequest() {
    return {
        classId: "",
        owner: "",
        pagination: undefined
    };
}
exports.QueryNFTsRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
    aminoType: "cosmos-sdk/QueryNFTsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryNFTsRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryNFTsRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryNFTsRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
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
            classId: (0, helpers_1.isSet)(object.classId) ? String(object.classId) : "",
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTsRequest();
        message.classId = object.classId ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            owner: object?.owner,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.owner = message.owner;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTsRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.owner = message.owner;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTsRequest",
            value: exports.QueryNFTsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
            value: exports.QueryNFTsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNFTsRequest.typeUrl, exports.QueryNFTsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNFTsRequest.aminoType, exports.QueryNFTsRequest.typeUrl);
function createBaseQueryNFTsResponse() {
    return {
        nfts: [],
        pagination: undefined
    };
}
exports.QueryNFTsResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
    aminoType: "cosmos-sdk/QueryNFTsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || nft_1.NFT.is(o.nfts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || nft_1.NFT.isSDK(o.nfts[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || nft_1.NFT.isAmino(o.nfts[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.nfts) {
            nft_1.NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
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
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTsResponse();
        message.nfts = object.nfts?.map(e => nft_1.NFT.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toSDK(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTsResponse();
        message.nfts = object.nfts?.map(e => nft_1.NFT.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toAmino(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTsResponse",
            value: exports.QueryNFTsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
            value: exports.QueryNFTsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNFTsResponse.typeUrl, exports.QueryNFTsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNFTsResponse.aminoType, exports.QueryNFTsResponse.typeUrl);
function createBaseQueryNFTRequest() {
    return {
        classId: "",
        id: ""
    };
}
exports.QueryNFTRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
    aminoType: "cosmos-sdk/QueryNFTRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryNFTRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryNFTRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryNFTRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            classId: (0, helpers_1.isSet)(object.classId) ? String(object.classId) : "",
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTRequest();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id,
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTRequest",
            value: exports.QueryNFTRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
            value: exports.QueryNFTRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNFTRequest.typeUrl, exports.QueryNFTRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNFTRequest.aminoType, exports.QueryNFTRequest.typeUrl);
function createBaseQueryNFTResponse() {
    return {
        nft: undefined
    };
}
exports.QueryNFTResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
    aminoType: "cosmos-sdk/QueryNFTResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryNFTResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryNFTResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryNFTResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nft !== undefined) {
            nft_1.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nft = nft_1.NFT.decode(reader, reader.uint32());
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
            nft: (0, helpers_1.isSet)(object.nft) ? nft_1.NFT.fromJSON(object.nft) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? nft_1.NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTResponse();
        message.nft = object.nft !== undefined && object.nft !== null ? nft_1.NFT.fromPartial(object.nft) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            nft: object.nft ? nft_1.NFT.fromSDK(object.nft) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? nft_1.NFT.toSDK(message.nft) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTResponse();
        if (object.nft !== undefined && object.nft !== null) {
            message.nft = nft_1.NFT.fromAmino(object.nft);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nft = message.nft ? nft_1.NFT.toAmino(message.nft) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTResponse",
            value: exports.QueryNFTResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
            value: exports.QueryNFTResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNFTResponse.typeUrl, exports.QueryNFTResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNFTResponse.aminoType, exports.QueryNFTResponse.typeUrl);
function createBaseQueryClassRequest() {
    return {
        classId: ""
    };
}
exports.QueryClassRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
    aminoType: "cosmos-sdk/QueryClassRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClassRequest.typeUrl || typeof o.classId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClassRequest.typeUrl || typeof o.class_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClassRequest.typeUrl || typeof o.class_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
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
            classId: (0, helpers_1.isSet)(object.classId) ? String(object.classId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassRequest();
        message.classId = object.classId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            classId: object?.class_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.classId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClassRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassRequest",
            value: exports.QueryClassRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
            value: exports.QueryClassRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClassRequest.typeUrl, exports.QueryClassRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClassRequest.aminoType, exports.QueryClassRequest.typeUrl);
function createBaseQueryClassResponse() {
    return {
        class: undefined
    };
}
exports.QueryClassResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
    aminoType: "cosmos-sdk/QueryClassResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryClassResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClassResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClassResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class !== undefined) {
            nft_1.Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class = nft_1.Class.decode(reader, reader.uint32());
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
            class: (0, helpers_1.isSet)(object.class) ? nft_1.Class.fromJSON(object.class) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? nft_1.Class.toJSON(message.class) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class = object.class !== undefined && object.class !== null ? nft_1.Class.fromPartial(object.class) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            class: object.class ? nft_1.Class.fromSDK(object.class) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? nft_1.Class.toSDK(message.class) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClassResponse();
        if (object.class !== undefined && object.class !== null) {
            message.class = nft_1.Class.fromAmino(object.class);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class = message.class ? nft_1.Class.toAmino(message.class) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassResponse",
            value: exports.QueryClassResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
            value: exports.QueryClassResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClassResponse.typeUrl, exports.QueryClassResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClassResponse.aminoType, exports.QueryClassResponse.typeUrl);
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryClassesRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
    aminoType: "cosmos-sdk/QueryClassesRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryClassesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClassesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClassesRequest.typeUrl;
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
        const message = createBaseQueryClassesRequest();
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
        const message = createBaseQueryClassesRequest();
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
        const message = createBaseQueryClassesRequest();
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
        return exports.QueryClassesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassesRequest",
            value: exports.QueryClassesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
            value: exports.QueryClassesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClassesRequest.typeUrl, exports.QueryClassesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClassesRequest.aminoType, exports.QueryClassesRequest.typeUrl);
function createBaseQueryClassesResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
exports.QueryClassesResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
    aminoType: "cosmos-sdk/QueryClassesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || nft_1.Class.is(o.classes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || nft_1.Class.isSDK(o.classes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || nft_1.Class.isAmino(o.classes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.classes) {
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => nft_1.Class.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toSDK(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => nft_1.Class.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toAmino(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassesResponse",
            value: exports.QueryClassesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
            value: exports.QueryClassesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClassesResponse.typeUrl, exports.QueryClassesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClassesResponse.aminoType, exports.QueryClassesResponse.typeUrl);
