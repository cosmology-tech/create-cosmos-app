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
    /* Balance queries the balance of a single coin for a single account. */
    balance = async (request) => {
        const data = query_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
        return promise.then(data => query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AllBalances queries the balance of all coins for a single account. */
    allBalances = async (request) => {
        const data = query_1.QueryAllBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
        return promise.then(data => query_1.QueryAllBalancesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* SpendableBalances queries the spenable balance of all coins for a single
     account. */
    spendableBalances = async (request) => {
        const data = query_1.QuerySpendableBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
        return promise.then(data => query_1.QuerySpendableBalancesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* TotalSupply queries the total supply of all coins. */
    totalSupply = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryTotalSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
        return promise.then(data => query_1.QueryTotalSupplyResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* SupplyOf queries the supply of a single coin. */
    supplyOf = async (request) => {
        const data = query_1.QuerySupplyOfRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
        return promise.then(data => query_1.QuerySupplyOfResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Params queries the parameters of x/bank module. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DenomsMetadata queries the client metadata of a given coin denomination. */
    denomMetadata = async (request) => {
        const data = query_1.QueryDenomMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
        return promise.then(data => query_1.QueryDenomMetadataResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DenomsMetadata queries the client metadata for all registered coin
     denominations. */
    denomsMetadata = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryDenomsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
        return promise.then(data => query_1.QueryDenomsMetadataResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DenomOwners queries for all account addresses that own a particular token
     denomination. */
    denomOwners = async (request) => {
        const data = query_1.QueryDenomOwnersRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
        return promise.then(data => query_1.QueryDenomOwnersResponse.decode(new binary_1.BinaryReader(data)));
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
    const useBalance = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["balanceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.balance(request);
        }, options);
    };
    const useAllBalances = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allBalancesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allBalances(request);
        }, options);
    };
    const useSpendableBalances = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["spendableBalancesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.spendableBalances(request);
        }, options);
    };
    const useTotalSupply = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalSupplyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalSupply(request);
        }, options);
    };
    const useSupplyOf = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["supplyOfQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.supplyOf(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useDenomMetadata = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomMetadataQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomMetadata(request);
        }, options);
    };
    const useDenomsMetadata = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomsMetadataQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomsMetadata(request);
        }, options);
    };
    const useDenomOwners = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomOwnersQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomOwners(request);
        }, options);
    };
    return {
        /** Balance queries the balance of a single coin for a single account. */ useBalance,
        /** AllBalances queries the balance of all coins for a single account. */ useAllBalances,
        /**
         * SpendableBalances queries the spenable balance of all coins for a single
         * account.
         */
        useSpendableBalances,
        /** TotalSupply queries the total supply of all coins. */ useTotalSupply,
        /** SupplyOf queries the supply of a single coin. */ useSupplyOf,
        /** Params queries the parameters of x/bank module. */ useParams,
        /** DenomsMetadata queries the client metadata of a given coin denomination. */ useDenomMetadata,
        /**
         * DenomsMetadata queries the client metadata for all registered coin
         * denominations.
         */
        useDenomsMetadata,
        /**
         * DenomOwners queries for all account addresses that own a particular token
         * denomination.
         */
        useDenomOwners
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryBalanceStore {
        store = new mobx_1.QueryStore(queryService?.balance);
        balance(request) {
            return this.store.getData(request);
        }
    }
    class QueryAllBalancesStore {
        store = new mobx_1.QueryStore(queryService?.allBalances);
        allBalances(request) {
            return this.store.getData(request);
        }
    }
    class QuerySpendableBalancesStore {
        store = new mobx_1.QueryStore(queryService?.spendableBalances);
        spendableBalances(request) {
            return this.store.getData(request);
        }
    }
    class QueryTotalSupplyStore {
        store = new mobx_1.QueryStore(queryService?.totalSupply);
        totalSupply(request) {
            return this.store.getData(request);
        }
    }
    class QuerySupplyOfStore {
        store = new mobx_1.QueryStore(queryService?.supplyOf);
        supplyOf(request) {
            return this.store.getData(request);
        }
    }
    class QueryParamsStore {
        store = new mobx_1.QueryStore(queryService?.params);
        params(request) {
            return this.store.getData(request);
        }
    }
    class QueryDenomMetadataStore {
        store = new mobx_1.QueryStore(queryService?.denomMetadata);
        denomMetadata(request) {
            return this.store.getData(request);
        }
    }
    class QueryDenomsMetadataStore {
        store = new mobx_1.QueryStore(queryService?.denomsMetadata);
        denomsMetadata(request) {
            return this.store.getData(request);
        }
    }
    class QueryDenomOwnersStore {
        store = new mobx_1.QueryStore(queryService?.denomOwners);
        denomOwners(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Balance queries the balance of a single coin for a single account. */ QueryBalanceStore,
        /** AllBalances queries the balance of all coins for a single account. */ QueryAllBalancesStore,
        /**
         * SpendableBalances queries the spenable balance of all coins for a single
         * account.
         */
        QuerySpendableBalancesStore,
        /** TotalSupply queries the total supply of all coins. */ QueryTotalSupplyStore,
        /** SupplyOf queries the supply of a single coin. */ QuerySupplyOfStore,
        /** Params queries the parameters of x/bank module. */ QueryParamsStore,
        /** DenomsMetadata queries the client metadata of a given coin denomination. */ QueryDenomMetadataStore,
        /**
         * DenomsMetadata queries the client metadata for all registered coin
         * denominations.
         */
        QueryDenomsMetadataStore,
        /**
         * DenomOwners queries for all account addresses that own a particular token
         * denomination.
         */
        QueryDenomOwnersStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
