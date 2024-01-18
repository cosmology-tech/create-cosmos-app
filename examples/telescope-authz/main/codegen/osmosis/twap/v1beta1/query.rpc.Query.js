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
    /* Params */
    params = async (request = {}) => {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ArithmeticTwap */
    arithmeticTwap = async (request) => {
        const data = query_1.ArithmeticTwapRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
        return promise.then(data => query_1.ArithmeticTwapResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ArithmeticTwapToNow */
    arithmeticTwapToNow = async (request) => {
        const data = query_1.ArithmeticTwapToNowRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
        return promise.then(data => query_1.ArithmeticTwapToNowResponse.decode(new binary_1.BinaryReader(data)));
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
    const useArithmeticTwap = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["arithmeticTwapQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.arithmeticTwap(request);
        }, options);
    };
    const useArithmeticTwapToNow = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["arithmeticTwapToNowQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.arithmeticTwapToNow(request);
        }, options);
    };
    return {
        useParams,
        useArithmeticTwap,
        useArithmeticTwapToNow
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
    class QueryArithmeticTwapStore {
        store = new mobx_1.QueryStore(queryService?.arithmeticTwap);
        arithmeticTwap(request) {
            return this.store.getData(request);
        }
    }
    class QueryArithmeticTwapToNowStore {
        store = new mobx_1.QueryStore(queryService?.arithmeticTwapToNow);
        arithmeticTwapToNow(request) {
            return this.store.getData(request);
        }
    }
    return {
        QueryParamsStore,
        QueryArithmeticTwapStore,
        QueryArithmeticTwapToNowStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
