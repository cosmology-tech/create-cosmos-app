import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import { TextProposal, TextProposalSDKType } from "../v1beta1/gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgVote, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.gov.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
    toAmino: MsgSubmitProposal.toAmino,
    fromAmino: MsgSubmitProposal.fromAmino
  },
  "/cosmos.gov.v1.MsgExecLegacyContent": {
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
    toAmino: MsgExecLegacyContent.toAmino,
    fromAmino: MsgExecLegacyContent.fromAmino
  },
  "/cosmos.gov.v1.MsgVote": {
    aminoType: "cosmos-sdk/v1/MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino
  },
  "/cosmos.gov.v1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
    toAmino: MsgVoteWeighted.toAmino,
    fromAmino: MsgVoteWeighted.fromAmino
  },
  "/cosmos.gov.v1.MsgDeposit": {
    aminoType: "cosmos-sdk/v1/MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  }
};