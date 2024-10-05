/**
* This file and any referenced files were automatically generated by @cosmology/telescope@0.106.0
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/

import { getRpcClient } from './extern'
import {
  QueryClient,
    useQuery,
    useQueryClient,
    UseQueryOptions,
} from '@tanstack/react-query';

import { HttpEndpoint, ProtobufRpcClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

export const RPC_CLIENT_QUERY_KEY = 'rpcClient';

export interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
    rpcEndpoint?: string | HttpEndpoint;
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

export const useDefaultRpcClient = <TData = ProtobufRpcClient>({
  rpcEndpoint,
  options,
}: UseRpcClientQuery<TData>) => {
  const queryClient = useQueryClient();
  return useQuery<ProtobufRpcClient, Error, TData>([RPC_CLIENT_QUERY_KEY, rpcEndpoint], async () => {
      const client = await getRpcClient(rpcEndpoint);
      if(!client) {
          throw new Error('Failed to connect to rpc client');
      }

      queryClient.setQueryData([RPC_CLIENT_QUERY_KEY], client);

      return client;
  }, options);
};

export const useRpcClient = <TData = ProtobufRpcClient>({
    rpcEndpoint,
    options,
}: UseRpcClientQuery<TData>) => {
    return useQuery<ProtobufRpcClient, Error, TData>([RPC_CLIENT_QUERY_KEY, rpcEndpoint], async () => {
      const client = await getRpcClient(rpcEndpoint);
      if(!client) {
          throw new Error('Failed to connect to rpc client');
      }
      return client;
    }, options);
};

interface UseTendermintClient extends ReactQueryParams<Tendermint34Client> {
    rpcEndpoint: string | HttpEndpoint;
}

/**
 * Hook that uses react-query to cache a connected tendermint client.
 */
export const useTendermintClient = ({
    rpcEndpoint,
    options,
}: UseTendermintClient) => {
    const { data: client } = useQuery<Tendermint34Client, Error, Tendermint34Client>(
        ['client', 'tendermint', rpcEndpoint],
        () => Tendermint34Client.connect(rpcEndpoint),
        {
            // allow overriding
            onError: (e) => {
                throw new Error(`Failed to connect to ${rpcEndpoint}` + '\n' + e)
            },
            ...options,
        }
    )
    return { client }
};
