import { useEffect, useMemo, useRef } from 'react';
import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';

import { prettyGrants } from '@/utils';
import { useRpcQueryClient } from './useRpcQueryClient';

export const useGrants = (chainName: string) => {
  const { address } = useChain(chainName);
  const prevAddressRef = useRef(address);

  const { rpcQueryClient, isLoading: isRpcQueryClientLoading } =
    useRpcQueryClient(chainName);

  const granterGrantsQuery = useQuery({
    queryKey: ['granterGrants', address],
    queryFn: () =>
      rpcQueryClient?.cosmos.authz.v1beta1.granterGrants({
        granter: address || '',
      }),
    enabled: !!rpcQueryClient && !!address,
    select: (data) => data?.grants,
    staleTime: Infinity,
  });

  const granteeGrantsQuery = useQuery({
    queryKey: ['granteeGrants', address],
    queryFn: () =>
      rpcQueryClient?.cosmos.authz.v1beta1.granteeGrants({
        grantee: address || '',
      }),
    enabled: !!rpcQueryClient && !!address,
    select: (data) => data?.grants,
    staleTime: Infinity,
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

  useEffect(() => {
    if (prevAddressRef.current !== address) {
      refetch();
      prevAddressRef.current = address;
    }
  }, [address]);

  const isInitialFetching = Object.values(dataQueries).some(
    ({ isLoading }) => isLoading
  );

  const isRefetching = Object.values(dataQueries).some(
    ({ isRefetching }) => isRefetching
  );

  const isLoading =
    isRpcQueryClientLoading || isInitialFetching || isRefetching;

  const isError = !rpcQueryClient && !isRpcQueryClientLoading;

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

  return { data, isLoading, isError, refetch };
};
