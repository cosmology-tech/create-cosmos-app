import { useChainStore } from '@/contexts';
import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { cosmwasm } from 'interchain-query';

export const useCwQueryClient = () => {
  const { selectedChain } = useChainStore();
  const { getRpcEndpoint } = useChain(selectedChain);

  return useQuery({
    queryKey: ['cwQueryClient', selectedChain],
    queryFn: async () => {
      const rpcEndpoint = await getRpcEndpoint();
      const client = await cosmwasm.ClientFactory.createRPCQueryClient({
        rpcEndpoint,
      });
      return client;
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
