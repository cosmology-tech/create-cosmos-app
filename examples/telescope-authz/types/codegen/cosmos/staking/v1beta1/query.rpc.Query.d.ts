import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Validators queries all validators that match the given status. */
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    /** Validator queries validator info for given validator address. */
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    /** ValidatorDelegations queries delegate info for given validator. */
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    /** Delegation queries delegate info for given validator delegator pair. */
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    /** DelegatorDelegations queries all delegations of a given delegator address. */
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    /** Redelegations queries redelegations of given address. */
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    /** HistoricalInfo queries the historical info for given height. */
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    /** Pool queries the pool info. */
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Parameters queries the staking parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    validators: (request: QueryValidatorsRequest) => Promise<QueryValidatorsResponse>;
    validator: (request: QueryValidatorRequest) => Promise<QueryValidatorResponse>;
    validatorDelegations: (request: QueryValidatorDelegationsRequest) => Promise<QueryValidatorDelegationsResponse>;
    validatorUnbondingDelegations: (request: QueryValidatorUnbondingDelegationsRequest) => Promise<QueryValidatorUnbondingDelegationsResponse>;
    delegation: (request: QueryDelegationRequest) => Promise<QueryDelegationResponse>;
    unbondingDelegation: (request: QueryUnbondingDelegationRequest) => Promise<QueryUnbondingDelegationResponse>;
    delegatorDelegations: (request: QueryDelegatorDelegationsRequest) => Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations: (request: QueryDelegatorUnbondingDelegationsRequest) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
    redelegations: (request: QueryRedelegationsRequest) => Promise<QueryRedelegationsResponse>;
    delegatorValidators: (request: QueryDelegatorValidatorsRequest) => Promise<QueryDelegatorValidatorsResponse>;
    delegatorValidator: (request: QueryDelegatorValidatorRequest) => Promise<QueryDelegatorValidatorResponse>;
    historicalInfo: (request: QueryHistoricalInfoRequest) => Promise<QueryHistoricalInfoResponse>;
    pool: (request?: QueryPoolRequest) => Promise<QueryPoolResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseValidatorsQuery<TData> extends ReactQueryParams<QueryValidatorsResponse, TData> {
    request: QueryValidatorsRequest;
}
export interface UseValidatorQuery<TData> extends ReactQueryParams<QueryValidatorResponse, TData> {
    request: QueryValidatorRequest;
}
export interface UseValidatorDelegationsQuery<TData> extends ReactQueryParams<QueryValidatorDelegationsResponse, TData> {
    request: QueryValidatorDelegationsRequest;
}
export interface UseValidatorUnbondingDelegationsQuery<TData> extends ReactQueryParams<QueryValidatorUnbondingDelegationsResponse, TData> {
    request: QueryValidatorUnbondingDelegationsRequest;
}
export interface UseDelegationQuery<TData> extends ReactQueryParams<QueryDelegationResponse, TData> {
    request: QueryDelegationRequest;
}
export interface UseUnbondingDelegationQuery<TData> extends ReactQueryParams<QueryUnbondingDelegationResponse, TData> {
    request: QueryUnbondingDelegationRequest;
}
export interface UseDelegatorDelegationsQuery<TData> extends ReactQueryParams<QueryDelegatorDelegationsResponse, TData> {
    request: QueryDelegatorDelegationsRequest;
}
export interface UseDelegatorUnbondingDelegationsQuery<TData> extends ReactQueryParams<QueryDelegatorUnbondingDelegationsResponse, TData> {
    request: QueryDelegatorUnbondingDelegationsRequest;
}
export interface UseRedelegationsQuery<TData> extends ReactQueryParams<QueryRedelegationsResponse, TData> {
    request: QueryRedelegationsRequest;
}
export interface UseDelegatorValidatorsQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorsResponse, TData> {
    request: QueryDelegatorValidatorsRequest;
}
export interface UseDelegatorValidatorQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorResponse, TData> {
    request: QueryDelegatorValidatorRequest;
}
export interface UseHistoricalInfoQuery<TData> extends ReactQueryParams<QueryHistoricalInfoResponse, TData> {
    request: QueryHistoricalInfoRequest;
}
export interface UsePoolQuery<TData> extends ReactQueryParams<QueryPoolResponse, TData> {
    request?: QueryPoolRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Validators queries all validators that match the given status. */ useValidators: <TData = QueryValidatorsResponse>({ request, options }: UseValidatorsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Validator queries validator info for given validator address. */ useValidator: <TData_1 = QueryValidatorResponse>({ request, options }: UseValidatorQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** ValidatorDelegations queries delegate info for given validator. */ useValidatorDelegations: <TData_2 = QueryValidatorDelegationsResponse>({ request, options }: UseValidatorDelegationsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */ useValidatorUnbondingDelegations: <TData_3 = QueryValidatorUnbondingDelegationsResponse>({ request, options }: UseValidatorUnbondingDelegationsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** Delegation queries delegate info for given validator delegator pair. */ useDelegation: <TData_4 = QueryDelegationResponse>({ request, options }: UseDelegationQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    useUnbondingDelegation: <TData_5 = QueryUnbondingDelegationResponse>({ request, options }: UseUnbondingDelegationQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** DelegatorDelegations queries all delegations of a given delegator address. */ useDelegatorDelegations: <TData_6 = QueryDelegatorDelegationsResponse>({ request, options }: UseDelegatorDelegationsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    useDelegatorUnbondingDelegations: <TData_7 = QueryDelegatorUnbondingDelegationsResponse>({ request, options }: UseDelegatorUnbondingDelegationsQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** Redelegations queries redelegations of given address. */ useRedelegations: <TData_8 = QueryRedelegationsResponse>({ request, options }: UseRedelegationsQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    useDelegatorValidators: <TData_9 = QueryDelegatorValidatorsResponse>({ request, options }: UseDelegatorValidatorsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    useDelegatorValidator: <TData_10 = QueryDelegatorValidatorResponse>({ request, options }: UseDelegatorValidatorQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
    /** HistoricalInfo queries the historical info for given height. */ useHistoricalInfo: <TData_11 = QueryHistoricalInfoResponse>({ request, options }: UseHistoricalInfoQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
    /** Pool queries the pool info. */ usePool: <TData_12 = QueryPoolResponse>({ request, options }: UsePoolQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
    /** Parameters queries the staking parameters. */ useParams: <TData_13 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Validators queries all validators that match the given status. */ QueryValidatorsStore: {
        new (): {
            store: QueryStore<QueryValidatorsRequest, QueryValidatorsResponse>;
            validators(request: QueryValidatorsRequest): import("../../../mobx").MobxResponse<QueryValidatorsResponse>;
        };
    };
    /** Validator queries validator info for given validator address. */ QueryValidatorStore: {
        new (): {
            store: QueryStore<QueryValidatorRequest, QueryValidatorResponse>;
            validator(request: QueryValidatorRequest): import("../../../mobx").MobxResponse<QueryValidatorResponse>;
        };
    };
    /** ValidatorDelegations queries delegate info for given validator. */ QueryValidatorDelegationsStore: {
        new (): {
            store: QueryStore<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>;
            validatorDelegations(request: QueryValidatorDelegationsRequest): import("../../../mobx").MobxResponse<QueryValidatorDelegationsResponse>;
        };
    };
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */ QueryValidatorUnbondingDelegationsStore: {
        new (): {
            store: QueryStore<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>;
            validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): import("../../../mobx").MobxResponse<QueryValidatorUnbondingDelegationsResponse>;
        };
    };
    /** Delegation queries delegate info for given validator delegator pair. */ QueryDelegationStore: {
        new (): {
            store: QueryStore<QueryDelegationRequest, QueryDelegationResponse>;
            delegation(request: QueryDelegationRequest): import("../../../mobx").MobxResponse<QueryDelegationResponse>;
        };
    };
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    QueryUnbondingDelegationStore: {
        new (): {
            store: QueryStore<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>;
            unbondingDelegation(request: QueryUnbondingDelegationRequest): import("../../../mobx").MobxResponse<QueryUnbondingDelegationResponse>;
        };
    };
    /** DelegatorDelegations queries all delegations of a given delegator address. */ QueryDelegatorDelegationsStore: {
        new (): {
            store: QueryStore<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>;
            delegatorDelegations(request: QueryDelegatorDelegationsRequest): import("../../../mobx").MobxResponse<QueryDelegatorDelegationsResponse>;
        };
    };
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    QueryDelegatorUnbondingDelegationsStore: {
        new (): {
            store: QueryStore<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>;
            delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): import("../../../mobx").MobxResponse<QueryDelegatorUnbondingDelegationsResponse>;
        };
    };
    /** Redelegations queries redelegations of given address. */ QueryRedelegationsStore: {
        new (): {
            store: QueryStore<QueryRedelegationsRequest, QueryRedelegationsResponse>;
            redelegations(request: QueryRedelegationsRequest): import("../../../mobx").MobxResponse<QueryRedelegationsResponse>;
        };
    };
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    QueryDelegatorValidatorsStore: {
        new (): {
            store: QueryStore<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>;
            delegatorValidators(request: QueryDelegatorValidatorsRequest): import("../../../mobx").MobxResponse<QueryDelegatorValidatorsResponse>;
        };
    };
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    QueryDelegatorValidatorStore: {
        new (): {
            store: QueryStore<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>;
            delegatorValidator(request: QueryDelegatorValidatorRequest): import("../../../mobx").MobxResponse<QueryDelegatorValidatorResponse>;
        };
    };
    /** HistoricalInfo queries the historical info for given height. */ QueryHistoricalInfoStore: {
        new (): {
            store: QueryStore<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>;
            historicalInfo(request: QueryHistoricalInfoRequest): import("../../../mobx").MobxResponse<QueryHistoricalInfoResponse>;
        };
    };
    /** Pool queries the pool info. */ QueryPoolStore: {
        new (): {
            store: QueryStore<QueryPoolRequest, QueryPoolResponse>;
            pool(request: QueryPoolRequest): import("../../../mobx").MobxResponse<QueryPoolResponse>;
        };
    };
    /** Parameters queries the staking parameters. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
};
