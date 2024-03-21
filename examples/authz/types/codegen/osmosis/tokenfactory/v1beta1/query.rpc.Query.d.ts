import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    denomAuthorityMetadata: (request: QueryDenomAuthorityMetadataRequest) => Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator: (request: QueryDenomsFromCreatorRequest) => Promise<QueryDenomsFromCreatorResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseDenomAuthorityMetadataQuery<TData> extends ReactQueryParams<QueryDenomAuthorityMetadataResponse, TData> {
    request: QueryDenomAuthorityMetadataRequest;
}
export interface UseDenomsFromCreatorQuery<TData> extends ReactQueryParams<QueryDenomsFromCreatorResponse, TData> {
    request: QueryDenomsFromCreatorRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    useDenomAuthorityMetadata: <TData_1 = QueryDenomAuthorityMetadataResponse>({ request, options }: UseDenomAuthorityMetadataQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    useDenomsFromCreator: <TData_2 = QueryDenomsFromCreatorResponse>({ request, options }: UseDenomsFromCreatorQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    QueryDenomAuthorityMetadataStore: {
        new (): {
            store: QueryStore<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>;
            denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): import("../../../mobx").MobxResponse<QueryDenomAuthorityMetadataResponse>;
        };
    };
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    QueryDenomsFromCreatorStore: {
        new (): {
            store: QueryStore<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>;
            denomsFromCreator(request: QueryDenomsFromCreatorRequest): import("../../../mobx").MobxResponse<QueryDenomsFromCreatorResponse>;
        };
    };
};
