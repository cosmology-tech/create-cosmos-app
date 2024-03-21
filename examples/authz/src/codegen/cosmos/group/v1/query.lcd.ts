import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GroupInfo queries group info based on group id. */
  groupInfo = async (params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType> => {
    const endpoint = `cosmos/group/v1/group_info/${params.groupId}`;
    return await this.req.get<QueryGroupInfoResponseSDKType>(endpoint);
  };
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  groupPolicyInfo = async (params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType> => {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return await this.req.get<QueryGroupPolicyInfoResponseSDKType>(endpoint);
  };
  /* GroupMembers queries members of a group */
  groupMembers = async (params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_members/${params.groupId}`;
    return await this.req.get<QueryGroupMembersResponseSDKType>(endpoint, options);
  };
  /* GroupsByAdmin queries groups by admin address. */
  groupsByAdmin = async (params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return await this.req.get<QueryGroupsByAdminResponseSDKType>(endpoint, options);
  };
  /* GroupPoliciesByGroup queries group policies by group id. */
  groupPoliciesByGroup = async (params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.groupId}`;
    return await this.req.get<QueryGroupPoliciesByGroupResponseSDKType>(endpoint, options);
  };
  /* GroupsByAdmin queries group policies by admin address. */
  groupPoliciesByAdmin = async (params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return await this.req.get<QueryGroupPoliciesByAdminResponseSDKType>(endpoint, options);
  };
  /* Proposal queries a proposal based on proposal id. */
  proposal = async (params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> => {
    const endpoint = `cosmos/group/v1/proposal/${params.proposalId}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  };
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  proposalsByGroupPolicy = async (params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return await this.req.get<QueryProposalsByGroupPolicyResponseSDKType>(endpoint, options);
  };
  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter = async (params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType> => {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposalId}/${params.voter}`;
    return await this.req.get<QueryVoteByProposalVoterResponseSDKType>(endpoint);
  };
  /* VotesByProposal queries a vote by proposal. */
  votesByProposal = async (params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposalId}`;
    return await this.req.get<QueryVotesByProposalResponseSDKType>(endpoint, options);
  };
  /* VotesByVoter queries a vote by voter. */
  votesByVoter = async (params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return await this.req.get<QueryVotesByVoterResponseSDKType>(endpoint, options);
  };
  /* GroupsByMember queries groups by member address. */
  groupsByMember = async (params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return await this.req.get<QueryGroupsByMemberResponseSDKType>(endpoint, options);
  };
  /* TallyResult queries the tally of a proposal votes. */
  tallyResult = async (params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> => {
    const endpoint = `cosmos/group/v1/proposals/${params.proposalId}/tally`;
    return await this.req.get<QueryTallyResultResponseSDKType>(endpoint);
  };
}