"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.QueryClientImpl = void 0;
const binary_1 = require("../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../mobx");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* ModuleToDistributeCoins returns coins that are going to be distributed */
    moduleToDistributeCoins = async (request = {}) => {
        const data = query_1.ModuleToDistributeCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "ModuleToDistributeCoins", data);
        return promise.then(data => query_1.ModuleToDistributeCoinsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GaugeByID returns gauges by their respective ID */
    gaugeByID = async (request) => {
        const data = query_1.GaugeByIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "GaugeByID", data);
        return promise.then(data => query_1.GaugeByIDResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Gauges returns both upcoming and active gauges */
    gauges = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.GaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "Gauges", data);
        return promise.then(data => query_1.GaugesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ActiveGauges returns active gauges */
    activeGauges = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.ActiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGauges", data);
        return promise.then(data => query_1.ActiveGaugesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ActiveGaugesPerDenom returns active gauges by denom */
    activeGaugesPerDenom = async (request) => {
        const data = query_1.ActiveGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGaugesPerDenom", data);
        return promise.then(data => query_1.ActiveGaugesPerDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns scheduled gauges that have not yet occured */
    upcomingGauges = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.UpcomingGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGauges", data);
        return promise.then(data => query_1.UpcomingGaugesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     by denom */
    upcomingGaugesPerDenom = async (request) => {
        const data = query_1.UpcomingGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGaugesPerDenom", data);
        return promise.then(data => query_1.UpcomingGaugesPerDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* RewardsEst returns an estimate of the rewards from now until a specified
     time in the future The querier either provides an address or a set of locks
     for which they want to find the associated rewards */
    rewardsEst = async (request) => {
        const data = query_1.RewardsEstRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "RewardsEst", data);
        return promise.then(data => query_1.RewardsEstResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* LockableDurations returns lockable durations that are valid to distribute
     incentives for */
    lockableDurations = async (request = {}) => {
        const data = query_1.QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "LockableDurations", data);
        return promise.then(data => query_1.QueryLockableDurationsResponse.decode(new binary_1.BinaryReader(data)));
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
    const useModuleToDistributeCoins = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["moduleToDistributeCoinsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.moduleToDistributeCoins(request);
        }, options);
    };
    const useGaugeByID = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["gaugeByIDQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.gaugeByID(request);
        }, options);
    };
    const useGauges = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["gaugesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.gauges(request);
        }, options);
    };
    const useActiveGauges = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["activeGaugesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.activeGauges(request);
        }, options);
    };
    const useActiveGaugesPerDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["activeGaugesPerDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.activeGaugesPerDenom(request);
        }, options);
    };
    const useUpcomingGauges = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["upcomingGaugesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.upcomingGauges(request);
        }, options);
    };
    const useUpcomingGaugesPerDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["upcomingGaugesPerDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.upcomingGaugesPerDenom(request);
        }, options);
    };
    const useRewardsEst = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["rewardsEstQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.rewardsEst(request);
        }, options);
    };
    const useLockableDurations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["lockableDurationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.lockableDurations(request);
        }, options);
    };
    return {
        /** ModuleToDistributeCoins returns coins that are going to be distributed */ useModuleToDistributeCoins,
        /** GaugeByID returns gauges by their respective ID */ useGaugeByID,
        /** Gauges returns both upcoming and active gauges */ useGauges,
        /** ActiveGauges returns active gauges */ useActiveGauges,
        /** ActiveGaugesPerDenom returns active gauges by denom */ useActiveGaugesPerDenom,
        /** Returns scheduled gauges that have not yet occured */ useUpcomingGauges,
        /**
         * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
         * by denom
         */
        useUpcomingGaugesPerDenom,
        /**
         * RewardsEst returns an estimate of the rewards from now until a specified
         * time in the future The querier either provides an address or a set of locks
         * for which they want to find the associated rewards
         */
        useRewardsEst,
        /**
         * LockableDurations returns lockable durations that are valid to distribute
         * incentives for
         */
        useLockableDurations
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryModuleToDistributeCoinsStore {
        store = new mobx_1.QueryStore(queryService?.moduleToDistributeCoins);
        moduleToDistributeCoins(request) {
            return this.store.getData(request);
        }
    }
    class QueryGaugeByIDStore {
        store = new mobx_1.QueryStore(queryService?.gaugeByID);
        gaugeByID(request) {
            return this.store.getData(request);
        }
    }
    class QueryGaugesStore {
        store = new mobx_1.QueryStore(queryService?.gauges);
        gauges(request) {
            return this.store.getData(request);
        }
    }
    class QueryActiveGaugesStore {
        store = new mobx_1.QueryStore(queryService?.activeGauges);
        activeGauges(request) {
            return this.store.getData(request);
        }
    }
    class QueryActiveGaugesPerDenomStore {
        store = new mobx_1.QueryStore(queryService?.activeGaugesPerDenom);
        activeGaugesPerDenom(request) {
            return this.store.getData(request);
        }
    }
    class QueryUpcomingGaugesStore {
        store = new mobx_1.QueryStore(queryService?.upcomingGauges);
        upcomingGauges(request) {
            return this.store.getData(request);
        }
    }
    class QueryUpcomingGaugesPerDenomStore {
        store = new mobx_1.QueryStore(queryService?.upcomingGaugesPerDenom);
        upcomingGaugesPerDenom(request) {
            return this.store.getData(request);
        }
    }
    class QueryRewardsEstStore {
        store = new mobx_1.QueryStore(queryService?.rewardsEst);
        rewardsEst(request) {
            return this.store.getData(request);
        }
    }
    class QueryLockableDurationsStore {
        store = new mobx_1.QueryStore(queryService?.lockableDurations);
        lockableDurations(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** ModuleToDistributeCoins returns coins that are going to be distributed */ QueryModuleToDistributeCoinsStore,
        /** GaugeByID returns gauges by their respective ID */ QueryGaugeByIDStore,
        /** Gauges returns both upcoming and active gauges */ QueryGaugesStore,
        /** ActiveGauges returns active gauges */ QueryActiveGaugesStore,
        /** ActiveGaugesPerDenom returns active gauges by denom */ QueryActiveGaugesPerDenomStore,
        /** Returns scheduled gauges that have not yet occured */ QueryUpcomingGaugesStore,
        /**
         * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
         * by denom
         */
        QueryUpcomingGaugesPerDenomStore,
        /**
         * RewardsEst returns an estimate of the rewards from now until a specified
         * time in the future The querier either provides an address or a set of locks
         * for which they want to find the associated rewards
         */
        QueryRewardsEstStore,
        /**
         * LockableDurations returns lockable durations that are valid to distribute
         * incentives for
         */
        QueryLockableDurationsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
