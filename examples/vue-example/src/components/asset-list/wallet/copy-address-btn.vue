<script setup lang="ts">
import { Stack, ClipboardCopyText, Box } from '@interchain-ui/vue'
import { defineProps } from 'vue'

const props = defineProps({
  address: String,
});

</script>

<template>
  <Stack direction="vertical">
    <Box
      borderRadius="$full"
      width="100%"
      height="100%"
      marginRight="$4"
      :opacity="0.85"
    >
      <!-- <img src={walletIcon} alt={displayAddress} /> -->
    </Box>
    <ClipboardCopyText
      :text="address || ''"
      truncate="middle"
      midTruncateLimit="md"
    />
  </Stack>
</template>

<style scoped></style>
