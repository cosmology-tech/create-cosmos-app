//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, TextProposal, TextProposalSDKType } from "./gov";
import { ClientUpdateProposal, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import * as fm from "../../../grpc-gateway";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
export class Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  static submitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/submitProposal`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Vote defines a method to add a vote on a specific proposal. */
  static vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/vote`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * VoteWeighted defines a method to add a weighted vote on a specific proposal.
   * 
   * Since: cosmos-sdk 0.43
   */
  static voteWeighted(request: MsgVoteWeighted, initRequest?: fm.InitReq): Promise<MsgVoteWeightedResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/voteWeighted`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Deposit defines a method to add deposit on a specific proposal. */
  static deposit(request: MsgDeposit, initRequest?: fm.InitReq): Promise<MsgDepositResponse> {
    return fm.fetchReq(`/cosmos.gov.v1beta1/deposit`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}