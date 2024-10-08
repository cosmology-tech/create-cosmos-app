import { useQuery } from '@tanstack/react-query';
import { AssetList, Chain } from '@chain-registry/types';

import { SPAWN_CHAIN_URL, SPAWN_ASSETS_URL } from '@/config';

export const useSpawnChains = () => {
  return useQuery({
    queryKey: ['spawn-chains'],
    queryFn: async () => {
      try {
        const [spawnChain, spawnAssets] = await Promise.all([
          fetcher<Chain>(SPAWN_CHAIN_URL),
          fetcher<AssetList>(SPAWN_ASSETS_URL),
        ]);

        return {
          chains: spawnChain ? [spawnChain] : [],
          assets: spawnAssets ? [spawnAssets] : [],
        };
      } catch (error) {
        console.error(error);
        return undefined;
      }
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};

const fetcher = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
