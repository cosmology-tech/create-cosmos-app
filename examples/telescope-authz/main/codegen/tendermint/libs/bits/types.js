"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitArray = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseBitArray() {
    return {
        bits: BigInt(0),
        elems: []
    };
}
exports.BitArray = {
    typeUrl: "/tendermint.libs.bits.BitArray",
    is(o) {
        return o && (o.$typeUrl === exports.BitArray.typeUrl || typeof o.bits === "bigint" && Array.isArray(o.elems) && (!o.elems.length || typeof o.elems[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BitArray.typeUrl || typeof o.bits === "bigint" && Array.isArray(o.elems) && (!o.elems.length || typeof o.elems[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BitArray.typeUrl || typeof o.bits === "bigint" && Array.isArray(o.elems) && (!o.elems.length || typeof o.elems[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bits !== BigInt(0)) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
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
            bits: (0, helpers_1.isSet)(object.bits) ? BigInt(object.bits.toString()) : BigInt(0),
            elems: Array.isArray(object?.elems) ? object.elems.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bits !== undefined && (obj.bits = (message.bits || BigInt(0)).toString());
        if (message.elems) {
            obj.elems = message.elems.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBitArray();
        message.bits = object.bits !== undefined && object.bits !== null ? BigInt(object.bits.toString()) : BigInt(0);
        message.elems = object.elems?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            bits: object?.bits,
            elems: Array.isArray(object?.elems) ? object.elems.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.bits = message.bits;
        if (message.elems) {
            obj.elems = message.elems.map(e => e);
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBitArray();
        if (object.bits !== undefined && object.bits !== null) {
            message.bits = BigInt(object.bits);
        }
        message.elems = object.elems?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bits = message.bits ? message.bits.toString() : undefined;
        if (message.elems) {
            obj.elems = message.elems.map(e => e.toString());
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BitArray.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BitArray.decode(message.value);
    },
    toProto(message) {
        return exports.BitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.libs.bits.BitArray",
            value: exports.BitArray.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BitArray.typeUrl, exports.BitArray);
