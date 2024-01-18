"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTotalClaimableResponse = exports.QueryTotalClaimableRequest = exports.QueryClaimableForActionResponse = exports.QueryClaimableForActionRequest = exports.QueryClaimRecordResponse = exports.QueryClaimRecordRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryModuleAccountBalanceResponse = exports.QueryModuleAccountBalanceRequest = void 0;
const claim_1 = require("./claim");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryModuleAccountBalanceRequest() {
    return {};
}
exports.QueryModuleAccountBalanceRequest = {
    typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest",
    aminoType: "osmosis/claim/query-module-account-balance-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryModuleAccountBalanceRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryModuleAccountBalanceRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryModuleAccountBalanceRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceRequest();
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
        const message = createBaseQueryModuleAccountBalanceRequest();
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
        const message = createBaseQueryModuleAccountBalanceRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-module-account-balance-request",
            value: exports.QueryModuleAccountBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceRequest",
            value: exports.QueryModuleAccountBalanceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryModuleAccountBalanceRequest.typeUrl, exports.QueryModuleAccountBalanceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryModuleAccountBalanceRequest.aminoType, exports.QueryModuleAccountBalanceRequest.typeUrl);
function createBaseQueryModuleAccountBalanceResponse() {
    return {
        moduleAccountBalance: []
    };
}
exports.QueryModuleAccountBalanceResponse = {
    typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse",
    aminoType: "osmosis/claim/query-module-account-balance-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryModuleAccountBalanceResponse.typeUrl || Array.isArray(o.moduleAccountBalance) && (!o.moduleAccountBalance.length || coin_1.Coin.is(o.moduleAccountBalance[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryModuleAccountBalanceResponse.typeUrl || Array.isArray(o.moduleAccountBalance) && (!o.moduleAccountBalance.length || coin_1.Coin.isSDK(o.moduleAccountBalance[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryModuleAccountBalanceResponse.typeUrl || Array.isArray(o.moduleAccountBalance) && (!o.moduleAccountBalance.length || coin_1.Coin.isAmino(o.moduleAccountBalance[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.moduleAccountBalance) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            moduleAccountBalance: Array.isArray(object?.moduleAccountBalance) ? object.moduleAccountBalance.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleAccountBalance) {
            obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.moduleAccountBalance = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountBalanceResponse();
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            moduleAccountBalance: Array.isArray(object?.moduleAccountBalance) ? object.moduleAccountBalance.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.moduleAccountBalance) {
            obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.moduleAccountBalance = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountBalanceResponse();
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleAccountBalance) {
            obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.moduleAccountBalance = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-module-account-balance-response",
            value: exports.QueryModuleAccountBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryModuleAccountBalanceResponse",
            value: exports.QueryModuleAccountBalanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryModuleAccountBalanceResponse.typeUrl, exports.QueryModuleAccountBalanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryModuleAccountBalanceResponse.aminoType, exports.QueryModuleAccountBalanceResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.claim.v1beta1.QueryParamsRequest",
    aminoType: "osmosis/claim/query-params-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.claim.v1beta1.QueryParamsResponse",
    aminoType: "osmosis/claim/query-params-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryClaimRecordRequest() {
    return {
        address: ""
    };
}
exports.QueryClaimRecordRequest = {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordRequest",
    aminoType: "osmosis/claim/query-claim-record-request",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClaimRecordRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClaimRecordRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClaimRecordRequest.typeUrl || typeof o.address === "string");
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
        const message = createBaseQueryClaimRecordRequest();
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
        const message = createBaseQueryClaimRecordRequest();
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
        const message = createBaseQueryClaimRecordRequest();
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
        return exports.QueryClaimRecordRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-claim-record-request",
            value: exports.QueryClaimRecordRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordRequest",
            value: exports.QueryClaimRecordRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClaimRecordRequest.typeUrl, exports.QueryClaimRecordRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClaimRecordRequest.aminoType, exports.QueryClaimRecordRequest.typeUrl);
function createBaseQueryClaimRecordResponse() {
    return {
        claimRecord: claim_1.ClaimRecord.fromPartial({})
    };
}
exports.QueryClaimRecordResponse = {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordResponse",
    aminoType: "osmosis/claim/query-claim-record-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClaimRecordResponse.typeUrl || claim_1.ClaimRecord.is(o.claimRecord));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClaimRecordResponse.typeUrl || claim_1.ClaimRecord.isSDK(o.claim_record));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClaimRecordResponse.typeUrl || claim_1.ClaimRecord.isAmino(o.claim_record));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.claimRecord !== undefined) {
            claim_1.ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimRecord = claim_1.ClaimRecord.decode(reader, reader.uint32());
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
            claimRecord: (0, helpers_1.isSet)(object.claimRecord) ? claim_1.ClaimRecord.fromJSON(object.claimRecord) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.claimRecord !== undefined && (obj.claimRecord = message.claimRecord ? claim_1.ClaimRecord.toJSON(message.claimRecord) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordResponse();
        message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? claim_1.ClaimRecord.fromPartial(object.claimRecord) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            claimRecord: object.claim_record ? claim_1.ClaimRecord.fromSDK(object.claim_record) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.claimRecord !== undefined && (obj.claim_record = message.claimRecord ? claim_1.ClaimRecord.toSDK(message.claimRecord) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimRecordResponse();
        if (object.claim_record !== undefined && object.claim_record !== null) {
            message.claimRecord = claim_1.ClaimRecord.fromAmino(object.claim_record);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claimRecord ? claim_1.ClaimRecord.toAmino(message.claimRecord) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimRecordResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-claim-record-response",
            value: exports.QueryClaimRecordResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryClaimRecordResponse",
            value: exports.QueryClaimRecordResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClaimRecordResponse.typeUrl, exports.QueryClaimRecordResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClaimRecordResponse.aminoType, exports.QueryClaimRecordResponse.typeUrl);
function createBaseQueryClaimableForActionRequest() {
    return {
        address: "",
        action: 0
    };
}
exports.QueryClaimableForActionRequest = {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionRequest",
    aminoType: "osmosis/claim/query-claimable-for-action-request",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClaimableForActionRequest.typeUrl || typeof o.address === "string" && (0, helpers_1.isSet)(o.action));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClaimableForActionRequest.typeUrl || typeof o.address === "string" && (0, helpers_1.isSet)(o.action));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClaimableForActionRequest.typeUrl || typeof o.address === "string" && (0, helpers_1.isSet)(o.action));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.action !== 0) {
            writer.uint32(16).int32(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimableForActionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.action = reader.int32();
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
            action: (0, helpers_1.isSet)(object.action) ? (0, claim_1.actionFromJSON)(object.action) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.action !== undefined && (obj.action = (0, claim_1.actionToJSON)(message.action));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimableForActionRequest();
        message.address = object.address ?? "";
        message.action = object.action ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            action: (0, helpers_1.isSet)(object.action) ? (0, claim_1.actionFromJSON)(object.action) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.action !== undefined && (obj.action = (0, claim_1.actionToJSON)(message.action));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimableForActionRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = (0, claim_1.actionFromJSON)(object.action);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.action = (0, claim_1.actionToJSON)(message.action);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimableForActionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-claimable-for-action-request",
            value: exports.QueryClaimableForActionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClaimableForActionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimableForActionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionRequest",
            value: exports.QueryClaimableForActionRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClaimableForActionRequest.typeUrl, exports.QueryClaimableForActionRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClaimableForActionRequest.aminoType, exports.QueryClaimableForActionRequest.typeUrl);
function createBaseQueryClaimableForActionResponse() {
    return {
        coins: []
    };
}
exports.QueryClaimableForActionResponse = {
    typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionResponse",
    aminoType: "osmosis/claim/query-claimable-for-action-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClaimableForActionResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClaimableForActionResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClaimableForActionResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimableForActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimableForActionResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimableForActionResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimableForActionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-claimable-for-action-response",
            value: exports.QueryClaimableForActionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClaimableForActionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimableForActionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryClaimableForActionResponse",
            value: exports.QueryClaimableForActionResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClaimableForActionResponse.typeUrl, exports.QueryClaimableForActionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClaimableForActionResponse.aminoType, exports.QueryClaimableForActionResponse.typeUrl);
function createBaseQueryTotalClaimableRequest() {
    return {
        address: ""
    };
}
exports.QueryTotalClaimableRequest = {
    typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableRequest",
    aminoType: "osmosis/claim/query-total-claimable-request",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalClaimableRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalClaimableRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalClaimableRequest.typeUrl || typeof o.address === "string");
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
        const message = createBaseQueryTotalClaimableRequest();
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
        const message = createBaseQueryTotalClaimableRequest();
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
        const message = createBaseQueryTotalClaimableRequest();
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
        return exports.QueryTotalClaimableRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-total-claimable-request",
            value: exports.QueryTotalClaimableRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalClaimableRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalClaimableRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableRequest",
            value: exports.QueryTotalClaimableRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalClaimableRequest.typeUrl, exports.QueryTotalClaimableRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalClaimableRequest.aminoType, exports.QueryTotalClaimableRequest.typeUrl);
function createBaseQueryTotalClaimableResponse() {
    return {
        coins: []
    };
}
exports.QueryTotalClaimableResponse = {
    typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableResponse",
    aminoType: "osmosis/claim/query-total-claimable-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalClaimableResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalClaimableResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalClaimableResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalClaimableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalClaimableResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalClaimableResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalClaimableResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/query-total-claimable-response",
            value: exports.QueryTotalClaimableResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalClaimableResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalClaimableResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.QueryTotalClaimableResponse",
            value: exports.QueryTotalClaimableResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalClaimableResponse.typeUrl, exports.QueryTotalClaimableResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalClaimableResponse.aminoType, exports.QueryTotalClaimableResponse.typeUrl);
