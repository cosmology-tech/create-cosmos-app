import { osmosis } from 'osmojs';
import { useChain } from '@cosmos-kit/react';

export const useClient = (chainName: string) => {
  const { getRpcEndpoint } = useChain(chainName);

  const getClient = async () => {
    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    const client = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    return client;
  };

  return { getClient };
};
