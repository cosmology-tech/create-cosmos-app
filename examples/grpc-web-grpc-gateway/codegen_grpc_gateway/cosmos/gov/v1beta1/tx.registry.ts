import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, TextProposal, TextProposalSDKType } from "./gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgVote, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", MsgVote], ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value
      };
    }
  },
  toJSON: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.toJSON(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.toJSON(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    }
  },
  fromJSON: {
    submitProposal(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },
    vote(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.fromJSON(value)
      };
    },
    voteWeighted(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromJSON(value)
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    }
  }
};