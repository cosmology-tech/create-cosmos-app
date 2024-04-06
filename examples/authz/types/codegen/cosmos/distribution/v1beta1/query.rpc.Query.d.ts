import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
    /** Params queries params of the distribution module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    /** ValidatorCommission queries accumulated commission for a validator. */
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    /** ValidatorSlashes queries slash events of a validator. */
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    /** DelegatorValidators queries the validators of a delegator. */
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    /** CommunityPool queries the community pool coins. */
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    validatorOutstandingRewards: (request: QueryValidatorOutstandingRewardsRequest) => Promise<QueryValidatorOutstandingRewardsResponse>;
    validatorCommission: (request: QueryValidatorCommissionRequest) => Promise<QueryValidatorCommissionResponse>;
    validatorSlashes: (request: QueryValidatorSlashesRequest) => Promise<QueryValidatorSlashesResponse>;
    delegationRewards: (request: QueryDelegationRewardsRequest) => Promise<QueryDelegationRewardsResponse>;
    delegationTotalRewards: (request: QueryDelegationTotalRewardsRequest) => Promise<QueryDelegationTotalRewardsResponse>;
    delegatorValidators: (request: QueryDelegatorValidatorsRequest) => Promise<QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress: (request: QueryDelegatorWithdrawAddressRequest) => Promise<QueryDelegatorWithdrawAddressResponse>;
    communityPool: (request?: QueryCommunityPoolRequest) => Promise<QueryCommunityPoolResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseValidatorOutstandingRewardsQuery<TData> extends ReactQueryParams<QueryValidatorOutstandingRewardsResponse, TData> {
    request: QueryValidatorOutstandingRewardsRequest;
}
export interface UseValidatorCommissionQuery<TData> extends ReactQueryParams<QueryValidatorCommissionResponse, TData> {
    request: QueryValidatorCommissionRequest;
}
export interface UseValidatorSlashesQuery<TData> extends ReactQueryParams<QueryValidatorSlashesResponse, TData> {
    request: QueryValidatorSlashesRequest;
}
export interface UseDelegationRewardsQuery<TData> extends ReactQueryParams<QueryDelegationRewardsResponse, TData> {
    request: QueryDelegationRewardsRequest;
}
export interface UseDelegationTotalRewardsQuery<TData> extends ReactQueryParams<QueryDelegationTotalRewardsResponse, TData> {
    request: QueryDelegationTotalRewardsRequest;
}
export interface UseDelegatorValidatorsQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorsResponse, TData> {
    request: QueryDelegatorValidatorsRequest;
}
export interface UseDelegatorWithdrawAddressQuery<TData> extends ReactQueryParams<QueryDelegatorWithdrawAddressResponse, TData> {
    request: QueryDelegatorWithdrawAddressRequest;
}
export interface UseCommunityPoolQuery<TData> extends ReactQueryParams<QueryCommunityPoolResponse, TData> {
    request?: QueryCommunityPoolRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries params of the distribution module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */ useValidatorOutstandingRewards: <TData_1 = QueryValidatorOutstandingRewardsResponse>({ request, options }: UseValidatorOutstandingRewardsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** ValidatorCommission queries accumulated commission for a validator. */ useValidatorCommission: <TData_2 = QueryValidatorCommissionResponse>({ request, options }: UseValidatorCommissionQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** ValidatorSlashes queries slash events of a validator. */ useValidatorSlashes: <TData_3 = QueryValidatorSlashesResponse>({ request, options }: UseValidatorSlashesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** DelegationRewards queries the total rewards accrued by a delegation. */ useDelegationRewards: <TData_4 = QueryDelegationRewardsResponse>({ request, options }: UseDelegationRewardsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards: <TData_5 = QueryDelegationTotalRewardsResponse>({ request, options }: UseDelegationTotalRewardsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** DelegatorValidators queries the validators of a delegator. */ useDelegatorValidators: <TData_6 = QueryDelegatorValidatorsResponse>({ request, options }: UseDelegatorValidatorsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */ useDelegatorWithdrawAddress: <TData_7 = QueryDelegatorWithdrawAddressResponse>({ request, options }: UseDelegatorWithdrawAddressQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** CommunityPool queries the community pool coins. */ useCommunityPool: <TData_8 = QueryCommunityPoolResponse>({ request, options }: UseCommunityPoolQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries params of the distribution module. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** ValidatorOutstandingRewards queries rewards of a validator address. */ QueryValidatorOutstandingRewardsStore: {
        new (): {
            store: QueryStore<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>;
            validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): import("../../../mobx").MobxResponse<QueryValidatorOutstandingRewardsResponse>;
        };
    };
    /** ValidatorCommission queries accumulated commission for a validator. */ QueryValidatorCommissionStore: {
        new (): {
            store: QueryStore<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>;
            validatorCommission(request: QueryValidatorCommissionRequest): import("../../../mobx").MobxResponse<QueryValidatorCommissionResponse>;
        };
    };
    /** ValidatorSlashes queries slash events of a validator. */ QueryValidatorSlashesStore: {
        new (): {
            store: QueryStore<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>;
            validatorSlashes(request: QueryValidatorSlashesRequest): import("../../../mobx").MobxResponse<QueryValidatorSlashesResponse>;
        };
    };
    /** DelegationRewards queries the total rewards accrued by a delegation. */ QueryDelegationRewardsStore: {
        new (): {
            store: QueryStore<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>;
            delegationRewards(request: QueryDelegationRewardsRequest): import("../../../mobx").MobxResponse<QueryDelegationRewardsResponse>;
        };
    };
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    QueryDelegationTotalRewardsStore: {
        new (): {
            store: QueryStore<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>;
            delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): import("../../../mobx").MobxResponse<QueryDelegationTotalRewardsResponse>;
        };
    };
    /** DelegatorValidators queries the validators of a delegator. */ QueryDelegatorValidatorsStore: {
        new (): {
            store: QueryStore<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>;
            delegatorValidators(request: QueryDelegatorValidatorsRequest): import("../../../mobx").MobxResponse<QueryDelegatorValidatorsResponse>;
        };
    };
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */ QueryDelegatorWithdrawAddressStore: {
        new (): {
            store: QueryStore<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>;
            delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): import("../../../mobx").MobxResponse<QueryDelegatorWithdrawAddressResponse>;
        };
    };
    /** CommunityPool queries the community pool coins. */ QueryCommunityPoolStore: {
        new (): {
            store: QueryStore<QueryCommunityPoolRequest, QueryCommunityPoolResponse>;
            communityPool(request: QueryCommunityPoolRequest): import("../../../mobx").MobxResponse<QueryCommunityPoolResponse>;
        };
    };
};
