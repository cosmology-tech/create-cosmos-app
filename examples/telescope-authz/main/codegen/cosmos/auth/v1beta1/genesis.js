"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const auth_1 = require("./auth");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: auth_1.Params.fromPartial({}),
        accounts: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.auth.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || auth_1.Params.is(o.params) && Array.isArray(o.accounts) && (!o.accounts.length || any_1.Any.is(o.accounts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || auth_1.Params.isSDK(o.params) && Array.isArray(o.accounts) && (!o.accounts.length || any_1.Any.isSDK(o.accounts[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || auth_1.Params.isAmino(o.params) && Array.isArray(o.accounts) && (!o.accounts.length || any_1.Any.isAmino(o.accounts[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = auth_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? auth_1.Params.fromJSON(object.params) : undefined,
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toJSON(message.params) : undefined);
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? auth_1.Params.fromPartial(object.params) : undefined;
        message.accounts = object.accounts?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? auth_1.Params.fromSDK(object.params) : undefined,
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toSDK(message.params) : undefined);
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = auth_1.Params.fromAmino(object.params);
        }
        message.accounts = object.accounts?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? auth_1.Params.toAmino(message.params) : undefined;
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
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
            typeUrl: "/cosmos.auth.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
