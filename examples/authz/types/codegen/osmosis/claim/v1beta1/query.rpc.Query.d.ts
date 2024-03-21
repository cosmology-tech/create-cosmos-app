import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    moduleAccountBalance: (request?: QueryModuleAccountBalanceRequest) => Promise<QueryModuleAccountBalanceResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    claimRecord: (request: QueryClaimRecordRequest) => Promise<QueryClaimRecordResponse>;
    claimableForAction: (request: QueryClaimableForActionRequest) => Promise<QueryClaimableForActionResponse>;
    totalClaimable: (request: QueryTotalClaimableRequest) => Promise<QueryTotalClaimableResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseModuleAccountBalanceQuery<TData> extends ReactQueryParams<QueryModuleAccountBalanceResponse, TData> {
    request?: QueryModuleAccountBalanceRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseClaimRecordQuery<TData> extends ReactQueryParams<QueryClaimRecordResponse, TData> {
    request: QueryClaimRecordRequest;
}
export interface UseClaimableForActionQuery<TData> extends ReactQueryParams<QueryClaimableForActionResponse, TData> {
    request: QueryClaimableForActionRequest;
}
export interface UseTotalClaimableQuery<TData> extends ReactQueryParams<QueryTotalClaimableResponse, TData> {
    request: QueryTotalClaimableRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    useModuleAccountBalance: <TData = QueryModuleAccountBalanceResponse>({ request, options }: UseModuleAccountBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    useParams: <TData_1 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    useClaimRecord: <TData_2 = QueryClaimRecordResponse>({ request, options }: UseClaimRecordQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    useClaimableForAction: <TData_3 = QueryClaimableForActionResponse>({ request, options }: UseClaimableForActionQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    useTotalClaimable: <TData_4 = QueryTotalClaimableResponse>({ request, options }: UseTotalClaimableQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    QueryModuleAccountBalanceStore: {
        new (): {
            store: QueryStore<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>;
            moduleAccountBalance(request: QueryModuleAccountBalanceRequest): import("../../../mobx").MobxResponse<QueryModuleAccountBalanceResponse>;
        };
    };
    QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    QueryClaimRecordStore: {
        new (): {
            store: QueryStore<QueryClaimRecordRequest, QueryClaimRecordResponse>;
            claimRecord(request: QueryClaimRecordRequest): import("../../../mobx").MobxResponse<QueryClaimRecordResponse>;
        };
    };
    QueryClaimableForActionStore: {
        new (): {
            store: QueryStore<QueryClaimableForActionRequest, QueryClaimableForActionResponse>;
            claimableForAction(request: QueryClaimableForActionRequest): import("../../../mobx").MobxResponse<QueryClaimableForActionResponse>;
        };
    };
    QueryTotalClaimableStore: {
        new (): {
            store: QueryStore<QueryTotalClaimableRequest, QueryTotalClaimableResponse>;
            totalClaimable(request: QueryTotalClaimableRequest): import("../../../mobx").MobxResponse<QueryTotalClaimableResponse>;
        };
    };
};
