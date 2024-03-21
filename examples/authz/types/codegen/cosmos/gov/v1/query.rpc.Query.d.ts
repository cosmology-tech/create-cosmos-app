import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    proposal: (request: QueryProposalRequest) => Promise<QueryProposalResponse>;
    proposals: (request: QueryProposalsRequest) => Promise<QueryProposalsResponse>;
    vote: (request: QueryVoteRequest) => Promise<QueryVoteResponse>;
    votes: (request: QueryVotesRequest) => Promise<QueryVotesResponse>;
    params: (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
    deposit: (request: QueryDepositRequest) => Promise<QueryDepositResponse>;
    deposits: (request: QueryDepositsRequest) => Promise<QueryDepositsResponse>;
    tallyResult: (request: QueryTallyResultRequest) => Promise<QueryTallyResultResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
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
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Proposal queries proposal details based on ProposalID. */ useProposal: <TData = QueryProposalResponse>({ request, options }: UseProposalQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Proposals queries all proposals based on given status. */ useProposals: <TData_1 = QueryProposalsResponse>({ request, options }: UseProposalsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Vote queries voted information based on proposalID, voterAddr. */ useVote: <TData_2 = QueryVoteResponse>({ request, options }: UseVoteQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** Votes queries votes of a given proposal. */ useVotes: <TData_3 = QueryVotesResponse>({ request, options }: UseVotesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** Params queries all parameters of the gov module. */ useParams: <TData_4 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */ useDeposit: <TData_5 = QueryDepositResponse>({ request, options }: UseDepositQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Deposits queries all deposits of a single proposal. */ useDeposits: <TData_6 = QueryDepositsResponse>({ request, options }: UseDepositsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** TallyResult queries the tally of a proposal vote. */ useTallyResult: <TData_7 = QueryTallyResultResponse>({ request, options }: UseTallyResultQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Proposal queries proposal details based on ProposalID. */ QueryProposalStore: {
        new (): {
            store: QueryStore<QueryProposalRequest, QueryProposalResponse>;
            proposal(request: QueryProposalRequest): import("../../../mobx").MobxResponse<QueryProposalResponse>;
        };
    };
    /** Proposals queries all proposals based on given status. */ QueryProposalsStore: {
        new (): {
            store: QueryStore<QueryProposalsRequest, QueryProposalsResponse>;
            proposals(request: QueryProposalsRequest): import("../../../mobx").MobxResponse<QueryProposalsResponse>;
        };
    };
    /** Vote queries voted information based on proposalID, voterAddr. */ QueryVoteStore: {
        new (): {
            store: QueryStore<QueryVoteRequest, QueryVoteResponse>;
            vote(request: QueryVoteRequest): import("../../../mobx").MobxResponse<QueryVoteResponse>;
        };
    };
    /** Votes queries votes of a given proposal. */ QueryVotesStore: {
        new (): {
            store: QueryStore<QueryVotesRequest, QueryVotesResponse>;
            votes(request: QueryVotesRequest): import("../../../mobx").MobxResponse<QueryVotesResponse>;
        };
    };
    /** Params queries all parameters of the gov module. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** Deposit queries single deposit information based proposalID, depositAddr. */ QueryDepositStore: {
        new (): {
            store: QueryStore<QueryDepositRequest, QueryDepositResponse>;
            deposit(request: QueryDepositRequest): import("../../../mobx").MobxResponse<QueryDepositResponse>;
        };
    };
    /** Deposits queries all deposits of a single proposal. */ QueryDepositsStore: {
        new (): {
            store: QueryStore<QueryDepositsRequest, QueryDepositsResponse>;
            deposits(request: QueryDepositsRequest): import("../../../mobx").MobxResponse<QueryDepositsResponse>;
        };
    };
    /** TallyResult queries the tally of a proposal vote. */ QueryTallyResultStore: {
        new (): {
            store: QueryStore<QueryTallyResultRequest, QueryTallyResultResponse>;
            tallyResult(request: QueryTallyResultRequest): import("../../../mobx").MobxResponse<QueryTallyResultResponse>;
        };
    };
};
