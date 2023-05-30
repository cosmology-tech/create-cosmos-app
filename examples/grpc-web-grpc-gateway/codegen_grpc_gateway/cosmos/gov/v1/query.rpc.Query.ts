import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import * as fm from "../../../grpc-gateway";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
export class Query {
  /** Proposal queries proposal details based on ProposalID. */
  static proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Proposals queries all proposals based on given status. */
  static proposals(request: QueryProposalsRequest, initRequest?: fm.InitReq): Promise<QueryProposalsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Vote queries voted information based on proposalID, voterAddr. */
  static vote(request: QueryVoteRequest, initRequest?: fm.InitReq): Promise<QueryVoteResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/votes/{voter}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Votes queries votes of a given proposal. */
  static votes(request: QueryVotesRequest, initRequest?: fm.InitReq): Promise<QueryVotesResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/votes?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries all parameters of the gov module. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/params/${request["params_type"]}?${fm.renderURLSearchParams({
      ...request
    }, ["params_type"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  static deposit(request: QueryDepositRequest, initRequest?: fm.InitReq): Promise<QueryDepositResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/deposits/{depositor}?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Deposits queries all deposits of a single proposal. */
  static deposits(request: QueryDepositsRequest, initRequest?: fm.InitReq): Promise<QueryDepositsResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/deposits?${fm.renderURLSearchParams({
      ...request
    }, ["proposal_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TallyResult queries the tally of a proposal vote. */
  static tallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse> {
    return fm.fetchReq(`/cosmos/gov/v1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({
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
  /** Proposal queries proposal details based on ProposalID. */
  async proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse> {
    return Query.proposal(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Proposals queries all proposals based on given status. */
  async proposals(req: QueryProposalsRequest, headers?: HeadersInit): Promise<QueryProposalsResponse> {
    return Query.proposals(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Vote queries voted information based on proposalID, voterAddr. */
  async vote(req: QueryVoteRequest, headers?: HeadersInit): Promise<QueryVoteResponse> {
    return Query.vote(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Votes queries votes of a given proposal. */
  async votes(req: QueryVotesRequest, headers?: HeadersInit): Promise<QueryVotesResponse> {
    return Query.votes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries all parameters of the gov module. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  async deposit(req: QueryDepositRequest, headers?: HeadersInit): Promise<QueryDepositResponse> {
    return Query.deposit(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Deposits queries all deposits of a single proposal. */
  async deposits(req: QueryDepositsRequest, headers?: HeadersInit): Promise<QueryDepositsResponse> {
    return Query.deposits(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TallyResult queries the tally of a proposal vote. */
  async tallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse> {
    return Query.tallyResult(req, {
      headers,
      pathPrefix: this.url
    });
  }
}