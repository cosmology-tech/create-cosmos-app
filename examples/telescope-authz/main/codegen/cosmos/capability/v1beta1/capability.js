"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityOwners = exports.Owner = exports.Capability = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseCapability() {
    return {
        index: BigInt(0)
    };
}
exports.Capability = {
    typeUrl: "/cosmos.capability.v1beta1.Capability",
    aminoType: "cosmos-sdk/Capability",
    is(o) {
        return o && (o.$typeUrl === exports.Capability.typeUrl || typeof o.index === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Capability.typeUrl || typeof o.index === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Capability.typeUrl || typeof o.index === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapability();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
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
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCapability();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            index: object?.index
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCapability();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Capability.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Capability",
            value: exports.Capability.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Capability.decode(message.value);
    },
    toProto(message) {
        return exports.Capability.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.Capability",
            value: exports.Capability.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Capability.typeUrl, exports.Capability);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Capability.aminoType, exports.Capability.typeUrl);
function createBaseOwner() {
    return {
        module: "",
        name: ""
    };
}
exports.Owner = {
    typeUrl: "/cosmos.capability.v1beta1.Owner",
    aminoType: "cosmos-sdk/Owner",
    is(o) {
        return o && (o.$typeUrl === exports.Owner.typeUrl || typeof o.module === "string" && typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Owner.typeUrl || typeof o.module === "string" && typeof o.name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Owner.typeUrl || typeof o.module === "string" && typeof o.name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            module: (0, helpers_1.isSet)(object.module) ? String(object.module) : "",
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOwner();
        message.module = object.module ?? "";
        message.name = object.name ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            module: object?.module,
            name: object?.name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.module = message.module;
        obj.name = message.name;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseOwner();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Owner.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Owner",
            value: exports.Owner.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Owner.decode(message.value);
    },
    toProto(message) {
        return exports.Owner.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.Owner",
            value: exports.Owner.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Owner.typeUrl, exports.Owner);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Owner.aminoType, exports.Owner.typeUrl);
function createBaseCapabilityOwners() {
    return {
        owners: []
    };
}
exports.CapabilityOwners = {
    typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
    aminoType: "cosmos-sdk/CapabilityOwners",
    is(o) {
        return o && (o.$typeUrl === exports.CapabilityOwners.typeUrl || Array.isArray(o.owners) && (!o.owners.length || exports.Owner.is(o.owners[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CapabilityOwners.typeUrl || Array.isArray(o.owners) && (!o.owners.length || exports.Owner.isSDK(o.owners[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CapabilityOwners.typeUrl || Array.isArray(o.owners) && (!o.owners.length || exports.Owner.isAmino(o.owners[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.owners) {
            exports.Owner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapabilityOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owners.push(exports.Owner.decode(reader, reader.uint32()));
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
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.Owner.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.Owner.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCapabilityOwners();
        message.owners = object.owners?.map(e => exports.Owner.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.Owner.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.Owner.toSDK(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCapabilityOwners();
        message.owners = object.owners?.map(e => exports.Owner.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.Owner.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CapabilityOwners.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CapabilityOwners",
            value: exports.CapabilityOwners.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CapabilityOwners.decode(message.value);
    },
    toProto(message) {
        return exports.CapabilityOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
            value: exports.CapabilityOwners.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CapabilityOwners.typeUrl, exports.CapabilityOwners);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CapabilityOwners.aminoType, exports.CapabilityOwners.typeUrl);
