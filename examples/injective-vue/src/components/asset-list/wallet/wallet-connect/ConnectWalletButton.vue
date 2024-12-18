<script setup lang="ts">
import { Link, Text, Box, Container, Button, Icon } from '@interchain-ui/vue';
import { defineProps } from 'vue'
// interface IConnectWalletButton {
//   buttonText?: string;
//   isLoading?: boolean;
//   isDisabled?: boolean;
//   onClickConnectBtn?: React.MouseEventHandler<HTMLButtonElement>;
// }
defineProps({
  buttonText: String,
  isLoading: Boolean,
  isDisabled: Boolean,
})

const emit = defineEmits<{
  (event: 'click'): void;
  // (event: 'connect', value: string): void;
  (event: 'delete', id: number): void;
}>();

const handleClick = () => {
  emit('click')
}

</script>

<template>
  <Button
    fluidWidth
    size="md"
    :isLoading="isLoading"
    :disabled="isDisabled"
    @click="handleClick"
    :attributes="{
      position: 'relative',
    }"
  >
    <div
      :style="{
        borderRadius: '8px',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '0',
        margin: '-1px',
        position: 'absolute',
        backgroundImage: `linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)`,
      }"
    />

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="$4"
      as="span"
      borderRadius="8px"
      :zIndex="1"
    >
      <Box as="span">
        <!-- <IoWallet /> -->
      </Box>

      <Box as="span" fontSize="$md" color="inherit">
        {{ buttonText }}
        <!-- {buttonText ? buttonText : 'Connect Wallet'} -->
      </Box>
    </Box>
  </Button>
</template>

<style scoped></style>
