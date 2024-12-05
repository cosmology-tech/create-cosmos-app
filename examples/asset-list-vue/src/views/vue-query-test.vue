<script setup lang="ts">
import { ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient, createRpcQueryHooks, useTendermintClient } from '../outputosmojs'

const chainName = ref('osmosis')
const { address } = useChain(chainName)

const rpcEndpoint = ref('https://rpc.cosmos.directory/cosmoshub');

// create tendermintClient
const { client } = useTendermintClient({
  rpcEndpoint
})
console.log('[tendermint client]', client)

// create rpcClient by rpcEnpoint
const { data: rpcClient } = useRpcClient({
  rpcEndpoint,
  options: {
    enabled: computed(() => !!rpcEndpoint.value),
  },
});
const hooks = createRpcQueryHooks({ rpc: rpcClient });

const {data, error} = hooks.cosmos.bank.v1beta1.useAllBalances({
  request: {
    address: address || '',
    // denom: chainassets?.assets[0].base as string,
  },
  // options: {
  //   enabled: !!address && !!rpcClient,
  //   // transform the returned balance into a BigNumber
  //   select: ({ balance }) =>
  //     new BigNumber(balance?.amount ?? 0).multipliedBy(
  //       10 ** -COIN_DISPLAY_EXPONENT
  //     ),
  // },
})

console.log('data.>', data)
console.log('error>', error)

const changeChainName = () => {
  chainName.value = 'cosmoshub'
}

</script>

<template>
<div>
  <div>fetching rpcClient:</div>
  <button @click="changeChainName">changeChainName</button>
</div>
</template>

<style scoped></style>
