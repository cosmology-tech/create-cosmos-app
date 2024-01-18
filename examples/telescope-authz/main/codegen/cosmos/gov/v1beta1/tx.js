"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgVoteWeightedResponse = exports.MsgVoteWeighted = exports.MsgVoteResponse = exports.MsgVote = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = void 0;
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../base/v1beta1/coin");
const gov_1 = require("./gov");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgSubmitProposal() {
    return {
        content: undefined,
        initialDeposit: [],
        proposer: ""
    };
}
exports.MsgSubmitProposal = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    aminoType: "cosmos-sdk/MsgSubmitProposal",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposal.typeUrl || Array.isArray(o.initialDeposit) && (!o.initialDeposit.length || coin_1.Coin.is(o.initialDeposit[0])) && typeof o.proposer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposal.typeUrl || Array.isArray(o.initial_deposit) && (!o.initial_deposit.length || coin_1.Coin.isSDK(o.initial_deposit[0])) && typeof o.proposer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposal.typeUrl || Array.isArray(o.initial_deposit) && (!o.initial_deposit.length || coin_1.Coin.isAmino(o.initial_deposit[0])) && typeof o.proposer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.content !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.content), writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initialDeposit) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 2:
                    message.initialDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.proposer = reader.string();
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
            content: (0, helpers_1.isSet)(object.content) ? registry_1.GlobalDecoderRegistry.fromJSON(object.content) : undefined,
            initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            proposer: (0, helpers_1.isSet)(object.proposer) ? String(object.proposer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content ? registry_1.GlobalDecoderRegistry.toJSON(message.content) : undefined);
        if (message.initialDeposit) {
            obj.initialDeposit = message.initialDeposit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.initialDeposit = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.content = object.content !== undefined && object.content !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.content) : undefined;
        message.initialDeposit = object.initialDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            content: object.content ? registry_1.GlobalDecoderRegistry.fromSDK(object.content) : undefined,
            initialDeposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            proposer: object?.proposer
        };
    },
    toSDK(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content ? registry_1.GlobalDecoderRegistry.toSDK(message.content) : undefined);
        if (message.initialDeposit) {
            obj.initial_deposit = message.initialDeposit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        obj.proposer = message.proposer;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposal();
        if (object.content !== undefined && object.content !== null) {
            message.content = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.content);
        }
        message.initialDeposit = object.initial_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = object.proposer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content = message.content ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.content) : undefined;
        if (message.initialDeposit) {
            obj.initial_deposit = message.initialDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        obj.proposer = message.proposer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposal",
            value: exports.MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
            value: exports.MsgSubmitProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitProposal.typeUrl, exports.MsgSubmitProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitProposal.aminoType, exports.MsgSubmitProposal.typeUrl);
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: BigInt(0)
    };
}
exports.MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
    aminoType: "cosmos-sdk/MsgSubmitProposalResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposalResponse.typeUrl || typeof o.proposalId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
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
        const message = createBaseMsgSubmitProposalResponse();
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
        const message = createBaseMsgSubmitProposalResponse();
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
        const message = createBaseMsgSubmitProposalResponse();
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
        return exports.MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitProposalResponse.typeUrl, exports.MsgSubmitProposalResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitProposalResponse.aminoType, exports.MsgSubmitProposalResponse.typeUrl);
function createBaseMsgVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0
    };
}
exports.MsgVote = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    aminoType: "cosmos-sdk/MsgVote",
    is(o) {
        return o && (o.$typeUrl === exports.MsgVote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
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
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            option: (0, helpers_1.isSet)(object.option) ? (0, gov_1.voteOptionFromJSON)(object.option) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = (0, gov_1.voteOptionToJSON)(message.option));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            voter: object?.voter,
            option: (0, helpers_1.isSet)(object.option) ? (0, gov_1.voteOptionFromJSON)(object.option) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        obj.voter = message.voter;
        message.option !== undefined && (obj.option = (0, gov_1.voteOptionToJSON)(message.option));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = (0, gov_1.voteOptionFromJSON)(object.option);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        obj.option = (0, gov_1.voteOptionToJSON)(message.option);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVote",
            value: exports.MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVote.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: exports.MsgVote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVote.typeUrl, exports.MsgVote);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVote.aminoType, exports.MsgVote.typeUrl);
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
    aminoType: "cosmos-sdk/MsgVoteResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgVoteResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgVoteResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgVoteResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
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
        const message = createBaseMsgVoteResponse();
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
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteResponse",
            value: exports.MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
            value: exports.MsgVoteResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVoteResponse.typeUrl, exports.MsgVoteResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVoteResponse.aminoType, exports.MsgVoteResponse.typeUrl);
function createBaseMsgVoteWeighted() {
    return {
        proposalId: BigInt(0),
        voter: "",
        options: []
    };
}
exports.MsgVoteWeighted = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
    aminoType: "cosmos-sdk/MsgVoteWeighted",
    is(o) {
        return o && (o.$typeUrl === exports.MsgVoteWeighted.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || gov_1.WeightedVoteOption.is(o.options[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgVoteWeighted.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || gov_1.WeightedVoteOption.isSDK(o.options[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgVoteWeighted.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || gov_1.WeightedVoteOption.isAmino(o.options[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            gov_1.WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeighted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.options.push(gov_1.WeightedVoteOption.decode(reader, reader.uint32()));
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
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            options: Array.isArray(object?.options) ? object.options.map((e) => gov_1.WeightedVoteOption.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteWeighted();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => gov_1.WeightedVoteOption.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            voter: object?.voter,
            options: Array.isArray(object?.options) ? object.options.map((e) => gov_1.WeightedVoteOption.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toSDK(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgVoteWeighted();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        message.options = object.options?.map(e => gov_1.WeightedVoteOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeighted.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteWeighted",
            value: exports.MsgVoteWeighted.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeighted.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeighted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
            value: exports.MsgVoteWeighted.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVoteWeighted.typeUrl, exports.MsgVoteWeighted);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVoteWeighted.aminoType, exports.MsgVoteWeighted.typeUrl);
function createBaseMsgVoteWeightedResponse() {
    return {};
}
exports.MsgVoteWeightedResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
    aminoType: "cosmos-sdk/MsgVoteWeightedResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgVoteWeightedResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgVoteWeightedResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgVoteWeightedResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeightedResponse();
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
        const message = createBaseMsgVoteWeightedResponse();
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
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeightedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeightedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeightedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVoteWeightedResponse.typeUrl, exports.MsgVoteWeightedResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVoteWeightedResponse.aminoType, exports.MsgVoteWeightedResponse.typeUrl);
function createBaseMsgDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.MsgDeposit = {
    typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
    aminoType: "cosmos-sdk/MsgDeposit",
    is(o) {
        return o && (o.$typeUrl === exports.MsgDeposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgDeposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgDeposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            depositor: object?.depositor,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgDeposit();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDeposit",
            value: exports.MsgDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: exports.MsgDeposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDeposit.typeUrl, exports.MsgDeposit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDeposit.aminoType, exports.MsgDeposit.typeUrl);
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
    aminoType: "cosmos-sdk/MsgDepositResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgDepositResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgDepositResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgDepositResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
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
        const message = createBaseMsgDepositResponse();
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
        const message = createBaseMsgDepositResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDepositResponse",
            value: exports.MsgDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
            value: exports.MsgDepositResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDepositResponse.typeUrl, exports.MsgDepositResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDepositResponse.aminoType, exports.MsgDepositResponse.typeUrl);
