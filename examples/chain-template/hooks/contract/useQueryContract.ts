import { useQuery } from '@tanstack/react-query';
import { useCosmWasmClient } from './useCosmWasmClient';

export const useQueryContract = ({
  contractAddress,
  queryMsg,
  enabled = true,
}: {
  contractAddress: string;
  queryMsg: string;
  enabled?: boolean;
}) => {
  const { data: client } = useCosmWasmClient();

  return useQuery({
    queryKey: ['useQueryContract', contractAddress, queryMsg],
    queryFn: async () => {
      if (!client) return null;
      return client.queryContractSmart(contractAddress, JSON.parse(queryMsg));
    },
    enabled: !!client && !!contractAddress && !!queryMsg && enabled,
  });
};
