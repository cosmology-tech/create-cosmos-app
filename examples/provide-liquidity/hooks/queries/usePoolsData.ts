import { useMemo } from 'react';
import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import { Pool } from 'osmo-query/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';

import { defaultChainName } from '@/config';
import { useQueryHooks } from './useQueryHooks';
import { usePrices } from './external/usePrices';
import {
  descByLiquidity,
  descByMyLiquidity,
  extendPool,
  filterPools,
  getPoolsByDenom,
} from '@/utils';
import { SuperfluidAsset } from 'osmo-query/dist/codegen/osmosis/superfluid/superfluid';
import { PeriodLock } from 'osmo-query/dist/codegen/osmosis/lockup/lock';
import { useFees, useRewards } from './external';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

export const usePoolsData = () => {
  const { address } = useChain(defaultChainName);

  const { cosmosQuery, osmosisQuery, isReady, isFetching } =
    useQueryHooks(defaultChainName);

  const balancesQuery: UseQueryResult<Coin[]> =
    cosmosQuery.bank.v1beta1.useAllBalances({
      request: {
        address: address || '',
        pagination: getPagination(100n),
      },
      options: {
        enabled: isReady,
        select: ({ balances }) => balances || [],
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

  const lockedCoinsQuery: UseQueryResult<Coin[]> =
    osmosisQuery.lockup.useAccountLockedCoins({
      request: {
        owner: address || '',
      },
      options: {
        enabled: isReady,
        select: ({ coins }) => coins || [],
      },
    });

  const locksQuery: UseQueryResult<PeriodLock[]> =
    osmosisQuery.lockup.useAccountLockedLongerDuration({
      request: {
        owner: address || '',
        duration: {
          nanos: 0,
          seconds: 0n,
        },
      },
      options: {
        enabled: isReady,
        select: ({ locks }) => locks || [],
      },
    });

  const superfluidDelegationsQuery: UseQueryResult<Coin[]> =
    osmosisQuery.superfluid.useSuperfluidDelegationsByDelegator({
      request: {
        delegatorAddress: address || '',
      },
      options: {
        enabled: isReady,
        select: ({ totalDelegatedCoins }) => totalDelegatedCoins || [],
        staleTime: Infinity,
      },
    });

  const poolsQuery: UseQueryResult<Pool[]> = osmosisQuery.gamm.v1beta1.usePools(
    {
      request: {
        pagination: getPagination(5000n),
      },
      options: {
        enabled: isReady,
        select: ({ pools }) => pools || [],
        staleTime: Infinity,
      },
    }
  );

  const feesQuery = useFees();
  const pricesQuery = usePrices();
  const rewardsQuery = useRewards();

  const dataQueries = {
    locks: locksQuery,
    pools: poolsQuery,
    balances: balancesQuery,
    lockedCoins: lockedCoinsQuery,
    superfluidAssets: superfluidAssetsQuery,
    superfluidDelegations: superfluidDelegationsQuery,
    fees: feesQuery,
    prices: pricesQuery,
    rewards: rewardsQuery,
  };

  const queriesToRefetch = [
    dataQueries.locks,
    dataQueries.balances,
    dataQueries.lockedCoins,
  ];

  const queries = Object.values(dataQueries);
  const isInitialFetching = queries.some(({ isFetching }) => isFetching);
  const isRefetching = queries.some(({ isRefetching }) => isRefetching);
  const isLoading = isFetching || isInitialFetching || isRefetching;

  type AllQueries = typeof dataQueries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const data = useMemo(() => {
    if (isLoading || !isReady) return;

    const queriesData = Object.fromEntries(
      Object.entries(dataQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const { prices, fees, pools, balances, lockedCoins, superfluidAssets } =
      queriesData;

    const filteredPools = filterPools(pools, prices);

    const extendedPools = filteredPools.map((pool) =>
      extendPool({ pool, fees, balances, lockedCoins, prices })
    );

    const allPools = extendedPools.sort(descByLiquidity).slice(0, 40);

    const highlightedPools = getPoolsByDenom(extendedPools, superfluidAssets)
      .sort(descByLiquidity)
      .slice(0, 3);

    const myPools = getPoolsByDenom(extendedPools, balances).sort(
      descByMyLiquidity
    );

    const displayedPools = [allPools, highlightedPools, myPools].flat();
    const uniquePools = displayedPools.filter((pool, i) => {
      return i === displayedPools.findIndex((p) => pool.id === p.id);
    });

    return {
      ...queriesData,
      allPools,
      highlightedPools,
      myPools,
      uniquePools,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};
