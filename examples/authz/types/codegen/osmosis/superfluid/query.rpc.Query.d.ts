import { TxRpc } from "../../types";
import { ReactQueryParams } from "../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../mobx";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of superfluid parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    assetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
    /** Returns all registered superfluid assets. */
    allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse>;
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */
    assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse>;
    /** Returns all superfluid intermediary accounts. */
    allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse>;
    /** Returns intermediary account connected to a superfluid staked lock by id */
    connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse>;
    /** Returns the amount of delegations of specific denom for all validators */
    totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse>;
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse>;
    /** Returns all the delegated superfluid poistions for a specific delegator. */
    superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse>;
    /** Returns all the undelegating superfluid poistions for a specific delegator. */
    superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse>;
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
    /** Returns the specified delegations for a specific delegator */
    totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse>;
    /** Returns a list of whitelisted pool ids to unpool. */
    unpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    assetType: (request: AssetTypeRequest) => Promise<AssetTypeResponse>;
    allAssets: (request?: AllAssetsRequest) => Promise<AllAssetsResponse>;
    assetMultiplier: (request: AssetMultiplierRequest) => Promise<AssetMultiplierResponse>;
    allIntermediaryAccounts: (request?: AllIntermediaryAccountsRequest) => Promise<AllIntermediaryAccountsResponse>;
    connectedIntermediaryAccount: (request: ConnectedIntermediaryAccountRequest) => Promise<ConnectedIntermediaryAccountResponse>;
    totalDelegationByValidatorForDenom: (request: QueryTotalDelegationByValidatorForDenomRequest) => Promise<QueryTotalDelegationByValidatorForDenomResponse>;
    totalSuperfluidDelegations: (request?: TotalSuperfluidDelegationsRequest) => Promise<TotalSuperfluidDelegationsResponse>;
    superfluidDelegationAmount: (request: SuperfluidDelegationAmountRequest) => Promise<SuperfluidDelegationAmountResponse>;
    superfluidDelegationsByDelegator: (request: SuperfluidDelegationsByDelegatorRequest) => Promise<SuperfluidDelegationsByDelegatorResponse>;
    superfluidUndelegationsByDelegator: (request: SuperfluidUndelegationsByDelegatorRequest) => Promise<SuperfluidUndelegationsByDelegatorResponse>;
    superfluidDelegationsByValidatorDenom: (request: SuperfluidDelegationsByValidatorDenomRequest) => Promise<SuperfluidDelegationsByValidatorDenomResponse>;
    estimateSuperfluidDelegatedAmountByValidatorDenom: (request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest) => Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
    totalDelegationByDelegator: (request: QueryTotalDelegationByDelegatorRequest) => Promise<QueryTotalDelegationByDelegatorResponse>;
    unpoolWhitelist: (request?: QueryUnpoolWhitelistRequest) => Promise<QueryUnpoolWhitelistResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseAssetTypeQuery<TData> extends ReactQueryParams<AssetTypeResponse, TData> {
    request: AssetTypeRequest;
}
export interface UseAllAssetsQuery<TData> extends ReactQueryParams<AllAssetsResponse, TData> {
    request?: AllAssetsRequest;
}
export interface UseAssetMultiplierQuery<TData> extends ReactQueryParams<AssetMultiplierResponse, TData> {
    request: AssetMultiplierRequest;
}
export interface UseAllIntermediaryAccountsQuery<TData> extends ReactQueryParams<AllIntermediaryAccountsResponse, TData> {
    request?: AllIntermediaryAccountsRequest;
}
export interface UseConnectedIntermediaryAccountQuery<TData> extends ReactQueryParams<ConnectedIntermediaryAccountResponse, TData> {
    request: ConnectedIntermediaryAccountRequest;
}
export interface UseTotalDelegationByValidatorForDenomQuery<TData> extends ReactQueryParams<QueryTotalDelegationByValidatorForDenomResponse, TData> {
    request: QueryTotalDelegationByValidatorForDenomRequest;
}
export interface UseTotalSuperfluidDelegationsQuery<TData> extends ReactQueryParams<TotalSuperfluidDelegationsResponse, TData> {
    request?: TotalSuperfluidDelegationsRequest;
}
export interface UseSuperfluidDelegationAmountQuery<TData> extends ReactQueryParams<SuperfluidDelegationAmountResponse, TData> {
    request: SuperfluidDelegationAmountRequest;
}
export interface UseSuperfluidDelegationsByDelegatorQuery<TData> extends ReactQueryParams<SuperfluidDelegationsByDelegatorResponse, TData> {
    request: SuperfluidDelegationsByDelegatorRequest;
}
export interface UseSuperfluidUndelegationsByDelegatorQuery<TData> extends ReactQueryParams<SuperfluidUndelegationsByDelegatorResponse, TData> {
    request: SuperfluidUndelegationsByDelegatorRequest;
}
export interface UseSuperfluidDelegationsByValidatorDenomQuery<TData> extends ReactQueryParams<SuperfluidDelegationsByValidatorDenomResponse, TData> {
    request: SuperfluidDelegationsByValidatorDenomRequest;
}
export interface UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData> extends ReactQueryParams<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, TData> {
    request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
}
export interface UseTotalDelegationByDelegatorQuery<TData> extends ReactQueryParams<QueryTotalDelegationByDelegatorResponse, TData> {
    request: QueryTotalDelegationByDelegatorRequest;
}
export interface UseUnpoolWhitelistQuery<TData> extends ReactQueryParams<QueryUnpoolWhitelistResponse, TData> {
    request?: QueryUnpoolWhitelistRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of superfluid parameters. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    useAssetType: <TData_1 = AssetTypeResponse>({ request, options }: UseAssetTypeQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Returns all registered superfluid assets. */ useAllAssets: <TData_2 = AllAssetsResponse>({ request, options }: UseAllAssetsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */ useAssetMultiplier: <TData_3 = AssetMultiplierResponse>({ request, options }: UseAssetMultiplierQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** Returns all superfluid intermediary accounts. */ useAllIntermediaryAccounts: <TData_4 = AllIntermediaryAccountsResponse>({ request, options }: UseAllIntermediaryAccountsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Returns intermediary account connected to a superfluid staked lock by id */ useConnectedIntermediaryAccount: <TData_5 = ConnectedIntermediaryAccountResponse>({ request, options }: UseConnectedIntermediaryAccountQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Returns the amount of delegations of specific denom for all validators */ useTotalDelegationByValidatorForDenom: <TData_6 = QueryTotalDelegationByValidatorForDenomResponse>({ request, options }: UseTotalDelegationByValidatorForDenomQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    useTotalSuperfluidDelegations: <TData_7 = TotalSuperfluidDelegationsResponse>({ request, options }: UseTotalSuperfluidDelegationsQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    useSuperfluidDelegationAmount: <TData_8 = SuperfluidDelegationAmountResponse>({ request, options }: UseSuperfluidDelegationAmountQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /** Returns all the delegated superfluid poistions for a specific delegator. */ useSuperfluidDelegationsByDelegator: <TData_9 = SuperfluidDelegationsByDelegatorResponse>({ request, options }: UseSuperfluidDelegationsByDelegatorQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
    /** Returns all the undelegating superfluid poistions for a specific delegator. */ useSuperfluidUndelegationsByDelegator: <TData_10 = SuperfluidUndelegationsByDelegatorResponse>({ request, options }: UseSuperfluidUndelegationsByDelegatorQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    useSuperfluidDelegationsByValidatorDenom: <TData_11 = SuperfluidDelegationsByValidatorDenomResponse>({ request, options }: UseSuperfluidDelegationsByValidatorDenomQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    useEstimateSuperfluidDelegatedAmountByValidatorDenom: <TData_12 = EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({ request, options }: UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
    /** Returns the specified delegations for a specific delegator */ useTotalDelegationByDelegator: <TData_13 = QueryTotalDelegationByDelegatorResponse>({ request, options }: UseTotalDelegationByDelegatorQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
    /** Returns a list of whitelisted pool ids to unpool. */ useUnpoolWhitelist: <TData_14 = QueryUnpoolWhitelistResponse>({ request, options }: UseUnpoolWhitelistQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of superfluid parameters. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    QueryAssetTypeStore: {
        new (): {
            store: QueryStore<AssetTypeRequest, AssetTypeResponse>;
            assetType(request: AssetTypeRequest): import("../../mobx").MobxResponse<AssetTypeResponse>;
        };
    };
    /** Returns all registered superfluid assets. */ QueryAllAssetsStore: {
        new (): {
            store: QueryStore<AllAssetsRequest, AllAssetsResponse>;
            allAssets(request: AllAssetsRequest): import("../../mobx").MobxResponse<AllAssetsResponse>;
        };
    };
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */ QueryAssetMultiplierStore: {
        new (): {
            store: QueryStore<AssetMultiplierRequest, AssetMultiplierResponse>;
            assetMultiplier(request: AssetMultiplierRequest): import("../../mobx").MobxResponse<AssetMultiplierResponse>;
        };
    };
    /** Returns all superfluid intermediary accounts. */ QueryAllIntermediaryAccountsStore: {
        new (): {
            store: QueryStore<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>;
            allIntermediaryAccounts(request: AllIntermediaryAccountsRequest): import("../../mobx").MobxResponse<AllIntermediaryAccountsResponse>;
        };
    };
    /** Returns intermediary account connected to a superfluid staked lock by id */ QueryConnectedIntermediaryAccountStore: {
        new (): {
            store: QueryStore<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>;
            connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): import("../../mobx").MobxResponse<ConnectedIntermediaryAccountResponse>;
        };
    };
    /** Returns the amount of delegations of specific denom for all validators */ QueryTotalDelegationByValidatorForDenomStore: {
        new (): {
            store: QueryStore<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>;
            totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): import("../../mobx").MobxResponse<QueryTotalDelegationByValidatorForDenomResponse>;
        };
    };
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    QueryTotalSuperfluidDelegationsStore: {
        new (): {
            store: QueryStore<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>;
            totalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest): import("../../mobx").MobxResponse<TotalSuperfluidDelegationsResponse>;
        };
    };
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    QuerySuperfluidDelegationAmountStore: {
        new (): {
            store: QueryStore<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>;
            superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): import("../../mobx").MobxResponse<SuperfluidDelegationAmountResponse>;
        };
    };
    /** Returns all the delegated superfluid poistions for a specific delegator. */ QuerySuperfluidDelegationsByDelegatorStore: {
        new (): {
            store: QueryStore<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>;
            superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): import("../../mobx").MobxResponse<SuperfluidDelegationsByDelegatorResponse>;
        };
    };
    /** Returns all the undelegating superfluid poistions for a specific delegator. */ QuerySuperfluidUndelegationsByDelegatorStore: {
        new (): {
            store: QueryStore<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): import("../../mobx").MobxResponse<SuperfluidUndelegationsByDelegatorResponse>;
        };
    };
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    QuerySuperfluidDelegationsByValidatorDenomStore: {
        new (): {
            store: QueryStore<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>;
            superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): import("../../mobx").MobxResponse<SuperfluidDelegationsByValidatorDenomResponse>;
        };
    };
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    QueryEstimateSuperfluidDelegatedAmountByValidatorDenomStore: {
        new (): {
            store: QueryStore<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): import("../../mobx").MobxResponse<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
        };
    };
    /** Returns the specified delegations for a specific delegator */ QueryTotalDelegationByDelegatorStore: {
        new (): {
            store: QueryStore<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>;
            totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): import("../../mobx").MobxResponse<QueryTotalDelegationByDelegatorResponse>;
        };
    };
    /** Returns a list of whitelisted pool ids to unpool. */ QueryUnpoolWhitelistStore: {
        new (): {
            store: QueryStore<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>;
            unpoolWhitelist(request: QueryUnpoolWhitelistRequest): import("../../mobx").MobxResponse<QueryUnpoolWhitelistResponse>;
        };
    };
};
