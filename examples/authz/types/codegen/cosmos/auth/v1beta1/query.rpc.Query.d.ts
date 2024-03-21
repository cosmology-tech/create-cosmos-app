import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    /** Bech32 queries bech32Prefix */
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    /** AddressBytesToString converts Account Address bytes to string */
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    /** AddressStringToBytes converts Address string to bytes */
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    accounts: (request?: QueryAccountsRequest) => Promise<QueryAccountsResponse>;
    account: (request: QueryAccountRequest) => Promise<QueryAccountResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    moduleAccounts: (request?: QueryModuleAccountsRequest) => Promise<QueryModuleAccountsResponse>;
    bech32Prefix: (request?: Bech32PrefixRequest) => Promise<Bech32PrefixResponse>;
    addressBytesToString: (request: AddressBytesToStringRequest) => Promise<AddressBytesToStringResponse>;
    addressStringToBytes: (request: AddressStringToBytesRequest) => Promise<AddressStringToBytesResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
    request?: QueryAccountsRequest;
}
export interface UseAccountQuery<TData> extends ReactQueryParams<QueryAccountResponse, TData> {
    request: QueryAccountRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseModuleAccountsQuery<TData> extends ReactQueryParams<QueryModuleAccountsResponse, TData> {
    request?: QueryModuleAccountsRequest;
}
export interface UseBech32PrefixQuery<TData> extends ReactQueryParams<Bech32PrefixResponse, TData> {
    request?: Bech32PrefixRequest;
}
export interface UseAddressBytesToStringQuery<TData> extends ReactQueryParams<AddressBytesToStringResponse, TData> {
    request: AddressBytesToStringRequest;
}
export interface UseAddressStringToBytesQuery<TData> extends ReactQueryParams<AddressStringToBytesResponse, TData> {
    request: AddressStringToBytesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    useAccounts: <TData = QueryAccountsResponse>({ request, options }: UseAccountsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Account returns account details based on address. */ useAccount: <TData_1 = QueryAccountResponse>({ request, options }: UseAccountQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Params queries all parameters. */ useParams: <TData_2 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** ModuleAccounts returns all the existing module accounts. */ useModuleAccounts: <TData_3 = QueryModuleAccountsResponse>({ request, options }: UseModuleAccountsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** Bech32 queries bech32Prefix */ useBech32Prefix: <TData_4 = Bech32PrefixResponse>({ request, options }: UseBech32PrefixQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** AddressBytesToString converts Account Address bytes to string */ useAddressBytesToString: <TData_5 = AddressBytesToStringResponse>({ request, options }: UseAddressBytesToStringQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** AddressStringToBytes converts Address string to bytes */ useAddressStringToBytes: <TData_6 = AddressStringToBytesResponse>({ request, options }: UseAddressStringToBytesQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    QueryAccountsStore: {
        new (): {
            store: QueryStore<QueryAccountsRequest, QueryAccountsResponse>;
            accounts(request: QueryAccountsRequest): import("../../../mobx").MobxResponse<QueryAccountsResponse>;
        };
    };
    /** Account returns account details based on address. */ QueryAccountStore: {
        new (): {
            store: QueryStore<QueryAccountRequest, QueryAccountResponse>;
            account(request: QueryAccountRequest): import("../../../mobx").MobxResponse<QueryAccountResponse>;
        };
    };
    /** Params queries all parameters. */ QueryParamsStore: {
        new (): {
            store: QueryStore<QueryParamsRequest, QueryParamsResponse>;
            params(request: QueryParamsRequest): import("../../../mobx").MobxResponse<QueryParamsResponse>;
        };
    };
    /** ModuleAccounts returns all the existing module accounts. */ QueryModuleAccountsStore: {
        new (): {
            store: QueryStore<QueryModuleAccountsRequest, QueryModuleAccountsResponse>;
            moduleAccounts(request: QueryModuleAccountsRequest): import("../../../mobx").MobxResponse<QueryModuleAccountsResponse>;
        };
    };
    /** Bech32 queries bech32Prefix */ QueryBech32PrefixStore: {
        new (): {
            store: QueryStore<Bech32PrefixRequest, Bech32PrefixResponse>;
            bech32Prefix(request: Bech32PrefixRequest): import("../../../mobx").MobxResponse<Bech32PrefixResponse>;
        };
    };
    /** AddressBytesToString converts Account Address bytes to string */ QueryAddressBytesToStringStore: {
        new (): {
            store: QueryStore<AddressBytesToStringRequest, AddressBytesToStringResponse>;
            addressBytesToString(request: AddressBytesToStringRequest): import("../../../mobx").MobxResponse<AddressBytesToStringResponse>;
        };
    };
    /** AddressStringToBytes converts Address string to bytes */ QueryAddressStringToBytesStore: {
        new (): {
            store: QueryStore<AddressStringToBytesRequest, AddressStringToBytesResponse>;
            addressStringToBytes(request: AddressStringToBytesRequest): import("../../../mobx").MobxResponse<AddressStringToBytesResponse>;
        };
    };
};
