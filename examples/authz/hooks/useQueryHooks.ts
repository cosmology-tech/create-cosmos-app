import { useChain } from '@cosmos-kit/react';
import {
  useRpcEndpoint,
  useRpcClient,
  createRpcQueryHooks,
} from 'interchain-query';

export const useQueryHooks = (chainName: string) => {
  const { getRpcEndpoint } = useChain(chainName);

  const rpcEndpointQuery = useRpcEndpoint({
    getter: getRpcEndpoint,
    options: {
      staleTime: Infinity,
      queryKeyHashFn: (queryKey) => {
        return JSON.stringify([...queryKey, chainName]);
      },
    },
  });

  const rpcClientQuery = useRpcClient({
    rpcEndpoint: rpcEndpointQuery.data || '',
    options: {
      enabled: Boolean(rpcEndpointQuery.data),
      staleTime: Infinity,
    },
  });

  const isReady = Boolean(rpcClientQuery.data);
  const isFetching = rpcEndpointQuery.isFetching || rpcClientQuery.isFetching;

  return {
    isReady,
    isFetching,
    rpcEndpoint: rpcEndpointQuery.data,
  };
};
