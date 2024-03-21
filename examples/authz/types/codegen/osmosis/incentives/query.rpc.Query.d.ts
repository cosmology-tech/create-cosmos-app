import { TxRpc } from "../../types";
import { ReactQueryParams } from "../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../mobx";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    /** GaugeByID returns gauges by their respective ID */
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    /** Gauges returns both upcoming and active gauges */
    gauges(request?: GaugesRequest): Promise<GaugesResponse>;
    /** ActiveGauges returns active gauges */
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    /** ActiveGaugesPerDenom returns active gauges by denom */
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    /** Returns scheduled gauges that have not yet occured */
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    moduleToDistributeCoins: (request?: ModuleToDistributeCoinsRequest) => Promise<ModuleToDistributeCoinsResponse>;
    gaugeByID: (request: GaugeByIDRequest) => Promise<GaugeByIDResponse>;
    gauges: (request?: GaugesRequest) => Promise<GaugesResponse>;
    activeGauges: (request?: ActiveGaugesRequest) => Promise<ActiveGaugesResponse>;
    activeGaugesPerDenom: (request: ActiveGaugesPerDenomRequest) => Promise<ActiveGaugesPerDenomResponse>;
    upcomingGauges: (request?: UpcomingGaugesRequest) => Promise<UpcomingGaugesResponse>;
    upcomingGaugesPerDenom: (request: UpcomingGaugesPerDenomRequest) => Promise<UpcomingGaugesPerDenomResponse>;
    rewardsEst: (request: RewardsEstRequest) => Promise<RewardsEstResponse>;
    lockableDurations: (request?: QueryLockableDurationsRequest) => Promise<QueryLockableDurationsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseModuleToDistributeCoinsQuery<TData> extends ReactQueryParams<ModuleToDistributeCoinsResponse, TData> {
    request?: ModuleToDistributeCoinsRequest;
}
export interface UseGaugeByIDQuery<TData> extends ReactQueryParams<GaugeByIDResponse, TData> {
    request: GaugeByIDRequest;
}
export interface UseGaugesQuery<TData> extends ReactQueryParams<GaugesResponse, TData> {
    request?: GaugesRequest;
}
export interface UseActiveGaugesQuery<TData> extends ReactQueryParams<ActiveGaugesResponse, TData> {
    request?: ActiveGaugesRequest;
}
export interface UseActiveGaugesPerDenomQuery<TData> extends ReactQueryParams<ActiveGaugesPerDenomResponse, TData> {
    request: ActiveGaugesPerDenomRequest;
}
export interface UseUpcomingGaugesQuery<TData> extends ReactQueryParams<UpcomingGaugesResponse, TData> {
    request?: UpcomingGaugesRequest;
}
export interface UseUpcomingGaugesPerDenomQuery<TData> extends ReactQueryParams<UpcomingGaugesPerDenomResponse, TData> {
    request: UpcomingGaugesPerDenomRequest;
}
export interface UseRewardsEstQuery<TData> extends ReactQueryParams<RewardsEstResponse, TData> {
    request: RewardsEstRequest;
}
export interface UseLockableDurationsQuery<TData> extends ReactQueryParams<QueryLockableDurationsResponse, TData> {
    request?: QueryLockableDurationsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */ useModuleToDistributeCoins: <TData = ModuleToDistributeCoinsResponse>({ request, options }: UseModuleToDistributeCoinsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** GaugeByID returns gauges by their respective ID */ useGaugeByID: <TData_1 = GaugeByIDResponse>({ request, options }: UseGaugeByIDQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Gauges returns both upcoming and active gauges */ useGauges: <TData_2 = GaugesResponse>({ request, options }: UseGaugesQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** ActiveGauges returns active gauges */ useActiveGauges: <TData_3 = ActiveGaugesResponse>({ request, options }: UseActiveGaugesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** ActiveGaugesPerDenom returns active gauges by denom */ useActiveGaugesPerDenom: <TData_4 = ActiveGaugesPerDenomResponse>({ request, options }: UseActiveGaugesPerDenomQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Returns scheduled gauges that have not yet occured */ useUpcomingGauges: <TData_5 = UpcomingGaugesResponse>({ request, options }: UseUpcomingGaugesQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    useUpcomingGaugesPerDenom: <TData_6 = UpcomingGaugesPerDenomResponse>({ request, options }: UseUpcomingGaugesPerDenomQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    useRewardsEst: <TData_7 = RewardsEstResponse>({ request, options }: UseRewardsEstQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    useLockableDurations: <TData_8 = QueryLockableDurationsResponse>({ request, options }: UseLockableDurationsQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */ QueryModuleToDistributeCoinsStore: {
        new (): {
            store: QueryStore<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>;
            moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest): import("../../mobx").MobxResponse<ModuleToDistributeCoinsResponse>;
        };
    };
    /** GaugeByID returns gauges by their respective ID */ QueryGaugeByIDStore: {
        new (): {
            store: QueryStore<GaugeByIDRequest, GaugeByIDResponse>;
            gaugeByID(request: GaugeByIDRequest): import("../../mobx").MobxResponse<GaugeByIDResponse>;
        };
    };
    /** Gauges returns both upcoming and active gauges */ QueryGaugesStore: {
        new (): {
            store: QueryStore<GaugesRequest, GaugesResponse>;
            gauges(request: GaugesRequest): import("../../mobx").MobxResponse<GaugesResponse>;
        };
    };
    /** ActiveGauges returns active gauges */ QueryActiveGaugesStore: {
        new (): {
            store: QueryStore<ActiveGaugesRequest, ActiveGaugesResponse>;
            activeGauges(request: ActiveGaugesRequest): import("../../mobx").MobxResponse<ActiveGaugesResponse>;
        };
    };
    /** ActiveGaugesPerDenom returns active gauges by denom */ QueryActiveGaugesPerDenomStore: {
        new (): {
            store: QueryStore<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>;
            activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): import("../../mobx").MobxResponse<ActiveGaugesPerDenomResponse>;
        };
    };
    /** Returns scheduled gauges that have not yet occured */ QueryUpcomingGaugesStore: {
        new (): {
            store: QueryStore<UpcomingGaugesRequest, UpcomingGaugesResponse>;
            upcomingGauges(request: UpcomingGaugesRequest): import("../../mobx").MobxResponse<UpcomingGaugesResponse>;
        };
    };
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    QueryUpcomingGaugesPerDenomStore: {
        new (): {
            store: QueryStore<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>;
            upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): import("../../mobx").MobxResponse<UpcomingGaugesPerDenomResponse>;
        };
    };
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    QueryRewardsEstStore: {
        new (): {
            store: QueryStore<RewardsEstRequest, RewardsEstResponse>;
            rewardsEst(request: RewardsEstRequest): import("../../mobx").MobxResponse<RewardsEstResponse>;
        };
    };
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    QueryLockableDurationsStore: {
        new (): {
            store: QueryStore<QueryLockableDurationsRequest, QueryLockableDurationsResponse>;
            lockableDurations(request: QueryLockableDurationsRequest): import("../../mobx").MobxResponse<QueryLockableDurationsResponse>;
        };
    };
};
