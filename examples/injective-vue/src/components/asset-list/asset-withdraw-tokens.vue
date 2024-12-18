<script setup lang="ts">
import { Button } from '@interchain-ui/vue'
import { defineProps } from 'vue';

defineProps<{
  fromImgSrc: string
  fromAddress: string
  toImgSrc: string
  toAddress: string
}>();

const emit = defineEmits<{
  (event: 'onChange'): void
  (event: 'onTransfer'): void
  (event: 'onCancel'): void
}>();


const handleSubmitTransfer = () => {
  emit('onTransfer')
}

</script>

<template>
<div>
  <div>
    From:
    <img :src="fromImgSrc" width="40" height="40"/>
    {{ fromAddress }}
  </div>
  <div>
    To
    <img :src="toImgSrc" width="40" height="40"/>
    {{ toAddress }}
  </div>
  <input :value="0.018"/>
  <Button @click="handleSubmitTransfer">Transfer</Button>
</div>
</template>

<style scoped></style>
