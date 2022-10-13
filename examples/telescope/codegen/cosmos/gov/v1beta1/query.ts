import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */

export interface QueryProposalRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */

export interface QueryProposalRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

export interface QueryProposalResponse {
  proposal?: Proposal | undefined;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

export interface QueryProposalResponseSDKType {
  proposal?: ProposalSDKType | undefined;
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

  pagination?: PageRequest | undefined;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */

export interface QueryProposalsRequestSDKType {
  /** proposal_status defines the status of the proposals. */
  proposal_status: ProposalStatusSDKType;
  /** voter defines the voter address for the proposals. */

  voter: string;
  /** depositor defines the deposit addresses from the proposals. */

  depositor: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

export interface QueryProposalsResponse {
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse | undefined;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType | undefined;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */

export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** voter defines the oter address for the proposals. */

  voter: string;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */

export interface QueryVoteRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** voter defines the oter address for the proposals. */

  voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */

export interface QueryVoteResponse {
  /** vote defined the queried vote. */
  vote?: Vote | undefined;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */

export interface QueryVoteResponseSDKType {
  /** vote defined the queried vote. */
  vote?: VoteSDKType | undefined;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */

export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest | undefined;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */

export interface QueryVotesRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType | undefined;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */

export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse | undefined;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */

export interface QueryVotesResponseSDKType {
  /** votes defined the queried votes. */
  votes: VoteSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  paramsType: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  votingParams?: VotingParams | undefined;
  /** deposit_params defines the parameters related to deposit. */

  depositParams?: DepositParams | undefined;
  /** tally_params defines the parameters related to tally. */

  tallyParams?: TallyParams | undefined;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** voting_params defines the parameters related to voting. */
  voting_params?: VotingParamsSDKType | undefined;
  /** deposit_params defines the parameters related to deposit. */

  deposit_params?: DepositParamsSDKType | undefined;
  /** tally_params defines the parameters related to tally. */

  tally_params?: TallyParamsSDKType | undefined;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */

export interface QueryDepositRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** depositor defines the deposit addresses from the proposals. */

  depositor: string;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */

export interface QueryDepositRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** depositor defines the deposit addresses from the proposals. */

  depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */

export interface QueryDepositResponse {
  /** deposit defines the requested deposit. */
  deposit?: Deposit | undefined;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */

export interface QueryDepositResponseSDKType {
  /** deposit defines the requested deposit. */
  deposit?: DepositSDKType | undefined;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

export interface QueryDepositsRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest | undefined;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

export interface QueryDepositsRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType | undefined;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

export interface QueryDepositsResponse {
  deposits: Deposit[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse | undefined;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType | undefined;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */

export interface QueryTallyResultRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */

export interface QueryTallyResultRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */

export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally?: TallyResult | undefined;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */

export interface QueryTallyResultResponseSDKType {
  /** tally defines the requested tally. */
  tally?: TallyResultSDKType | undefined;
}

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: Long.UZERO
  };
}

export const QueryProposalRequest = {
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

  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}

export const QueryProposalResponse = {
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

  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }

};

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}

export const QueryProposalsRequest = {
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

  fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}

export const QueryProposalsResponse = {
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

  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: Long.UZERO,
    voter: ""
  };
}

export const QueryVoteRequest = {
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

  fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    return message;
  }

};

function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: undefined
  };
}

export const QueryVoteResponse = {
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

  fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  }

};

function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryVotesRequest = {
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

  fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}

export const QueryVotesResponse = {
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

  fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    paramsType: ""
  };
}

export const QueryParamsRequest = {
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

  fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? "";
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    votingParams: undefined,
    depositParams: undefined,
    tallyParams: undefined
  };
}

export const QueryParamsResponse = {
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

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    return message;
  }

};

function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposalId: Long.UZERO,
    depositor: ""
  };
}

export const QueryDepositRequest = {
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

  fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    return message;
  }

};

function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: undefined
  };
}

export const QueryDepositResponse = {
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

  fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  }

};

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposalId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryDepositsRequest = {
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

  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}

export const QueryDepositsResponse = {
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

  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: Long.UZERO
  };
}

export const QueryTallyResultRequest = {
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

  fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}

export const QueryTallyResultResponse = {
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

  fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  }

};