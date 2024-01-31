"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListImplementationsResponse = exports.ListImplementationsRequest = exports.ListAllInterfacesResponse = exports.ListAllInterfacesRequest = void 0;
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseListAllInterfacesRequest() {
    return {};
}
exports.ListAllInterfacesRequest = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
    aminoType: "cosmos-sdk/ListAllInterfacesRequest",
    is(o) {
        return o && o.$typeUrl === exports.ListAllInterfacesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ListAllInterfacesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ListAllInterfacesRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesRequest();
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
        const message = createBaseListAllInterfacesRequest();
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
        const message = createBaseListAllInterfacesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListAllInterfacesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesRequest",
            value: exports.ListAllInterfacesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListAllInterfacesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ListAllInterfacesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
            value: exports.ListAllInterfacesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ListAllInterfacesRequest.typeUrl, exports.ListAllInterfacesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ListAllInterfacesRequest.aminoType, exports.ListAllInterfacesRequest.typeUrl);
function createBaseListAllInterfacesResponse() {
    return {
        interfaceNames: []
    };
}
exports.ListAllInterfacesResponse = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
    aminoType: "cosmos-sdk/ListAllInterfacesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.ListAllInterfacesResponse.typeUrl || Array.isArray(o.interfaceNames) && (!o.interfaceNames.length || typeof o.interfaceNames[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ListAllInterfacesResponse.typeUrl || Array.isArray(o.interface_names) && (!o.interface_names.length || typeof o.interface_names[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ListAllInterfacesResponse.typeUrl || Array.isArray(o.interface_names) && (!o.interface_names.length || typeof o.interface_names[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.interfaceNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceNames.push(reader.string());
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
            interfaceNames: Array.isArray(object?.interfaceNames) ? object.interfaceNames.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaceNames) {
            obj.interfaceNames = message.interfaceNames.map(e => e);
        }
        else {
            obj.interfaceNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListAllInterfacesResponse();
        message.interfaceNames = object.interfaceNames?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            interfaceNames: Array.isArray(object?.interface_names) ? object.interface_names.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.interfaceNames) {
            obj.interface_names = message.interfaceNames.map(e => e);
        }
        else {
            obj.interface_names = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseListAllInterfacesResponse();
        message.interfaceNames = object.interface_names?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.interfaceNames) {
            obj.interface_names = message.interfaceNames.map(e => e);
        }
        else {
            obj.interface_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListAllInterfacesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesResponse",
            value: exports.ListAllInterfacesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListAllInterfacesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ListAllInterfacesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
            value: exports.ListAllInterfacesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ListAllInterfacesResponse.typeUrl, exports.ListAllInterfacesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ListAllInterfacesResponse.aminoType, exports.ListAllInterfacesResponse.typeUrl);
function createBaseListImplementationsRequest() {
    return {
        interfaceName: ""
    };
}
exports.ListImplementationsRequest = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
    aminoType: "cosmos-sdk/ListImplementationsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.ListImplementationsRequest.typeUrl || typeof o.interfaceName === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ListImplementationsRequest.typeUrl || typeof o.interface_name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ListImplementationsRequest.typeUrl || typeof o.interface_name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.interfaceName !== "") {
            writer.uint32(10).string(message.interfaceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceName = reader.string();
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
            interfaceName: (0, helpers_1.isSet)(object.interfaceName) ? String(object.interfaceName) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListImplementationsRequest();
        message.interfaceName = object.interfaceName ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            interfaceName: object?.interface_name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.interface_name = message.interfaceName;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseListImplementationsRequest();
        if (object.interface_name !== undefined && object.interface_name !== null) {
            message.interfaceName = object.interface_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.interface_name = message.interfaceName;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListImplementationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListImplementationsRequest",
            value: exports.ListImplementationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListImplementationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ListImplementationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
            value: exports.ListImplementationsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ListImplementationsRequest.typeUrl, exports.ListImplementationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ListImplementationsRequest.aminoType, exports.ListImplementationsRequest.typeUrl);
function createBaseListImplementationsResponse() {
    return {
        implementationMessageNames: []
    };
}
exports.ListImplementationsResponse = {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
    aminoType: "cosmos-sdk/ListImplementationsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.ListImplementationsResponse.typeUrl || Array.isArray(o.implementationMessageNames) && (!o.implementationMessageNames.length || typeof o.implementationMessageNames[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ListImplementationsResponse.typeUrl || Array.isArray(o.implementation_message_names) && (!o.implementation_message_names.length || typeof o.implementation_message_names[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ListImplementationsResponse.typeUrl || Array.isArray(o.implementation_message_names) && (!o.implementation_message_names.length || typeof o.implementation_message_names[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.implementationMessageNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.implementationMessageNames.push(reader.string());
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
            implementationMessageNames: Array.isArray(object?.implementationMessageNames) ? object.implementationMessageNames.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.implementationMessageNames) {
            obj.implementationMessageNames = message.implementationMessageNames.map(e => e);
        }
        else {
            obj.implementationMessageNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListImplementationsResponse();
        message.implementationMessageNames = object.implementationMessageNames?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            implementationMessageNames: Array.isArray(object?.implementation_message_names) ? object.implementation_message_names.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.implementationMessageNames) {
            obj.implementation_message_names = message.implementationMessageNames.map(e => e);
        }
        else {
            obj.implementation_message_names = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseListImplementationsResponse();
        message.implementationMessageNames = object.implementation_message_names?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.implementationMessageNames) {
            obj.implementation_message_names = message.implementationMessageNames.map(e => e);
        }
        else {
            obj.implementation_message_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListImplementationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListImplementationsResponse",
            value: exports.ListImplementationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListImplementationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ListImplementationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
            value: exports.ListImplementationsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ListImplementationsResponse.typeUrl, exports.ListImplementationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ListImplementationsResponse.aminoType, exports.ListImplementationsResponse.typeUrl);
