import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  submitProposal(signerAddress: string, message: MsgSubmitProposal, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  execLegacyContent(signerAddress: string, message: MsgExecLegacyContent, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(signerAddress: string, message: MsgVote, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted(signerAddress: string, message: MsgVoteWeighted, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(signerAddress: string, message: MsgDeposit, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
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
  /* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   to execute a legacy content-based proposal. */
  execLegacyContent = async (signerAddress: string, message: MsgExecLegacyContent, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExecLegacyContent.typeUrl,
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
  /* VoteWeighted defines a method to add a weighted vote on a specific proposal. */
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