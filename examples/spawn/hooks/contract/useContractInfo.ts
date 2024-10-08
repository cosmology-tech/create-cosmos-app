import { useQuery } from '@tanstack/react-query';
import { useCosmWasmClient } from './useCosmWasmClient';
import { useChainStore } from '@/contexts';
import { useChain } from '@cosmos-kit/react';

export const useContractInfo = ({
  contractAddress,
  enabled = true,
}: {
  contractAddress: string;
  enabled?: boolean;
}) => {
  const { data: cwClient } = useCosmWasmClient();
  const { selectedChain } = useChainStore();
  const { getCosmWasmClient } = useChain(selectedChain);

  return useQuery({
    queryKey: ['useContractInfo', contractAddress],
    queryFn: async () => {
      const client = cwClient ?? (await getCosmWasmClient());
      return client.getContract(contractAddress);
    },
    enabled: !!contractAddress && enabled,
  });
};
