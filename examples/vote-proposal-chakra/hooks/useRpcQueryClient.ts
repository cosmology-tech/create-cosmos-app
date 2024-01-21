import { cosmos } from 'interchain-query';
import { useQuery } from '@tanstack/react-query';
import { useQueryHooks } from './useQueryHooks';

const createRPCQueryClient = cosmos.ClientFactory.createRPCQueryClient;

export const useRpcQueryClient = (chainName: string) => {
  const { rpcEndpoint } = useQueryHooks(chainName);

  const rpcQueryClientQuery = useQuery({
    queryKey: ['rpcQueryClient', rpcEndpoint],
    queryFn: () => createRPCQueryClient({ rpcEndpoint: rpcEndpoint || '' }),
    enabled: !!rpcEndpoint,
    staleTime: Infinity,
  });

  return { rpcQueryClient: rpcQueryClientQuery.data };
};
