"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = exports.TableDescriptor = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseTableDescriptor() {
    return {
        primaryKey: undefined,
        index: [],
        id: 0
    };
}
exports.TableDescriptor = {
    typeUrl: "/cosmos.orm.v1.TableDescriptor",
    aminoType: "cosmos-sdk/TableDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.TableDescriptor.typeUrl || Array.isArray(o.index) && (!o.index.length || exports.SecondaryIndexDescriptor.is(o.index[0])) && typeof o.id === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TableDescriptor.typeUrl || Array.isArray(o.index) && (!o.index.length || exports.SecondaryIndexDescriptor.isSDK(o.index[0])) && typeof o.id === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TableDescriptor.typeUrl || Array.isArray(o.index) && (!o.index.length || exports.SecondaryIndexDescriptor.isAmino(o.index[0])) && typeof o.id === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.primaryKey !== undefined) {
            exports.PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.index) {
            exports.SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.primaryKey = exports.PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.index.push(exports.SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.id = reader.uint32();
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
            primaryKey: (0, helpers_1.isSet)(object.primaryKey) ? exports.PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
            index: Array.isArray(object?.index) ? object.index.map((e) => exports.SecondaryIndexDescriptor.fromJSON(e)) : [],
            id: (0, helpers_1.isSet)(object.id) ? Number(object.id) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey ? exports.PrimaryKeyDescriptor.toJSON(message.primaryKey) : undefined);
        if (message.index) {
            obj.index = message.index.map(e => e ? exports.SecondaryIndexDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.index = [];
        }
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTableDescriptor();
        message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? exports.PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
        message.index = object.index?.map(e => exports.SecondaryIndexDescriptor.fromPartial(e)) || [];
        message.id = object.id ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            primaryKey: object.primary_key ? exports.PrimaryKeyDescriptor.fromSDK(object.primary_key) : undefined,
            index: Array.isArray(object?.index) ? object.index.map((e) => exports.SecondaryIndexDescriptor.fromSDK(e)) : [],
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        message.primaryKey !== undefined && (obj.primary_key = message.primaryKey ? exports.PrimaryKeyDescriptor.toSDK(message.primaryKey) : undefined);
        if (message.index) {
            obj.index = message.index.map(e => e ? exports.SecondaryIndexDescriptor.toSDK(e) : undefined);
        }
        else {
            obj.index = [];
        }
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTableDescriptor();
        if (object.primary_key !== undefined && object.primary_key !== null) {
            message.primaryKey = exports.PrimaryKeyDescriptor.fromAmino(object.primary_key);
        }
        message.index = object.index?.map(e => exports.SecondaryIndexDescriptor.fromAmino(e)) || [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.primary_key = message.primaryKey ? exports.PrimaryKeyDescriptor.toAmino(message.primaryKey) : undefined;
        if (message.index) {
            obj.index = message.index.map(e => e ? exports.SecondaryIndexDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.index = [];
        }
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TableDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TableDescriptor",
            value: exports.TableDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TableDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.TableDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.TableDescriptor",
            value: exports.TableDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TableDescriptor.typeUrl, exports.TableDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TableDescriptor.aminoType, exports.TableDescriptor.typeUrl);
function createBasePrimaryKeyDescriptor() {
    return {
        fields: "",
        autoIncrement: false
    };
}
exports.PrimaryKeyDescriptor = {
    typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
    aminoType: "cosmos-sdk/PrimaryKeyDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.PrimaryKeyDescriptor.typeUrl || typeof o.fields === "string" && typeof o.autoIncrement === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PrimaryKeyDescriptor.typeUrl || typeof o.fields === "string" && typeof o.auto_increment === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PrimaryKeyDescriptor.typeUrl || typeof o.fields === "string" && typeof o.auto_increment === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement === true) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.autoIncrement = reader.bool();
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
            fields: (0, helpers_1.isSet)(object.fields) ? String(object.fields) : "",
            autoIncrement: (0, helpers_1.isSet)(object.autoIncrement) ? Boolean(object.autoIncrement) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.autoIncrement !== undefined && (obj.autoIncrement = message.autoIncrement);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrimaryKeyDescriptor();
        message.fields = object.fields ?? "";
        message.autoIncrement = object.autoIncrement ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            fields: object?.fields,
            autoIncrement: object?.auto_increment
        };
    },
    toSDK(message) {
        const obj = {};
        obj.fields = message.fields;
        obj.auto_increment = message.autoIncrement;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePrimaryKeyDescriptor();
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = object.fields;
        }
        if (object.auto_increment !== undefined && object.auto_increment !== null) {
            message.autoIncrement = object.auto_increment;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fields = message.fields;
        obj.auto_increment = message.autoIncrement;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrimaryKeyDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PrimaryKeyDescriptor",
            value: exports.PrimaryKeyDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PrimaryKeyDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.PrimaryKeyDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
            value: exports.PrimaryKeyDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PrimaryKeyDescriptor.typeUrl, exports.PrimaryKeyDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PrimaryKeyDescriptor.aminoType, exports.PrimaryKeyDescriptor.typeUrl);
function createBaseSecondaryIndexDescriptor() {
    return {
        fields: "",
        id: 0,
        unique: false
    };
}
exports.SecondaryIndexDescriptor = {
    typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
    aminoType: "cosmos-sdk/SecondaryIndexDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.SecondaryIndexDescriptor.typeUrl || typeof o.fields === "string" && typeof o.id === "number" && typeof o.unique === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SecondaryIndexDescriptor.typeUrl || typeof o.fields === "string" && typeof o.id === "number" && typeof o.unique === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SecondaryIndexDescriptor.typeUrl || typeof o.fields === "string" && typeof o.id === "number" && typeof o.unique === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.unique = reader.bool();
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
            fields: (0, helpers_1.isSet)(object.fields) ? String(object.fields) : "",
            id: (0, helpers_1.isSet)(object.id) ? Number(object.id) : 0,
            unique: (0, helpers_1.isSet)(object.unique) ? Boolean(object.unique) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.unique !== undefined && (obj.unique = message.unique);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSecondaryIndexDescriptor();
        message.fields = object.fields ?? "";
        message.id = object.id ?? 0;
        message.unique = object.unique ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            fields: object?.fields,
            id: object?.id,
            unique: object?.unique
        };
    },
    toSDK(message) {
        const obj = {};
        obj.fields = message.fields;
        obj.id = message.id;
        obj.unique = message.unique;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSecondaryIndexDescriptor();
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = object.fields;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.unique !== undefined && object.unique !== null) {
            message.unique = object.unique;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fields = message.fields;
        obj.id = message.id;
        obj.unique = message.unique;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SecondaryIndexDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SecondaryIndexDescriptor",
            value: exports.SecondaryIndexDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SecondaryIndexDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.SecondaryIndexDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
            value: exports.SecondaryIndexDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SecondaryIndexDescriptor.typeUrl, exports.SecondaryIndexDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SecondaryIndexDescriptor.aminoType, exports.SecondaryIndexDescriptor.typeUrl);
function createBaseSingletonDescriptor() {
    return {
        id: 0
    };
}
exports.SingletonDescriptor = {
    typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
    aminoType: "cosmos-sdk/SingletonDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.SingletonDescriptor.typeUrl || typeof o.id === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SingletonDescriptor.typeUrl || typeof o.id === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SingletonDescriptor.typeUrl || typeof o.id === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
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
            id: (0, helpers_1.isSet)(object.id) ? Number(object.id) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSingletonDescriptor();
        message.id = object.id ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSingletonDescriptor();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SingletonDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SingletonDescriptor",
            value: exports.SingletonDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SingletonDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.SingletonDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
            value: exports.SingletonDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SingletonDescriptor.typeUrl, exports.SingletonDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SingletonDescriptor.aminoType, exports.SingletonDescriptor.typeUrl);
