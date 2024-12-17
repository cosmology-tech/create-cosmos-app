<script setup lang="ts">
import { Box, Stack, Text, Button } from '@interchain-ui/vue';
import { defineProps } from 'vue';
import { AssetListItemProps } from './single-chain.vue';
defineProps<AssetListItemProps>()

const emit = defineEmits<{
  (event: 'onDeposit'): void;
  (event: 'onWithdraw'): void;
}>();

const handleDeposit = () => {
  emit('onDeposit')
}

const handleWithdraw = () => {
  emit('onWithdraw')
}

</script>

<template>
<Stack
  :attributes="{
    minWidth: '720px',
    alignItems: 'center',
  }"
>
  <Box width="$19">
    <img :src="imgSrc" width="40" height="40">
    <!-- <Box
      as="img"
      :attributes="{
        src: imgSrc,
      }"
      width="$14"
      height="$14"
    /> -->
  </Box>
  <Stack
    :attributes="{
      alignItems: 'center',
      flex: 1,
    }"
  >
    <Stack
      space="$0"
      direction="vertical"
      :attributes="{
        width: '25%',
      }"
    >
      <Text
        fontWeight="$semibold"
        fontSize="$xs"
        :attributes="{
          marginBottom: '$2',
        }"
      >
        {{symbol}}
      </Text>
      <Text color="$textSecondary" fontSize="$xs">
        {{name}}
      </Text>
    </Stack>
    <Stack
      space="$0"
      direction="vertical"
      :attributes="{
        width: '25%',
      }"
    >
      <Text
        fontWeight="$semibold"
        fontSize="$xs"
        :attributes="{
          marginBottom: '$2',
        }"
      >
        {{tokenAmount}}
      </Text>
      <Text color="$textSecondary" fontSize="$xs">
        {{tokenAmountPrice}}
      </Text>
    </Stack>
    <Stack
      space="$5"
      :attributes="{
        width: '25%',
        justifyContent: 'flex-end',
      }"
    >
      <Button
        v-if="showDeposit"
        intent="text"
        size="sm"
        @click="handleDeposit"
      >
        deposit
      </Button>
      <Button
        v-if="showWithdraw"
        intent="text"
        size="sm"
        @click="handleWithdraw"
      >
        withdraw
      </Button>
    </Stack>
  </Stack>
</Stack>
</template>

<style scoped></style>
