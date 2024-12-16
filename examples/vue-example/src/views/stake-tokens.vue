<script setup lang="ts">
import { Box} from '@interchain-ui/vue'
import { ref } from 'vue'
import { useStakingData } from '../composables/stake-tokens/useStakingData';
import Overview from '../components/stake-tokens/overview.vue';
import { usePrices } from '../composables/usePrices';
const chainName = ref('osmosis')
const { rewards, balance, totalDelegated, allValidators } = useStakingData(chainName)
const { prices } = usePrices(chainName)
console.log('allValidators', allValidators)

</script>
<template>
<Box mb="14" maxWidth="800px" mx="auto">
<Overview
  v-if="prices && balance && rewards"
  :chainName="chainName"
  :rewards="rewards"
  :prices="prices"
  :balance="balance"
  :staked="totalDelegated"
/>
</Box>
</template>

<style scoped></style>
