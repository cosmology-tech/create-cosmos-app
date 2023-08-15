import { useCallback, useMemo } from 'react';
import { Coin } from '@cosmjs/stargate';
import { useChain, useManager } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import { Pool } from 'osmo-query/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import BigNumber from 'bignumber.js';

import { defaultChainName } from '@/config';
import { useQueryHooks } from './useQueryHooks';
import { usePrices } from './usePrices';
import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  getChainName,
  getOsmoAssetByDenom,
  makePoolPairs,
  osmosisAssets,
  truncDecimals,
} from '@/utils';
import { SwapOptionType } from '@/components/swap/swap-ui';
import { CoinDenom } from '@chain-registry/utils';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

export const useSwapData = () => {
  const { address } = useChain(defaultChainName);
  const { getChainRecord } = useManager();

  const { cosmosQuery, osmosisQuery, isReady, isFetching } =
    useQueryHooks(defaultChainName);

  const allBalancesQuery: UseQueryResult<Coin[]> =
    cosmosQuery.bank.v1beta1.useAllBalances({
      request: {
        address: address || '',
        pagination: getPagination(100n),
      },
      options: {
        enabled: isReady,
        select: ({ balances }) =>
          balances.filter((coin) => !coin.denom.startsWith('gamm')) || [],
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

  const pricesQuery = usePrices();

  const dataQueries = {
    pools: poolsQuery,
    prices: pricesQuery,
    allBalances: allBalancesQuery,
  };

  const queriesToRefetch = [dataQueries.allBalances];

  const queries = Object.values(dataQueries);
  const isInitialFetching = queries.some(({ isFetching }) => isFetching);
  const isRefetching = queries.some(({ isRefetching }) => isRefetching);
  const isLoading = isFetching || isInitialFetching || isRefetching;

  type AllQueries = typeof dataQueries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const getPrettyChainName = useCallback(
    (ibcDenom: CoinDenom) => {
      const chainName = getChainName(ibcDenom);
      const chainRecord = getChainRecord(chainName);
      return chainRecord.chain.pretty_name;
    },
    [getChainRecord]
  );

  const data = useMemo(() => {
    if (isLoading || !isReady) return;

    const queriesData = Object.fromEntries(
      Object.entries(dataQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const { allBalances, pools, prices } = queriesData;

    const filteredPools = pools
      .filter(({ $typeUrl }) => !$typeUrl?.includes('stableswap'))
      .filter(({ poolAssets }) =>
        poolAssets.every(
          ({ token }) =>
            prices[token!.denom] &&
            osmosisAssets.find(({ base }) => base === token!.denom)
        )
      );

    const pairs = makePoolPairs(filteredPools, prices);

    const denoms = [
      ...new Set(
        pairs.map((pair) => [pair.baseAddress, pair.quoteAddress]).flat()
      ),
    ];

    const assetOptions = denoms
      .map((denom) => {
        const asset = getOsmoAssetByDenom(denom);
        const symbol = asset.symbol;
        const coin = allBalances.find(({ denom }) => denom === asset.base);
        const displayAmount = coin
          ? baseUnitsToDisplayUnits(symbol, coin.amount)
          : '0';
        const dollarValue = coin
          ? baseUnitsToDollarValue(prices, symbol, coin.amount)
          : '0';
        const prettyChainName = getPrettyChainName(denom);

        return {
          symbol,
          value: asset.base,
          icon: asset.logo_URIs,
          denom: asset.base,
          amount: coin?.amount || '0',
          displayAmount,
          dollarValue,
          chainName: prettyChainName,
        } as SwapOptionType;
      })
      .sort((a, b) => (new BigNumber(a.dollarValue).lt(b.dollarValue) ? 1 : -1))
      .map((asset) => ({
        ...asset,
        dollarValue: '$' + truncDecimals(asset.dollarValue, 2),
      }));

    return {
      pools: filteredPools,
      allBalances,
      prices,
      pairs,
      assetOptions,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};
