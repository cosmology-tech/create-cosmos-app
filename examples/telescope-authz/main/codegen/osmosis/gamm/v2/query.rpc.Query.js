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
    /* SpotPrice defines a gRPC query handler that returns the spot price given
     a base denomination and a quote denomination. */
    spotPrice = async (request) => {
        const data = query_1.QuerySpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v2.Query", "SpotPrice", data);
        return promise.then(data => query_1.QuerySpotPriceResponse.decode(new binary_1.BinaryReader(data)));
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
    const useSpotPrice = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["spotPriceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.spotPrice(request);
        }, options);
    };
    return {
        /**
         * SpotPrice defines a gRPC query handler that returns the spot price given
         * a base denomination and a quote denomination.
         */
        useSpotPrice
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QuerySpotPriceStore {
        store = new mobx_1.QueryStore(queryService?.spotPrice);
        spotPrice(request) {
            return this.store.getData(request);
        }
    }
    return {
        /**
         * SpotPrice defines a gRPC query handler that returns the spot price given
         * a base denomination and a quote denomination.
         */
        QuerySpotPriceStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
