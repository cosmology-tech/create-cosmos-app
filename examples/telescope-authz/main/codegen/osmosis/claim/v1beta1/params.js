"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        airdropStartTime: new Date(),
        durationUntilDecay: duration_1.Duration.fromPartial({}),
        durationOfDecay: duration_1.Duration.fromPartial({}),
        claimDenom: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.claim.v1beta1.Params",
    aminoType: "osmosis/claim/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || timestamp_1.Timestamp.is(o.airdropStartTime) && duration_1.Duration.is(o.durationUntilDecay) && duration_1.Duration.is(o.durationOfDecay) && typeof o.claimDenom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || timestamp_1.Timestamp.isSDK(o.airdrop_start_time) && duration_1.Duration.isSDK(o.duration_until_decay) && duration_1.Duration.isSDK(o.duration_of_decay) && typeof o.claim_denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || timestamp_1.Timestamp.isAmino(o.airdrop_start_time) && duration_1.Duration.isAmino(o.duration_until_decay) && duration_1.Duration.isAmino(o.duration_of_decay) && typeof o.claim_denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.airdropStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.durationUntilDecay !== undefined) {
            duration_1.Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
        }
        if (message.durationOfDecay !== undefined) {
            duration_1.Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
        }
        if (message.claimDenom !== "") {
            writer.uint32(34).string(message.claimDenom);
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
                    message.airdropStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.durationUntilDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.durationOfDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimDenom = reader.string();
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
            airdropStartTime: (0, helpers_1.isSet)(object.airdropStartTime) ? new Date(object.airdropStartTime) : undefined,
            durationUntilDecay: (0, helpers_1.isSet)(object.durationUntilDecay) ? duration_1.Duration.fromJSON(object.durationUntilDecay) : undefined,
            durationOfDecay: (0, helpers_1.isSet)(object.durationOfDecay) ? duration_1.Duration.fromJSON(object.durationOfDecay) : undefined,
            claimDenom: (0, helpers_1.isSet)(object.claimDenom) ? String(object.claimDenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
        message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? duration_1.Duration.toJSON(message.durationUntilDecay) : undefined);
        message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? duration_1.Duration.toJSON(message.durationOfDecay) : undefined);
        message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.airdropStartTime = object.airdropStartTime ?? undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? duration_1.Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? duration_1.Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            airdropStartTime: object.airdrop_start_time ?? undefined,
            durationUntilDecay: object.duration_until_decay ? duration_1.Duration.fromSDK(object.duration_until_decay) : undefined,
            durationOfDecay: object.duration_of_decay ? duration_1.Duration.fromSDK(object.duration_of_decay) : undefined,
            claimDenom: object?.claim_denom
        };
    },
    toSDK(message) {
        const obj = {};
        message.airdropStartTime !== undefined && (obj.airdrop_start_time = message.airdropStartTime ?? undefined);
        message.durationUntilDecay !== undefined && (obj.duration_until_decay = message.durationUntilDecay ? duration_1.Duration.toSDK(message.durationUntilDecay) : undefined);
        message.durationOfDecay !== undefined && (obj.duration_of_decay = message.durationOfDecay ? duration_1.Duration.toSDK(message.durationOfDecay) : undefined);
        obj.claim_denom = message.claimDenom;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
            message.airdropStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.airdrop_start_time));
        }
        if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
            message.durationUntilDecay = duration_1.Duration.fromAmino(object.duration_until_decay);
        }
        if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
            message.durationOfDecay = duration_1.Duration.fromAmino(object.duration_of_decay);
        }
        if (object.claim_denom !== undefined && object.claim_denom !== null) {
            message.claimDenom = object.claim_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.airdrop_start_time = message.airdropStartTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.airdropStartTime)) : undefined;
        obj.duration_until_decay = message.durationUntilDecay ? duration_1.Duration.toAmino(message.durationUntilDecay) : undefined;
        obj.duration_of_decay = message.durationOfDecay ? duration_1.Duration.toAmino(message.durationOfDecay) : undefined;
        obj.claim_denom = message.claimDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/params",
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
            typeUrl: "/osmosis.claim.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
