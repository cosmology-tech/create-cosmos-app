import { osmosis } from 'osmojs';
import { useChain } from '@cosmos-kit/react';

export const useRpcClient = (chainName: string) => {
  const { getRpcEndpoint } = useChain(chainName);

  const getRpcClient = async () => {
    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    return await osmosis.ClientFactory.createRPCQueryClient({ rpcEndpoint });
  };

  return { getRpcClient };
};
