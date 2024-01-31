"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUnpoolWhitelistResponse = exports.QueryUnpoolWhitelistRequest = exports.QueryTotalDelegationByDelegatorResponse = exports.QueryTotalDelegationByDelegatorRequest = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = exports.SuperfluidDelegationsByValidatorDenomResponse = exports.SuperfluidDelegationsByValidatorDenomRequest = exports.SuperfluidUndelegationsByDelegatorResponse = exports.SuperfluidUndelegationsByDelegatorRequest = exports.SuperfluidDelegationsByDelegatorResponse = exports.SuperfluidDelegationsByDelegatorRequest = exports.SuperfluidDelegationAmountResponse = exports.SuperfluidDelegationAmountRequest = exports.TotalSuperfluidDelegationsResponse = exports.TotalSuperfluidDelegationsRequest = exports.Delegations = exports.QueryTotalDelegationByValidatorForDenomResponse = exports.QueryTotalDelegationByValidatorForDenomRequest = exports.ConnectedIntermediaryAccountResponse = exports.ConnectedIntermediaryAccountRequest = exports.AllIntermediaryAccountsResponse = exports.AllIntermediaryAccountsRequest = exports.SuperfluidIntermediaryAccountInfo = exports.AssetMultiplierResponse = exports.AssetMultiplierRequest = exports.AllAssetsResponse = exports.AllAssetsRequest = exports.AssetTypeResponse = exports.AssetTypeRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const superfluid_1 = require("./superfluid");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("../lockup/lock");
const staking_1 = require("../../cosmos/staking/v1beta1/staking");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.superfluid.QueryParamsRequest",
    aminoType: "osmosis/query-params-request",
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
            type: "osmosis/query-params-request",
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
            typeUrl: "/osmosis.superfluid.QueryParamsRequest",
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
    typeUrl: "/osmosis.superfluid.QueryParamsResponse",
    aminoType: "osmosis/query-params-response",
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
            type: "osmosis/query-params-response",
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
            typeUrl: "/osmosis.superfluid.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseAssetTypeRequest() {
    return {
        denom: ""
    };
}
exports.AssetTypeRequest = {
    typeUrl: "/osmosis.superfluid.AssetTypeRequest",
    aminoType: "osmosis/asset-type-request",
    is(o) {
        return o && (o.$typeUrl === exports.AssetTypeRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AssetTypeRequest.typeUrl || typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AssetTypeRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAssetTypeRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AssetTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-type-request",
            value: exports.AssetTypeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetTypeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AssetTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetTypeRequest",
            value: exports.AssetTypeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AssetTypeRequest.typeUrl, exports.AssetTypeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AssetTypeRequest.aminoType, exports.AssetTypeRequest.typeUrl);
function createBaseAssetTypeResponse() {
    return {
        assetType: 0
    };
}
exports.AssetTypeResponse = {
    typeUrl: "/osmosis.superfluid.AssetTypeResponse",
    aminoType: "osmosis/asset-type-response",
    is(o) {
        return o && (o.$typeUrl === exports.AssetTypeResponse.typeUrl || (0, helpers_1.isSet)(o.assetType));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AssetTypeResponse.typeUrl || (0, helpers_1.isSet)(o.asset_type));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AssetTypeResponse.typeUrl || (0, helpers_1.isSet)(o.asset_type));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.assetType !== 0) {
            writer.uint32(8).int32(message.assetType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetType = reader.int32();
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
            assetType: (0, helpers_1.isSet)(object.assetType) ? (0, superfluid_1.superfluidAssetTypeFromJSON)(object.assetType) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetType !== undefined && (obj.assetType = (0, superfluid_1.superfluidAssetTypeToJSON)(message.assetType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeResponse();
        message.assetType = object.assetType ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            assetType: (0, helpers_1.isSet)(object.asset_type) ? (0, superfluid_1.superfluidAssetTypeFromJSON)(object.asset_type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.assetType !== undefined && (obj.asset_type = (0, superfluid_1.superfluidAssetTypeToJSON)(message.assetType));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAssetTypeResponse();
        if (object.asset_type !== undefined && object.asset_type !== null) {
            message.assetType = (0, superfluid_1.superfluidAssetTypeFromJSON)(object.asset_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset_type = (0, superfluid_1.superfluidAssetTypeToJSON)(message.assetType);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AssetTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-type-response",
            value: exports.AssetTypeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AssetTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetTypeResponse",
            value: exports.AssetTypeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AssetTypeResponse.typeUrl, exports.AssetTypeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AssetTypeResponse.aminoType, exports.AssetTypeResponse.typeUrl);
function createBaseAllAssetsRequest() {
    return {};
}
exports.AllAssetsRequest = {
    typeUrl: "/osmosis.superfluid.AllAssetsRequest",
    aminoType: "osmosis/all-assets-request",
    is(o) {
        return o && o.$typeUrl === exports.AllAssetsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.AllAssetsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.AllAssetsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsRequest();
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
        const message = createBaseAllAssetsRequest();
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
        const message = createBaseAllAssetsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllAssetsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-assets-request",
            value: exports.AllAssetsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AllAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllAssetsRequest",
            value: exports.AllAssetsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AllAssetsRequest.typeUrl, exports.AllAssetsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllAssetsRequest.aminoType, exports.AllAssetsRequest.typeUrl);
function createBaseAllAssetsResponse() {
    return {
        assets: []
    };
}
exports.AllAssetsResponse = {
    typeUrl: "/osmosis.superfluid.AllAssetsResponse",
    aminoType: "osmosis/all-assets-response",
    is(o) {
        return o && (o.$typeUrl === exports.AllAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || superfluid_1.SuperfluidAsset.is(o.assets[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AllAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || superfluid_1.SuperfluidAsset.isSDK(o.assets[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AllAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || superfluid_1.SuperfluidAsset.isAmino(o.assets[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllAssetsResponse();
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toSDK(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAllAssetsResponse();
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllAssetsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-assets-response",
            value: exports.AllAssetsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AllAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllAssetsResponse",
            value: exports.AllAssetsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AllAssetsResponse.typeUrl, exports.AllAssetsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllAssetsResponse.aminoType, exports.AllAssetsResponse.typeUrl);
function createBaseAssetMultiplierRequest() {
    return {
        denom: ""
    };
}
exports.AssetMultiplierRequest = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
    aminoType: "osmosis/asset-multiplier-request",
    is(o) {
        return o && (o.$typeUrl === exports.AssetMultiplierRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AssetMultiplierRequest.typeUrl || typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AssetMultiplierRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAssetMultiplierRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AssetMultiplierRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-multiplier-request",
            value: exports.AssetMultiplierRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetMultiplierRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AssetMultiplierRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
            value: exports.AssetMultiplierRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AssetMultiplierRequest.typeUrl, exports.AssetMultiplierRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AssetMultiplierRequest.aminoType, exports.AssetMultiplierRequest.typeUrl);
function createBaseAssetMultiplierResponse() {
    return {
        osmoEquivalentMultiplier: undefined
    };
}
exports.AssetMultiplierResponse = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
    aminoType: "osmosis/asset-multiplier-response",
    is(o) {
        return o && o.$typeUrl === exports.AssetMultiplierResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.AssetMultiplierResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.AssetMultiplierResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.osmoEquivalentMultiplier !== undefined) {
            superfluid_1.OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osmoEquivalentMultiplier = superfluid_1.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
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
            osmoEquivalentMultiplier: (0, helpers_1.isSet)(object.osmoEquivalentMultiplier) ? superfluid_1.OsmoEquivalentMultiplierRecord.fromJSON(object.osmoEquivalentMultiplier) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.osmoEquivalentMultiplier !== undefined && (obj.osmoEquivalentMultiplier = message.osmoEquivalentMultiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.toJSON(message.osmoEquivalentMultiplier) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierResponse();
        message.osmoEquivalentMultiplier = object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null ? superfluid_1.OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            osmoEquivalentMultiplier: object.osmo_equivalent_multiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.fromSDK(object.osmo_equivalent_multiplier) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.osmoEquivalentMultiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.toSDK(message.osmoEquivalentMultiplier) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAssetMultiplierResponse();
        if (object.osmo_equivalent_multiplier !== undefined && object.osmo_equivalent_multiplier !== null) {
            message.osmoEquivalentMultiplier = superfluid_1.OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.toAmino(message.osmoEquivalentMultiplier) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AssetMultiplierResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-multiplier-response",
            value: exports.AssetMultiplierResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetMultiplierResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AssetMultiplierResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
            value: exports.AssetMultiplierResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AssetMultiplierResponse.typeUrl, exports.AssetMultiplierResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AssetMultiplierResponse.aminoType, exports.AssetMultiplierResponse.typeUrl);
function createBaseSuperfluidIntermediaryAccountInfo() {
    return {
        denom: "",
        valAddr: "",
        gaugeId: BigInt(0),
        address: ""
    };
}
exports.SuperfluidIntermediaryAccountInfo = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
    aminoType: "osmosis/superfluid-intermediary-account-info",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidIntermediaryAccountInfo.typeUrl || typeof o.denom === "string" && typeof o.valAddr === "string" && typeof o.gaugeId === "bigint" && typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidIntermediaryAccountInfo.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint" && typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidIntermediaryAccountInfo.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint" && typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.valAddr !== "") {
            writer.uint32(18).string(message.valAddr);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.valAddr = reader.string();
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
                    break;
                case 4:
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            valAddr: (0, helpers_1.isSet)(object.valAddr) ? String(object.valAddr) : "",
            gaugeId: (0, helpers_1.isSet)(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0),
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        message.denom = object.denom ?? "";
        message.valAddr = object.valAddr ?? "";
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            valAddr: object?.val_addr,
            gaugeId: object?.gauge_id,
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.valAddr;
        obj.gauge_id = message.gaugeId;
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.valAddr;
        obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidIntermediaryAccountInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-intermediary-account-info",
            value: exports.SuperfluidIntermediaryAccountInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidIntermediaryAccountInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidIntermediaryAccountInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
            value: exports.SuperfluidIntermediaryAccountInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidIntermediaryAccountInfo.typeUrl, exports.SuperfluidIntermediaryAccountInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidIntermediaryAccountInfo.aminoType, exports.SuperfluidIntermediaryAccountInfo.typeUrl);
function createBaseAllIntermediaryAccountsRequest() {
    return {
        pagination: undefined
    };
}
exports.AllIntermediaryAccountsRequest = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
    aminoType: "osmosis/all-intermediary-accounts-request",
    is(o) {
        return o && o.$typeUrl === exports.AllIntermediaryAccountsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.AllIntermediaryAccountsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.AllIntermediaryAccountsRequest.typeUrl;
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
        const message = createBaseAllIntermediaryAccountsRequest();
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
        const message = createBaseAllIntermediaryAccountsRequest();
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
        const message = createBaseAllIntermediaryAccountsRequest();
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
        return exports.AllIntermediaryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-intermediary-accounts-request",
            value: exports.AllIntermediaryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllIntermediaryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AllIntermediaryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
            value: exports.AllIntermediaryAccountsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AllIntermediaryAccountsRequest.typeUrl, exports.AllIntermediaryAccountsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllIntermediaryAccountsRequest.aminoType, exports.AllIntermediaryAccountsRequest.typeUrl);
function createBaseAllIntermediaryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
exports.AllIntermediaryAccountsResponse = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
    aminoType: "osmosis/all-intermediary-accounts-response",
    is(o) {
        return o && (o.$typeUrl === exports.AllIntermediaryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || exports.SuperfluidIntermediaryAccountInfo.is(o.accounts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.AllIntermediaryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || exports.SuperfluidIntermediaryAccountInfo.isSDK(o.accounts[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AllIntermediaryAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || exports.SuperfluidIntermediaryAccountInfo.isAmino(o.accounts[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            exports.SuperfluidIntermediaryAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => exports.SuperfluidIntermediaryAccountInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? exports.SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllIntermediaryAccountsResponse();
        message.accounts = object.accounts?.map(e => exports.SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => exports.SuperfluidIntermediaryAccountInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? exports.SuperfluidIntermediaryAccountInfo.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAllIntermediaryAccountsResponse();
        message.accounts = object.accounts?.map(e => exports.SuperfluidIntermediaryAccountInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? exports.SuperfluidIntermediaryAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllIntermediaryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-intermediary-accounts-response",
            value: exports.AllIntermediaryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllIntermediaryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AllIntermediaryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
            value: exports.AllIntermediaryAccountsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AllIntermediaryAccountsResponse.typeUrl, exports.AllIntermediaryAccountsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllIntermediaryAccountsResponse.aminoType, exports.AllIntermediaryAccountsResponse.typeUrl);
function createBaseConnectedIntermediaryAccountRequest() {
    return {
        lockId: BigInt(0)
    };
}
exports.ConnectedIntermediaryAccountRequest = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
    aminoType: "osmosis/connected-intermediary-account-request",
    is(o) {
        return o && (o.$typeUrl === exports.ConnectedIntermediaryAccountRequest.typeUrl || typeof o.lockId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ConnectedIntermediaryAccountRequest.typeUrl || typeof o.lock_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ConnectedIntermediaryAccountRequest.typeUrl || typeof o.lock_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
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
            lockId: (0, helpers_1.isSet)(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountRequest();
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            lockId: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lockId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConnectedIntermediaryAccountRequest();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectedIntermediaryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/connected-intermediary-account-request",
            value: exports.ConnectedIntermediaryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectedIntermediaryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectedIntermediaryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
            value: exports.ConnectedIntermediaryAccountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConnectedIntermediaryAccountRequest.typeUrl, exports.ConnectedIntermediaryAccountRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConnectedIntermediaryAccountRequest.aminoType, exports.ConnectedIntermediaryAccountRequest.typeUrl);
function createBaseConnectedIntermediaryAccountResponse() {
    return {
        account: undefined
    };
}
exports.ConnectedIntermediaryAccountResponse = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
    aminoType: "osmosis/connected-intermediary-account-response",
    is(o) {
        return o && o.$typeUrl === exports.ConnectedIntermediaryAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ConnectedIntermediaryAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ConnectedIntermediaryAccountResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            exports.SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = exports.SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
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
            account: (0, helpers_1.isSet)(object.account) ? exports.SuperfluidIntermediaryAccountInfo.fromJSON(object.account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? exports.SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? exports.SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            account: object.account ? exports.SuperfluidIntermediaryAccountInfo.fromSDK(object.account) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? exports.SuperfluidIntermediaryAccountInfo.toSDK(message.account) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConnectedIntermediaryAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = exports.SuperfluidIntermediaryAccountInfo.fromAmino(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? exports.SuperfluidIntermediaryAccountInfo.toAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectedIntermediaryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/connected-intermediary-account-response",
            value: exports.ConnectedIntermediaryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectedIntermediaryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectedIntermediaryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
            value: exports.ConnectedIntermediaryAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConnectedIntermediaryAccountResponse.typeUrl, exports.ConnectedIntermediaryAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConnectedIntermediaryAccountResponse.aminoType, exports.ConnectedIntermediaryAccountResponse.typeUrl);
function createBaseQueryTotalDelegationByValidatorForDenomRequest() {
    return {
        denom: ""
    };
}
exports.QueryTotalDelegationByValidatorForDenomRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
    aminoType: "osmosis/query-total-delegation-by-validator-for-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByValidatorForDenomRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByValidatorForDenomRequest.typeUrl || typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByValidatorForDenomRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalDelegationByValidatorForDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-validator-for-denom-request",
            value: exports.QueryTotalDelegationByValidatorForDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByValidatorForDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
            value: exports.QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalDelegationByValidatorForDenomRequest.typeUrl, exports.QueryTotalDelegationByValidatorForDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalDelegationByValidatorForDenomRequest.aminoType, exports.QueryTotalDelegationByValidatorForDenomRequest.typeUrl);
function createBaseQueryTotalDelegationByValidatorForDenomResponse() {
    return {
        assets: []
    };
}
exports.QueryTotalDelegationByValidatorForDenomResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
    aminoType: "osmosis/query-total-delegation-by-validator-for-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByValidatorForDenomResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || exports.Delegations.is(o.assets[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByValidatorForDenomResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || exports.Delegations.isSDK(o.assets[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByValidatorForDenomResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || exports.Delegations.isAmino(o.assets[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            exports.Delegations.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(exports.Delegations.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => exports.Delegations.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? exports.Delegations.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        message.assets = object.assets?.map(e => exports.Delegations.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => exports.Delegations.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? exports.Delegations.toSDK(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        message.assets = object.assets?.map(e => exports.Delegations.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? exports.Delegations.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalDelegationByValidatorForDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-validator-for-denom-response",
            value: exports.QueryTotalDelegationByValidatorForDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByValidatorForDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
            value: exports.QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalDelegationByValidatorForDenomResponse.typeUrl, exports.QueryTotalDelegationByValidatorForDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalDelegationByValidatorForDenomResponse.aminoType, exports.QueryTotalDelegationByValidatorForDenomResponse.typeUrl);
function createBaseDelegations() {
    return {
        valAddr: "",
        amountSfsd: "",
        osmoEquivalent: ""
    };
}
exports.Delegations = {
    typeUrl: "/osmosis.superfluid.Delegations",
    aminoType: "osmosis/delegations",
    is(o) {
        return o && (o.$typeUrl === exports.Delegations.typeUrl || typeof o.valAddr === "string" && typeof o.amountSfsd === "string" && typeof o.osmoEquivalent === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Delegations.typeUrl || typeof o.val_addr === "string" && typeof o.amount_sfsd === "string" && typeof o.osmo_equivalent === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Delegations.typeUrl || typeof o.val_addr === "string" && typeof o.amount_sfsd === "string" && typeof o.osmo_equivalent === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.valAddr !== "") {
            writer.uint32(10).string(message.valAddr);
        }
        if (message.amountSfsd !== "") {
            writer.uint32(18).string(message.amountSfsd);
        }
        if (message.osmoEquivalent !== "") {
            writer.uint32(26).string(message.osmoEquivalent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegations();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valAddr = reader.string();
                    break;
                case 2:
                    message.amountSfsd = reader.string();
                    break;
                case 3:
                    message.osmoEquivalent = reader.string();
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
            valAddr: (0, helpers_1.isSet)(object.valAddr) ? String(object.valAddr) : "",
            amountSfsd: (0, helpers_1.isSet)(object.amountSfsd) ? String(object.amountSfsd) : "",
            osmoEquivalent: (0, helpers_1.isSet)(object.osmoEquivalent) ? String(object.osmoEquivalent) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.amountSfsd !== undefined && (obj.amountSfsd = message.amountSfsd);
        message.osmoEquivalent !== undefined && (obj.osmoEquivalent = message.osmoEquivalent);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegations();
        message.valAddr = object.valAddr ?? "";
        message.amountSfsd = object.amountSfsd ?? "";
        message.osmoEquivalent = object.osmoEquivalent ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            valAddr: object?.val_addr,
            amountSfsd: object?.amount_sfsd,
            osmoEquivalent: object?.osmo_equivalent
        };
    },
    toSDK(message) {
        const obj = {};
        obj.val_addr = message.valAddr;
        obj.amount_sfsd = message.amountSfsd;
        obj.osmo_equivalent = message.osmoEquivalent;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDelegations();
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.amount_sfsd !== undefined && object.amount_sfsd !== null) {
            message.amountSfsd = object.amount_sfsd;
        }
        if (object.osmo_equivalent !== undefined && object.osmo_equivalent !== null) {
            message.osmoEquivalent = object.osmo_equivalent;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val_addr = message.valAddr;
        obj.amount_sfsd = message.amountSfsd;
        obj.osmo_equivalent = message.osmoEquivalent;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Delegations.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/delegations",
            value: exports.Delegations.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Delegations.decode(message.value);
    },
    toProto(message) {
        return exports.Delegations.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.Delegations",
            value: exports.Delegations.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Delegations.typeUrl, exports.Delegations);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Delegations.aminoType, exports.Delegations.typeUrl);
function createBaseTotalSuperfluidDelegationsRequest() {
    return {};
}
exports.TotalSuperfluidDelegationsRequest = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
    aminoType: "osmosis/total-superfluid-delegations-request",
    is(o) {
        return o && o.$typeUrl === exports.TotalSuperfluidDelegationsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.TotalSuperfluidDelegationsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.TotalSuperfluidDelegationsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsRequest();
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
        const message = createBaseTotalSuperfluidDelegationsRequest();
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
        const message = createBaseTotalSuperfluidDelegationsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TotalSuperfluidDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/total-superfluid-delegations-request",
            value: exports.TotalSuperfluidDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TotalSuperfluidDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.TotalSuperfluidDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
            value: exports.TotalSuperfluidDelegationsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TotalSuperfluidDelegationsRequest.typeUrl, exports.TotalSuperfluidDelegationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalSuperfluidDelegationsRequest.aminoType, exports.TotalSuperfluidDelegationsRequest.typeUrl);
function createBaseTotalSuperfluidDelegationsResponse() {
    return {
        totalDelegations: ""
    };
}
exports.TotalSuperfluidDelegationsResponse = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
    aminoType: "osmosis/total-superfluid-delegations-response",
    is(o) {
        return o && (o.$typeUrl === exports.TotalSuperfluidDelegationsResponse.typeUrl || typeof o.totalDelegations === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TotalSuperfluidDelegationsResponse.typeUrl || typeof o.total_delegations === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TotalSuperfluidDelegationsResponse.typeUrl || typeof o.total_delegations === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalDelegations !== "") {
            writer.uint32(10).string(message.totalDelegations);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDelegations = reader.string();
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
            totalDelegations: (0, helpers_1.isSet)(object.totalDelegations) ? String(object.totalDelegations) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalDelegations !== undefined && (obj.totalDelegations = message.totalDelegations);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTotalSuperfluidDelegationsResponse();
        message.totalDelegations = object.totalDelegations ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            totalDelegations: object?.total_delegations
        };
    },
    toSDK(message) {
        const obj = {};
        obj.total_delegations = message.totalDelegations;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTotalSuperfluidDelegationsResponse();
        if (object.total_delegations !== undefined && object.total_delegations !== null) {
            message.totalDelegations = object.total_delegations;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_delegations = message.totalDelegations;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TotalSuperfluidDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/total-superfluid-delegations-response",
            value: exports.TotalSuperfluidDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TotalSuperfluidDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TotalSuperfluidDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
            value: exports.TotalSuperfluidDelegationsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TotalSuperfluidDelegationsResponse.typeUrl, exports.TotalSuperfluidDelegationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalSuperfluidDelegationsResponse.aminoType, exports.TotalSuperfluidDelegationsResponse.typeUrl);
function createBaseSuperfluidDelegationAmountRequest() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        denom: ""
    };
}
exports.SuperfluidDelegationAmountRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
    aminoType: "osmosis/superfluid-delegation-amount-request",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationAmountRequest.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationAmountRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationAmountRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            validatorAddress: object?.validator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationAmountRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-amount-request",
            value: exports.SuperfluidDelegationAmountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationAmountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
            value: exports.SuperfluidDelegationAmountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidDelegationAmountRequest.typeUrl, exports.SuperfluidDelegationAmountRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidDelegationAmountRequest.aminoType, exports.SuperfluidDelegationAmountRequest.typeUrl);
function createBaseSuperfluidDelegationAmountResponse() {
    return {
        amount: []
    };
}
exports.SuperfluidDelegationAmountResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
    aminoType: "osmosis/superfluid-delegation-amount-response",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationAmountResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationAmountResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationAmountResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationAmountResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-amount-response",
            value: exports.SuperfluidDelegationAmountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationAmountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
            value: exports.SuperfluidDelegationAmountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidDelegationAmountResponse.typeUrl, exports.SuperfluidDelegationAmountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidDelegationAmountResponse.aminoType, exports.SuperfluidDelegationAmountResponse.typeUrl);
function createBaseSuperfluidDelegationsByDelegatorRequest() {
    return {
        delegatorAddress: ""
    };
}
exports.SuperfluidDelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
    aminoType: "osmosis/superfluid-delegations-by-delegator-request",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByDelegatorRequest.typeUrl || typeof o.delegatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-delegator-request",
            value: exports.SuperfluidDelegationsByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
            value: exports.SuperfluidDelegationsByDelegatorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidDelegationsByDelegatorRequest.typeUrl, exports.SuperfluidDelegationsByDelegatorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidDelegationsByDelegatorRequest.aminoType, exports.SuperfluidDelegationsByDelegatorRequest.typeUrl);
function createBaseSuperfluidDelegationsByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        totalDelegatedCoins: [],
        totalEquivalentStakedAmount: coin_1.Coin.fromPartial({})
    };
}
exports.SuperfluidDelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
    aminoType: "osmosis/superfluid-delegations-by-delegator-response",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || superfluid_1.SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) && Array.isArray(o.totalDelegatedCoins) && (!o.totalDelegatedCoins.length || coin_1.Coin.is(o.totalDelegatedCoins[0])) && coin_1.Coin.is(o.totalEquivalentStakedAmount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || coin_1.Coin.isSDK(o.total_delegated_coins[0])) && coin_1.Coin.isSDK(o.total_equivalent_staked_amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || coin_1.Coin.isAmino(o.total_delegated_coins[0])) && coin_1.Coin.isAmino(o.total_equivalent_staked_amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalDelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalEquivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalDelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalEquivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
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
            superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : [],
            totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            totalEquivalentStakedAmount: (0, helpers_1.isSet)(object.totalEquivalentStakedAmount) ? coin_1.Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        if (message.totalDelegatedCoins) {
            obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalDelegatedCoins = [];
        }
        message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? coin_1.Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? coin_1.Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : [],
            totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            totalEquivalentStakedAmount: object.total_equivalent_staked_amount ? coin_1.Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? coin_1.Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) || [];
        message.totalDelegatedCoins = object.total_delegated_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null) {
            message.totalEquivalentStakedAmount = coin_1.Coin.fromAmino(object.total_equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? coin_1.Coin.toAmino(message.totalEquivalentStakedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-delegator-response",
            value: exports.SuperfluidDelegationsByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
            value: exports.SuperfluidDelegationsByDelegatorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidDelegationsByDelegatorResponse.typeUrl, exports.SuperfluidDelegationsByDelegatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidDelegationsByDelegatorResponse.aminoType, exports.SuperfluidDelegationsByDelegatorResponse.typeUrl);
function createBaseSuperfluidUndelegationsByDelegatorRequest() {
    return {
        delegatorAddress: "",
        denom: ""
    };
}
exports.SuperfluidUndelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
    aminoType: "osmosis/superfluid-undelegations-by-delegator-request",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidUndelegationsByDelegatorRequest.typeUrl || typeof o.delegatorAddress === "string" && typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidUndelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidUndelegationsByDelegatorRequest.typeUrl || typeof o.delegator_address === "string" && typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidUndelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegations-by-delegator-request",
            value: exports.SuperfluidUndelegationsByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidUndelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidUndelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
            value: exports.SuperfluidUndelegationsByDelegatorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidUndelegationsByDelegatorRequest.typeUrl, exports.SuperfluidUndelegationsByDelegatorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidUndelegationsByDelegatorRequest.aminoType, exports.SuperfluidUndelegationsByDelegatorRequest.typeUrl);
function createBaseSuperfluidUndelegationsByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        totalUndelegatedCoins: [],
        syntheticLocks: []
    };
}
exports.SuperfluidUndelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
    aminoType: "osmosis/superfluid-undelegations-by-delegator-response",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidUndelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || superfluid_1.SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) && Array.isArray(o.totalUndelegatedCoins) && (!o.totalUndelegatedCoins.length || coin_1.Coin.is(o.totalUndelegatedCoins[0])) && Array.isArray(o.syntheticLocks) && (!o.syntheticLocks.length || lock_1.SyntheticLock.is(o.syntheticLocks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidUndelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) && Array.isArray(o.total_undelegated_coins) && (!o.total_undelegated_coins.length || coin_1.Coin.isSDK(o.total_undelegated_coins[0])) && Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || lock_1.SyntheticLock.isSDK(o.synthetic_locks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidUndelegationsByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) && Array.isArray(o.total_undelegated_coins) && (!o.total_undelegated_coins.length || coin_1.Coin.isAmino(o.total_undelegated_coins[0])) && Array.isArray(o.synthetic_locks) && (!o.synthetic_locks.length || lock_1.SyntheticLock.isAmino(o.synthetic_locks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalUndelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.syntheticLocks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalUndelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.syntheticLocks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
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
            superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : [],
            totalUndelegatedCoins: Array.isArray(object?.totalUndelegatedCoins) ? object.totalUndelegatedCoins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e) => lock_1.SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        if (message.totalUndelegatedCoins) {
            obj.totalUndelegatedCoins = message.totalUndelegatedCoins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalUndelegatedCoins = [];
        }
        if (message.syntheticLocks) {
            obj.syntheticLocks = message.syntheticLocks.map(e => e ? lock_1.SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.syntheticLocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.totalUndelegatedCoins = object.totalUndelegatedCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.syntheticLocks = object.syntheticLocks?.map(e => lock_1.SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : [],
            totalUndelegatedCoins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.totalUndelegatedCoins) {
            obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.syntheticLocks) {
            obj.synthetic_locks = message.syntheticLocks.map(e => e ? lock_1.SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) || [];
        message.totalUndelegatedCoins = object.total_undelegated_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.syntheticLocks = object.synthetic_locks?.map(e => lock_1.SyntheticLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.totalUndelegatedCoins) {
            obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.syntheticLocks) {
            obj.synthetic_locks = message.syntheticLocks.map(e => e ? lock_1.SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidUndelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegations-by-delegator-response",
            value: exports.SuperfluidUndelegationsByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidUndelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidUndelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
            value: exports.SuperfluidUndelegationsByDelegatorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidUndelegationsByDelegatorResponse.typeUrl, exports.SuperfluidUndelegationsByDelegatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidUndelegationsByDelegatorResponse.aminoType, exports.SuperfluidUndelegationsByDelegatorResponse.typeUrl);
function createBaseSuperfluidDelegationsByValidatorDenomRequest() {
    return {
        validatorAddress: "",
        denom: ""
    };
}
exports.SuperfluidDelegationsByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
    aminoType: "osmosis/superfluid-delegations-by-validator-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByValidatorDenomRequest.typeUrl || typeof o.validatorAddress === "string" && typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validatorAddress: object?.validator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationsByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-validator-denom-request",
            value: exports.SuperfluidDelegationsByValidatorDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
            value: exports.SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidDelegationsByValidatorDenomRequest.typeUrl, exports.SuperfluidDelegationsByValidatorDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidDelegationsByValidatorDenomRequest.aminoType, exports.SuperfluidDelegationsByValidatorDenomRequest.typeUrl);
function createBaseSuperfluidDelegationsByValidatorDenomResponse() {
    return {
        superfluidDelegationRecords: []
    };
}
exports.SuperfluidDelegationsByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
    aminoType: "osmosis/superfluid-delegations-by-validator-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByValidatorDenomResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || superfluid_1.SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByValidatorDenomResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationsByValidatorDenomResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
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
            superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationsByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-validator-denom-response",
            value: exports.SuperfluidDelegationsByValidatorDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
            value: exports.SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidDelegationsByValidatorDenomResponse.typeUrl, exports.SuperfluidDelegationsByValidatorDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidDelegationsByValidatorDenomResponse.aminoType, exports.SuperfluidDelegationsByValidatorDenomResponse.typeUrl);
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest() {
    return {
        validatorAddress: "",
        denom: ""
    };
}
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
    aminoType: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request",
    is(o) {
        return o && (o.$typeUrl === exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl || typeof o.validatorAddress === "string" && typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl || typeof o.validator_address === "string" && typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validatorAddress: object?.validator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl, exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.aminoType, exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl);
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse() {
    return {
        totalDelegatedCoins: []
    };
}
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
    aminoType: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response",
    is(o) {
        return o && (o.$typeUrl === exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl || Array.isArray(o.totalDelegatedCoins) && (!o.totalDelegatedCoins.length || coin_1.Coin.is(o.totalDelegatedCoins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl || Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || coin_1.Coin.isSDK(o.total_delegated_coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl || Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || coin_1.Coin.isAmino(o.total_delegated_coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.totalDelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.totalDelegatedCoins) {
            obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalDelegatedCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        message.totalDelegatedCoins = object.total_delegated_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl, exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.aminoType, exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl);
function createBaseQueryTotalDelegationByDelegatorRequest() {
    return {
        delegatorAddress: ""
    };
}
exports.QueryTotalDelegationByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
    aminoType: "osmosis/query-total-delegation-by-delegator-request",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByDelegatorRequest.typeUrl || typeof o.delegatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByDelegatorRequest.typeUrl || typeof o.delegator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalDelegationByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-delegator-request",
            value: exports.QueryTotalDelegationByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
            value: exports.QueryTotalDelegationByDelegatorRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalDelegationByDelegatorRequest.typeUrl, exports.QueryTotalDelegationByDelegatorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalDelegationByDelegatorRequest.aminoType, exports.QueryTotalDelegationByDelegatorRequest.typeUrl);
function createBaseQueryTotalDelegationByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        delegationResponse: [],
        totalDelegatedCoins: [],
        totalEquivalentStakedAmount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalDelegationByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
    aminoType: "osmosis/query-total-delegation-by-delegator-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByDelegatorResponse.typeUrl || Array.isArray(o.superfluidDelegationRecords) && (!o.superfluidDelegationRecords.length || superfluid_1.SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) && Array.isArray(o.delegationResponse) && (!o.delegationResponse.length || staking_1.DelegationResponse.is(o.delegationResponse[0])) && Array.isArray(o.totalDelegatedCoins) && (!o.totalDelegatedCoins.length || coin_1.Coin.is(o.totalDelegatedCoins[0])) && coin_1.Coin.is(o.totalEquivalentStakedAmount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) && Array.isArray(o.delegation_response) && (!o.delegation_response.length || staking_1.DelegationResponse.isSDK(o.delegation_response[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || coin_1.Coin.isSDK(o.total_delegated_coins[0])) && coin_1.Coin.isSDK(o.total_equivalent_staked_amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalDelegationByDelegatorResponse.typeUrl || Array.isArray(o.superfluid_delegation_records) && (!o.superfluid_delegation_records.length || superfluid_1.SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) && Array.isArray(o.delegation_response) && (!o.delegation_response.length || staking_1.DelegationResponse.isAmino(o.delegation_response[0])) && Array.isArray(o.total_delegated_coins) && (!o.total_delegated_coins.length || coin_1.Coin.isAmino(o.total_delegated_coins[0])) && coin_1.Coin.isAmino(o.total_equivalent_staked_amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.delegationResponse) {
            staking_1.DelegationResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.totalDelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalEquivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.delegationResponse.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalDelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalEquivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
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
            superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : [],
            delegationResponse: Array.isArray(object?.delegationResponse) ? object.delegationResponse.map((e) => staking_1.DelegationResponse.fromJSON(e)) : [],
            totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            totalEquivalentStakedAmount: (0, helpers_1.isSet)(object.totalEquivalentStakedAmount) ? coin_1.Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        if (message.delegationResponse) {
            obj.delegationResponse = message.delegationResponse.map(e => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegationResponse = [];
        }
        if (message.totalDelegatedCoins) {
            obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalDelegatedCoins = [];
        }
        message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? coin_1.Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.delegationResponse = object.delegationResponse?.map(e => staking_1.DelegationResponse.fromPartial(e)) || [];
        message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? coin_1.Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : [],
            delegationResponse: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e) => staking_1.DelegationResponse.fromSDK(e)) : [],
            totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            totalEquivalentStakedAmount: object.total_equivalent_staked_amount ? coin_1.Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegationResponse) {
            obj.delegation_response = message.delegationResponse.map(e => e ? staking_1.DelegationResponse.toSDK(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? coin_1.Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        message.superfluidDelegationRecords = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) || [];
        message.delegationResponse = object.delegation_response?.map(e => staking_1.DelegationResponse.fromAmino(e)) || [];
        message.totalDelegatedCoins = object.total_delegated_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null) {
            message.totalEquivalentStakedAmount = coin_1.Coin.fromAmino(object.total_equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegationResponse) {
            obj.delegation_response = message.delegationResponse.map(e => e ? staking_1.DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? coin_1.Coin.toAmino(message.totalEquivalentStakedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalDelegationByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-delegator-response",
            value: exports.QueryTotalDelegationByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
            value: exports.QueryTotalDelegationByDelegatorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalDelegationByDelegatorResponse.typeUrl, exports.QueryTotalDelegationByDelegatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalDelegationByDelegatorResponse.aminoType, exports.QueryTotalDelegationByDelegatorResponse.typeUrl);
function createBaseQueryUnpoolWhitelistRequest() {
    return {};
}
exports.QueryUnpoolWhitelistRequest = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
    aminoType: "osmosis/query-unpool-whitelist-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryUnpoolWhitelistRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUnpoolWhitelistRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUnpoolWhitelistRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistRequest();
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
        const message = createBaseQueryUnpoolWhitelistRequest();
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
        const message = createBaseQueryUnpoolWhitelistRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnpoolWhitelistRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-unpool-whitelist-request",
            value: exports.QueryUnpoolWhitelistRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnpoolWhitelistRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnpoolWhitelistRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
            value: exports.QueryUnpoolWhitelistRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUnpoolWhitelistRequest.typeUrl, exports.QueryUnpoolWhitelistRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnpoolWhitelistRequest.aminoType, exports.QueryUnpoolWhitelistRequest.typeUrl);
function createBaseQueryUnpoolWhitelistResponse() {
    return {
        poolIds: []
    };
}
exports.QueryUnpoolWhitelistResponse = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
    aminoType: "osmosis/query-unpool-whitelist-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUnpoolWhitelistResponse.typeUrl || Array.isArray(o.poolIds) && (!o.poolIds.length || typeof o.poolIds[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUnpoolWhitelistResponse.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUnpoolWhitelistResponse.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.poolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.poolIds.push(reader.uint64());
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
            poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.poolIds) {
            obj.poolIds = message.poolIds.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.poolIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnpoolWhitelistResponse();
        message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            poolIds: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.poolIds) {
            obj.pool_ids = message.poolIds.map(e => e);
        }
        else {
            obj.pool_ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUnpoolWhitelistResponse();
        message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolIds) {
            obj.pool_ids = message.poolIds.map(e => e.toString());
        }
        else {
            obj.pool_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnpoolWhitelistResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-unpool-whitelist-response",
            value: exports.QueryUnpoolWhitelistResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnpoolWhitelistResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnpoolWhitelistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
            value: exports.QueryUnpoolWhitelistResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUnpoolWhitelistResponse.typeUrl, exports.QueryUnpoolWhitelistResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnpoolWhitelistResponse.aminoType, exports.QueryUnpoolWhitelistResponse.typeUrl);
