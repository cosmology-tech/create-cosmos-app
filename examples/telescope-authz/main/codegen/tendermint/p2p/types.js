"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerAddressInfo = exports.PeerInfo = exports.NodeInfoOther = exports.NodeInfo = exports.ProtocolVersion = void 0;
const timestamp_1 = require("../../google/protobuf/timestamp");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseProtocolVersion() {
    return {
        p2p: BigInt(0),
        block: BigInt(0),
        app: BigInt(0)
    };
}
exports.ProtocolVersion = {
    typeUrl: "/tendermint.p2p.ProtocolVersion",
    is(o) {
        return o && (o.$typeUrl === exports.ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.p2p !== BigInt(0)) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== BigInt(0)) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
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
            p2p: (0, helpers_1.isSet)(object.p2p) ? BigInt(object.p2p.toString()) : BigInt(0),
            block: (0, helpers_1.isSet)(object.block) ? BigInt(object.block.toString()) : BigInt(0),
            app: (0, helpers_1.isSet)(object.app) ? BigInt(object.app.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = (message.p2p || BigInt(0)).toString());
        message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
        message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            p2p: object?.p2p,
            block: object?.block,
            app: object?.app
        };
    },
    toSDK(message) {
        const obj = {};
        obj.p2p = message.p2p;
        obj.block = message.block;
        obj.app = message.app;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseProtocolVersion();
        if (object.p2p !== undefined && object.p2p !== null) {
            message.p2p = BigInt(object.p2p);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.p2p = message.p2p ? message.p2p.toString() : undefined;
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProtocolVersion.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProtocolVersion.decode(message.value);
    },
    toProto(message) {
        return exports.ProtocolVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: exports.ProtocolVersion.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ProtocolVersion.typeUrl, exports.ProtocolVersion);
function createBaseNodeInfo() {
    return {
        protocolVersion: exports.ProtocolVersion.fromPartial({}),
        nodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: exports.NodeInfoOther.fromPartial({})
    };
}
exports.NodeInfo = {
    typeUrl: "/tendermint.p2p.NodeInfo",
    is(o) {
        return o && (o.$typeUrl === exports.NodeInfo.typeUrl || exports.ProtocolVersion.is(o.protocolVersion) && typeof o.nodeId === "string" && typeof o.listenAddr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && exports.NodeInfoOther.is(o.other));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.NodeInfo.typeUrl || exports.ProtocolVersion.isSDK(o.protocol_version) && typeof o.node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && exports.NodeInfoOther.isSDK(o.other));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.NodeInfo.typeUrl || exports.ProtocolVersion.isAmino(o.protocol_version) && typeof o.node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && exports.NodeInfoOther.isAmino(o.other));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.protocolVersion !== undefined) {
            exports.ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocolVersion = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.NodeInfoOther.decode(reader, reader.uint32());
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
            protocolVersion: (0, helpers_1.isSet)(object.protocolVersion) ? exports.ProtocolVersion.fromJSON(object.protocolVersion) : undefined,
            nodeId: (0, helpers_1.isSet)(object.nodeId) ? String(object.nodeId) : "",
            listenAddr: (0, helpers_1.isSet)(object.listenAddr) ? String(object.listenAddr) : "",
            network: (0, helpers_1.isSet)(object.network) ? String(object.network) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            channels: (0, helpers_1.isSet)(object.channels) ? (0, helpers_1.bytesFromBase64)(object.channels) : new Uint8Array(),
            moniker: (0, helpers_1.isSet)(object.moniker) ? String(object.moniker) : "",
            other: (0, helpers_1.isSet)(object.other) ? exports.NodeInfoOther.fromJSON(object.other) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocolVersion !== undefined && (obj.protocolVersion = message.protocolVersion ? exports.ProtocolVersion.toJSON(message.protocolVersion) : undefined);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined && (obj.channels = (0, helpers_1.base64FromBytes)(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? exports.NodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNodeInfo();
        message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? exports.ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
        message.nodeId = object.nodeId ?? "";
        message.listenAddr = object.listenAddr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? exports.NodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            protocolVersion: object.protocol_version ? exports.ProtocolVersion.fromSDK(object.protocol_version) : undefined,
            nodeId: object?.node_id,
            listenAddr: object?.listen_addr,
            network: object?.network,
            version: object?.version,
            channels: object?.channels,
            moniker: object?.moniker,
            other: object.other ? exports.NodeInfoOther.fromSDK(object.other) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.protocolVersion !== undefined && (obj.protocol_version = message.protocolVersion ? exports.ProtocolVersion.toSDK(message.protocolVersion) : undefined);
        obj.node_id = message.nodeId;
        obj.listen_addr = message.listenAddr;
        obj.network = message.network;
        obj.version = message.version;
        obj.channels = message.channels;
        obj.moniker = message.moniker;
        message.other !== undefined && (obj.other = message.other ? exports.NodeInfoOther.toSDK(message.other) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseNodeInfo();
        if (object.protocol_version !== undefined && object.protocol_version !== null) {
            message.protocolVersion = exports.ProtocolVersion.fromAmino(object.protocol_version);
        }
        if (object.node_id !== undefined && object.node_id !== null) {
            message.nodeId = object.node_id;
        }
        if (object.listen_addr !== undefined && object.listen_addr !== null) {
            message.listenAddr = object.listen_addr;
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.channels !== undefined && object.channels !== null) {
            message.channels = (0, helpers_1.bytesFromBase64)(object.channels);
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.other !== undefined && object.other !== null) {
            message.other = exports.NodeInfoOther.fromAmino(object.other);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.protocol_version = message.protocolVersion ? exports.ProtocolVersion.toAmino(message.protocolVersion) : undefined;
        obj.node_id = message.nodeId;
        obj.listen_addr = message.listenAddr;
        obj.network = message.network;
        obj.version = message.version;
        obj.channels = message.channels ? (0, helpers_1.base64FromBytes)(message.channels) : undefined;
        obj.moniker = message.moniker;
        obj.other = message.other ? exports.NodeInfoOther.toAmino(message.other) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.NodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfo",
            value: exports.NodeInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.NodeInfo.typeUrl, exports.NodeInfo);
function createBaseNodeInfoOther() {
    return {
        txIndex: "",
        rpcAddress: ""
    };
}
exports.NodeInfoOther = {
    typeUrl: "/tendermint.p2p.NodeInfoOther",
    is(o) {
        return o && (o.$typeUrl === exports.NodeInfoOther.typeUrl || typeof o.txIndex === "string" && typeof o.rpcAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.NodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.NodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
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
            txIndex: (0, helpers_1.isSet)(object.txIndex) ? String(object.txIndex) : "",
            rpcAddress: (0, helpers_1.isSet)(object.rpcAddress) ? String(object.rpcAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.txIndex !== undefined && (obj.txIndex = message.txIndex);
        message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNodeInfoOther();
        message.txIndex = object.txIndex ?? "";
        message.rpcAddress = object.rpcAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            txIndex: object?.tx_index,
            rpcAddress: object?.rpc_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.tx_index = message.txIndex;
        obj.rpc_address = message.rpcAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseNodeInfoOther();
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = object.tx_index;
        }
        if (object.rpc_address !== undefined && object.rpc_address !== null) {
            message.rpcAddress = object.rpc_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_index = message.txIndex;
        obj.rpc_address = message.rpcAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NodeInfoOther.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NodeInfoOther.decode(message.value);
    },
    toProto(message) {
        return exports.NodeInfoOther.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfoOther",
            value: exports.NodeInfoOther.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.NodeInfoOther.typeUrl, exports.NodeInfoOther);
function createBasePeerInfo() {
    return {
        id: "",
        addressInfo: [],
        lastConnected: undefined
    };
}
exports.PeerInfo = {
    typeUrl: "/tendermint.p2p.PeerInfo",
    is(o) {
        return o && (o.$typeUrl === exports.PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.addressInfo) && (!o.addressInfo.length || exports.PeerAddressInfo.is(o.addressInfo[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.address_info) && (!o.address_info.length || exports.PeerAddressInfo.isSDK(o.address_info[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PeerInfo.typeUrl || typeof o.id === "string" && Array.isArray(o.address_info) && (!o.address_info.length || exports.PeerAddressInfo.isAmino(o.address_info[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.addressInfo) {
            exports.PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastConnected !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastConnected), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.addressInfo.push(exports.PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastConnected = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            addressInfo: Array.isArray(object?.addressInfo) ? object.addressInfo.map((e) => exports.PeerAddressInfo.fromJSON(e)) : [],
            lastConnected: (0, helpers_1.isSet)(object.lastConnected) ? new Date(object.lastConnected) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.addressInfo) {
            obj.addressInfo = message.addressInfo.map(e => e ? exports.PeerAddressInfo.toJSON(e) : undefined);
        }
        else {
            obj.addressInfo = [];
        }
        message.lastConnected !== undefined && (obj.lastConnected = message.lastConnected.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeerInfo();
        message.id = object.id ?? "";
        message.addressInfo = object.addressInfo?.map(e => exports.PeerAddressInfo.fromPartial(e)) || [];
        message.lastConnected = object.lastConnected ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            addressInfo: Array.isArray(object?.address_info) ? object.address_info.map((e) => exports.PeerAddressInfo.fromSDK(e)) : [],
            lastConnected: object.last_connected ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        if (message.addressInfo) {
            obj.address_info = message.addressInfo.map(e => e ? exports.PeerAddressInfo.toSDK(e) : undefined);
        }
        else {
            obj.address_info = [];
        }
        message.lastConnected !== undefined && (obj.last_connected = message.lastConnected ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBasePeerInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        message.addressInfo = object.address_info?.map(e => exports.PeerAddressInfo.fromAmino(e)) || [];
        if (object.last_connected !== undefined && object.last_connected !== null) {
            message.lastConnected = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_connected));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        if (message.addressInfo) {
            obj.address_info = message.addressInfo.map(e => e ? exports.PeerAddressInfo.toAmino(e) : undefined);
        }
        else {
            obj.address_info = [];
        }
        obj.last_connected = message.lastConnected ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastConnected)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeerInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PeerInfo.decode(message.value);
    },
    toProto(message) {
        return exports.PeerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerInfo",
            value: exports.PeerInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PeerInfo.typeUrl, exports.PeerInfo);
function createBasePeerAddressInfo() {
    return {
        address: "",
        lastDialSuccess: undefined,
        lastDialFailure: undefined,
        dialFailures: 0
    };
}
exports.PeerAddressInfo = {
    typeUrl: "/tendermint.p2p.PeerAddressInfo",
    is(o) {
        return o && (o.$typeUrl === exports.PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dialFailures === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dial_failures === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PeerAddressInfo.typeUrl || typeof o.address === "string" && typeof o.dial_failures === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.lastDialSuccess !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastDialFailure !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dialFailures !== 0) {
            writer.uint32(32).uint32(message.dialFailures);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerAddressInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.lastDialSuccess = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastDialFailure = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dialFailures = reader.uint32();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            lastDialSuccess: (0, helpers_1.isSet)(object.lastDialSuccess) ? new Date(object.lastDialSuccess) : undefined,
            lastDialFailure: (0, helpers_1.isSet)(object.lastDialFailure) ? new Date(object.lastDialFailure) : undefined,
            dialFailures: (0, helpers_1.isSet)(object.dialFailures) ? Number(object.dialFailures) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.lastDialSuccess !== undefined && (obj.lastDialSuccess = message.lastDialSuccess.toISOString());
        message.lastDialFailure !== undefined && (obj.lastDialFailure = message.lastDialFailure.toISOString());
        message.dialFailures !== undefined && (obj.dialFailures = Math.round(message.dialFailures));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeerAddressInfo();
        message.address = object.address ?? "";
        message.lastDialSuccess = object.lastDialSuccess ?? undefined;
        message.lastDialFailure = object.lastDialFailure ?? undefined;
        message.dialFailures = object.dialFailures ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            lastDialSuccess: object.last_dial_success ?? undefined,
            lastDialFailure: object.last_dial_failure ?? undefined,
            dialFailures: object?.dial_failures
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.lastDialSuccess !== undefined && (obj.last_dial_success = message.lastDialSuccess ?? undefined);
        message.lastDialFailure !== undefined && (obj.last_dial_failure = message.lastDialFailure ?? undefined);
        obj.dial_failures = message.dialFailures;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePeerAddressInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.last_dial_success !== undefined && object.last_dial_success !== null) {
            message.lastDialSuccess = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_dial_success));
        }
        if (object.last_dial_failure !== undefined && object.last_dial_failure !== null) {
            message.lastDialFailure = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_dial_failure));
        }
        if (object.dial_failures !== undefined && object.dial_failures !== null) {
            message.dialFailures = object.dial_failures;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.last_dial_success = message.lastDialSuccess ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastDialSuccess)) : undefined;
        obj.last_dial_failure = message.lastDialFailure ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastDialFailure)) : undefined;
        obj.dial_failures = message.dialFailures;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeerAddressInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PeerAddressInfo.decode(message.value);
    },
    toProto(message) {
        return exports.PeerAddressInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerAddressInfo",
            value: exports.PeerAddressInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PeerAddressInfo.typeUrl, exports.PeerAddressInfo);
