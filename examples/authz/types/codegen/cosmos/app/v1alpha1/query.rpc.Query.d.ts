import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query is the app module query service. */
export interface Query {
    /** Config returns the current app config. */
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    config: (request?: QueryConfigRequest) => Promise<QueryConfigResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseConfigQuery<TData> extends ReactQueryParams<QueryConfigResponse, TData> {
    request?: QueryConfigRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Config returns the current app config. */ useConfig: <TData = QueryConfigResponse>({ request, options }: UseConfigQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** Config returns the current app config. */ QueryConfigStore: {
        new (): {
            store: QueryStore<QueryConfigRequest, QueryConfigResponse>;
            config(request: QueryConfigRequest): import("../../../mobx").MobxResponse<QueryConfigResponse>;
        };
    };
};
