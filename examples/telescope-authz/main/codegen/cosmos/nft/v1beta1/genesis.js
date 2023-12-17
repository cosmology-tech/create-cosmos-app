"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = exports.GenesisState = void 0;
const nft_1 = require("./nft");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        classes: [],
        entries: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.nft.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.classes) && (!o.classes.length || nft_1.Class.is(o.classes[0])) && Array.isArray(o.entries) && (!o.entries.length || exports.Entry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.classes) && (!o.classes.length || nft_1.Class.isSDK(o.classes[0])) && Array.isArray(o.entries) && (!o.entries.length || exports.Entry.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.classes) && (!o.classes.length || nft_1.Class.isAmino(o.classes[0])) && Array.isArray(o.entries) && (!o.entries.length || exports.Entry.isAmino(o.entries[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.classes) {
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.Entry.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.entries.push(exports.Entry.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromJSON(e)) : [],
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.Entry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.Entry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.classes = object.classes?.map(e => nft_1.Class.fromPartial(e)) || [];
        message.entries = object.entries?.map(e => exports.Entry.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromSDK(e)) : [],
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.Entry.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toSDK(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.Entry.toSDK(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.classes = object.classes?.map(e => nft_1.Class.fromAmino(e)) || [];
        message.entries = object.entries?.map(e => exports.Entry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toAmino(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.Entry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
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
            typeUrl: "/cosmos.nft.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBaseEntry() {
    return {
        owner: "",
        nfts: []
    };
}
exports.Entry = {
    typeUrl: "/cosmos.nft.v1beta1.Entry",
    aminoType: "cosmos-sdk/Entry",
    is(o) {
        return o && (o.$typeUrl === exports.Entry.typeUrl || typeof o.owner === "string" && Array.isArray(o.nfts) && (!o.nfts.length || nft_1.NFT.is(o.nfts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Entry.typeUrl || typeof o.owner === "string" && Array.isArray(o.nfts) && (!o.nfts.length || nft_1.NFT.isSDK(o.nfts[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Entry.typeUrl || typeof o.owner === "string" && Array.isArray(o.nfts) && (!o.nfts.length || nft_1.NFT.isAmino(o.nfts[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.nfts) {
            nft_1.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEntry();
        message.owner = object.owner ?? "";
        message.nfts = object.nfts?.map(e => nft_1.NFT.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toSDK(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEntry();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.nfts = object.nfts?.map(e => nft_1.NFT.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toAmino(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Entry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Entry",
            value: exports.Entry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Entry.decode(message.value);
    },
    toProto(message) {
        return exports.Entry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Entry",
            value: exports.Entry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Entry.typeUrl, exports.Entry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Entry.aminoType, exports.Entry.typeUrl);
