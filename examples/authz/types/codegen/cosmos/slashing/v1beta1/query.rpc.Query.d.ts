import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Params queries the parameters of slashing module */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** SigningInfo queries the signing info of given cons address */
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    /** SigningInfos queries signing info of all validators */
    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    signingInfo: (request: QuerySigningInfoRequest) => Promise<QuerySigningInfoResponse>;
    signingInfos: (request?: QuerySigningInfosRequest) => Promise<QuerySigningInfosResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseSigningInfoQuery<TData> extends ReactQueryParams<QuerySigningInfoResponse, TData> {
    request: QuerySigningInfoRequest;
}
export interface UseSigningInfosQuery<TData> extends ReactQueryParams<QuerySigningInfosResponse, TData> {
    request?: QuerySigningInfosRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries the parameters of slashing module */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** SigningInfo queries the signing info of given cons address */ useSigningInfo: <TData_1 = QuerySigningInfoResponse>({ request, options }: UseSigningInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** SigningInfos queries signing info of all validators */ useSigningInfos: <TData_2 = QuerySigningInfosResponse>({ request, options }: UseSigningInfosQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries the parameters of slashing module */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** SigningInfo queries the signing info of given cons address */ QuerySigningInfoStore: {
        new (): {
            store: QueryStore<QuerySigningInfoRequest, QuerySigningInfoResponse>;
            signingInfo(request: QuerySigningInfoRequest): import("../../../mobx").MobxResponse<QuerySigningInfoResponse>;
        };
    };
    /** SigningInfos queries signing info of all validators */ QuerySigningInfosStore: {
        new (): {
            store: QueryStore<QuerySigningInfosRequest, QuerySigningInfosResponse>;
            signingInfos(request: QuerySigningInfosRequest): import("../../../mobx").MobxResponse<QuerySigningInfosResponse>;
        };
    };
};
