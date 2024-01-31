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
    /* Params defines a gRPC query method that returns the tokenfactory module's
     parameters. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DenomAuthorityMetadata defines a gRPC query method for fetching
     DenomAuthorityMetadata for a particular denom. */
    denomAuthorityMetadata = async (request) => {
        const data = query_1.QueryDenomAuthorityMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
        return promise.then(data => query_1.QueryDenomAuthorityMetadataResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DenomsFromCreator defines a gRPC query method for fetching all
     denominations created by a specific admin/creator. */
    denomsFromCreator = async (request) => {
        const data = query_1.QueryDenomsFromCreatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
        return promise.then(data => query_1.QueryDenomsFromCreatorResponse.decode(new binary_1.BinaryReader(data)));
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
    const useDenomAuthorityMetadata = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomAuthorityMetadataQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomAuthorityMetadata(request);
        }, options);
    };
    const useDenomsFromCreator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomsFromCreatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomsFromCreator(request);
        }, options);
    };
    return {
        /**
         * Params defines a gRPC query method that returns the tokenfactory module's
         * parameters.
         */
        useParams,
        /**
         * DenomAuthorityMetadata defines a gRPC query method for fetching
         * DenomAuthorityMetadata for a particular denom.
         */
        useDenomAuthorityMetadata,
        /**
         * DenomsFromCreator defines a gRPC query method for fetching all
         * denominations created by a specific admin/creator.
         */
        useDenomsFromCreator
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
    class QueryDenomAuthorityMetadataStore {
        store = new mobx_1.QueryStore(queryService?.denomAuthorityMetadata);
        denomAuthorityMetadata(request) {
            return this.store.getData(request);
        }
    }
    class QueryDenomsFromCreatorStore {
        store = new mobx_1.QueryStore(queryService?.denomsFromCreator);
        denomsFromCreator(request) {
            return this.store.getData(request);
        }
    }
    return {
        /**
         * Params defines a gRPC query method that returns the tokenfactory module's
         * parameters.
         */
        QueryParamsStore,
        /**
         * DenomAuthorityMetadata defines a gRPC query method for fetching
         * DenomAuthorityMetadata for a particular denom.
         */
        QueryDenomAuthorityMetadataStore,
        /**
         * DenomsFromCreator defines a gRPC query method for fetching all
         * denominations created by a specific admin/creator.
         */
        QueryDenomsFromCreatorStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
