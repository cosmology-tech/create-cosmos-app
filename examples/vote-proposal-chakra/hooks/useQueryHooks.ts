import { useChain } from '@cosmos-kit/react';
import {
  useRpcEndpoint,
  useRpcClient,
  createRpcQueryHooks,
} from 'interchain-query';

export const useQueryHooks = (chainName: string, extraKey?: string) => {
  const { getRpcEndpoint } = useChain(chainName);

  const rpcEndpointQuery = useRpcEndpoint({
    getter: getRpcEndpoint,
    options: {
      staleTime: Infinity,
      queryKeyHashFn: (queryKey) => {
        const key = [...queryKey, chainName];
        return JSON.stringify(extraKey ? [...key, extraKey] : key);
      },
    },
  });

  const rpcClientQuery = useRpcClient({
    rpcEndpoint: rpcEndpointQuery.data || '',
    options: {
      enabled: !!rpcEndpointQuery.data,
      staleTime: Infinity,
      queryKeyHashFn: (queryKey) => {
        return JSON.stringify(extraKey ? [...queryKey, extraKey] : queryKey);
      },
    },
  });

  const { cosmos: cosmosQuery } = createRpcQueryHooks({
    rpc: rpcClientQuery.data,
  });

  const isReady = !!rpcClientQuery.data;
  const isFetching = rpcEndpointQuery.isFetching || rpcClientQuery.isFetching;

  return {
    cosmosQuery,
    isReady,
    isFetching,
    rpcEndpoint: rpcEndpointQuery.data,
  };
};
