import { defaultChainName } from '@/config';
import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { handleError } from './usePrices';

type PoolReward = {
  day_usd: number;
  month_usd: number;
  year_usd: number;
};

type Rewards = {
  pools: {
    [key: number]: PoolReward;
  };
  total_day_usd: number;
  total_month_usd: number;
  total_year_usd: number;
};

const fetchRewards = async (address: string): Promise<Rewards> => {
  const url = `https://api-osmosis-chain.imperator.co/lp/v1/rewards/estimation/${address}`;
  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

export const useRewards = () => {
  const { address } = useChain(defaultChainName);

  return useQuery({
    queryKey: ['rewards'],
    queryFn: () => fetchRewards(address || ''),
    enabled: !!address,
    staleTime: Infinity,
  });
};
