import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
export interface Query {
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    spotPrice: (request: QuerySpotPriceRequest) => Promise<QuerySpotPriceResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseSpotPriceQuery<TData> extends ReactQueryParams<QuerySpotPriceResponse, TData> {
    request: QuerySpotPriceRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useSpotPrice: <TData = QuerySpotPriceResponse>({ request, options }: UseSpotPriceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    QuerySpotPriceStore: {
        new (): {
            store: QueryStore<QuerySpotPriceRequest, QuerySpotPriceResponse>;
            spotPrice(request: QuerySpotPriceRequest): import("../../../mobx").MobxResponse<QuerySpotPriceResponse>;
        };
    };
};
