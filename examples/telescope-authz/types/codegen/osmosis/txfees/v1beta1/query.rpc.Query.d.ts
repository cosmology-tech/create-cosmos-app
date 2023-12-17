import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export interface Query {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    denomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    /** Returns the poolID for a specified denom input. */
    denomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    /** Returns a list of all base denom tokens and their corresponding pools. */
    baseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    feeTokens: (request?: QueryFeeTokensRequest) => Promise<QueryFeeTokensResponse>;
    denomSpotPrice: (request: QueryDenomSpotPriceRequest) => Promise<QueryDenomSpotPriceResponse>;
    denomPoolId: (request: QueryDenomPoolIdRequest) => Promise<QueryDenomPoolIdResponse>;
    baseDenom: (request?: QueryBaseDenomRequest) => Promise<QueryBaseDenomResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseFeeTokensQuery<TData> extends ReactQueryParams<QueryFeeTokensResponse, TData> {
    request?: QueryFeeTokensRequest;
}
export interface UseDenomSpotPriceQuery<TData> extends ReactQueryParams<QueryDenomSpotPriceResponse, TData> {
    request: QueryDenomSpotPriceRequest;
}
export interface UseDenomPoolIdQuery<TData> extends ReactQueryParams<QueryDenomPoolIdResponse, TData> {
    request: QueryDenomPoolIdRequest;
}
export interface UseBaseDenomQuery<TData> extends ReactQueryParams<QueryBaseDenomResponse, TData> {
    request?: QueryBaseDenomRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    useFeeTokens: <TData = QueryFeeTokensResponse>({ request, options }: UseFeeTokensQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** DenomSpotPrice returns all spot prices by each registered token denom. */ useDenomSpotPrice: <TData_1 = QueryDenomSpotPriceResponse>({ request, options }: UseDenomSpotPriceQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Returns the poolID for a specified denom input. */ useDenomPoolId: <TData_2 = QueryDenomPoolIdResponse>({ request, options }: UseDenomPoolIdQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** Returns a list of all base denom tokens and their corresponding pools. */ useBaseDenom: <TData_3 = QueryBaseDenomResponse>({ request, options }: UseBaseDenomQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    QueryFeeTokensStore: {
        new (): {
            store: QueryStore<QueryFeeTokensRequest, QueryFeeTokensResponse>;
            feeTokens(request: QueryFeeTokensRequest): import("../../../mobx").MobxResponse<QueryFeeTokensResponse>;
        };
    };
    /** DenomSpotPrice returns all spot prices by each registered token denom. */ QueryDenomSpotPriceStore: {
        new (): {
            store: QueryStore<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>;
            denomSpotPrice(request: QueryDenomSpotPriceRequest): import("../../../mobx").MobxResponse<QueryDenomSpotPriceResponse>;
        };
    };
    /** Returns the poolID for a specified denom input. */ QueryDenomPoolIdStore: {
        new (): {
            store: QueryStore<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>;
            denomPoolId(request: QueryDenomPoolIdRequest): import("../../../mobx").MobxResponse<QueryDenomPoolIdResponse>;
        };
    };
    /** Returns a list of all base denom tokens and their corresponding pools. */ QueryBaseDenomStore: {
        new (): {
            store: QueryStore<QueryBaseDenomRequest, QueryBaseDenomResponse>;
            baseDenom(request: QueryBaseDenomRequest): import("../../../mobx").MobxResponse<QueryBaseDenomResponse>;
        };
    };
};
