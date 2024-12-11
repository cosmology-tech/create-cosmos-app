<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient, useTendermintClient, } from '../outputosmojs'
import { createRpcQueryHooks, useQueryService } from '../outputosmojs/cosmos/bank/v1beta1/query.rpc.Query.ts'

const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

const chainName = ref('cosmoshub')
const { address, rpcEndpoint } = useChain(chainName)

// create tendermintClient by rpcEnpoint
const { client: tendermintClient } = useTendermintClient({
  rpcEndpoint
})
console.log('[tendermint client]', tendermintClient)
// watch(tendermintClient, async client => {
//   let abicInfo = await client?.abciInfo()
//   console.log('[query abicInfo using tendermintClient]', abicInfo)
// })

// create rpcClient by rpcEnpoint
const { data: rpcClient } = useRpcClient({
  rpcEndpoint,
  options: {
    enabled: computed(() => !!rpcEndpoint.value),
  },
});
console.log('[rpcClient]', rpcClient)


const hooks = createRpcQueryHooks(rpcClient);

const { data, error, isLoading} = hooks.useAllBalances({
  request: {
    address: address || '',
    pagination: computed(() => getPagination(100n)),
    // denom: chainassets?.assets[0].base as string,
  },
})

const balance = computed(() => {
  return data.value?.balances?.[0]
})
console.log('data.>', data)
console.log('error>', error)

</script>

<template>
<div>
  <div>chain: {{ chainName }}</div> 
  <div>balance: {{ balance?.denom }} {{ balance?.amount }}</div>
  <div>error: {{ error }}</div>
  <select v-model="chainName" className="h-9 px-3 mr-4 border rounded-md shadow-sm">
    <option value="juno">Juno</option>
    <option value="osmosis">Osmosis</option>
    <option value="stargaze">Stargaze</option>
    <option value="cosmoshub">Cosmos Hub</option>
  </select>
</div>
</template>

<style scoped></style>
