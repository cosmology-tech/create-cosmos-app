<script setup lang="ts">
import AssetListHeader from './asset-list-header.vue';
import AssetList from './asset-list.vue';
import { defineProps } from 'vue'
import { Text } from '@interchain-ui/vue';

export interface AssetListItemProps {
  imgSrc: string,
  symbol: string,
  name: string,
  tokenAmount: string,
  tokenAmountPrice: string,
  chainName?: string,
  showDeposit?: boolean,
  showWithdraw?: boolean,
  onDeposit?: Function,
  onWithdraw?: Function
}

defineProps<{
  title: string,
  listTitle: string,
  list: Array<AssetListItemProps>,
  singleChainHeader: Object,
  onDeposit?: () => void,
  onWithdraw?: () => void,
}>();
</script>

<template>
  <AssetListHeader 
    :title="title"
    :singleChainHeader="singleChainHeader"
    @onDeposit="onDeposit"
    @onWithdraw="onWithdraw"
  />
  <Text
    color="$textSecondary"
    fontSize="$lg"
    fontWeight="$semibold"
    :attributes="{
      marginTop: '$10',
      marginBottom: '$9',
    }"
  >
    {{listTitle}}
  </Text>
  <AssetList
    :list-title="listTitle"
    :list="list"
  />
</template>

<style scoped></style>