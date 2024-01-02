"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const authz_1 = require("./authz");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        authorization: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.authz.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || authz_1.GrantAuthorization.is(o.authorization[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || authz_1.GrantAuthorization.isSDK(o.authorization[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || authz_1.GrantAuthorization.isAmino(o.authorization[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.authorization) {
            authz_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.authorization.push(authz_1.GrantAuthorization.decode(reader, reader.uint32()));
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
            authorization: Array.isArray(object?.authorization) ? object.authorization.map((e) => authz_1.GrantAuthorization.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(e => e ? authz_1.GrantAuthorization.toJSON(e) : undefined);
        }
        else {
            obj.authorization = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.authorization = object.authorization?.map(e => authz_1.GrantAuthorization.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            authorization: Array.isArray(object?.authorization) ? object.authorization.map((e) => authz_1.GrantAuthorization.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(e => e ? authz_1.GrantAuthorization.toSDK(e) : undefined);
        }
        else {
            obj.authorization = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.authorization = object.authorization?.map(e => authz_1.GrantAuthorization.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(e => e ? authz_1.GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.authorization = [];
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
            typeUrl: "/cosmos.authz.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
