import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
    subspaces: (request?: QuerySubspacesRequest) => Promise<QuerySubspacesResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request: QueryParamsRequest;
}
export interface UseSubspacesQuery<TData> extends ReactQueryParams<QuerySubspacesResponse, TData> {
    request?: QuerySubspacesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */ useSubspaces: <TData_1 = QuerySubspacesResponse>({ request, options }: UseSubspacesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */ QuerySubspacesStore: {
        new (): {
            store: QueryStore<QuerySubspacesRequest, QuerySubspacesResponse>;
            subspaces(request: QuerySubspacesRequest): import("../../../mobx").MobxResponse<QuerySubspacesResponse>;
        };
    };
};
