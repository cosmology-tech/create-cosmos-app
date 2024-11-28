<script setup lang="ts">
import { Box, Stack, Text, Button } from '@interchain-ui/vue'
import { defineProps } from 'vue'


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
      title
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
          <Text>This is label</Text>
          <Stack
            :attributes="{
              alignItems: 'baseline'
            }"
          >
            <Text fontWeight="$semibold">$</Text>
            <Text fontSize="$4xl" fontWeight="$semibold">
              single chain header value
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
        </Box>
      </Box>
    </Box>
</template>

<style scoped></style>
