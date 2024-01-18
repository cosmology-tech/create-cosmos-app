"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.gov.v1beta1.MsgSubmitProposal", tx_1.MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", tx_1.MsgVote], ["/cosmos.gov.v1beta1.MsgVoteWeighted", tx_1.MsgVoteWeighted], ["/cosmos.gov.v1beta1.MsgDeposit", tx_1.MsgDeposit]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.encode(value).finish()
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: tx_1.MsgVote.encode(value).finish()
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: tx_1.MsgVoteWeighted.encode(value).finish()
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value
            };
        }
    },
    toJSON: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.toJSON(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: tx_1.MsgVote.toJSON(value)
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: tx_1.MsgVoteWeighted.toJSON(value)
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.toJSON(value)
            };
        }
    },
    fromJSON: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.fromJSON(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: tx_1.MsgVote.fromJSON(value)
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: tx_1.MsgVoteWeighted.fromJSON(value)
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.fromJSON(value)
            };
        }
    },
    fromPartial: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.fromPartial(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: tx_1.MsgVote.fromPartial(value)
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: tx_1.MsgVoteWeighted.fromPartial(value)
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.fromPartial(value)
            };
        }
    }
};
