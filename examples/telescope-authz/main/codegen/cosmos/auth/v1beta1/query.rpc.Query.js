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
    /* Accounts returns all the existing accounts
    
     Since: cosmos-sdk 0.43 */
    accounts = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
        return promise.then(data => query_1.QueryAccountsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Account returns account details based on address. */
    account = async (request) => {
        const data = query_1.QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
        return promise.then(data => query_1.QueryAccountResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Params queries all parameters. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ModuleAccounts returns all the existing module accounts. */
    moduleAccounts = async (request = {}) => {
        const data = query_1.QueryModuleAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
        return promise.then(data => query_1.QueryModuleAccountsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Bech32 queries bech32Prefix */
    bech32Prefix = async (request = {}) => {
        const data = query_1.Bech32PrefixRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
        return promise.then(data => query_1.Bech32PrefixResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AddressBytesToString converts Account Address bytes to string */
    addressBytesToString = async (request) => {
        const data = query_1.AddressBytesToStringRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
        return promise.then(data => query_1.AddressBytesToStringResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* AddressStringToBytes converts Address string to bytes */
    addressStringToBytes = async (request) => {
        const data = query_1.AddressStringToBytesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
        return promise.then(data => query_1.AddressStringToBytesResponse.decode(new binary_1.BinaryReader(data)));
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
    const useAccounts = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accounts(request);
        }, options);
    };
    const useAccount = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.account(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useModuleAccounts = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["moduleAccountsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.moduleAccounts(request);
        }, options);
    };
    const useBech32Prefix = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["bech32PrefixQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.bech32Prefix(request);
        }, options);
    };
    const useAddressBytesToString = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["addressBytesToStringQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.addressBytesToString(request);
        }, options);
    };
    const useAddressStringToBytes = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["addressStringToBytesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.addressStringToBytes(request);
        }, options);
    };
    return {
        /**
         * Accounts returns all the existing accounts
         *
         * Since: cosmos-sdk 0.43
         */
        useAccounts,
        /** Account returns account details based on address. */ useAccount,
        /** Params queries all parameters. */ useParams,
        /** ModuleAccounts returns all the existing module accounts. */ useModuleAccounts,
        /** Bech32 queries bech32Prefix */ useBech32Prefix,
        /** AddressBytesToString converts Account Address bytes to string */ useAddressBytesToString,
        /** AddressStringToBytes converts Address string to bytes */ useAddressStringToBytes
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryAccountsStore {
        store = new mobx_1.QueryStore(queryService?.accounts);
        accounts(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountStore {
        store = new mobx_1.QueryStore(queryService?.account);
        account(request) {
            return this.store.getData(request);
        }
    }
    class QueryParamsStore {
        store = new mobx_1.QueryStore(queryService?.params);
        params(request) {
            return this.store.getData(request);
        }
    }
    class QueryModuleAccountsStore {
        store = new mobx_1.QueryStore(queryService?.moduleAccounts);
        moduleAccounts(request) {
            return this.store.getData(request);
        }
    }
    class QueryBech32PrefixStore {
        store = new mobx_1.QueryStore(queryService?.bech32Prefix);
        bech32Prefix(request) {
            return this.store.getData(request);
        }
    }
    class QueryAddressBytesToStringStore {
        store = new mobx_1.QueryStore(queryService?.addressBytesToString);
        addressBytesToString(request) {
            return this.store.getData(request);
        }
    }
    class QueryAddressStringToBytesStore {
        store = new mobx_1.QueryStore(queryService?.addressStringToBytes);
        addressStringToBytes(request) {
            return this.store.getData(request);
        }
    }
    return {
        /**
         * Accounts returns all the existing accounts
         *
         * Since: cosmos-sdk 0.43
         */
        QueryAccountsStore,
        /** Account returns account details based on address. */ QueryAccountStore,
        /** Params queries all parameters. */ QueryParamsStore,
        /** ModuleAccounts returns all the existing module accounts. */ QueryModuleAccountsStore,
        /** Bech32 queries bech32Prefix */ QueryBech32PrefixStore,
        /** AddressBytesToString converts Account Address bytes to string */ QueryAddressBytesToStringStore,
        /** AddressStringToBytes converts Address string to bytes */ QueryAddressStringToBytesStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
