import { osmosis } from 'osmo-query';
import { useQuery } from '@tanstack/react-query';
import { defaultChainName } from '@/config';
import { useQueryHooks } from './useQueryHooks';

const createRPCQueryClient = osmosis.ClientFactory.createRPCQueryClient;

export const useRpcQueryClient = () => {
  const { rpcEndpoint } = useQueryHooks(defaultChainName);

  const rpcQueryClientQuery = useQuery({
    queryKey: ['rpcQueryClient', rpcEndpoint],
    queryFn: () => createRPCQueryClient({ rpcEndpoint: rpcEndpoint || '' }),
    enabled: !!rpcEndpoint,
    staleTime: Infinity,
  });

  return { rpcQueryClient: rpcQueryClientQuery.data };
};
