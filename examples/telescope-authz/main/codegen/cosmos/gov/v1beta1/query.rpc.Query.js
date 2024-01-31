"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../../mobx");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* Proposal queries proposal details based on ProposalID. */
    proposal = async (request) => {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Proposals queries all proposals based on given status. */
    proposals = async (request) => {
        const data = query_1.QueryProposalsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
        return promise.then(data => query_1.QueryProposalsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Vote queries voted information based on proposalID, voterAddr. */
    vote = async (request) => {
        const data = query_1.QueryVoteRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
        return promise.then(data => query_1.QueryVoteResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Votes queries votes of a given proposal. */
    votes = async (request) => {
        const data = query_1.QueryVotesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
        return promise.then(data => query_1.QueryVotesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Params queries all parameters of the gov module. */
    params = async (request) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Deposit queries single deposit information based proposalID, depositAddr. */
    deposit = async (request) => {
        const data = query_1.QueryDepositRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
        return promise.then(data => query_1.QueryDepositResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Deposits queries all deposits of a single proposal. */
    deposits = async (request) => {
        const data = query_1.QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* TallyResult queries the tally of a proposal vote. */
    tallyResult = async (request) => {
        const data = query_1.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
        return promise.then(data => query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)));
    };
}
exports.QueryClientImpl = QueryClientImpl;
const createClientImpl = (rpc) => {
    return new QueryClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
const _queryClients = new WeakMap();
const getQueryService = (rpc) => {
    if (!rpc)
        return;
    if (_queryClients.has(rpc)) {
        return _queryClients.get(rpc);
    }
    const queryService = new QueryClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useProposal = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposal(request);
        }, options);
    };
    const useProposals = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposals(request);
        }, options);
    };
    const useVote = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["voteQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.vote(request);
        }, options);
    };
    const useVotes = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["votesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.votes(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useDeposit = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["depositQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.deposit(request);
        }, options);
    };
    const useDeposits = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["depositsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.deposits(request);
        }, options);
    };
    const useTallyResult = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["tallyResultQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.tallyResult(request);
        }, options);
    };
    return {
        /** Proposal queries proposal details based on ProposalID. */ useProposal,
        /** Proposals queries all proposals based on given status. */ useProposals,
        /** Vote queries voted information based on proposalID, voterAddr. */ useVote,
        /** Votes queries votes of a given proposal. */ useVotes,
        /** Params queries all parameters of the gov module. */ useParams,
        /** Deposit queries single deposit information based proposalID, depositAddr. */ useDeposit,
        /** Deposits queries all deposits of a single proposal. */ useDeposits,
        /** TallyResult queries the tally of a proposal vote. */ useTallyResult
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryProposalStore {
        store = new mobx_1.QueryStore(queryService?.proposal);
        proposal(request) {
            return this.store.getData(request);
        }
    }
    class QueryProposalsStore {
        store = new mobx_1.QueryStore(queryService?.proposals);
        proposals(request) {
            return this.store.getData(request);
        }
    }
    class QueryVoteStore {
        store = new mobx_1.QueryStore(queryService?.vote);
        vote(request) {
            return this.store.getData(request);
        }
    }
    class QueryVotesStore {
        store = new mobx_1.QueryStore(queryService?.votes);
        votes(request) {
            return this.store.getData(request);
        }
    }
    class QueryParamsStore {
        store = new mobx_1.QueryStore(queryService?.params);
        params(request) {
            return this.store.getData(request);
        }
    }
    class QueryDepositStore {
        store = new mobx_1.QueryStore(queryService?.deposit);
        deposit(request) {
            return this.store.getData(request);
        }
    }
    class QueryDepositsStore {
        store = new mobx_1.QueryStore(queryService?.deposits);
        deposits(request) {
            return this.store.getData(request);
        }
    }
    class QueryTallyResultStore {
        store = new mobx_1.QueryStore(queryService?.tallyResult);
        tallyResult(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Proposal queries proposal details based on ProposalID. */ QueryProposalStore,
        /** Proposals queries all proposals based on given status. */ QueryProposalsStore,
        /** Vote queries voted information based on proposalID, voterAddr. */ QueryVoteStore,
        /** Votes queries votes of a given proposal. */ QueryVotesStore,
        /** Params queries all parameters of the gov module. */ QueryParamsStore,
        /** Deposit queries single deposit information based proposalID, depositAddr. */ QueryDepositStore,
        /** Deposits queries all deposits of a single proposal. */ QueryDepositsStore,
        /** TallyResult queries the tally of a proposal vote. */ QueryTallyResultStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
