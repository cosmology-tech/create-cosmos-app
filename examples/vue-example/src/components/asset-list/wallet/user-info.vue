<script setup lang="ts">
import { defineProps } from 'vue'
import { Box, Text, Stack } from '@interchain-ui/vue';
import Astronaut from './astronaut.vue';
const props = defineProps({
  username: String,
})

console.log('username', props.username)
</script>

<template>
  <Stack 
    direction="vertical"
    space="1"
    :attributes="{
      alignItems: 'center',
    }"
  >
    <Box
      display="block"
      :width="{
        mobile: '$12',
        tablet: '$16',
      }"
      :height="{
        mobile: '$12',
        tablet: '$16',
      }"
      borderRadius="$full"
      overflow="hidden"
    >
      <Astronaut />
    </Box>
    <Text 
      fontWeight="$semibold">
      {{ username }}
    </Text>
  </Stack>
</template>

<style scoped></style>
