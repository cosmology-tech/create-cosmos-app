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
    /* Params queries params of the distribution module. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ValidatorOutstandingRewards queries rewards of a validator address. */
    validatorOutstandingRewards = async (request) => {
        const data = query_1.QueryValidatorOutstandingRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
        return promise.then(data => query_1.QueryValidatorOutstandingRewardsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ValidatorCommission queries accumulated commission for a validator. */
    validatorCommission = async (request) => {
        const data = query_1.QueryValidatorCommissionRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
        return promise.then(data => query_1.QueryValidatorCommissionResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ValidatorSlashes queries slash events of a validator. */
    validatorSlashes = async (request) => {
        const data = query_1.QueryValidatorSlashesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
        return promise.then(data => query_1.QueryValidatorSlashesResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegationRewards queries the total rewards accrued by a delegation. */
    delegationRewards = async (request) => {
        const data = query_1.QueryDelegationRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
        return promise.then(data => query_1.QueryDelegationRewardsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegationTotalRewards queries the total rewards accrued by a each
     validator. */
    delegationTotalRewards = async (request) => {
        const data = query_1.QueryDelegationTotalRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
        return promise.then(data => query_1.QueryDelegationTotalRewardsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegatorValidators queries the validators of a delegator. */
    delegatorValidators = async (request) => {
        const data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(data => query_1.QueryDelegatorValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
    delegatorWithdrawAddress = async (request) => {
        const data = query_1.QueryDelegatorWithdrawAddressRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
        return promise.then(data => query_1.QueryDelegatorWithdrawAddressResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* CommunityPool queries the community pool coins. */
    communityPool = async (request = {}) => {
        const data = query_1.QueryCommunityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
        return promise.then(data => query_1.QueryCommunityPoolResponse.decode(new binary_1.BinaryReader(data)));
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
    const useValidatorOutstandingRewards = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorOutstandingRewardsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validatorOutstandingRewards(request);
        }, options);
    };
    const useValidatorCommission = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorCommissionQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validatorCommission(request);
        }, options);
    };
    const useValidatorSlashes = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorSlashesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validatorSlashes(request);
        }, options);
    };
    const useDelegationRewards = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegationRewardsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegationRewards(request);
        }, options);
    };
    const useDelegationTotalRewards = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegationTotalRewardsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegationTotalRewards(request);
        }, options);
    };
    const useDelegatorValidators = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorValidatorsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorValidators(request);
        }, options);
    };
    const useDelegatorWithdrawAddress = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorWithdrawAddressQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorWithdrawAddress(request);
        }, options);
    };
    const useCommunityPool = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["communityPoolQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.communityPool(request);
        }, options);
    };
    return {
        /** Params queries params of the distribution module. */ useParams,
        /** ValidatorOutstandingRewards queries rewards of a validator address. */ useValidatorOutstandingRewards,
        /** ValidatorCommission queries accumulated commission for a validator. */ useValidatorCommission,
        /** ValidatorSlashes queries slash events of a validator. */ useValidatorSlashes,
        /** DelegationRewards queries the total rewards accrued by a delegation. */ useDelegationRewards,
        /**
         * DelegationTotalRewards queries the total rewards accrued by a each
         * validator.
         */
        useDelegationTotalRewards,
        /** DelegatorValidators queries the validators of a delegator. */ useDelegatorValidators,
        /** DelegatorWithdrawAddress queries withdraw address of a delegator. */ useDelegatorWithdrawAddress,
        /** CommunityPool queries the community pool coins. */ useCommunityPool
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
    class QueryValidatorOutstandingRewardsStore {
        store = new mobx_1.QueryStore(queryService?.validatorOutstandingRewards);
        validatorOutstandingRewards(request) {
            return this.store.getData(request);
        }
    }
    class QueryValidatorCommissionStore {
        store = new mobx_1.QueryStore(queryService?.validatorCommission);
        validatorCommission(request) {
            return this.store.getData(request);
        }
    }
    class QueryValidatorSlashesStore {
        store = new mobx_1.QueryStore(queryService?.validatorSlashes);
        validatorSlashes(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegationRewardsStore {
        store = new mobx_1.QueryStore(queryService?.delegationRewards);
        delegationRewards(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegationTotalRewardsStore {
        store = new mobx_1.QueryStore(queryService?.delegationTotalRewards);
        delegationTotalRewards(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegatorValidatorsStore {
        store = new mobx_1.QueryStore(queryService?.delegatorValidators);
        delegatorValidators(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegatorWithdrawAddressStore {
        store = new mobx_1.QueryStore(queryService?.delegatorWithdrawAddress);
        delegatorWithdrawAddress(request) {
            return this.store.getData(request);
        }
    }
    class QueryCommunityPoolStore {
        store = new mobx_1.QueryStore(queryService?.communityPool);
        communityPool(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** Params queries params of the distribution module. */ QueryParamsStore,
        /** ValidatorOutstandingRewards queries rewards of a validator address. */ QueryValidatorOutstandingRewardsStore,
        /** ValidatorCommission queries accumulated commission for a validator. */ QueryValidatorCommissionStore,
        /** ValidatorSlashes queries slash events of a validator. */ QueryValidatorSlashesStore,
        /** DelegationRewards queries the total rewards accrued by a delegation. */ QueryDelegationRewardsStore,
        /**
         * DelegationTotalRewards queries the total rewards accrued by a each
         * validator.
         */
        QueryDelegationTotalRewardsStore,
        /** DelegatorValidators queries the validators of a delegator. */ QueryDelegatorValidatorsStore,
        /** DelegatorWithdrawAddress queries withdraw address of a delegator. */ QueryDelegatorWithdrawAddressStore,
        /** CommunityPool queries the community pool coins. */ QueryCommunityPoolStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
