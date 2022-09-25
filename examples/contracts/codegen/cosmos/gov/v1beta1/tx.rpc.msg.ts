import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgVote, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType>;
  /*SubmitProposal defines a method to create new proposal given a content.*/

  vote(request: MsgVote): Promise<MsgVoteResponseSDKType>;
  /*Vote defines a method to add a vote on a specific proposal.*/

  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponseSDKType>;
  /*VoteWeighted defines a method to add a weighted vote on a specific proposal.
  
  Since: cosmos-sdk 0.43*/

  deposit(request: MsgDeposit): Promise<MsgDepositResponseSDKType>;
  /*Deposit defines a method to add deposit on a specific proposal.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
  }

  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }

  vote(request: MsgVote): Promise<MsgVoteResponseSDKType> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponseSDKType> {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
    return promise.then(data => MsgVoteWeightedResponse.decode(new _m0.Reader(data)));
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponseSDKType> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

}