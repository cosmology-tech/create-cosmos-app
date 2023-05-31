import { Member, MemberSDKType, VoteOption, VoteOptionSDKType, ThresholdDecisionPolicy, ThresholdDecisionPolicySDKType, PercentageDecisionPolicy, PercentageDecisionPolicySDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as fm from "../../../grpc-gateway";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";
export class Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  static createGroup(request: MsgCreateGroup, initRequest?: fm.InitReq): Promise<MsgCreateGroupResponse> {
    return fm.fetchReq(`/cosmos.group.v1/createGroup`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  static updateGroupMembers(request: MsgUpdateGroupMembers, initRequest?: fm.InitReq): Promise<MsgUpdateGroupMembersResponse> {
    return fm.fetchReq(`/cosmos.group.v1/updateGroupMembers`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  static updateGroupAdmin(request: MsgUpdateGroupAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateGroupAdminResponse> {
    return fm.fetchReq(`/cosmos.group.v1/updateGroupAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  static updateGroupMetadata(request: MsgUpdateGroupMetadata, initRequest?: fm.InitReq): Promise<MsgUpdateGroupMetadataResponse> {
    return fm.fetchReq(`/cosmos.group.v1/updateGroupMetadata`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  static createGroupPolicy(request: MsgCreateGroupPolicy, initRequest?: fm.InitReq): Promise<MsgCreateGroupPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1/createGroupPolicy`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** CreateGroupWithPolicy creates a new group with policy. */
  static createGroupWithPolicy(request: MsgCreateGroupWithPolicy, initRequest?: fm.InitReq): Promise<MsgCreateGroupWithPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1/createGroupWithPolicy`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  static updateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyAdminResponse> {
    return fm.fetchReq(`/cosmos.group.v1/updateGroupPolicyAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  static updateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    return fm.fetchReq(`/cosmos.group.v1/updateGroupPolicyDecisionPolicy`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  static updateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata, initRequest?: fm.InitReq): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    return fm.fetchReq(`/cosmos.group.v1/updateGroupPolicyMetadata`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** SubmitProposal submits a new proposal. */
  static submitProposal(request: MsgSubmitProposal, initRequest?: fm.InitReq): Promise<MsgSubmitProposalResponse> {
    return fm.fetchReq(`/cosmos.group.v1/submitProposal`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** WithdrawProposal aborts a proposal. */
  static withdrawProposal(request: MsgWithdrawProposal, initRequest?: fm.InitReq): Promise<MsgWithdrawProposalResponse> {
    return fm.fetchReq(`/cosmos.group.v1/withdrawProposal`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Vote allows a voter to vote on a proposal. */
  static vote(request: MsgVote, initRequest?: fm.InitReq): Promise<MsgVoteResponse> {
    return fm.fetchReq(`/cosmos.group.v1/vote`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Exec executes a proposal. */
  static exec(request: MsgExec, initRequest?: fm.InitReq): Promise<MsgExecResponse> {
    return fm.fetchReq(`/cosmos.group.v1/exec`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** LeaveGroup allows a group member to leave the group. */
  static leaveGroup(request: MsgLeaveGroup, initRequest?: fm.InitReq): Promise<MsgLeaveGroupResponse> {
    return fm.fetchReq(`/cosmos.group.v1/leaveGroup`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}