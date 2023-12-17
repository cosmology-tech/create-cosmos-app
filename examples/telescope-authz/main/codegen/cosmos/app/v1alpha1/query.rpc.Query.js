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
    /* Config returns the current app config. */
    config = async (request = {}) => {
        const data = query_1.QueryConfigRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
        return promise.then(data => query_1.QueryConfigResponse.decode(new binary_1.BinaryReader(data)));
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
    const useConfig = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["configQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.config(request);
        }, options);
    };
    return {
        /** Config returns the current app config. */ useConfig
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryConfigStore {
        store = new mobx_1.QueryStore(queryService?.config);
        config(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Config returns the current app config. */ QueryConfigStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
