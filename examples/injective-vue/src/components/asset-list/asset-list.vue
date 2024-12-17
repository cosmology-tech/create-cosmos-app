<script setup lang="ts">
import { Box, Stack, Text } from '@interchain-ui/vue';
import { defineProps } from 'vue';
import { AssetListItemProps } from './single-chain.vue';
import AssetListItem from './asset-list-item.vue';

defineProps<{
  list: Array<AssetListItemProps>,
  titles?: [string, string],
  attributes?: any,
}>();
</script>

<template>
<Box
  :overflowX="{
    mobile: 'scroll',
    tablet: 'auto',
    desktop: 'auto',
  }"
>
  <Box display="flex" flexDirection="column" minWidth="720px">
    <Stack>
      <Box width="$19" />
      <Stack
        space="$0"
        :attributes="{
          marginBottom: '$12',
          flex: 1,
        }"
      >
        <Text
          color="$textSecondary"
          :attributes="{
            width: '25%',
          }"
        >
          Asset
        </Text>
        <Text
          color="$textSecondary"
          :attributes="{
            width: '25%',
          }"
        >
          Balance
        </Text>
      </Stack>
    </Stack>
    <Stack space="$10" direction="vertical">
      <Box :key="index" v-for="(item, index) in list">
        <AssetListItem
          :imgSrc="item.imgSrc"
          :symbol="item.symbol"
          :name="item.name"
          :tokenAmount="item.tokenAmount"
          :tokenAmountPrice="item.tokenAmountPrice"
          :chainName="item?.chainName"
          :showDeposit="item.showDeposit"
          :showWithdraw="item.showWithdraw"
          @onDeposit="() => {item.onDeposit?.()}"
          @onWithdraw="() => {item.onWithdraw?.()}"
        />
      </Box>
    </Stack>
  </Box>
</Box>
</template>

<style scoped></style>
