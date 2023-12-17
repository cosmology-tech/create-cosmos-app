import { TxRpc } from "../../types";
import { ReactQueryParams } from "../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../mobx";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** EpochInfos provide running epochInfos */
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    /** CurrentEpoch provide current epoch of specified identifier */
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    epochInfos: (request?: QueryEpochsInfoRequest) => Promise<QueryEpochsInfoResponse>;
    currentEpoch: (request: QueryCurrentEpochRequest) => Promise<QueryCurrentEpochResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseEpochInfosQuery<TData> extends ReactQueryParams<QueryEpochsInfoResponse, TData> {
    request?: QueryEpochsInfoRequest;
}
export interface UseCurrentEpochQuery<TData> extends ReactQueryParams<QueryCurrentEpochResponse, TData> {
    request: QueryCurrentEpochRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** EpochInfos provide running epochInfos */ useEpochInfos: <TData = QueryEpochsInfoResponse>({ request, options }: UseEpochInfosQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** CurrentEpoch provide current epoch of specified identifier */ useCurrentEpoch: <TData_1 = QueryCurrentEpochResponse>({ request, options }: UseCurrentEpochQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** EpochInfos provide running epochInfos */ QueryEpochInfosStore: {
        new (): {
            store: QueryStore<QueryEpochsInfoRequest, QueryEpochsInfoResponse>;
            epochInfos(request: QueryEpochsInfoRequest): import("../../mobx").MobxResponse<QueryEpochsInfoResponse>;
        };
    };
    /** CurrentEpoch provide current epoch of specified identifier */ QueryCurrentEpochStore: {
        new (): {
            store: QueryStore<QueryCurrentEpochRequest, QueryCurrentEpochResponse>;
            currentEpoch(request: QueryCurrentEpochRequest): import("../../mobx").MobxResponse<QueryCurrentEpochResponse>;
        };
    };
};
