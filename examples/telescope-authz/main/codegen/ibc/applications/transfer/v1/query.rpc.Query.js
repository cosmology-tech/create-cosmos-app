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
    /* DenomTrace queries a denomination trace information. */
    denomTrace = async (request) => {
        const data = query_1.QueryDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
        return promise.then(data => query_1.QueryDenomTraceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DenomTraces queries all denomination traces. */
    denomTraces = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryDenomTracesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
        return promise.then(data => query_1.QueryDenomTracesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Params queries all parameters of the ibc-transfer module. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
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
    const useDenomTrace = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomTraceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomTrace(request);
        }, options);
    };
    const useDenomTraces = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomTracesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomTraces(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    return {
        /** DenomTrace queries a denomination trace information. */ useDenomTrace,
        /** DenomTraces queries all denomination traces. */ useDenomTraces,
        /** Params queries all parameters of the ibc-transfer module. */ useParams
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryDenomTraceStore {
        store = new mobx_1.QueryStore(queryService?.denomTrace);
        denomTrace(request) {
            return this.store.getData(request);
        }
    }
    class QueryDenomTracesStore {
        store = new mobx_1.QueryStore(queryService?.denomTraces);
        denomTraces(request) {
            return this.store.getData(request);
        }
    }
    class QueryParamsStore {
        store = new mobx_1.QueryStore(queryService?.params);
        params(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** DenomTrace queries a denomination trace information. */ QueryDenomTraceStore,
        /** DenomTraces queries all denomination traces. */ QueryDenomTracesStore,
        /** Params queries all parameters of the ibc-transfer module. */ QueryParamsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
