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
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  /* GroupInfo queries group info based on group id. */
  async groupInfo(params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType> {
    const endpoint = `cosmos/group/v1/group_info/${params.groupId}`;
    return QueryGroupInfoResponse.fromSDKJSON(await this.req.get<QueryGroupInfoResponseSDKType>(endpoint));
  }
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  async groupPolicyInfo(params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType> {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return QueryGroupPolicyInfoResponse.fromSDKJSON(await this.req.get<QueryGroupPolicyInfoResponseSDKType>(endpoint));
  }
  /* GroupMembers queries members of a group */
  async groupMembers(params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_members/${params.groupId}`;
    return QueryGroupMembersResponse.fromSDKJSON(await this.req.get<QueryGroupMembersResponseSDKType>(endpoint, options));
  }
  /* GroupsByAdmin queries groups by admin address. */
  async groupsByAdmin(params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return QueryGroupsByAdminResponse.fromSDKJSON(await this.req.get<QueryGroupsByAdminResponseSDKType>(endpoint, options));
  }
  /* GroupPoliciesByGroup queries group policies by group id. */
  async groupPoliciesByGroup(params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.groupId}`;
    return QueryGroupPoliciesByGroupResponse.fromSDKJSON(await this.req.get<QueryGroupPoliciesByGroupResponseSDKType>(endpoint, options));
  }
  /* GroupsByAdmin queries group policies by admin address. */
  async groupPoliciesByAdmin(params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return QueryGroupPoliciesByAdminResponse.fromSDKJSON(await this.req.get<QueryGroupPoliciesByAdminResponseSDKType>(endpoint, options));
  }
  /* Proposal queries a proposal based on proposal id. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `cosmos/group/v1/proposal/${params.proposalId}`;
    return QueryProposalResponse.fromSDKJSON(await this.req.get<QueryProposalResponseSDKType>(endpoint));
  }
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  async proposalsByGroupPolicy(params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return QueryProposalsByGroupPolicyResponse.fromSDKJSON(await this.req.get<QueryProposalsByGroupPolicyResponseSDKType>(endpoint, options));
  }
  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  async voteByProposalVoter(params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType> {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposalId}/${params.voter}`;
    return QueryVoteByProposalVoterResponse.fromSDKJSON(await this.req.get<QueryVoteByProposalVoterResponseSDKType>(endpoint));
  }
  /* VotesByProposal queries a vote by proposal. */
  async votesByProposal(params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposalId}`;
    return QueryVotesByProposalResponse.fromSDKJSON(await this.req.get<QueryVotesByProposalResponseSDKType>(endpoint, options));
  }
  /* VotesByVoter queries a vote by voter. */
  async votesByVoter(params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return QueryVotesByVoterResponse.fromSDKJSON(await this.req.get<QueryVotesByVoterResponseSDKType>(endpoint, options));
  }
  /* GroupsByMember queries groups by member address. */
  async groupsByMember(params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return QueryGroupsByMemberResponse.fromSDKJSON(await this.req.get<QueryGroupsByMemberResponseSDKType>(endpoint, options));
  }
  /* TallyResult queries the tally of a proposal votes. */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
    const endpoint = `cosmos/group/v1/proposals/${params.proposalId}/tally`;
    return QueryTallyResultResponse.fromSDKJSON(await this.req.get<QueryTallyResultResponseSDKType>(endpoint));
  }
}