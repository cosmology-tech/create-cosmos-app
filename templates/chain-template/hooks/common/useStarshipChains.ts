import { useQuery } from '@tanstack/react-query';
import { AssetList, Chain } from '@chain-registry/types';

import { StarshipConfig } from '@/starship';
import config from '@/starship/configs/config.yaml';

export const useStarshipChains = () => {
  const { registry } = config as StarshipConfig;
  const baseUrl = `http://localhost:${registry.ports.rest}`;

  return useQuery({
    queryKey: ['starship-chains'],
    queryFn: async () => {
      try {
        const { chains } = (await fetcher<{ chains: Chain[] }>(
          `${baseUrl}/chains`
        )) ?? { chains: [] };
        const chainIds = chains.map((chain) => chain.chain_id);
        const assets = (await Promise.all(
          chainIds.map((chainId) =>
            fetcher<AssetList>(`${baseUrl}/chains/${chainId}/assets`)
          )
        ).then((assetLists) => assetLists.filter(Boolean))) as AssetList[];

        return { chains, assets };
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
