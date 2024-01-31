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
    /* Params returns the total set of minting parameters. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* EpochProvisions returns the current minting epoch provisions value. */
    epochProvisions = async (request = {}) => {
        const data = query_1.QueryEpochProvisionsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "EpochProvisions", data);
        return promise.then(data => query_1.QueryEpochProvisionsResponse.decode(new binary_1.BinaryReader(data)));
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
    const useEpochProvisions = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["epochProvisionsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.epochProvisions(request);
        }, options);
    };
    return {
        /** Params returns the total set of minting parameters. */ useParams,
        /** EpochProvisions returns the current minting epoch provisions value. */ useEpochProvisions
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
    class QueryEpochProvisionsStore {
        store = new mobx_1.QueryStore(queryService?.epochProvisions);
        epochProvisions(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Params returns the total set of minting parameters. */ QueryParamsStore,
        /** EpochProvisions returns the current minting epoch provisions value. */ QueryEpochProvisionsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
