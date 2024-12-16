<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { usePrices } from '../../composables/usePrices';
import { useAssets } from '../../composables/useAssets';
import { useEpochs } from '../../composables/provide-liquidity/useEpochs';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useRewards } from '../../composables/provide-liquidity/useRewards';
import { useRewards2 } from '../../composables/provide-liquidity/useRewards2';

dayjs.extend(duration);

const chainName = ref('osmosis')
const { allAssets } = useAssets(chainName)
const { epochs, refetch: updateEpochs } = useEpochs(chainName)
const countdown = ref(['00', '00', '00'])

watch(epochs, epcs => {
  const currentEpoch = epcs?.find((epoch) => epoch.identifier === 'day')!;
  const startTime = currentEpoch.currentEpochStartTime;
  const duration = Number(currentEpoch.duration?.seconds) || 60 * 60 * 24;
  const endTime = dayjs(startTime).add(duration, 'second');

  const countdownInterval = setInterval(() => {
    if (dayjs().isAfter(endTime)) {
      clearInterval(countdownInterval);
      updateEpochs();
    }

    const leftTime = dayjs.duration(endTime.diff(dayjs())).format('HH:mm:ss');
    countdown.value = leftTime.split(':')
  }, 1000);
    // return () => clearInterval(countdownInterval);
})

const { data: rewards } = useRewards(chainName)

const totalDayReward = computed(() => {
  return rewards.value?.total_day_usd || 0
})

useRewards2(chainName)

const coin = computed(() => {
  return allAssets.find(asset => asset.base === 'uosmo')
})
const {prices, isLoading} = usePrices(chainName)

const osmoPrice = computed(() => {
  if (isLoading.value) {
    return 0
  }
  if (coin.value?.base) {
    return prices.value?.[coin.value.base]
  }
  return 0
})

</script>
<template>
<div>
  <div>OSMO Price ${{Number(osmoPrice).toFixed(2)}}</div>
  <div>Reward distribution in {{countdown[0]}}:{{ countdown[1] }}:{{ countdown[2] }}</div>
  <div>currently earning {{ totalDayReward }}</div>
</div>
</template>

<style scoped></style>
