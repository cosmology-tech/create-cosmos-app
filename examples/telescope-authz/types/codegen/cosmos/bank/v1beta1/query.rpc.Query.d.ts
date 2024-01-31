import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the balance of a single coin for a single account. */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** AllBalances queries the balance of all coins for a single account. */
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    /** TotalSupply queries the total supply of all coins. */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /** SupplyOf queries the supply of a single coin. */
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    balance: (request: QueryBalanceRequest) => Promise<QueryBalanceResponse>;
    allBalances: (request: QueryAllBalancesRequest) => Promise<QueryAllBalancesResponse>;
    spendableBalances: (request: QuerySpendableBalancesRequest) => Promise<QuerySpendableBalancesResponse>;
    totalSupply: (request?: QueryTotalSupplyRequest) => Promise<QueryTotalSupplyResponse>;
    supplyOf: (request: QuerySupplyOfRequest) => Promise<QuerySupplyOfResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    denomMetadata: (request: QueryDenomMetadataRequest) => Promise<QueryDenomMetadataResponse>;
    denomsMetadata: (request?: QueryDenomsMetadataRequest) => Promise<QueryDenomsMetadataResponse>;
    denomOwners: (request: QueryDenomOwnersRequest) => Promise<QueryDenomOwnersResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
    request: QueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends ReactQueryParams<QueryAllBalancesResponse, TData> {
    request: QueryAllBalancesRequest;
}
export interface UseSpendableBalancesQuery<TData> extends ReactQueryParams<QuerySpendableBalancesResponse, TData> {
    request: QuerySpendableBalancesRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
    request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
    request: QuerySupplyOfRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseDenomMetadataQuery<TData> extends ReactQueryParams<QueryDenomMetadataResponse, TData> {
    request: QueryDenomMetadataRequest;
}
export interface UseDenomsMetadataQuery<TData> extends ReactQueryParams<QueryDenomsMetadataResponse, TData> {
    request?: QueryDenomsMetadataRequest;
}
export interface UseDenomOwnersQuery<TData> extends ReactQueryParams<QueryDenomOwnersResponse, TData> {
    request: QueryDenomOwnersRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Balance queries the balance of a single coin for a single account. */ useBalance: <TData = QueryBalanceResponse>({ request, options }: UseBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** AllBalances queries the balance of all coins for a single account. */ useAllBalances: <TData_1 = QueryAllBalancesResponse>({ request, options }: UseAllBalancesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    useSpendableBalances: <TData_2 = QuerySpendableBalancesResponse>({ request, options }: UseSpendableBalancesQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** TotalSupply queries the total supply of all coins. */ useTotalSupply: <TData_3 = QueryTotalSupplyResponse>({ request, options }: UseTotalSupplyQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** SupplyOf queries the supply of a single coin. */ useSupplyOf: <TData_4 = QuerySupplyOfResponse>({ request, options }: UseSupplyOfQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Params queries the parameters of x/bank module. */ useParams: <TData_5 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */ useDenomMetadata: <TData_6 = QueryDenomMetadataResponse>({ request, options }: UseDenomMetadataQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata: <TData_7 = QueryDenomsMetadataResponse>({ request, options }: UseDenomsMetadataQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    useDenomOwners: <TData_8 = QueryDenomOwnersResponse>({ request, options }: UseDenomOwnersQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Balance queries the balance of a single coin for a single account. */ QueryBalanceStore: {
        new (): {
            store: QueryStore<QueryBalanceRequest, QueryBalanceResponse>;
            balance(request: QueryBalanceRequest): import("../../../mobx").MobxResponse<QueryBalanceResponse>;
        };
    };
    /** AllBalances queries the balance of all coins for a single account. */ QueryAllBalancesStore: {
        new (): {
            store: QueryStore<QueryAllBalancesRequest, QueryAllBalancesResponse>;
            allBalances(request: QueryAllBalancesRequest): import("../../../mobx").MobxResponse<QueryAllBalancesResponse>;
        };
    };
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    QuerySpendableBalancesStore: {
        new (): {
            store: QueryStore<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>;
            spendableBalances(request: QuerySpendableBalancesRequest): import("../../../mobx").MobxResponse<QuerySpendableBalancesResponse>;
        };
    };
    /** TotalSupply queries the total supply of all coins. */ QueryTotalSupplyStore: {
        new (): {
            store: QueryStore<QueryTotalSupplyRequest, QueryTotalSupplyResponse>;
            totalSupply(request: QueryTotalSupplyRequest): import("../../../mobx").MobxResponse<QueryTotalSupplyResponse>;
        };
    };
    /** SupplyOf queries the supply of a single coin. */ QuerySupplyOfStore: {
        new (): {
            store: QueryStore<QuerySupplyOfRequest, QuerySupplyOfResponse>;
            supplyOf(request: QuerySupplyOfRequest): import("../../../mobx").MobxResponse<QuerySupplyOfResponse>;
        };
    };
    /** Params queries the parameters of x/bank module. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** DenomsMetadata queries the client metadata of a given coin denomination. */ QueryDenomMetadataStore: {
        new (): {
            store: QueryStore<QueryDenomMetadataRequest, QueryDenomMetadataResponse>;
            denomMetadata(request: QueryDenomMetadataRequest): import("../../../mobx").MobxResponse<QueryDenomMetadataResponse>;
        };
    };
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    QueryDenomsMetadataStore: {
        new (): {
            store: QueryStore<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>;
            denomsMetadata(request: QueryDenomsMetadataRequest): import("../../../mobx").MobxResponse<QueryDenomsMetadataResponse>;
        };
    };
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    QueryDenomOwnersStore: {
        new (): {
            store: QueryStore<QueryDenomOwnersRequest, QueryDenomOwnersResponse>;
            denomOwners(request: QueryDenomOwnersRequest): import("../../../mobx").MobxResponse<QueryDenomOwnersResponse>;
        };
    };
};
