"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.QueryClientImpl = void 0;
const binary_1 = require("../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../mobx");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* Return full balance of the module */
    moduleBalance = async (request = {}) => {
        const data = query_1.ModuleBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
        return promise.then(data => query_1.ModuleBalanceResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Return locked balance of the module */
    moduleLockedAmount = async (request = {}) => {
        const data = query_1.ModuleLockedAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
        return promise.then(data => query_1.ModuleLockedAmountResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns unlockable coins which are not withdrawn yet */
    accountUnlockableCoins = async (request) => {
        const data = query_1.AccountUnlockableCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
        return promise.then(data => query_1.AccountUnlockableCoinsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns unlocking coins */
    accountUnlockingCoins = async (request) => {
        const data = query_1.AccountUnlockingCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
        return promise.then(data => query_1.AccountUnlockingCoinsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Return a locked coins that can't be withdrawn */
    accountLockedCoins = async (request) => {
        const data = query_1.AccountLockedCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
        return promise.then(data => query_1.AccountLockedCoinsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns locked records of an account with unlock time beyond timestamp */
    accountLockedPastTime = async (request) => {
        const data = query_1.AccountLockedPastTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
        return promise.then(data => query_1.AccountLockedPastTimeResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns locked records of an account with unlock time beyond timestamp
     excluding tokens started unlocking */
    accountLockedPastTimeNotUnlockingOnly = async (request) => {
        const data = query_1.AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
        return promise.then(data => query_1.AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns unlocked records with unlock time before timestamp */
    accountUnlockedBeforeTime = async (request) => {
        const data = query_1.AccountUnlockedBeforeTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
        return promise.then(data => query_1.AccountUnlockedBeforeTimeResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns lock records by address, timestamp, denom */
    accountLockedPastTimeDenom = async (request) => {
        const data = query_1.AccountLockedPastTimeDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
        return promise.then(data => query_1.AccountLockedPastTimeDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns total locked per denom with longer past given time */
    lockedDenom = async (request) => {
        const data = query_1.LockedDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
        return promise.then(data => query_1.LockedDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns lock record by id */
    lockedByID = async (request) => {
        const data = query_1.LockedRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
        return promise.then(data => query_1.LockedResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns synthetic lockups by native lockup id */
    syntheticLockupsByLockupID = async (request) => {
        const data = query_1.SyntheticLockupsByLockupIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
        return promise.then(data => query_1.SyntheticLockupsByLockupIDResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns account locked records with longer duration */
    accountLockedLongerDuration = async (request) => {
        const data = query_1.AccountLockedLongerDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
        return promise.then(data => query_1.AccountLockedLongerDurationResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns account locked records with a specific duration */
    accountLockedDuration = async (request) => {
        const data = query_1.AccountLockedDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
        return promise.then(data => query_1.AccountLockedDurationResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns account locked records with longer duration excluding tokens
     started unlocking */
    accountLockedLongerDurationNotUnlockingOnly = async (request) => {
        const data = query_1.AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
        return promise.then(data => query_1.AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns account's locked records for a denom with longer duration */
    accountLockedLongerDurationDenom = async (request) => {
        const data = query_1.AccountLockedLongerDurationDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
        return promise.then(data => query_1.AccountLockedLongerDurationDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Params returns lockup params. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "Params", data);
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
    const useModuleBalance = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["moduleBalanceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.moduleBalance(request);
        }, options);
    };
    const useModuleLockedAmount = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["moduleLockedAmountQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.moduleLockedAmount(request);
        }, options);
    };
    const useAccountUnlockableCoins = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountUnlockableCoinsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountUnlockableCoins(request);
        }, options);
    };
    const useAccountUnlockingCoins = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountUnlockingCoinsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountUnlockingCoins(request);
        }, options);
    };
    const useAccountLockedCoins = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedCoinsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedCoins(request);
        }, options);
    };
    const useAccountLockedPastTime = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedPastTimeQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedPastTime(request);
        }, options);
    };
    const useAccountLockedPastTimeNotUnlockingOnly = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedPastTimeNotUnlockingOnlyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedPastTimeNotUnlockingOnly(request);
        }, options);
    };
    const useAccountUnlockedBeforeTime = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountUnlockedBeforeTimeQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountUnlockedBeforeTime(request);
        }, options);
    };
    const useAccountLockedPastTimeDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedPastTimeDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedPastTimeDenom(request);
        }, options);
    };
    const useLockedDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["lockedDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.lockedDenom(request);
        }, options);
    };
    const useLockedByID = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["lockedByIDQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.lockedByID(request);
        }, options);
    };
    const useSyntheticLockupsByLockupID = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["syntheticLockupsByLockupIDQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.syntheticLockupsByLockupID(request);
        }, options);
    };
    const useAccountLockedLongerDuration = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedLongerDurationQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedLongerDuration(request);
        }, options);
    };
    const useAccountLockedDuration = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedDurationQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedDuration(request);
        }, options);
    };
    const useAccountLockedLongerDurationNotUnlockingOnly = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedLongerDurationNotUnlockingOnlyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedLongerDurationNotUnlockingOnly(request);
        }, options);
    };
    const useAccountLockedLongerDurationDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountLockedLongerDurationDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accountLockedLongerDurationDenom(request);
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
        /** Return full balance of the module */ useModuleBalance,
        /** Return locked balance of the module */ useModuleLockedAmount,
        /** Returns unlockable coins which are not withdrawn yet */ useAccountUnlockableCoins,
        /** Returns unlocking coins */ useAccountUnlockingCoins,
        /** Return a locked coins that can't be withdrawn */ useAccountLockedCoins,
        /** Returns locked records of an account with unlock time beyond timestamp */ useAccountLockedPastTime,
        /**
         * Returns locked records of an account with unlock time beyond timestamp
         * excluding tokens started unlocking
         */
        useAccountLockedPastTimeNotUnlockingOnly,
        /** Returns unlocked records with unlock time before timestamp */ useAccountUnlockedBeforeTime,
        /** Returns lock records by address, timestamp, denom */ useAccountLockedPastTimeDenom,
        /** Returns total locked per denom with longer past given time */ useLockedDenom,
        /** Returns lock record by id */ useLockedByID,
        /** Returns synthetic lockups by native lockup id */ useSyntheticLockupsByLockupID,
        /** Returns account locked records with longer duration */ useAccountLockedLongerDuration,
        /** Returns account locked records with a specific duration */ useAccountLockedDuration,
        /**
         * Returns account locked records with longer duration excluding tokens
         * started unlocking
         */
        useAccountLockedLongerDurationNotUnlockingOnly,
        /** Returns account's locked records for a denom with longer duration */ useAccountLockedLongerDurationDenom,
        /** Params returns lockup params. */ useParams
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryModuleBalanceStore {
        store = new mobx_1.QueryStore(queryService?.moduleBalance);
        moduleBalance(request) {
            return this.store.getData(request);
        }
    }
    class QueryModuleLockedAmountStore {
        store = new mobx_1.QueryStore(queryService?.moduleLockedAmount);
        moduleLockedAmount(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountUnlockableCoinsStore {
        store = new mobx_1.QueryStore(queryService?.accountUnlockableCoins);
        accountUnlockableCoins(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountUnlockingCoinsStore {
        store = new mobx_1.QueryStore(queryService?.accountUnlockingCoins);
        accountUnlockingCoins(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedCoinsStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedCoins);
        accountLockedCoins(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedPastTimeStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedPastTime);
        accountLockedPastTime(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedPastTimeNotUnlockingOnlyStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedPastTimeNotUnlockingOnly);
        accountLockedPastTimeNotUnlockingOnly(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountUnlockedBeforeTimeStore {
        store = new mobx_1.QueryStore(queryService?.accountUnlockedBeforeTime);
        accountUnlockedBeforeTime(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedPastTimeDenomStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedPastTimeDenom);
        accountLockedPastTimeDenom(request) {
            return this.store.getData(request);
        }
    }
    class QueryLockedDenomStore {
        store = new mobx_1.QueryStore(queryService?.lockedDenom);
        lockedDenom(request) {
            return this.store.getData(request);
        }
    }
    class QueryLockedByIDStore {
        store = new mobx_1.QueryStore(queryService?.lockedByID);
        lockedByID(request) {
            return this.store.getData(request);
        }
    }
    class QuerySyntheticLockupsByLockupIDStore {
        store = new mobx_1.QueryStore(queryService?.syntheticLockupsByLockupID);
        syntheticLockupsByLockupID(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedLongerDurationStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedLongerDuration);
        accountLockedLongerDuration(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedDurationStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedDuration);
        accountLockedDuration(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedLongerDurationNotUnlockingOnlyStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedLongerDurationNotUnlockingOnly);
        accountLockedLongerDurationNotUnlockingOnly(request) {
            return this.store.getData(request);
        }
    }
    class QueryAccountLockedLongerDurationDenomStore {
        store = new mobx_1.QueryStore(queryService?.accountLockedLongerDurationDenom);
        accountLockedLongerDurationDenom(request) {
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
        /** Return full balance of the module */ QueryModuleBalanceStore,
        /** Return locked balance of the module */ QueryModuleLockedAmountStore,
        /** Returns unlockable coins which are not withdrawn yet */ QueryAccountUnlockableCoinsStore,
        /** Returns unlocking coins */ QueryAccountUnlockingCoinsStore,
        /** Return a locked coins that can't be withdrawn */ QueryAccountLockedCoinsStore,
        /** Returns locked records of an account with unlock time beyond timestamp */ QueryAccountLockedPastTimeStore,
        /**
         * Returns locked records of an account with unlock time beyond timestamp
         * excluding tokens started unlocking
         */
        QueryAccountLockedPastTimeNotUnlockingOnlyStore,
        /** Returns unlocked records with unlock time before timestamp */ QueryAccountUnlockedBeforeTimeStore,
        /** Returns lock records by address, timestamp, denom */ QueryAccountLockedPastTimeDenomStore,
        /** Returns total locked per denom with longer past given time */ QueryLockedDenomStore,
        /** Returns lock record by id */ QueryLockedByIDStore,
        /** Returns synthetic lockups by native lockup id */ QuerySyntheticLockupsByLockupIDStore,
        /** Returns account locked records with longer duration */ QueryAccountLockedLongerDurationStore,
        /** Returns account locked records with a specific duration */ QueryAccountLockedDurationStore,
        /**
         * Returns account locked records with longer duration excluding tokens
         * started unlocking
         */
        QueryAccountLockedLongerDurationNotUnlockingOnlyStore,
        /** Returns account's locked records for a denom with longer duration */ QueryAccountLockedLongerDurationDenomStore,
        /** Params returns lockup params. */ QueryParamsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
