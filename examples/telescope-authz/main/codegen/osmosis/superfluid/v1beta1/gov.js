"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUnpoolWhiteListProposal = exports.RemoveSuperfluidAssetsProposal = exports.SetSuperfluidAssetsProposal = void 0;
const superfluid_1 = require("../superfluid");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseSetSuperfluidAssetsProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
        title: "",
        description: "",
        assets: []
    };
}
exports.SetSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
    aminoType: "osmosis/v1beta1/set-superfluid-assets-proposal",
    is(o) {
        return o && (o.$typeUrl === exports.SetSuperfluidAssetsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.assets) && (!o.assets.length || superfluid_1.SuperfluidAsset.is(o.assets[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SetSuperfluidAssetsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.assets) && (!o.assets.length || superfluid_1.SuperfluidAsset.isSDK(o.assets[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SetSuperfluidAssetsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.assets) && (!o.assets.length || superfluid_1.SuperfluidAsset.isAmino(o.assets[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.assets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSuperfluidAssetsProposal();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSetSuperfluidAssetsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toSDK(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSetSuperfluidAssetsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SetSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/v1beta1/set-superfluid-assets-proposal",
            value: exports.SetSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SetSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SetSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
            value: exports.SetSuperfluidAssetsProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SetSuperfluidAssetsProposal.typeUrl, exports.SetSuperfluidAssetsProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SetSuperfluidAssetsProposal.aminoType, exports.SetSuperfluidAssetsProposal.typeUrl);
function createBaseRemoveSuperfluidAssetsProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
        title: "",
        description: "",
        superfluidAssetDenoms: []
    };
}
exports.RemoveSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
    aminoType: "osmosis/v1beta1/remove-superfluid-assets-proposal",
    is(o) {
        return o && (o.$typeUrl === exports.RemoveSuperfluidAssetsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.superfluidAssetDenoms) && (!o.superfluidAssetDenoms.length || typeof o.superfluidAssetDenoms[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RemoveSuperfluidAssetsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.superfluid_asset_denoms) && (!o.superfluid_asset_denoms.length || typeof o.superfluid_asset_denoms[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RemoveSuperfluidAssetsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.superfluid_asset_denoms) && (!o.superfluid_asset_denoms.length || typeof o.superfluid_asset_denoms[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.superfluidAssetDenoms) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveSuperfluidAssetsProposal();
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
                    message.superfluidAssetDenoms.push(reader.string());
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
            superfluidAssetDenoms: Array.isArray(object?.superfluidAssetDenoms) ? object.superfluidAssetDenoms.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.superfluidAssetDenoms) {
            obj.superfluidAssetDenoms = message.superfluidAssetDenoms.map(e => e);
        }
        else {
            obj.superfluidAssetDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRemoveSuperfluidAssetsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.superfluidAssetDenoms = object.superfluidAssetDenoms?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            superfluidAssetDenoms: Array.isArray(object?.superfluid_asset_denoms) ? object.superfluid_asset_denoms.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.superfluidAssetDenoms) {
            obj.superfluid_asset_denoms = message.superfluidAssetDenoms.map(e => e);
        }
        else {
            obj.superfluid_asset_denoms = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRemoveSuperfluidAssetsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.superfluidAssetDenoms = object.superfluid_asset_denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.superfluidAssetDenoms) {
            obj.superfluid_asset_denoms = message.superfluidAssetDenoms.map(e => e);
        }
        else {
            obj.superfluid_asset_denoms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RemoveSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/v1beta1/remove-superfluid-assets-proposal",
            value: exports.RemoveSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RemoveSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RemoveSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
            value: exports.RemoveSuperfluidAssetsProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RemoveSuperfluidAssetsProposal.typeUrl, exports.RemoveSuperfluidAssetsProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RemoveSuperfluidAssetsProposal.aminoType, exports.RemoveSuperfluidAssetsProposal.typeUrl);
function createBaseUpdateUnpoolWhiteListProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
        title: "",
        description: "",
        ids: [],
        isOverwrite: false
    };
}
exports.UpdateUnpoolWhiteListProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
    aminoType: "osmosis/v1beta1/update-unpool-white-list-proposal",
    is(o) {
        return o && (o.$typeUrl === exports.UpdateUnpoolWhiteListProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint") && typeof o.isOverwrite === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UpdateUnpoolWhiteListProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint") && typeof o.is_overwrite === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpdateUnpoolWhiteListProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint") && typeof o.is_overwrite === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.isOverwrite === true) {
            writer.uint32(32).bool(message.isOverwrite);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUnpoolWhiteListProposal();
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
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.isOverwrite = reader.bool();
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
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => BigInt(e.toString())) : [],
            isOverwrite: (0, helpers_1.isSet)(object.isOverwrite) ? Boolean(object.isOverwrite) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.ids) {
            obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.ids = [];
        }
        message.isOverwrite !== undefined && (obj.isOverwrite = message.isOverwrite);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateUnpoolWhiteListProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        message.isOverwrite = object.isOverwrite ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => e) : [],
            isOverwrite: object?.is_overwrite
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.ids) {
            obj.ids = message.ids.map(e => e);
        }
        else {
            obj.ids = [];
        }
        obj.is_overwrite = message.isOverwrite;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpdateUnpoolWhiteListProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.ids = object.ids?.map(e => BigInt(e)) || [];
        if (object.is_overwrite !== undefined && object.is_overwrite !== null) {
            message.isOverwrite = object.is_overwrite;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = [];
        }
        obj.is_overwrite = message.isOverwrite;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateUnpoolWhiteListProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/v1beta1/update-unpool-white-list-proposal",
            value: exports.UpdateUnpoolWhiteListProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateUnpoolWhiteListProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateUnpoolWhiteListProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
            value: exports.UpdateUnpoolWhiteListProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpdateUnpoolWhiteListProposal.typeUrl, exports.UpdateUnpoolWhiteListProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpdateUnpoolWhiteListProposal.aminoType, exports.UpdateUnpoolWhiteListProposal.typeUrl);
