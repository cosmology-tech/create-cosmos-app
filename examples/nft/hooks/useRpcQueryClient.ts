import { useQuery } from '@tanstack/react-query';
import { useChain } from '@cosmos-kit/react';
import { stargaze } from 'stargaze-query';
import { CHAIN_NAME } from '@/config';

export const useRpcQueryClient = () => {
  const { getRpcEndpoint } = useChain(CHAIN_NAME);
  const { createRPCQueryClient } = stargaze.ClientFactory;

  const rpcEndpointQuery = useQuery({
    queryKey: ['rpcEndpoint', CHAIN_NAME],
    queryFn: () => getRpcEndpoint(),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const rpcQueryClientQuery = useQuery({
    queryKey: ['rpcQueryClient', rpcEndpointQuery.data],
    queryFn: () =>
      createRPCQueryClient({ rpcEndpoint: rpcEndpointQuery.data || '' }),
    enabled: Boolean(rpcEndpointQuery.data),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const isReady = Boolean(rpcQueryClientQuery.data);
  const isFetching =
    rpcEndpointQuery.isFetching || rpcQueryClientQuery.isFetching;

  return { client: rpcQueryClientQuery.data, isReady, isFetching };
};