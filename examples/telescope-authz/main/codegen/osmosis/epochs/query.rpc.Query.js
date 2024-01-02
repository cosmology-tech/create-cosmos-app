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
    /* EpochInfos provide running epochInfos */
    epochInfos = async (request = {}) => {
        const data = query_1.QueryEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "EpochInfos", data);
        return promise.then(data => query_1.QueryEpochsInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* CurrentEpoch provide current epoch of specified identifier */
    currentEpoch = async (request) => {
        const data = query_1.QueryCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "CurrentEpoch", data);
        return promise.then(data => query_1.QueryCurrentEpochResponse.decode(new binary_1.BinaryReader(data)));
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
    const useEpochInfos = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["epochInfosQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.epochInfos(request);
        }, options);
    };
    const useCurrentEpoch = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["currentEpochQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.currentEpoch(request);
        }, options);
    };
    return {
        /** EpochInfos provide running epochInfos */ useEpochInfos,
        /** CurrentEpoch provide current epoch of specified identifier */ useCurrentEpoch
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryEpochInfosStore {
        store = new mobx_1.QueryStore(queryService?.epochInfos);
        epochInfos(request) {
            return this.store.getData(request);
        }
    }
    class QueryCurrentEpochStore {
        store = new mobx_1.QueryStore(queryService?.currentEpoch);
        currentEpoch(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** EpochInfos provide running epochInfos */ QueryEpochInfosStore,
        /** CurrentEpoch provide current epoch of specified identifier */ QueryCurrentEpochStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
