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
    /* FeeTokens returns a list of all the whitelisted fee tokens and their
     corresponding pools. It does not include the BaseDenom, which has its own
     query endpoint */
    feeTokens = async (request = {}) => {
        const data = query_1.QueryFeeTokensRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
        return promise.then(data => query_1.QueryFeeTokensResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DenomSpotPrice returns all spot prices by each registered token denom. */
    denomSpotPrice = async (request) => {
        const data = query_1.QueryDenomSpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
        return promise.then(data => query_1.QueryDenomSpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the poolID for a specified denom input. */
    denomPoolId = async (request) => {
        const data = query_1.QueryDenomPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
        return promise.then(data => query_1.QueryDenomPoolIdResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns a list of all base denom tokens and their corresponding pools. */
    baseDenom = async (request = {}) => {
        const data = query_1.QueryBaseDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
        return promise.then(data => query_1.QueryBaseDenomResponse.decode(new binary_1.BinaryReader(data)));
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
    const useFeeTokens = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["feeTokensQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.feeTokens(request);
        }, options);
    };
    const useDenomSpotPrice = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomSpotPriceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomSpotPrice(request);
        }, options);
    };
    const useDenomPoolId = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomPoolIdQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomPoolId(request);
        }, options);
    };
    const useBaseDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["baseDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.baseDenom(request);
        }, options);
    };
    return {
        /**
         * FeeTokens returns a list of all the whitelisted fee tokens and their
         * corresponding pools. It does not include the BaseDenom, which has its own
         * query endpoint
         */
        useFeeTokens,
        /** DenomSpotPrice returns all spot prices by each registered token denom. */ useDenomSpotPrice,
        /** Returns the poolID for a specified denom input. */ useDenomPoolId,
        /** Returns a list of all base denom tokens and their corresponding pools. */ useBaseDenom
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryFeeTokensStore {
        store = new mobx_1.QueryStore(queryService?.feeTokens);
        feeTokens(request) {
            return this.store.getData(request);
        }
    }
    class QueryDenomSpotPriceStore {
        store = new mobx_1.QueryStore(queryService?.denomSpotPrice);
        denomSpotPrice(request) {
            return this.store.getData(request);
        }
    }
    class QueryDenomPoolIdStore {
        store = new mobx_1.QueryStore(queryService?.denomPoolId);
        denomPoolId(request) {
            return this.store.getData(request);
        }
    }
    class QueryBaseDenomStore {
        store = new mobx_1.QueryStore(queryService?.baseDenom);
        baseDenom(request) {
            return this.store.getData(request);
        }
    }
    return {
        /**
         * FeeTokens returns a list of all the whitelisted fee tokens and their
         * corresponding pools. It does not include the BaseDenom, which has its own
         * query endpoint
         */
        QueryFeeTokensStore,
        /** DenomSpotPrice returns all spot prices by each registered token denom. */ QueryDenomSpotPriceStore,
        /** Returns the poolID for a specified denom input. */ QueryDenomPoolIdStore,
        /** Returns a list of all base denom tokens and their corresponding pools. */ QueryBaseDenomStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
