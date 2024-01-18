"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamChange = exports.ParameterChangeProposal = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParameterChangeProposal() {
    return {
        $typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        title: "",
        description: "",
        changes: []
    };
}
exports.ParameterChangeProposal = {
    typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
    aminoType: "cosmos-sdk/ParameterChangeProposal",
    is(o) {
        return o && (o.$typeUrl === exports.ParameterChangeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.changes) && (!o.changes.length || exports.ParamChange.is(o.changes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ParameterChangeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.changes) && (!o.changes.length || exports.ParamChange.isSDK(o.changes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ParameterChangeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.changes) && (!o.changes.length || exports.ParamChange.isAmino(o.changes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.changes) {
            exports.ParamChange.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParameterChangeProposal();
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
                    message.changes.push(exports.ParamChange.decode(reader, reader.uint32()));
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
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.ParamChange.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? exports.ParamChange.toJSON(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParameterChangeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.changes = object.changes?.map(e => exports.ParamChange.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.ParamChange.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? exports.ParamChange.toSDK(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParameterChangeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.changes = object.changes?.map(e => exports.ParamChange.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? exports.ParamChange.toAmino(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParameterChangeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ParameterChangeProposal",
            value: exports.ParameterChangeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParameterChangeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ParameterChangeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
            value: exports.ParameterChangeProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ParameterChangeProposal.typeUrl, exports.ParameterChangeProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParameterChangeProposal.aminoType, exports.ParameterChangeProposal.typeUrl);
function createBaseParamChange() {
    return {
        subspace: "",
        key: "",
        value: ""
    };
}
exports.ParamChange = {
    typeUrl: "/cosmos.params.v1beta1.ParamChange",
    aminoType: "cosmos-sdk/ParamChange",
    is(o) {
        return o && (o.$typeUrl === exports.ParamChange.typeUrl || typeof o.subspace === "string" && typeof o.key === "string" && typeof o.value === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ParamChange.typeUrl || typeof o.subspace === "string" && typeof o.key === "string" && typeof o.value === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ParamChange.typeUrl || typeof o.subspace === "string" && typeof o.key === "string" && typeof o.value === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamChange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
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
            subspace: (0, helpers_1.isSet)(object.subspace) ? String(object.subspace) : "",
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamChange();
        message.subspace = object.subspace ?? "";
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            subspace: object?.subspace,
            key: object?.key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.subspace = message.subspace;
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParamChange();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace;
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamChange.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ParamChange",
            value: exports.ParamChange.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParamChange.decode(message.value);
    },
    toProto(message) {
        return exports.ParamChange.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.ParamChange",
            value: exports.ParamChange.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ParamChange.typeUrl, exports.ParamChange);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamChange.aminoType, exports.ParamChange.typeUrl);
