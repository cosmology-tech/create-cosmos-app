import { useQuery } from '@tanstack/react-query';
import { handleError } from './usePrices';

interface Apr {
  pool_id: number;
  apr_list: Aprlist[];
}

interface Aprlist {
  start_date: string;
  denom: string;
  symbol: string;
  apr_1d: number;
  apr_7d: number;
  apr_14d: number;
  apr_superfluid: number;
}

const parseSuperfluidApr = (res: Apr[]): number => {
  return (
    res
      .find(({ apr_list }) => apr_list.find(({ symbol }) => symbol === 'ECH'))
      ?.apr_list.find(({ symbol }) => symbol === 'ECH')?.apr_superfluid || 0
  );
};

const fetchSuperfluidApr = async (): Promise<number> => {
  const url = 'https://api-osmosis.imperator.co/apr/v2/all';
  return fetch(url)
    .then(handleError)
    .then((res) => res.json())
    .then(parseSuperfluidApr);
};

export const useSuperfluidApr = () => {
  return useQuery({
    queryKey: ['superfluidApr'],
    queryFn: fetchSuperfluidApr,
    staleTime: Infinity,
  });
};
