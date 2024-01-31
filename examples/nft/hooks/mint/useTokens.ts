import { useQuery } from '@tanstack/react-query';
import { MINT_TOKENS } from '@/config';
import { useGraphQL } from '@/hooks';
import { useCollectionAddress } from '.';

export function useTokens() {
  const gql = useGraphQL();
  const address = useCollectionAddress();

  const query = useQuery({
    queryKey: ['mintTokensQuery', address.sg721],
    queryFn: () =>
      gql.request(MINT_TOKENS, {
        collectionAddr: address.sg721 || '',
        limit: 10,
      }),
    enabled: Boolean(address.sg721),
    staleTime: Infinity,
  });

  return { query, tokens: query.data?.tokens.tokens || [] }
}