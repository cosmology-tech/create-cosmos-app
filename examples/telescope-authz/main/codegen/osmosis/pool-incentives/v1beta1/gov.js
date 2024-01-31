"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePoolIncentivesProposal = exports.ReplacePoolIncentivesProposal = void 0;
const incentives_1 = require("./incentives");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseReplacePoolIncentivesProposal() {
    return {
        $typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
        title: "",
        description: "",
        records: []
    };
}
exports.ReplacePoolIncentivesProposal = {
    typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
    aminoType: "osmosis/poolincentives/replace-pool-incentives-proposal",
    is(o) {
        return o && (o.$typeUrl === exports.ReplacePoolIncentivesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || incentives_1.DistrRecord.is(o.records[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ReplacePoolIncentivesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || incentives_1.DistrRecord.isSDK(o.records[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ReplacePoolIncentivesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || incentives_1.DistrRecord.isAmino(o.records[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            incentives_1.DistrRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReplacePoolIncentivesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.records.push(incentives_1.DistrRecord.decode(reader, reader.uint32()));
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            records: Array.isArray(object?.records) ? object.records.map((e) => incentives_1.DistrRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.records) {
            obj.records = message.records.map(e => e ? incentives_1.DistrRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReplacePoolIncentivesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map(e => incentives_1.DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            records: Array.isArray(object?.records) ? object.records.map((e) => incentives_1.DistrRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? incentives_1.DistrRecord.toSDK(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseReplacePoolIncentivesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.records = object.records?.map(e => incentives_1.DistrRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? incentives_1.DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ReplacePoolIncentivesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/replace-pool-incentives-proposal",
            value: exports.ReplacePoolIncentivesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ReplacePoolIncentivesProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ReplacePoolIncentivesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
            value: exports.ReplacePoolIncentivesProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ReplacePoolIncentivesProposal.typeUrl, exports.ReplacePoolIncentivesProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ReplacePoolIncentivesProposal.aminoType, exports.ReplacePoolIncentivesProposal.typeUrl);
function createBaseUpdatePoolIncentivesProposal() {
    return {
        $typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
        title: "",
        description: "",
        records: []
    };
}
exports.UpdatePoolIncentivesProposal = {
    typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
    aminoType: "osmosis/poolincentives/update-pool-incentives-proposal",
    is(o) {
        return o && (o.$typeUrl === exports.UpdatePoolIncentivesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || incentives_1.DistrRecord.is(o.records[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UpdatePoolIncentivesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || incentives_1.DistrRecord.isSDK(o.records[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpdatePoolIncentivesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || incentives_1.DistrRecord.isAmino(o.records[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            incentives_1.DistrRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePoolIncentivesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.records.push(incentives_1.DistrRecord.decode(reader, reader.uint32()));
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            records: Array.isArray(object?.records) ? object.records.map((e) => incentives_1.DistrRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.records) {
            obj.records = message.records.map(e => e ? incentives_1.DistrRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdatePoolIncentivesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map(e => incentives_1.DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            records: Array.isArray(object?.records) ? object.records.map((e) => incentives_1.DistrRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? incentives_1.DistrRecord.toSDK(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpdatePoolIncentivesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.records = object.records?.map(e => incentives_1.DistrRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? incentives_1.DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdatePoolIncentivesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/update-pool-incentives-proposal",
            value: exports.UpdatePoolIncentivesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdatePoolIncentivesProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdatePoolIncentivesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
            value: exports.UpdatePoolIncentivesProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpdatePoolIncentivesProposal.typeUrl, exports.UpdatePoolIncentivesProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpdatePoolIncentivesProposal.aminoType, exports.UpdatePoolIncentivesProposal.typeUrl);
