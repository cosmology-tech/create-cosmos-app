import { TxRpc } from "../../../../types";
import { ReactQueryParams } from "../../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../../mobx";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
    /** GetNodeInfo queries the current node info. */
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: TxRpc);
    getNodeInfo: (request?: GetNodeInfoRequest) => Promise<GetNodeInfoResponse>;
    getSyncing: (request?: GetSyncingRequest) => Promise<GetSyncingResponse>;
    getLatestBlock: (request?: GetLatestBlockRequest) => Promise<GetLatestBlockResponse>;
    getBlockByHeight: (request: GetBlockByHeightRequest) => Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet: (request?: GetLatestValidatorSetRequest) => Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight: (request: GetValidatorSetByHeightRequest) => Promise<GetValidatorSetByHeightResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => ServiceClientImpl;
export interface UseGetNodeInfoQuery<TData> extends ReactQueryParams<GetNodeInfoResponse, TData> {
    request?: GetNodeInfoRequest;
}
export interface UseGetSyncingQuery<TData> extends ReactQueryParams<GetSyncingResponse, TData> {
    request?: GetSyncingRequest;
}
export interface UseGetLatestBlockQuery<TData> extends ReactQueryParams<GetLatestBlockResponse, TData> {
    request?: GetLatestBlockRequest;
}
export interface UseGetBlockByHeightQuery<TData> extends ReactQueryParams<GetBlockByHeightResponse, TData> {
    request: GetBlockByHeightRequest;
}
export interface UseGetLatestValidatorSetQuery<TData> extends ReactQueryParams<GetLatestValidatorSetResponse, TData> {
    request?: GetLatestValidatorSetRequest;
}
export interface UseGetValidatorSetByHeightQuery<TData> extends ReactQueryParams<GetValidatorSetByHeightResponse, TData> {
    request: GetValidatorSetByHeightRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** GetNodeInfo queries the current node info. */ useGetNodeInfo: <TData = GetNodeInfoResponse>({ request, options }: UseGetNodeInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** GetSyncing queries node syncing. */ useGetSyncing: <TData_1 = GetSyncingResponse>({ request, options }: UseGetSyncingQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** GetLatestBlock returns the latest block. */ useGetLatestBlock: <TData_2 = GetLatestBlockResponse>({ request, options }: UseGetLatestBlockQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** GetBlockByHeight queries block for given height. */ useGetBlockByHeight: <TData_3 = GetBlockByHeightResponse>({ request, options }: UseGetBlockByHeightQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** GetLatestValidatorSet queries latest validator-set. */ useGetLatestValidatorSet: <TData_4 = GetLatestValidatorSetResponse>({ request, options }: UseGetLatestValidatorSetQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */ useGetValidatorSetByHeight: <TData_5 = GetValidatorSetByHeightResponse>({ request, options }: UseGetValidatorSetByHeightQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** GetNodeInfo queries the current node info. */ QueryGetNodeInfoStore: {
        new (): {
            store: QueryStore<GetNodeInfoRequest, GetNodeInfoResponse>;
            getNodeInfo(request: GetNodeInfoRequest): import("../../../../mobx").MobxResponse<GetNodeInfoResponse>;
        };
    };
    /** GetSyncing queries node syncing. */ QueryGetSyncingStore: {
        new (): {
            store: QueryStore<GetSyncingRequest, GetSyncingResponse>;
            getSyncing(request: GetSyncingRequest): import("../../../../mobx").MobxResponse<GetSyncingResponse>;
        };
    };
    /** GetLatestBlock returns the latest block. */ QueryGetLatestBlockStore: {
        new (): {
            store: QueryStore<GetLatestBlockRequest, GetLatestBlockResponse>;
            getLatestBlock(request: GetLatestBlockRequest): import("../../../../mobx").MobxResponse<GetLatestBlockResponse>;
        };
    };
    /** GetBlockByHeight queries block for given height. */ QueryGetBlockByHeightStore: {
        new (): {
            store: QueryStore<GetBlockByHeightRequest, GetBlockByHeightResponse>;
            getBlockByHeight(request: GetBlockByHeightRequest): import("../../../../mobx").MobxResponse<GetBlockByHeightResponse>;
        };
    };
    /** GetLatestValidatorSet queries latest validator-set. */ QueryGetLatestValidatorSetStore: {
        new (): {
            store: QueryStore<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>;
            getLatestValidatorSet(request: GetLatestValidatorSetRequest): import("../../../../mobx").MobxResponse<GetLatestValidatorSetResponse>;
        };
    };
    /** GetValidatorSetByHeight queries validator-set at a given height. */ QueryGetValidatorSetByHeightStore: {
        new (): {
            store: QueryStore<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>;
            getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): import("../../../../mobx").MobxResponse<GetValidatorSetByHeightResponse>;
        };
    };
};
