import { osmosis } from 'osmojs';
import { chainName } from '../config';
import { useChain } from '@cosmos-kit/react';

export const useClient = () => {
  const { getRpcEndpoint } = useChain(chainName);

  const getClient = async () => {
    console.log('getClient run');

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
