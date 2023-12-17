"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuthorityResponse = exports.QueryAuthorityRequest = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = void 0;
const upgrade_1 = require("./upgrade");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryCurrentPlanRequest() {
    return {};
}
exports.QueryCurrentPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
    aminoType: "cosmos-sdk/QueryCurrentPlanRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryCurrentPlanRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryCurrentPlanRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryCurrentPlanRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanRequest",
            value: exports.QueryCurrentPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentPlanRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
            value: exports.QueryCurrentPlanRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCurrentPlanRequest.typeUrl, exports.QueryCurrentPlanRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCurrentPlanRequest.aminoType, exports.QueryCurrentPlanRequest.typeUrl);
function createBaseQueryCurrentPlanResponse() {
    return {
        plan: undefined
    };
}
exports.QueryCurrentPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
    aminoType: "cosmos-sdk/QueryCurrentPlanResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryCurrentPlanResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryCurrentPlanResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryCurrentPlanResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
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
            plan: (0, helpers_1.isSet)(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            plan: object.plan ? upgrade_1.Plan.fromSDK(object.plan) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toSDK(message.plan) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentPlanResponse();
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = upgrade_1.Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanResponse",
            value: exports.QueryCurrentPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentPlanResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
            value: exports.QueryCurrentPlanResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCurrentPlanResponse.typeUrl, exports.QueryCurrentPlanResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCurrentPlanResponse.aminoType, exports.QueryCurrentPlanResponse.typeUrl);
function createBaseQueryAppliedPlanRequest() {
    return {
        name: ""
    };
}
exports.QueryAppliedPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
    aminoType: "cosmos-sdk/QueryAppliedPlanRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAppliedPlanRequest.typeUrl || typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAppliedPlanRequest.typeUrl || typeof o.name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAppliedPlanRequest.typeUrl || typeof o.name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanRequest();
        message.name = object.name ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanRequest();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppliedPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanRequest",
            value: exports.QueryAppliedPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppliedPlanRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppliedPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
            value: exports.QueryAppliedPlanRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAppliedPlanRequest.typeUrl, exports.QueryAppliedPlanRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAppliedPlanRequest.aminoType, exports.QueryAppliedPlanRequest.typeUrl);
function createBaseQueryAppliedPlanResponse() {
    return {
        height: BigInt(0)
    };
}
exports.QueryAppliedPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
    aminoType: "cosmos-sdk/QueryAppliedPlanResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAppliedPlanResponse.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAppliedPlanResponse.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAppliedPlanResponse.typeUrl || typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppliedPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanResponse",
            value: exports.QueryAppliedPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppliedPlanResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppliedPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
            value: exports.QueryAppliedPlanResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAppliedPlanResponse.typeUrl, exports.QueryAppliedPlanResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAppliedPlanResponse.aminoType, exports.QueryAppliedPlanResponse.typeUrl);
function createBaseQueryUpgradedConsensusStateRequest() {
    return {
        lastHeight: BigInt(0)
    };
}
exports.QueryUpgradedConsensusStateRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl || typeof o.lastHeight === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl || typeof o.last_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl || typeof o.last_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lastHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.lastHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastHeight = reader.int64();
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
            lastHeight: (0, helpers_1.isSet)(object.lastHeight) ? BigInt(object.lastHeight.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastHeight !== undefined && (obj.lastHeight = (message.lastHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            lastHeight: object?.last_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.last_height = message.lastHeight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        if (object.last_height !== undefined && object.last_height !== null) {
            message.lastHeight = BigInt(object.last_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_height = message.lastHeight ? message.lastHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedConsensusStateRequest.typeUrl, exports.QueryUpgradedConsensusStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedConsensusStateRequest.aminoType, exports.QueryUpgradedConsensusStateRequest.typeUrl);
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: new Uint8Array()
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl || o.upgradedConsensusState instanceof Uint8Array || typeof o.upgradedConsensusState === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl || o.upgraded_consensus_state instanceof Uint8Array || typeof o.upgraded_consensus_state === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl || o.upgraded_consensus_state instanceof Uint8Array || typeof o.upgraded_consensus_state === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradedConsensusState.length !== 0) {
            writer.uint32(18).bytes(message.upgradedConsensusState);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgradedConsensusState = reader.bytes();
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
            upgradedConsensusState: (0, helpers_1.isSet)(object.upgradedConsensusState) ? (0, helpers_1.bytesFromBase64)(object.upgradedConsensusState) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = (0, helpers_1.base64FromBytes)(message.upgradedConsensusState !== undefined ? message.upgradedConsensusState : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            upgradedConsensusState: object?.upgraded_consensus_state
        };
    },
    toSDK(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
            message.upgradedConsensusState = (0, helpers_1.bytesFromBase64)(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState ? (0, helpers_1.base64FromBytes)(message.upgradedConsensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedConsensusStateResponse.typeUrl, exports.QueryUpgradedConsensusStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedConsensusStateResponse.aminoType, exports.QueryUpgradedConsensusStateResponse.typeUrl);
function createBaseQueryModuleVersionsRequest() {
    return {
        moduleName: ""
    };
}
exports.QueryModuleVersionsRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
    aminoType: "cosmos-sdk/QueryModuleVersionsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryModuleVersionsRequest.typeUrl || typeof o.moduleName === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryModuleVersionsRequest.typeUrl || typeof o.module_name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryModuleVersionsRequest.typeUrl || typeof o.module_name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
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
            moduleName: (0, helpers_1.isSet)(object.moduleName) ? String(object.moduleName) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.moduleName !== undefined && (obj.moduleName = message.moduleName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsRequest();
        message.moduleName = object.moduleName ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            moduleName: object?.module_name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.module_name = message.moduleName;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsRequest();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.moduleName = object.module_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name = message.moduleName;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleVersionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsRequest",
            value: exports.QueryModuleVersionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleVersionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleVersionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
            value: exports.QueryModuleVersionsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryModuleVersionsRequest.typeUrl, exports.QueryModuleVersionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryModuleVersionsRequest.aminoType, exports.QueryModuleVersionsRequest.typeUrl);
function createBaseQueryModuleVersionsResponse() {
    return {
        moduleVersions: []
    };
}
exports.QueryModuleVersionsResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
    aminoType: "cosmos-sdk/QueryModuleVersionsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryModuleVersionsResponse.typeUrl || Array.isArray(o.moduleVersions) && (!o.moduleVersions.length || upgrade_1.ModuleVersion.is(o.moduleVersions[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryModuleVersionsResponse.typeUrl || Array.isArray(o.module_versions) && (!o.module_versions.length || upgrade_1.ModuleVersion.isSDK(o.module_versions[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryModuleVersionsResponse.typeUrl || Array.isArray(o.module_versions) && (!o.module_versions.length || upgrade_1.ModuleVersion.isAmino(o.module_versions[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.moduleVersions) {
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleVersions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
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
            moduleVersions: Array.isArray(object?.moduleVersions) ? object.moduleVersions.map((e) => upgrade_1.ModuleVersion.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleVersions) {
            obj.moduleVersions = message.moduleVersions.map(e => e ? upgrade_1.ModuleVersion.toJSON(e) : undefined);
        }
        else {
            obj.moduleVersions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.moduleVersions?.map(e => upgrade_1.ModuleVersion.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            moduleVersions: Array.isArray(object?.module_versions) ? object.module_versions.map((e) => upgrade_1.ModuleVersion.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.moduleVersions) {
            obj.module_versions = message.moduleVersions.map(e => e ? upgrade_1.ModuleVersion.toSDK(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.module_versions?.map(e => upgrade_1.ModuleVersion.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleVersions) {
            obj.module_versions = message.moduleVersions.map(e => e ? upgrade_1.ModuleVersion.toAmino(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleVersionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsResponse",
            value: exports.QueryModuleVersionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleVersionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleVersionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
            value: exports.QueryModuleVersionsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryModuleVersionsResponse.typeUrl, exports.QueryModuleVersionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryModuleVersionsResponse.aminoType, exports.QueryModuleVersionsResponse.typeUrl);
function createBaseQueryAuthorityRequest() {
    return {};
}
exports.QueryAuthorityRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
    aminoType: "cosmos-sdk/QueryAuthorityRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryAuthorityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryAuthorityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryAuthorityRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryAuthorityRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseQueryAuthorityRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAuthorityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAuthorityRequest",
            value: exports.QueryAuthorityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAuthorityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuthorityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
            value: exports.QueryAuthorityRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAuthorityRequest.typeUrl, exports.QueryAuthorityRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAuthorityRequest.aminoType, exports.QueryAuthorityRequest.typeUrl);
function createBaseQueryAuthorityResponse() {
    return {
        address: ""
    };
}
exports.QueryAuthorityResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
    aminoType: "cosmos-sdk/QueryAuthorityResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAuthorityResponse.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAuthorityResponse.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAuthorityResponse.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuthorityResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAuthorityResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAuthorityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAuthorityResponse",
            value: exports.QueryAuthorityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAuthorityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuthorityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
            value: exports.QueryAuthorityResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAuthorityResponse.typeUrl, exports.QueryAuthorityResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAuthorityResponse.aminoType, exports.QueryAuthorityResponse.typeUrl);
