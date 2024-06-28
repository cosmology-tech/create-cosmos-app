import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { useChainStore } from '@/contexts';

export const useCosmWasmClient = () => {
  const { selectedChain } = useChainStore();
  const { getCosmWasmClient } = useChain(selectedChain);

  return useQuery({
    queryKey: ['useCosmWasmClient', selectedChain],
    queryFn: () => getCosmWasmClient(),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
