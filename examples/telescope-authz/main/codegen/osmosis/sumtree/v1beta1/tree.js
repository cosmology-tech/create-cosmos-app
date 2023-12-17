"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaf = exports.Child = exports.Node = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseNode() {
    return {
        children: []
    };
}
exports.Node = {
    typeUrl: "/osmosis.store.v1beta1.Node",
    aminoType: "osmosis/store/node",
    is(o) {
        return o && (o.$typeUrl === exports.Node.typeUrl || Array.isArray(o.children) && (!o.children.length || exports.Child.is(o.children[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Node.typeUrl || Array.isArray(o.children) && (!o.children.length || exports.Child.isSDK(o.children[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Node.typeUrl || Array.isArray(o.children) && (!o.children.length || exports.Child.isAmino(o.children[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.children) {
            exports.Child.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.children.push(exports.Child.decode(reader, reader.uint32()));
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
            children: Array.isArray(object?.children) ? object.children.map((e) => exports.Child.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.children) {
            obj.children = message.children.map(e => e ? exports.Child.toJSON(e) : undefined);
        }
        else {
            obj.children = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNode();
        message.children = object.children?.map(e => exports.Child.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            children: Array.isArray(object?.children) ? object.children.map((e) => exports.Child.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.children) {
            obj.children = message.children.map(e => e ? exports.Child.toSDK(e) : undefined);
        }
        else {
            obj.children = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseNode();
        message.children = object.children?.map(e => exports.Child.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.children) {
            obj.children = message.children.map(e => e ? exports.Child.toAmino(e) : undefined);
        }
        else {
            obj.children = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Node.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/node",
            value: exports.Node.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Node.decode(message.value);
    },
    toProto(message) {
        return exports.Node.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Node",
            value: exports.Node.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Node.typeUrl, exports.Node);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Node.aminoType, exports.Node.typeUrl);
function createBaseChild() {
    return {
        index: new Uint8Array(),
        accumulation: ""
    };
}
exports.Child = {
    typeUrl: "/osmosis.store.v1beta1.Child",
    aminoType: "osmosis/store/child",
    is(o) {
        return o && (o.$typeUrl === exports.Child.typeUrl || (o.index instanceof Uint8Array || typeof o.index === "string") && typeof o.accumulation === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Child.typeUrl || (o.index instanceof Uint8Array || typeof o.index === "string") && typeof o.accumulation === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Child.typeUrl || (o.index instanceof Uint8Array || typeof o.index === "string") && typeof o.accumulation === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index.length !== 0) {
            writer.uint32(10).bytes(message.index);
        }
        if (message.accumulation !== "") {
            writer.uint32(18).string(message.accumulation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChild();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.bytes();
                    break;
                case 2:
                    message.accumulation = reader.string();
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
            index: (0, helpers_1.isSet)(object.index) ? (0, helpers_1.bytesFromBase64)(object.index) : new Uint8Array(),
            accumulation: (0, helpers_1.isSet)(object.accumulation) ? String(object.accumulation) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (0, helpers_1.base64FromBytes)(message.index !== undefined ? message.index : new Uint8Array()));
        message.accumulation !== undefined && (obj.accumulation = message.accumulation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChild();
        message.index = object.index ?? new Uint8Array();
        message.accumulation = object.accumulation ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index,
            accumulation: object?.accumulation
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        obj.accumulation = message.accumulation;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseChild();
        if (object.index !== undefined && object.index !== null) {
            message.index = (0, helpers_1.bytesFromBase64)(object.index);
        }
        if (object.accumulation !== undefined && object.accumulation !== null) {
            message.accumulation = object.accumulation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? (0, helpers_1.base64FromBytes)(message.index) : undefined;
        obj.accumulation = message.accumulation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Child.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/child",
            value: exports.Child.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Child.decode(message.value);
    },
    toProto(message) {
        return exports.Child.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Child",
            value: exports.Child.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Child.typeUrl, exports.Child);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Child.aminoType, exports.Child.typeUrl);
function createBaseLeaf() {
    return {
        leaf: undefined
    };
}
exports.Leaf = {
    typeUrl: "/osmosis.store.v1beta1.Leaf",
    aminoType: "osmosis/store/leaf",
    is(o) {
        return o && o.$typeUrl === exports.Leaf.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Leaf.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Leaf.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.leaf !== undefined) {
            exports.Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaf();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaf = exports.Child.decode(reader, reader.uint32());
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
            leaf: (0, helpers_1.isSet)(object.leaf) ? exports.Child.fromJSON(object.leaf) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.leaf !== undefined && (obj.leaf = message.leaf ? exports.Child.toJSON(message.leaf) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLeaf();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.Child.fromPartial(object.leaf) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            leaf: object.leaf ? exports.Child.fromSDK(object.leaf) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.leaf !== undefined && (obj.leaf = message.leaf ? exports.Child.toSDK(message.leaf) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLeaf();
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = exports.Child.fromAmino(object.leaf);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.leaf = message.leaf ? exports.Child.toAmino(message.leaf) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Leaf.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/store/leaf",
            value: exports.Leaf.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Leaf.decode(message.value);
    },
    toProto(message) {
        return exports.Leaf.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.store.v1beta1.Leaf",
            value: exports.Leaf.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Leaf.typeUrl, exports.Leaf);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Leaf.aminoType, exports.Leaf.typeUrl);
