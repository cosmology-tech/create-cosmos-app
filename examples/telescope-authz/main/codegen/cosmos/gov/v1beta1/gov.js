"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TallyParams = exports.VotingParams = exports.DepositParams = exports.Vote = exports.TallyResult = exports.Proposal = exports.Deposit = exports.TextProposal = exports.WeightedVoteOption = exports.proposalStatusToJSON = exports.proposalStatusFromJSON = exports.ProposalStatusAmino = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.voteOptionToJSON = exports.voteOptionFromJSON = exports.VoteOptionAmino = exports.VoteOptionSDKType = exports.VoteOption = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const helpers_1 = require("../../../helpers");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (exports.VoteOption = VoteOption = {}));
exports.VoteOptionSDKType = VoteOption;
exports.VoteOptionAmino = VoteOption;
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
exports.voteOptionFromJSON = voteOptionFromJSON;
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteOptionToJSON = voteOptionToJSON;
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (exports.ProposalStatus = ProposalStatus = {}));
exports.ProposalStatusSDKType = ProposalStatus;
exports.ProposalStatusAmino = ProposalStatus;
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
exports.proposalStatusFromJSON = proposalStatusFromJSON;
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: ""
    };
}
exports.WeightedVoteOption = {
    typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
    aminoType: "cosmos-sdk/WeightedVoteOption",
    is(o) {
        return o && (o.$typeUrl === exports.WeightedVoteOption.typeUrl || (0, helpers_1.isSet)(o.option) && typeof o.weight === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WeightedVoteOption.typeUrl || (0, helpers_1.isSet)(o.option) && typeof o.weight === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WeightedVoteOption.typeUrl || (0, helpers_1.isSet)(o.option) && typeof o.weight === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWeightedVoteOption();
        message.option = object.option ?? 0;
        message.weight = object.weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseWeightedVoteOption();
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.option = voteOptionToJSON(message.option);
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightedVoteOption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WeightedVoteOption",
            value: exports.WeightedVoteOption.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.WeightedVoteOption.decode(message.value);
    },
    toProto(message) {
        return exports.WeightedVoteOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
            value: exports.WeightedVoteOption.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WeightedVoteOption.typeUrl, exports.WeightedVoteOption);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.WeightedVoteOption.aminoType, exports.WeightedVoteOption.typeUrl);
function createBaseTextProposal() {
    return {
        $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        title: "",
        description: ""
    };
}
exports.TextProposal = {
    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    aminoType: "cosmos-sdk/TextProposal",
    is(o) {
        return o && (o.$typeUrl === exports.TextProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TextProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TextProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTextProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTextProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTextProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TextProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TextProposal",
            value: exports.TextProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TextProposal.decode(message.value);
    },
    toProto(message) {
        return exports.TextProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TextProposal",
            value: exports.TextProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TextProposal.typeUrl, exports.TextProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TextProposal.aminoType, exports.TextProposal.typeUrl);
function createBaseDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.Deposit = {
    typeUrl: "/cosmos.gov.v1beta1.Deposit",
    aminoType: "cosmos-sdk/Deposit",
    is(o) {
        return o && (o.$typeUrl === exports.Deposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
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
        const message = createBaseDeposit();
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
        const message = createBaseDeposit();
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
        const message = createBaseDeposit();
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
        return exports.Deposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Deposit",
            value: exports.Deposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Deposit.decode(message.value);
    },
    toProto(message) {
        return exports.Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Deposit",
            value: exports.Deposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Deposit.typeUrl, exports.Deposit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Deposit.aminoType, exports.Deposit.typeUrl);
function createBaseProposal() {
    return {
        proposalId: BigInt(0),
        content: undefined,
        status: 0,
        finalTallyResult: exports.TallyResult.fromPartial({}),
        submitTime: new Date(),
        depositEndTime: new Date(),
        totalDeposit: [],
        votingStartTime: new Date(),
        votingEndTime: new Date()
    };
}
exports.Proposal = {
    typeUrl: "/cosmos.gov.v1beta1.Proposal",
    aminoType: "cosmos-sdk/Proposal",
    is(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || typeof o.proposalId === "bigint" && (0, helpers_1.isSet)(o.status) && exports.TallyResult.is(o.finalTallyResult) && timestamp_1.Timestamp.is(o.submitTime) && timestamp_1.Timestamp.is(o.depositEndTime) && Array.isArray(o.totalDeposit) && (!o.totalDeposit.length || coin_1.Coin.is(o.totalDeposit[0])) && timestamp_1.Timestamp.is(o.votingStartTime) && timestamp_1.Timestamp.is(o.votingEndTime));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.status) && exports.TallyResult.isSDK(o.final_tally_result) && timestamp_1.Timestamp.isSDK(o.submit_time) && timestamp_1.Timestamp.isSDK(o.deposit_end_time) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || coin_1.Coin.isSDK(o.total_deposit[0])) && timestamp_1.Timestamp.isSDK(o.voting_start_time) && timestamp_1.Timestamp.isSDK(o.voting_end_time));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.status) && exports.TallyResult.isAmino(o.final_tally_result) && timestamp_1.Timestamp.isAmino(o.submit_time) && timestamp_1.Timestamp.isAmino(o.deposit_end_time) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || coin_1.Coin.isAmino(o.total_deposit[0])) && timestamp_1.Timestamp.isAmino(o.voting_start_time) && timestamp_1.Timestamp.isAmino(o.voting_end_time));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.content !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.content), writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.finalTallyResult !== undefined) {
            exports.TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.depositEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.depositEndTime), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.totalDeposit) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.votingStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingStartTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.votingEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingEndTime), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.content = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.finalTallyResult = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            content: (0, helpers_1.isSet)(object.content) ? registry_1.GlobalDecoderRegistry.fromJSON(object.content) : undefined,
            status: (0, helpers_1.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
            finalTallyResult: (0, helpers_1.isSet)(object.finalTallyResult) ? exports.TallyResult.fromJSON(object.finalTallyResult) : undefined,
            submitTime: (0, helpers_1.isSet)(object.submitTime) ? new Date(object.submitTime) : undefined,
            depositEndTime: (0, helpers_1.isSet)(object.depositEndTime) ? new Date(object.depositEndTime) : undefined,
            totalDeposit: Array.isArray(object?.totalDeposit) ? object.totalDeposit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            votingStartTime: (0, helpers_1.isSet)(object.votingStartTime) ? new Date(object.votingStartTime) : undefined,
            votingEndTime: (0, helpers_1.isSet)(object.votingEndTime) ? new Date(object.votingEndTime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.content !== undefined && (obj.content = message.content ? registry_1.GlobalDecoderRegistry.toJSON(message.content) : undefined);
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.finalTallyResult !== undefined && (obj.finalTallyResult = message.finalTallyResult ? exports.TallyResult.toJSON(message.finalTallyResult) : undefined);
        message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
        message.depositEndTime !== undefined && (obj.depositEndTime = message.depositEndTime.toISOString());
        if (message.totalDeposit) {
            obj.totalDeposit = message.totalDeposit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalDeposit = [];
        }
        message.votingStartTime !== undefined && (obj.votingStartTime = message.votingStartTime.toISOString());
        message.votingEndTime !== undefined && (obj.votingEndTime = message.votingEndTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.content = object.content !== undefined && object.content !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.content) : undefined;
        message.status = object.status ?? 0;
        message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? exports.TallyResult.fromPartial(object.finalTallyResult) : undefined;
        message.submitTime = object.submitTime ?? undefined;
        message.depositEndTime = object.depositEndTime ?? undefined;
        message.totalDeposit = object.totalDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.votingStartTime = object.votingStartTime ?? undefined;
        message.votingEndTime = object.votingEndTime ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            content: object.content ? registry_1.GlobalDecoderRegistry.fromSDK(object.content) : undefined,
            status: (0, helpers_1.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
            finalTallyResult: object.final_tally_result ? exports.TallyResult.fromSDK(object.final_tally_result) : undefined,
            submitTime: object.submit_time ?? undefined,
            depositEndTime: object.deposit_end_time ?? undefined,
            totalDeposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            votingStartTime: object.voting_start_time ?? undefined,
            votingEndTime: object.voting_end_time ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        message.content !== undefined && (obj.content = message.content ? registry_1.GlobalDecoderRegistry.toSDK(message.content) : undefined);
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.finalTallyResult !== undefined && (obj.final_tally_result = message.finalTallyResult ? exports.TallyResult.toSDK(message.finalTallyResult) : undefined);
        message.submitTime !== undefined && (obj.submit_time = message.submitTime ?? undefined);
        message.depositEndTime !== undefined && (obj.deposit_end_time = message.depositEndTime ?? undefined);
        if (message.totalDeposit) {
            obj.total_deposit = message.totalDeposit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        message.votingStartTime !== undefined && (obj.voting_start_time = message.votingStartTime ?? undefined);
        message.votingEndTime !== undefined && (obj.voting_end_time = message.votingEndTime ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.content);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = proposalStatusFromJSON(object.status);
        }
        if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
            message.finalTallyResult = exports.TallyResult.fromAmino(object.final_tally_result);
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submit_time));
        }
        if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
            message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.deposit_end_time));
        }
        message.totalDeposit = object.total_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
            message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_start_time));
        }
        if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
            message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_end_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.content = message.content ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.content) : undefined;
        obj.status = proposalStatusToJSON(message.status);
        obj.final_tally_result = message.finalTallyResult ? exports.TallyResult.toAmino(message.finalTallyResult) : undefined;
        obj.submit_time = message.submitTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submitTime)) : undefined;
        obj.deposit_end_time = message.depositEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.depositEndTime)) : undefined;
        if (message.totalDeposit) {
            obj.total_deposit = message.totalDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        obj.voting_start_time = message.votingStartTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingStartTime)) : undefined;
        obj.voting_end_time = message.votingEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingEndTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Proposal",
            value: exports.Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Proposal.typeUrl, exports.Proposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Proposal.aminoType, exports.Proposal.typeUrl);
function createBaseTallyResult() {
    return {
        yes: "",
        abstain: "",
        no: "",
        noWithVeto: ""
    };
}
exports.TallyResult = {
    typeUrl: "/cosmos.gov.v1beta1.TallyResult",
    aminoType: "cosmos-sdk/TallyResult",
    is(o) {
        return o && (o.$typeUrl === exports.TallyResult.typeUrl || typeof o.yes === "string" && typeof o.abstain === "string" && typeof o.no === "string" && typeof o.noWithVeto === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TallyResult.typeUrl || typeof o.yes === "string" && typeof o.abstain === "string" && typeof o.no === "string" && typeof o.no_with_veto === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TallyResult.typeUrl || typeof o.yes === "string" && typeof o.abstain === "string" && typeof o.no === "string" && typeof o.no_with_veto === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.yes !== "") {
            writer.uint32(10).string(message.yes);
        }
        if (message.abstain !== "") {
            writer.uint32(18).string(message.abstain);
        }
        if (message.no !== "") {
            writer.uint32(26).string(message.no);
        }
        if (message.noWithVeto !== "") {
            writer.uint32(34).string(message.noWithVeto);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yes = reader.string();
                    break;
                case 2:
                    message.abstain = reader.string();
                    break;
                case 3:
                    message.no = reader.string();
                    break;
                case 4:
                    message.noWithVeto = reader.string();
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
            yes: (0, helpers_1.isSet)(object.yes) ? String(object.yes) : "",
            abstain: (0, helpers_1.isSet)(object.abstain) ? String(object.abstain) : "",
            no: (0, helpers_1.isSet)(object.no) ? String(object.no) : "",
            noWithVeto: (0, helpers_1.isSet)(object.noWithVeto) ? String(object.noWithVeto) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.yes !== undefined && (obj.yes = message.yes);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.no !== undefined && (obj.no = message.no);
        message.noWithVeto !== undefined && (obj.noWithVeto = message.noWithVeto);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyResult();
        message.yes = object.yes ?? "";
        message.abstain = object.abstain ?? "";
        message.no = object.no ?? "";
        message.noWithVeto = object.noWithVeto ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            yes: object?.yes,
            abstain: object?.abstain,
            no: object?.no,
            noWithVeto: object?.no_with_veto
        };
    },
    toSDK(message) {
        const obj = {};
        obj.yes = message.yes;
        obj.abstain = message.abstain;
        obj.no = message.no;
        obj.no_with_veto = message.noWithVeto;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTallyResult();
        if (object.yes !== undefined && object.yes !== null) {
            message.yes = object.yes;
        }
        if (object.abstain !== undefined && object.abstain !== null) {
            message.abstain = object.abstain;
        }
        if (object.no !== undefined && object.no !== null) {
            message.no = object.no;
        }
        if (object.no_with_veto !== undefined && object.no_with_veto !== null) {
            message.noWithVeto = object.no_with_veto;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.yes = message.yes;
        obj.abstain = message.abstain;
        obj.no = message.no;
        obj.no_with_veto = message.noWithVeto;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyResult",
            value: exports.TallyResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyResult.decode(message.value);
    },
    toProto(message) {
        return exports.TallyResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TallyResult",
            value: exports.TallyResult.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TallyResult.typeUrl, exports.TallyResult);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TallyResult.aminoType, exports.TallyResult.typeUrl);
function createBaseVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0,
        options: []
    };
}
exports.Vote = {
    typeUrl: "/cosmos.gov.v1beta1.Vote",
    aminoType: "cosmos-sdk/Vote",
    is(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option) && Array.isArray(o.options) && (!o.options.length || exports.WeightedVoteOption.is(o.options[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option) && Array.isArray(o.options) && (!o.options.length || exports.WeightedVoteOption.isSDK(o.options[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option) && Array.isArray(o.options) && (!o.options.length || exports.WeightedVoteOption.isAmino(o.options[0])));
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
        for (const v of message.options) {
            exports.WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
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
                case 4:
                    message.options.push(exports.WeightedVoteOption.decode(reader, reader.uint32()));
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
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
            options: Array.isArray(object?.options) ? object.options.map((e) => exports.WeightedVoteOption.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        if (message.options) {
            obj.options = message.options.map(e => e ? exports.WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            proposalId: object?.proposal_id,
            voter: object?.voter,
            option: (0, helpers_1.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
            options: Array.isArray(object?.options) ? object.options.map((e) => exports.WeightedVoteOption.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposalId;
        obj.voter = message.voter;
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        if (message.options) {
            obj.options = message.options.map(e => e ? exports.WeightedVoteOption.toSDK(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        obj.option = voteOptionToJSON(message.option);
        if (message.options) {
            obj.options = message.options.map(e => e ? exports.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Vote",
            value: exports.Vote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Vote.typeUrl, exports.Vote);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Vote.aminoType, exports.Vote.typeUrl);
function createBaseDepositParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: duration_1.Duration.fromPartial({})
    };
}
exports.DepositParams = {
    typeUrl: "/cosmos.gov.v1beta1.DepositParams",
    aminoType: "cosmos-sdk/DepositParams",
    is(o) {
        return o && (o.$typeUrl === exports.DepositParams.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || coin_1.Coin.is(o.minDeposit[0])) && duration_1.Duration.is(o.maxDepositPeriod));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || coin_1.Coin.isSDK(o.min_deposit[0])) && duration_1.Duration.isSDK(o.max_deposit_period));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || coin_1.Coin.isAmino(o.min_deposit[0])) && duration_1.Duration.isAmino(o.max_deposit_period));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.minDeposit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            duration_1.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = duration_1.Duration.decode(reader, reader.uint32());
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
            minDeposit: Array.isArray(object?.minDeposit) ? object.minDeposit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            maxDepositPeriod: (0, helpers_1.isSet)(object.maxDepositPeriod) ? duration_1.Duration.fromJSON(object.maxDepositPeriod) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.minDeposit) {
            obj.minDeposit = message.minDeposit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.minDeposit = [];
        }
        message.maxDepositPeriod !== undefined && (obj.maxDepositPeriod = message.maxDepositPeriod ? duration_1.Duration.toJSON(message.maxDepositPeriod) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositParams();
        message.minDeposit = object.minDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? duration_1.Duration.fromPartial(object.maxDepositPeriod) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            minDeposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            maxDepositPeriod: object.max_deposit_period ? duration_1.Duration.fromSDK(object.max_deposit_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.minDeposit) {
            obj.min_deposit = message.minDeposit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.maxDepositPeriod !== undefined && (obj.max_deposit_period = message.maxDepositPeriod ? duration_1.Duration.toSDK(message.maxDepositPeriod) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDepositParams();
        message.minDeposit = object.min_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
            message.maxDepositPeriod = duration_1.Duration.fromAmino(object.max_deposit_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.minDeposit) {
            obj.min_deposit = message.minDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        obj.max_deposit_period = message.maxDepositPeriod ? duration_1.Duration.toAmino(message.maxDepositPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DepositParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DepositParams",
            value: exports.DepositParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DepositParams.decode(message.value);
    },
    toProto(message) {
        return exports.DepositParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.DepositParams",
            value: exports.DepositParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DepositParams.typeUrl, exports.DepositParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DepositParams.aminoType, exports.DepositParams.typeUrl);
function createBaseVotingParams() {
    return {
        votingPeriod: duration_1.Duration.fromPartial({})
    };
}
exports.VotingParams = {
    typeUrl: "/cosmos.gov.v1beta1.VotingParams",
    aminoType: "cosmos-sdk/VotingParams",
    is(o) {
        return o && (o.$typeUrl === exports.VotingParams.typeUrl || duration_1.Duration.is(o.votingPeriod));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.VotingParams.typeUrl || duration_1.Duration.isSDK(o.voting_period));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.VotingParams.typeUrl || duration_1.Duration.isAmino(o.voting_period));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
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
            votingPeriod: (0, helpers_1.isSet)(object.votingPeriod) ? duration_1.Duration.fromJSON(object.votingPeriod) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.votingPeriod !== undefined && (obj.votingPeriod = message.votingPeriod ? duration_1.Duration.toJSON(message.votingPeriod) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVotingParams();
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            votingPeriod: object.voting_period ? duration_1.Duration.fromSDK(object.voting_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.votingPeriod !== undefined && (obj.voting_period = message.votingPeriod ? duration_1.Duration.toSDK(message.votingPeriod) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseVotingParams();
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.votingPeriod = duration_1.Duration.fromAmino(object.voting_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.votingPeriod ? duration_1.Duration.toAmino(message.votingPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VotingParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VotingParams",
            value: exports.VotingParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.VotingParams.decode(message.value);
    },
    toProto(message) {
        return exports.VotingParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.VotingParams",
            value: exports.VotingParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.VotingParams.typeUrl, exports.VotingParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.VotingParams.aminoType, exports.VotingParams.typeUrl);
function createBaseTallyParams() {
    return {
        quorum: new Uint8Array(),
        threshold: new Uint8Array(),
        vetoThreshold: new Uint8Array()
    };
}
exports.TallyParams = {
    typeUrl: "/cosmos.gov.v1beta1.TallyParams",
    aminoType: "cosmos-sdk/TallyParams",
    is(o) {
        return o && (o.$typeUrl === exports.TallyParams.typeUrl || (o.quorum instanceof Uint8Array || typeof o.quorum === "string") && (o.threshold instanceof Uint8Array || typeof o.threshold === "string") && (o.vetoThreshold instanceof Uint8Array || typeof o.vetoThreshold === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TallyParams.typeUrl || (o.quorum instanceof Uint8Array || typeof o.quorum === "string") && (o.threshold instanceof Uint8Array || typeof o.threshold === "string") && (o.veto_threshold instanceof Uint8Array || typeof o.veto_threshold === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TallyParams.typeUrl || (o.quorum instanceof Uint8Array || typeof o.quorum === "string") && (o.threshold instanceof Uint8Array || typeof o.threshold === "string") && (o.veto_threshold instanceof Uint8Array || typeof o.veto_threshold === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quorum.length !== 0) {
            writer.uint32(10).bytes(message.quorum);
        }
        if (message.threshold.length !== 0) {
            writer.uint32(18).bytes(message.threshold);
        }
        if (message.vetoThreshold.length !== 0) {
            writer.uint32(26).bytes(message.vetoThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.bytes();
                    break;
                case 2:
                    message.threshold = reader.bytes();
                    break;
                case 3:
                    message.vetoThreshold = reader.bytes();
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
            quorum: (0, helpers_1.isSet)(object.quorum) ? (0, helpers_1.bytesFromBase64)(object.quorum) : new Uint8Array(),
            threshold: (0, helpers_1.isSet)(object.threshold) ? (0, helpers_1.bytesFromBase64)(object.threshold) : new Uint8Array(),
            vetoThreshold: (0, helpers_1.isSet)(object.vetoThreshold) ? (0, helpers_1.bytesFromBase64)(object.vetoThreshold) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.quorum !== undefined && (obj.quorum = (0, helpers_1.base64FromBytes)(message.quorum !== undefined ? message.quorum : new Uint8Array()));
        message.threshold !== undefined && (obj.threshold = (0, helpers_1.base64FromBytes)(message.threshold !== undefined ? message.threshold : new Uint8Array()));
        message.vetoThreshold !== undefined && (obj.vetoThreshold = (0, helpers_1.base64FromBytes)(message.vetoThreshold !== undefined ? message.vetoThreshold : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyParams();
        message.quorum = object.quorum ?? new Uint8Array();
        message.threshold = object.threshold ?? new Uint8Array();
        message.vetoThreshold = object.vetoThreshold ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            quorum: object?.quorum,
            threshold: object?.threshold,
            vetoThreshold: object?.veto_threshold
        };
    },
    toSDK(message) {
        const obj = {};
        obj.quorum = message.quorum;
        obj.threshold = message.threshold;
        obj.veto_threshold = message.vetoThreshold;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseTallyParams();
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = (0, helpers_1.bytesFromBase64)(object.quorum);
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = (0, helpers_1.bytesFromBase64)(object.threshold);
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.vetoThreshold = (0, helpers_1.bytesFromBase64)(object.veto_threshold);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quorum = message.quorum ? (0, helpers_1.base64FromBytes)(message.quorum) : undefined;
        obj.threshold = message.threshold ? (0, helpers_1.base64FromBytes)(message.threshold) : undefined;
        obj.veto_threshold = message.vetoThreshold ? (0, helpers_1.base64FromBytes)(message.vetoThreshold) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyParams",
            value: exports.TallyParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyParams.decode(message.value);
    },
    toProto(message) {
        return exports.TallyParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TallyParams",
            value: exports.TallyParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TallyParams.typeUrl, exports.TallyParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TallyParams.aminoType, exports.TallyParams.typeUrl);
