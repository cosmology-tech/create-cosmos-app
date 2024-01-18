"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.ServiceClientImpl = void 0;
const binary_1 = require("../../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../../mobx");
const service_1 = require("./service");
class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* Simulate simulates executing a transaction for estimating gas usage. */
    simulate = async (request) => {
        const data = service_1.SimulateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
        return promise.then(data => service_1.SimulateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetTx fetches a tx by hash. */
    getTx = async (request) => {
        const data = service_1.GetTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
        return promise.then(data => service_1.GetTxResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* BroadcastTx broadcast transaction. */
    broadcastTx = async (request) => {
        const data = service_1.BroadcastTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
        return promise.then(data => service_1.BroadcastTxResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetTxsEvent fetches txs by event. */
    getTxsEvent = async (request) => {
        const data = service_1.GetTxsEventRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
        return promise.then(data => service_1.GetTxsEventResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetBlockWithTxs fetches a block with decoded txs.
    
     Since: cosmos-sdk 0.45.2 */
    getBlockWithTxs = async (request) => {
        const data = service_1.GetBlockWithTxsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
        return promise.then(data => service_1.GetBlockWithTxsResponse.decode(new binary_1.BinaryReader(data)));
    };
}
exports.ServiceClientImpl = ServiceClientImpl;
const createClientImpl = (rpc) => {
    return new ServiceClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
const _queryClients = new WeakMap();
const getQueryService = (rpc) => {
    if (!rpc)
        return;
    if (_queryClients.has(rpc)) {
        return _queryClients.get(rpc);
    }
    const queryService = new ServiceClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useSimulate = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["simulateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.simulate(request);
        }, options);
    };
    const useGetTx = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getTxQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getTx(request);
        }, options);
    };
    const useBroadcastTx = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["broadcastTxQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.broadcastTx(request);
        }, options);
    };
    const useGetTxsEvent = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getTxsEventQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getTxsEvent(request);
        }, options);
    };
    const useGetBlockWithTxs = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getBlockWithTxsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getBlockWithTxs(request);
        }, options);
    };
    return {
        /** Simulate simulates executing a transaction for estimating gas usage. */ useSimulate,
        /** GetTx fetches a tx by hash. */ useGetTx,
        /** BroadcastTx broadcast transaction. */ useBroadcastTx,
        /** GetTxsEvent fetches txs by event. */ useGetTxsEvent,
        /**
         * GetBlockWithTxs fetches a block with decoded txs.
         *
         * Since: cosmos-sdk 0.45.2
         */
        useGetBlockWithTxs
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QuerySimulateStore {
        store = new mobx_1.QueryStore(queryService?.simulate);
        simulate(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetTxStore {
        store = new mobx_1.QueryStore(queryService?.getTx);
        getTx(request) {
            return this.store.getData(request);
        }
    }
    class QueryBroadcastTxStore {
        store = new mobx_1.QueryStore(queryService?.broadcastTx);
        broadcastTx(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetTxsEventStore {
        store = new mobx_1.QueryStore(queryService?.getTxsEvent);
        getTxsEvent(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetBlockWithTxsStore {
        store = new mobx_1.QueryStore(queryService?.getBlockWithTxs);
        getBlockWithTxs(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Simulate simulates executing a transaction for estimating gas usage. */ QuerySimulateStore,
        /** GetTx fetches a tx by hash. */ QueryGetTxStore,
        /** BroadcastTx broadcast transaction. */ QueryBroadcastTxStore,
        /** GetTxsEvent fetches txs by event. */ QueryGetTxsEventStore,
        /**
         * GetBlockWithTxs fetches a block with decoded txs.
         *
         * Since: cosmos-sdk 0.45.2
         */
        QueryGetBlockWithTxsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
