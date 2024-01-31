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
    /* Validators queries all validators that match the given status. */
    validators = async (request) => {
        const data = query_1.QueryValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
        return promise.then(data => query_1.QueryValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Validator queries validator info for given validator address. */
    validator = async (request) => {
        const data = query_1.QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
        return promise.then(data => query_1.QueryValidatorResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ValidatorDelegations queries delegate info for given validator. */
    validatorDelegations = async (request) => {
        const data = query_1.QueryValidatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
        return promise.then(data => query_1.QueryValidatorDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
    validatorUnbondingDelegations = async (request) => {
        const data = query_1.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryValidatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Delegation queries delegate info for given validator delegator pair. */
    delegation = async (request) => {
        const data = query_1.QueryDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
        return promise.then(data => query_1.QueryDelegationResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* UnbondingDelegation queries unbonding info for given validator delegator
     pair. */
    unbondingDelegation = async (request) => {
        const data = query_1.QueryUnbondingDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
        return promise.then(data => query_1.QueryUnbondingDelegationResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegatorDelegations queries all delegations of a given delegator address. */
    delegatorDelegations = async (request) => {
        const data = query_1.QueryDelegatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
        return promise.then(data => query_1.QueryDelegatorDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
     delegator address. */
    delegatorUnbondingDelegations = async (request) => {
        const data = query_1.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryDelegatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Redelegations queries redelegations of given address. */
    redelegations = async (request) => {
        const data = query_1.QueryRedelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
        return promise.then(data => query_1.QueryRedelegationsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegatorValidators queries all validators info for given delegator
     address. */
    delegatorValidators = async (request) => {
        const data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(data => query_1.QueryDelegatorValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* DelegatorValidator queries validator info for given delegator validator
     pair. */
    delegatorValidator = async (request) => {
        const data = query_1.QueryDelegatorValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
        return promise.then(data => query_1.QueryDelegatorValidatorResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* HistoricalInfo queries the historical info for given height. */
    historicalInfo = async (request) => {
        const data = query_1.QueryHistoricalInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
        return promise.then(data => query_1.QueryHistoricalInfoResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Pool queries the pool info. */
    pool = async (request = {}) => {
        const data = query_1.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
        return promise.then(data => query_1.QueryPoolResponse.decode(new binary_1.BinaryReader(data)));
    };
    /* Parameters queries the staking parameters. */
    params = async (request = {}) => {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
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
    const useValidators = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validators(request);
        }, options);
    };
    const useValidator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validator(request);
        }, options);
    };
    const useValidatorDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validatorDelegations(request);
        }, options);
    };
    const useValidatorUnbondingDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorUnbondingDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validatorUnbondingDelegations(request);
        }, options);
    };
    const useDelegation = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegationQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegation(request);
        }, options);
    };
    const useUnbondingDelegation = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["unbondingDelegationQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.unbondingDelegation(request);
        }, options);
    };
    const useDelegatorDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorDelegations(request);
        }, options);
    };
    const useDelegatorUnbondingDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorUnbondingDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorUnbondingDelegations(request);
        }, options);
    };
    const useRedelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["redelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.redelegations(request);
        }, options);
    };
    const useDelegatorValidators = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorValidatorsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorValidators(request);
        }, options);
    };
    const useDelegatorValidator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorValidatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorValidator(request);
        }, options);
    };
    const useHistoricalInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["historicalInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.historicalInfo(request);
        }, options);
    };
    const usePool = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["poolQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.pool(request);
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
        /** Validators queries all validators that match the given status. */ useValidators,
        /** Validator queries validator info for given validator address. */ useValidator,
        /** ValidatorDelegations queries delegate info for given validator. */ useValidatorDelegations,
        /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */ useValidatorUnbondingDelegations,
        /** Delegation queries delegate info for given validator delegator pair. */ useDelegation,
        /**
         * UnbondingDelegation queries unbonding info for given validator delegator
         * pair.
         */
        useUnbondingDelegation,
        /** DelegatorDelegations queries all delegations of a given delegator address. */ useDelegatorDelegations,
        /**
         * DelegatorUnbondingDelegations queries all unbonding delegations of a given
         * delegator address.
         */
        useDelegatorUnbondingDelegations,
        /** Redelegations queries redelegations of given address. */ useRedelegations,
        /**
         * DelegatorValidators queries all validators info for given delegator
         * address.
         */
        useDelegatorValidators,
        /**
         * DelegatorValidator queries validator info for given delegator validator
         * pair.
         */
        useDelegatorValidator,
        /** HistoricalInfo queries the historical info for given height. */ useHistoricalInfo,
        /** Pool queries the pool info. */ usePool,
        /** Parameters queries the staking parameters. */ useParams
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryValidatorsStore {
        store = new mobx_1.QueryStore(queryService?.validators);
        validators(request) {
            return this.store.getData(request);
        }
    }
    class QueryValidatorStore {
        store = new mobx_1.QueryStore(queryService?.validator);
        validator(request) {
            return this.store.getData(request);
        }
    }
    class QueryValidatorDelegationsStore {
        store = new mobx_1.QueryStore(queryService?.validatorDelegations);
        validatorDelegations(request) {
            return this.store.getData(request);
        }
    }
    class QueryValidatorUnbondingDelegationsStore {
        store = new mobx_1.QueryStore(queryService?.validatorUnbondingDelegations);
        validatorUnbondingDelegations(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegationStore {
        store = new mobx_1.QueryStore(queryService?.delegation);
        delegation(request) {
            return this.store.getData(request);
        }
    }
    class QueryUnbondingDelegationStore {
        store = new mobx_1.QueryStore(queryService?.unbondingDelegation);
        unbondingDelegation(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegatorDelegationsStore {
        store = new mobx_1.QueryStore(queryService?.delegatorDelegations);
        delegatorDelegations(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegatorUnbondingDelegationsStore {
        store = new mobx_1.QueryStore(queryService?.delegatorUnbondingDelegations);
        delegatorUnbondingDelegations(request) {
            return this.store.getData(request);
        }
    }
    class QueryRedelegationsStore {
        store = new mobx_1.QueryStore(queryService?.redelegations);
        redelegations(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegatorValidatorsStore {
        store = new mobx_1.QueryStore(queryService?.delegatorValidators);
        delegatorValidators(request) {
            return this.store.getData(request);
        }
    }
    class QueryDelegatorValidatorStore {
        store = new mobx_1.QueryStore(queryService?.delegatorValidator);
        delegatorValidator(request) {
            return this.store.getData(request);
        }
    }
    class QueryHistoricalInfoStore {
        store = new mobx_1.QueryStore(queryService?.historicalInfo);
        historicalInfo(request) {
            return this.store.getData(request);
        }
    }
    class QueryPoolStore {
        store = new mobx_1.QueryStore(queryService?.pool);
        pool(request) {
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
        /** Validators queries all validators that match the given status. */ QueryValidatorsStore,
        /** Validator queries validator info for given validator address. */ QueryValidatorStore,
        /** ValidatorDelegations queries delegate info for given validator. */ QueryValidatorDelegationsStore,
        /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */ QueryValidatorUnbondingDelegationsStore,
        /** Delegation queries delegate info for given validator delegator pair. */ QueryDelegationStore,
        /**
         * UnbondingDelegation queries unbonding info for given validator delegator
         * pair.
         */
        QueryUnbondingDelegationStore,
        /** DelegatorDelegations queries all delegations of a given delegator address. */ QueryDelegatorDelegationsStore,
        /**
         * DelegatorUnbondingDelegations queries all unbonding delegations of a given
         * delegator address.
         */
        QueryDelegatorUnbondingDelegationsStore,
        /** Redelegations queries redelegations of given address. */ QueryRedelegationsStore,
        /**
         * DelegatorValidators queries all validators info for given delegator
         * address.
         */
        QueryDelegatorValidatorsStore,
        /**
         * DelegatorValidator queries validator info for given delegator validator
         * pair.
         */
        QueryDelegatorValidatorStore,
        /** HistoricalInfo queries the historical info for given height. */ QueryHistoricalInfoStore,
        /** Pool queries the pool info. */ QueryPoolStore,
        /** Parameters queries the staking parameters. */ QueryParamsStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
