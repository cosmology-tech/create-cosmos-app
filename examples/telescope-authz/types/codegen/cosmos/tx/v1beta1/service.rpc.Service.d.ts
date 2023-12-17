import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: TxRpc);
    simulate: (request: SimulateRequest) => Promise<SimulateResponse>;
    getTx: (request: GetTxRequest) => Promise<GetTxResponse>;
    broadcastTx: (request: BroadcastTxRequest) => Promise<BroadcastTxResponse>;
    getTxsEvent: (request: GetTxsEventRequest) => Promise<GetTxsEventResponse>;
    getBlockWithTxs: (request: GetBlockWithTxsRequest) => Promise<GetBlockWithTxsResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => ServiceClientImpl;
export interface UseSimulateQuery<TData> extends ReactQueryParams<SimulateResponse, TData> {
    request: SimulateRequest;
}
export interface UseGetTxQuery<TData> extends ReactQueryParams<GetTxResponse, TData> {
    request: GetTxRequest;
}
export interface UseBroadcastTxQuery<TData> extends ReactQueryParams<BroadcastTxResponse, TData> {
    request: BroadcastTxRequest;
}
export interface UseGetTxsEventQuery<TData> extends ReactQueryParams<GetTxsEventResponse, TData> {
    request: GetTxsEventRequest;
}
export interface UseGetBlockWithTxsQuery<TData> extends ReactQueryParams<GetBlockWithTxsResponse, TData> {
    request: GetBlockWithTxsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Simulate simulates executing a transaction for estimating gas usage. */ useSimulate: <TData = SimulateResponse>({ request, options }: UseSimulateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** GetTx fetches a tx by hash. */ useGetTx: <TData_1 = GetTxResponse>({ request, options }: UseGetTxQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** BroadcastTx broadcast transaction. */ useBroadcastTx: <TData_2 = BroadcastTxResponse>({ request, options }: UseBroadcastTxQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** GetTxsEvent fetches txs by event. */ useGetTxsEvent: <TData_3 = GetTxsEventResponse>({ request, options }: UseGetTxsEventQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs: <TData_4 = GetBlockWithTxsResponse>({ request, options }: UseGetBlockWithTxsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Simulate simulates executing a transaction for estimating gas usage. */ QuerySimulateStore: {
        new (): {
            store: QueryStore<SimulateRequest, SimulateResponse>;
            simulate(request: SimulateRequest): import("../../../mobx").MobxResponse<SimulateResponse>;
        };
    };
    /** GetTx fetches a tx by hash. */ QueryGetTxStore: {
        new (): {
            store: QueryStore<GetTxRequest, GetTxResponse>;
            getTx(request: GetTxRequest): import("../../../mobx").MobxResponse<GetTxResponse>;
        };
    };
    /** BroadcastTx broadcast transaction. */ QueryBroadcastTxStore: {
        new (): {
            store: QueryStore<BroadcastTxRequest, BroadcastTxResponse>;
            broadcastTx(request: BroadcastTxRequest): import("../../../mobx").MobxResponse<BroadcastTxResponse>;
        };
    };
    /** GetTxsEvent fetches txs by event. */ QueryGetTxsEventStore: {
        new (): {
            store: QueryStore<GetTxsEventRequest, GetTxsEventResponse>;
            getTxsEvent(request: GetTxsEventRequest): import("../../../mobx").MobxResponse<GetTxsEventResponse>;
        };
    };
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    QueryGetBlockWithTxsStore: {
        new (): {
            store: QueryStore<GetBlockWithTxsRequest, GetBlockWithTxsResponse>;
            getBlockWithTxs(request: GetBlockWithTxsRequest): import("../../../mobx").MobxResponse<GetBlockWithTxsResponse>;
        };
    };
};
