"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acknowledgement = exports.PacketState = exports.Packet = exports.Counterparty = exports.IdentifiedChannel = exports.Channel = exports.orderToJSON = exports.orderFromJSON = exports.OrderAmino = exports.OrderSDKType = exports.Order = exports.stateToJSON = exports.stateFromJSON = exports.StateAmino = exports.StateSDKType = exports.State = void 0;
const client_1 = require("../../client/v1/client");
const helpers_1 = require("../../../../helpers");
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A channel has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (exports.State = State = {}));
exports.StateSDKType = State;
exports.StateAmino = State;
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case 4:
        case "STATE_CLOSED":
            return State.STATE_CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        case State.STATE_CLOSED:
            return "STATE_CLOSED";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.stateToJSON = stateToJSON;
/** Order defines if a channel is ORDERED or UNORDERED */
var Order;
(function (Order) {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
    Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order || (exports.Order = Order = {}));
exports.OrderSDKType = Order;
exports.OrderAmino = Order;
function orderFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_NONE_UNSPECIFIED":
            return Order.ORDER_NONE_UNSPECIFIED;
        case 1:
        case "ORDER_UNORDERED":
            return Order.ORDER_UNORDERED;
        case 2:
        case "ORDER_ORDERED":
            return Order.ORDER_ORDERED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order.UNRECOGNIZED;
    }
}
exports.orderFromJSON = orderFromJSON;
function orderToJSON(object) {
    switch (object) {
        case Order.ORDER_NONE_UNSPECIFIED:
            return "ORDER_NONE_UNSPECIFIED";
        case Order.ORDER_UNORDERED:
            return "ORDER_UNORDERED";
        case Order.ORDER_ORDERED:
            return "ORDER_ORDERED";
        case Order.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderToJSON = orderToJSON;
function createBaseChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        connectionHops: [],
        version: ""
    };
}
exports.Channel = {
    typeUrl: "/ibc.core.channel.v1.Channel",
    aminoType: "cosmos-sdk/Channel",
    is(o) {
        return o && (o.$typeUrl === exports.Channel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.is(o.counterparty) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Channel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.isSDK(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Channel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connectionHops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connectionHops.push(reader.string());
                    break;
                case 5:
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
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? exports.Counterparty.fromJSON(object.counterparty) : undefined,
            connectionHops: Array.isArray(object?.connectionHops) ? object.connectionHops.map((e) => String(e)) : [],
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
        if (message.connectionHops) {
            obj.connectionHops = message.connectionHops.map(e => e);
        }
        else {
            obj.connectionHops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.connectionHops = object.connectionHops?.map(e => e) || [];
        message.version = object.version ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: object.counterparty ? exports.Counterparty.fromSDK(object.counterparty) : undefined,
            connectionHops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => e) : [],
            version: object?.version
        };
    },
    toSDK(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toSDK(message.counterparty) : undefined);
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseChannel();
        if (object.state !== undefined && object.state !== null) {
            message.state = stateFromJSON(object.state);
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = orderFromJSON(object.ordering);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = exports.Counterparty.fromAmino(object.counterparty);
        }
        message.connectionHops = object.connection_hops?.map(e => e) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = stateToJSON(message.state);
        obj.ordering = orderToJSON(message.ordering);
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Channel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Channel",
            value: exports.Channel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Channel.decode(message.value);
    },
    toProto(message) {
        return exports.Channel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Channel",
            value: exports.Channel.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Channel.typeUrl, exports.Channel);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Channel.aminoType, exports.Channel.typeUrl);
function createBaseIdentifiedChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        connectionHops: [],
        version: "",
        portId: "",
        channelId: ""
    };
}
exports.IdentifiedChannel = {
    typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
    aminoType: "cosmos-sdk/IdentifiedChannel",
    is(o) {
        return o && (o.$typeUrl === exports.IdentifiedChannel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.is(o.counterparty) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string" && typeof o.portId === "string" && typeof o.channelId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.IdentifiedChannel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.isSDK(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.IdentifiedChannel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connectionHops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.portId !== "") {
            writer.uint32(50).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(58).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connectionHops.push(reader.string());
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.portId = reader.string();
                    break;
                case 7:
                    message.channelId = reader.string();
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
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? exports.Counterparty.fromJSON(object.counterparty) : undefined,
            connectionHops: Array.isArray(object?.connectionHops) ? object.connectionHops.map((e) => String(e)) : [],
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
        if (message.connectionHops) {
            obj.connectionHops = message.connectionHops.map(e => e);
        }
        else {
            obj.connectionHops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.connectionHops = object.connectionHops?.map(e => e) || [];
        message.version = object.version ?? "";
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: object.counterparty ? exports.Counterparty.fromSDK(object.counterparty) : undefined,
            connectionHops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => e) : [],
            version: object?.version,
            portId: object?.port_id,
            channelId: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toSDK(message.counterparty) : undefined);
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedChannel();
        if (object.state !== undefined && object.state !== null) {
            message.state = stateFromJSON(object.state);
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = orderFromJSON(object.ordering);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = exports.Counterparty.fromAmino(object.counterparty);
        }
        message.connectionHops = object.connection_hops?.map(e => e) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = stateToJSON(message.state);
        obj.ordering = orderToJSON(message.ordering);
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedChannel",
            value: exports.IdentifiedChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedChannel.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
            value: exports.IdentifiedChannel.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.IdentifiedChannel.typeUrl, exports.IdentifiedChannel);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IdentifiedChannel.aminoType, exports.IdentifiedChannel.typeUrl);
function createBaseCounterparty() {
    return {
        portId: "",
        channelId: ""
    };
}
exports.Counterparty = {
    typeUrl: "/ibc.core.channel.v1.Counterparty",
    aminoType: "cosmos-sdk/Counterparty",
    is(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterparty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCounterparty();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCounterparty();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: exports.Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Counterparty.decode(message.value);
    },
    toProto(message) {
        return exports.Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Counterparty",
            value: exports.Counterparty.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Counterparty.typeUrl, exports.Counterparty);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Counterparty.aminoType, exports.Counterparty.typeUrl);
function createBasePacket() {
    return {
        sequence: BigInt(0),
        sourcePort: "",
        sourceChannel: "",
        destinationPort: "",
        destinationChannel: "",
        data: new Uint8Array(),
        timeoutHeight: client_1.Height.fromPartial({}),
        timeoutTimestamp: BigInt(0)
    };
}
exports.Packet = {
    typeUrl: "/ibc.core.channel.v1.Packet",
    aminoType: "cosmos-sdk/Packet",
    is(o) {
        return o && (o.$typeUrl === exports.Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.sourcePort === "string" && typeof o.sourceChannel === "string" && typeof o.destinationPort === "string" && typeof o.destinationChannel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && client_1.Height.is(o.timeoutHeight) && typeof o.timeoutTimestamp === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && client_1.Height.isSDK(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && client_1.Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.sourcePort !== "") {
            writer.uint32(18).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(26).string(message.sourceChannel);
        }
        if (message.destinationPort !== "") {
            writer.uint32(34).string(message.destinationPort);
        }
        if (message.destinationChannel !== "") {
            writer.uint32(42).string(message.destinationChannel);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.timeoutHeight !== undefined) {
            client_1.Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(64).uint64(message.timeoutTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.sourcePort = reader.string();
                    break;
                case 3:
                    message.sourceChannel = reader.string();
                    break;
                case 4:
                    message.destinationPort = reader.string();
                    break;
                case 5:
                    message.destinationChannel = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.timeoutTimestamp = reader.uint64();
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            sourcePort: (0, helpers_1.isSet)(object.sourcePort) ? String(object.sourcePort) : "",
            sourceChannel: (0, helpers_1.isSet)(object.sourceChannel) ? String(object.sourceChannel) : "",
            destinationPort: (0, helpers_1.isSet)(object.destinationPort) ? String(object.destinationPort) : "",
            destinationChannel: (0, helpers_1.isSet)(object.destinationChannel) ? String(object.destinationChannel) : "",
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            timeoutHeight: (0, helpers_1.isSet)(object.timeoutHeight) ? client_1.Height.fromJSON(object.timeoutHeight) : undefined,
            timeoutTimestamp: (0, helpers_1.isSet)(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.destinationPort !== undefined && (obj.destinationPort = message.destinationPort);
        message.destinationChannel !== undefined && (obj.destinationChannel = message.destinationChannel);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? client_1.Height.toJSON(message.timeoutHeight) : undefined);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacket();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.destinationPort = object.destinationPort ?? "";
        message.destinationChannel = object.destinationChannel ?? "";
        message.data = object.data ?? new Uint8Array();
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? client_1.Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sequence: object?.sequence,
            sourcePort: object?.source_port,
            sourceChannel: object?.source_channel,
            destinationPort: object?.destination_port,
            destinationChannel: object?.destination_channel,
            data: object?.data,
            timeoutHeight: object.timeout_height ? client_1.Height.fromSDK(object.timeout_height) : undefined,
            timeoutTimestamp: object?.timeout_timestamp
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sequence = message.sequence;
        obj.source_port = message.sourcePort;
        obj.source_channel = message.sourceChannel;
        obj.destination_port = message.destinationPort;
        obj.destination_channel = message.destinationChannel;
        obj.data = message.data;
        message.timeoutHeight !== undefined && (obj.timeout_height = message.timeoutHeight ? client_1.Height.toSDK(message.timeoutHeight) : undefined);
        obj.timeout_timestamp = message.timeoutTimestamp;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePacket();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.source_port !== undefined && object.source_port !== null) {
            message.sourcePort = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.sourceChannel = object.source_channel;
        }
        if (object.destination_port !== undefined && object.destination_port !== null) {
            message.destinationPort = object.destination_port;
        }
        if (object.destination_channel !== undefined && object.destination_channel !== null) {
            message.destinationChannel = object.destination_channel;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = client_1.Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.source_port = message.sourcePort;
        obj.source_channel = message.sourceChannel;
        obj.destination_port = message.destinationPort;
        obj.destination_channel = message.destinationChannel;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.timeout_height = message.timeoutHeight ? client_1.Height.toAmino(message.timeoutHeight) : {};
        obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Packet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Packet",
            value: exports.Packet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Packet.decode(message.value);
    },
    toProto(message) {
        return exports.Packet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Packet",
            value: exports.Packet.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Packet.typeUrl, exports.Packet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Packet.aminoType, exports.Packet.typeUrl);
function createBasePacketState() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0),
        data: new Uint8Array()
    };
}
exports.PacketState = {
    typeUrl: "/ibc.core.channel.v1.PacketState",
    aminoType: "cosmos-sdk/PacketState",
    is(o) {
        return o && (o.$typeUrl === exports.PacketState.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        if (message.data.length !== 0) {
            writer.uint32(34).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                case 4:
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
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketState();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            portId: object?.port_id,
            channelId: object?.channel_id,
            sequence: object?.sequence,
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence;
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePacketState();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketState",
            value: exports.PacketState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketState.decode(message.value);
    },
    toProto(message) {
        return exports.PacketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketState",
            value: exports.PacketState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PacketState.typeUrl, exports.PacketState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PacketState.aminoType, exports.PacketState.typeUrl);
function createBaseAcknowledgement() {
    return {
        result: undefined,
        error: undefined
    };
}
exports.Acknowledgement = {
    typeUrl: "/ibc.core.channel.v1.Acknowledgement",
    aminoType: "cosmos-sdk/Acknowledgement",
    is(o) {
        return o && o.$typeUrl === exports.Acknowledgement.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Acknowledgement.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Acknowledgement.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== undefined) {
            writer.uint32(170).bytes(message.result);
        }
        if (message.error !== undefined) {
            writer.uint32(178).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 21:
                    message.result = reader.bytes();
                    break;
                case 22:
                    message.error = reader.string();
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
            result: (0, helpers_1.isSet)(object.result) ? (0, helpers_1.bytesFromBase64)(object.result) : undefined,
            error: (0, helpers_1.isSet)(object.error) ? String(object.error) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result !== undefined ? (0, helpers_1.base64FromBytes)(message.result) : undefined);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAcknowledgement();
        message.result = object.result ?? undefined;
        message.error = object.error ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            result: object?.result,
            error: object?.error
        };
    },
    toSDK(message) {
        const obj = {};
        obj.result = message.result;
        obj.error = message.error;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseAcknowledgement();
        if (object.result !== undefined && object.result !== null) {
            message.result = (0, helpers_1.bytesFromBase64)(object.result);
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result ? (0, helpers_1.base64FromBytes)(message.result) : undefined;
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Acknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Acknowledgement",
            value: exports.Acknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Acknowledgement.decode(message.value);
    },
    toProto(message) {
        return exports.Acknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Acknowledgement",
            value: exports.Acknowledgement.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Acknowledgement.typeUrl, exports.Acknowledgement);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Acknowledgement.aminoType, exports.Acknowledgement.typeUrl);
