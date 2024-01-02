"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCurrentEpochResponse = exports.QueryCurrentEpochRequest = exports.QueryEpochsInfoResponse = exports.QueryEpochsInfoRequest = void 0;
const genesis_1 = require("./genesis");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseQueryEpochsInfoRequest() {
    return {};
}
exports.QueryEpochsInfoRequest = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest",
    aminoType: "osmosis/epochs/query-epochs-info-request",
    is(o) {
        return o && o.$typeUrl === exports.QueryEpochsInfoRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryEpochsInfoRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryEpochsInfoRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoRequest();
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
        const message = createBaseQueryEpochsInfoRequest();
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
        const message = createBaseQueryEpochsInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochsInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-epochs-info-request",
            value: exports.QueryEpochsInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEpochsInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochsInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest",
            value: exports.QueryEpochsInfoRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEpochsInfoRequest.typeUrl, exports.QueryEpochsInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryEpochsInfoRequest.aminoType, exports.QueryEpochsInfoRequest.typeUrl);
function createBaseQueryEpochsInfoResponse() {
    return {
        epochs: []
    };
}
exports.QueryEpochsInfoResponse = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse",
    aminoType: "osmosis/epochs/query-epochs-info-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEpochsInfoResponse.typeUrl || Array.isArray(o.epochs) && (!o.epochs.length || genesis_1.EpochInfo.is(o.epochs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEpochsInfoResponse.typeUrl || Array.isArray(o.epochs) && (!o.epochs.length || genesis_1.EpochInfo.isSDK(o.epochs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEpochsInfoResponse.typeUrl || Array.isArray(o.epochs) && (!o.epochs.length || genesis_1.EpochInfo.isAmino(o.epochs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.epochs) {
            genesis_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochs.push(genesis_1.EpochInfo.decode(reader, reader.uint32()));
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
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => genesis_1.EpochInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? genesis_1.EpochInfo.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map(e => genesis_1.EpochInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => genesis_1.EpochInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? genesis_1.EpochInfo.toSDK(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map(e => genesis_1.EpochInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? genesis_1.EpochInfo.toAmino(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochsInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-epochs-info-response",
            value: exports.QueryEpochsInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEpochsInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochsInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse",
            value: exports.QueryEpochsInfoResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEpochsInfoResponse.typeUrl, exports.QueryEpochsInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryEpochsInfoResponse.aminoType, exports.QueryEpochsInfoResponse.typeUrl);
function createBaseQueryCurrentEpochRequest() {
    return {
        identifier: ""
    };
}
exports.QueryCurrentEpochRequest = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest",
    aminoType: "osmosis/epochs/query-current-epoch-request",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCurrentEpochRequest.typeUrl || typeof o.identifier === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCurrentEpochRequest.typeUrl || typeof o.identifier === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCurrentEpochRequest.typeUrl || typeof o.identifier === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
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
            identifier: (0, helpers_1.isSet)(object.identifier) ? String(object.identifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochRequest();
        message.identifier = object.identifier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            identifier: object?.identifier
        };
    },
    toSDK(message) {
        const obj = {};
        obj.identifier = message.identifier;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentEpochRequest();
        if (object.identifier !== undefined && object.identifier !== null) {
            message.identifier = object.identifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentEpochRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-current-epoch-request",
            value: exports.QueryCurrentEpochRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentEpochRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentEpochRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest",
            value: exports.QueryCurrentEpochRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCurrentEpochRequest.typeUrl, exports.QueryCurrentEpochRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCurrentEpochRequest.aminoType, exports.QueryCurrentEpochRequest.typeUrl);
function createBaseQueryCurrentEpochResponse() {
    return {
        currentEpoch: BigInt(0)
    };
}
exports.QueryCurrentEpochResponse = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse",
    aminoType: "osmosis/epochs/query-current-epoch-response",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCurrentEpochResponse.typeUrl || typeof o.currentEpoch === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCurrentEpochResponse.typeUrl || typeof o.current_epoch === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCurrentEpochResponse.typeUrl || typeof o.current_epoch === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.currentEpoch !== BigInt(0)) {
            writer.uint32(8).int64(message.currentEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentEpoch = reader.int64();
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
            currentEpoch: (0, helpers_1.isSet)(object.currentEpoch) ? BigInt(object.currentEpoch.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochResponse();
        message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            currentEpoch: object?.current_epoch
        };
    },
    toSDK(message) {
        const obj = {};
        obj.current_epoch = message.currentEpoch;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentEpochResponse();
        if (object.current_epoch !== undefined && object.current_epoch !== null) {
            message.currentEpoch = BigInt(object.current_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentEpochResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-current-epoch-response",
            value: exports.QueryCurrentEpochResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentEpochResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentEpochResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse",
            value: exports.QueryCurrentEpochResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCurrentEpochResponse.typeUrl, exports.QueryCurrentEpochResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCurrentEpochResponse.aminoType, exports.QueryCurrentEpochResponse.typeUrl);
