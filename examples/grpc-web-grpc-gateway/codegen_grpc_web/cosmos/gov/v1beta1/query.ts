import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.gov.v1beta1";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
  proposal_id: Long;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
  proposal: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseAmino {
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
  proposal: ProposalSDKType;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
  /** proposal_status defines the status of the proposals. */
  proposalStatus: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryProposalsRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest";
  value: Uint8Array;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestAmino {
  /** proposal_status defines the status of the proposals. */
  proposal_status: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProposalsRequestAminoMsg {
  type: "cosmos-sdk/QueryProposalsRequest";
  value: QueryProposalsRequestAmino;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestSDKType {
  proposal_status: ProposalStatus;
  voter: string;
  depositor: string;
  pagination: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryProposalsResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseAmino {
  proposals: ProposalAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProposalsResponseAminoMsg {
  type: "cosmos-sdk/QueryProposalsResponse";
  value: QueryProposalsResponseAmino;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** voter defines the oter address for the proposals. */
  voter: string;
}
export interface QueryVoteRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest";
  value: Uint8Array;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter defines the oter address for the proposals. */
  voter: string;
}
export interface QueryVoteRequestAminoMsg {
  type: "cosmos-sdk/QueryVoteRequest";
  value: QueryVoteRequestAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
  proposal_id: Long;
  voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
  /** vote defined the queried vote. */
  vote: Vote;
}
export interface QueryVoteResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse";
  value: Uint8Array;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseAmino {
  /** vote defined the queried vote. */
  vote?: VoteAmino;
}
export interface QueryVoteResponseAminoMsg {
  type: "cosmos-sdk/QueryVoteResponse";
  value: QueryVoteResponseAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
  vote: VoteSDKType;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest";
  value: Uint8Array;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
  type: "cosmos-sdk/QueryVotesRequest";
  value: QueryVotesRequestAmino;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
  proposal_id: Long;
  pagination: PageRequestSDKType;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse";
  value: Uint8Array;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseAmino {
  /** votes defined the queried votes. */
  votes: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
  type: "cosmos-sdk/QueryVotesResponse";
  value: QueryVotesResponseAmino;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
  votes: VoteSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  paramsType: string;
}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type: string;
}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
  params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  votingParams: VotingParams;
  /** deposit_params defines the parameters related to deposit. */
  depositParams: DepositParams;
  /** tally_params defines the parameters related to tally. */
  tallyParams: TallyParams;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** voting_params defines the parameters related to voting. */
  voting_params?: VotingParamsAmino;
  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: DepositParamsAmino;
  /** tally_params defines the parameters related to tally. */
  tally_params?: TallyParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  voting_params: VotingParamsSDKType;
  deposit_params: DepositParamsSDKType;
  tally_params: TallyParamsSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}
export interface QueryDepositRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest";
  value: Uint8Array;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}
export interface QueryDepositRequestAminoMsg {
  type: "cosmos-sdk/QueryDepositRequest";
  value: QueryDepositRequestAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
  proposal_id: Long;
  depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
  /** deposit defines the requested deposit. */
  deposit: Deposit;
}
export interface QueryDepositResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse";
  value: Uint8Array;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseAmino {
  /** deposit defines the requested deposit. */
  deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
  type: "cosmos-sdk/QueryDepositResponse";
  value: QueryDepositResponseAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
  deposit: DepositSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest";
  value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
  type: "cosmos-sdk/QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  proposal_id: Long;
  pagination: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  deposits: Deposit[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse";
  value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
  deposits: DepositAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
  type: "cosmos-sdk/QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
}
export interface QueryTallyResultRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest";
  value: Uint8Array;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
}
export interface QueryTallyResultRequestAminoMsg {
  type: "cosmos-sdk/QueryTallyResultRequest";
  value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
  proposal_id: Long;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse";
  value: Uint8Array;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseAmino {
  /** tally defines the requested tally. */
  tally?: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
  type: "cosmos-sdk/QueryTallyResultResponse";
  value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
  tally: TallyResultSDKType;
}
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
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
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
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
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
  aminoType: "cosmos-sdk/QueryProposalsRequest",
  encode(message: QueryProposalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = (reader.int32() as any);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsRequest {
    return {
      proposalStatus: isSet(object.proposalStatus) ? proposalStatusFromJSON(object.proposalStatus) : 0,
      voter: isSet(object.voter) ? String(object.voter) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.proposalStatus !== undefined && (obj.proposalStatus = proposalStatusToJSON(message.proposalStatus));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalsRequestSDKType): QueryProposalsRequest {
    return {
      proposalStatus: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : 0,
      voter: object?.voter,
      depositor: object?.depositor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsRequest): QueryProposalsRequestSDKType {
    const obj: any = {};
    message.proposalStatus !== undefined && (obj.proposal_status = proposalStatusToJSON(message.proposalStatus));
    obj.voter = message.voter;
    obj.depositor = message.depositor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    return {
      proposalStatus: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : 0,
      voter: object.voter,
      depositor: object.depositor,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.proposal_status = message.proposalStatus;
    obj.voter = message.voter;
    obj.depositor = message.depositor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsRequest): QueryProposalsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsRequest",
      value: QueryProposalsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
  aminoType: "cosmos-sdk/QueryProposalsResponse",
  encode(message: QueryProposalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
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
  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProposalsResponseSDKType): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsResponse): QueryProposalsResponseSDKType {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsResponse): QueryProposalsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryProposalsResponse",
      value: QueryProposalsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: Long.UZERO,
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
  aminoType: "cosmos-sdk/QueryVoteRequest",
  encode(message: QueryVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
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
  fromJSON(object: any): QueryVoteRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message: QueryVoteRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    return message;
  },
  fromSDK(object: QueryVoteRequestSDKType): QueryVoteRequest {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter
    };
  },
  toSDK(message: QueryVoteRequest): QueryVoteRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    return obj;
  },
  fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest {
    return {
      proposalId: Long.fromString(object.proposal_id),
      voter: object.voter
    };
  },
  toAmino(message: QueryVoteRequest): QueryVoteRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest {
    return QueryVoteRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteRequest): QueryVoteRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteRequest",
      value: QueryVoteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message: QueryVoteRequest): Uint8Array {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: Vote.fromPartial({})
  };
}
export const QueryVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
  aminoType: "cosmos-sdk/QueryVoteResponse",
  encode(message: QueryVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
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
  fromJSON(object: any): QueryVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: QueryVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromSDK(object: QueryVoteResponseSDKType): QueryVoteResponse {
    return {
      vote: object.vote ? Vote.fromSDK(object.vote) : undefined
    };
  },
  toSDK(message: QueryVoteResponse): QueryVoteResponseSDKType {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toSDK(message.vote) : undefined);
    return obj;
  },
  fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse {
    return {
      vote: object?.vote ? Vote.fromAmino(object.vote) : undefined
    };
  },
  toAmino(message: QueryVoteResponse): QueryVoteResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse {
    return QueryVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteResponse): QueryVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVoteResponse",
      value: QueryVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message: QueryVoteResponse): Uint8Array {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryVotesRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
  aminoType: "cosmos-sdk/QueryVotesRequest",
  encode(message: QueryVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
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
  fromJSON(object: any): QueryVotesRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesRequestSDKType): QueryVotesRequest {
    return {
      proposalId: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesRequest): QueryVotesRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest {
    return {
      proposalId: Long.fromString(object.proposal_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesRequest): QueryVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest {
    return QueryVotesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesRequest): QueryVotesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesRequest",
      value: QueryVotesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message: QueryVotesRequest): Uint8Array {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryVotesResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
  aminoType: "cosmos-sdk/QueryVotesResponse",
  encode(message: QueryVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
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
  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryVotesResponseSDKType): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesResponse): QueryVotesResponseSDKType {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryVotesResponse): QueryVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse {
    return QueryVotesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesResponse): QueryVotesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVotesResponse",
      value: QueryVotesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message: QueryVotesResponse): Uint8Array {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    paramsType: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  encode(message: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsRequest {
    return {
      paramsType: isSet(object.paramsType) ? String(object.paramsType) : ""
    };
  },
  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.paramsType !== undefined && (obj.paramsType = message.paramsType);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? "";
    return message;
  },
  fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest {
    return {
      paramsType: object?.params_type
    };
  },
  toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    obj.params_type = message.paramsType;
    return obj;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    return {
      paramsType: object.params_type
    };
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.params_type = message.paramsType;
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    votingParams: VotingParams.fromPartial({}),
    depositParams: DepositParams.fromPartial({}),
    tallyParams: TallyParams.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
      depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
      tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.votingParams !== undefined && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
    message.depositParams !== undefined && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
    message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      votingParams: object.voting_params ? VotingParams.fromSDK(object.voting_params) : undefined,
      depositParams: object.deposit_params ? DepositParams.fromSDK(object.deposit_params) : undefined,
      tallyParams: object.tally_params ? TallyParams.fromSDK(object.tally_params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.votingParams !== undefined && (obj.voting_params = message.votingParams ? VotingParams.toSDK(message.votingParams) : undefined);
    message.depositParams !== undefined && (obj.deposit_params = message.depositParams ? DepositParams.toSDK(message.depositParams) : undefined);
    message.tallyParams !== undefined && (obj.tally_params = message.tallyParams ? TallyParams.toSDK(message.tallyParams) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      votingParams: object?.voting_params ? VotingParams.fromAmino(object.voting_params) : undefined,
      depositParams: object?.deposit_params ? DepositParams.fromAmino(object.deposit_params) : undefined,
      tallyParams: object?.tally_params ? TallyParams.fromAmino(object.tally_params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposalId: Long.UZERO,
    depositor: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
  aminoType: "cosmos-sdk/QueryDepositRequest",
  encode(message: QueryDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON(message: QueryDepositRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromSDK(object: QueryDepositRequestSDKType): QueryDepositRequest {
    return {
      proposalId: object?.proposal_id,
      depositor: object?.depositor
    };
  },
  toSDK(message: QueryDepositRequest): QueryDepositRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.depositor = message.depositor;
    return obj;
  },
  fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest {
    return {
      proposalId: Long.fromString(object.proposal_id),
      depositor: object.depositor
    };
  },
  toAmino(message: QueryDepositRequest): QueryDepositRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.depositor = message.depositor;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest {
    return QueryDepositRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositRequest): QueryDepositRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDepositRequest",
      value: QueryDepositRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message: QueryDepositRequest): Uint8Array {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: Deposit.fromPartial({})
  };
}
export const QueryDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
  aminoType: "cosmos-sdk/QueryDepositResponse",
  encode(message: QueryDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositResponse {
    return {
      deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: QueryDepositResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromSDK(object: QueryDepositResponseSDKType): QueryDepositResponse {
    return {
      deposit: object.deposit ? Deposit.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: QueryDepositResponse): QueryDepositResponseSDKType {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    return {
      deposit: object?.deposit ? Deposit.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositResponse): QueryDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDepositResponse",
      value: QueryDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposalId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
  aminoType: "cosmos-sdk/QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
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
  fromJSON(object: any): QueryDepositsRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDepositsRequestSDKType): QueryDepositsRequest {
    return {
      proposalId: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDepositsRequest): QueryDepositsRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    return {
      proposalId: Long.fromString(object.proposal_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsRequest): QueryDepositsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDepositsRequest",
      value: QueryDepositsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
  aminoType: "cosmos-sdk/QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDepositsResponseSDKType): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDepositsResponse): QueryDepositsResponseSDKType {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toSDK(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsResponse): QueryDepositsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDepositsResponse",
      value: QueryDepositsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
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
      typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: TallyResult.fromPartial({})
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
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
      typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};