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
    /* GaugeIds takes the pool id and returns the matching gauge ids and durations */
    gaugeIds = async (request) => {
        const data = query_1.QueryGaugeIdsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
        return promise.then(data => query_1.QueryGaugeIdsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DistrInfo returns the pool's matching gauge ids and weights. */
    distrInfo = async (request = {}) => {
        const data = query_1.QueryDistrInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
        return promise.then(data => query_1.QueryDistrInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Params returns pool incentives params. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* LockableDurations returns lock durations for pools. */
    lockableDurations = async (request = {}) => {
        const data = query_1.QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
        return promise.then(data => query_1.QueryLockableDurationsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* IncentivizedPools returns currently incentivized pools */
    incentivizedPools = async (request = {}) => {
        const data = query_1.QueryIncentivizedPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
        return promise.then(data => query_1.QueryIncentivizedPoolsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ExternalIncentiveGauges returns external incentive gauges. */
    externalIncentiveGauges = async (request = {}) => {
        const data = query_1.QueryExternalIncentiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
        return promise.then(data => query_1.QueryExternalIncentiveGaugesResponse.decode(new binary_1.BinaryReader(data)));
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
    const useGaugeIds = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["gaugeIdsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.gaugeIds(request);
        }, options);
    };
    const useDistrInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["distrInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.distrInfo(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useLockableDurations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["lockableDurationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.lockableDurations(request);
        }, options);
    };
    const useIncentivizedPools = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["incentivizedPoolsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.incentivizedPools(request);
        }, options);
    };
    const useExternalIncentiveGauges = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["externalIncentiveGaugesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.externalIncentiveGauges(request);
        }, options);
    };
    return {
        /** GaugeIds takes the pool id and returns the matching gauge ids and durations */ useGaugeIds,
        /** DistrInfo returns the pool's matching gauge ids and weights. */ useDistrInfo,
        /** Params returns pool incentives params. */ useParams,
        /** LockableDurations returns lock durations for pools. */ useLockableDurations,
        /** IncentivizedPools returns currently incentivized pools */ useIncentivizedPools,
        /** ExternalIncentiveGauges returns external incentive gauges. */ useExternalIncentiveGauges
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryGaugeIdsStore {
        store = new mobx_1.QueryStore(queryService?.gaugeIds);
        gaugeIds(request) {
            return this.store.getData(request);
        }
    }
    class QueryDistrInfoStore {
        store = new mobx_1.QueryStore(queryService?.distrInfo);
        distrInfo(request) {
            return this.store.getData(request);
        }
    }
    class QueryParamsStore {
        store = new mobx_1.QueryStore(queryService?.params);
        params(request) {
            return this.store.getData(request);
        }
    }
    class QueryLockableDurationsStore {
        store = new mobx_1.QueryStore(queryService?.lockableDurations);
        lockableDurations(request) {
            return this.store.getData(request);
        }
    }
    class QueryIncentivizedPoolsStore {
        store = new mobx_1.QueryStore(queryService?.incentivizedPools);
        incentivizedPools(request) {
            return this.store.getData(request);
        }
    }
    class QueryExternalIncentiveGaugesStore {
        store = new mobx_1.QueryStore(queryService?.externalIncentiveGauges);
        externalIncentiveGauges(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** GaugeIds takes the pool id and returns the matching gauge ids and durations */ QueryGaugeIdsStore,
        /** DistrInfo returns the pool's matching gauge ids and weights. */ QueryDistrInfoStore,
        /** Params returns pool incentives params. */ QueryParamsStore,
        /** LockableDurations returns lock durations for pools. */ QueryLockableDurationsStore,
        /** IncentivizedPools returns currently incentivized pools */ QueryIncentivizedPoolsStore,
        /** ExternalIncentiveGauges returns external incentive gauges. */ QueryExternalIncentiveGaugesStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
