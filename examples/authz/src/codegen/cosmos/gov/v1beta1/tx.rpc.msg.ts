//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, TextProposal, TextProposalSDKType } from "./gov";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  submitProposal(signerAddress: string, message: MsgSubmitProposal, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(signerAddress: string, message: MsgVote, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * VoteWeighted defines a method to add a weighted vote on a specific proposal.
   * 
   * Since: cosmos-sdk 0.43
   */
  voteWeighted(signerAddress: string, message: MsgVoteWeighted, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(signerAddress: string, message: MsgDeposit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SubmitProposal defines a method to create new proposal given a content. */
  submitProposal = async (signerAddress: string, message: MsgSubmitProposal, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitProposal.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Vote defines a method to add a vote on a specific proposal. */
  vote = async (signerAddress: string, message: MsgVote, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgVote.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* VoteWeighted defines a method to add a weighted vote on a specific proposal.
  
   Since: cosmos-sdk 0.43 */
  voteWeighted = async (signerAddress: string, message: MsgVoteWeighted, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgVoteWeighted.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Deposit defines a method to add deposit on a specific proposal. */
  deposit = async (signerAddress: string, message: MsgDeposit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDeposit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};