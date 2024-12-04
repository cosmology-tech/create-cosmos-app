import { computed, Ref, watch } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { osmosis } from 'osmojs'
import { useAssets } from './useAssets'
import { useQuery } from '@tanstack/vue-query'

export const useBalance = (chainName: Ref<string>, displayDenom?: string) => {
  const { address, rpcEndpoint } = useChain(chainName)
  const { allAssets } = useAssets(chainName)

  const denom = computed(() => {
    let res = allAssets[0].base
    for (const asset of allAssets) {
      if (asset.display.toLowerCase() === displayDenom?.toLowerCase()) {
        res = asset.base;
      }
    }
    return res
  })

  const _request = async ({ rpcEndpoint = '', denom = '', address = '' }) => {
    if (!rpcEndpoint || !denom || !address) {
      return
    }
    const { createRPCQueryClient } = osmosis.ClientFactory;
    const client = await createRPCQueryClient({ rpcEndpoint });
    let { balance } = await client.cosmos.bank.v1beta1.balance({
      denom: denom,
      address: address
    })
    return balance
  }

  watch([denom, address, rpcEndpoint], ([dn, addr, rpc]) => {
    _request({
      rpcEndpoint: rpc as string,
      denom: dn,
      address: addr
    })
  })

  const { data, isLoading, error } = useQuery({
    queryKey: ['balance', denom, address, rpcEndpoint],
    queryFn: () => {
      return _request({
        rpcEndpoint: rpcEndpoint.value as string,
        denom: denom.value,
        address: address.value
      })
    }
  })

  return {
    balance: data,
    isLoading,
    error
  }
}