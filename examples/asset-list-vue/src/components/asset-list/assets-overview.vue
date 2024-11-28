<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import SingleChain from './single-chain.vue';
import { useTotalAssets } from '../../composables/useTotalAssets';
import { PrettyAsset } from './asset-list-section.vue'
import { truncDecimals, formatDollarValue } from '../../utils/format';
import { useAssets } from '../../composables/useAssets';

const chainName = ref('osmosis')
const data = useTotalAssets(chainName)
const { nativeAssets } = useAssets(chainName)
console.log('data>>', data)

const props = defineProps({
  assets: Array<PrettyAsset>,
  prices: Array
})

const isNativeAsset = ({ denom }: PrettyAsset) => {
  return !!nativeAssets.find((asset) => asset.base === denom);
};

const assetsToShow = computed(() => {
  const returnAssets = props.assets?.map((asset) => {
    return {
      imgSrc: asset.logoUrl ?? '',
      symbol: asset.symbol,
      denom: asset.denom,
      name: asset.prettyChainName,
      tokenAmount: truncDecimals(asset.displayAmount, 6),
      tokenAmountPrice: formatDollarValue(asset.dollarValue, asset.amount),
      chainName: asset.prettyChainName,
      showDeposit: !isNativeAsset(asset),
      showWithdraw: !isNativeAsset(asset),
      onDeposit: () => {
        console.log('onDeposit..')
      },
      onWithdraw: () => {
        console.log('onWithdraw..')
      }
    }
  })
  return returnAssets
})
</script>

<template>
  <SingleChain
    :isLoading="false"
    title="Your assets"
    :listTitle="`On osmosis`"
    :showDeposit="true"
    :showWithdraw="true"
    @onDeposit=""
    @onWithdraw=""
    :singleChainHeader="{
      label: `Total on osmosis`,
      value: '0',
    }"
    :list="assetsToShow"
  />
</template>

<style scoped></style>
