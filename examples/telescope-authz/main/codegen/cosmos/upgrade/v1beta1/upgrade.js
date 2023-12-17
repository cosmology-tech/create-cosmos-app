"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleVersion = exports.CancelSoftwareUpgradeProposal = exports.SoftwareUpgradeProposal = exports.Plan = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBasePlan() {
    return {
        name: "",
        time: new Date(),
        height: BigInt(0),
        info: "",
        upgradedClientState: undefined
    };
}
exports.Plan = {
    typeUrl: "/cosmos.upgrade.v1beta1.Plan",
    aminoType: "cosmos-sdk/Plan",
    is(o) {
        return o && (o.$typeUrl === exports.Plan.typeUrl || typeof o.name === "string" && timestamp_1.Timestamp.is(o.time) && typeof o.height === "bigint" && typeof o.info === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Plan.typeUrl || typeof o.name === "string" && timestamp_1.Timestamp.isSDK(o.time) && typeof o.height === "bigint" && typeof o.info === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Plan.typeUrl || typeof o.name === "string" && timestamp_1.Timestamp.isAmino(o.time) && typeof o.height === "bigint" && typeof o.info === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.upgradedClientState !== undefined) {
            any_1.Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlan();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.upgradedClientState = any_1.Any.decode(reader, reader.uint32());
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
            time: (0, helpers_1.isSet)(object.time) ? new Date(object.time) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            upgradedClientState: (0, helpers_1.isSet)(object.upgradedClientState) ? any_1.Any.fromJSON(object.upgradedClientState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.info !== undefined && (obj.info = message.info);
        message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? any_1.Any.toJSON(message.upgradedClientState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePlan();
        message.name = object.name ?? "";
        message.time = object.time ?? undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.info = object.info ?? "";
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? any_1.Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            time: object.time ?? undefined,
            height: object?.height,
            info: object?.info,
            upgradedClientState: object.upgraded_client_state ? any_1.Any.fromSDK(object.upgraded_client_state) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        message.time !== undefined && (obj.time = message.time ?? undefined);
        obj.height = message.height;
        obj.info = message.info;
        message.upgradedClientState !== undefined && (obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toSDK(message.upgradedClientState) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBasePlan();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgradedClientState = any_1.Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.info = message.info;
        obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Plan.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Plan",
            value: exports.Plan.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Plan.decode(message.value);
    },
    toProto(message) {
        return exports.Plan.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.Plan",
            value: exports.Plan.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Plan.typeUrl, exports.Plan);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Plan.aminoType, exports.Plan.typeUrl);
function createBaseSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        title: "",
        description: "",
        plan: exports.Plan.fromPartial({})
    };
}
exports.SoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
    aminoType: "cosmos-sdk/SoftwareUpgradeProposal",
    is(o) {
        return o && (o.$typeUrl === exports.SoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && exports.Plan.is(o.plan));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && exports.Plan.isSDK(o.plan));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && exports.Plan.isAmino(o.plan));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSoftwareUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.plan = exports.Plan.decode(reader, reader.uint32());
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            plan: (0, helpers_1.isSet)(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.plan !== undefined && (obj.plan = message.plan ? exports.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? exports.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            plan: object.plan ? exports.Plan.fromSDK(object.plan) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        message.plan !== undefined && (obj.plan = message.plan ? exports.Plan.toSDK(message.plan) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSoftwareUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = exports.Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? exports.Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SoftwareUpgradeProposal",
            value: exports.SoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
            value: exports.SoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SoftwareUpgradeProposal.typeUrl, exports.SoftwareUpgradeProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SoftwareUpgradeProposal.aminoType, exports.SoftwareUpgradeProposal.typeUrl);
function createBaseCancelSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        title: "",
        description: ""
    };
}
exports.CancelSoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
    aminoType: "cosmos-sdk/CancelSoftwareUpgradeProposal",
    is(o) {
        return o && (o.$typeUrl === exports.CancelSoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CancelSoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CancelSoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelSoftwareUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CancelSoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
            value: exports.CancelSoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CancelSoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CancelSoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
            value: exports.CancelSoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CancelSoftwareUpgradeProposal.typeUrl, exports.CancelSoftwareUpgradeProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CancelSoftwareUpgradeProposal.aminoType, exports.CancelSoftwareUpgradeProposal.typeUrl);
function createBaseModuleVersion() {
    return {
        name: "",
        version: BigInt(0)
    };
}
exports.ModuleVersion = {
    typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
    aminoType: "cosmos-sdk/ModuleVersion",
    is(o) {
        return o && (o.$typeUrl === exports.ModuleVersion.typeUrl || typeof o.name === "string" && typeof o.version === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleVersion.typeUrl || typeof o.name === "string" && typeof o.version === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleVersion.typeUrl || typeof o.name === "string" && typeof o.version === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(16).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.uint64();
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
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleVersion();
        message.name = object.name ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            version: object?.version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.version = message.version;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseModuleVersion();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.version = message.version ? message.version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleVersion.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleVersion",
            value: exports.ModuleVersion.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleVersion.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
            value: exports.ModuleVersion.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleVersion.typeUrl, exports.ModuleVersion);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleVersion.aminoType, exports.ModuleVersion.typeUrl);
