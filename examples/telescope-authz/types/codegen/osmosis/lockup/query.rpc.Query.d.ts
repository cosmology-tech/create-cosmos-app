import { TxRpc } from "../../types";
import { ReactQueryParams } from "../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../mobx";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Return full balance of the module */
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
    /** Return locked balance of the module */
    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
    /** Returns unlockable coins which are not withdrawn yet */
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
    /** Returns unlocking coins */
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
    /** Return a locked coins that can't be withdrawn */
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
    /** Returns locked records of an account with unlock time beyond timestamp */
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    /** Returns unlocked records with unlock time before timestamp */
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
    /** Returns lock records by address, timestamp, denom */
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
    /** Returns total locked per denom with longer past given time */
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
    /** Returns lock record by id */
    lockedByID(request: LockedRequest): Promise<LockedResponse>;
    /** Returns synthetic lockups by native lockup id */
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
    /** Returns account locked records with longer duration */
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
    /** Returns account locked records with a specific duration */
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    /** Returns account's locked records for a denom with longer duration */
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
    /** Params returns lockup params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    moduleBalance: (request?: ModuleBalanceRequest) => Promise<ModuleBalanceResponse>;
    moduleLockedAmount: (request?: ModuleLockedAmountRequest) => Promise<ModuleLockedAmountResponse>;
    accountUnlockableCoins: (request: AccountUnlockableCoinsRequest) => Promise<AccountUnlockableCoinsResponse>;
    accountUnlockingCoins: (request: AccountUnlockingCoinsRequest) => Promise<AccountUnlockingCoinsResponse>;
    accountLockedCoins: (request: AccountLockedCoinsRequest) => Promise<AccountLockedCoinsResponse>;
    accountLockedPastTime: (request: AccountLockedPastTimeRequest) => Promise<AccountLockedPastTimeResponse>;
    accountLockedPastTimeNotUnlockingOnly: (request: AccountLockedPastTimeNotUnlockingOnlyRequest) => Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    accountUnlockedBeforeTime: (request: AccountUnlockedBeforeTimeRequest) => Promise<AccountUnlockedBeforeTimeResponse>;
    accountLockedPastTimeDenom: (request: AccountLockedPastTimeDenomRequest) => Promise<AccountLockedPastTimeDenomResponse>;
    lockedDenom: (request: LockedDenomRequest) => Promise<LockedDenomResponse>;
    lockedByID: (request: LockedRequest) => Promise<LockedResponse>;
    syntheticLockupsByLockupID: (request: SyntheticLockupsByLockupIDRequest) => Promise<SyntheticLockupsByLockupIDResponse>;
    accountLockedLongerDuration: (request: AccountLockedLongerDurationRequest) => Promise<AccountLockedLongerDurationResponse>;
    accountLockedDuration: (request: AccountLockedDurationRequest) => Promise<AccountLockedDurationResponse>;
    accountLockedLongerDurationNotUnlockingOnly: (request: AccountLockedLongerDurationNotUnlockingOnlyRequest) => Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    accountLockedLongerDurationDenom: (request: AccountLockedLongerDurationDenomRequest) => Promise<AccountLockedLongerDurationDenomResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseModuleBalanceQuery<TData> extends ReactQueryParams<ModuleBalanceResponse, TData> {
    request?: ModuleBalanceRequest;
}
export interface UseModuleLockedAmountQuery<TData> extends ReactQueryParams<ModuleLockedAmountResponse, TData> {
    request?: ModuleLockedAmountRequest;
}
export interface UseAccountUnlockableCoinsQuery<TData> extends ReactQueryParams<AccountUnlockableCoinsResponse, TData> {
    request: AccountUnlockableCoinsRequest;
}
export interface UseAccountUnlockingCoinsQuery<TData> extends ReactQueryParams<AccountUnlockingCoinsResponse, TData> {
    request: AccountUnlockingCoinsRequest;
}
export interface UseAccountLockedCoinsQuery<TData> extends ReactQueryParams<AccountLockedCoinsResponse, TData> {
    request: AccountLockedCoinsRequest;
}
export interface UseAccountLockedPastTimeQuery<TData> extends ReactQueryParams<AccountLockedPastTimeResponse, TData> {
    request: AccountLockedPastTimeRequest;
}
export interface UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData> extends ReactQueryParams<AccountLockedPastTimeNotUnlockingOnlyResponse, TData> {
    request: AccountLockedPastTimeNotUnlockingOnlyRequest;
}
export interface UseAccountUnlockedBeforeTimeQuery<TData> extends ReactQueryParams<AccountUnlockedBeforeTimeResponse, TData> {
    request: AccountUnlockedBeforeTimeRequest;
}
export interface UseAccountLockedPastTimeDenomQuery<TData> extends ReactQueryParams<AccountLockedPastTimeDenomResponse, TData> {
    request: AccountLockedPastTimeDenomRequest;
}
export interface UseLockedDenomQuery<TData> extends ReactQueryParams<LockedDenomResponse, TData> {
    request: LockedDenomRequest;
}
export interface UseLockedByIDQuery<TData> extends ReactQueryParams<LockedResponse, TData> {
    request: LockedRequest;
}
export interface UseSyntheticLockupsByLockupIDQuery<TData> extends ReactQueryParams<SyntheticLockupsByLockupIDResponse, TData> {
    request: SyntheticLockupsByLockupIDRequest;
}
export interface UseAccountLockedLongerDurationQuery<TData> extends ReactQueryParams<AccountLockedLongerDurationResponse, TData> {
    request: AccountLockedLongerDurationRequest;
}
export interface UseAccountLockedDurationQuery<TData> extends ReactQueryParams<AccountLockedDurationResponse, TData> {
    request: AccountLockedDurationRequest;
}
export interface UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData> extends ReactQueryParams<AccountLockedLongerDurationNotUnlockingOnlyResponse, TData> {
    request: AccountLockedLongerDurationNotUnlockingOnlyRequest;
}
export interface UseAccountLockedLongerDurationDenomQuery<TData> extends ReactQueryParams<AccountLockedLongerDurationDenomResponse, TData> {
    request: AccountLockedLongerDurationDenomRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Return full balance of the module */ useModuleBalance: <TData = ModuleBalanceResponse>({ request, options }: UseModuleBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Return locked balance of the module */ useModuleLockedAmount: <TData_1 = ModuleLockedAmountResponse>({ request, options }: UseModuleLockedAmountQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Returns unlockable coins which are not withdrawn yet */ useAccountUnlockableCoins: <TData_2 = AccountUnlockableCoinsResponse>({ request, options }: UseAccountUnlockableCoinsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** Returns unlocking coins */ useAccountUnlockingCoins: <TData_3 = AccountUnlockingCoinsResponse>({ request, options }: UseAccountUnlockingCoinsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** Return a locked coins that can't be withdrawn */ useAccountLockedCoins: <TData_4 = AccountLockedCoinsResponse>({ request, options }: UseAccountLockedCoinsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Returns locked records of an account with unlock time beyond timestamp */ useAccountLockedPastTime: <TData_5 = AccountLockedPastTimeResponse>({ request, options }: UseAccountLockedPastTimeQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    useAccountLockedPastTimeNotUnlockingOnly: <TData_6 = AccountLockedPastTimeNotUnlockingOnlyResponse>({ request, options }: UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** Returns unlocked records with unlock time before timestamp */ useAccountUnlockedBeforeTime: <TData_7 = AccountUnlockedBeforeTimeResponse>({ request, options }: UseAccountUnlockedBeforeTimeQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** Returns lock records by address, timestamp, denom */ useAccountLockedPastTimeDenom: <TData_8 = AccountLockedPastTimeDenomResponse>({ request, options }: UseAccountLockedPastTimeDenomQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /** Returns total locked per denom with longer past given time */ useLockedDenom: <TData_9 = LockedDenomResponse>({ request, options }: UseLockedDenomQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
    /** Returns lock record by id */ useLockedByID: <TData_10 = LockedResponse>({ request, options }: UseLockedByIDQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
    /** Returns synthetic lockups by native lockup id */ useSyntheticLockupsByLockupID: <TData_11 = SyntheticLockupsByLockupIDResponse>({ request, options }: UseSyntheticLockupsByLockupIDQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
    /** Returns account locked records with longer duration */ useAccountLockedLongerDuration: <TData_12 = AccountLockedLongerDurationResponse>({ request, options }: UseAccountLockedLongerDurationQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
    /** Returns account locked records with a specific duration */ useAccountLockedDuration: <TData_13 = AccountLockedDurationResponse>({ request, options }: UseAccountLockedDurationQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    useAccountLockedLongerDurationNotUnlockingOnly: <TData_14 = AccountLockedLongerDurationNotUnlockingOnlyResponse>({ request, options }: UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
    /** Returns account's locked records for a denom with longer duration */ useAccountLockedLongerDurationDenom: <TData_15 = AccountLockedLongerDurationDenomResponse>({ request, options }: UseAccountLockedLongerDurationDenomQuery<TData_15>) => import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
    /** Params returns lockup params. */ useParams: <TData_16 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_16>) => import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Return full balance of the module */ QueryModuleBalanceStore: {
        new (): {
            store: QueryStore<ModuleBalanceRequest, ModuleBalanceResponse>;
            moduleBalance(request: ModuleBalanceRequest): import("../../mobx").MobxResponse<ModuleBalanceResponse>;
        };
    };
    /** Return locked balance of the module */ QueryModuleLockedAmountStore: {
        new (): {
            store: QueryStore<ModuleLockedAmountRequest, ModuleLockedAmountResponse>;
            moduleLockedAmount(request: ModuleLockedAmountRequest): import("../../mobx").MobxResponse<ModuleLockedAmountResponse>;
        };
    };
    /** Returns unlockable coins which are not withdrawn yet */ QueryAccountUnlockableCoinsStore: {
        new (): {
            store: QueryStore<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>;
            accountUnlockableCoins(request: AccountUnlockableCoinsRequest): import("../../mobx").MobxResponse<AccountUnlockableCoinsResponse>;
        };
    };
    /** Returns unlocking coins */ QueryAccountUnlockingCoinsStore: {
        new (): {
            store: QueryStore<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>;
            accountUnlockingCoins(request: AccountUnlockingCoinsRequest): import("../../mobx").MobxResponse<AccountUnlockingCoinsResponse>;
        };
    };
    /** Return a locked coins that can't be withdrawn */ QueryAccountLockedCoinsStore: {
        new (): {
            store: QueryStore<AccountLockedCoinsRequest, AccountLockedCoinsResponse>;
            accountLockedCoins(request: AccountLockedCoinsRequest): import("../../mobx").MobxResponse<AccountLockedCoinsResponse>;
        };
    };
    /** Returns locked records of an account with unlock time beyond timestamp */ QueryAccountLockedPastTimeStore: {
        new (): {
            store: QueryStore<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>;
            accountLockedPastTime(request: AccountLockedPastTimeRequest): import("../../mobx").MobxResponse<AccountLockedPastTimeResponse>;
        };
    };
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    QueryAccountLockedPastTimeNotUnlockingOnlyStore: {
        new (): {
            store: QueryStore<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): import("../../mobx").MobxResponse<AccountLockedPastTimeNotUnlockingOnlyResponse>;
        };
    };
    /** Returns unlocked records with unlock time before timestamp */ QueryAccountUnlockedBeforeTimeStore: {
        new (): {
            store: QueryStore<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>;
            accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): import("../../mobx").MobxResponse<AccountUnlockedBeforeTimeResponse>;
        };
    };
    /** Returns lock records by address, timestamp, denom */ QueryAccountLockedPastTimeDenomStore: {
        new (): {
            store: QueryStore<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>;
            accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): import("../../mobx").MobxResponse<AccountLockedPastTimeDenomResponse>;
        };
    };
    /** Returns total locked per denom with longer past given time */ QueryLockedDenomStore: {
        new (): {
            store: QueryStore<LockedDenomRequest, LockedDenomResponse>;
            lockedDenom(request: LockedDenomRequest): import("../../mobx").MobxResponse<LockedDenomResponse>;
        };
    };
    /** Returns lock record by id */ QueryLockedByIDStore: {
        new (): {
            store: QueryStore<LockedRequest, LockedResponse>;
            lockedByID(request: LockedRequest): import("../../mobx").MobxResponse<LockedResponse>;
        };
    };
    /** Returns synthetic lockups by native lockup id */ QuerySyntheticLockupsByLockupIDStore: {
        new (): {
            store: QueryStore<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>;
            syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): import("../../mobx").MobxResponse<SyntheticLockupsByLockupIDResponse>;
        };
    };
    /** Returns account locked records with longer duration */ QueryAccountLockedLongerDurationStore: {
        new (): {
            store: QueryStore<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>;
            accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): import("../../mobx").MobxResponse<AccountLockedLongerDurationResponse>;
        };
    };
    /** Returns account locked records with a specific duration */ QueryAccountLockedDurationStore: {
        new (): {
            store: QueryStore<AccountLockedDurationRequest, AccountLockedDurationResponse>;
            accountLockedDuration(request: AccountLockedDurationRequest): import("../../mobx").MobxResponse<AccountLockedDurationResponse>;
        };
    };
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    QueryAccountLockedLongerDurationNotUnlockingOnlyStore: {
        new (): {
            store: QueryStore<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): import("../../mobx").MobxResponse<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
        };
    };
    /** Returns account's locked records for a denom with longer duration */ QueryAccountLockedLongerDurationDenomStore: {
        new (): {
            store: QueryStore<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>;
            accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): import("../../mobx").MobxResponse<AccountLockedLongerDurationDenomResponse>;
        };
    };
    /** Params returns lockup params. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
};
