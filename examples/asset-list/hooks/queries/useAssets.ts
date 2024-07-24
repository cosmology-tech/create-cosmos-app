import { PrettyAsset } from '@/components';
import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useEffect, useMemo } from 'react';
import { useChainUtils } from '../useChainUtils';
import { useQueryHooks } from './useQueryHooks';
import { usePrices } from './usePrices';
import { useTopTokens } from './useTopTokens';
import { getPagination } from './useTotalAssets';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const MAX_TOKENS_TO_SHOW = 50;

export const useAssets = (chainName: string) => {
  const { address } = useChain(chainName);

  const { cosmosQuery, isReady, isFetching } = useQueryHooks(chainName);

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

  const pricesQuery = usePrices(chainName);
  const topTokensQuery = useTopTokens();

  const dataQueries = {
    allBalances: allBalancesQuery,
    topTokens: topTokensQuery,
    prices: pricesQuery,
  };

  const queriesToReset = [dataQueries.allBalances];
  const queriesToRefetch = [dataQueries.allBalances];

  useEffect(() => {
    queriesToReset.forEach((query) => query.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainName]);

  const queries = Object.values(dataQueries);
  const isInitialFetching = queries.some(({ isLoading }) => isLoading);
  const isRefetching = queries.some(({ isRefetching }) => isRefetching);
  const isLoading = isFetching || isInitialFetching || isRefetching;

  type AllQueries = typeof dataQueries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const {
    ibcAssets,
    getAssetByDenom,
    convRawToDispAmount,
    calcCoinDollarValue,
    denomToSymbol,
    getPrettyChainName,
  } = useChainUtils(chainName);

  const data = useMemo(() => {
    if (isLoading) return;

    const queriesData = Object.fromEntries(
      Object.entries(dataQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const { allBalances, prices, topTokens } = queriesData;

    const nativeAndIbcBalances: Coin[] = allBalances?.filter(
      ({ denom }) => !denom.startsWith('gamm') && prices[denom]
    );

    const emptyBalances: Coin[] = ibcAssets
      .filter(({ base }) => {
        const notInBalances = !nativeAndIbcBalances?.find(
          ({ denom }) => denom === base
        );
        return notInBalances && prices[base];
      })
      .filter((asset) => {
        const isWithinLimit = ibcAssets.length <= MAX_TOKENS_TO_SHOW;
        return isWithinLimit || topTokens.includes(asset.symbol);
      })
      .map((asset) => ({ denom: asset.base, amount: '0' }));

    const finalAssets = [...(nativeAndIbcBalances ?? []), ...emptyBalances]
      .map(({ amount, denom }) => {
        const asset = getAssetByDenom(denom);
        const symbol = denomToSymbol(denom);
        const dollarValue = calcCoinDollarValue(prices, { amount, denom });
        return {
          symbol,
          logoUrl: asset.logo_URIs?.png || asset.logo_URIs?.svg,
          prettyChainName: getPrettyChainName(denom),
          displayAmount: convRawToDispAmount(denom, amount),
          dollarValue,
          amount,
          denom,
        };
      })
      .sort((a, b) =>
        new BigNumber(a.dollarValue).lt(b.dollarValue) ? 1 : -1
      );

    return {
      prices,
      allBalances,
      assets: finalAssets as PrettyAsset[],
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};
