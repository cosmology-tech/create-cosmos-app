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
    /* Returns list of `Authorization`, granted to the grantee by the granter. */
    grants = async (request) => {
        const data = query_1.QueryGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
        return promise.then(data => query_1.QueryGrantsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
    
     Since: cosmos-sdk 0.46 */
    granterGrants = async (request) => {
        const data = query_1.QueryGranterGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
        return promise.then(data => query_1.QueryGranterGrantsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
    
     Since: cosmos-sdk 0.46 */
    granteeGrants = async (request) => {
        const data = query_1.QueryGranteeGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
        return promise.then(data => query_1.QueryGranteeGrantsResponse.decode(new binary_1.BinaryReader(data)));
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
    const useGrants = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["grantsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.grants(request);
        }, options);
    };
    const useGranterGrants = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["granterGrantsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.granterGrants(request);
        }, options);
    };
    const useGranteeGrants = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["granteeGrantsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.granteeGrants(request);
        }, options);
    };
    return {
        /** Returns list of `Authorization`, granted to the grantee by the granter. */ useGrants,
        /**
         * GranterGrants returns list of `GrantAuthorization`, granted by granter.
         *
         * Since: cosmos-sdk 0.46
         */
        useGranterGrants,
        /**
         * GranteeGrants returns a list of `GrantAuthorization` by grantee.
         *
         * Since: cosmos-sdk 0.46
         */
        useGranteeGrants
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryGrantsStore {
        store = new mobx_1.QueryStore(queryService?.grants);
        grants(request) {
            return this.store.getData(request);
        }
    }
    class QueryGranterGrantsStore {
        store = new mobx_1.QueryStore(queryService?.granterGrants);
        granterGrants(request) {
            return this.store.getData(request);
        }
    }
    class QueryGranteeGrantsStore {
        store = new mobx_1.QueryStore(queryService?.granteeGrants);
        granteeGrants(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Returns list of `Authorization`, granted to the grantee by the granter. */ QueryGrantsStore,
        /**
         * GranterGrants returns list of `GrantAuthorization`, granted by granter.
         *
         * Since: cosmos-sdk 0.46
         */
        QueryGranterGrantsStore,
        /**
         * GranteeGrants returns a list of `GrantAuthorization` by grantee.
         *
         * Since: cosmos-sdk 0.46
         */
        QueryGranteeGrantsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
