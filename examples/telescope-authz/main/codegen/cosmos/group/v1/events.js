"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = void 0;
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseEventCreateGroup() {
    return {
        groupId: BigInt(0)
    };
}
exports.EventCreateGroup = {
    typeUrl: "/cosmos.group.v1.EventCreateGroup",
    aminoType: "cosmos-sdk/EventCreateGroup",
    is(o) {
        return o && (o.$typeUrl === exports.EventCreateGroup.typeUrl || typeof o.groupId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
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
            groupId: (0, helpers_1.isSet)(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            groupId: object?.group_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.groupId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroup",
            value: exports.EventCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventCreateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroup",
            value: exports.EventCreateGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventCreateGroup.typeUrl, exports.EventCreateGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventCreateGroup.aminoType, exports.EventCreateGroup.typeUrl);
function createBaseEventUpdateGroup() {
    return {
        groupId: BigInt(0)
    };
}
exports.EventUpdateGroup = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroup",
    aminoType: "cosmos-sdk/EventUpdateGroup",
    is(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroup.typeUrl || typeof o.groupId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
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
            groupId: (0, helpers_1.isSet)(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            groupId: object?.group_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.groupId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventUpdateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroup",
            value: exports.EventUpdateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventUpdateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroup",
            value: exports.EventUpdateGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventUpdateGroup.typeUrl, exports.EventUpdateGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventUpdateGroup.aminoType, exports.EventUpdateGroup.typeUrl);
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
    aminoType: "cosmos-sdk/EventCreateGroupPolicy",
    is(o) {
        return o && (o.$typeUrl === exports.EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventCreateGroupPolicy.typeUrl, exports.EventCreateGroupPolicy);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventCreateGroupPolicy.aminoType, exports.EventCreateGroupPolicy.typeUrl);
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventUpdateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
    aminoType: "cosmos-sdk/EventUpdateGroupPolicy",
    is(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventUpdateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventUpdateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventUpdateGroupPolicy.typeUrl, exports.EventUpdateGroupPolicy);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventUpdateGroupPolicy.aminoType, exports.EventUpdateGroupPolicy.typeUrl);
function createBaseEventSubmitProposal() {
    return {
        proposalId: BigInt(0)
    };
}
exports.EventSubmitProposal = {
    typeUrl: "/cosmos.group.v1.EventSubmitProposal",
    aminoType: "cosmos-sdk/EventSubmitProposal",
    is(o) {
        return o && (o.$typeUrl === exports.EventSubmitProposal.typeUrl || typeof o.proposalId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventSubmitProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventSubmitProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSubmitProposal",
            value: exports.EventSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.EventSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventSubmitProposal",
            value: exports.EventSubmitProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventSubmitProposal.typeUrl, exports.EventSubmitProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventSubmitProposal.aminoType, exports.EventSubmitProposal.typeUrl);
function createBaseEventWithdrawProposal() {
    return {
        proposalId: BigInt(0)
    };
}
exports.EventWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
    aminoType: "cosmos-sdk/EventWithdrawProposal",
    is(o) {
        return o && (o.$typeUrl === exports.EventWithdrawProposal.typeUrl || typeof o.proposalId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventWithdrawProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventWithdrawProposal",
            value: exports.EventWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return exports.EventWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
            value: exports.EventWithdrawProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventWithdrawProposal.typeUrl, exports.EventWithdrawProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventWithdrawProposal.aminoType, exports.EventWithdrawProposal.typeUrl);
function createBaseEventVote() {
    return {
        proposalId: BigInt(0)
    };
}
exports.EventVote = {
    typeUrl: "/cosmos.group.v1.EventVote",
    aminoType: "cosmos-sdk/EventVote",
    is(o) {
        return o && (o.$typeUrl === exports.EventVote.typeUrl || typeof o.proposalId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventVote.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventVote.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventVote",
            value: exports.EventVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventVote.decode(message.value);
    },
    toProto(message) {
        return exports.EventVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventVote",
            value: exports.EventVote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventVote.typeUrl, exports.EventVote);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventVote.aminoType, exports.EventVote.typeUrl);
function createBaseEventExec() {
    return {
        proposalId: BigInt(0),
        result: 0
    };
}
exports.EventExec = {
    typeUrl: "/cosmos.group.v1.EventExec",
    aminoType: "cosmos-sdk/EventExec",
    is(o) {
        return o && (o.$typeUrl === exports.EventExec.typeUrl || typeof o.proposalId === "bigint" && (0, helpers_1.isSet)(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventExec.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventExec.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.result = reader.int32();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
            result: (0, helpers_1.isSet)(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.result !== undefined && (obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.result = object.result ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            result: (0, helpers_1.isSet)(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        message.result !== undefined && (obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = (0, types_1.proposalExecutorResultFromJSON)(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventExec",
            value: exports.EventExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventExec.decode(message.value);
    },
    toProto(message) {
        return exports.EventExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventExec",
            value: exports.EventExec.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventExec.typeUrl, exports.EventExec);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventExec.aminoType, exports.EventExec.typeUrl);
function createBaseEventLeaveGroup() {
    return {
        groupId: BigInt(0),
        address: ""
    };
}
exports.EventLeaveGroup = {
    typeUrl: "/cosmos.group.v1.EventLeaveGroup",
    aminoType: "cosmos-sdk/EventLeaveGroup",
    is(o) {
        return o && (o.$typeUrl === exports.EventLeaveGroup.typeUrl || typeof o.groupId === "bigint" && typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventLeaveGroup.typeUrl || typeof o.group_id === "bigint" && typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventLeaveGroup.typeUrl || typeof o.group_id === "bigint" && typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
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
            groupId: (0, helpers_1.isSet)(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventLeaveGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            groupId: object?.group_id,
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.groupId;
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseEventLeaveGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventLeaveGroup",
            value: exports.EventLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventLeaveGroup",
            value: exports.EventLeaveGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventLeaveGroup.typeUrl, exports.EventLeaveGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventLeaveGroup.aminoType, exports.EventLeaveGroup.typeUrl);
