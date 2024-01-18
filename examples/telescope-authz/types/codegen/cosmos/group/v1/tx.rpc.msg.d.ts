import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
    /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
    createGroup(signerAddress: string, message: MsgCreateGroup, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateGroupMembers updates the group members with given group id and admin address. */
    updateGroupMembers(signerAddress: string, message: MsgUpdateGroupMembers, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
    updateGroupAdmin(signerAddress: string, message: MsgUpdateGroupAdmin, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
    updateGroupMetadata(signerAddress: string, message: MsgUpdateGroupMetadata, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
    createGroupPolicy(signerAddress: string, message: MsgCreateGroupPolicy, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** CreateGroupWithPolicy creates a new group with policy. */
    createGroupWithPolicy(signerAddress: string, message: MsgCreateGroupWithPolicy, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateGroupPolicyAdmin updates a group policy admin. */
    updateGroupPolicyAdmin(signerAddress: string, message: MsgUpdateGroupPolicyAdmin, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
    updateGroupPolicyDecisionPolicy(signerAddress: string, message: MsgUpdateGroupPolicyDecisionPolicy, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateGroupPolicyMetadata updates a group policy metadata. */
    updateGroupPolicyMetadata(signerAddress: string, message: MsgUpdateGroupPolicyMetadata, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** SubmitProposal submits a new proposal. */
    submitProposal(signerAddress: string, message: MsgSubmitProposal, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** WithdrawProposal aborts a proposal. */
    withdrawProposal(signerAddress: string, message: MsgWithdrawProposal, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Vote allows a voter to vote on a proposal. */
    vote(signerAddress: string, message: MsgVote, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Exec executes a proposal. */
    exec(signerAddress: string, message: MsgExec, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** LeaveGroup allows a group member to leave the group. */
    leaveGroup(signerAddress: string, message: MsgLeaveGroup, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createGroup: (signerAddress: string, message: MsgCreateGroup, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateGroupMembers: (signerAddress: string, message: MsgUpdateGroupMembers, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateGroupAdmin: (signerAddress: string, message: MsgUpdateGroupAdmin, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateGroupMetadata: (signerAddress: string, message: MsgUpdateGroupMetadata, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    createGroupPolicy: (signerAddress: string, message: MsgCreateGroupPolicy, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    createGroupWithPolicy: (signerAddress: string, message: MsgCreateGroupWithPolicy, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateGroupPolicyAdmin: (signerAddress: string, message: MsgUpdateGroupPolicyAdmin, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateGroupPolicyDecisionPolicy: (signerAddress: string, message: MsgUpdateGroupPolicyDecisionPolicy, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateGroupPolicyMetadata: (signerAddress: string, message: MsgUpdateGroupPolicyMetadata, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    submitProposal: (signerAddress: string, message: MsgSubmitProposal, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    withdrawProposal: (signerAddress: string, message: MsgWithdrawProposal, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    vote: (signerAddress: string, message: MsgVote, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    exec: (signerAddress: string, message: MsgExec, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    leaveGroup: (signerAddress: string, message: MsgLeaveGroup, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
