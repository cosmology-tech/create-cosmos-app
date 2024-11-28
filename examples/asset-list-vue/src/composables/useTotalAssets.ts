import { useChain } from '@interchain-kit/vue'
import { Ref, computed } from 'vue'
import { useBalances, useDelegations, useLockedCoins, usePools } from './useOsmosQueries'
import { usePrices } from './usePrices'
import BigNumber from 'bignumber.js';
import { useAssets } from './useAssets';
import { calcCoinDollarValue } from '../utils/chain';
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";
import { convertGammTokenToDollarValue } from '../utils/pool';

export const useTotalAssets = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  // @ts-ignore
  const allBalances = useBalances(rpcEndpoint, address)
  // @ts-ignore
  const delegations = useDelegations(rpcEndpoint, address)
  // @ts-ignore
  const lockedCoins = useLockedCoins(rpcEndpoint, address)
  // @ts-ignore
  const pools = usePools(rpcEndpoint, address)
  const prices = usePrices(chainName)
  const { allAssets } = useAssets(chainName)
  const zero = new BigNumber(0);

  const stakedTotal = computed(() => {
    if (delegations.value) {
      return delegations.value?.map((coin) => calcCoinDollarValue(prices.value, coin, allAssets))
        .reduce((total, cur) => total.plus(cur), zero)
        .toString();
    }
    return
  })

  const balancesTotal = computed(() => {
    if (allBalances.value) {
      return allBalances.value?.filter(({ denom }) => !denom.startsWith('gamm') && prices.value[denom])
        .map((coin) => calcCoinDollarValue(prices.value, coin, allAssets))
        .reduce((total, cur) => total.plus(cur), zero)
        .toString();
    }
    return
  })

  const liquidityCoins = computed(() => {
    return (allBalances.value ?? []).filter(({ denom }) =>
      denom.startsWith('gamm')
    )
  })

  const gammTokenDenoms = computed(() => {
    return [
      ...(liquidityCoins.value ?? []),
      ...(lockedCoins.value ?? []),
    ].map(({ denom }) => denom);
  })

  const uniqueDenoms = computed(() => {
    return [...new Set(gammTokenDenoms.value)];
  })

  const poolsMap = computed(() => {
    return pools.value?.filter(({ totalShares }) => uniqueDenoms.value.includes(totalShares.denom))
      .filter((pool) => !pool?.$typeUrl?.includes('stableswap'))
      // @ts-ignore
      .filter(({ poolAssets }) => {
        // @ts-ignore
        return poolAssets.every(({ token }) => {
          const isGammToken = token.denom.startsWith('gamm/pool');
          return !isGammToken && prices.value[token.denom];
        });
      })
      .reduce((prev, cur) => ({ ...prev, [cur.totalShares.denom]: cur }), {});
  })

  const bondedTotal = computed(() => {
    return lockedCoins.value.map((coin) => {
      // @ts-ignore
      const poolData = poolsMap.value?.[coin.denom];
      if (!poolData) return '0';
      return convertGammTokenToDollarValue(coin, poolData, prices.value, allAssets);
    })
      .reduce((total, cur) => total.plus(cur), zero)
      .toString();
  })

  const liquidityTotal = computed(() => {
    return liquidityCoins.value
      .map((coin) => {
        // @ts-ignore
        const poolData = poolsMap.value[coin.denom];
        if (!poolData) return '0';
        return convertGammTokenToDollarValue(coin, poolData, prices.value, allAssets);
      })
      .reduce((total, cur) => total.plus(cur), zero)
      .toString();
  })

  const total = computed(() => {
    return [stakedTotal.value, balancesTotal.value, bondedTotal.value, liquidityTotal.value]
      .reduce((total, cur) => total.plus(cur || 0), zero)
      .decimalPlaces(2)
      .toString();
  })

  return {
    total,
    prices,
    allBalances
  }
}

