<script setup lang="ts">
import { Box, Modal } from '@interchain-ui/vue'
import { ref, defineProps } from 'vue'
import { ExtendedValidator, formatValidatorMetaInfo } from '../../../utils/stake-tokens/staking';
import { useAssets } from '../../../composables/common/useAssets';

const props = defineProps<{
  isOpen: boolean;
  selectedValidator: ExtendedValidator;
  logoUrl: string;
  chainName: string;
}>()
const chainName = ref(props.chainName)
const { allAssets } = useAssets(chainName)

const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'undelegate'): void;
  (event: 'delegate'): void;
  (event: 'redelegate'): void;
}>();

const closeModal = () => {
  emit('close')
}

</script>
<template>
<Modal
  header="header"
  :isOpen="isOpen"
  @close="closeModal"
>
  <Box :width="{ mobile: '100%', tablet: '$containerSm' }">
    <div>header: {{ selectedValidator.name }}</div>
    <div>subtitle: {{ formatValidatorMetaInfo(selectedValidator) }}</div>
    <div><img :src="logoUrl" width="40" /></div>
    <div>description: {{ selectedValidator.description }}</div>
    <div>You Delegation: {{ selectedValidator.delegation }} {{ allAssets[0]?.symbol }}</div>
    <div style="display: flex;">
      <button @click="closeModal();emit('undelegate')">Undelegate</button>
      <button @click="closeModal();emit('redelegate')" style="margin-left: 100px;">Redelegate</button>
      <button @click="closeModal();emit('delegate')" style="margin-left: 100px;">Delegate</button>
    </div>
  </Box>
</Modal>
</template>

<style scoped></style>
