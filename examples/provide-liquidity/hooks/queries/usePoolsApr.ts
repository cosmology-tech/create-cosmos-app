import { useMemo } from 'react';
import { useQueries, UseQueryResult } from '@tanstack/react-query';
import { SuperfluidAsset } from 'osmo-query/dist/codegen/osmosis/superfluid/superfluid';
import { Duration } from 'osmo-query/dist/codegen/google/protobuf/duration';
import { Gauge } from 'osmo-query/dist/codegen/osmosis/incentives/gauge';

import { defaultChainName } from '@/config';
import { useQueryHooks } from './useQueryHooks';
import { useRpcQueryClient } from './useRpcQueryClient';
import { calcPoolAprs, osmosisAssets, ExtendedPool } from '@/utils';
import { getPagination, usePrices, useSuperfluidApr } from '.';

export const durations = ['1', '7', '14'] as const;

export type Durations = typeof durations[number];

export type PoolApr = {
  [K in Durations]: ReturnType<typeof calcPoolAprs>;
};

export type PoolsApr = { [key: string]: PoolApr };

export const usePoolsApr = (pools: ExtendedPool[]) => {
  const { osmosisQuery, isReady, isFetching } = useQueryHooks(defaultChainName);
  const { rpcQueryClient } = useRpcQueryClient();

  const lockableDurationsQuery: UseQueryResult<Duration[]> =
    osmosisQuery.incentives.useLockableDurations({
      options: {
        enabled: isReady,
        select: ({ lockableDurations }) => lockableDurations || [],
        staleTime: Infinity,
      },
    });

  const superfluidAssetsQuery: UseQueryResult<SuperfluidAsset[]> =
    osmosisQuery.superfluid.useAllAssets({
      options: {
        enabled: isReady,
        select: ({ assets }) => assets || [],
        staleTime: Infinity,
      },
    });

  const gaugeQueries = useQueries({
    queries: pools.map(({ denom }) => {
      return {
        queryKey: ['gauges', denom],
        queryFn: () =>
          rpcQueryClient?.osmosis.incentives
            .activeGaugesPerDenom({
              denom,
              pagination: getPagination(100n),
            })
            .then(({ data }) => data),
        enabled: !!rpcQueryClient,
        staleTime: Infinity,
      };
    }),
  });

  const pricesQuery = usePrices();
  const superfluidAprQuery = useSuperfluidApr();

  const singleQueries = {
    prices: pricesQuery,
    superfluidApr: superfluidAprQuery,
    superfluidAssets: superfluidAssetsQuery,
    lockableDurations: lockableDurationsQuery,
  };

  const isSingleQueriesFetching = Object.values(singleQueries).some(
    ({ isFetching }) => isFetching
  );
  const isGaugesQueryFetching = gaugeQueries.some(
    ({ isFetching }) => isFetching
  );
  const isLoading =
    isFetching || isSingleQueriesFetching || isGaugesQueryFetching;

  type SingleQueries = typeof singleQueries;

  type SingleQueriesData = {
    [Key in keyof SingleQueries]: NonNullable<SingleQueries[Key]['data']>;
  };

  const poolsApr = useMemo(() => {
    if (isLoading || !isReady || pools.length === 0) return;

    const singleQueriesData = Object.fromEntries(
      Object.entries(singleQueries).map(([key, query]) => [key, query.data])
    ) as SingleQueriesData;

    const { prices, superfluidAssets, lockableDurations, superfluidApr } =
      singleQueriesData;

    const gaugesArray = gaugeQueries
      .map(({ data }) => data)
      .filter(Boolean) as Gauge[][];

    const allApr = gaugesArray.map((gauges) => {
      const poolDenom = gauges[0].distributeTo.denom;
      const pool = pools.find(({ denom }) => denom === poolDenom)!;
      const poolApr = durations.map((duration) => {
        const apr = calcPoolAprs({
          pool,
          prices,
          lockup: duration,
          assets: osmosisAssets,
          volume7d: pool.volume7d,
          activeGauges: gauges,
          swapFee: pool.poolParams.swapFee,
          aprSuperfluid: superfluidApr,
          lockupDurations: lockableDurations,
          superfluidPools: superfluidAssets,
        });
        return [duration, apr];
      });

      return [poolDenom, Object.fromEntries(poolApr)];
    });

    return Object.fromEntries(allApr) as PoolsApr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isReady, pools]);

  return { poolsApr, isFetchingApr: isLoading };
};
