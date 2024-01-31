import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { TokenSortBy } from '@/gql/graphql';
import { CHAIN_NAME, GET_NAMES, GET_COLLECTIONS, GET_TOKENS } from '@/config';
import { useGraphQL } from '@/hooks';

export function useProfile() {
  const { address } = useChain(CHAIN_NAME);
  const gql = useGraphQL();

  const tokensQuery = useQuery({
    queryKey: ['tokensQuery', address],
    queryFn: () =>
      gql.request(GET_TOKENS, {
        limit: 100,
        ownerAddr: address,
        sortBy: TokenSortBy.PriceDesc,
      }),
    select: (data) => data.tokens,
    enabled: Boolean(address),
  });

  const namesQuery = useQuery({
    queryKey: ['namesQuery', address],
    queryFn: () =>
      gql.request(GET_NAMES, {
        associatedAddr: address,
      }),
    select: (data) => data.names.names,
    enabled: Boolean(address),
    staleTime: Infinity,
  });

  const collectionsQuery = useQuery({
    queryKey: ['collectionsQuery', address],
    queryFn: () =>
      gql.request(GET_COLLECTIONS, {
        tokenOwnerAddr: address,
      }),
    select: (data) => data.collections,
    enabled: Boolean(address),
  });

  const queries = {
    names: namesQuery,
    tokens: tokensQuery,
    collections: collectionsQuery
  };

  const isLoading =
    Object.values(queries).some(({ isLoading }) => isLoading) ||
    Object.values(queries).some(({ isRefetching }) => isRefetching)

  const refetch = () => {
    tokensQuery.refetch();
    collectionsQuery.refetch();
  }

  return {
    queries,
    isLoading,
    names: namesQuery.data,
    tokens: tokensQuery.data,
    collections: collectionsQuery.data
  }
}