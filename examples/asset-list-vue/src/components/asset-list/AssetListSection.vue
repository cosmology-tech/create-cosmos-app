<script setup lang="ts">
import { useChain } from '@interchain-kit/vue'
import { ref, computed } from 'vue'
import { usePrices } from '../../composables/usePrices';
import { osmosis } from 'osmojs'
import { getAssetByDenom, denomToSymbol, calcCoinDollarValue } from '../../utils/chain';
import { useAssets } from '../../composables/useAssets';
import { Coin } from 'osmojs/cosmos/base/v1beta1/coin';
const chainName = ref('osmosis')
const { rpcEndpoint, address } = useChain(chainName)
const allBalance = ref<any>([])

const requestBalances = async () => {
  const { createRPCQueryClient } = osmosis.ClientFactory;
  const client = await createRPCQueryClient({ rpcEndpoint: rpcEndpoint.value });
  let { balances } = await client.cosmos.bank.v1beta1.allBalances({ address: address.value });
  allBalance.value = balances
}

const { allAssets } = useAssets(chainName)
const prices = usePrices(chainName)

const nativeAndIbcBalances = computed<Coin[]>(() => {
  return allBalance.value?.filter(
    ({ denom }: any) => !denom.startsWith('gamm') && prices.value[denom]
  );
})

const finalAssets = nativeAndIbcBalances.value.map(({ amount, denom }) => {
    const asset = getAssetByDenom(denom, allAssets)
    const symbol = denomToSymbol(denom, allAssets);
    const dollarValue = calcCoinDollarValue(prices.value, { amount, denom }, allAssets);
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
</script>

<template>
  <Box maxWidth="$containerMd" marginX="auto" marginBottom="$17">
    <button @click="requestBalances">requestBalances</button>
    <!-- <button @click="getAssets">getAssets</button> -->
  </Box>
</template>

<style scoped></style>
