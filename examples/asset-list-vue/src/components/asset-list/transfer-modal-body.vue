<script setup lang="ts">
import { Box, Stack, Text, Button } from '@interchain-ui/vue';
import { useChain } from '@interchain-kit/vue';
import { defineProps, computed, ref } from 'vue';
import { TransferInfo } from './assets-overview.vue';
import { PriceHash, Transfer } from '../../utils/types';
import { useBalance } from '../../composables/useBalance';
import BigNumber from 'bignumber.js'
import { useChainUtils } from '../../composables/useChainUtils';

const props = defineProps<{
  prices: PriceHash,
  transferInfo: TransferInfo,
  selectedChainName: string,
}>()
const transferType = computed(() => {
  return props.transferInfo.type
})
const transferToken = computed(() => {
  return props.transferInfo.token
})
const destChainName = computed(() => {
  return props.transferInfo.destChainName
})
const sourceChainName = computed(() => {
  return props.transferInfo.sourceChainName
})
const isDeposit = computed(() => {
  return transferType.value === Transfer.Deposit
})
const { address: sourceAddress, connect: connectSourceChain, chain: sourceChainInfo } = useChain(sourceChainName)
const { address: destAddress, connect: connectDesChain, chain: destChainInfo } = useChain(destChainName)
const selectedChainName = ref(props.selectedChainName)
const { convRawToDispAmount, symbolToDenom, getChainLogo } = useChainUtils(selectedChainName)

const { balance } = useBalance(sourceChainName, transferToken.value.symbol)

const availableAmount = computed(() => {
  if (!isDeposit.value) return transferToken.value.available ?? 0
  console.log('transferInfo.token', props.transferInfo.token)
  return new BigNumber(
      convRawToDispAmount(props.transferInfo.token.symbol, balance.value?.amount || '0')
    ).toNumber();
})

const dollarValue = computed(() => {
  return new BigNumber(1)
    .multipliedBy(props.prices[symbolToDenom(transferToken.value.symbol, props.transferInfo.sourceChainName)])
    .decimalPlaces(6)
    .toNumber();
})

const sourceChain = computed(() => {
  const logo_URIs = getChainLogo(sourceChainName.value)
  return {
      name: sourceChainInfo.value.prettyName,
      address: sourceAddress.value ?? '',
      imgSrc:  logo_URIs?.png || logo_URIs?.svg || '',
    };
})

const destChain = computed(() => {
  const logo_URIs = getChainLogo(destChainName.value)
  return {
    symbol: destChainInfo.value.chainName.toUpperCase(),
    name: destChainInfo.value.prettyName,
    address: destAddress.value ?? '',
    imgSrc: logo_URIs?.png || logo_URIs?.svg || '',
  };
})

const handleSubmitTransfer = async() => {
  
}

</script>

<template>
  <div>transfer modal body</div>
</template>

<style scoped></style>
