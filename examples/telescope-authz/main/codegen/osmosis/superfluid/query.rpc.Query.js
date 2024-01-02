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
    /* Params returns the total set of superfluid parameters. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns superfluid asset type, whether if it's a native asset or an lp
     share. */
    assetType = async (request) => {
        const data = query_1.AssetTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
        return promise.then(data => query_1.AssetTypeResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns all registered superfluid assets. */
    allAssets = async (request = {}) => {
        const data = query_1.AllAssetsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
        return promise.then(data => query_1.AllAssetsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the osmo equivalent multiplier used in the most recent epoch. */
    assetMultiplier = async (request) => {
        const data = query_1.AssetMultiplierRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
        return promise.then(data => query_1.AssetMultiplierResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns all superfluid intermediary accounts. */
    allIntermediaryAccounts = async (request = {
        pagination: undefined
    }) => {
        const data = query_1.AllIntermediaryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
        return promise.then(data => query_1.AllIntermediaryAccountsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns intermediary account connected to a superfluid staked lock by id */
    connectedIntermediaryAccount = async (request) => {
        const data = query_1.ConnectedIntermediaryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
        return promise.then(data => query_1.ConnectedIntermediaryAccountResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the amount of delegations of specific denom for all validators */
    totalDelegationByValidatorForDenom = async (request) => {
        const data = query_1.QueryTotalDelegationByValidatorForDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByValidatorForDenom", data);
        return promise.then(data => query_1.QueryTotalDelegationByValidatorForDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the total amount of osmo superfluidly staked.
     Response is denominated in uosmo. */
    totalSuperfluidDelegations = async (request = {}) => {
        const data = query_1.TotalSuperfluidDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
        return promise.then(data => query_1.TotalSuperfluidDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the coins superfluid delegated for the delegator, validator, denom
     triplet */
    superfluidDelegationAmount = async (request) => {
        const data = query_1.SuperfluidDelegationAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
        return promise.then(data => query_1.SuperfluidDelegationAmountResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns all the delegated superfluid poistions for a specific delegator. */
    superfluidDelegationsByDelegator = async (request) => {
        const data = query_1.SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
        return promise.then(data => query_1.SuperfluidDelegationsByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns all the undelegating superfluid poistions for a specific delegator. */
    superfluidUndelegationsByDelegator = async (request) => {
        const data = query_1.SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
        return promise.then(data => query_1.SuperfluidUndelegationsByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns all the superfluid positions of a specific denom delegated to one
     validator */
    superfluidDelegationsByValidatorDenom = async (request) => {
        const data = query_1.SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
        return promise.then(data => query_1.SuperfluidDelegationsByValidatorDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the amount of a specific denom delegated to a specific validator
     This is labeled an estimate, because the way it calculates the amount can
     lead rounding errors from the true delegated amount */
    estimateSuperfluidDelegatedAmountByValidatorDenom = async (request) => {
        const data = query_1.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
        return promise.then(data => query_1.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns the specified delegations for a specific delegator */
    totalDelegationByDelegator = async (request) => {
        const data = query_1.QueryTotalDelegationByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
        return promise.then(data => query_1.QueryTotalDelegationByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Returns a list of whitelisted pool ids to unpool. */
    unpoolWhitelist = async (request = {}) => {
        const data = query_1.QueryUnpoolWhitelistRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "UnpoolWhitelist", data);
        return promise.then(data => query_1.QueryUnpoolWhitelistResponse.decode(new binary_1.BinaryReader(data)));
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
    const useAssetType = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["assetTypeQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.assetType(request);
        }, options);
    };
    const useAllAssets = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allAssetsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allAssets(request);
        }, options);
    };
    const useAssetMultiplier = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["assetMultiplierQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.assetMultiplier(request);
        }, options);
    };
    const useAllIntermediaryAccounts = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allIntermediaryAccountsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allIntermediaryAccounts(request);
        }, options);
    };
    const useConnectedIntermediaryAccount = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectedIntermediaryAccountQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connectedIntermediaryAccount(request);
        }, options);
    };
    const useTotalDelegationByValidatorForDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalDelegationByValidatorForDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalDelegationByValidatorForDenom(request);
        }, options);
    };
    const useTotalSuperfluidDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalSuperfluidDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalSuperfluidDelegations(request);
        }, options);
    };
    const useSuperfluidDelegationAmount = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["superfluidDelegationAmountQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.superfluidDelegationAmount(request);
        }, options);
    };
    const useSuperfluidDelegationsByDelegator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["superfluidDelegationsByDelegatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.superfluidDelegationsByDelegator(request);
        }, options);
    };
    const useSuperfluidUndelegationsByDelegator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["superfluidUndelegationsByDelegatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.superfluidUndelegationsByDelegator(request);
        }, options);
    };
    const useSuperfluidDelegationsByValidatorDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["superfluidDelegationsByValidatorDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.superfluidDelegationsByValidatorDenom(request);
        }, options);
    };
    const useEstimateSuperfluidDelegatedAmountByValidatorDenom = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["estimateSuperfluidDelegatedAmountByValidatorDenomQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.estimateSuperfluidDelegatedAmountByValidatorDenom(request);
        }, options);
    };
    const useTotalDelegationByDelegator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalDelegationByDelegatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalDelegationByDelegator(request);
        }, options);
    };
    const useUnpoolWhitelist = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["unpoolWhitelistQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.unpoolWhitelist(request);
        }, options);
    };
    return {
        /** Params returns the total set of superfluid parameters. */ useParams,
        /**
         * Returns superfluid asset type, whether if it's a native asset or an lp
         * share.
         */
        useAssetType,
        /** Returns all registered superfluid assets. */ useAllAssets,
        /** Returns the osmo equivalent multiplier used in the most recent epoch. */ useAssetMultiplier,
        /** Returns all superfluid intermediary accounts. */ useAllIntermediaryAccounts,
        /** Returns intermediary account connected to a superfluid staked lock by id */ useConnectedIntermediaryAccount,
        /** Returns the amount of delegations of specific denom for all validators */ useTotalDelegationByValidatorForDenom,
        /**
         * Returns the total amount of osmo superfluidly staked.
         * Response is denominated in uosmo.
         */
        useTotalSuperfluidDelegations,
        /**
         * Returns the coins superfluid delegated for the delegator, validator, denom
         * triplet
         */
        useSuperfluidDelegationAmount,
        /** Returns all the delegated superfluid poistions for a specific delegator. */ useSuperfluidDelegationsByDelegator,
        /** Returns all the undelegating superfluid poistions for a specific delegator. */ useSuperfluidUndelegationsByDelegator,
        /**
         * Returns all the superfluid positions of a specific denom delegated to one
         * validator
         */
        useSuperfluidDelegationsByValidatorDenom,
        /**
         * Returns the amount of a specific denom delegated to a specific validator
         * This is labeled an estimate, because the way it calculates the amount can
         * lead rounding errors from the true delegated amount
         */
        useEstimateSuperfluidDelegatedAmountByValidatorDenom,
        /** Returns the specified delegations for a specific delegator */ useTotalDelegationByDelegator,
        /** Returns a list of whitelisted pool ids to unpool. */ useUnpoolWhitelist
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
    class QueryAssetTypeStore {
        store = new mobx_1.QueryStore(queryService?.assetType);
        assetType(request) {
            return this.store.getData(request);
        }
    }
    class QueryAllAssetsStore {
        store = new mobx_1.QueryStore(queryService?.allAssets);
        allAssets(request) {
            return this.store.getData(request);
        }
    }
    class QueryAssetMultiplierStore {
        store = new mobx_1.QueryStore(queryService?.assetMultiplier);
        assetMultiplier(request) {
            return this.store.getData(request);
        }
    }
    class QueryAllIntermediaryAccountsStore {
        store = new mobx_1.QueryStore(queryService?.allIntermediaryAccounts);
        allIntermediaryAccounts(request) {
            return this.store.getData(request);
        }
    }
    class QueryConnectedIntermediaryAccountStore {
        store = new mobx_1.QueryStore(queryService?.connectedIntermediaryAccount);
        connectedIntermediaryAccount(request) {
            return this.store.getData(request);
        }
    }
    class QueryTotalDelegationByValidatorForDenomStore {
        store = new mobx_1.QueryStore(queryService?.totalDelegationByValidatorForDenom);
        totalDelegationByValidatorForDenom(request) {
            return this.store.getData(request);
        }
    }
    class QueryTotalSuperfluidDelegationsStore {
        store = new mobx_1.QueryStore(queryService?.totalSuperfluidDelegations);
        totalSuperfluidDelegations(request) {
            return this.store.getData(request);
        }
    }
    class QuerySuperfluidDelegationAmountStore {
        store = new mobx_1.QueryStore(queryService?.superfluidDelegationAmount);
        superfluidDelegationAmount(request) {
            return this.store.getData(request);
        }
    }
    class QuerySuperfluidDelegationsByDelegatorStore {
        store = new mobx_1.QueryStore(queryService?.superfluidDelegationsByDelegator);
        superfluidDelegationsByDelegator(request) {
            return this.store.getData(request);
        }
    }
    class QuerySuperfluidUndelegationsByDelegatorStore {
        store = new mobx_1.QueryStore(queryService?.superfluidUndelegationsByDelegator);
        superfluidUndelegationsByDelegator(request) {
            return this.store.getData(request);
        }
    }
    class QuerySuperfluidDelegationsByValidatorDenomStore {
        store = new mobx_1.QueryStore(queryService?.superfluidDelegationsByValidatorDenom);
        superfluidDelegationsByValidatorDenom(request) {
            return this.store.getData(request);
        }
    }
    class QueryEstimateSuperfluidDelegatedAmountByValidatorDenomStore {
        store = new mobx_1.QueryStore(queryService?.estimateSuperfluidDelegatedAmountByValidatorDenom);
        estimateSuperfluidDelegatedAmountByValidatorDenom(request) {
            return this.store.getData(request);
        }
    }
    class QueryTotalDelegationByDelegatorStore {
        store = new mobx_1.QueryStore(queryService?.totalDelegationByDelegator);
        totalDelegationByDelegator(request) {
            return this.store.getData(request);
        }
    }
    class QueryUnpoolWhitelistStore {
        store = new mobx_1.QueryStore(queryService?.unpoolWhitelist);
        unpoolWhitelist(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Params returns the total set of superfluid parameters. */ QueryParamsStore,
        /**
         * Returns superfluid asset type, whether if it's a native asset or an lp
         * share.
         */
        QueryAssetTypeStore,
        /** Returns all registered superfluid assets. */ QueryAllAssetsStore,
        /** Returns the osmo equivalent multiplier used in the most recent epoch. */ QueryAssetMultiplierStore,
        /** Returns all superfluid intermediary accounts. */ QueryAllIntermediaryAccountsStore,
        /** Returns intermediary account connected to a superfluid staked lock by id */ QueryConnectedIntermediaryAccountStore,
        /** Returns the amount of delegations of specific denom for all validators */ QueryTotalDelegationByValidatorForDenomStore,
        /**
         * Returns the total amount of osmo superfluidly staked.
         * Response is denominated in uosmo.
         */
        QueryTotalSuperfluidDelegationsStore,
        /**
         * Returns the coins superfluid delegated for the delegator, validator, denom
         * triplet
         */
        QuerySuperfluidDelegationAmountStore,
        /** Returns all the delegated superfluid poistions for a specific delegator. */ QuerySuperfluidDelegationsByDelegatorStore,
        /** Returns all the undelegating superfluid poistions for a specific delegator. */ QuerySuperfluidUndelegationsByDelegatorStore,
        /**
         * Returns all the superfluid positions of a specific denom delegated to one
         * validator
         */
        QuerySuperfluidDelegationsByValidatorDenomStore,
        /**
         * Returns the amount of a specific denom delegated to a specific validator
         * This is labeled an estimate, because the way it calculates the amount can
         * lead rounding errors from the true delegated amount
         */
        QueryEstimateSuperfluidDelegatedAmountByValidatorDenomStore,
        /** Returns the specified delegations for a specific delegator */ QueryTotalDelegationByDelegatorStore,
        /** Returns a list of whitelisted pool ids to unpool. */ QueryUnpoolWhitelistStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
