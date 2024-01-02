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
    /* Params queries a specific parameter of a module, given its subspace and
     key. */
    params = async (request) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Subspaces queries for all registered subspaces and all keys for a subspace. */
    subspaces = async (request = {}) => {
        const data = query_1.QuerySubspacesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
        return promise.then(data => query_1.QuerySubspacesResponse.decode(new binary_1.BinaryReader(data)));
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
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useSubspaces = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["subspacesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.subspaces(request);
        }, options);
    };
    return {
        /**
         * Params queries a specific parameter of a module, given its subspace and
         * key.
         */
        useParams,
        /** Subspaces queries for all registered subspaces and all keys for a subspace. */ useSubspaces
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryParamsStore {
        store = new mobx_1.QueryStore(queryService?.params);
        params(request) {
            return this.store.getData(request);
        }
    }
    class QuerySubspacesStore {
        store = new mobx_1.QueryStore(queryService?.subspaces);
        subspaces(request) {
            return this.store.getData(request);
        }
    }
    return {
        /**
         * Params queries a specific parameter of a module, given its subspace and
         * key.
         */
        QueryParamsStore,
        /** Subspaces queries for all registered subspaces and all keys for a subspace. */ QuerySubspacesStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
