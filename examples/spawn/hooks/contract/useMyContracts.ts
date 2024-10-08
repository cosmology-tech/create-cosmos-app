import { useChainStore } from '@/contexts';
import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { useCwQueryClient } from './useCwQueryClient';

export const useMyContracts = () => {
  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);
  const { data: client } = useCwQueryClient();

  return useQuery({
    queryKey: ['myContracts', selectedChain, address],
    queryFn: async () => {
      if (!client || !address) return [];

      try {
        const { contractAddresses } =
          await client.cosmwasm.wasm.v1.contractsByCreator({
            creatorAddress: address,
            pagination: {
              limit: 1000n,
              reverse: true,
              countTotal: false,
              key: new Uint8Array(),
              offset: 0n,
            },
          });

        const contractsInfo = await Promise.all(
          contractAddresses.map((address) =>
            client.cosmwasm.wasm.v1.contractInfo({ address })
          )
        );

        return contractsInfo;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    enabled: !!client && !!address,
  });
};
