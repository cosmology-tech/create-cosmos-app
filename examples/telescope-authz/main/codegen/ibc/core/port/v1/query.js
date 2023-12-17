"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAppVersionResponse = exports.QueryAppVersionRequest = void 0;
const channel_1 = require("../../channel/v1/channel");
const helpers_1 = require("../../../../helpers");
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
function createBaseQueryAppVersionRequest() {
    return {
        portId: "",
        connectionId: "",
        ordering: 0,
        counterparty: undefined,
        proposedVersion: ""
    };
}
exports.QueryAppVersionRequest = {
    typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest",
    aminoType: "cosmos-sdk/QueryAppVersionRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAppVersionRequest.typeUrl || typeof o.portId === "string" && typeof o.connectionId === "string" && (0, helpers_1.isSet)(o.ordering) && typeof o.proposedVersion === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAppVersionRequest.typeUrl || typeof o.port_id === "string" && typeof o.connection_id === "string" && (0, helpers_1.isSet)(o.ordering) && typeof o.proposed_version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAppVersionRequest.typeUrl || typeof o.port_id === "string" && typeof o.connection_id === "string" && (0, helpers_1.isSet)(o.ordering) && typeof o.proposed_version === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.ordering !== 0) {
            writer.uint32(24).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            channel_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.proposedVersion !== "") {
            writer.uint32(42).string(message.proposedVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppVersionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.ordering = reader.int32();
                    break;
                case 4:
                    message.counterparty = channel_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proposedVersion = reader.string();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : "",
            ordering: (0, helpers_1.isSet)(object.ordering) ? (0, channel_1.orderFromJSON)(object.ordering) : -1,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? channel_1.Counterparty.fromJSON(object.counterparty) : undefined,
            proposedVersion: (0, helpers_1.isSet)(object.proposedVersion) ? String(object.proposedVersion) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.ordering !== undefined && (obj.ordering = (0, channel_1.orderToJSON)(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? channel_1.Counterparty.toJSON(message.counterparty) : undefined);
        message.proposedVersion !== undefined && (obj.proposedVersion = message.proposedVersion);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppVersionRequest();
        message.portId = object.portId ?? "";
        message.connectionId = object.connectionId ?? "";
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? channel_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.proposedVersion = object.proposedVersion ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            connectionId: object?.connection_id,
            ordering: (0, helpers_1.isSet)(object.ordering) ? (0, channel_1.orderFromJSON)(object.ordering) : -1,
            counterparty: object.counterparty ? channel_1.Counterparty.fromSDK(object.counterparty) : undefined,
            proposedVersion: object?.proposed_version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.connection_id = message.connectionId;
        message.ordering !== undefined && (obj.ordering = (0, channel_1.orderToJSON)(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? channel_1.Counterparty.toSDK(message.counterparty) : undefined);
        obj.proposed_version = message.proposedVersion;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAppVersionRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = (0, channel_1.orderFromJSON)(object.ordering);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = channel_1.Counterparty.fromAmino(object.counterparty);
        }
        if (object.proposed_version !== undefined && object.proposed_version !== null) {
            message.proposedVersion = object.proposed_version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.connection_id = message.connectionId;
        obj.ordering = (0, channel_1.orderToJSON)(message.ordering);
        obj.counterparty = message.counterparty ? channel_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.proposed_version = message.proposedVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppVersionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppVersionRequest",
            value: exports.QueryAppVersionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppVersionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppVersionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest",
            value: exports.QueryAppVersionRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAppVersionRequest.typeUrl, exports.QueryAppVersionRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAppVersionRequest.aminoType, exports.QueryAppVersionRequest.typeUrl);
function createBaseQueryAppVersionResponse() {
    return {
        portId: "",
        version: ""
    };
}
exports.QueryAppVersionResponse = {
    typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse",
    aminoType: "cosmos-sdk/QueryAppVersionResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAppVersionResponse.typeUrl || typeof o.portId === "string" && typeof o.version === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAppVersionResponse.typeUrl || typeof o.port_id === "string" && typeof o.version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAppVersionResponse.typeUrl || typeof o.port_id === "string" && typeof o.version === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppVersionResponse();
        message.portId = object.portId ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            version: object?.version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.version = message.version;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryAppVersionResponse();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppVersionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppVersionResponse",
            value: exports.QueryAppVersionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppVersionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppVersionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse",
            value: exports.QueryAppVersionResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAppVersionResponse.typeUrl, exports.QueryAppVersionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAppVersionResponse.aminoType, exports.QueryAppVersionResponse.typeUrl);
