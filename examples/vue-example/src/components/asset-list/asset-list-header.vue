<script setup lang="ts">
import { Box, Stack, Text, Button } from '@interchain-ui/vue'
import { defineProps } from 'vue'

defineProps<{
  title: string,
  singleChainHeader: any,
}>();

const emit = defineEmits<{
  (event: 'onDeposit'): void;
  (event: 'onWithdraw'): void;
}>();

const handleWithdraw = () => {
  emit('onWithdraw')
}

const handleDeposit = () => {
  emit('onDeposit')
}

</script>

<template>
  <Box
    display="flex"
    flexDirection="column"
  >
    <Text
      fontSize="$xl"
      fontWeight="$semibold"
      :attributes="{
        marginBottom: '$10',
      }"
    >
      {{ title }}
    </Text>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="$10"
        justifyContent="space-between"
        alignItems="center"
        width="auto"
        minHeight="$21"
        py="$10"
        px="$10"
        backgroundColor="$cardBg"
        borderRadius="$lg"
      >
        <Stack direction="vertical">
          <Text>{{ singleChainHeader?.label }}</Text>
          <Stack
            :attributes="{
              alignItems: 'baseline'
            }"
          >
            <Text fontWeight="$semibold">$</Text>
            <Text fontSize="$4xl" fontWeight="$semibold">
              {{ singleChainHeader?.value }}
            </Text>
          </Stack>
        </Stack>
        <Box
          display="flex"
          flex="1"
          alignItems="center"
          :justifyContent="{
            mobile: 'space-between',
            tablet: 'flex-end',
          }"
          :gap="{
            mobile: '$6',
            tablet: '$12',
            desktop: '$12',
          }"
        >
          <Box
            :flex="{
              mobile: '1',
              tablet: '0 0 auto',
            }"
            :width="{
              mobile: 'auto',
              tablet: '$25',
              desktop: '$25',
            }"
          >
            <Button
              variant="outlined"
              intent="secondary"
              fluidWidth
              @click="handleWithdraw"
            >
              Withdraw
            </Button>
          </Box>
          <Box
            :flex="{
              mobile: '1',
              tablet: '0 0 auto',
            }"
            :width="{
              mobile: 'auto',
              tablet: '$25',
              desktop: '$25',
            }"
          >
            <Button
              intent="tertiary"
              fluidWidth
              @click="handleDeposit"
            >
              Deposit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
</template>

<style scoped></style>
