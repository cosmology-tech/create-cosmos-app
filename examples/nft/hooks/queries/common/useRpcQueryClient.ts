import { useQuery } from '@tanstack/react-query';
import { useChain } from '@cosmos-kit/react';
import { defaultChainName } from '@/config';
import { stargaze } from 'stargaze-query';

const createRPCQueryClient = stargaze.ClientFactory.createRPCQueryClient;

export const useRpcQueryClient = () => {
  const { getRpcEndpoint } = useChain(defaultChainName);

  const rpcEndpointQuery = useQuery({
    queryKey: ['rpcEndpoint', defaultChainName],
    queryFn: () => getRpcEndpoint(),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const rpcQueryClientQuery = useQuery({
    queryKey: ['rpcQueryClient', rpcEndpointQuery.data],
    queryFn: () =>
      createRPCQueryClient({ rpcEndpoint: rpcEndpointQuery.data || '' }),
    enabled: !!rpcEndpointQuery.data,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const isReady = !!rpcQueryClientQuery.data;
  const isFetching =
    rpcEndpointQuery.isFetching || rpcQueryClientQuery.isFetching;

  return { rpcQueryClient: rpcQueryClientQuery.data, isReady, isFetching };
};
