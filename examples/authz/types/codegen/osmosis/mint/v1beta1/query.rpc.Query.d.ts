import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** EpochProvisions returns the current minting epoch provisions value. */
    epochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    epochProvisions: (request?: QueryEpochProvisionsRequest) => Promise<QueryEpochProvisionsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseEpochProvisionsQuery<TData> extends ReactQueryParams<QueryEpochProvisionsResponse, TData> {
    request?: QueryEpochProvisionsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of minting parameters. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** EpochProvisions returns the current minting epoch provisions value. */ useEpochProvisions: <TData_1 = QueryEpochProvisionsResponse>({ request, options }: UseEpochProvisionsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of minting parameters. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** EpochProvisions returns the current minting epoch provisions value. */ QueryEpochProvisionsStore: {
        new (): {
            store: QueryStore<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>;
            epochProvisions(request: QueryEpochProvisionsRequest): import("../../../mobx").MobxResponse<QueryEpochProvisionsResponse>;
        };
    };
};
