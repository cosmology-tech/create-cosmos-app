import { useQuery } from '@tanstack/react-query';
import { handleError } from './usePrices';

export interface Fee {
  pool_id: string;
  volume_24h: number;
  volume_7d: number;
  fees_spent_24h: number;
  fees_spent_7d: number;
  fees_percentage: string;
}

const fetchFees = async (): Promise<Fee[]> => {
  const url = 'https://api-osmosis.imperator.co/fees/v1/pools';
  return fetch(url)
    .then(handleError)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const useFees = () => {
  return useQuery({
    queryKey: ['fees'],
    queryFn: fetchFees,
    staleTime: Infinity,
  });
};
