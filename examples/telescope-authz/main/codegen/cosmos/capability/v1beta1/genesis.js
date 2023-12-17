"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisOwners = void 0;
const capability_1 = require("./capability");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisOwners() {
    return {
        index: BigInt(0),
        indexOwners: capability_1.CapabilityOwners.fromPartial({})
    };
}
exports.GenesisOwners = {
    typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
    aminoType: "cosmos-sdk/GenesisOwners",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisOwners.typeUrl || typeof o.index === "bigint" && capability_1.CapabilityOwners.is(o.indexOwners));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisOwners.typeUrl || typeof o.index === "bigint" && capability_1.CapabilityOwners.isSDK(o.index_owners));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisOwners.typeUrl || typeof o.index === "bigint" && capability_1.CapabilityOwners.isAmino(o.index_owners));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            capability_1.CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.indexOwners = capability_1.CapabilityOwners.decode(reader, reader.uint32());
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
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            indexOwners: (0, helpers_1.isSet)(object.indexOwners) ? capability_1.CapabilityOwners.fromJSON(object.indexOwners) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.indexOwners !== undefined && (obj.indexOwners = message.indexOwners ? capability_1.CapabilityOwners.toJSON(message.indexOwners) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisOwners();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? capability_1.CapabilityOwners.fromPartial(object.indexOwners) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index,
            indexOwners: object.index_owners ? capability_1.CapabilityOwners.fromSDK(object.index_owners) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        message.indexOwners !== undefined && (obj.index_owners = message.indexOwners ? capability_1.CapabilityOwners.toSDK(message.indexOwners) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisOwners();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.index_owners !== undefined && object.index_owners !== null) {
            message.indexOwners = capability_1.CapabilityOwners.fromAmino(object.index_owners);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.index_owners = message.indexOwners ? capability_1.CapabilityOwners.toAmino(message.indexOwners) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisOwners.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisOwners",
            value: exports.GenesisOwners.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisOwners.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
            value: exports.GenesisOwners.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisOwners.typeUrl, exports.GenesisOwners);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisOwners.aminoType, exports.GenesisOwners.typeUrl);
function createBaseGenesisState() {
    return {
        index: BigInt(0),
        owners: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.capability.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.index === "bigint" && Array.isArray(o.owners) && (!o.owners.length || exports.GenesisOwners.is(o.owners[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.index === "bigint" && Array.isArray(o.owners) && (!o.owners.length || exports.GenesisOwners.isSDK(o.owners[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.index === "bigint" && Array.isArray(o.owners) && (!o.owners.length || exports.GenesisOwners.isAmino(o.owners[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            exports.GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.owners.push(exports.GenesisOwners.decode(reader, reader.uint32()));
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
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.GenesisOwners.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.GenesisOwners.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.owners = object.owners?.map(e => exports.GenesisOwners.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index,
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.GenesisOwners.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.GenesisOwners.toSDK(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        message.owners = object.owners?.map(e => exports.GenesisOwners.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.GenesisOwners.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
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
            typeUrl: "/cosmos.capability.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
