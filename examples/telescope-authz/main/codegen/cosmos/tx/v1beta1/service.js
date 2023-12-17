"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.GetTxResponse = exports.GetTxRequest = exports.SimulateResponse = exports.SimulateRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.broadcastModeToJSON = exports.broadcastModeFromJSON = exports.BroadcastModeAmino = exports.BroadcastModeSDKType = exports.BroadcastMode = exports.orderByToJSON = exports.orderByFromJSON = exports.OrderByAmino = exports.OrderBySDKType = exports.OrderBy = void 0;
const tx_1 = require("./tx");
const pagination_1 = require("../../base/query/v1beta1/pagination");
const abci_1 = require("../../base/abci/v1beta1/abci");
const types_1 = require("../../../tendermint/types/types");
const block_1 = require("../../../tendermint/types/block");
const helpers_1 = require("../../../helpers");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
/** OrderBy defines the sorting order */
var OrderBy;
(function (OrderBy) {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (exports.OrderBy = OrderBy = {}));
exports.OrderBySDKType = OrderBy;
exports.OrderByAmino = OrderBy;
function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
exports.orderByFromJSON = orderByFromJSON;
function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderByToJSON = orderByToJSON;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (exports.BroadcastMode = BroadcastMode = {}));
exports.BroadcastModeSDKType = BroadcastMode;
exports.BroadcastModeAmino = BroadcastMode;
function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
exports.broadcastModeFromJSON = broadcastModeFromJSON;
function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.broadcastModeToJSON = broadcastModeToJSON;
function createBaseGetTxsEventRequest() {
    return {
        events: [],
        pagination: undefined,
        orderBy: 0
    };
}
exports.GetTxsEventRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
    aminoType: "cosmos-sdk/GetTxsEventRequest",
    is(o) {
        return o && (o.$typeUrl === exports.GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && (0, helpers_1.isSet)(o.orderBy));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && (0, helpers_1.isSet)(o.order_by));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && (0, helpers_1.isSet)(o.order_by));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderBy !== 0) {
            writer.uint32(24).int32(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderBy = reader.int32();
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
            events: Array.isArray(object?.events) ? object.events.map((e) => String(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            orderBy: (0, helpers_1.isSet)(object.orderBy) ? orderByFromJSON(object.orderBy) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.orderBy !== undefined && (obj.orderBy = orderByToJSON(message.orderBy));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventRequest();
        message.events = object.events?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.orderBy = object.orderBy ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => e) : [],
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined,
            orderBy: (0, helpers_1.isSet)(object.order_by) ? orderByFromJSON(object.order_by) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        message.orderBy !== undefined && (obj.order_by = orderByToJSON(message.orderBy));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetTxsEventRequest();
        message.events = object.events?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        if (object.order_by !== undefined && object.order_by !== null) {
            message.orderBy = orderByFromJSON(object.order_by);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        obj.order_by = orderByToJSON(message.orderBy);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxsEventRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventRequest",
            value: exports.GetTxsEventRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxsEventRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxsEventRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
            value: exports.GetTxsEventRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetTxsEventRequest.typeUrl, exports.GetTxsEventRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTxsEventRequest.aminoType, exports.GetTxsEventRequest.typeUrl);
function createBaseGetTxsEventResponse() {
    return {
        txs: [],
        txResponses: [],
        pagination: undefined
    };
}
exports.GetTxsEventResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
    aminoType: "cosmos-sdk/GetTxsEventResponse",
    is(o) {
        return o && (o.$typeUrl === exports.GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.Tx.is(o.txs[0])) && Array.isArray(o.txResponses) && (!o.txResponses.length || abci_1.TxResponse.is(o.txResponses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.Tx.isSDK(o.txs[0])) && Array.isArray(o.tx_responses) && (!o.tx_responses.length || abci_1.TxResponse.isSDK(o.tx_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.Tx.isAmino(o.txs[0])) && Array.isArray(o.tx_responses) && (!o.tx_responses.length || abci_1.TxResponse.isAmino(o.tx_responses[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.txResponses) {
            abci_1.TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.txResponses.push(abci_1.TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromJSON(e)) : [],
            txResponses: Array.isArray(object?.txResponses) ? object.txResponses.map((e) => abci_1.TxResponse.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.txResponses) {
            obj.txResponses = message.txResponses.map(e => e ? abci_1.TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.txResponses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventResponse();
        message.txs = object.txs?.map(e => tx_1.Tx.fromPartial(e)) || [];
        message.txResponses = object.txResponses?.map(e => abci_1.TxResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromSDK(e)) : [],
            txResponses: Array.isArray(object?.tx_responses) ? object.tx_responses.map((e) => abci_1.TxResponse.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toSDK(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.txResponses) {
            obj.tx_responses = message.txResponses.map(e => e ? abci_1.TxResponse.toSDK(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetTxsEventResponse();
        message.txs = object.txs?.map(e => tx_1.Tx.fromAmino(e)) || [];
        message.txResponses = object.tx_responses?.map(e => abci_1.TxResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.txResponses) {
            obj.tx_responses = message.txResponses.map(e => e ? abci_1.TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxsEventResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventResponse",
            value: exports.GetTxsEventResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxsEventResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxsEventResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
            value: exports.GetTxsEventResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetTxsEventResponse.typeUrl, exports.GetTxsEventResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTxsEventResponse.aminoType, exports.GetTxsEventResponse.typeUrl);
function createBaseBroadcastTxRequest() {
    return {
        txBytes: new Uint8Array(),
        mode: 0
    };
}
exports.BroadcastTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
    aminoType: "cosmos-sdk/BroadcastTxRequest",
    is(o) {
        return o && (o.$typeUrl === exports.BroadcastTxRequest.typeUrl || (o.txBytes instanceof Uint8Array || typeof o.txBytes === "string") && (0, helpers_1.isSet)(o.mode));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BroadcastTxRequest.typeUrl || (o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string") && (0, helpers_1.isSet)(o.mode));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BroadcastTxRequest.typeUrl || (o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string") && (0, helpers_1.isSet)(o.mode));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txBytes = reader.bytes();
                    break;
                case 2:
                    message.mode = reader.int32();
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
            txBytes: (0, helpers_1.isSet)(object.txBytes) ? (0, helpers_1.bytesFromBase64)(object.txBytes) : new Uint8Array(),
            mode: (0, helpers_1.isSet)(object.mode) ? broadcastModeFromJSON(object.mode) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.txBytes !== undefined && (obj.txBytes = (0, helpers_1.base64FromBytes)(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
        message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxRequest();
        message.txBytes = object.txBytes ?? new Uint8Array();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            txBytes: object?.tx_bytes,
            mode: (0, helpers_1.isSet)(object.mode) ? broadcastModeFromJSON(object.mode) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.tx_bytes = message.txBytes;
        message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBroadcastTxRequest();
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.txBytes = (0, helpers_1.bytesFromBase64)(object.tx_bytes);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = broadcastModeFromJSON(object.mode);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_bytes = message.txBytes ? (0, helpers_1.base64FromBytes)(message.txBytes) : undefined;
        obj.mode = broadcastModeToJSON(message.mode);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BroadcastTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxRequest",
            value: exports.BroadcastTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BroadcastTxRequest.decode(message.value);
    },
    toProto(message) {
        return exports.BroadcastTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
            value: exports.BroadcastTxRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BroadcastTxRequest.typeUrl, exports.BroadcastTxRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BroadcastTxRequest.aminoType, exports.BroadcastTxRequest.typeUrl);
function createBaseBroadcastTxResponse() {
    return {
        txResponse: undefined
    };
}
exports.BroadcastTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
    aminoType: "cosmos-sdk/BroadcastTxResponse",
    is(o) {
        return o && o.$typeUrl === exports.BroadcastTxResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.BroadcastTxResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.BroadcastTxResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.txResponse !== undefined) {
            abci_1.TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txResponse = abci_1.TxResponse.decode(reader, reader.uint32());
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
            txResponse: (0, helpers_1.isSet)(object.txResponse) ? abci_1.TxResponse.fromJSON(object.txResponse) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.txResponse !== undefined && (obj.txResponse = message.txResponse ? abci_1.TxResponse.toJSON(message.txResponse) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxResponse();
        message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? abci_1.TxResponse.fromPartial(object.txResponse) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            txResponse: object.tx_response ? abci_1.TxResponse.fromSDK(object.tx_response) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.txResponse !== undefined && (obj.tx_response = message.txResponse ? abci_1.TxResponse.toSDK(message.txResponse) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBroadcastTxResponse();
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.txResponse = abci_1.TxResponse.fromAmino(object.tx_response);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_response = message.txResponse ? abci_1.TxResponse.toAmino(message.txResponse) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BroadcastTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxResponse",
            value: exports.BroadcastTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BroadcastTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.BroadcastTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
            value: exports.BroadcastTxResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BroadcastTxResponse.typeUrl, exports.BroadcastTxResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BroadcastTxResponse.aminoType, exports.BroadcastTxResponse.typeUrl);
function createBaseSimulateRequest() {
    return {
        tx: undefined,
        txBytes: new Uint8Array()
    };
}
exports.SimulateRequest = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
    aminoType: "cosmos-sdk/SimulateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.SimulateRequest.typeUrl || o.txBytes instanceof Uint8Array || typeof o.txBytes === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SimulateRequest.typeUrl || o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SimulateRequest.typeUrl || o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txBytes.length !== 0) {
            writer.uint32(18).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txBytes = reader.bytes();
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
            tx: (0, helpers_1.isSet)(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            txBytes: (0, helpers_1.isSet)(object.txBytes) ? (0, helpers_1.bytesFromBase64)(object.txBytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.txBytes !== undefined && (obj.txBytes = (0, helpers_1.base64FromBytes)(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulateRequest();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.txBytes = object.txBytes ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            tx: object.tx ? tx_1.Tx.fromSDK(object.tx) : undefined,
            txBytes: object?.tx_bytes
        };
    },
    toSDK(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toSDK(message.tx) : undefined);
        obj.tx_bytes = message.txBytes;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSimulateRequest();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = tx_1.Tx.fromAmino(object.tx);
        }
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.txBytes = (0, helpers_1.bytesFromBase64)(object.tx_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? tx_1.Tx.toAmino(message.tx) : undefined;
        obj.tx_bytes = message.txBytes ? (0, helpers_1.base64FromBytes)(message.txBytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimulateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateRequest",
            value: exports.SimulateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SimulateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SimulateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
            value: exports.SimulateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SimulateRequest.typeUrl, exports.SimulateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SimulateRequest.aminoType, exports.SimulateRequest.typeUrl);
function createBaseSimulateResponse() {
    return {
        gasInfo: undefined,
        result: undefined
    };
}
exports.SimulateResponse = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
    aminoType: "cosmos-sdk/SimulateResponse",
    is(o) {
        return o && o.$typeUrl === exports.SimulateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.SimulateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.SimulateResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gasInfo !== undefined) {
            abci_1.GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            abci_1.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasInfo = abci_1.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = abci_1.Result.decode(reader, reader.uint32());
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
            gasInfo: (0, helpers_1.isSet)(object.gasInfo) ? abci_1.GasInfo.fromJSON(object.gasInfo) : undefined,
            result: (0, helpers_1.isSet)(object.result) ? abci_1.Result.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? abci_1.GasInfo.toJSON(message.gasInfo) : undefined);
        message.result !== undefined && (obj.result = message.result ? abci_1.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulateResponse();
        message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? abci_1.GasInfo.fromPartial(object.gasInfo) : undefined;
        message.result = object.result !== undefined && object.result !== null ? abci_1.Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            gasInfo: object.gas_info ? abci_1.GasInfo.fromSDK(object.gas_info) : undefined,
            result: object.result ? abci_1.Result.fromSDK(object.result) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.gasInfo !== undefined && (obj.gas_info = message.gasInfo ? abci_1.GasInfo.toSDK(message.gasInfo) : undefined);
        message.result !== undefined && (obj.result = message.result ? abci_1.Result.toSDK(message.result) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSimulateResponse();
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gasInfo = abci_1.GasInfo.fromAmino(object.gas_info);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = abci_1.Result.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gasInfo ? abci_1.GasInfo.toAmino(message.gasInfo) : undefined;
        obj.result = message.result ? abci_1.Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimulateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateResponse",
            value: exports.SimulateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SimulateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SimulateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
            value: exports.SimulateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SimulateResponse.typeUrl, exports.SimulateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SimulateResponse.aminoType, exports.SimulateResponse.typeUrl);
function createBaseGetTxRequest() {
    return {
        hash: ""
    };
}
exports.GetTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
    aminoType: "cosmos-sdk/GetTxRequest",
    is(o) {
        return o && (o.$typeUrl === exports.GetTxRequest.typeUrl || typeof o.hash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetTxRequest.typeUrl || typeof o.hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetTxRequest.typeUrl || typeof o.hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetTxRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxRequest",
            value: exports.GetTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
            value: exports.GetTxRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetTxRequest.typeUrl, exports.GetTxRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTxRequest.aminoType, exports.GetTxRequest.typeUrl);
function createBaseGetTxResponse() {
    return {
        tx: undefined,
        txResponse: undefined
    };
}
exports.GetTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
    aminoType: "cosmos-sdk/GetTxResponse",
    is(o) {
        return o && o.$typeUrl === exports.GetTxResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetTxResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetTxResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txResponse !== undefined) {
            abci_1.TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txResponse = abci_1.TxResponse.decode(reader, reader.uint32());
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
            tx: (0, helpers_1.isSet)(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            txResponse: (0, helpers_1.isSet)(object.txResponse) ? abci_1.TxResponse.fromJSON(object.txResponse) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.txResponse !== undefined && (obj.txResponse = message.txResponse ? abci_1.TxResponse.toJSON(message.txResponse) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? abci_1.TxResponse.fromPartial(object.txResponse) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            tx: object.tx ? tx_1.Tx.fromSDK(object.tx) : undefined,
            txResponse: object.tx_response ? abci_1.TxResponse.fromSDK(object.tx_response) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toSDK(message.tx) : undefined);
        message.txResponse !== undefined && (obj.tx_response = message.txResponse ? abci_1.TxResponse.toSDK(message.txResponse) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetTxResponse();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = tx_1.Tx.fromAmino(object.tx);
        }
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.txResponse = abci_1.TxResponse.fromAmino(object.tx_response);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? tx_1.Tx.toAmino(message.tx) : undefined;
        obj.tx_response = message.txResponse ? abci_1.TxResponse.toAmino(message.txResponse) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxResponse",
            value: exports.GetTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
            value: exports.GetTxResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetTxResponse.typeUrl, exports.GetTxResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTxResponse.aminoType, exports.GetTxResponse.typeUrl);
function createBaseGetBlockWithTxsRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
exports.GetBlockWithTxsRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
    aminoType: "cosmos-sdk/GetBlockWithTxsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetBlockWithTxsRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockWithTxsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockWithTxsRequest",
            value: exports.GetBlockWithTxsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockWithTxsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockWithTxsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
            value: exports.GetBlockWithTxsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetBlockWithTxsRequest.typeUrl, exports.GetBlockWithTxsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetBlockWithTxsRequest.aminoType, exports.GetBlockWithTxsRequest.typeUrl);
function createBaseGetBlockWithTxsResponse() {
    return {
        txs: [],
        blockId: undefined,
        block: undefined,
        pagination: undefined
    };
}
exports.GetBlockWithTxsResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
    aminoType: "cosmos-sdk/GetBlockWithTxsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.Tx.is(o.txs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.Tx.isSDK(o.txs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.Tx.isAmino(o.txs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockId !== undefined) {
            types_1.BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.blockId = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromJSON(e)) : [],
            blockId: (0, helpers_1.isSet)(object.blockId) ? types_1.BlockID.fromJSON(object.blockId) : undefined,
            block: (0, helpers_1.isSet)(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.blockId !== undefined && (obj.blockId = message.blockId ? types_1.BlockID.toJSON(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = object.txs?.map(e => tx_1.Tx.fromPartial(e)) || [];
        message.blockId = object.blockId !== undefined && object.blockId !== null ? types_1.BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? block_1.Block.fromPartial(object.block) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromSDK(e)) : [],
            blockId: object.block_id ? types_1.BlockID.fromSDK(object.block_id) : undefined,
            block: object.block ? block_1.Block.fromSDK(object.block) : undefined,
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toSDK(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.blockId !== undefined && (obj.block_id = message.blockId ? types_1.BlockID.toSDK(message.blockId) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toSDK(message.block) : undefined);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = object.txs?.map(e => tx_1.Tx.fromAmino(e)) || [];
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = types_1.BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = block_1.Block.fromAmino(object.block);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        obj.block_id = message.blockId ? types_1.BlockID.toAmino(message.blockId) : undefined;
        obj.block = message.block ? block_1.Block.toAmino(message.block) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockWithTxsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockWithTxsResponse",
            value: exports.GetBlockWithTxsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockWithTxsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockWithTxsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
            value: exports.GetBlockWithTxsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GetBlockWithTxsResponse.typeUrl, exports.GetBlockWithTxsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetBlockWithTxsResponse.aminoType, exports.GetBlockWithTxsResponse.typeUrl);
