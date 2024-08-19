import { prettyCodeInfo } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useCwQueryClient } from './useCwQueryClient';

export const useCodeDetails = (codeId: number, enabled: boolean = true) => {
  const { data: client } = useCwQueryClient();

  return useQuery({
    queryKey: ['codeDetails', codeId],
    queryFn: async () => {
      if (!client) return;
      try {
        const { codeInfo } = await client.cosmwasm.wasm.v1.code({
          codeId: BigInt(codeId),
        });
        return codeInfo && prettyCodeInfo(codeInfo);
      } catch (error) {
        console.error(error);
      }
    },
    enabled: !!client && enabled,
    retry: false,
    cacheTime: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
