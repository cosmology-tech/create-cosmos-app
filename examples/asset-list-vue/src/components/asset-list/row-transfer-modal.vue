<script setup lang="ts">
import { Modal } from '@interchain-ui/vue'
import { defineProps, ref, computed } from 'vue'
import { TransferInfo } from './assets-overview.vue';
import { useDisclosure } from '../../composables/useDisclosure';
import TransferModalBody from './transfer-modal-body.vue';
import { PriceHash } from '../../utils/types';

export interface IProps {
  prices: PriceHash;
  transferInfo: TransferInfo;
  modalControl: ReturnType<typeof useDisclosure>;
  updateData: () => void;
  selectedChainName: string;
}

const props = defineProps<IProps>()

const inputValue = ref('0.018')
const isOpen = computed(() => {
  return props.modalControl.isOpen.value
})

const closeModal = () => {
  props.modalControl.close()
  inputValue.value = ''
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
      :updateData="updateData"
      :selectedChainName="selectedChainName"
      :input-value="inputValue"
    />
  </Modal>
</template>

<style scoped></style>
