<script setup lang="ts">
import { Modal } from '@interchain-ui/vue'
import { defineProps, ref, computed } from 'vue'
import { TransferInfo } from './assets-overview.vue';
import { useDisclosure } from '../../composables/asset-list/useDisclosure';
import TransferModalBody from './transfer-modal-body.vue';
import { PriceHash } from '../../utils/asset-list/types';

export interface IProps {
  prices: PriceHash;
  transferInfo: TransferInfo;
  modalControl: ReturnType<typeof useDisclosure>;
  selectedChainName: string;
}

const props = defineProps<IProps>()
const emits = defineEmits<{
  (event: 'updateData'): void
}>()

const inputValue = ref('0.018')
const isOpen = computed(() => {
  return props.modalControl.isOpen.value
})

const closeModal = () => {
  props.modalControl.close()
  inputValue.value = ''
}

const updateData = () => {
  emits('updateData')
}

</script>

<template>
  <Modal
    header="header"
    :isOpen="isOpen"
    @close="closeModal"
  >
    <TransferModalBody
      :prices="prices"
      :transferInfo="transferInfo"
      :modalControl="modalControl"
      @updateData="updateData"
      :selectedChainName="selectedChainName"
      :input-value="inputValue"
    />
  </Modal>
</template>

<style scoped></style>
