import { useMemo } from 'react';
import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';

import { cosmos } from '@/src/codegen';
import { prettyGrants } from '@/utils';

export const useGrants = (chainName: string) => {
  const { address, getRpcEndpoint } = useChain(chainName);

  const rpcEndpointQuery = useQuery({
    queryKey: ['rpcEndpoint', chainName],
    queryFn: () => getRpcEndpoint(),
    enabled: !!address,
    staleTime: Infinity,
  });

  const rpcQueryClientQuery = useQuery({
    queryKey: ['rpcQueryClient', chainName],
    queryFn: () =>
      cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcEndpointQuery.data || '',
      }),
    enabled: !!rpcEndpointQuery.data,
    staleTime: Infinity,
  });

  const queryClient = rpcQueryClientQuery.data;
  const hasQueryClient = !!queryClient;

  const granterGrantsQuery = useQuery({
    queryKey: ['granterGrants', address],
    queryFn: () =>
      queryClient?.cosmos.authz.v1beta1.granterGrants({
        granter: address || '',
      }),
    enabled: !!address && hasQueryClient,
    select: (data) => data?.grants,
  });

  const granteeGrantsQuery = useQuery({
    queryKey: ['granteeGrants', address],
    queryFn: () =>
      queryClient?.cosmos.authz.v1beta1.granteeGrants({
        grantee: address || '',
      }),
    enabled: !!address && hasQueryClient,
    select: (data) => data?.grants,
  });

  const dataQueries = {
    granterGrants: granterGrantsQuery,
    granteeGrants: granteeGrantsQuery,
  };

  const queriesToRefetch = [
    dataQueries.granteeGrants,
    dataQueries.granterGrants,
  ];

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  const isInitialFetching = Object.values(dataQueries).some(
    ({ isLoading }) => isLoading
  );

  const isRefetching = Object.values(dataQueries).some(
    ({ isRefetching }) => isRefetching
  );

  const isLoading = isInitialFetching || isRefetching;

  type DataQueries = typeof dataQueries;

  type QueriesData = {
    [Key in keyof DataQueries]: NonNullable<DataQueries[Key]['data']>;
  };

  const data = useMemo(() => {
    if (isLoading) return;

    const queriesData = Object.fromEntries(
      Object.entries(dataQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const { granteeGrants, granterGrants } = queriesData;

    return {
      granteeGrants: prettyGrants(granteeGrants, 'granter'),
      granterGrants: prettyGrants(granterGrants, 'grantee'),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return { data, isLoading, refetch };
};
