<script setup lang="ts">
import { useChain } from '@interchain-kit/vue'
import { WalletState } from '@interchain-kit/core'
import { ref } from 'vue'
import AssetsOverview from './assets-overview.vue';
import { Box, Text } from '@interchain-ui/vue';

export type PrettyAsset = {
  logoUrl: string | undefined;
  symbol: string;
  prettyChainName: string;
  displayAmount: string;
  dollarValue: string;
  amount: string;
  denom: string;
};

const chainName = ref('osmosis')
const { status } = useChain(chainName)

</script>

<template>
  <Box
    v-if="status === WalletState.Disconnected || !status"
    maxWidth="768px" marginX="auto" marginBottom="60px"
  >
    <Text
      fontSize="$xl"
      fontWeight="$semibold"
      :attributes="{ marginBottom: '$10' }"
    >
      My assets
    </Text>
    <Box
      height="160px"
      bg="$cardBg"
      borderRadius="$md"
      p="$6"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="$md" color="$textSecondary">
        Connect the wallet to see the assets
      </Text>
    </Box>
  </Box>
  <Box v-else maxWidth="$containerMd" marginX="auto" marginBottom="$17">
    <AssetsOverview
      :selectedChainName="chainName"
    />
  </Box>
</template>

<style scoped></style>
