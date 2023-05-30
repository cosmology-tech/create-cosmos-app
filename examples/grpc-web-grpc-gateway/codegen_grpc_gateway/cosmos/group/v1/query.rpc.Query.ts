import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import * as fm from "../../../grpc-gateway";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export class Query {
  /** GroupInfo queries group info based on group id. */
  static groupInfo(request: QueryGroupInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_info/${request["group_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["group_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  static groupPolicyInfo(request: QueryGroupPolicyInfoRequest, initRequest?: fm.InitReq): Promise<QueryGroupPolicyInfoResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policy_info/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupMembers queries members of a group */
  static groupMembers(request: QueryGroupMembersRequest, initRequest?: fm.InitReq): Promise<QueryGroupMembersResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_members/${request["group_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["group_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupsByAdmin queries groups by admin address. */
  static groupsByAdmin(request: QueryGroupsByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_admin/${request["admin"]}?${fm.renderURLSearchParams({
      ...request
    }, ["admin"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupPoliciesByGroup queries group policies by group id. */
  static groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByGroupResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_group/${request["group_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["group_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupsByAdmin queries group policies by admin address. */
  static groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest, initRequest?: fm.InitReq): Promise<QueryGroupPoliciesByAdminResponse> {
    return fm.fetchReq(`/cosmos/group/v1/group_policies_by_admin/${request["admin"]}?${fm.renderURLSearchParams({
      ...request
    }, ["admin"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Proposal queries a proposal based on proposal id. */
  static proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  static proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest, initRequest?: fm.InitReq): Promise<QueryProposalsByGroupPolicyResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals_by_group_policy/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  static voteByProposalVoter(request: QueryVoteByProposalVoterRequest, initRequest?: fm.InitReq): Promise<QueryVoteByProposalVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/vote_by_proposal_voter/${request["proposal_id"]}/{voter}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** VotesByProposal queries a vote by proposal. */
  static votesByProposal(request: QueryVotesByProposalRequest, initRequest?: fm.InitReq): Promise<QueryVotesByProposalResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_proposal/${request["proposal_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** VotesByVoter queries a vote by voter. */
  static votesByVoter(request: QueryVotesByVoterRequest, initRequest?: fm.InitReq): Promise<QueryVotesByVoterResponse> {
    return fm.fetchReq(`/cosmos/group/v1/votes_by_voter/${request["voter"]}?${fm.renderURLSearchParams({
      ...request
    }, ["voter"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GroupsByMember queries groups by member address. */
  static groupsByMember(request: QueryGroupsByMemberRequest, initRequest?: fm.InitReq): Promise<QueryGroupsByMemberResponse> {
    return fm.fetchReq(`/cosmos/group/v1/groups_by_member/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TallyResult queries the tally of a proposal votes. */
  static tallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/group/v1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** GroupInfo queries group info based on group id. */
  async groupInfo(req: QueryGroupInfoRequest, headers?: HeadersInit): Promise<QueryGroupInfoResponse> {
    return Query.groupInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  async groupPolicyInfo(req: QueryGroupPolicyInfoRequest, headers?: HeadersInit): Promise<QueryGroupPolicyInfoResponse> {
    return Query.groupPolicyInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupMembers queries members of a group */
  async groupMembers(req: QueryGroupMembersRequest, headers?: HeadersInit): Promise<QueryGroupMembersResponse> {
    return Query.groupMembers(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupsByAdmin queries groups by admin address. */
  async groupsByAdmin(req: QueryGroupsByAdminRequest, headers?: HeadersInit): Promise<QueryGroupsByAdminResponse> {
    return Query.groupsByAdmin(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupPoliciesByGroup queries group policies by group id. */
  async groupPoliciesByGroup(req: QueryGroupPoliciesByGroupRequest, headers?: HeadersInit): Promise<QueryGroupPoliciesByGroupResponse> {
    return Query.groupPoliciesByGroup(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupsByAdmin queries group policies by admin address. */
  async groupPoliciesByAdmin(req: QueryGroupPoliciesByAdminRequest, headers?: HeadersInit): Promise<QueryGroupPoliciesByAdminResponse> {
    return Query.groupPoliciesByAdmin(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Proposal queries a proposal based on proposal id. */
  async proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse> {
    return Query.proposal(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  async proposalsByGroupPolicy(req: QueryProposalsByGroupPolicyRequest, headers?: HeadersInit): Promise<QueryProposalsByGroupPolicyResponse> {
    return Query.proposalsByGroupPolicy(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  async voteByProposalVoter(req: QueryVoteByProposalVoterRequest, headers?: HeadersInit): Promise<QueryVoteByProposalVoterResponse> {
    return Query.voteByProposalVoter(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** VotesByProposal queries a vote by proposal. */
  async votesByProposal(req: QueryVotesByProposalRequest, headers?: HeadersInit): Promise<QueryVotesByProposalResponse> {
    return Query.votesByProposal(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** VotesByVoter queries a vote by voter. */
  async votesByVoter(req: QueryVotesByVoterRequest, headers?: HeadersInit): Promise<QueryVotesByVoterResponse> {
    return Query.votesByVoter(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GroupsByMember queries groups by member address. */
  async groupsByMember(req: QueryGroupsByMemberRequest, headers?: HeadersInit): Promise<QueryGroupsByMemberResponse> {
    return Query.groupsByMember(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TallyResult queries the tally of a proposal votes. */
  async tallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse> {
    return Query.tallyResult(req, {
      headers,
      pathPrefix: this.url
    });
  }
}