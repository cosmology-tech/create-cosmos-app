import { getRpcClient } from '../../../helpers'
import * as _m0 from 'protobufjs/minimal'
import {
    QueryBalanceRequest,
    QueryBalanceResponse,
    QueryAllBalancesRequest,
    QueryAllBalancesResponse,
    QuerySpendableBalancesRequest,
    QuerySpendableBalancesResponse,
    QueryTotalSupplyRequest,
    QueryTotalSupplyResponse,
    QuerySupplyOfRequest,
    QuerySupplyOfResponse,
    QueryParamsRequest,
    QueryParamsResponse,
    QueryDenomMetadataRequest,
    QueryDenomMetadataResponse,
    QueryDenomsMetadataRequest,
    QueryDenomsMetadataResponse,
    QueryDenomOwnersRequest,
    QueryDenomOwnersResponse,
} from './query'

import { QueryClientImpl } from './query.rpc.Query';
import {
    useQuery,
    UseQueryOptions,
} from '@tanstack/react-query';

import { HttpEndpoint, ProtobufRpcClient } from '@cosmjs/stargate';

interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
    request: QueryBalanceRequest;
}

export const createRpcQueryHooks = (rpc: ProtobufRpcClient) => {

    const useBalance = <TData = QueryBalanceResponse>({
        request,
        options,
    }: UseBalanceQuery<TData>) => {
        return useQuery<QueryBalanceResponse, Error, TData>(['queryBalance', request], async () => {
            const queryService = new QueryClientImpl(rpc);
            return queryService.balance(request)
        }, options);
    };

    return {
        useBalance
    };
}

export default createRpcQueryHooks
