"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisDenom = exports.GenesisState = void 0;
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        factoryDenoms: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
    aminoType: "osmosis/tokenfactory/genesis-state",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.is(o.params) && Array.isArray(o.factoryDenoms) && (!o.factoryDenoms.length || exports.GenesisDenom.is(o.factoryDenoms[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isSDK(o.params) && Array.isArray(o.factory_denoms) && (!o.factory_denoms.length || exports.GenesisDenom.isSDK(o.factory_denoms[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isAmino(o.params) && Array.isArray(o.factory_denoms) && (!o.factory_denoms.length || exports.GenesisDenom.isAmino(o.factory_denoms[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factoryDenoms) {
            exports.GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.factoryDenoms.push(exports.GenesisDenom.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            factoryDenoms: Array.isArray(object?.factoryDenoms) ? object.factoryDenoms.map((e) => exports.GenesisDenom.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.factoryDenoms) {
            obj.factoryDenoms = message.factoryDenoms.map(e => e ? exports.GenesisDenom.toJSON(e) : undefined);
        }
        else {
            obj.factoryDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.factoryDenoms = object.factoryDenoms?.map(e => exports.GenesisDenom.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined,
            factoryDenoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e) => exports.GenesisDenom.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        if (message.factoryDenoms) {
            obj.factory_denoms = message.factoryDenoms.map(e => e ? exports.GenesisDenom.toSDK(e) : undefined);
        }
        else {
            obj.factory_denoms = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.factoryDenoms = object.factory_denoms?.map(e => exports.GenesisDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.factoryDenoms) {
            obj.factory_denoms = message.factoryDenoms.map(e => e ? exports.GenesisDenom.toAmino(e) : undefined);
        }
        else {
            obj.factory_denoms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/genesis-state",
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
            typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBaseGenesisDenom() {
    return {
        denom: "",
        authorityMetadata: authorityMetadata_1.DenomAuthorityMetadata.fromPartial({})
    };
}
exports.GenesisDenom = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
    aminoType: "osmosis/tokenfactory/genesis-denom",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisDenom.typeUrl || typeof o.denom === "string" && authorityMetadata_1.DenomAuthorityMetadata.is(o.authorityMetadata));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisDenom.typeUrl || typeof o.denom === "string" && authorityMetadata_1.DenomAuthorityMetadata.isSDK(o.authority_metadata));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisDenom.typeUrl || typeof o.denom === "string" && authorityMetadata_1.DenomAuthorityMetadata.isAmino(o.authority_metadata));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            authorityMetadata: (0, helpers_1.isSet)(object.authorityMetadata) ? authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisDenom();
        message.denom = object.denom ?? "";
        message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            authorityMetadata: object.authority_metadata ? authorityMetadata_1.DenomAuthorityMetadata.fromSDK(object.authority_metadata) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.authorityMetadata !== undefined && (obj.authority_metadata = message.authorityMetadata ? authorityMetadata_1.DenomAuthorityMetadata.toSDK(message.authorityMetadata) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisDenom();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromAmino(object.authority_metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.authority_metadata = message.authorityMetadata ? authorityMetadata_1.DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/genesis-denom",
            value: exports.GenesisDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisDenom.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
            value: exports.GenesisDenom.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisDenom.typeUrl, exports.GenesisDenom);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisDenom.aminoType, exports.GenesisDenom.typeUrl);
