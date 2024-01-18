"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record_Offline = exports.Record_Multi = exports.Record_Ledger = exports.Record_Local = exports.Record = void 0;
const any_1 = require("../../../../google/protobuf/any");
const hd_1 = require("../../hd/v1/hd");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseRecord() {
    return {
        name: "",
        pubKey: undefined,
        local: undefined,
        ledger: undefined,
        multi: undefined,
        offline: undefined
    };
}
exports.Record = {
    typeUrl: "/cosmos.crypto.keyring.v1.Record",
    aminoType: "cosmos-sdk/Record",
    is(o) {
        return o && (o.$typeUrl === exports.Record.typeUrl || typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Record.typeUrl || typeof o.name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Record.typeUrl || typeof o.name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            exports.Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            exports.Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            exports.Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.local = exports.Record_Local.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ledger = exports.Record_Ledger.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multi = exports.Record_Multi.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.offline = exports.Record_Offline.decode(reader, reader.uint32());
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
            pubKey: (0, helpers_1.isSet)(object.pubKey) ? any_1.Any.fromJSON(object.pubKey) : undefined,
            local: (0, helpers_1.isSet)(object.local) ? exports.Record_Local.fromJSON(object.local) : undefined,
            ledger: (0, helpers_1.isSet)(object.ledger) ? exports.Record_Ledger.fromJSON(object.ledger) : undefined,
            multi: (0, helpers_1.isSet)(object.multi) ? exports.Record_Multi.fromJSON(object.multi) : undefined,
            offline: (0, helpers_1.isSet)(object.offline) ? exports.Record_Offline.fromJSON(object.offline) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? any_1.Any.toJSON(message.pubKey) : undefined);
        message.local !== undefined && (obj.local = message.local ? exports.Record_Local.toJSON(message.local) : undefined);
        message.ledger !== undefined && (obj.ledger = message.ledger ? exports.Record_Ledger.toJSON(message.ledger) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.Record_Multi.toJSON(message.multi) : undefined);
        message.offline !== undefined && (obj.offline = message.offline ? exports.Record_Offline.toJSON(message.offline) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.name = object.name ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? any_1.Any.fromPartial(object.pubKey) : undefined;
        message.local = object.local !== undefined && object.local !== null ? exports.Record_Local.fromPartial(object.local) : undefined;
        message.ledger = object.ledger !== undefined && object.ledger !== null ? exports.Record_Ledger.fromPartial(object.ledger) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.Record_Multi.fromPartial(object.multi) : undefined;
        message.offline = object.offline !== undefined && object.offline !== null ? exports.Record_Offline.fromPartial(object.offline) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            pubKey: object.pub_key ? any_1.Any.fromSDK(object.pub_key) : undefined,
            local: object.local ? exports.Record_Local.fromSDK(object.local) : undefined,
            ledger: object.ledger ? exports.Record_Ledger.fromSDK(object.ledger) : undefined,
            multi: object.multi ? exports.Record_Multi.fromSDK(object.multi) : undefined,
            offline: object.offline ? exports.Record_Offline.fromSDK(object.offline) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        message.pubKey !== undefined && (obj.pub_key = message.pubKey ? any_1.Any.toSDK(message.pubKey) : undefined);
        message.local !== undefined && (obj.local = message.local ? exports.Record_Local.toSDK(message.local) : undefined);
        message.ledger !== undefined && (obj.ledger = message.ledger ? exports.Record_Ledger.toSDK(message.ledger) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.Record_Multi.toSDK(message.multi) : undefined);
        message.offline !== undefined && (obj.offline = message.offline ? exports.Record_Offline.toSDK(message.offline) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRecord();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = any_1.Any.fromAmino(object.pub_key);
        }
        if (object.local !== undefined && object.local !== null) {
            message.local = exports.Record_Local.fromAmino(object.local);
        }
        if (object.ledger !== undefined && object.ledger !== null) {
            message.ledger = exports.Record_Ledger.fromAmino(object.ledger);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = exports.Record_Multi.fromAmino(object.multi);
        }
        if (object.offline !== undefined && object.offline !== null) {
            message.offline = exports.Record_Offline.fromAmino(object.offline);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.pub_key = message.pubKey ? any_1.Any.toAmino(message.pubKey) : undefined;
        obj.local = message.local ? exports.Record_Local.toAmino(message.local) : undefined;
        obj.ledger = message.ledger ? exports.Record_Ledger.toAmino(message.ledger) : undefined;
        obj.multi = message.multi ? exports.Record_Multi.toAmino(message.multi) : undefined;
        obj.offline = message.offline ? exports.Record_Offline.toAmino(message.offline) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Record",
            value: exports.Record.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record.decode(message.value);
    },
    toProto(message) {
        return exports.Record.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Record",
            value: exports.Record.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Record.typeUrl, exports.Record);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Record.aminoType, exports.Record.typeUrl);
function createBaseRecord_Local() {
    return {
        privKey: undefined,
        privKeyType: ""
    };
}
exports.Record_Local = {
    typeUrl: "/cosmos.crypto.keyring.v1.Local",
    aminoType: "cosmos-sdk/Local",
    is(o) {
        return o && (o.$typeUrl === exports.Record_Local.typeUrl || typeof o.privKeyType === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Record_Local.typeUrl || typeof o.priv_key_type === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Record_Local.typeUrl || typeof o.priv_key_type === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.privKey !== undefined) {
            any_1.Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.privKeyType !== "") {
            writer.uint32(18).string(message.privKeyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Local();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.privKeyType = reader.string();
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
            privKey: (0, helpers_1.isSet)(object.privKey) ? any_1.Any.fromJSON(object.privKey) : undefined,
            privKeyType: (0, helpers_1.isSet)(object.privKeyType) ? String(object.privKeyType) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.privKey !== undefined && (obj.privKey = message.privKey ? any_1.Any.toJSON(message.privKey) : undefined);
        message.privKeyType !== undefined && (obj.privKeyType = message.privKeyType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecord_Local();
        message.privKey = object.privKey !== undefined && object.privKey !== null ? any_1.Any.fromPartial(object.privKey) : undefined;
        message.privKeyType = object.privKeyType ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            privKey: object.priv_key ? any_1.Any.fromSDK(object.priv_key) : undefined,
            privKeyType: object?.priv_key_type
        };
    },
    toSDK(message) {
        const obj = {};
        message.privKey !== undefined && (obj.priv_key = message.privKey ? any_1.Any.toSDK(message.privKey) : undefined);
        obj.priv_key_type = message.privKeyType;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRecord_Local();
        if (object.priv_key !== undefined && object.priv_key !== null) {
            message.privKey = any_1.Any.fromAmino(object.priv_key);
        }
        if (object.priv_key_type !== undefined && object.priv_key_type !== null) {
            message.privKeyType = object.priv_key_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.priv_key = message.privKey ? any_1.Any.toAmino(message.privKey) : undefined;
        obj.priv_key_type = message.privKeyType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Local.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Local",
            value: exports.Record_Local.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Local.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Local.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Local",
            value: exports.Record_Local.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Record_Local.typeUrl, exports.Record_Local);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Record_Local.aminoType, exports.Record_Local.typeUrl);
function createBaseRecord_Ledger() {
    return {
        path: undefined
    };
}
exports.Record_Ledger = {
    typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
    aminoType: "cosmos-sdk/Ledger",
    is(o) {
        return o && o.$typeUrl === exports.Record_Ledger.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Record_Ledger.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Record_Ledger.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path !== undefined) {
            hd_1.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = hd_1.BIP44Params.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? hd_1.BIP44Params.fromJSON(object.path) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path ? hd_1.BIP44Params.toJSON(message.path) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecord_Ledger();
        message.path = object.path !== undefined && object.path !== null ? hd_1.BIP44Params.fromPartial(object.path) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            path: object.path ? hd_1.BIP44Params.fromSDK(object.path) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path ? hd_1.BIP44Params.toSDK(message.path) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRecord_Ledger();
        if (object.path !== undefined && object.path !== null) {
            message.path = hd_1.BIP44Params.fromAmino(object.path);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? hd_1.BIP44Params.toAmino(message.path) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Ledger.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Ledger",
            value: exports.Record_Ledger.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Ledger.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Ledger.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
            value: exports.Record_Ledger.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Record_Ledger.typeUrl, exports.Record_Ledger);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Record_Ledger.aminoType, exports.Record_Ledger.typeUrl);
function createBaseRecord_Multi() {
    return {};
}
exports.Record_Multi = {
    typeUrl: "/cosmos.crypto.keyring.v1.Multi",
    aminoType: "cosmos-sdk/Multi",
    is(o) {
        return o && o.$typeUrl === exports.Record_Multi.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Record_Multi.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Record_Multi.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Multi();
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
        const message = createBaseRecord_Multi();
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
        const message = createBaseRecord_Multi();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: exports.Record_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Multi.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Multi",
            value: exports.Record_Multi.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Record_Multi.typeUrl, exports.Record_Multi);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Record_Multi.aminoType, exports.Record_Multi.typeUrl);
function createBaseRecord_Offline() {
    return {};
}
exports.Record_Offline = {
    typeUrl: "/cosmos.crypto.keyring.v1.Offline",
    aminoType: "cosmos-sdk/Offline",
    is(o) {
        return o && o.$typeUrl === exports.Record_Offline.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Record_Offline.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Record_Offline.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Offline();
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
        const message = createBaseRecord_Offline();
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
        const message = createBaseRecord_Offline();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Offline.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Offline",
            value: exports.Record_Offline.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Offline.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Offline.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Offline",
            value: exports.Record_Offline.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Record_Offline.typeUrl, exports.Record_Offline);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Record_Offline.aminoType, exports.Record_Offline.typeUrl);
