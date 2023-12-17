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
    /* GroupInfo queries group info based on group id. */
    groupInfo = async (request) => {
        const data = query_1.QueryGroupInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
        return promise.then(data => query_1.QueryGroupInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GroupPolicyInfo queries group policy info based on account address of group policy. */
    groupPolicyInfo = async (request) => {
        const data = query_1.QueryGroupPolicyInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
        return promise.then(data => query_1.QueryGroupPolicyInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GroupMembers queries members of a group */
    groupMembers = async (request) => {
        const data = query_1.QueryGroupMembersRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
        return promise.then(data => query_1.QueryGroupMembersResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GroupsByAdmin queries groups by admin address. */
    groupsByAdmin = async (request) => {
        const data = query_1.QueryGroupsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
        return promise.then(data => query_1.QueryGroupsByAdminResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GroupPoliciesByGroup queries group policies by group id. */
    groupPoliciesByGroup = async (request) => {
        const data = query_1.QueryGroupPoliciesByGroupRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
        return promise.then(data => query_1.QueryGroupPoliciesByGroupResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GroupsByAdmin queries group policies by admin address. */
    groupPoliciesByAdmin = async (request) => {
        const data = query_1.QueryGroupPoliciesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
        return promise.then(data => query_1.QueryGroupPoliciesByAdminResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Proposal queries a proposal based on proposal id. */
    proposal = async (request) => {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    proposalsByGroupPolicy = async (request) => {
        const data = query_1.QueryProposalsByGroupPolicyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
        return promise.then(data => query_1.QueryProposalsByGroupPolicyResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* VoteByProposalVoter queries a vote by proposal id and voter. */
    voteByProposalVoter = async (request) => {
        const data = query_1.QueryVoteByProposalVoterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
        return promise.then(data => query_1.QueryVoteByProposalVoterResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* VotesByProposal queries a vote by proposal. */
    votesByProposal = async (request) => {
        const data = query_1.QueryVotesByProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
        return promise.then(data => query_1.QueryVotesByProposalResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* VotesByVoter queries a vote by voter. */
    votesByVoter = async (request) => {
        const data = query_1.QueryVotesByVoterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
        return promise.then(data => query_1.QueryVotesByVoterResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GroupsByMember queries groups by member address. */
    groupsByMember = async (request) => {
        const data = query_1.QueryGroupsByMemberRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
        return promise.then(data => query_1.QueryGroupsByMemberResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* TallyResult queries the tally of a proposal votes. */
    tallyResult = async (request) => {
        const data = query_1.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
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
    const useGroupInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupInfo(request);
        }, options);
    };
    const useGroupPolicyInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupPolicyInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupPolicyInfo(request);
        }, options);
    };
    const useGroupMembers = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupMembersQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupMembers(request);
        }, options);
    };
    const useGroupsByAdmin = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupsByAdminQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupsByAdmin(request);
        }, options);
    };
    const useGroupPoliciesByGroup = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupPoliciesByGroupQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupPoliciesByGroup(request);
        }, options);
    };
    const useGroupPoliciesByAdmin = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupPoliciesByAdminQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupPoliciesByAdmin(request);
        }, options);
    };
    const useProposal = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposal(request);
        }, options);
    };
    const useProposalsByGroupPolicy = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalsByGroupPolicyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposalsByGroupPolicy(request);
        }, options);
    };
    const useVoteByProposalVoter = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["voteByProposalVoterQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.voteByProposalVoter(request);
        }, options);
    };
    const useVotesByProposal = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["votesByProposalQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.votesByProposal(request);
        }, options);
    };
    const useVotesByVoter = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["votesByVoterQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.votesByVoter(request);
        }, options);
    };
    const useGroupsByMember = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupsByMemberQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupsByMember(request);
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
        /** GroupInfo queries group info based on group id. */ useGroupInfo,
        /** GroupPolicyInfo queries group policy info based on account address of group policy. */ useGroupPolicyInfo,
        /** GroupMembers queries members of a group */ useGroupMembers,
        /** GroupsByAdmin queries groups by admin address. */ useGroupsByAdmin,
        /** GroupPoliciesByGroup queries group policies by group id. */ useGroupPoliciesByGroup,
        /** GroupsByAdmin queries group policies by admin address. */ useGroupPoliciesByAdmin,
        /** Proposal queries a proposal based on proposal id. */ useProposal,
        /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */ useProposalsByGroupPolicy,
        /** VoteByProposalVoter queries a vote by proposal id and voter. */ useVoteByProposalVoter,
        /** VotesByProposal queries a vote by proposal. */ useVotesByProposal,
        /** VotesByVoter queries a vote by voter. */ useVotesByVoter,
        /** GroupsByMember queries groups by member address. */ useGroupsByMember,
        /** TallyResult queries the tally of a proposal votes. */ useTallyResult
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryGroupInfoStore {
        store = new mobx_1.QueryStore(queryService?.groupInfo);
        groupInfo(request) {
            return this.store.getData(request);
        }
    }
    class QueryGroupPolicyInfoStore {
        store = new mobx_1.QueryStore(queryService?.groupPolicyInfo);
        groupPolicyInfo(request) {
            return this.store.getData(request);
        }
    }
    class QueryGroupMembersStore {
        store = new mobx_1.QueryStore(queryService?.groupMembers);
        groupMembers(request) {
            return this.store.getData(request);
        }
    }
    class QueryGroupsByAdminStore {
        store = new mobx_1.QueryStore(queryService?.groupsByAdmin);
        groupsByAdmin(request) {
            return this.store.getData(request);
        }
    }
    class QueryGroupPoliciesByGroupStore {
        store = new mobx_1.QueryStore(queryService?.groupPoliciesByGroup);
        groupPoliciesByGroup(request) {
            return this.store.getData(request);
        }
    }
    class QueryGroupPoliciesByAdminStore {
        store = new mobx_1.QueryStore(queryService?.groupPoliciesByAdmin);
        groupPoliciesByAdmin(request) {
            return this.store.getData(request);
        }
    }
    class QueryProposalStore {
        store = new mobx_1.QueryStore(queryService?.proposal);
        proposal(request) {
            return this.store.getData(request);
        }
    }
    class QueryProposalsByGroupPolicyStore {
        store = new mobx_1.QueryStore(queryService?.proposalsByGroupPolicy);
        proposalsByGroupPolicy(request) {
            return this.store.getData(request);
        }
    }
    class QueryVoteByProposalVoterStore {
        store = new mobx_1.QueryStore(queryService?.voteByProposalVoter);
        voteByProposalVoter(request) {
            return this.store.getData(request);
        }
    }
    class QueryVotesByProposalStore {
        store = new mobx_1.QueryStore(queryService?.votesByProposal);
        votesByProposal(request) {
            return this.store.getData(request);
        }
    }
    class QueryVotesByVoterStore {
        store = new mobx_1.QueryStore(queryService?.votesByVoter);
        votesByVoter(request) {
            return this.store.getData(request);
        }
    }
    class QueryGroupsByMemberStore {
        store = new mobx_1.QueryStore(queryService?.groupsByMember);
        groupsByMember(request) {
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
        /** GroupInfo queries group info based on group id. */ QueryGroupInfoStore,
        /** GroupPolicyInfo queries group policy info based on account address of group policy. */ QueryGroupPolicyInfoStore,
        /** GroupMembers queries members of a group */ QueryGroupMembersStore,
        /** GroupsByAdmin queries groups by admin address. */ QueryGroupsByAdminStore,
        /** GroupPoliciesByGroup queries group policies by group id. */ QueryGroupPoliciesByGroupStore,
        /** GroupsByAdmin queries group policies by admin address. */ QueryGroupPoliciesByAdminStore,
        /** Proposal queries a proposal based on proposal id. */ QueryProposalStore,
        /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */ QueryProposalsByGroupPolicyStore,
        /** VoteByProposalVoter queries a vote by proposal id and voter. */ QueryVoteByProposalVoterStore,
        /** VotesByProposal queries a vote by proposal. */ QueryVotesByProposalStore,
        /** VotesByVoter queries a vote by voter. */ QueryVotesByVoterStore,
        /** GroupsByMember queries groups by member address. */ QueryGroupsByMemberStore,
        /** TallyResult queries the tally of a proposal votes. */ QueryTallyResultStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
