import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export interface Query {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    /** DistrInfo returns the pool's matching gauge ids and weights. */
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    /** Params returns pool incentives params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** LockableDurations returns lock durations for pools. */
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    /** IncentivizedPools returns currently incentivized pools */
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    /** ExternalIncentiveGauges returns external incentive gauges. */
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    gaugeIds: (request: QueryGaugeIdsRequest) => Promise<QueryGaugeIdsResponse>;
    distrInfo: (request?: QueryDistrInfoRequest) => Promise<QueryDistrInfoResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    lockableDurations: (request?: QueryLockableDurationsRequest) => Promise<QueryLockableDurationsResponse>;
    incentivizedPools: (request?: QueryIncentivizedPoolsRequest) => Promise<QueryIncentivizedPoolsResponse>;
    externalIncentiveGauges: (request?: QueryExternalIncentiveGaugesRequest) => Promise<QueryExternalIncentiveGaugesResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseGaugeIdsQuery<TData> extends ReactQueryParams<QueryGaugeIdsResponse, TData> {
    request: QueryGaugeIdsRequest;
}
export interface UseDistrInfoQuery<TData> extends ReactQueryParams<QueryDistrInfoResponse, TData> {
    request?: QueryDistrInfoRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseLockableDurationsQuery<TData> extends ReactQueryParams<QueryLockableDurationsResponse, TData> {
    request?: QueryLockableDurationsRequest;
}
export interface UseIncentivizedPoolsQuery<TData> extends ReactQueryParams<QueryIncentivizedPoolsResponse, TData> {
    request?: QueryIncentivizedPoolsRequest;
}
export interface UseExternalIncentiveGaugesQuery<TData> extends ReactQueryParams<QueryExternalIncentiveGaugesResponse, TData> {
    request?: QueryExternalIncentiveGaugesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */ useGaugeIds: <TData = QueryGaugeIdsResponse>({ request, options }: UseGaugeIdsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** DistrInfo returns the pool's matching gauge ids and weights. */ useDistrInfo: <TData_1 = QueryDistrInfoResponse>({ request, options }: UseDistrInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Params returns pool incentives params. */ useParams: <TData_2 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** LockableDurations returns lock durations for pools. */ useLockableDurations: <TData_3 = QueryLockableDurationsResponse>({ request, options }: UseLockableDurationsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** IncentivizedPools returns currently incentivized pools */ useIncentivizedPools: <TData_4 = QueryIncentivizedPoolsResponse>({ request, options }: UseIncentivizedPoolsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** ExternalIncentiveGauges returns external incentive gauges. */ useExternalIncentiveGauges: <TData_5 = QueryExternalIncentiveGaugesResponse>({ request, options }: UseExternalIncentiveGaugesQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */ QueryGaugeIdsStore: {
        new (): {
            store: QueryStore<QueryGaugeIdsRequest, QueryGaugeIdsResponse>;
            gaugeIds(request: QueryGaugeIdsRequest): import("../../../mobx").MobxResponse<QueryGaugeIdsResponse>;
        };
    };
    /** DistrInfo returns the pool's matching gauge ids and weights. */ QueryDistrInfoStore: {
        new (): {
            store: QueryStore<QueryDistrInfoRequest, QueryDistrInfoResponse>;
            distrInfo(request: QueryDistrInfoRequest): import("../../../mobx").MobxResponse<QueryDistrInfoResponse>;
        };
    };
    /** Params returns pool incentives params. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** LockableDurations returns lock durations for pools. */ QueryLockableDurationsStore: {
        new (): {
            store: QueryStore<QueryLockableDurationsRequest, QueryLockableDurationsResponse>;
            lockableDurations(request: QueryLockableDurationsRequest): import("../../../mobx").MobxResponse<QueryLockableDurationsResponse>;
        };
    };
    /** IncentivizedPools returns currently incentivized pools */ QueryIncentivizedPoolsStore: {
        new (): {
            store: QueryStore<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>;
            incentivizedPools(request: QueryIncentivizedPoolsRequest): import("../../../mobx").MobxResponse<QueryIncentivizedPoolsResponse>;
        };
    };
    /** ExternalIncentiveGauges returns external incentive gauges. */ QueryExternalIncentiveGaugesStore: {
        new (): {
            store: QueryStore<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>;
            externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest): import("../../../mobx").MobxResponse<QueryExternalIncentiveGaugesResponse>;
        };
    };
};
