import { useQuery } from '@tanstack/react-query';
import { useCosmWasmClient } from './useCosmWasmClient';

export const useContractInfo = ({
  contractAddress,
  enabled = true,
}: {
  contractAddress: string;
  enabled?: boolean;
}) => {
  const { data: client } = useCosmWasmClient();

  return useQuery({
    queryKey: ['useContractInfo', contractAddress],
    queryFn: async () => {
      if (!client) return null;
      return client.getContract(contractAddress);
    },
    enabled: !!client && !!contractAddress && enabled,
  });
};
