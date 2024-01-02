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
    /* Params queries the parameters of slashing module */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* SigningInfo queries the signing info of given cons address */
    signingInfo = async (request) => {
        const data = query_1.QuerySigningInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
        return promise.then(data => query_1.QuerySigningInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* SigningInfos queries signing info of all validators */
    signingInfos = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QuerySigningInfosRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
        return promise.then(data => query_1.QuerySigningInfosResponse.decode(new binary_1.BinaryReader(data)));
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
    const useSigningInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["signingInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.signingInfo(request);
        }, options);
    };
    const useSigningInfos = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["signingInfosQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.signingInfos(request);
        }, options);
    };
    return {
        /** Params queries the parameters of slashing module */ useParams,
        /** SigningInfo queries the signing info of given cons address */ useSigningInfo,
        /** SigningInfos queries signing info of all validators */ useSigningInfos
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
    class QuerySigningInfoStore {
        store = new mobx_1.QueryStore(queryService?.signingInfo);
        signingInfo(request) {
            return this.store.getData(request);
        }
    }
    class QuerySigningInfosStore {
        store = new mobx_1.QueryStore(queryService?.signingInfos);
        signingInfos(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Params queries the parameters of slashing module */ QueryParamsStore,
        /** SigningInfo queries the signing info of given cons address */ QuerySigningInfoStore,
        /** SigningInfos queries signing info of all validators */ QuerySigningInfosStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
