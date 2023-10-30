import { useChain } from '@cosmos-kit/react';
import { useRpcClient, useRpcEndpoint, createRpcQueryHooks } from 'osmo-query';

export function useQueryHooks(chainName: string, extraKey?: string) {
  const { address, getRpcEndpoint } = useChain(chainName);

  const rpcEndpointQuery = useRpcEndpoint({
    getter: getRpcEndpoint,
    options: {
      enabled: Boolean(address),
      staleTime: Infinity,
      queryKeyHashFn: (queryKey) =>
        JSON.stringify([...queryKey, chainName].concat(extraKey ? [extraKey] : [])),
    }
  });

  const rpcClientQuery = useRpcClient({
    rpcEndpoint: rpcEndpointQuery.data || '',
    options: {
      enabled: Boolean(address) && Boolean(rpcEndpointQuery.data),
      staleTime: Infinity,
      queryKeyHashFn: (queryKey) =>
        JSON.stringify(JSON.stringify(extraKey ? [...queryKey, extraKey] : queryKey))
    }
  });

  const { cosmos, osmosis } = createRpcQueryHooks({
    rpc: rpcClientQuery.data
  });

  const isReady = Boolean(address) && Boolean(rpcClientQuery.data);
  const isFetching = rpcEndpointQuery.isFetching || rpcClientQuery.isFetching;

  return { cosmos, osmosis, isReady, isFetching }
}