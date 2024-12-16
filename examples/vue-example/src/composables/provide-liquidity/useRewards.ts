
import { useChain } from '@interchain-kit/vue';
import { useQuery } from '@tanstack/vue-query';
import '../../codegen/osmosis/incentives/query.rpc.Query'
import { Ref } from 'vue'

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

const handleError = (resp: Response) => {
  if (!resp.ok) throw Error(resp.statusText);
  return resp;
};

const fetchRewards = async (address: string): Promise<Rewards> => {
  const url = `https://api-osmosis-chain.imperator.co/lp/v1/rewards/estimation/${address}`;
  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

export const useRewards = (chainName: Ref<string>) => {
  const { address } = useChain(chainName);

  return useQuery({
    queryKey: ['rewards', address],
    queryFn: () => fetchRewards(address.value || ''),
    enabled: !!address,
    staleTime: Infinity,
  });
};
