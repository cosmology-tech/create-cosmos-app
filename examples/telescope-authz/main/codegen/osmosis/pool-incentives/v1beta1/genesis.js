"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const incentives_1 = require("./incentives");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: incentives_1.Params.fromPartial({}),
        lockableDurations: [],
        distrInfo: undefined,
        poolToGauges: undefined
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
    aminoType: "osmosis/poolincentives/genesis-state",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || incentives_1.Params.is(o.params) && Array.isArray(o.lockableDurations) && (!o.lockableDurations.length || duration_1.Duration.is(o.lockableDurations[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || incentives_1.Params.isSDK(o.params) && Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || duration_1.Duration.isSDK(o.lockable_durations[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || incentives_1.Params.isAmino(o.params) && Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || duration_1.Duration.isAmino(o.lockable_durations[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distrInfo !== undefined) {
            incentives_1.DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.poolToGauges !== undefined) {
            incentives_1.PoolToGauges.encode(message.poolToGauges, writer.uint32(34).fork()).ldelim();
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
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distrInfo = incentives_1.DistrInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.poolToGauges = incentives_1.PoolToGauges.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? incentives_1.Params.fromJSON(object.params) : undefined,
            lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e) => duration_1.Duration.fromJSON(e)) : [],
            distrInfo: (0, helpers_1.isSet)(object.distrInfo) ? incentives_1.DistrInfo.fromJSON(object.distrInfo) : undefined,
            poolToGauges: (0, helpers_1.isSet)(object.poolToGauges) ? incentives_1.PoolToGauges.fromJSON(object.poolToGauges) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toJSON(message.params) : undefined);
        if (message.lockableDurations) {
            obj.lockableDurations = message.lockableDurations.map(e => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockableDurations = [];
        }
        message.distrInfo !== undefined && (obj.distrInfo = message.distrInfo ? incentives_1.DistrInfo.toJSON(message.distrInfo) : undefined);
        message.poolToGauges !== undefined && (obj.poolToGauges = message.poolToGauges ? incentives_1.PoolToGauges.toJSON(message.poolToGauges) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? incentives_1.Params.fromPartial(object.params) : undefined;
        message.lockableDurations = object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? incentives_1.DistrInfo.fromPartial(object.distrInfo) : undefined;
        message.poolToGauges = object.poolToGauges !== undefined && object.poolToGauges !== null ? incentives_1.PoolToGauges.fromPartial(object.poolToGauges) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? incentives_1.Params.fromSDK(object.params) : undefined,
            lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromSDK(e)) : [],
            distrInfo: object.distr_info ? incentives_1.DistrInfo.fromSDK(object.distr_info) : undefined,
            poolToGauges: object.pool_to_gauges ? incentives_1.PoolToGauges.fromSDK(object.pool_to_gauges) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toSDK(message.params) : undefined);
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        message.distrInfo !== undefined && (obj.distr_info = message.distrInfo ? incentives_1.DistrInfo.toSDK(message.distrInfo) : undefined);
        message.poolToGauges !== undefined && (obj.pool_to_gauges = message.poolToGauges ? incentives_1.PoolToGauges.toSDK(message.poolToGauges) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = incentives_1.Params.fromAmino(object.params);
        }
        message.lockableDurations = object.lockable_durations?.map(e => duration_1.Duration.fromAmino(e)) || [];
        if (object.distr_info !== undefined && object.distr_info !== null) {
            message.distrInfo = incentives_1.DistrInfo.fromAmino(object.distr_info);
        }
        if (object.pool_to_gauges !== undefined && object.pool_to_gauges !== null) {
            message.poolToGauges = incentives_1.PoolToGauges.fromAmino(object.pool_to_gauges);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? incentives_1.Params.toAmino(message.params) : undefined;
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        obj.distr_info = message.distrInfo ? incentives_1.DistrInfo.toAmino(message.distrInfo) : undefined;
        obj.pool_to_gauges = message.poolToGauges ? incentives_1.PoolToGauges.toAmino(message.poolToGauges) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/genesis-state",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
