"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = void 0;
const duration_1 = require("../../../google/protobuf/duration");
const twap_record_1 = require("./twap_record");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        pruneEpochIdentifier: "",
        recordHistoryKeepPeriod: duration_1.Duration.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/osmosis.twap.v1beta1.Params",
    aminoType: "osmosis/twap/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.pruneEpochIdentifier === "string" && duration_1.Duration.is(o.recordHistoryKeepPeriod));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.prune_epoch_identifier === "string" && duration_1.Duration.isSDK(o.record_history_keep_period));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.prune_epoch_identifier === "string" && duration_1.Duration.isAmino(o.record_history_keep_period));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pruneEpochIdentifier !== "") {
            writer.uint32(10).string(message.pruneEpochIdentifier);
        }
        if (message.recordHistoryKeepPeriod !== undefined) {
            duration_1.Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruneEpochIdentifier = reader.string();
                    break;
                case 2:
                    message.recordHistoryKeepPeriod = duration_1.Duration.decode(reader, reader.uint32());
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
            pruneEpochIdentifier: (0, helpers_1.isSet)(object.pruneEpochIdentifier) ? String(object.pruneEpochIdentifier) : "",
            recordHistoryKeepPeriod: (0, helpers_1.isSet)(object.recordHistoryKeepPeriod) ? duration_1.Duration.fromJSON(object.recordHistoryKeepPeriod) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pruneEpochIdentifier !== undefined && (obj.pruneEpochIdentifier = message.pruneEpochIdentifier);
        message.recordHistoryKeepPeriod !== undefined && (obj.recordHistoryKeepPeriod = message.recordHistoryKeepPeriod ? duration_1.Duration.toJSON(message.recordHistoryKeepPeriod) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.pruneEpochIdentifier = object.pruneEpochIdentifier ?? "";
        message.recordHistoryKeepPeriod = object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null ? duration_1.Duration.fromPartial(object.recordHistoryKeepPeriod) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pruneEpochIdentifier: object?.prune_epoch_identifier,
            recordHistoryKeepPeriod: object.record_history_keep_period ? duration_1.Duration.fromSDK(object.record_history_keep_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.pruneEpochIdentifier;
        message.recordHistoryKeepPeriod !== undefined && (obj.record_history_keep_period = message.recordHistoryKeepPeriod ? duration_1.Duration.toSDK(message.recordHistoryKeepPeriod) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.prune_epoch_identifier !== undefined && object.prune_epoch_identifier !== null) {
            message.pruneEpochIdentifier = object.prune_epoch_identifier;
        }
        if (object.record_history_keep_period !== undefined && object.record_history_keep_period !== null) {
            message.recordHistoryKeepPeriod = duration_1.Duration.fromAmino(object.record_history_keep_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.pruneEpochIdentifier;
        obj.record_history_keep_period = message.recordHistoryKeepPeriod ? duration_1.Duration.toAmino(message.recordHistoryKeepPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseGenesisState() {
    return {
        twaps: [],
        params: exports.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.twap.v1beta1.GenesisState",
    aminoType: "osmosis/twap/genesis-state",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.twaps) && (!o.twaps.length || twap_record_1.TwapRecord.is(o.twaps[0])) && exports.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.twaps) && (!o.twaps.length || twap_record_1.TwapRecord.isSDK(o.twaps[0])) && exports.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.twaps) && (!o.twaps.length || twap_record_1.TwapRecord.isAmino(o.twaps[0])) && exports.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.twaps) {
            twap_record_1.TwapRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.twaps.push(twap_record_1.TwapRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = exports.Params.decode(reader, reader.uint32());
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
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => twap_record_1.TwapRecord.fromJSON(e)) : [],
            params: (0, helpers_1.isSet)(object.params) ? exports.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? twap_record_1.TwapRecord.toJSON(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map(e => twap_record_1.TwapRecord.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => twap_record_1.TwapRecord.fromSDK(e)) : [],
            params: object.params ? exports.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? twap_record_1.TwapRecord.toSDK(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        message.params !== undefined && (obj.params = message.params ? exports.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map(e => twap_record_1.TwapRecord.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? twap_record_1.TwapRecord.toAmino(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
