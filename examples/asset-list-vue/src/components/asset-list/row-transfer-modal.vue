<script setup lang="ts">
import { Modal } from '@interchain-ui/vue'
import { defineProps, ref, computed } from 'vue'
import { TransferInfo } from './assets-overview.vue';
import { useDisclosure } from '../../composables/useDisclosure';

const props = defineProps<{
  transferInfo: TransferInfo,
  modalControl: ReturnType<typeof useDisclosure>
}>()

const inputValue = ref('')
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
   {{ JSON.stringify(transferInfo) }} 
   <TransferModalBody />
    <!-- <TransferModalBody
      inputValue={inputValue}
      setInputValue={setInputValue}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      modalControl={{
        ...modalControl,
        close: closeModal,
      }}
    /> -->
  </Modal>
</template>

<style scoped></style>
