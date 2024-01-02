"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const gov_1 = require("./gov");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        startingProposalId: BigInt(0),
        deposits: [],
        votes: [],
        proposals: [],
        depositParams: gov_1.DepositParams.fromPartial({}),
        votingParams: gov_1.VotingParams.fromPartial({}),
        tallyParams: gov_1.TallyParams.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.gov.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.startingProposalId === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || gov_1.Deposit.is(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || gov_1.Vote.is(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || gov_1.Proposal.is(o.proposals[0])) && gov_1.DepositParams.is(o.depositParams) && gov_1.VotingParams.is(o.votingParams) && gov_1.TallyParams.is(o.tallyParams));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.starting_proposal_id === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || gov_1.Deposit.isSDK(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || gov_1.Vote.isSDK(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || gov_1.Proposal.isSDK(o.proposals[0])) && gov_1.DepositParams.isSDK(o.deposit_params) && gov_1.VotingParams.isSDK(o.voting_params) && gov_1.TallyParams.isSDK(o.tally_params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || typeof o.starting_proposal_id === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || gov_1.Deposit.isAmino(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || gov_1.Vote.isAmino(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || gov_1.Proposal.isAmino(o.proposals[0])) && gov_1.DepositParams.isAmino(o.deposit_params) && gov_1.VotingParams.isAmino(o.voting_params) && gov_1.TallyParams.isAmino(o.tally_params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.startingProposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
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
                    message.startingProposalId = reader.uint64();
                    break;
                case 2:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
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
            startingProposalId: (0, helpers_1.isSet)(object.startingProposalId) ? BigInt(object.startingProposalId.toString()) : BigInt(0),
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromJSON(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromJSON(e)) : [],
            depositParams: (0, helpers_1.isSet)(object.depositParams) ? gov_1.DepositParams.fromJSON(object.depositParams) : undefined,
            votingParams: (0, helpers_1.isSet)(object.votingParams) ? gov_1.VotingParams.fromJSON(object.votingParams) : undefined,
            tallyParams: (0, helpers_1.isSet)(object.tallyParams) ? gov_1.TallyParams.fromJSON(object.tallyParams) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.startingProposalId !== undefined && (obj.startingProposalId = (message.startingProposalId || BigInt(0)).toString());
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.depositParams !== undefined && (obj.depositParams = message.depositParams ? gov_1.DepositParams.toJSON(message.depositParams) : undefined);
        message.votingParams !== undefined && (obj.votingParams = message.votingParams ? gov_1.VotingParams.toJSON(message.votingParams) : undefined);
        message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? gov_1.TallyParams.toJSON(message.tallyParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? BigInt(object.startingProposalId.toString()) : BigInt(0);
        message.deposits = object.deposits?.map(e => gov_1.Deposit.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => gov_1.Vote.fromPartial(e)) || [];
        message.proposals = object.proposals?.map(e => gov_1.Proposal.fromPartial(e)) || [];
        message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? gov_1.DepositParams.fromPartial(object.depositParams) : undefined;
        message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? gov_1.VotingParams.fromPartial(object.votingParams) : undefined;
        message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? gov_1.TallyParams.fromPartial(object.tallyParams) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            startingProposalId: object?.starting_proposal_id,
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromSDK(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromSDK(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromSDK(e)) : [],
            depositParams: object.deposit_params ? gov_1.DepositParams.fromSDK(object.deposit_params) : undefined,
            votingParams: object.voting_params ? gov_1.VotingParams.fromSDK(object.voting_params) : undefined,
            tallyParams: object.tally_params ? gov_1.TallyParams.fromSDK(object.tally_params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.starting_proposal_id = message.startingProposalId;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toSDK(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toSDK(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.depositParams !== undefined && (obj.deposit_params = message.depositParams ? gov_1.DepositParams.toSDK(message.depositParams) : undefined);
        message.votingParams !== undefined && (obj.voting_params = message.votingParams ? gov_1.VotingParams.toSDK(message.votingParams) : undefined);
        message.tallyParams !== undefined && (obj.tally_params = message.tallyParams ? gov_1.TallyParams.toSDK(message.tallyParams) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.starting_proposal_id !== undefined && object.starting_proposal_id !== null) {
            message.startingProposalId = BigInt(object.starting_proposal_id);
        }
        message.deposits = object.deposits?.map(e => gov_1.Deposit.fromAmino(e)) || [];
        message.votes = object.votes?.map(e => gov_1.Vote.fromAmino(e)) || [];
        message.proposals = object.proposals?.map(e => gov_1.Proposal.fromAmino(e)) || [];
        if (object.deposit_params !== undefined && object.deposit_params !== null) {
            message.depositParams = gov_1.DepositParams.fromAmino(object.deposit_params);
        }
        if (object.voting_params !== undefined && object.voting_params !== null) {
            message.votingParams = gov_1.VotingParams.fromAmino(object.voting_params);
        }
        if (object.tally_params !== undefined && object.tally_params !== null) {
            message.tallyParams = gov_1.TallyParams.fromAmino(object.tally_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.starting_proposal_id = message.startingProposalId ? message.startingProposalId.toString() : undefined;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.deposit_params = message.depositParams ? gov_1.DepositParams.toAmino(message.depositParams) : undefined;
        obj.voting_params = message.votingParams ? gov_1.VotingParams.toAmino(message.votingParams) : undefined;
        obj.tally_params = message.tallyParams ? gov_1.TallyParams.toAmino(message.tallyParams) : undefined;
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
            typeUrl: "/cosmos.gov.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
