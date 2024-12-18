<script setup lang="ts">
import { Box} from '@interchain-ui/vue'
import { ref, provide } from 'vue'
import { useStakingData } from '../composables/stake-tokens/useStakingData';
import Overview from '../components/stake-tokens/overview.vue';
import { usePrices } from '../composables/common/usePrices';
import AllValidatorsList from '../components/stake-tokens/all-validators-list.vue';
import MyValidatorsList from '../components/stake-tokens/my-validators-list.vue';
import { useValidatorLogos } from '../composables/stake-tokens/useValidatorLogo';
const chainName = ref('osmosis')
const stakingData = useStakingData(chainName)

export type StakingData = ReturnType<typeof useStakingData>

const { rewards, balance, totalDelegated, allValidators, myValidators, refetch } = stakingData
provide('stakingData', stakingData)
const { prices } = usePrices(chainName)
const { data: logos } = useValidatorLogos(chainName, allValidators)
console.log('allValidators', allValidators)
console.log('myValidators', myValidators)

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
  @success="refetch"
/>

<MyValidatorsList
  :logos="logos"
  :validators="myValidators"
  :chainName="chainName"
  @refetch="refetch"
/>

<AllValidatorsList
  :logos="logos"
  :validators="allValidators"
  :chainName="chainName"
  @refetch="refetch"
/>
</Box>
</template>

<style scoped></style>
