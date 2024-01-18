"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTxsResult = exports.TxMsgData = exports.MsgData = exports.SimulationResponse = exports.Result = exports.GasInfo = exports.Attribute = exports.StringEvent = exports.ABCIMessageLog = exports.TxResponse = void 0;
const any_1 = require("../../../../google/protobuf/any");
const types_1 = require("../../../../tendermint/abci/types");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseTxResponse() {
    return {
        height: BigInt(0),
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        rawLog: "",
        logs: [],
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        tx: undefined,
        timestamp: "",
        events: []
    };
}
exports.TxResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
    aminoType: "cosmos-sdk/TxResponse",
    is(o) {
        return o && (o.$typeUrl === exports.TxResponse.typeUrl || typeof o.height === "bigint" && typeof o.txhash === "string" && typeof o.codespace === "string" && typeof o.code === "number" && typeof o.data === "string" && typeof o.rawLog === "string" && Array.isArray(o.logs) && (!o.logs.length || exports.ABCIMessageLog.is(o.logs[0])) && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && typeof o.timestamp === "string" && Array.isArray(o.events) && (!o.events.length || types_1.Event.is(o.events[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxResponse.typeUrl || typeof o.height === "bigint" && typeof o.txhash === "string" && typeof o.codespace === "string" && typeof o.code === "number" && typeof o.data === "string" && typeof o.raw_log === "string" && Array.isArray(o.logs) && (!o.logs.length || exports.ABCIMessageLog.isSDK(o.logs[0])) && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && typeof o.timestamp === "string" && Array.isArray(o.events) && (!o.events.length || types_1.Event.isSDK(o.events[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxResponse.typeUrl || typeof o.height === "bigint" && typeof o.txhash === "string" && typeof o.codespace === "string" && typeof o.code === "number" && typeof o.data === "string" && typeof o.raw_log === "string" && Array.isArray(o.logs) && (!o.logs.length || exports.ABCIMessageLog.isAmino(o.logs[0])) && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && typeof o.timestamp === "string" && Array.isArray(o.events) && (!o.events.length || types_1.Event.isAmino(o.events[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.rawLog !== "") {
            writer.uint32(50).string(message.rawLog);
        }
        for (const v of message.logs) {
            exports.ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(72).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(80).int64(message.gasUsed);
        }
        if (message.tx !== undefined) {
            any_1.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (const v of message.events) {
            types_1.Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.rawLog = reader.string();
                    break;
                case 7:
                    message.logs.push(exports.ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gasWanted = reader.int64();
                    break;
                case 10:
                    message.gasUsed = reader.int64();
                    break;
                case 11:
                    message.tx = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            txhash: (0, helpers_1.isSet)(object.txhash) ? String(object.txhash) : "",
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : "",
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            rawLog: (0, helpers_1.isSet)(object.rawLog) ? String(object.rawLog) : "",
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => exports.ABCIMessageLog.fromJSON(e)) : [],
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gasWanted: (0, helpers_1.isSet)(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt(0),
            gasUsed: (0, helpers_1.isSet)(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0),
            tx: (0, helpers_1.isSet)(object.tx) ? any_1.Any.fromJSON(object.tx) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? String(object.timestamp) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => types_1.Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = message.data);
        message.rawLog !== undefined && (obj.rawLog = message.rawLog);
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? exports.ABCIMessageLog.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || BigInt(0)).toString());
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
        message.tx !== undefined && (obj.tx = message.tx ? any_1.Any.toJSON(message.tx) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.txhash = object.txhash ?? "";
        message.codespace = object.codespace ?? "";
        message.code = object.code ?? 0;
        message.data = object.data ?? "";
        message.rawLog = object.rawLog ?? "";
        message.logs = object.logs?.map(e => exports.ABCIMessageLog.fromPartial(e)) || [];
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.tx = object.tx !== undefined && object.tx !== null ? any_1.Any.fromPartial(object.tx) : undefined;
        message.timestamp = object.timestamp ?? "";
        message.events = object.events?.map(e => types_1.Event.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            txhash: object?.txhash,
            codespace: object?.codespace,
            code: object?.code,
            data: object?.data,
            rawLog: object?.raw_log,
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => exports.ABCIMessageLog.fromSDK(e)) : [],
            info: object?.info,
            gasWanted: object?.gas_wanted,
            gasUsed: object?.gas_used,
            tx: object.tx ? any_1.Any.fromSDK(object.tx) : undefined,
            timestamp: object?.timestamp,
            events: Array.isArray(object?.events) ? object.events.map((e) => types_1.Event.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.txhash = message.txhash;
        obj.codespace = message.codespace;
        obj.code = message.code;
        obj.data = message.data;
        obj.raw_log = message.rawLog;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? exports.ABCIMessageLog.toSDK(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        obj.info = message.info;
        obj.gas_wanted = message.gasWanted;
        obj.gas_used = message.gasUsed;
        message.tx !== undefined && (obj.tx = message.tx ? any_1.Any.toSDK(message.tx) : undefined);
        obj.timestamp = message.timestamp;
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTxResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = object.txhash;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.raw_log !== undefined && object.raw_log !== null) {
            message.rawLog = object.raw_log;
        }
        message.logs = object.logs?.map(e => exports.ABCIMessageLog.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = any_1.Any.fromAmino(object.tx);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        message.events = object.events?.map(e => types_1.Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.txhash = message.txhash;
        obj.codespace = message.codespace;
        obj.code = message.code;
        obj.data = message.data;
        obj.raw_log = message.rawLog;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? exports.ABCIMessageLog.toAmino(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        obj.info = message.info;
        obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        obj.tx = message.tx ? any_1.Any.toAmino(message.tx) : undefined;
        obj.timestamp = message.timestamp;
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxResponse",
            value: exports.TxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
            value: exports.TxResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxResponse.typeUrl, exports.TxResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TxResponse.aminoType, exports.TxResponse.typeUrl);
function createBaseABCIMessageLog() {
    return {
        msgIndex: 0,
        log: "",
        events: []
    };
}
exports.ABCIMessageLog = {
    typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
    aminoType: "cosmos-sdk/ABCIMessageLog",
    is(o) {
        return o && (o.$typeUrl === exports.ABCIMessageLog.typeUrl || typeof o.msgIndex === "number" && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || exports.StringEvent.is(o.events[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ABCIMessageLog.typeUrl || typeof o.msg_index === "number" && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || exports.StringEvent.isSDK(o.events[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ABCIMessageLog.typeUrl || typeof o.msg_index === "number" && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || exports.StringEvent.isAmino(o.events[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgIndex !== 0) {
            writer.uint32(8).uint32(message.msgIndex);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            exports.StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIMessageLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgIndex = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(exports.StringEvent.decode(reader, reader.uint32()));
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
            msgIndex: (0, helpers_1.isSet)(object.msgIndex) ? Number(object.msgIndex) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.StringEvent.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.StringEvent.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIMessageLog();
        message.msgIndex = object.msgIndex ?? 0;
        message.log = object.log ?? "";
        message.events = object.events?.map(e => exports.StringEvent.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            msgIndex: object?.msg_index,
            log: object?.log,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.StringEvent.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg_index = message.msgIndex;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.StringEvent.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseABCIMessageLog();
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = object.msg_index;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = object.events?.map(e => exports.StringEvent.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_index = message.msgIndex;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.StringEvent.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ABCIMessageLog.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIMessageLog",
            value: exports.ABCIMessageLog.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ABCIMessageLog.decode(message.value);
    },
    toProto(message) {
        return exports.ABCIMessageLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
            value: exports.ABCIMessageLog.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ABCIMessageLog.typeUrl, exports.ABCIMessageLog);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ABCIMessageLog.aminoType, exports.ABCIMessageLog.typeUrl);
function createBaseStringEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.StringEvent = {
    typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
    aminoType: "cosmos-sdk/StringEvent",
    is(o) {
        return o && (o.$typeUrl === exports.StringEvent.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || exports.Attribute.is(o.attributes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.StringEvent.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || exports.Attribute.isSDK(o.attributes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.StringEvent.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || exports.Attribute.isAmino(o.attributes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
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
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.Attribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStringEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => exports.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            type: object?.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.Attribute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.Attribute.toSDK(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseStringEvent();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.attributes = object.attributes?.map(e => exports.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StringEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StringEvent",
            value: exports.StringEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StringEvent.decode(message.value);
    },
    toProto(message) {
        return exports.StringEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
            value: exports.StringEvent.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.StringEvent.typeUrl, exports.StringEvent);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.StringEvent.aminoType, exports.StringEvent.typeUrl);
function createBaseAttribute() {
    return {
        key: "",
        value: ""
    };
}
exports.Attribute = {
    typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
    aminoType: "cosmos-sdk/Attribute",
    is(o) {
        return o && (o.$typeUrl === exports.Attribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Attribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Attribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
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
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAttribute();
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
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Attribute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Attribute",
            value: exports.Attribute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Attribute.decode(message.value);
    },
    toProto(message) {
        return exports.Attribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
            value: exports.Attribute.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Attribute.typeUrl, exports.Attribute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Attribute.aminoType, exports.Attribute.typeUrl);
function createBaseGasInfo() {
    return {
        gasWanted: BigInt(0),
        gasUsed: BigInt(0)
    };
}
exports.GasInfo = {
    typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
    aminoType: "cosmos-sdk/GasInfo",
    is(o) {
        return o && (o.$typeUrl === exports.GasInfo.typeUrl || typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GasInfo.typeUrl || typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GasInfo.typeUrl || typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(8).uint64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasWanted = reader.uint64();
                    break;
                case 2:
                    message.gasUsed = reader.uint64();
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
            gasWanted: (0, helpers_1.isSet)(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt(0),
            gasUsed: (0, helpers_1.isSet)(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || BigInt(0)).toString());
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasInfo();
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            gasWanted: object?.gas_wanted,
            gasUsed: object?.gas_used
        };
    },
    toSDK(message) {
        const obj = {};
        obj.gas_wanted = message.gasWanted;
        obj.gas_used = message.gasUsed;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGasInfo();
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GasInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GasInfo",
            value: exports.GasInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GasInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GasInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
            value: exports.GasInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GasInfo.typeUrl, exports.GasInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GasInfo.aminoType, exports.GasInfo.typeUrl);
function createBaseResult() {
    return {
        data: new Uint8Array(),
        log: "",
        events: [],
        msgResponses: []
    };
}
exports.Result = {
    typeUrl: "/cosmos.base.abci.v1beta1.Result",
    aminoType: "cosmos-sdk/Result",
    is(o) {
        return o && (o.$typeUrl === exports.Result.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || types_1.Event.is(o.events[0])) && Array.isArray(o.msgResponses) && (!o.msgResponses.length || any_1.Any.is(o.msgResponses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Result.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || types_1.Event.isSDK(o.events[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || any_1.Any.isSDK(o.msg_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Result.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && Array.isArray(o.events) && (!o.events.length || types_1.Event.isAmino(o.events[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || any_1.Any.isAmino(o.msg_responses[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            types_1.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.msgResponses) {
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msgResponses.push(any_1.Any.decode(reader, reader.uint32()));
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => types_1.Event.fromJSON(e)) : [],
            msgResponses: Array.isArray(object?.msgResponses) ? object.msgResponses.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msgResponses) {
            obj.msgResponses = message.msgResponses.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.msgResponses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResult();
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.events = object.events?.map(e => types_1.Event.fromPartial(e)) || [];
        message.msgResponses = object.msgResponses?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            data: object?.data,
            log: object?.log,
            events: Array.isArray(object?.events) ? object.events.map((e) => types_1.Event.fromSDK(e)) : [],
            msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => any_1.Any.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msgResponses) {
            obj.msg_responses = message.msgResponses.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseResult();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = object.events?.map(e => types_1.Event.fromAmino(e)) || [];
        message.msgResponses = object.msg_responses?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msgResponses) {
            obj.msg_responses = message.msgResponses.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Result.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Result",
            value: exports.Result.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Result.decode(message.value);
    },
    toProto(message) {
        return exports.Result.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Result",
            value: exports.Result.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Result.typeUrl, exports.Result);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Result.aminoType, exports.Result.typeUrl);
function createBaseSimulationResponse() {
    return {
        gasInfo: exports.GasInfo.fromPartial({}),
        result: undefined
    };
}
exports.SimulationResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
    aminoType: "cosmos-sdk/SimulationResponse",
    is(o) {
        return o && (o.$typeUrl === exports.SimulationResponse.typeUrl || exports.GasInfo.is(o.gasInfo));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SimulationResponse.typeUrl || exports.GasInfo.isSDK(o.gas_info));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SimulationResponse.typeUrl || exports.GasInfo.isAmino(o.gas_info));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gasInfo !== undefined) {
            exports.GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            exports.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasInfo = exports.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = exports.Result.decode(reader, reader.uint32());
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
            gasInfo: (0, helpers_1.isSet)(object.gasInfo) ? exports.GasInfo.fromJSON(object.gasInfo) : undefined,
            result: (0, helpers_1.isSet)(object.result) ? exports.Result.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? exports.GasInfo.toJSON(message.gasInfo) : undefined);
        message.result !== undefined && (obj.result = message.result ? exports.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulationResponse();
        message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? exports.GasInfo.fromPartial(object.gasInfo) : undefined;
        message.result = object.result !== undefined && object.result !== null ? exports.Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            gasInfo: object.gas_info ? exports.GasInfo.fromSDK(object.gas_info) : undefined,
            result: object.result ? exports.Result.fromSDK(object.result) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.gasInfo !== undefined && (obj.gas_info = message.gasInfo ? exports.GasInfo.toSDK(message.gasInfo) : undefined);
        message.result !== undefined && (obj.result = message.result ? exports.Result.toSDK(message.result) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSimulationResponse();
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gasInfo = exports.GasInfo.fromAmino(object.gas_info);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.Result.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gasInfo ? exports.GasInfo.toAmino(message.gasInfo) : undefined;
        obj.result = message.result ? exports.Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimulationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulationResponse",
            value: exports.SimulationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SimulationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SimulationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
            value: exports.SimulationResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SimulationResponse.typeUrl, exports.SimulationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SimulationResponse.aminoType, exports.SimulationResponse.typeUrl);
function createBaseMsgData() {
    return {
        msgType: "",
        data: new Uint8Array()
    };
}
exports.MsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
    aminoType: "cosmos-sdk/MsgData",
    is(o) {
        return o && (o.$typeUrl === exports.MsgData.typeUrl || typeof o.msgType === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgData.typeUrl || typeof o.msg_type === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgData.typeUrl || typeof o.msg_type === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgType !== "") {
            writer.uint32(10).string(message.msgType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            msgType: (0, helpers_1.isSet)(object.msgType) ? String(object.msgType) : "",
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgType !== undefined && (obj.msgType = message.msgType);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgData();
        message.msgType = object.msgType ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            msgType: object?.msg_type,
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg_type = message.msgType;
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgData();
        if (object.msg_type !== undefined && object.msg_type !== null) {
            message.msgType = object.msg_type;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type = message.msgType;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgData",
            value: exports.MsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgData.decode(message.value);
    },
    toProto(message) {
        return exports.MsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
            value: exports.MsgData.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgData.typeUrl, exports.MsgData);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgData.aminoType, exports.MsgData.typeUrl);
function createBaseTxMsgData() {
    return {
        data: [],
        msgResponses: []
    };
}
exports.TxMsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
    aminoType: "cosmos-sdk/TxMsgData",
    is(o) {
        return o && (o.$typeUrl === exports.TxMsgData.typeUrl || Array.isArray(o.data) && (!o.data.length || exports.MsgData.is(o.data[0])) && Array.isArray(o.msgResponses) && (!o.msgResponses.length || any_1.Any.is(o.msgResponses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxMsgData.typeUrl || Array.isArray(o.data) && (!o.data.length || exports.MsgData.isSDK(o.data[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || any_1.Any.isSDK(o.msg_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxMsgData.typeUrl || Array.isArray(o.data) && (!o.data.length || exports.MsgData.isAmino(o.data[0])) && Array.isArray(o.msg_responses) && (!o.msg_responses.length || any_1.Any.isAmino(o.msg_responses[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            exports.MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.msgResponses) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(exports.MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msgResponses.push(any_1.Any.decode(reader, reader.uint32()));
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
            data: Array.isArray(object?.data) ? object.data.map((e) => exports.MsgData.fromJSON(e)) : [],
            msgResponses: Array.isArray(object?.msgResponses) ? object.msgResponses.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.MsgData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msgResponses) {
            obj.msgResponses = message.msgResponses.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.msgResponses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map(e => exports.MsgData.fromPartial(e)) || [];
        message.msgResponses = object.msgResponses?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => exports.MsgData.fromSDK(e)) : [],
            msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => any_1.Any.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.MsgData.toSDK(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msgResponses) {
            obj.msg_responses = message.msgResponses.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map(e => exports.MsgData.fromAmino(e)) || [];
        message.msgResponses = object.msg_responses?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.MsgData.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msgResponses) {
            obj.msg_responses = message.msgResponses.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxMsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxMsgData",
            value: exports.TxMsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxMsgData.decode(message.value);
    },
    toProto(message) {
        return exports.TxMsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
            value: exports.TxMsgData.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxMsgData.typeUrl, exports.TxMsgData);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TxMsgData.aminoType, exports.TxMsgData.typeUrl);
function createBaseSearchTxsResult() {
    return {
        totalCount: BigInt(0),
        count: BigInt(0),
        pageNumber: BigInt(0),
        pageTotal: BigInt(0),
        limit: BigInt(0),
        txs: []
    };
}
exports.SearchTxsResult = {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
    aminoType: "cosmos-sdk/SearchTxsResult",
    is(o) {
        return o && (o.$typeUrl === exports.SearchTxsResult.typeUrl || typeof o.totalCount === "bigint" && typeof o.count === "bigint" && typeof o.pageNumber === "bigint" && typeof o.pageTotal === "bigint" && typeof o.limit === "bigint" && Array.isArray(o.txs) && (!o.txs.length || exports.TxResponse.is(o.txs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SearchTxsResult.typeUrl || typeof o.total_count === "bigint" && typeof o.count === "bigint" && typeof o.page_number === "bigint" && typeof o.page_total === "bigint" && typeof o.limit === "bigint" && Array.isArray(o.txs) && (!o.txs.length || exports.TxResponse.isSDK(o.txs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SearchTxsResult.typeUrl || typeof o.total_count === "bigint" && typeof o.count === "bigint" && typeof o.page_number === "bigint" && typeof o.page_total === "bigint" && typeof o.limit === "bigint" && Array.isArray(o.txs) && (!o.txs.length || exports.TxResponse.isAmino(o.txs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.totalCount);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        if (message.pageNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.pageNumber);
        }
        if (message.pageTotal !== BigInt(0)) {
            writer.uint32(32).uint64(message.pageTotal);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).uint64(message.limit);
        }
        for (const v of message.txs) {
            exports.TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchTxsResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                case 3:
                    message.pageNumber = reader.uint64();
                    break;
                case 4:
                    message.pageTotal = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.txs.push(exports.TxResponse.decode(reader, reader.uint32()));
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
            totalCount: (0, helpers_1.isSet)(object.totalCount) ? BigInt(object.totalCount.toString()) : BigInt(0),
            count: (0, helpers_1.isSet)(object.count) ? BigInt(object.count.toString()) : BigInt(0),
            pageNumber: (0, helpers_1.isSet)(object.pageNumber) ? BigInt(object.pageNumber.toString()) : BigInt(0),
            pageTotal: (0, helpers_1.isSet)(object.pageTotal) ? BigInt(object.pageTotal.toString()) : BigInt(0),
            limit: (0, helpers_1.isSet)(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => exports.TxResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalCount !== undefined && (obj.totalCount = (message.totalCount || BigInt(0)).toString());
        message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
        message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || BigInt(0)).toString());
        message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || BigInt(0)).toString());
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? exports.TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSearchTxsResult();
        message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
        message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.txs = object.txs?.map(e => exports.TxResponse.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            totalCount: object?.total_count,
            count: object?.count,
            pageNumber: object?.page_number,
            pageTotal: object?.page_total,
            limit: object?.limit,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => exports.TxResponse.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.total_count = message.totalCount;
        obj.count = message.count;
        obj.page_number = message.pageNumber;
        obj.page_total = message.pageTotal;
        obj.limit = message.limit;
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? exports.TxResponse.toSDK(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSearchTxsResult();
        if (object.total_count !== undefined && object.total_count !== null) {
            message.totalCount = BigInt(object.total_count);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.pageNumber = BigInt(object.page_number);
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.pageTotal = BigInt(object.page_total);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        message.txs = object.txs?.map(e => exports.TxResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_count = message.totalCount ? message.totalCount.toString() : undefined;
        obj.count = message.count ? message.count.toString() : undefined;
        obj.page_number = message.pageNumber ? message.pageNumber.toString() : undefined;
        obj.page_total = message.pageTotal ? message.pageTotal.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? exports.TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SearchTxsResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SearchTxsResult",
            value: exports.SearchTxsResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SearchTxsResult.decode(message.value);
    },
    toProto(message) {
        return exports.SearchTxsResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
            value: exports.SearchTxsResult.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SearchTxsResult.typeUrl, exports.SearchTxsResult);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SearchTxsResult.aminoType, exports.SearchTxsResult.typeUrl);
