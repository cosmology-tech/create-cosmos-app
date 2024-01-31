"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateFromInfo = exports.PackageReference = exports.ModuleDescriptor = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseModuleDescriptor() {
    return {
        goImport: "",
        usePackage: [],
        canMigrateFrom: []
    };
}
exports.ModuleDescriptor = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
    aminoType: "cosmos-sdk/ModuleDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.ModuleDescriptor.typeUrl || typeof o.goImport === "string" && Array.isArray(o.usePackage) && (!o.usePackage.length || exports.PackageReference.is(o.usePackage[0])) && Array.isArray(o.canMigrateFrom) && (!o.canMigrateFrom.length || exports.MigrateFromInfo.is(o.canMigrateFrom[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleDescriptor.typeUrl || typeof o.go_import === "string" && Array.isArray(o.use_package) && (!o.use_package.length || exports.PackageReference.isSDK(o.use_package[0])) && Array.isArray(o.can_migrate_from) && (!o.can_migrate_from.length || exports.MigrateFromInfo.isSDK(o.can_migrate_from[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleDescriptor.typeUrl || typeof o.go_import === "string" && Array.isArray(o.use_package) && (!o.use_package.length || exports.PackageReference.isAmino(o.use_package[0])) && Array.isArray(o.can_migrate_from) && (!o.can_migrate_from.length || exports.MigrateFromInfo.isAmino(o.can_migrate_from[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.goImport !== "") {
            writer.uint32(10).string(message.goImport);
        }
        for (const v of message.usePackage) {
            exports.PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.canMigrateFrom) {
            exports.MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(exports.PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(exports.MigrateFromInfo.decode(reader, reader.uint32()));
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
            goImport: (0, helpers_1.isSet)(object.goImport) ? String(object.goImport) : "",
            usePackage: Array.isArray(object?.usePackage) ? object.usePackage.map((e) => exports.PackageReference.fromJSON(e)) : [],
            canMigrateFrom: Array.isArray(object?.canMigrateFrom) ? object.canMigrateFrom.map((e) => exports.MigrateFromInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.goImport !== undefined && (obj.goImport = message.goImport);
        if (message.usePackage) {
            obj.usePackage = message.usePackage.map(e => e ? exports.PackageReference.toJSON(e) : undefined);
        }
        else {
            obj.usePackage = [];
        }
        if (message.canMigrateFrom) {
            obj.canMigrateFrom = message.canMigrateFrom.map(e => e ? exports.MigrateFromInfo.toJSON(e) : undefined);
        }
        else {
            obj.canMigrateFrom = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleDescriptor();
        message.goImport = object.goImport ?? "";
        message.usePackage = object.usePackage?.map(e => exports.PackageReference.fromPartial(e)) || [];
        message.canMigrateFrom = object.canMigrateFrom?.map(e => exports.MigrateFromInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            goImport: object?.go_import,
            usePackage: Array.isArray(object?.use_package) ? object.use_package.map((e) => exports.PackageReference.fromSDK(e)) : [],
            canMigrateFrom: Array.isArray(object?.can_migrate_from) ? object.can_migrate_from.map((e) => exports.MigrateFromInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.go_import = message.goImport;
        if (message.usePackage) {
            obj.use_package = message.usePackage.map(e => e ? exports.PackageReference.toSDK(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.canMigrateFrom) {
            obj.can_migrate_from = message.canMigrateFrom.map(e => e ? exports.MigrateFromInfo.toSDK(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModuleDescriptor();
        if (object.go_import !== undefined && object.go_import !== null) {
            message.goImport = object.go_import;
        }
        message.usePackage = object.use_package?.map(e => exports.PackageReference.fromAmino(e)) || [];
        message.canMigrateFrom = object.can_migrate_from?.map(e => exports.MigrateFromInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.go_import = message.goImport;
        if (message.usePackage) {
            obj.use_package = message.usePackage.map(e => e ? exports.PackageReference.toAmino(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.canMigrateFrom) {
            obj.can_migrate_from = message.canMigrateFrom.map(e => e ? exports.MigrateFromInfo.toAmino(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleDescriptor",
            value: exports.ModuleDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
            value: exports.ModuleDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleDescriptor.typeUrl, exports.ModuleDescriptor);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleDescriptor.aminoType, exports.ModuleDescriptor.typeUrl);
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
exports.PackageReference = {
    typeUrl: "/cosmos.app.v1alpha1.PackageReference",
    aminoType: "cosmos-sdk/PackageReference",
    is(o) {
        return o && (o.$typeUrl === exports.PackageReference.typeUrl || typeof o.name === "string" && typeof o.revision === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PackageReference.typeUrl || typeof o.name === "string" && typeof o.revision === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PackageReference.typeUrl || typeof o.name === "string" && typeof o.revision === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePackageReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            revision: (0, helpers_1.isSet)(object.revision) ? Number(object.revision) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePackageReference();
        message.name = object.name ?? "";
        message.revision = object.revision ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            revision: object?.revision
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.revision = message.revision;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePackageReference();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.revision !== undefined && object.revision !== null) {
            message.revision = object.revision;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.revision = message.revision;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PackageReference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PackageReference",
            value: exports.PackageReference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PackageReference.decode(message.value);
    },
    toProto(message) {
        return exports.PackageReference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.PackageReference",
            value: exports.PackageReference.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PackageReference.typeUrl, exports.PackageReference);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PackageReference.aminoType, exports.PackageReference.typeUrl);
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
exports.MigrateFromInfo = {
    typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
    aminoType: "cosmos-sdk/MigrateFromInfo",
    is(o) {
        return o && (o.$typeUrl === exports.MigrateFromInfo.typeUrl || typeof o.module === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MigrateFromInfo.typeUrl || typeof o.module === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MigrateFromInfo.typeUrl || typeof o.module === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
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
            module: (0, helpers_1.isSet)(object.module) ? String(object.module) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMigrateFromInfo();
        message.module = object.module ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            module: object?.module
        };
    },
    toSDK(message) {
        const obj = {};
        obj.module = message.module;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMigrateFromInfo();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MigrateFromInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MigrateFromInfo",
            value: exports.MigrateFromInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MigrateFromInfo.decode(message.value);
    },
    toProto(message) {
        return exports.MigrateFromInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
            value: exports.MigrateFromInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MigrateFromInfo.typeUrl, exports.MigrateFromInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MigrateFromInfo.aminoType, exports.MigrateFromInfo.typeUrl);
