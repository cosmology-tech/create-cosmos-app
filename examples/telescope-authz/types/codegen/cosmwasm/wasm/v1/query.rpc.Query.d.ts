import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ContractInfo gets the contract meta data */
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    /** ContractHistory gets the contract code history */
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    /** ContractsByCode lists all smart contracts for a code id */
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    /** AllContractState gets all raw store data for a single contract */
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    /** RawContractState gets single key from the raw store data of a contract */
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    /** SmartContractState get smart query result from the contract */
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    /** Code gets the binary code and metadata for a singe wasm code */
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    /** Codes gets the metadata for all stored wasm codes */
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    /** PinnedCodes gets the pinned code ids */
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    contractInfo: (request: QueryContractInfoRequest) => Promise<QueryContractInfoResponse>;
    contractHistory: (request: QueryContractHistoryRequest) => Promise<QueryContractHistoryResponse>;
    contractsByCode: (request: QueryContractsByCodeRequest) => Promise<QueryContractsByCodeResponse>;
    allContractState: (request: QueryAllContractStateRequest) => Promise<QueryAllContractStateResponse>;
    rawContractState: (request: QueryRawContractStateRequest) => Promise<QueryRawContractStateResponse>;
    smartContractState: (request: QuerySmartContractStateRequest) => Promise<QuerySmartContractStateResponse>;
    code: (request: QueryCodeRequest) => Promise<QueryCodeResponse>;
    codes: (request?: QueryCodesRequest) => Promise<QueryCodesResponse>;
    pinnedCodes: (request?: QueryPinnedCodesRequest) => Promise<QueryPinnedCodesResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseContractInfoQuery<TData> extends ReactQueryParams<QueryContractInfoResponse, TData> {
    request: QueryContractInfoRequest;
}
export interface UseContractHistoryQuery<TData> extends ReactQueryParams<QueryContractHistoryResponse, TData> {
    request: QueryContractHistoryRequest;
}
export interface UseContractsByCodeQuery<TData> extends ReactQueryParams<QueryContractsByCodeResponse, TData> {
    request: QueryContractsByCodeRequest;
}
export interface UseAllContractStateQuery<TData> extends ReactQueryParams<QueryAllContractStateResponse, TData> {
    request: QueryAllContractStateRequest;
}
export interface UseRawContractStateQuery<TData> extends ReactQueryParams<QueryRawContractStateResponse, TData> {
    request: QueryRawContractStateRequest;
}
export interface UseSmartContractStateQuery<TData> extends ReactQueryParams<QuerySmartContractStateResponse, TData> {
    request: QuerySmartContractStateRequest;
}
export interface UseCodeQuery<TData> extends ReactQueryParams<QueryCodeResponse, TData> {
    request: QueryCodeRequest;
}
export interface UseCodesQuery<TData> extends ReactQueryParams<QueryCodesResponse, TData> {
    request?: QueryCodesRequest;
}
export interface UsePinnedCodesQuery<TData> extends ReactQueryParams<QueryPinnedCodesResponse, TData> {
    request?: QueryPinnedCodesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** ContractInfo gets the contract meta data */ useContractInfo: <TData = QueryContractInfoResponse>({ request, options }: UseContractInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** ContractHistory gets the contract code history */ useContractHistory: <TData_1 = QueryContractHistoryResponse>({ request, options }: UseContractHistoryQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** ContractsByCode lists all smart contracts for a code id */ useContractsByCode: <TData_2 = QueryContractsByCodeResponse>({ request, options }: UseContractsByCodeQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** AllContractState gets all raw store data for a single contract */ useAllContractState: <TData_3 = QueryAllContractStateResponse>({ request, options }: UseAllContractStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** RawContractState gets single key from the raw store data of a contract */ useRawContractState: <TData_4 = QueryRawContractStateResponse>({ request, options }: UseRawContractStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** SmartContractState get smart query result from the contract */ useSmartContractState: <TData_5 = QuerySmartContractStateResponse>({ request, options }: UseSmartContractStateQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Code gets the binary code and metadata for a singe wasm code */ useCode: <TData_6 = QueryCodeResponse>({ request, options }: UseCodeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** Codes gets the metadata for all stored wasm codes */ useCodes: <TData_7 = QueryCodesResponse>({ request, options }: UseCodesQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** PinnedCodes gets the pinned code ids */ usePinnedCodes: <TData_8 = QueryPinnedCodesResponse>({ request, options }: UsePinnedCodesQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** ContractInfo gets the contract meta data */ QueryContractInfoStore: {
        new (): {
            store: QueryStore<QueryContractInfoRequest, QueryContractInfoResponse>;
            contractInfo(request: QueryContractInfoRequest): import("../../../mobx").MobxResponse<QueryContractInfoResponse>;
        };
    };
    /** ContractHistory gets the contract code history */ QueryContractHistoryStore: {
        new (): {
            store: QueryStore<QueryContractHistoryRequest, QueryContractHistoryResponse>;
            contractHistory(request: QueryContractHistoryRequest): import("../../../mobx").MobxResponse<QueryContractHistoryResponse>;
        };
    };
    /** ContractsByCode lists all smart contracts for a code id */ QueryContractsByCodeStore: {
        new (): {
            store: QueryStore<QueryContractsByCodeRequest, QueryContractsByCodeResponse>;
            contractsByCode(request: QueryContractsByCodeRequest): import("../../../mobx").MobxResponse<QueryContractsByCodeResponse>;
        };
    };
    /** AllContractState gets all raw store data for a single contract */ QueryAllContractStateStore: {
        new (): {
            store: QueryStore<QueryAllContractStateRequest, QueryAllContractStateResponse>;
            allContractState(request: QueryAllContractStateRequest): import("../../../mobx").MobxResponse<QueryAllContractStateResponse>;
        };
    };
    /** RawContractState gets single key from the raw store data of a contract */ QueryRawContractStateStore: {
        new (): {
            store: QueryStore<QueryRawContractStateRequest, QueryRawContractStateResponse>;
            rawContractState(request: QueryRawContractStateRequest): import("../../../mobx").MobxResponse<QueryRawContractStateResponse>;
        };
    };
    /** SmartContractState get smart query result from the contract */ QuerySmartContractStateStore: {
        new (): {
            store: QueryStore<QuerySmartContractStateRequest, QuerySmartContractStateResponse>;
            smartContractState(request: QuerySmartContractStateRequest): import("../../../mobx").MobxResponse<QuerySmartContractStateResponse>;
        };
    };
    /** Code gets the binary code and metadata for a singe wasm code */ QueryCodeStore: {
        new (): {
            store: QueryStore<QueryCodeRequest, QueryCodeResponse>;
            code(request: QueryCodeRequest): import("../../../mobx").MobxResponse<QueryCodeResponse>;
        };
    };
    /** Codes gets the metadata for all stored wasm codes */ QueryCodesStore: {
        new (): {
            store: QueryStore<QueryCodesRequest, QueryCodesResponse>;
            codes(request: QueryCodesRequest): import("../../../mobx").MobxResponse<QueryCodesResponse>;
        };
    };
    /** PinnedCodes gets the pinned code ids */ QueryPinnedCodesStore: {
        new (): {
            store: QueryStore<QueryPinnedCodesRequest, QueryPinnedCodesResponse>;
            pinnedCodes(request: QueryPinnedCodesRequest): import("../../../mobx").MobxResponse<QueryPinnedCodesResponse>;
        };
    };
};
