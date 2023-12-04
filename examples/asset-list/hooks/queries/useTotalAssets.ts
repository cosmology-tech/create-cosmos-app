import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useEffect, useMemo } from 'react';
import { useChainUtils } from '../useChainUtils';
import { usePrices } from './usePrices';
import { defaultChainName as osmoChainName } from '@/config';
import { Pool } from 'osmo-query/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { convertGammTokenToDollarValue } from '@/utils';
import { useQueryHooks } from './useQueryHooks';

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

export const useTotalAssets = (chainName: string) => {
  const { address } = useChain(chainName);

  const { cosmosQuery, osmosisQuery, isReady, isFetching } =
    useQueryHooks(chainName);

  const isOsmosisChain = chainName === osmoChainName;

  const allBalancesQuery: UseQueryResult<Coin[]> =
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

  const delegationsQuery: UseQueryResult<Coin[]> =
    cosmosQuery.staking.v1beta1.useDelegatorDelegations({
      request: {
        delegatorAddr: address || '',
        pagination: getPagination(100n),
      },
      options: {
        enabled: isReady,
        select: ({ delegationResponses }) =>
          delegationResponses.map(({ balance }) => balance) || [],
      },
    });

  const lockedCoinsQuery: UseQueryResult<Coin[]> =
    osmosisQuery.lockup.useAccountLockedCoins({
      request: {
        owner: address || '',
      },
      options: {
        enabled: isReady && isOsmosisChain,
        select: ({ coins }) => coins || [],
        staleTime: Infinity,
      },
    });

  const poolsQuery: UseQueryResult<Pool[]> = osmosisQuery.gamm.v1beta1.usePools(
    {
      request: {
        pagination: getPagination(5000n),
      },
      options: {
        enabled: isReady && isOsmosisChain,
        select: ({ pools }) => pools || [],
        staleTime: Infinity,
      },
    }
  );

  const pricesQuery = usePrices(chainName);

  const dataQueries = {
    pools: poolsQuery,
    prices: pricesQuery,
    allBalances: allBalancesQuery,
    delegations: delegationsQuery,
    lockedCoins: lockedCoinsQuery,
  };

  const queriesToReset = [dataQueries.allBalances, dataQueries.delegations];
  const queriesToRefetch = [dataQueries.allBalances];

  useEffect(() => {
    queriesToReset.forEach((query) => query.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainName]);

  const queries = Object.values(dataQueries);
  const isInitialFetching = queries.some(({ isFetching }) => isFetching);
  const isRefetching = queries.some(({ isRefetching }) => isRefetching);
  const isLoading = isFetching || isInitialFetching || isRefetching;

  type AllQueries = typeof dataQueries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const { calcCoinDollarValue } = useChainUtils(chainName);

  const zero = new BigNumber(0);

  const data = useMemo(() => {
    if (isLoading) return;

    const queriesData = Object.fromEntries(
      Object.entries(dataQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const {
      allBalances,
      delegations,
      lockedCoins = [],
      pools = [],
      prices = {},
    } = queriesData;

    const stakedTotal = delegations
      ?.map((coin) => calcCoinDollarValue(prices, coin))
      .reduce((total, cur) => total.plus(cur), zero)
      .toString();

    const balancesTotal = allBalances
      ?.filter(({ denom }) => !denom.startsWith('gamm') && prices[denom])
      .map((coin) => calcCoinDollarValue(prices, coin))
      .reduce((total, cur) => total.plus(cur), zero)
      .toString();

    let bondedTotal;
    let liquidityTotal;

    if (isOsmosisChain) {
      const liquidityCoins = (allBalances ?? []).filter(({ denom }) =>
        denom.startsWith('gamm')
      );
      const gammTokenDenoms = [
        ...(liquidityCoins ?? []),
        ...(lockedCoins ?? []),
      ].map(({ denom }) => denom);

      const uniqueDenoms = [...new Set(gammTokenDenoms)];

      const poolsMap: Record<string, Pool> = pools
        .filter(({ totalShares }) => uniqueDenoms.includes(totalShares.denom))
        .filter((pool) => !pool?.$typeUrl?.includes('stableswap'))
        .filter(({ poolAssets }) => {
          return poolAssets.every(({ token }) => {
            const isGammToken = token.denom.startsWith('gamm/pool');
            return !isGammToken && prices[token.denom];
          });
        })
        .reduce((prev, cur) => ({ ...prev, [cur.totalShares.denom]: cur }), {});

      bondedTotal = lockedCoins
        .map((coin) => {
          const poolData = poolsMap[coin.denom];
          if (!poolData) return '0';
          return convertGammTokenToDollarValue(coin, poolData, prices);
        })
        .reduce((total, cur) => total.plus(cur), zero)
        .toString();

      liquidityTotal = liquidityCoins
        .map((coin) => {
          const poolData = poolsMap[coin.denom];
          if (!poolData) return '0';
          return convertGammTokenToDollarValue(coin, poolData, prices);
        })
        .reduce((total, cur) => total.plus(cur), zero)
        .toString();
    }

    const total = [stakedTotal, balancesTotal, bondedTotal, liquidityTotal]
      .reduce((total, cur) => total.plus(cur || 0), zero)
      .decimalPlaces(2)
      .toString();

    return {
      total,
      prices,
      allBalances,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};
