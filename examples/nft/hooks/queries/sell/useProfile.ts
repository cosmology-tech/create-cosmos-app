import { useQuery } from '@tanstack/react-query';
import { useChain } from '@cosmos-kit/react';

import {
  namesQueryDoc,
  defaultChainName,
  collectionsQueryDoc,
  ownedTokensQueryDoc,
} from '@/config';
import { useGraphqlRequest } from '@/hooks';
import { TokenSortBy } from '@/gql/graphql';
import { useMemo } from 'react';

export const useProfile = () => {
  const { address } = useChain(defaultChainName);
  const { request } = useGraphqlRequest();

  const ownedTokensQuery = useQuery({
    queryKey: ['ownedTokensQuery', address],
    queryFn: () =>
      request(ownedTokensQueryDoc, {
        limit: 100,
        ownerAddr: address,
        sortBy: TokenSortBy.PriceDesc,
      }),
    select: (data) => data.tokens,
    enabled: !!address,
  });

  const namesQuery = useQuery({
    queryKey: ['namesQuery', address],
    queryFn: () =>
      request(namesQueryDoc, {
        associatedAddr: address,
      }),
    select: (data) => data.names.names,
    enabled: !!address,
    staleTime: Infinity,
  });

  const collectionsQuery = useQuery({
    queryKey: ['collectionsQuery', address],
    queryFn: () =>
      request(collectionsQueryDoc, {
        tokenOwnerAddr: address,
      }),
    select: (data) => data.collections,
    enabled: !!address,
  });

  const queries = {
    names: namesQuery,
    ownedTokens: ownedTokensQuery,
    collections: collectionsQuery,
  };

  const queriesToRefetch = [queries.collections, queries.ownedTokens];

  const allQueries = Object.values(queries);
  const isInitialFetching = allQueries.some(({ isLoading }) => isLoading);
  const isRefetching = allQueries.some(({ isRefetching }) => isRefetching);
  const isLoading = isInitialFetching || isRefetching;

  type AllQueries = typeof queries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const profile = useMemo(() => {
    if (isLoading || !address) return;

    return Object.fromEntries(
      Object.entries(queries).map(([key, query]) => [key, query.data])
    ) as QueriesData;
  }, [isLoading]);

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  return { profile, isLoading, refetch };
};
