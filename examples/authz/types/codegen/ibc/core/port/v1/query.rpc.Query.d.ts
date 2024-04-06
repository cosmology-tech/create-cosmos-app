import { TxRpc } from "../../../../types";
import { ReactQueryParams } from "../../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../../mobx";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
    appVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    appVersion: (request: QueryAppVersionRequest) => Promise<QueryAppVersionResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseAppVersionQuery<TData> extends ReactQueryParams<QueryAppVersionResponse, TData> {
    request: QueryAppVersionRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** AppVersion queries an IBC Port and determines the appropriate application version to be used */ useAppVersion: <TData = QueryAppVersionResponse>({ request, options }: UseAppVersionQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /** AppVersion queries an IBC Port and determines the appropriate application version to be used */ QueryAppVersionStore: {
        new (): {
            store: QueryStore<QueryAppVersionRequest, QueryAppVersionResponse>;
            appVersion(request: QueryAppVersionRequest): import("../../../../mobx").MobxResponse<QueryAppVersionResponse>;
        };
    };
};
