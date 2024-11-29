<script setup lang="ts">
import { useChain } from '@interchain-kit/vue'
import { WalletState } from '@interchain-kit/core'
import { ref, computed, watch } from 'vue'
import { usePrices } from '../../composables/usePrices';
import { osmosis } from 'osmojs'
import {  } from '../../utils/chain';
import { useAssets } from '../../composables/useAssets';
import { Coin } from 'osmojs/cosmos/base/v1beta1/coin';
import BigNumber from 'bignumber.js';
import AssetsOverview from './assets-overview.vue';
import { Box, Text } from '@interchain-ui/vue';
import { useChainUtils } from '../../composables/useChainUtils';

export type PrettyAsset = {
  logoUrl: string | undefined;
  symbol: string;
  prettyChainName: string;
  displayAmount: string;
  dollarValue: string;
  amount: string;
  denom: string;
};

const chainName = ref('osmosis')
const { rpcEndpoint, address, status } = useChain(chainName)
const { 
  getAssetByDenom, denomToSymbol, calcCoinDollarValue,
  getPrettyChainName, convRawToDispAmount
} = useChainUtils(chainName);
const allBalance = ref<any>([])

const requestBalances = async (rpcEndpoint: string) => {
  const { createRPCQueryClient } = osmosis.ClientFactory;
  const client = await createRPCQueryClient({ rpcEndpoint });
  let { balances } = await client.cosmos.bank.v1beta1.allBalances({ address: address.value });
  allBalance.value = balances
}

watch(rpcEndpoint, endpoint => {
  if (endpoint) {
    requestBalances(endpoint as string)
  }
})

const prices = usePrices(chainName)

const nativeAndIbcBalances = computed<Coin[]>(() => {
  return allBalance.value?.filter(
    ({ denom }: any) => !denom.startsWith('gamm') && prices.value[denom]
  ) || [];
})

const finalAssets = computed<PrettyAsset[]>(() => {
  const res = nativeAndIbcBalances.value
  .map(({ amount, denom }) => {
    const asset = getAssetByDenom(denom)
    const symbol = denomToSymbol(denom);
    const dollarValue = calcCoinDollarValue(prices.value, { amount, denom });
    return {
      symbol,
      logoUrl: asset.logo_URIs?.png || asset.logo_URIs?.svg || '',
      prettyChainName: getPrettyChainName(denom) || '',
      displayAmount: convRawToDispAmount(denom, amount, chainName.value),
      dollarValue,
      amount,
      denom,
    };
  })
  .sort((a, b) =>
    new BigNumber(a.dollarValue).lt(b.dollarValue) ? 1 : -1
  );
  return res;
})

console.log('allBalance', allBalance)
console.log('nativeAndIbcBalances', nativeAndIbcBalances)
console.log('finalAssets', finalAssets)
</script>

<template>
  <Box
    v-if="status === WalletState.Disconnected || !status"
    maxWidth="768px" marginX="auto" marginBottom="60px"
  >
    <Text
      fontSize="$xl"
      fontWeight="$semibold"
      :attributes="{ marginBottom: '$10' }"
    >
      My assets
    </Text>
    <Box
      height="160px"
      bg="$cardBg"
      borderRadius="$md"
      p="$6"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="$md" color="$textSecondary">
        Connect the wallet to see the assets
      </Text>
    </Box>
  </Box>
  <Box v-else maxWidth="$containerMd" marginX="auto" marginBottom="$17">
    <AssetsOverview
      :isLoading="finalAssets.length === 0 || prices.length === 0"
      :assets="finalAssets"
      :prices="prices"
      :selectedChainName="chainName"
    />
  </Box>
</template>

<style scoped></style>
