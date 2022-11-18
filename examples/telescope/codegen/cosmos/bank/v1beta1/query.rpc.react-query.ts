import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
import { QueryClientImpl } from "./query.rpc.Query";

import {
    useQuery,
    UseQueryOptions,
} from '@tanstack/react-query';

interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
    args: QueryBalanceRequest;
}

export const createRpcQueryHooks = (base: QueryClient) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        useBalance<TData = QueryBalanceResponse>({
            args,
            options
        }) {
            return useQuery<QueryBalanceResponse, Error, TData>(["queryBalance", args], () => {
                return queryService.balance(args)
            }, options);
        }
    };
};