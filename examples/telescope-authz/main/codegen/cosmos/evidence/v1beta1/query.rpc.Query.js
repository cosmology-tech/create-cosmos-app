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
    /* Evidence queries evidence based on evidence hash. */
    evidence = async (request) => {
        const data = query_1.QueryEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
        return promise.then(data => query_1.QueryEvidenceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AllEvidence queries all evidence. */
    allEvidence = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryAllEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
        return promise.then(data => query_1.QueryAllEvidenceResponse.decode(new binary_1.BinaryReader(data)));
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
    const useEvidence = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["evidenceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.evidence(request);
        }, options);
    };
    const useAllEvidence = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allEvidenceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allEvidence(request);
        }, options);
    };
    return {
        /** Evidence queries evidence based on evidence hash. */ useEvidence,
        /** AllEvidence queries all evidence. */ useAllEvidence
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryEvidenceStore {
        store = new mobx_1.QueryStore(queryService?.evidence);
        evidence(request) {
            return this.store.getData(request);
        }
    }
    class QueryAllEvidenceStore {
        store = new mobx_1.QueryStore(queryService?.allEvidence);
        allEvidence(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Evidence queries evidence based on evidence hash. */ QueryEvidenceStore,
        /** AllEvidence queries all evidence. */ QueryAllEvidenceStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
