<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient, createRpcQueryHooks, useTendermintClient, } from '../outputosmojs'

const chainName = ref('cosmoshub')
const { address, rpcEndpoint } = useChain(chainName)

// create tendermintClient by rpcEnpoint
const { client: tendermintCleint } = useTendermintClient({
  rpcEndpoint
})
console.log('[tendermint client]', tendermintCleint)
// watch(tendermintCleint, async client => {
//   let abicInfo = await client?.abciInfo()
//   console.log('[query abicInfo using tendermintCleint]', abicInfo)
// })

// create rpcClient by rpcEnpoint
const { data: rpcClient } = useRpcClient({
  rpcEndpoint,
  options: {
    enabled: computed(() => !!rpcEndpoint.value),
  },
});
console.log('[rpcClient]', rpcClient)

const hooks = createRpcQueryHooks({ rpc: rpcClient });

const changeChainName = () => {
  chainName.value = 'osmosis'
}
const {data, error} = hooks.cosmos.bank.v1beta1.useAllBalances({
  request: {
    address: address || '',
    // denom: chainassets?.assets[0].base as string,
  },
})
console.log('data.>', data)
console.log('error>', error)

</script>

<template>
<div>
  <div>fetching rpcClient:</div>
  <button @click="changeChainName">changeChainName</button>
</div>
</template>

<style scoped></style>
