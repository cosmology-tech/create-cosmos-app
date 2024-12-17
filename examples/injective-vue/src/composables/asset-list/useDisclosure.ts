import { ref, Ref } from 'vue'

export const useDisclosure = (isDefaultOpen?: Ref<boolean>) => {
  const isOpen = ref(isDefaultOpen?.value)

  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }
  return {
    isOpen,
    open,
    close
  }
}