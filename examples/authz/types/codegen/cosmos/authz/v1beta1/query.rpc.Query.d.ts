import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    grants: (request: QueryGrantsRequest) => Promise<QueryGrantsResponse>;
    granterGrants: (request: QueryGranterGrantsRequest) => Promise<QueryGranterGrantsResponse>;
    granteeGrants: (request: QueryGranteeGrantsRequest) => Promise<QueryGranteeGrantsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseGrantsQuery<TData> extends ReactQueryParams<QueryGrantsResponse, TData> {
    request: QueryGrantsRequest;
}
export interface UseGranterGrantsQuery<TData> extends ReactQueryParams<QueryGranterGrantsResponse, TData> {
    request: QueryGranterGrantsRequest;
}
export interface UseGranteeGrantsQuery<TData> extends ReactQueryParams<QueryGranteeGrantsResponse, TData> {
    request: QueryGranteeGrantsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */ useGrants: <TData = QueryGrantsResponse>({ request, options }: UseGrantsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    useGranterGrants: <TData_1 = QueryGranterGrantsResponse>({ request, options }: UseGranterGrantsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    useGranteeGrants: <TData_2 = QueryGranteeGrantsResponse>({ request, options }: UseGranteeGrantsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */ QueryGrantsStore: {
        new (): {
            store: QueryStore<QueryGrantsRequest, QueryGrantsResponse>;
            grants(request: QueryGrantsRequest): import("../../../mobx").MobxResponse<QueryGrantsResponse>;
        };
    };
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    QueryGranterGrantsStore: {
        new (): {
            store: QueryStore<QueryGranterGrantsRequest, QueryGranterGrantsResponse>;
            granterGrants(request: QueryGranterGrantsRequest): import("../../../mobx").MobxResponse<QueryGranterGrantsResponse>;
        };
    };
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    QueryGranteeGrantsStore: {
        new (): {
            store: QueryStore<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>;
            granteeGrants(request: QueryGranteeGrantsRequest): import("../../../mobx").MobxResponse<QueryGranteeGrantsResponse>;
        };
    };
};
