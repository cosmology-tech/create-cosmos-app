import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType>;
  /*GroupInfo queries group info based on group id.*/

  groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType>;
  /*GroupPolicyInfo queries group policy info based on account address of group policy.*/

  groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType>;
  /*GroupMembers queries members of a group*/

  groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType>;
  /*GroupsByAdmin queries groups by admin address.*/

  groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType>;
  /*GroupPoliciesByGroup queries group policies by group id.*/

  groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType>;
  /*GroupsByAdmin queries group policies by admin address.*/

  proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
  /*Proposal queries a proposal based on proposal id.*/

  proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType>;
  /*ProposalsByGroupPolicy queries proposals based on account address of group policy.*/

  voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType>;
  /*VoteByProposalVoter queries a vote by proposal id and voter.*/

  votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType>;
  /*VotesByProposal queries a vote by proposal.*/

  votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType>;
  /*VotesByVoter queries a vote by voter.*/

  groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType>;
  /*GroupsByMember queries groups by member address.*/

  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
  /*TallyResult queries the tally of a proposal votes.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
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

  groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType> {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then(data => QueryGroupInfoResponse.decode(new _m0.Reader(data)));
  }

  groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType> {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then(data => QueryGroupPolicyInfoResponse.decode(new _m0.Reader(data)));
  }

  groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType> {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then(data => QueryGroupMembersResponse.decode(new _m0.Reader(data)));
  }

  groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType> {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then(data => QueryGroupsByAdminResponse.decode(new _m0.Reader(data)));
  }

  groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType> {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then(data => QueryGroupPoliciesByGroupResponse.decode(new _m0.Reader(data)));
  }

  groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType> {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then(data => QueryGroupPoliciesByAdminResponse.decode(new _m0.Reader(data)));
  }

  proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new _m0.Reader(data)));
  }

  proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType> {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then(data => QueryProposalsByGroupPolicyResponse.decode(new _m0.Reader(data)));
  }

  voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType> {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then(data => QueryVoteByProposalVoterResponse.decode(new _m0.Reader(data)));
  }

  votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType> {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then(data => QueryVotesByProposalResponse.decode(new _m0.Reader(data)));
  }

  votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType> {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then(data => QueryVotesByVoterResponse.decode(new _m0.Reader(data)));
  }

  groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType> {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then(data => QueryGroupsByMemberResponse.decode(new _m0.Reader(data)));
  }

  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType> {
      return queryService.groupInfo(request);
    },

    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType> {
      return queryService.groupPolicyInfo(request);
    },

    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType> {
      return queryService.groupMembers(request);
    },

    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType> {
      return queryService.groupsByAdmin(request);
    },

    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType> {
      return queryService.groupPoliciesByGroup(request);
    },

    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType> {
      return queryService.groupPoliciesByAdmin(request);
    },

    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
      return queryService.proposal(request);
    },

    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType> {
      return queryService.proposalsByGroupPolicy(request);
    },

    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType> {
      return queryService.voteByProposalVoter(request);
    },

    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType> {
      return queryService.votesByProposal(request);
    },

    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType> {
      return queryService.votesByVoter(request);
    },

    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType> {
      return queryService.groupsByMember(request);
    },

    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
      return queryService.tallyResult(request);
    }

  };
};