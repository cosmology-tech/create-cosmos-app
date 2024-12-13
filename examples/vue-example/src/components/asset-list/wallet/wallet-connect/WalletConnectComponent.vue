<script setup lang="ts">
import { defineProps } from 'vue'
import { Text, Stack } from '@interchain-ui/vue';
const props = defineProps({
  username: String,
})

console.log('username', props.username)
</script>

<template>

</template>

<style scoped></style>
