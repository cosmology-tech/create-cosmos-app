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
    /* Allowance returns fee granted to the grantee by the granter. */
    allowance = async (request) => {
        const data = query_1.QueryAllowanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
        return promise.then(data => query_1.QueryAllowanceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Allowances returns all the grants for address. */
    allowances = async (request) => {
        const data = query_1.QueryAllowancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
        return promise.then(data => query_1.QueryAllowancesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AllowancesByGranter returns all the grants given by an address
     Since v0.46 */
    allowancesByGranter = async (request) => {
        const data = query_1.QueryAllowancesByGranterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
        return promise.then(data => query_1.QueryAllowancesByGranterResponse.decode(new binary_1.BinaryReader(data)));
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
    const useAllowance = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allowanceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allowance(request);
        }, options);
    };
    const useAllowances = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allowancesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allowances(request);
        }, options);
    };
    const useAllowancesByGranter = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allowancesByGranterQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allowancesByGranter(request);
        }, options);
    };
    return {
        /** Allowance returns fee granted to the grantee by the granter. */ useAllowance,
        /** Allowances returns all the grants for address. */ useAllowances,
        /**
         * AllowancesByGranter returns all the grants given by an address
         * Since v0.46
         */
        useAllowancesByGranter
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryAllowanceStore {
        store = new mobx_1.QueryStore(queryService?.allowance);
        allowance(request) {
            return this.store.getData(request);
        }
    }
    class QueryAllowancesStore {
        store = new mobx_1.QueryStore(queryService?.allowances);
        allowances(request) {
            return this.store.getData(request);
        }
    }
    class QueryAllowancesByGranterStore {
        store = new mobx_1.QueryStore(queryService?.allowancesByGranter);
        allowancesByGranter(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Allowance returns fee granted to the grantee by the granter. */ QueryAllowanceStore,
        /** Allowances returns all the grants for address. */ QueryAllowancesStore,
        /**
         * AllowancesByGranter returns all the grants given by an address
         * Since v0.46
         */
        QueryAllowancesByGranterStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
