"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.ServiceClientImpl = void 0;
const binary_1 = require("../../../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../../../mobx");
const query_1 = require("./query");
class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* GetNodeInfo queries the current node info. */
    getNodeInfo = async (request = {}) => {
        const data = query_1.GetNodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then(data => query_1.GetNodeInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetSyncing queries node syncing. */
    getSyncing = async (request = {}) => {
        const data = query_1.GetSyncingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then(data => query_1.GetSyncingResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetLatestBlock returns the latest block. */
    getLatestBlock = async (request = {}) => {
        const data = query_1.GetLatestBlockRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then(data => query_1.GetLatestBlockResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetBlockByHeight queries block for given height. */
    getBlockByHeight = async (request) => {
        const data = query_1.GetBlockByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then(data => query_1.GetBlockByHeightResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetLatestValidatorSet queries latest validator-set. */
    getLatestValidatorSet = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.GetLatestValidatorSetRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then(data => query_1.GetLatestValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GetValidatorSetByHeight queries validator-set at a given height. */
    getValidatorSetByHeight = async (request) => {
        const data = query_1.GetValidatorSetByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then(data => query_1.GetValidatorSetByHeightResponse.decode(new binary_1.BinaryReader(data)));
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
    const useGetNodeInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getNodeInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getNodeInfo(request);
        }, options);
    };
    const useGetSyncing = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getSyncingQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getSyncing(request);
        }, options);
    };
    const useGetLatestBlock = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getLatestBlockQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getLatestBlock(request);
        }, options);
    };
    const useGetBlockByHeight = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getBlockByHeightQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getBlockByHeight(request);
        }, options);
    };
    const useGetLatestValidatorSet = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getLatestValidatorSetQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getLatestValidatorSet(request);
        }, options);
    };
    const useGetValidatorSetByHeight = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getValidatorSetByHeightQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getValidatorSetByHeight(request);
        }, options);
    };
    return {
        /** GetNodeInfo queries the current node info. */ useGetNodeInfo,
        /** GetSyncing queries node syncing. */ useGetSyncing,
        /** GetLatestBlock returns the latest block. */ useGetLatestBlock,
        /** GetBlockByHeight queries block for given height. */ useGetBlockByHeight,
        /** GetLatestValidatorSet queries latest validator-set. */ useGetLatestValidatorSet,
        /** GetValidatorSetByHeight queries validator-set at a given height. */ useGetValidatorSetByHeight
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryGetNodeInfoStore {
        store = new mobx_1.QueryStore(queryService?.getNodeInfo);
        getNodeInfo(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetSyncingStore {
        store = new mobx_1.QueryStore(queryService?.getSyncing);
        getSyncing(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetLatestBlockStore {
        store = new mobx_1.QueryStore(queryService?.getLatestBlock);
        getLatestBlock(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetBlockByHeightStore {
        store = new mobx_1.QueryStore(queryService?.getBlockByHeight);
        getBlockByHeight(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetLatestValidatorSetStore {
        store = new mobx_1.QueryStore(queryService?.getLatestValidatorSet);
        getLatestValidatorSet(request) {
            return this.store.getData(request);
        }
    }
    class QueryGetValidatorSetByHeightStore {
        store = new mobx_1.QueryStore(queryService?.getValidatorSetByHeight);
        getValidatorSetByHeight(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** GetNodeInfo queries the current node info. */ QueryGetNodeInfoStore,
        /** GetSyncing queries node syncing. */ QueryGetSyncingStore,
        /** GetLatestBlock returns the latest block. */ QueryGetLatestBlockStore,
        /** GetBlockByHeight queries block for given height. */ QueryGetBlockByHeightStore,
        /** GetLatestValidatorSet queries latest validator-set. */ QueryGetLatestValidatorSetStore,
        /** GetValidatorSetByHeight queries validator-set at a given height. */ QueryGetValidatorSetByHeightStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
