"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        genTxs: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.genTxs) && (!o.genTxs.length || o.genTxs[0] instanceof Uint8Array || typeof o.genTxs[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.gen_txs) && (!o.gen_txs.length || o.gen_txs[0] instanceof Uint8Array || typeof o.gen_txs[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.gen_txs) && (!o.gen_txs.length || o.gen_txs[0] instanceof Uint8Array || typeof o.gen_txs[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.genTxs) {
            writer.uint32(10).bytes(v);
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
                    message.genTxs.push(reader.bytes());
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
            genTxs: Array.isArray(object?.genTxs) ? object.genTxs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.genTxs) {
            obj.genTxs = message.genTxs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.genTxs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.genTxs = object.genTxs?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            genTxs: Array.isArray(object?.gen_txs) ? object.gen_txs.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.genTxs) {
            obj.gen_txs = message.genTxs.map(e => e);
        }
        else {
            obj.gen_txs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.genTxs = object.gen_txs?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.genTxs) {
            obj.gen_txs = message.genTxs.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.gen_txs = [];
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
            typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
