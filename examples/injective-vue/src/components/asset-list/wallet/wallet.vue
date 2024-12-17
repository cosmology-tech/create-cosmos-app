<script setup lang="ts">
import { Stack, Box } from '@interchain-ui/vue';
import ChainCard from './chain-card.vue'
import { defineProps, ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { WalletState } from '@interchain-kit/core'
import { defaultChainName } from '@/config/asset-list/defaults';
import UserInfo from './user-info.vue'
import ConnectWalletButton from './wallet-connect/ConnectWalletButton.vue';
import CopyAddressBtn from './copy-address-btn.vue';

defineProps({
  prettyName: String,
})

const chainName = ref(defaultChainName)
const chainInfo = useChain(chainName)
const { username, logoUrl, connect, status, address, openView } = chainInfo

console.log('chainInfo', chainInfo, username)

const handleWalletBtnClick = () => {
  if (status.value === WalletState.Disconnected) {
    connect.value()
  } else if (status.value === WalletState.Connected) {
    openView()
  } else {
    connect.value()
  }
}

const buttonText = computed(() => {
  switch(status.value) {
    case WalletState.Disconnected || undefined:
      return 'Connect Wallet';
    case WalletState.Connected:
      return 'My Wallet'
    default:
      return 'Connect Wallet'
  }
})

</script>

<template>
  <Box display="flex" justifyContent="center" alignItems="center" py="$12" width="100%" :attributes="{
    'data-part-id': 'wallet-section',
  }">
    <Box display="grid" width="$full" :maxWidth="{
      mobile: '100%',
      tablet: '450px',
    }" gridTemplateColumns="1fr" rowGap="$10" alignItems="center" justifyContent="center">
      <Box marginBottom='$9'>
        <ChainCard :prettyName="defaultChainName" :icon="logoUrl" />
      </Box>

      <Box :px="6">
        <Stack direction="vertical" :attributes="{
          px: '$2',
          py: '$12',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '$lg',
          backgroundColor: '$white',
          boxShadow:'0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3'
        }" space="$8">
          <UserInfo :username="username" />
          <!-- {addressBtn} -->
          <CopyAddressBtn :address="address" />
          <Box width="100%" maxWidth="200px" :attributes="{ id: 'connect-button' }"
          >
            <ConnectWalletButton 
              :button-text="buttonText"
              @click="handleWalletBtnClick"
            />
          </Box>

          <!-- {connectWalletWarn} -->
        </Stack>
      </Box>
    </Box>
  </Box>
</template>

<style scoped></style>
