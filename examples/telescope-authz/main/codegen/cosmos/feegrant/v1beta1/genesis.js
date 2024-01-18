"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const feegrant_1 = require("./feegrant");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        allowances: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.is(o.allowances[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.isSDK(o.allowances[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.allowances) && (!o.allowances.length || feegrant_1.Grant.isAmino(o.allowances[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => feegrant_1.Grant.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toSDK(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.allowances = object.allowances?.map(e => feegrant_1.Grant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? feegrant_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
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
            typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
