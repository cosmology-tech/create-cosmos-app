import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const AminoConverter: {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: (message: MsgSubmitProposal) => import("./tx").MsgSubmitProposalAmino;
        fromAmino: (object: import("./tx").MsgSubmitProposalAmino) => MsgSubmitProposal;
    };
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: (message: MsgVote) => import("./tx").MsgVoteAmino;
        fromAmino: (object: import("./tx").MsgVoteAmino) => MsgVote;
    };
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: (message: MsgVoteWeighted) => import("./tx").MsgVoteWeightedAmino;
        fromAmino: (object: import("./tx").MsgVoteWeightedAmino) => MsgVoteWeighted;
    };
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
};
