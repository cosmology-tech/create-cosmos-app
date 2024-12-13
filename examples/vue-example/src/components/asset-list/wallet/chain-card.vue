<script setup lang="ts">
import { Link, Text, Box, Container, Button, Icon } from '@interchain-ui/vue';
import { defineProps } from 'vue'
defineProps({
  icon: String,
  prettyName: String,
})
interface IChainCard {
  prettyName: string;
  icon?: string;
}
</script>

<template>
  <Box display="flex" alignItems="center" justifyContent="center" gap="$4" overflow="hidden" wordBreak="break-word"
    color="$blackAlpha800" width="100%">
    <Box minWidth="$10" minHeight="$10" maxWidth="$10" maxHeight="$10" width="100%" height="100%" borderWidth="1px"
      borderStyle="solid" borderColor="$blackAlpha200" :border="'1px solid'" borderRadius="$full" overflow="hidden">
      <img :width="24" :height="24" alt="chain icon" :src="icon || 'https://dummyimage.com/150/9e9e9e/ffffff&text=☒'" />
    </Box>

    <Text fontSize="$xl" fontWeight="$semibold">
      {{ prettyName }}
    </Text>
  </Box>
</template>

<style scoped></style>
