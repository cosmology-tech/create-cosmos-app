"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../../../mobx");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* ClientState queries an IBC light client. */
    clientState = async (request) => {
        const data = query_1.QueryClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
        return promise.then(data => query_1.QueryClientStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ClientStates queries all the IBC light clients of a chain. */
    clientStates = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryClientStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
        return promise.then(data => query_1.QueryClientStatesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ConsensusState queries a consensus state associated with a client state at
     a given height. */
    consensusState = async (request) => {
        const data = query_1.QueryConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
        return promise.then(data => query_1.QueryConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ConsensusStates queries all the consensus state associated with a given
     client. */
    consensusStates = async (request) => {
        const data = query_1.QueryConsensusStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
        return promise.then(data => query_1.QueryConsensusStatesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Status queries the status of an IBC client. */
    clientStatus = async (request) => {
        const data = query_1.QueryClientStatusRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
        return promise.then(data => query_1.QueryClientStatusResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ClientParams queries all parameters of the ibc client. */
    clientParams = async (request = {}) => {
        const data = query_1.QueryClientParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
        return promise.then(data => query_1.QueryClientParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* UpgradedClientState queries an Upgraded IBC light client. */
    upgradedClientState = async (request = {}) => {
        const data = query_1.QueryUpgradedClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
        return promise.then(data => query_1.QueryUpgradedClientStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
    upgradedConsensusState = async (request = {}) => {
        const data = query_1.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
        return promise.then(data => query_1.QueryUpgradedConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
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
    const useClientState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientState(request);
        }, options);
    };
    const useClientStates = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientStatesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientStates(request);
        }, options);
    };
    const useConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["consensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.consensusState(request);
        }, options);
    };
    const useConsensusStates = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["consensusStatesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.consensusStates(request);
        }, options);
    };
    const useClientStatus = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientStatusQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientStatus(request);
        }, options);
    };
    const useClientParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientParamsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientParams(request);
        }, options);
    };
    const useUpgradedClientState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["upgradedClientStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.upgradedClientState(request);
        }, options);
    };
    const useUpgradedConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["upgradedConsensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.upgradedConsensusState(request);
        }, options);
    };
    return {
        /** ClientState queries an IBC light client. */ useClientState,
        /** ClientStates queries all the IBC light clients of a chain. */ useClientStates,
        /**
         * ConsensusState queries a consensus state associated with a client state at
         * a given height.
         */
        useConsensusState,
        /**
         * ConsensusStates queries all the consensus state associated with a given
         * client.
         */
        useConsensusStates,
        /** Status queries the status of an IBC client. */ useClientStatus,
        /** ClientParams queries all parameters of the ibc client. */ useClientParams,
        /** UpgradedClientState queries an Upgraded IBC light client. */ useUpgradedClientState,
        /** UpgradedConsensusState queries an Upgraded IBC consensus state. */ useUpgradedConsensusState
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryClientStateStore {
        store = new mobx_1.QueryStore(queryService?.clientState);
        clientState(request) {
            return this.store.getData(request);
        }
    }
    class QueryClientStatesStore {
        store = new mobx_1.QueryStore(queryService?.clientStates);
        clientStates(request) {
            return this.store.getData(request);
        }
    }
    class QueryConsensusStateStore {
        store = new mobx_1.QueryStore(queryService?.consensusState);
        consensusState(request) {
            return this.store.getData(request);
        }
    }
    class QueryConsensusStatesStore {
        store = new mobx_1.QueryStore(queryService?.consensusStates);
        consensusStates(request) {
            return this.store.getData(request);
        }
    }
    class QueryClientStatusStore {
        store = new mobx_1.QueryStore(queryService?.clientStatus);
        clientStatus(request) {
            return this.store.getData(request);
        }
    }
    class QueryClientParamsStore {
        store = new mobx_1.QueryStore(queryService?.clientParams);
        clientParams(request) {
            return this.store.getData(request);
        }
    }
    class QueryUpgradedClientStateStore {
        store = new mobx_1.QueryStore(queryService?.upgradedClientState);
        upgradedClientState(request) {
            return this.store.getData(request);
        }
    }
    class QueryUpgradedConsensusStateStore {
        store = new mobx_1.QueryStore(queryService?.upgradedConsensusState);
        upgradedConsensusState(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** ClientState queries an IBC light client. */ QueryClientStateStore,
        /** ClientStates queries all the IBC light clients of a chain. */ QueryClientStatesStore,
        /**
         * ConsensusState queries a consensus state associated with a client state at
         * a given height.
         */
        QueryConsensusStateStore,
        /**
         * ConsensusStates queries all the consensus state associated with a given
         * client.
         */
        QueryConsensusStatesStore,
        /** Status queries the status of an IBC client. */ QueryClientStatusStore,
        /** ClientParams queries all parameters of the ibc client. */ QueryClientParamsStore,
        /** UpgradedClientState queries an Upgraded IBC light client. */ QueryUpgradedClientStateStore,
        /** UpgradedConsensusState queries an Upgraded IBC consensus state. */ QueryUpgradedConsensusStateStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
