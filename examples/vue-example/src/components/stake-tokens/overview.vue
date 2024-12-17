<script setup lang="ts">
import { Box} from '@interchain-ui/vue'
import { ref, defineProps, computed } from 'vue'
import { ParsedRewards } from '../../utils/stake-tokens/staking';
import { Prices } from '../../composables/common/usePrices';
import { useAssets } from '../../composables/common/useAssets';
import { sum, calcDollarValue, isGreaterThanZero } from '../../utils/stake-tokens/math';
const props = defineProps<{
  balance: string,
  rewards: ParsedRewards,
  staked: string,
  chainName: string,
  prices: Prices
}>()

const chainName = ref(props.chainName)
const { allAssets } = useAssets(chainName)

const totalAmount = computed(() => {
  return sum(props.balance, props.staked, props.rewards?.total ?? 0)
})

const onClaimRewardClick = async () => {
  // setIsClaiming(true);

  // if (!address) return;

  // const msgs = rewards.byValidators.map(({ validatorAddress }) =>
  //   withdrawDelegatorReward({
  //     delegatorAddress: address,
  //     validatorAddress,
  //   })
  // );

  // await tx(msgs, {
  //   onSuccess: updateData,
  // });

  // setIsClaiming(false);
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
  <button @click="onClaimRewardClick" :disabled="!isGreaterThanZero(rewards.total)">claim</button>
</Box>
</template>

<style scoped></style>
