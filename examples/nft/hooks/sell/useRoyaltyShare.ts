import { useQuery } from '@tanstack/react-query';
import { GET_CONTRACT } from '@/config';
import { useGraphQL } from '@/hooks';

export type RoyaltyShare = string | undefined;

export function useRoyaltyShare(address: string) {
  const gql = useGraphQL();

  const query = useQuery({
    queryKey: ['contractQuery', address],
    queryFn: () => gql.request(GET_CONTRACT, { address }),
    enabled: Boolean(address),
    staleTime: Infinity
  });

  return {
    query,
    value: query.data?.contract?.contractInfo?.royalty_info?.share as RoyaltyShare
  }
}