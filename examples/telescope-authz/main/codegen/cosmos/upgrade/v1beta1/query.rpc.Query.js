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
    /* CurrentPlan queries the current upgrade plan. */
    currentPlan = async (request = {}) => {
        const data = query_1.QueryCurrentPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
        return promise.then(data => query_1.QueryCurrentPlanResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AppliedPlan queries a previously applied upgrade plan by its name. */
    appliedPlan = async (request) => {
        const data = query_1.QueryAppliedPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
        return promise.then(data => query_1.QueryAppliedPlanResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* UpgradedConsensusState queries the consensus state that will serve
     as a trusted kernel for the next version of this chain. It will only be
     stored at the last height of this chain.
     UpgradedConsensusState RPC not supported with legacy querier
     This rpc is deprecated now that IBC has its own replacement
     (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) */
    upgradedConsensusState = async (request) => {
        const data = query_1.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
        return promise.then(data => query_1.QueryUpgradedConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ModuleVersions queries the list of module versions from state.
    
     Since: cosmos-sdk 0.43 */
    moduleVersions = async (request) => {
        const data = query_1.QueryModuleVersionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
        return promise.then(data => query_1.QueryModuleVersionsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the account with authority to conduct upgrades */
    authority = async (request = {}) => {
        const data = query_1.QueryAuthorityRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
        return promise.then(data => query_1.QueryAuthorityResponse.decode(new binary_1.BinaryReader(data)));
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
    const useCurrentPlan = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["currentPlanQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.currentPlan(request);
        }, options);
    };
    const useAppliedPlan = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["appliedPlanQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.appliedPlan(request);
        }, options);
    };
    const useUpgradedConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["upgradedConsensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.upgradedConsensusState(request);
        }, options);
    };
    const useModuleVersions = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["moduleVersionsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.moduleVersions(request);
        }, options);
    };
    const useAuthority = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["authorityQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.authority(request);
        }, options);
    };
    return {
        /** CurrentPlan queries the current upgrade plan. */ useCurrentPlan,
        /** AppliedPlan queries a previously applied upgrade plan by its name. */ useAppliedPlan,
        /**
         * UpgradedConsensusState queries the consensus state that will serve
         * as a trusted kernel for the next version of this chain. It will only be
         * stored at the last height of this chain.
         * UpgradedConsensusState RPC not supported with legacy querier
         * This rpc is deprecated now that IBC has its own replacement
         * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
         */
        useUpgradedConsensusState,
        /**
         * ModuleVersions queries the list of module versions from state.
         *
         * Since: cosmos-sdk 0.43
         */
        useModuleVersions,
        /** Returns the account with authority to conduct upgrades */ useAuthority
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryCurrentPlanStore {
        store = new mobx_1.QueryStore(queryService?.currentPlan);
        currentPlan(request) {
            return this.store.getData(request);
        }
    }
    class QueryAppliedPlanStore {
        store = new mobx_1.QueryStore(queryService?.appliedPlan);
        appliedPlan(request) {
            return this.store.getData(request);
        }
    }
    class QueryUpgradedConsensusStateStore {
        store = new mobx_1.QueryStore(queryService?.upgradedConsensusState);
        upgradedConsensusState(request) {
            return this.store.getData(request);
        }
    }
    class QueryModuleVersionsStore {
        store = new mobx_1.QueryStore(queryService?.moduleVersions);
        moduleVersions(request) {
            return this.store.getData(request);
        }
    }
    class QueryAuthorityStore {
        store = new mobx_1.QueryStore(queryService?.authority);
        authority(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** CurrentPlan queries the current upgrade plan. */ QueryCurrentPlanStore,
        /** AppliedPlan queries a previously applied upgrade plan by its name. */ QueryAppliedPlanStore,
        /**
         * UpgradedConsensusState queries the consensus state that will serve
         * as a trusted kernel for the next version of this chain. It will only be
         * stored at the last height of this chain.
         * UpgradedConsensusState RPC not supported with legacy querier
         * This rpc is deprecated now that IBC has its own replacement
         * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
         */
        QueryUpgradedConsensusStateStore,
        /**
         * ModuleVersions queries the list of module versions from state.
         *
         * Since: cosmos-sdk 0.43
         */
        QueryModuleVersionsStore,
        /** Returns the account with authority to conduct upgrades */ QueryAuthorityStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
