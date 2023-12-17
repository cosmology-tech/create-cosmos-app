"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCancelUpgradeResponse = exports.MsgCancelUpgrade = exports.MsgSoftwareUpgradeResponse = exports.MsgSoftwareUpgrade = void 0;
const upgrade_1 = require("./upgrade");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgSoftwareUpgrade() {
    return {
        authority: "",
        plan: upgrade_1.Plan.fromPartial({})
    };
}
exports.MsgSoftwareUpgrade = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
    aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && upgrade_1.Plan.is(o.plan));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && upgrade_1.Plan.isSDK(o.plan));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && upgrade_1.Plan.isAmino(o.plan));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            plan: (0, helpers_1.isSet)(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSoftwareUpgrade();
        message.authority = object.authority ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authority: object?.authority,
            plan: object.plan ? upgrade_1.Plan.fromSDK(object.plan) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.authority = message.authority;
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toSDK(message.plan) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSoftwareUpgrade();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = upgrade_1.Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSoftwareUpgrade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSoftwareUpgrade",
            value: exports.MsgSoftwareUpgrade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSoftwareUpgrade.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSoftwareUpgrade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
            value: exports.MsgSoftwareUpgrade.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSoftwareUpgrade.typeUrl, exports.MsgSoftwareUpgrade);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSoftwareUpgrade.aminoType, exports.MsgSoftwareUpgrade.typeUrl);
function createBaseMsgSoftwareUpgradeResponse() {
    return {};
}
exports.MsgSoftwareUpgradeResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
    aminoType: "cosmos-sdk/MsgSoftwareUpgradeResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgSoftwareUpgradeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSoftwareUpgradeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSoftwareUpgradeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgradeResponse();
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
        const message = createBaseMsgSoftwareUpgradeResponse();
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
        const message = createBaseMsgSoftwareUpgradeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSoftwareUpgradeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSoftwareUpgradeResponse",
            value: exports.MsgSoftwareUpgradeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSoftwareUpgradeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSoftwareUpgradeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
            value: exports.MsgSoftwareUpgradeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSoftwareUpgradeResponse.typeUrl, exports.MsgSoftwareUpgradeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSoftwareUpgradeResponse.aminoType, exports.MsgSoftwareUpgradeResponse.typeUrl);
function createBaseMsgCancelUpgrade() {
    return {
        authority: ""
    };
}
exports.MsgCancelUpgrade = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
    aminoType: "cosmos-sdk/MsgCancelUpgrade",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelUpgrade();
        message.authority = object.authority ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            authority: object?.authority
        };
    },
    toSDK(message) {
        const obj = {};
        obj.authority = message.authority;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelUpgrade();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelUpgrade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCancelUpgrade",
            value: exports.MsgCancelUpgrade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancelUpgrade.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelUpgrade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
            value: exports.MsgCancelUpgrade.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelUpgrade.typeUrl, exports.MsgCancelUpgrade);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCancelUpgrade.aminoType, exports.MsgCancelUpgrade.typeUrl);
function createBaseMsgCancelUpgradeResponse() {
    return {};
}
exports.MsgCancelUpgradeResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
    aminoType: "cosmos-sdk/MsgCancelUpgradeResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCancelUpgradeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCancelUpgradeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCancelUpgradeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgradeResponse();
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
        const message = createBaseMsgCancelUpgradeResponse();
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
        const message = createBaseMsgCancelUpgradeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelUpgradeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCancelUpgradeResponse",
            value: exports.MsgCancelUpgradeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancelUpgradeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelUpgradeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
            value: exports.MsgCancelUpgradeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelUpgradeResponse.typeUrl, exports.MsgCancelUpgradeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCancelUpgradeResponse.aminoType, exports.MsgCancelUpgradeResponse.typeUrl);
