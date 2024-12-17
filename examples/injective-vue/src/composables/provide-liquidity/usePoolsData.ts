import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { usePools } from '../common/usePools';
import { useBalances } from '../common/useBalances';
import { usePrices } from '../common/usePrices';
import { Pool } from '../../codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { PriceHash } from '../../utils/asset-list/types';
import { useAssets } from '../common/useAssets';
import { usePoolUtils } from '../common/usePoolUtils';
import { useFees } from './useFees';

export const usePoolsData = (chainName: Ref<string>) => {
  const { allAssets } = useAssets(chainName)
  const { extendPool } = usePoolUtils(chainName)
  const filterPools = (pools: Pool[], prices: PriceHash) => {
    return pools
      .filter(({ $typeUrl }) => !$typeUrl?.includes('stableswap'))
      .filter(({ poolAssets }) =>
        poolAssets.every(
          ({ token }) =>
            prices[token.denom] &&
            !token.denom.startsWith('gamm/pool') &&
            allAssets.find(({ base }) => base === token.denom)
        )
      );
  };

  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const { pools } = usePools(chainName)
  const { balances } = useBalances(chainName)
  const { prices } = usePrices(chainName)
  const { data: fees } = useFees()
  // console.log('data>>>', data)

  const filteredPools = computed(() => {
    if (pools.value && prices.value) {
      return filterPools(pools.value, prices.value)
    }
  })
  // const extendedPools = computed(() => {
  //   if (filteredPools.value) {
  //     return filteredPools.value.map((pool) =>
  //       extendPool({ pool, fees, balances, lockedCoins, prices })
  //     );
  //   }
  // })

  // const allPools = computed(() => {

  // })
}