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
        const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Inflation returns the current minting inflation value. */
    inflation = async (request = {}) => {
        const data = query_1.QueryInflationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
        return promise.then(data => query_1.QueryInflationResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AnnualProvisions current minting annual provisions value. */
    annualProvisions = async (request = {}) => {
        const data = query_1.QueryAnnualProvisionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
        return promise.then(data => query_1.QueryAnnualProvisionsResponse.decode(new binary_1.BinaryReader(data)));
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
    const useInflation = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["inflationQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.inflation(request);
        }, options);
    };
    const useAnnualProvisions = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["annualProvisionsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.annualProvisions(request);
        }, options);
    };
    return {
        /** Params returns the total set of minting parameters. */ useParams,
        /** Inflation returns the current minting inflation value. */ useInflation,
        /** AnnualProvisions current minting annual provisions value. */ useAnnualProvisions
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
    class QueryInflationStore {
        store = new mobx_1.QueryStore(queryService?.inflation);
        inflation(request) {
            return this.store.getData(request);
        }
    }
    class QueryAnnualProvisionsStore {
        store = new mobx_1.QueryStore(queryService?.annualProvisions);
        annualProvisions(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Params returns the total set of minting parameters. */ QueryParamsStore,
        /** Inflation returns the current minting inflation value. */ QueryInflationStore,
        /** AnnualProvisions current minting annual provisions value. */ QueryAnnualProvisionsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
