import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Proposal queries proposal details based on ProposalID. */
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** Proposals queries all proposals based on given status. */
  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
  /** Params queries all parameters of the gov module. */
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
  /** Deposits queries all deposits of a single proposal. */
  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** TallyResult queries the tally of a proposal vote. */
  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Proposal queries proposal details based on ProposalID. */
  proposal = async (request: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  };
  /* Proposals queries all proposals based on given status. */
  proposals = async (request: QueryProposalsRequest): Promise<QueryProposalsResponse> => {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new BinaryReader(data)));
  };
  /* Vote queries voted information based on proposalID, voterAddr. */
  vote = async (request: QueryVoteRequest): Promise<QueryVoteResponse> => {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new BinaryReader(data)));
  };
  /* Votes queries votes of a given proposal. */
  votes = async (request: QueryVotesRequest): Promise<QueryVotesResponse> => {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new BinaryReader(data)));
  };
  /* Params queries all parameters of the gov module. */
  params = async (request: QueryParamsRequest): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Deposit queries single deposit information based proposalID, depositAddr. */
  deposit = async (request: QueryDepositRequest): Promise<QueryDepositResponse> => {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new BinaryReader(data)));
  };
  /* Deposits queries all deposits of a single proposal. */
  deposits = async (request: QueryDepositsRequest): Promise<QueryDepositsResponse> => {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  };
  /* TallyResult queries the tally of a proposal vote. */
  tallyResult = async (request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};
export interface UseProposalQuery<TData> extends ReactQueryParams<QueryProposalResponse, TData> {
  request: QueryProposalRequest;
}
export interface UseProposalsQuery<TData> extends ReactQueryParams<QueryProposalsResponse, TData> {
  request: QueryProposalsRequest;
}
export interface UseVoteQuery<TData> extends ReactQueryParams<QueryVoteResponse, TData> {
  request: QueryVoteRequest;
}
export interface UseVotesQuery<TData> extends ReactQueryParams<QueryVotesResponse, TData> {
  request: QueryVotesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request: QueryParamsRequest;
}
export interface UseDepositQuery<TData> extends ReactQueryParams<QueryDepositResponse, TData> {
  request: QueryDepositRequest;
}
export interface UseDepositsQuery<TData> extends ReactQueryParams<QueryDepositsResponse, TData> {
  request: QueryDepositsRequest;
}
export interface UseTallyResultQuery<TData> extends ReactQueryParams<QueryTallyResultResponse, TData> {
  request: QueryTallyResultRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useProposal = <TData = QueryProposalResponse,>({
    request,
    options
  }: UseProposalQuery<TData>) => {
    return useQuery<QueryProposalResponse, Error, TData>(["proposalQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposal(request);
    }, options);
  };
  const useProposals = <TData = QueryProposalsResponse,>({
    request,
    options
  }: UseProposalsQuery<TData>) => {
    return useQuery<QueryProposalsResponse, Error, TData>(["proposalsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.proposals(request);
    }, options);
  };
  const useVote = <TData = QueryVoteResponse,>({
    request,
    options
  }: UseVoteQuery<TData>) => {
    return useQuery<QueryVoteResponse, Error, TData>(["voteQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.vote(request);
    }, options);
  };
  const useVotes = <TData = QueryVotesResponse,>({
    request,
    options
  }: UseVotesQuery<TData>) => {
    return useQuery<QueryVotesResponse, Error, TData>(["votesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.votes(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useDeposit = <TData = QueryDepositResponse,>({
    request,
    options
  }: UseDepositQuery<TData>) => {
    return useQuery<QueryDepositResponse, Error, TData>(["depositQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deposit(request);
    }, options);
  };
  const useDeposits = <TData = QueryDepositsResponse,>({
    request,
    options
  }: UseDepositsQuery<TData>) => {
    return useQuery<QueryDepositsResponse, Error, TData>(["depositsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deposits(request);
    }, options);
  };
  const useTallyResult = <TData = QueryTallyResultResponse,>({
    request,
    options
  }: UseTallyResultQuery<TData>) => {
    return useQuery<QueryTallyResultResponse, Error, TData>(["tallyResultQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tallyResult(request);
    }, options);
  };
  return {
    /** Proposal queries proposal details based on ProposalID. */useProposal,
    /** Proposals queries all proposals based on given status. */useProposals,
    /** Vote queries voted information based on proposalID, voterAddr. */useVote,
    /** Votes queries votes of a given proposal. */useVotes,
    /** Params queries all parameters of the gov module. */useParams,
    /** Deposit queries single deposit information based proposalID, depositAddr. */useDeposit,
    /** Deposits queries all deposits of a single proposal. */useDeposits,
    /** TallyResult queries the tally of a proposal vote. */useTallyResult
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryProposalStore {
    store = new QueryStore<QueryProposalRequest, QueryProposalResponse>(queryService?.proposal);
    proposal(request: QueryProposalRequest) {
      return this.store.getData(request);
    }
  }
  class QueryProposalsStore {
    store = new QueryStore<QueryProposalsRequest, QueryProposalsResponse>(queryService?.proposals);
    proposals(request: QueryProposalsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryVoteStore {
    store = new QueryStore<QueryVoteRequest, QueryVoteResponse>(queryService?.vote);
    vote(request: QueryVoteRequest) {
      return this.store.getData(request);
    }
  }
  class QueryVotesStore {
    store = new QueryStore<QueryVotesRequest, QueryVotesResponse>(queryService?.votes);
    votes(request: QueryVotesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDepositStore {
    store = new QueryStore<QueryDepositRequest, QueryDepositResponse>(queryService?.deposit);
    deposit(request: QueryDepositRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDepositsStore {
    store = new QueryStore<QueryDepositsRequest, QueryDepositsResponse>(queryService?.deposits);
    deposits(request: QueryDepositsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTallyResultStore {
    store = new QueryStore<QueryTallyResultRequest, QueryTallyResultResponse>(queryService?.tallyResult);
    tallyResult(request: QueryTallyResultRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Proposal queries proposal details based on ProposalID. */QueryProposalStore,
    /** Proposals queries all proposals based on given status. */QueryProposalsStore,
    /** Vote queries voted information based on proposalID, voterAddr. */QueryVoteStore,
    /** Votes queries votes of a given proposal. */QueryVotesStore,
    /** Params queries all parameters of the gov module. */QueryParamsStore,
    /** Deposit queries single deposit information based proposalID, depositAddr. */QueryDepositStore,
    /** Deposits queries all deposits of a single proposal. */QueryDepositsStore,
    /** TallyResult queries the tally of a proposal vote. */QueryTallyResultStore
  };
};