import { computed, Ref, ref, watch } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { osmosis } from 'osmojs'
import { useAssets } from './useAssets'

export const useBalance = (chainName: Ref<string>, displayDenom?: string) => {
  const { address, rpcEndpoint } = useChain(chainName)
  const { allAssets } = useAssets(chainName)
  const balance = ref()

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
    let { balance: blc } = await client.cosmos.bank.v1beta1.balance({
      denom: denom,
      address: address
    })
    balance.value = blc
  }

  watch([denom, address, rpcEndpoint], ([dn, addr, rpc]) => {
    _request({
      rpcEndpoint: rpc as string,
      denom: dn,
      address: addr
    })
  })

  return {
    balance
  }
}