<script setup lang="ts">
import { Box } from '@interchain-ui/vue'
import { ref, defineProps, computed } from 'vue'
import { ParsedRewards } from '../../utils/stake-tokens/staking';
import { Prices } from '../../composables/common/usePrices';
import { useAssets } from '../../composables/common/useAssets';
import { sum, calcDollarValue, isGreaterThanZero } from '../../utils/stake-tokens/math';
import { useChain } from '@interchain-kit/vue';
import { cosmos, StdFee } from '../../codegen';
import { useStargateClient } from '../../composables/common/useStargateClient';
import { coins } from '@cosmjs/stargate';

const { withdrawDelegatorReward } =
  cosmos.distribution.v1beta1.MessageComposer.fromPartial;
  
const props = defineProps<{
  balance: string,
  rewards: ParsedRewards,
  staked: string,
  chainName: string,
  prices: Prices
}>()

const emit = defineEmits<{
  (event: 'success'): void;
}>();

const chainName = ref(props.chainName)
const { allAssets } = useAssets(chainName)
const { address } = useChain(chainName)
const isClaiming = ref(false)
const stargazeClient = useStargateClient(chainName)
const totalAmount = computed(() => {
  return sum(props.balance, props.staked, props.rewards?.total ?? 0)
})

const onClaimRewardClick = async () => {

  isClaiming.value = true
  if (!address.value) return;

  const msgs = props.rewards.byValidators.map(({ validatorAddress }) =>
    withdrawDelegatorReward({
      delegatorAddress: address.value,
      validatorAddress,
    })
  );

  console.log('msgs>>', msgs)
  
  const gasEstimate = await stargazeClient.value.simulate(
    address.value,
    msgs,
  );
  const gasLimit = Math.ceil(gasEstimate * 1.2);
  console.log('gasLimit>', gasLimit)

  const fee: StdFee = {
    amount: coins('1000', allAssets[0].base),
    gas: String(gasLimit)
  }

  isClaiming.value = true
  try {
    const res = await stargazeClient.value.signAndBroadcast(
      address.value,
      msgs,
      fee
    )
    console.log('[signAndBroadcast result]', res)
    emit('success')
  } catch(e) {
    console.error(e)
  } finally {
    isClaiming.value = false
  }
};

</script>
<template>
<Box :mb="{ mobile: '$8', tablet: '$12' }">
  <div>
    StakingAssetHeader
    <img :src="allAssets[0]?.logo_URIs?.svg || allAssets[0]?.logo_URIs?.svg" width="30" />
    <div>symbol: {{ allAssets[0]?.symbol }}</div>
    <div>totalAmount: {{ totalAmount }}</div>
    <div>totalPrice: ${{ calcDollarValue(allAssets[0].base, totalAmount, prices) }}</div>
    <div>available: {{ balance || 0 }}</div>
    <div>availablePrice: ${{ calcDollarValue(allAssets[0].base, balance, prices) }}</div>
  </div>
</Box>
<Box :mb="{ mobile: '$12', tablet: '$14' }">
  <div>symbol: {{ allAssets[0]?.symbol }}</div>
  <div>rewardsAmount: {{ rewards.total }}</div>
  <div>stakedAmount: {{ staked }}</div>
  <button @click="onClaimRewardClick" :disabled="!isGreaterThanZero(rewards.total) || isClaiming">claim</button>
</Box>
</template>

<style scoped></style>
