import * as fm from "../../../grpc-gateway";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
export class Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  static submitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/submitProposal`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  static execLegacyContent(request: MsgExecLegacyContent, initRequest?: fm.InitReq): Promise<MsgExecLegacyContentResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/execLegacyContent`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Vote defines a method to add a vote on a specific proposal. */
  static vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/vote`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  static voteWeighted(request: MsgVoteWeighted, initRequest?: fm.InitReq): Promise<MsgVoteWeightedResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/voteWeighted`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Deposit defines a method to add deposit on a specific proposal. */
  static deposit(request: MsgDeposit, initRequest?: fm.InitReq): Promise<MsgDepositResponse> {
    return fm.fetchReq(`/cosmos.gov.v1/deposit`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}