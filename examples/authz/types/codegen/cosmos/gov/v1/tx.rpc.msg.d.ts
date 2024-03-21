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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    submitProposal: (signerAddress: string, message: MsgSubmitProposal, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    execLegacyContent: (signerAddress: string, message: MsgExecLegacyContent, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    vote: (signerAddress: string, message: MsgVote, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    voteWeighted: (signerAddress: string, message: MsgVoteWeighted, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    deposit: (signerAddress: string, message: MsgDeposit, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
