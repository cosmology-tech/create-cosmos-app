import { TxRpc } from "../../../../types";
import { ReactQueryParams } from "../../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../../mobx";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTrace queries a denomination trace information. */
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    /** DenomTraces queries all denomination traces. */
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    denomTrace: (request: QueryDenomTraceRequest) => Promise<QueryDenomTraceResponse>;
    denomTraces: (request?: QueryDenomTracesRequest) => Promise<QueryDenomTracesResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseDenomTraceQuery<TData> extends ReactQueryParams<QueryDenomTraceResponse, TData> {
    request: QueryDenomTraceRequest;
}
export interface UseDenomTracesQuery<TData> extends ReactQueryParams<QueryDenomTracesResponse, TData> {
    request?: QueryDenomTracesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** DenomTrace queries a denomination trace information. */ useDenomTrace: <TData = QueryDenomTraceResponse>({ request, options }: UseDenomTraceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** DenomTraces queries all denomination traces. */ useDenomTraces: <TData_1 = QueryDenomTracesResponse>({ request, options }: UseDenomTracesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Params queries all parameters of the ibc-transfer module. */ useParams: <TData_2 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** DenomTrace queries a denomination trace information. */ QueryDenomTraceStore: {
        new (): {
            store: QueryStore<QueryDenomTraceRequest, QueryDenomTraceResponse>;
            denomTrace(request: QueryDenomTraceRequest): import("../../../../mobx").MobxResponse<QueryDenomTraceResponse>;
        };
    };
    /** DenomTraces queries all denomination traces. */ QueryDenomTracesStore: {
        new (): {
            store: QueryStore<QueryDenomTracesRequest, QueryDenomTracesResponse>;
            denomTraces(request: QueryDenomTracesRequest): import("../../../../mobx").MobxResponse<QueryDenomTracesResponse>;
        };
    };
    /** Params queries all parameters of the ibc-transfer module. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
};
