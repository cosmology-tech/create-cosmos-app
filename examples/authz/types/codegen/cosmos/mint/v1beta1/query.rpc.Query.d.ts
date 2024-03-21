import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    inflation: (request?: QueryInflationRequest) => Promise<QueryInflationResponse>;
    annualProvisions: (request?: QueryAnnualProvisionsRequest) => Promise<QueryAnnualProvisionsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseInflationQuery<TData> extends ReactQueryParams<QueryInflationResponse, TData> {
    request?: QueryInflationRequest;
}
export interface UseAnnualProvisionsQuery<TData> extends ReactQueryParams<QueryAnnualProvisionsResponse, TData> {
    request?: QueryAnnualProvisionsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of minting parameters. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Inflation returns the current minting inflation value. */ useInflation: <TData_1 = QueryInflationResponse>({ request, options }: UseInflationQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** AnnualProvisions current minting annual provisions value. */ useAnnualProvisions: <TData_2 = QueryAnnualProvisionsResponse>({ request, options }: UseAnnualProvisionsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of minting parameters. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** Inflation returns the current minting inflation value. */ QueryInflationStore: {
        new (): {
            store: QueryStore<QueryInflationRequest, QueryInflationResponse>;
            inflation(request: QueryInflationRequest): import("../../../mobx").MobxResponse<QueryInflationResponse>;
        };
    };
    /** AnnualProvisions current minting annual provisions value. */ QueryAnnualProvisionsStore: {
        new (): {
            store: QueryStore<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>;
            annualProvisions(request: QueryAnnualProvisionsRequest): import("../../../mobx").MobxResponse<QueryAnnualProvisionsResponse>;
        };
    };
};
