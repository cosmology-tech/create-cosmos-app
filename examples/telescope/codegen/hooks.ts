import { getRpcClient } from './helpers'
import {
    useQuery,
    UseQueryOptions,
} from '@tanstack/react-query';

import { HttpEndpoint, ProtobufRpcClient } from '@cosmjs/stargate';

interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseRpcClientQuery<TData> extends ReactQueryParams<ProtobufRpcClient, TData> {
    rpcEndpoint: string | HttpEndpoint;
}

export interface UseRpcEndpointQuery<TData> extends ReactQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
}

export const useRpcEndpoint = <TData = string | HttpEndpoint>({
    getter,
    options,
}: UseRpcEndpointQuery<TData>) => {
    return useQuery<string | HttpEndpoint, Error, TData>(['rpcEndpoint', getter], async () => {
        return await getter();
    }, options);
};

export const useRpcClient = <TData = ProtobufRpcClient>({
    rpcEndpoint,
    options,
}: UseRpcClientQuery<TData>) => {
    return useQuery<ProtobufRpcClient, Error, TData>(['rpcClient', rpcEndpoint], async () => {
        return await getRpcClient(rpcEndpoint);
    }, options);
};
