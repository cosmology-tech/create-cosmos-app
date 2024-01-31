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
    /* Connection queries an IBC connection end. */
    connection = async (request) => {
        const data = query_1.QueryConnectionRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
        return promise.then(data => query_1.QueryConnectionResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Connections queries all the IBC connections of a chain. */
    connections = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
        return promise.then(data => query_1.QueryConnectionsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ClientConnections queries the connection paths associated with a client
     state. */
    clientConnections = async (request) => {
        const data = query_1.QueryClientConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
        return promise.then(data => query_1.QueryClientConnectionsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ConnectionClientState queries the client state associated with the
     connection. */
    connectionClientState = async (request) => {
        const data = query_1.QueryConnectionClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
        return promise.then(data => query_1.QueryConnectionClientStateResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ConnectionConsensusState queries the consensus state associated with the
     connection. */
    connectionConsensusState = async (request) => {
        const data = query_1.QueryConnectionConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
        return promise.then(data => query_1.QueryConnectionConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
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
    const useConnection = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connection(request);
        }, options);
    };
    const useConnections = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connections(request);
        }, options);
    };
    const useClientConnections = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientConnectionsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientConnections(request);
        }, options);
    };
    const useConnectionClientState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionClientStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connectionClientState(request);
        }, options);
    };
    const useConnectionConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionConsensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connectionConsensusState(request);
        }, options);
    };
    return {
        /** Connection queries an IBC connection end. */ useConnection,
        /** Connections queries all the IBC connections of a chain. */ useConnections,
        /**
         * ClientConnections queries the connection paths associated with a client
         * state.
         */
        useClientConnections,
        /**
         * ConnectionClientState queries the client state associated with the
         * connection.
         */
        useConnectionClientState,
        /**
         * ConnectionConsensusState queries the consensus state associated with the
         * connection.
         */
        useConnectionConsensusState
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryConnectionStore {
        store = new mobx_1.QueryStore(queryService?.connection);
        connection(request) {
            return this.store.getData(request);
        }
    }
    class QueryConnectionsStore {
        store = new mobx_1.QueryStore(queryService?.connections);
        connections(request) {
            return this.store.getData(request);
        }
    }
    class QueryClientConnectionsStore {
        store = new mobx_1.QueryStore(queryService?.clientConnections);
        clientConnections(request) {
            return this.store.getData(request);
        }
    }
    class QueryConnectionClientStateStore {
        store = new mobx_1.QueryStore(queryService?.connectionClientState);
        connectionClientState(request) {
            return this.store.getData(request);
        }
    }
    class QueryConnectionConsensusStateStore {
        store = new mobx_1.QueryStore(queryService?.connectionConsensusState);
        connectionConsensusState(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Connection queries an IBC connection end. */ QueryConnectionStore,
        /** Connections queries all the IBC connections of a chain. */ QueryConnectionsStore,
        /**
         * ClientConnections queries the connection paths associated with a client
         * state.
         */
        QueryClientConnectionsStore,
        /**
         * ConnectionClientState queries the client state associated with the
         * connection.
         */
        QueryConnectionClientStateStore,
        /**
         * ConnectionConsensusState queries the consensus state associated with the
         * connection.
         */
        QueryConnectionConsensusStateStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
