import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
};
