import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { useChainStore } from '@/contexts';

export const useSigningCosmWasmClient = () => {
  const { selectedChain } = useChainStore();
  const { getSigningCosmWasmClient, isWalletConnected } =
    useChain(selectedChain);

  return useQuery({
    queryKey: ['useSigningCosmWasmClient', selectedChain],
    queryFn: () => getSigningCosmWasmClient(),
    enabled: isWalletConnected,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
