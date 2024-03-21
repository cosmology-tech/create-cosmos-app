import { ProposalStatus, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest";
    value: Uint8Array;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
    type: "cosmos-sdk/QueryProposalRequest";
    value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
    proposal_id: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    proposal: Proposal | undefined;
}
export interface QueryProposalResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse";
    value: Uint8Array;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseAmino {
    proposal?: ProposalAmino | undefined;
}
export interface QueryProposalResponseAminoMsg {
    type: "cosmos-sdk/QueryProposalResponse";
    value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
    proposal: ProposalSDKType | undefined;
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
export interface QueryProposalsRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest";
    value: Uint8Array;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestAmino {
    /** proposal_status defines the status of the proposals. */
    proposal_status?: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter?: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
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
export interface QueryProposalsResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse";
    value: Uint8Array;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseAmino {
    proposals?: ProposalAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
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
    pagination?: PageResponseSDKType | undefined;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
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
    proposal_id?: string;
    /** voter defines the oter address for the proposals. */
    voter?: string;
}
export interface QueryVoteRequestAminoMsg {
    type: "cosmos-sdk/QueryVoteRequest";
    value: QueryVoteRequestAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
    proposal_id: bigint;
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defined the queried vote. */
    vote: Vote | undefined;
}
export interface QueryVoteResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse";
    value: Uint8Array;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseAmino {
    /** vote defined the queried vote. */
    vote?: VoteAmino | undefined;
}
export interface QueryVoteResponseAminoMsg {
    type: "cosmos-sdk/QueryVoteResponse";
    value: QueryVoteResponseAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
    vote: VoteSDKType | undefined;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryVotesRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest";
    value: Uint8Array;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryVotesRequestAminoMsg {
    type: "cosmos-sdk/QueryVotesRequest";
    value: QueryVotesRequestAmino;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType | undefined;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defined the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryVotesResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse";
    value: Uint8Array;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseAmino {
    /** votes defined the queried votes. */
    votes?: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryVotesResponseAminoMsg {
    type: "cosmos-sdk/QueryVotesResponse";
    value: QueryVotesResponseAmino;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
    votes: VoteSDKType[];
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
    params_type?: string;
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
    votingParams: VotingParams | undefined;
    /** deposit_params defines the parameters related to deposit. */
    depositParams: DepositParams | undefined;
    /** tally_params defines the parameters related to tally. */
    tallyParams: TallyParams | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** voting_params defines the parameters related to voting. */
    voting_params?: VotingParamsAmino | undefined;
    /** deposit_params defines the parameters related to deposit. */
    deposit_params?: DepositParamsAmino | undefined;
    /** tally_params defines the parameters related to tally. */
    tally_params?: TallyParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    voting_params: VotingParamsSDKType | undefined;
    deposit_params: DepositParamsSDKType | undefined;
    tally_params: TallyParamsSDKType | undefined;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
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
    proposal_id?: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor?: string;
}
export interface QueryDepositRequestAminoMsg {
    type: "cosmos-sdk/QueryDepositRequest";
    value: QueryDepositRequestAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
    proposal_id: bigint;
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit: Deposit | undefined;
}
export interface QueryDepositResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse";
    value: Uint8Array;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseAmino {
    /** deposit defines the requested deposit. */
    deposit?: DepositAmino | undefined;
}
export interface QueryDepositResponseAminoMsg {
    type: "cosmos-sdk/QueryDepositResponse";
    value: QueryDepositResponseAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
    deposit: DepositSDKType | undefined;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryDepositsRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest";
    value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDepositsRequestAminoMsg {
    type: "cosmos-sdk/QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType | undefined;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryDepositsResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse";
    value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
    deposits?: DepositAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDepositsResponseAminoMsg {
    type: "cosmos-sdk/QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest";
    value: Uint8Array;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestAmino {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id?: string;
}
export interface QueryTallyResultRequestAminoMsg {
    type: "cosmos-sdk/QueryTallyResultRequest";
    value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
    proposal_id: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally: TallyResult | undefined;
}
export interface QueryTallyResultResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse";
    value: Uint8Array;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseAmino {
    /** tally defines the requested tally. */
    tally?: TallyResultAmino | undefined;
}
export interface QueryTallyResultResponseAminoMsg {
    type: "cosmos-sdk/QueryTallyResultResponse";
    value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
    tally: TallyResultSDKType | undefined;
}
export declare const QueryProposalRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryProposalRequest;
    isSDK(o: any): o is QueryProposalRequestSDKType;
    isAmino(o: any): o is QueryProposalRequestAmino;
    encode(message: QueryProposalRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest;
    fromSDK(object: QueryProposalRequestSDKType): QueryProposalRequest;
    toSDK(message: QueryProposalRequest): QueryProposalRequestSDKType;
    fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest;
    toAmino(message: QueryProposalRequest): QueryProposalRequestAmino;
    fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest;
    toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg;
    fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest;
    toProto(message: QueryProposalRequest): Uint8Array;
    toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg;
};
export declare const QueryProposalResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryProposalResponse;
    isSDK(o: any): o is QueryProposalResponseSDKType;
    isAmino(o: any): o is QueryProposalResponseAmino;
    encode(message: QueryProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse;
    fromSDK(object: QueryProposalResponseSDKType): QueryProposalResponse;
    toSDK(message: QueryProposalResponse): QueryProposalResponseSDKType;
    fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse;
    toAmino(message: QueryProposalResponse): QueryProposalResponseAmino;
    fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse;
    toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg;
    fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse;
    toProto(message: QueryProposalResponse): Uint8Array;
    toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg;
};
export declare const QueryProposalsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryProposalsRequest;
    isSDK(o: any): o is QueryProposalsRequestSDKType;
    isAmino(o: any): o is QueryProposalsRequestAmino;
    encode(message: QueryProposalsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest;
    fromSDK(object: QueryProposalsRequestSDKType): QueryProposalsRequest;
    toSDK(message: QueryProposalsRequest): QueryProposalsRequestSDKType;
    fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest;
    toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino;
    fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest;
    toAminoMsg(message: QueryProposalsRequest): QueryProposalsRequestAminoMsg;
    fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest;
    toProto(message: QueryProposalsRequest): Uint8Array;
    toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg;
};
export declare const QueryProposalsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryProposalsResponse;
    isSDK(o: any): o is QueryProposalsResponseSDKType;
    isAmino(o: any): o is QueryProposalsResponseAmino;
    encode(message: QueryProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse;
    fromSDK(object: QueryProposalsResponseSDKType): QueryProposalsResponse;
    toSDK(message: QueryProposalsResponse): QueryProposalsResponseSDKType;
    fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse;
    toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino;
    fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse;
    toAminoMsg(message: QueryProposalsResponse): QueryProposalsResponseAminoMsg;
    fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse;
    toProto(message: QueryProposalsResponse): Uint8Array;
    toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg;
};
export declare const QueryVoteRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryVoteRequest;
    isSDK(o: any): o is QueryVoteRequestSDKType;
    isAmino(o: any): o is QueryVoteRequestAmino;
    encode(message: QueryVoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest;
    fromJSON(object: any): QueryVoteRequest;
    toJSON(message: QueryVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest;
    fromSDK(object: QueryVoteRequestSDKType): QueryVoteRequest;
    toSDK(message: QueryVoteRequest): QueryVoteRequestSDKType;
    fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest;
    toAmino(message: QueryVoteRequest): QueryVoteRequestAmino;
    fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest;
    toAminoMsg(message: QueryVoteRequest): QueryVoteRequestAminoMsg;
    fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest;
    toProto(message: QueryVoteRequest): Uint8Array;
    toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg;
};
export declare const QueryVoteResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryVoteResponse;
    isSDK(o: any): o is QueryVoteResponseSDKType;
    isAmino(o: any): o is QueryVoteResponseAmino;
    encode(message: QueryVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse;
    fromJSON(object: any): QueryVoteResponse;
    toJSON(message: QueryVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse;
    fromSDK(object: QueryVoteResponseSDKType): QueryVoteResponse;
    toSDK(message: QueryVoteResponse): QueryVoteResponseSDKType;
    fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse;
    toAmino(message: QueryVoteResponse): QueryVoteResponseAmino;
    fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse;
    toAminoMsg(message: QueryVoteResponse): QueryVoteResponseAminoMsg;
    fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse;
    toProto(message: QueryVoteResponse): Uint8Array;
    toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg;
};
export declare const QueryVotesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryVotesRequest;
    isSDK(o: any): o is QueryVotesRequestSDKType;
    isAmino(o: any): o is QueryVotesRequestAmino;
    encode(message: QueryVotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest;
    fromJSON(object: any): QueryVotesRequest;
    toJSON(message: QueryVotesRequest): unknown;
    fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest;
    fromSDK(object: QueryVotesRequestSDKType): QueryVotesRequest;
    toSDK(message: QueryVotesRequest): QueryVotesRequestSDKType;
    fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest;
    toAmino(message: QueryVotesRequest): QueryVotesRequestAmino;
    fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest;
    toAminoMsg(message: QueryVotesRequest): QueryVotesRequestAminoMsg;
    fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest;
    toProto(message: QueryVotesRequest): Uint8Array;
    toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg;
};
export declare const QueryVotesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryVotesResponse;
    isSDK(o: any): o is QueryVotesResponseSDKType;
    isAmino(o: any): o is QueryVotesResponseAmino;
    encode(message: QueryVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse;
    fromJSON(object: any): QueryVotesResponse;
    toJSON(message: QueryVotesResponse): unknown;
    fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse;
    fromSDK(object: QueryVotesResponseSDKType): QueryVotesResponse;
    toSDK(message: QueryVotesResponse): QueryVotesResponseSDKType;
    fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse;
    toAmino(message: QueryVotesResponse): QueryVotesResponseAmino;
    fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse;
    toAminoMsg(message: QueryVotesResponse): QueryVotesResponseAminoMsg;
    fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse;
    toProto(message: QueryVotesResponse): Uint8Array;
    toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(message: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(message: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDepositRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDepositRequest;
    isSDK(o: any): o is QueryDepositRequestSDKType;
    isAmino(o: any): o is QueryDepositRequestAmino;
    encode(message: QueryDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest;
    fromJSON(object: any): QueryDepositRequest;
    toJSON(message: QueryDepositRequest): unknown;
    fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest;
    fromSDK(object: QueryDepositRequestSDKType): QueryDepositRequest;
    toSDK(message: QueryDepositRequest): QueryDepositRequestSDKType;
    fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest;
    toAmino(message: QueryDepositRequest): QueryDepositRequestAmino;
    fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest;
    toAminoMsg(message: QueryDepositRequest): QueryDepositRequestAminoMsg;
    fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest;
    toProto(message: QueryDepositRequest): Uint8Array;
    toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg;
};
export declare const QueryDepositResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDepositResponse;
    isSDK(o: any): o is QueryDepositResponseSDKType;
    isAmino(o: any): o is QueryDepositResponseAmino;
    encode(message: QueryDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse;
    fromJSON(object: any): QueryDepositResponse;
    toJSON(message: QueryDepositResponse): unknown;
    fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse;
    fromSDK(object: QueryDepositResponseSDKType): QueryDepositResponse;
    toSDK(message: QueryDepositResponse): QueryDepositResponseSDKType;
    fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse;
    toAmino(message: QueryDepositResponse): QueryDepositResponseAmino;
    fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse;
    toAminoMsg(message: QueryDepositResponse): QueryDepositResponseAminoMsg;
    fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse;
    toProto(message: QueryDepositResponse): Uint8Array;
    toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg;
};
export declare const QueryDepositsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDepositsRequest;
    isSDK(o: any): o is QueryDepositsRequestSDKType;
    isAmino(o: any): o is QueryDepositsRequestAmino;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest;
    fromSDK(object: QueryDepositsRequestSDKType): QueryDepositsRequest;
    toSDK(message: QueryDepositsRequest): QueryDepositsRequestSDKType;
    fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest;
    toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino;
    fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest;
    toAminoMsg(message: QueryDepositsRequest): QueryDepositsRequestAminoMsg;
    fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest;
    toProto(message: QueryDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDepositsResponse;
    isSDK(o: any): o is QueryDepositsResponseSDKType;
    isAmino(o: any): o is QueryDepositsResponseAmino;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse;
    fromSDK(object: QueryDepositsResponseSDKType): QueryDepositsResponse;
    toSDK(message: QueryDepositsResponse): QueryDepositsResponseSDKType;
    fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse;
    toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino;
    fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse;
    toAminoMsg(message: QueryDepositsResponse): QueryDepositsResponseAminoMsg;
    fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse;
    toProto(message: QueryDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg;
};
export declare const QueryTallyResultRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTallyResultRequest;
    isSDK(o: any): o is QueryTallyResultRequestSDKType;
    isAmino(o: any): o is QueryTallyResultRequestAmino;
    encode(message: QueryTallyResultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest;
    fromSDK(object: QueryTallyResultRequestSDKType): QueryTallyResultRequest;
    toSDK(message: QueryTallyResultRequest): QueryTallyResultRequestSDKType;
    fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest;
    toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino;
    fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest;
    toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg;
    fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest;
    toProto(message: QueryTallyResultRequest): Uint8Array;
    toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg;
};
export declare const QueryTallyResultResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTallyResultResponse;
    isSDK(o: any): o is QueryTallyResultResponseSDKType;
    isAmino(o: any): o is QueryTallyResultResponseAmino;
    encode(message: QueryTallyResultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse;
    fromSDK(object: QueryTallyResultResponseSDKType): QueryTallyResultResponse;
    toSDK(message: QueryTallyResultResponse): QueryTallyResultResponseSDKType;
    fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse;
    toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino;
    fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse;
    toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg;
    fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse;
    toProto(message: QueryTallyResultResponse): Uint8Array;
    toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg;
};
