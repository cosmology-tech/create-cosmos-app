import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoAmino, GroupPolicyInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./types";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.group.v1";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}
export interface QueryGroupInfoRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest";
  value: Uint8Array;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
}
export interface QueryGroupInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupInfoRequest";
  value: QueryGroupInfoRequestAmino;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestSDKType {
  group_id: Long;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  /** info is the GroupInfo for the group. */
  info?: GroupInfo;
}
export interface QueryGroupInfoResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse";
  value: Uint8Array;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseAmino {
  /** info is the GroupInfo for the group. */
  info?: GroupInfoAmino;
}
export interface QueryGroupInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupInfoResponse";
  value: QueryGroupInfoResponseAmino;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseSDKType {
  info?: GroupInfoSDKType;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
  /** address is the account address of the group policy. */
  address: string;
}
export interface QueryGroupPolicyInfoRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest";
  value: Uint8Array;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestAmino {
  /** address is the account address of the group policy. */
  address: string;
}
export interface QueryGroupPolicyInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPolicyInfoRequest";
  value: QueryGroupPolicyInfoRequestAmino;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestSDKType {
  address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
  /** info is the GroupPolicyInfo for the group policy. */
  info?: GroupPolicyInfo;
}
export interface QueryGroupPolicyInfoResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse";
  value: Uint8Array;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseAmino {
  /** info is the GroupPolicyInfo for the group policy. */
  info?: GroupPolicyInfoAmino;
}
export interface QueryGroupPolicyInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPolicyInfoResponse";
  value: QueryGroupPolicyInfoResponseAmino;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseSDKType {
  info?: GroupPolicyInfoSDKType;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupMembersRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest";
  value: Uint8Array;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupMembersRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupMembersRequest";
  value: QueryGroupMembersRequestAmino;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestSDKType {
  group_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupMembersResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse";
  value: Uint8Array;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseAmino {
  /** members are the members of the group with given group_id. */
  members: GroupMemberAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupMembersResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupMembersResponse";
  value: QueryGroupMembersResponseAmino;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseSDKType {
  members: GroupMemberSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsByAdminRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest";
  value: Uint8Array;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestAmino {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsByAdminRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsByAdminRequest";
  value: QueryGroupsByAdminRequestAmino;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsByAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse";
  value: Uint8Array;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseAmino {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsByAdminResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsByAdminResponse";
  value: QueryGroupsByAdminResponseAmino;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseSDKType {
  groups: GroupInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
  /** group_id is the unique ID of the group policy's group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupPoliciesByGroupRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest";
  value: Uint8Array;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestAmino {
  /** group_id is the unique ID of the group policy's group. */
  group_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByGroupRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest";
  value: QueryGroupPoliciesByGroupRequestAmino;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestSDKType {
  group_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
  /** group_policies are the group policies info associated with the provided group. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupPoliciesByGroupResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse";
  value: Uint8Array;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseAmino {
  /** group_policies are the group policies info associated with the provided group. */
  group_policies: GroupPolicyInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByGroupResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse";
  value: QueryGroupPoliciesByGroupResponseAmino;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseSDKType {
  group_policies: GroupPolicyInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupPoliciesByAdminRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest";
  value: Uint8Array;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestAmino {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByAdminRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest";
  value: QueryGroupPoliciesByAdminRequestAmino;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
  /** group_policies are the group policies info with provided admin. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupPoliciesByAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse";
  value: Uint8Array;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseAmino {
  /** group_policies are the group policies info with provided admin. */
  group_policies: GroupPolicyInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByAdminResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse";
  value: QueryGroupPoliciesByAdminResponseAmino;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseSDKType {
  group_policies: GroupPolicyInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestSDKType {
  proposal_id: Long;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseAmino {
  /** proposal is the proposal info. */
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseSDKType {
  proposal?: ProposalSDKType;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryProposalsByGroupPolicyRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest";
  value: Uint8Array;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestAmino {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProposalsByGroupPolicyRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest";
  value: QueryProposalsByGroupPolicyRequestAmino;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
  /** proposals are the proposals with given group policy. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryProposalsByGroupPolicyResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse";
  value: Uint8Array;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseAmino {
  /** proposals are the proposals with given group policy. */
  proposals: ProposalAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProposalsByGroupPolicyResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse";
  value: QueryProposalsByGroupPolicyResponseAmino;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** voter is a proposal voter account address. */
  voter: string;
}
export interface QueryVoteByProposalVoterRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest";
  value: Uint8Array;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: string;
  /** voter is a proposal voter account address. */
  voter: string;
}
export interface QueryVoteByProposalVoterRequestAminoMsg {
  type: "cosmos-sdk/QueryVoteByProposalVoterRequest";
  value: QueryVoteByProposalVoterRequestAmino;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestSDKType {
  proposal_id: Long;
  voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}
export interface QueryVoteByProposalVoterResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse";
  value: Uint8Array;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseAmino {
  /** vote is the vote with given proposal_id and voter. */
  vote?: VoteAmino;
}
export interface QueryVoteByProposalVoterResponseAminoMsg {
  type: "cosmos-sdk/QueryVoteByProposalVoterResponse";
  value: QueryVoteByProposalVoterResponseAmino;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseSDKType {
  vote?: VoteSDKType;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByProposalRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest";
  value: Uint8Array;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestAmino {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByProposalRequestAminoMsg {
  type: "cosmos-sdk/QueryVotesByProposalRequest";
  value: QueryVotesByProposalRequestAmino;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestSDKType {
  proposal_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse";
  value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseAmino {
  /** votes are the list of votes for given proposal_id. */
  votes: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByProposalResponseAminoMsg {
  type: "cosmos-sdk/QueryVotesByProposalResponse";
  value: QueryVotesByProposalResponseAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesByVoterRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest";
  value: Uint8Array;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestAmino {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesByVoterRequestAminoMsg {
  type: "cosmos-sdk/QueryVotesByVoterRequest";
  value: QueryVotesByVoterRequestAmino;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestSDKType {
  voter: string;
  pagination?: PageRequestSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesByVoterResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse";
  value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseAmino {
  /** votes are the list of votes by given voter. */
  votes: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesByVoterResponseAminoMsg {
  type: "cosmos-sdk/QueryVotesByVoterResponse";
  value: QueryVotesByVoterResponseAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsByMemberRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest";
  value: Uint8Array;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestAmino {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsByMemberRequestAminoMsg {
  type: "cosmos-sdk/QueryGroupsByMemberRequest";
  value: QueryGroupsByMemberRequestAmino;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsByMemberResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse";
  value: Uint8Array;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseAmino {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsByMemberResponseAminoMsg {
  type: "cosmos-sdk/QueryGroupsByMemberResponse";
  value: QueryGroupsByMemberResponseAmino;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseSDKType {
  groups: GroupInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
  /** proposal_id is the unique id of a proposal. */
  proposalId: Long;
}
export interface QueryTallyResultRequestProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest";
  value: Uint8Array;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestAmino {
  /** proposal_id is the unique id of a proposal. */
  proposal_id: string;
}
export interface QueryTallyResultRequestAminoMsg {
  type: "cosmos-sdk/QueryTallyResultRequest";
  value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestSDKType {
  proposal_id: Long;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally?: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse";
  value: Uint8Array;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseAmino {
  /** tally defines the requested tally. */
  tally?: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
  type: "cosmos-sdk/QueryTallyResultResponse";
  value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseSDKType {
  tally?: TallyResultSDKType;
}
function createBaseQueryGroupInfoRequest(): QueryGroupInfoRequest {
  return {
    groupId: Long.UZERO
  };
}
export const QueryGroupInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
  aminoType: "cosmos-sdk/QueryGroupInfoRequest",
  encode(message: QueryGroupInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupInfoRequest {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },
  toJSON(message: QueryGroupInfoRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupInfoRequest>): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryGroupInfoRequestSDKType): QueryGroupInfoRequest {
    return {
      groupId: object?.group_id
    };
  },
  toSDK(message: QueryGroupInfoRequest): QueryGroupInfoRequestSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAmino(object: QueryGroupInfoRequestAmino): QueryGroupInfoRequest {
    return {
      groupId: Long.fromString(object.group_id)
    };
  },
  toAmino(message: QueryGroupInfoRequest): QueryGroupInfoRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoRequestAminoMsg): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupInfoRequestProtoMsg): QueryGroupInfoRequest {
    return QueryGroupInfoRequest.decode(message.value);
  },
  toProto(message: QueryGroupInfoRequest): Uint8Array {
    return QueryGroupInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupInfoResponse(): QueryGroupInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
  aminoType: "cosmos-sdk/QueryGroupInfoResponse",
  encode(message: QueryGroupInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupInfoResponse {
    return {
      info: isSet(object.info) ? GroupInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryGroupInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupInfoResponse>): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? GroupInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupInfoResponseSDKType): QueryGroupInfoResponse {
    return {
      info: object.info ? GroupInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: QueryGroupInfoResponse): QueryGroupInfoResponseSDKType {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? GroupInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupInfoResponseAmino): QueryGroupInfoResponse {
    return {
      info: object?.info ? GroupInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: QueryGroupInfoResponse): QueryGroupInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupInfoResponseAminoMsg): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupInfoResponseProtoMsg): QueryGroupInfoResponse {
    return QueryGroupInfoResponse.decode(message.value);
  },
  toProto(message: QueryGroupInfoResponse): Uint8Array {
    return QueryGroupInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPolicyInfoRequest(): QueryGroupPolicyInfoRequest {
  return {
    address: ""
  };
}
export const QueryGroupPolicyInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
  aminoType: "cosmos-sdk/QueryGroupPolicyInfoRequest",
  encode(message: QueryGroupPolicyInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPolicyInfoRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryGroupPolicyInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupPolicyInfoRequest>): QueryGroupPolicyInfoRequest {
    const message = createBaseQueryGroupPolicyInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryGroupPolicyInfoRequestSDKType): QueryGroupPolicyInfoRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryGroupPolicyInfoRequestAmino): QueryGroupPolicyInfoRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPolicyInfoRequestAminoMsg): QueryGroupPolicyInfoRequest {
    return QueryGroupPolicyInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPolicyInfoRequestProtoMsg): QueryGroupPolicyInfoRequest {
    return QueryGroupPolicyInfoRequest.decode(message.value);
  },
  toProto(message: QueryGroupPolicyInfoRequest): Uint8Array {
    return QueryGroupPolicyInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPolicyInfoResponse(): QueryGroupPolicyInfoResponse {
  return {
    info: undefined
  };
}
export const QueryGroupPolicyInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
  aminoType: "cosmos-sdk/QueryGroupPolicyInfoResponse",
  encode(message: QueryGroupPolicyInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupPolicyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPolicyInfoResponse {
    return {
      info: isSet(object.info) ? GroupPolicyInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: QueryGroupPolicyInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? GroupPolicyInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupPolicyInfoResponse>): QueryGroupPolicyInfoResponse {
    const message = createBaseQueryGroupPolicyInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? GroupPolicyInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupPolicyInfoResponseSDKType): QueryGroupPolicyInfoResponse {
    return {
      info: object.info ? GroupPolicyInfo.fromSDK(object.info) : undefined
    };
  },
  toSDK(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseSDKType {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? GroupPolicyInfo.toSDK(message.info) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupPolicyInfoResponseAmino): QueryGroupPolicyInfoResponse {
    return {
      info: object?.info ? GroupPolicyInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? GroupPolicyInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPolicyInfoResponseAminoMsg): QueryGroupPolicyInfoResponse {
    return QueryGroupPolicyInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPolicyInfoResponseProtoMsg): QueryGroupPolicyInfoResponse {
    return QueryGroupPolicyInfoResponse.decode(message.value);
  },
  toProto(message: QueryGroupPolicyInfoResponse): Uint8Array {
    return QueryGroupPolicyInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersRequest(): QueryGroupMembersRequest {
  return {
    groupId: Long.UZERO,
    pagination: undefined
  };
}
export const QueryGroupMembersRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
  aminoType: "cosmos-sdk/QueryGroupMembersRequest",
  encode(message: QueryGroupMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersRequest {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupMembersRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupMembersRequest>): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupMembersRequestSDKType): QueryGroupMembersRequest {
    return {
      groupId: object?.group_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupMembersRequest): QueryGroupMembersRequestSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupMembersRequestAmino): QueryGroupMembersRequest {
    return {
      groupId: Long.fromString(object.group_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupMembersRequest): QueryGroupMembersRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersRequestAminoMsg): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupMembersRequestProtoMsg): QueryGroupMembersRequest {
    return QueryGroupMembersRequest.decode(message.value);
  },
  toProto(message: QueryGroupMembersRequest): Uint8Array {
    return QueryGroupMembersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersResponse(): QueryGroupMembersResponse {
  return {
    members: [],
    pagination: undefined
  };
}
export const QueryGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
  aminoType: "cosmos-sdk/QueryGroupMembersResponse",
  encode(message: QueryGroupMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupMembersResponse {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => GroupMember.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? GroupMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupMembersResponse>): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map(e => GroupMember.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupMembersResponseSDKType): QueryGroupMembersResponse {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => GroupMember.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupMembersResponse): QueryGroupMembersResponseSDKType {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? GroupMember.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupMembersResponseAmino): QueryGroupMembersResponse {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => GroupMember.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupMembersResponse): QueryGroupMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? GroupMember.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupMembersResponseAminoMsg): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupMembersResponseProtoMsg): QueryGroupMembersResponse {
    return QueryGroupMembersResponse.decode(message.value);
  },
  toProto(message: QueryGroupMembersResponse): Uint8Array {
    return QueryGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminRequest(): QueryGroupsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupsByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
  aminoType: "cosmos-sdk/QueryGroupsByAdminRequest",
  encode(message: QueryGroupsByAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupsByAdminRequest>): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupsByAdminRequestSDKType): QueryGroupsByAdminRequest {
    return {
      admin: object?.admin,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupsByAdminRequestAmino): QueryGroupsByAdminRequest {
    return {
      admin: object.admin,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminRequestAminoMsg): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByAdminRequestProtoMsg): QueryGroupsByAdminRequest {
    return QueryGroupsByAdminRequest.decode(message.value);
  },
  toProto(message: QueryGroupsByAdminRequest): Uint8Array {
    return QueryGroupsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminResponse(): QueryGroupsByAdminResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
  aminoType: "cosmos-sdk/QueryGroupsByAdminResponse",
  encode(message: QueryGroupsByAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByAdminResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByAdminResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupsByAdminResponse>): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupsByAdminResponseSDKType): QueryGroupsByAdminResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseSDKType {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupsByAdminResponseAmino): QueryGroupsByAdminResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByAdminResponseAminoMsg): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByAdminResponseProtoMsg): QueryGroupsByAdminResponse {
    return QueryGroupsByAdminResponse.decode(message.value);
  },
  toProto(message: QueryGroupsByAdminResponse): Uint8Array {
    return QueryGroupsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByGroupRequest(): QueryGroupPoliciesByGroupRequest {
  return {
    groupId: Long.UZERO,
    pagination: undefined
  };
}
export const QueryGroupPoliciesByGroupRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
  encode(message: QueryGroupPoliciesByGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByGroupRequest {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByGroupRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupPoliciesByGroupRequest>): QueryGroupPoliciesByGroupRequest {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupPoliciesByGroupRequestSDKType): QueryGroupPoliciesByGroupRequest {
    return {
      groupId: object?.group_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupPoliciesByGroupRequestAmino): QueryGroupPoliciesByGroupRequest {
    return {
      groupId: Long.fromString(object.group_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByGroupRequestAminoMsg): QueryGroupPoliciesByGroupRequest {
    return QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByGroupRequestProtoMsg): QueryGroupPoliciesByGroupRequest {
    return QueryGroupPoliciesByGroupRequest.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByGroupRequest): Uint8Array {
    return QueryGroupPoliciesByGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByGroupResponse(): QueryGroupPoliciesByGroupResponse {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
export const QueryGroupPoliciesByGroupResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
  encode(message: QueryGroupPoliciesByGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByGroupResponse {
    return {
      groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByGroupResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupPoliciesByGroupResponse>): QueryGroupPoliciesByGroupResponse {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupPoliciesByGroupResponseSDKType): QueryGroupPoliciesByGroupResponse {
    return {
      groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e: any) => GroupPolicyInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseSDKType {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toSDK(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupPoliciesByGroupResponseAmino): QueryGroupPoliciesByGroupResponse {
    return {
      groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e: any) => GroupPolicyInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseAmino {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByGroupResponseAminoMsg): QueryGroupPoliciesByGroupResponse {
    return QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByGroupResponseProtoMsg): QueryGroupPoliciesByGroupResponse {
    return QueryGroupPoliciesByGroupResponse.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByGroupResponse): Uint8Array {
    return QueryGroupPoliciesByGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByAdminRequest(): QueryGroupPoliciesByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryGroupPoliciesByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
  encode(message: QueryGroupPoliciesByAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupPoliciesByAdminRequest>): QueryGroupPoliciesByAdminRequest {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupPoliciesByAdminRequestSDKType): QueryGroupPoliciesByAdminRequest {
    return {
      admin: object?.admin,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupPoliciesByAdminRequestAmino): QueryGroupPoliciesByAdminRequest {
    return {
      admin: object.admin,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByAdminRequestAminoMsg): QueryGroupPoliciesByAdminRequest {
    return QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByAdminRequestProtoMsg): QueryGroupPoliciesByAdminRequest {
    return QueryGroupPoliciesByAdminRequest.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByAdminRequest): Uint8Array {
    return QueryGroupPoliciesByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByAdminResponse(): QueryGroupPoliciesByAdminResponse {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
export const QueryGroupPoliciesByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
  aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
  encode(message: QueryGroupPoliciesByAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupPoliciesByAdminResponse {
    return {
      groupPolicies: Array.isArray(object?.groupPolicies) ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupPoliciesByAdminResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupPoliciesByAdminResponse>): QueryGroupPoliciesByAdminResponse {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupPoliciesByAdminResponseSDKType): QueryGroupPoliciesByAdminResponse {
    return {
      groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e: any) => GroupPolicyInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseSDKType {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toSDK(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupPoliciesByAdminResponseAmino): QueryGroupPoliciesByAdminResponse {
    return {
      groupPolicies: Array.isArray(object?.group_policies) ? object.group_policies.map((e: any) => GroupPolicyInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseAmino {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
    } else {
      obj.group_policies = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupPoliciesByAdminResponseAminoMsg): QueryGroupPoliciesByAdminResponse {
    return QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupPoliciesByAdminResponseProtoMsg): QueryGroupPoliciesByAdminResponse {
    return QueryGroupPoliciesByAdminResponse.decode(message.value);
  },
  toProto(message: QueryGroupPoliciesByAdminResponse): Uint8Array {
    return QueryGroupPoliciesByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest",
  aminoType: "cosmos-sdk/QueryProposalRequest",
  encode(message: QueryProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },
  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryProposalRequestSDKType): QueryProposalRequest {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: QueryProposalRequest): QueryProposalRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse",
  aminoType: "cosmos-sdk/QueryProposalResponse",
  encode(message: QueryProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalResponseSDKType): QueryProposalResponse {
    return {
      proposal: object.proposal ? Proposal.fromSDK(object.proposal) : undefined
    };
  },
  toSDK(message: QueryProposalResponse): QueryProposalResponseSDKType {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toSDK(message.proposal) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    return {
      proposal: object?.proposal ? Proposal.fromAmino(object.proposal) : undefined
    };
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupPolicyRequest(): QueryProposalsByGroupPolicyRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryProposalsByGroupPolicyRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
  aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
  encode(message: QueryProposalsByGroupPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsByGroupPolicyRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsByGroupPolicyRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsByGroupPolicyRequest>): QueryProposalsByGroupPolicyRequest {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalsByGroupPolicyRequestSDKType): QueryProposalsByGroupPolicyRequest {
    return {
      address: object?.address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsByGroupPolicyRequestAmino): QueryProposalsByGroupPolicyRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupPolicyRequestAminoMsg): QueryProposalsByGroupPolicyRequest {
    return QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsByGroupPolicyRequestProtoMsg): QueryProposalsByGroupPolicyRequest {
    return QueryProposalsByGroupPolicyRequest.decode(message.value);
  },
  toProto(message: QueryProposalsByGroupPolicyRequest): Uint8Array {
    return QueryProposalsByGroupPolicyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupPolicyResponse(): QueryProposalsByGroupPolicyResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsByGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
  aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
  encode(message: QueryProposalsByGroupPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsByGroupPolicyResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsByGroupPolicyResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsByGroupPolicyResponse>): QueryProposalsByGroupPolicyResponse {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalsByGroupPolicyResponseSDKType): QueryProposalsByGroupPolicyResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseSDKType {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsByGroupPolicyResponseAmino): QueryProposalsByGroupPolicyResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByGroupPolicyResponseAminoMsg): QueryProposalsByGroupPolicyResponse {
    return QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsByGroupPolicyResponseProtoMsg): QueryProposalsByGroupPolicyResponse {
    return QueryProposalsByGroupPolicyResponse.decode(message.value);
  },
  toProto(message: QueryProposalsByGroupPolicyResponse): Uint8Array {
    return QueryProposalsByGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterRequest(): QueryVoteByProposalVoterRequest {
  return {
    proposalId: Long.UZERO,
    voter: ""
  };
}
export const QueryVoteByProposalVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
  aminoType: "cosmos-sdk/QueryVoteByProposalVoterRequest",
  encode(message: QueryVoteByProposalVoterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteByProposalVoterRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message: QueryVoteByProposalVoterRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteByProposalVoterRequest>): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    return message;
  },
  fromSDK(object: QueryVoteByProposalVoterRequestSDKType): QueryVoteByProposalVoterRequest {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter
    };
  },
  toSDK(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    return obj;
  },
  fromAmino(object: QueryVoteByProposalVoterRequestAmino): QueryVoteByProposalVoterRequest {
    return {
      proposalId: Long.fromString(object.proposal_id),
      voter: object.voter
    };
  },
  toAmino(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterRequestAminoMsg): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteByProposalVoterRequestProtoMsg): QueryVoteByProposalVoterRequest {
    return QueryVoteByProposalVoterRequest.decode(message.value);
  },
  toProto(message: QueryVoteByProposalVoterRequest): Uint8Array {
    return QueryVoteByProposalVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterResponse(): QueryVoteByProposalVoterResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteByProposalVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
  aminoType: "cosmos-sdk/QueryVoteByProposalVoterResponse",
  encode(message: QueryVoteByProposalVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteByProposalVoterResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: QueryVoteByProposalVoterResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteByProposalVoterResponse>): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromSDK(object: QueryVoteByProposalVoterResponseSDKType): QueryVoteByProposalVoterResponse {
    return {
      vote: object.vote ? Vote.fromSDK(object.vote) : undefined
    };
  },
  toSDK(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseSDKType {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toSDK(message.vote) : undefined);
    return obj;
  },
  fromAmino(object: QueryVoteByProposalVoterResponseAmino): QueryVoteByProposalVoterResponse {
    return {
      vote: object?.vote ? Vote.fromAmino(object.vote) : undefined
    };
  },
  toAmino(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteByProposalVoterResponseAminoMsg): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteByProposalVoterResponseProtoMsg): QueryVoteByProposalVoterResponse {
    return QueryVoteByProposalVoterResponse.decode(message.value);
  },
  toProto(message: QueryVoteByProposalVoterResponse): Uint8Array {
    return QueryVoteByProposalVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalRequest(): QueryVotesByProposalRequest {
  return {
    proposalId: Long.UZERO,
    pagination: undefined
  };
}
export const QueryVotesByProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
  aminoType: "cosmos-sdk/QueryVotesByProposalRequest",
  encode(message: QueryVotesByProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesByProposalRequest>): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesByProposalRequestSDKType): QueryVotesByProposalRequest {
    return {
      proposalId: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesByProposalRequestAmino): QueryVotesByProposalRequest {
    return {
      proposalId: Long.fromString(object.proposal_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalRequestAminoMsg): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByProposalRequestProtoMsg): QueryVotesByProposalRequest {
    return QueryVotesByProposalRequest.decode(message.value);
  },
  toProto(message: QueryVotesByProposalRequest): Uint8Array {
    return QueryVotesByProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalResponse(): QueryVotesByProposalResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
  aminoType: "cosmos-sdk/QueryVotesByProposalResponse",
  encode(message: QueryVotesByProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByProposalResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByProposalResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesByProposalResponse>): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesByProposalResponseSDKType): QueryVotesByProposalResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseSDKType {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesByProposalResponseAmino): QueryVotesByProposalResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByProposalResponseAminoMsg): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByProposalResponseProtoMsg): QueryVotesByProposalResponse {
    return QueryVotesByProposalResponse.decode(message.value);
  },
  toProto(message: QueryVotesByProposalResponse): Uint8Array {
    return QueryVotesByProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterRequest(): QueryVotesByVoterRequest {
  return {
    voter: "",
    pagination: undefined
  };
}
export const QueryVotesByVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
  aminoType: "cosmos-sdk/QueryVotesByVoterRequest",
  encode(message: QueryVotesByVoterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByVoterRequest {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByVoterRequest): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesByVoterRequestSDKType): QueryVotesByVoterRequest {
    return {
      voter: object?.voter,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestSDKType {
    const obj: any = {};
    obj.voter = message.voter;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest {
    return {
      voter: object.voter,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAmino {
    const obj: any = {};
    obj.voter = message.voter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterRequestAminoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByVoterRequestProtoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.decode(message.value);
  },
  toProto(message: QueryVotesByVoterRequest): Uint8Array {
    return QueryVotesByVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterResponse(): QueryVotesByVoterResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesByVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
  aminoType: "cosmos-sdk/QueryVotesByVoterResponse",
  encode(message: QueryVotesByVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesByVoterResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesByVoterResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesByVoterResponseSDKType): QueryVotesByVoterResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseSDKType {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterResponseAminoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesByVoterResponseProtoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.decode(message.value);
  },
  toProto(message: QueryVotesByVoterResponse): Uint8Array {
    return QueryVotesByVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByMemberRequest(): QueryGroupsByMemberRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryGroupsByMemberRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
  aminoType: "cosmos-sdk/QueryGroupsByMemberRequest",
  encode(message: QueryGroupsByMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByMemberRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByMemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupsByMemberRequest>): QueryGroupsByMemberRequest {
    const message = createBaseQueryGroupsByMemberRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupsByMemberRequestSDKType): QueryGroupsByMemberRequest {
    return {
      address: object?.address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupsByMemberRequestAmino): QueryGroupsByMemberRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByMemberRequestAminoMsg): QueryGroupsByMemberRequest {
    return QueryGroupsByMemberRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByMemberRequestProtoMsg): QueryGroupsByMemberRequest {
    return QueryGroupsByMemberRequest.decode(message.value);
  },
  toProto(message: QueryGroupsByMemberRequest): Uint8Array {
    return QueryGroupsByMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByMemberResponse(): QueryGroupsByMemberResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsByMemberResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
  aminoType: "cosmos-sdk/QueryGroupsByMemberResponse",
  encode(message: QueryGroupsByMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupsByMemberResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryGroupsByMemberResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupsByMemberResponse>): QueryGroupsByMemberResponse {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryGroupsByMemberResponseSDKType): QueryGroupsByMemberResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseSDKType {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupsByMemberResponseAmino): QueryGroupsByMemberResponse {
    return {
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsByMemberResponseAminoMsg): QueryGroupsByMemberResponse {
    return QueryGroupsByMemberResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGroupsByMemberResponseProtoMsg): QueryGroupsByMemberResponse {
    return QueryGroupsByMemberResponse.decode(message.value);
  },
  toProto(message: QueryGroupsByMemberResponse): Uint8Array {
    return QueryGroupsByMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
  aminoType: "cosmos-sdk/QueryTallyResultRequest",
  encode(message: QueryTallyResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },
  toJSON(message: QueryTallyResultRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryTallyResultRequestSDKType): QueryTallyResultRequest {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: QueryTallyResultRequest): QueryTallyResultRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },
  toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message: QueryTallyResultRequest): Uint8Array {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
  aminoType: "cosmos-sdk/QueryTallyResultResponse",
  encode(message: QueryTallyResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultResponse {
    return {
      tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined
    };
  },
  toJSON(message: QueryTallyResultResponse): unknown {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },
  fromSDK(object: QueryTallyResultResponseSDKType): QueryTallyResultResponse {
    return {
      tally: object.tally ? TallyResult.fromSDK(object.tally) : undefined
    };
  },
  toSDK(message: QueryTallyResultResponse): QueryTallyResultResponseSDKType {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toSDK(message.tally) : undefined);
    return obj;
  },
  fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse {
    return {
      tally: object?.tally ? TallyResult.fromAmino(object.tally) : undefined
    };
  },
  toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino {
    const obj: any = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message: QueryTallyResultResponse): Uint8Array {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};