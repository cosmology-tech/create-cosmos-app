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
    /* ModuleAccountBalance */
    moduleAccountBalance = async (request = {}) => {
        const data = query_1.QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ModuleAccountBalance", data);
        return promise.then(data => query_1.QueryModuleAccountBalanceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Params */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ClaimRecord */
    claimRecord = async (request) => {
        const data = query_1.QueryClaimRecordRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimRecord", data);
        return promise.then(data => query_1.QueryClaimRecordResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ClaimableForAction */
    claimableForAction = async (request) => {
        const data = query_1.QueryClaimableForActionRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimableForAction", data);
        return promise.then(data => query_1.QueryClaimableForActionResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* TotalClaimable */
    totalClaimable = async (request) => {
        const data = query_1.QueryTotalClaimableRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "TotalClaimable", data);
        return promise.then(data => query_1.QueryTotalClaimableResponse.decode(new binary_1.BinaryReader(data)));
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
    const useModuleAccountBalance = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["moduleAccountBalanceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.moduleAccountBalance(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useClaimRecord = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["claimRecordQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.claimRecord(request);
        }, options);
    };
    const useClaimableForAction = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["claimableForActionQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.claimableForAction(request);
        }, options);
    };
    const useTotalClaimable = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalClaimableQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalClaimable(request);
        }, options);
    };
    return {
        useModuleAccountBalance,
        useParams,
        useClaimRecord,
        useClaimableForAction,
        useTotalClaimable
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryModuleAccountBalanceStore {
        store = new mobx_1.QueryStore(queryService?.moduleAccountBalance);
        moduleAccountBalance(request) {
            return this.store.getData(request);
        }
    }
    class QueryParamsStore {
        store = new mobx_1.QueryStore(queryService?.params);
        params(request) {
            return this.store.getData(request);
        }
    }
    class QueryClaimRecordStore {
        store = new mobx_1.QueryStore(queryService?.claimRecord);
        claimRecord(request) {
            return this.store.getData(request);
        }
    }
    class QueryClaimableForActionStore {
        store = new mobx_1.QueryStore(queryService?.claimableForAction);
        claimableForAction(request) {
            return this.store.getData(request);
        }
    }
    class QueryTotalClaimableStore {
        store = new mobx_1.QueryStore(queryService?.totalClaimable);
        totalClaimable(request) {
            return this.store.getData(request);
        }
    }
    return {
        QueryModuleAccountBalanceStore,
        QueryParamsStore,
        QueryClaimRecordStore,
        QueryClaimableForActionStore,
        QueryTotalClaimableStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
