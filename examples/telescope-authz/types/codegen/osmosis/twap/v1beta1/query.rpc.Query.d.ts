import { TxRpc } from "../../../types";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore } from "../../../mobx";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export interface Query {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params: (request?: ParamsRequest) => Promise<ParamsResponse>;
    arithmeticTwap: (request: ArithmeticTwapRequest) => Promise<ArithmeticTwapResponse>;
    arithmeticTwapToNow: (request: ArithmeticTwapToNowRequest) => Promise<ArithmeticTwapToNowResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => QueryClientImpl;
export interface UseParamsQuery<TData> extends ReactQueryParams<ParamsResponse, TData> {
    request?: ParamsRequest;
}
export interface UseArithmeticTwapQuery<TData> extends ReactQueryParams<ArithmeticTwapResponse, TData> {
    request: ArithmeticTwapRequest;
}
export interface UseArithmeticTwapToNowQuery<TData> extends ReactQueryParams<ArithmeticTwapToNowResponse, TData> {
    request: ArithmeticTwapToNowRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    useParams: <TData = ParamsResponse>({ request, options }: UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    useArithmeticTwap: <TData_1 = ArithmeticTwapResponse>({ request, options }: UseArithmeticTwapQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    useArithmeticTwapToNow: <TData_2 = ArithmeticTwapToNowResponse>({ request, options }: UseArithmeticTwapToNowQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};
export declare const createRpcQueryMobxStores: (rpc: ProtobufRpcClient | undefined) => {
    QueryParamsStore: {
        new (): {
            store: QueryStore<ParamsRequest, ParamsResponse>;
            params(request: ParamsRequest): import("../../../mobx").MobxResponse<ParamsResponse>;
        };
    };
    QueryArithmeticTwapStore: {
        new (): {
            store: QueryStore<ArithmeticTwapRequest, ArithmeticTwapResponse>;
            arithmeticTwap(request: ArithmeticTwapRequest): import("../../../mobx").MobxResponse<ArithmeticTwapResponse>;
        };
    };
    QueryArithmeticTwapToNowStore: {
        new (): {
            store: QueryStore<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>;
            arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): import("../../../mobx").MobxResponse<ArithmeticTwapToNowResponse>;
        };
    };
};
