import { PrettyAsset } from '@/components';
import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useEffect, useMemo } from 'react';
import { useQueryHooks } from './useQueryHooks';
import { usePrices } from './usePrices';
import { getPagination } from './useTotalAssets';
import { assets, chains } from '@/utils/local-chain-registry'
import {
  getChainNameByDenom,
  convertBaseUnitToDisplayUnitByDenom,
  convertBaseUnitToDollarValueByDenom,
  getChainPrettyName
} from '@chain-registry/utils';

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

  const dataQueries = {
    allBalances: allBalancesQuery,
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

  const data = useMemo(() => {
    if (isLoading) return;

    const queriesData = Object.fromEntries(
      Object.entries(dataQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const { allBalances, prices } = queriesData;

    const currentAssetList = assets.filter(a => a.chain_name === chainName)

    const finalAssets = currentAssetList.flatMap(a => a.assets)
      .map(asset => {
        const { base, symbol, logo_URIs } = asset;
        const amount = allBalances.find(b => b.denom === base)?.amount || 0
        const dollarValue = convertBaseUnitToDollarValueByDenom(currentAssetList, prices, base, amount, chainName)
        const chainNameForAsset = getChainNameByDenom(currentAssetList, base) || ''
        return {
          symbol,
          logoUrl: logo_URIs?.png || logo_URIs?.svg,
          prettyChainName: getChainPrettyName(chains, chainNameForAsset),
          displayAmount: convertBaseUnitToDisplayUnitByDenom(currentAssetList, base, amount, chainName),
          dollarValue,
          amount,
          denom: base,
        };
      })
      .sort((a, b) =>
        new BigNumber(a.dollarValue).lt(b.dollarValue) ? 1 : -1
      )

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
