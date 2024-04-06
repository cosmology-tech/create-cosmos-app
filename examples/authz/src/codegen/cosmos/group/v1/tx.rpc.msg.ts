//@ts-nocheck
import { Member, MemberSDKType, VoteOption, VoteOptionSDKType, ThresholdDecisionPolicy, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicySDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  createGroup(signerAddress: string, message: MsgCreateGroup, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  updateGroupMembers(signerAddress: string, message: MsgUpdateGroupMembers, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  updateGroupAdmin(signerAddress: string, message: MsgUpdateGroupAdmin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  updateGroupMetadata(signerAddress: string, message: MsgUpdateGroupMetadata, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  createGroupPolicy(signerAddress: string, message: MsgCreateGroupPolicy, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** CreateGroupWithPolicy creates a new group with policy. */
  createGroupWithPolicy(signerAddress: string, message: MsgCreateGroupWithPolicy, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  updateGroupPolicyAdmin(signerAddress: string, message: MsgUpdateGroupPolicyAdmin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  updateGroupPolicyDecisionPolicy(signerAddress: string, message: MsgUpdateGroupPolicyDecisionPolicy, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  updateGroupPolicyMetadata(signerAddress: string, message: MsgUpdateGroupPolicyMetadata, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** SubmitProposal submits a new proposal. */
  submitProposal(signerAddress: string, message: MsgSubmitProposal, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** WithdrawProposal aborts a proposal. */
  withdrawProposal(signerAddress: string, message: MsgWithdrawProposal, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Vote allows a voter to vote on a proposal. */
  vote(signerAddress: string, message: MsgVote, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Exec executes a proposal. */
  exec(signerAddress: string, message: MsgExec, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** LeaveGroup allows a group member to leave the group. */
  leaveGroup(signerAddress: string, message: MsgLeaveGroup, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  createGroup = async (signerAddress: string, message: MsgCreateGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGroup.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateGroupMembers updates the group members with given group id and admin address. */
  updateGroupMembers = async (signerAddress: string, message: MsgUpdateGroupMembers, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupMembers.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  updateGroupAdmin = async (signerAddress: string, message: MsgUpdateGroupAdmin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupAdmin.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  updateGroupMetadata = async (signerAddress: string, message: MsgUpdateGroupMetadata, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupMetadata.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  createGroupPolicy = async (signerAddress: string, message: MsgCreateGroupPolicy, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGroupPolicy.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateGroupWithPolicy creates a new group with policy. */
  createGroupWithPolicy = async (signerAddress: string, message: MsgCreateGroupWithPolicy, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGroupWithPolicy.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateGroupPolicyAdmin updates a group policy admin. */
  updateGroupPolicyAdmin = async (signerAddress: string, message: MsgUpdateGroupPolicyAdmin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyAdmin.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  updateGroupPolicyDecisionPolicy = async (signerAddress: string, message: MsgUpdateGroupPolicyDecisionPolicy, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateGroupPolicyMetadata updates a group policy metadata. */
  updateGroupPolicyMetadata = async (signerAddress: string, message: MsgUpdateGroupPolicyMetadata, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateGroupPolicyMetadata.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SubmitProposal submits a new proposal. */
  submitProposal = async (signerAddress: string, message: MsgSubmitProposal, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitProposal.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawProposal aborts a proposal. */
  withdrawProposal = async (signerAddress: string, message: MsgWithdrawProposal, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawProposal.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Vote allows a voter to vote on a proposal. */
  vote = async (signerAddress: string, message: MsgVote, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgVote.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Exec executes a proposal. */
  exec = async (signerAddress: string, message: MsgExec, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExec.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* LeaveGroup allows a group member to leave the group. */
  leaveGroup = async (signerAddress: string, message: MsgLeaveGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgLeaveGroup.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};