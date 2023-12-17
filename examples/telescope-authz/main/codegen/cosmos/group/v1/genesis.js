"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        groupSeq: BigInt(0),
        groups: [],
        groupMembers: [],
        groupPolicySeq: BigInt(0),
        groupPolicies: [],
        proposalSeq: BigInt(0),
        proposals: [],
        votes: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.group.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.groupSeq === "bigint" && Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.is(o.groups[0])) && Array.isArray(o.groupMembers) && (!o.groupMembers.length || types_1.GroupMember.is(o.groupMembers[0])) && typeof o.groupPolicySeq === "bigint" && Array.isArray(o.groupPolicies) && (!o.groupPolicies.length || types_1.GroupPolicyInfo.is(o.groupPolicies[0])) && typeof o.proposalSeq === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || types_1.Proposal.is(o.proposals[0])) && Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.is(o.votes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.group_seq === "bigint" && Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.isSDK(o.groups[0])) && Array.isArray(o.group_members) && (!o.group_members.length || types_1.GroupMember.isSDK(o.group_members[0])) && typeof o.group_policy_seq === "bigint" && Array.isArray(o.group_policies) && (!o.group_policies.length || types_1.GroupPolicyInfo.isSDK(o.group_policies[0])) && typeof o.proposal_seq === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || types_1.Proposal.isSDK(o.proposals[0])) && Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.isSDK(o.votes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.group_seq === "bigint" && Array.isArray(o.groups) && (!o.groups.length || types_1.GroupInfo.isAmino(o.groups[0])) && Array.isArray(o.group_members) && (!o.group_members.length || types_1.GroupMember.isAmino(o.group_members[0])) && typeof o.group_policy_seq === "bigint" && Array.isArray(o.group_policies) && (!o.group_policies.length || types_1.GroupPolicyInfo.isAmino(o.group_policies[0])) && typeof o.proposal_seq === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || types_1.Proposal.isAmino(o.proposals[0])) && Array.isArray(o.votes) && (!o.votes.length || types_1.Vote.isAmino(o.votes[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupSeq !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.groupMembers) {
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.groupPolicySeq !== BigInt(0)) {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        for (const v of message.groupPolicies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposalSeq !== BigInt(0)) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
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
                    message.groupSeq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMembers.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.groupPolicySeq = reader.uint64();
                    break;
                case 5:
                    message.groupPolicies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposalSeq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
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
            groupSeq: (0, helpers_1.isSet)(object.groupSeq) ? BigInt(object.groupSeq.toString()) : BigInt(0),
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            groupMembers: Array.isArray(object?.groupMembers) ? object.groupMembers.map((e) => types_1.GroupMember.fromJSON(e)) : [],
            groupPolicySeq: (0, helpers_1.isSet)(object.groupPolicySeq) ? BigInt(object.groupPolicySeq.toString()) : BigInt(0),
            groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e) => types_1.GroupPolicyInfo.fromJSON(e)) : [],
            proposalSeq: (0, helpers_1.isSet)(object.proposalSeq) ? BigInt(object.proposalSeq.toString()) : BigInt(0),
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupSeq !== undefined && (obj.groupSeq = (message.groupSeq || BigInt(0)).toString());
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.groupMembers) {
            obj.groupMembers = message.groupMembers.map(e => e ? types_1.GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.groupMembers = [];
        }
        message.groupPolicySeq !== undefined && (obj.groupPolicySeq = (message.groupPolicySeq || BigInt(0)).toString());
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.groupPolicies = [];
        }
        message.proposalSeq !== undefined && (obj.proposalSeq = (message.proposalSeq || BigInt(0)).toString());
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? BigInt(object.groupSeq.toString()) : BigInt(0);
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.groupMembers = object.groupMembers?.map(e => types_1.GroupMember.fromPartial(e)) || [];
        message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? BigInt(object.groupPolicySeq.toString()) : BigInt(0);
        message.groupPolicies = object.groupPolicies?.map(e => types_1.GroupPolicyInfo.fromPartial(e)) || [];
        message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? BigInt(object.proposalSeq.toString()) : BigInt(0);
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            groupSeq: object?.group_seq,
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromSDK(e)) : [],
            groupMembers: Array.isArray(object?.group_members) ? object.group_members.map((e) => types_1.GroupMember.fromSDK(e)) : [],
            groupPolicySeq: object?.group_policy_seq,
            groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromSDK(e)) : [],
            proposalSeq: object?.proposal_seq,
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromSDK(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_seq = message.groupSeq;
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toSDK(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.groupMembers) {
            obj.group_members = message.groupMembers.map(e => e ? types_1.GroupMember.toSDK(e) : undefined);
        }
        else {
            obj.group_members = [];
        }
        obj.group_policy_seq = message.groupPolicySeq;
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toSDK(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.proposal_seq = message.proposalSeq;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toSDK(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.group_seq !== undefined && object.group_seq !== null) {
            message.groupSeq = BigInt(object.group_seq);
        }
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromAmino(e)) || [];
        message.groupMembers = object.group_members?.map(e => types_1.GroupMember.fromAmino(e)) || [];
        if (object.group_policy_seq !== undefined && object.group_policy_seq !== null) {
            message.groupPolicySeq = BigInt(object.group_policy_seq);
        }
        message.groupPolicies = object.group_policies?.map(e => types_1.GroupPolicyInfo.fromAmino(e)) || [];
        if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
            message.proposalSeq = BigInt(object.proposal_seq);
        }
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromAmino(e)) || [];
        message.votes = object.votes?.map(e => types_1.Vote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_seq = message.groupSeq ? message.groupSeq.toString() : undefined;
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.groupMembers) {
            obj.group_members = message.groupMembers.map(e => e ? types_1.GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.group_members = [];
        }
        obj.group_policy_seq = message.groupPolicySeq ? message.groupPolicySeq.toString() : undefined;
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? types_1.GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.proposal_seq = message.proposalSeq ? message.proposalSeq.toString() : undefined;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/cosmos.group.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
