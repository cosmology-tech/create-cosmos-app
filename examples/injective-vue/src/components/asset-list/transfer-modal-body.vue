<script setup lang="ts">
import { useChain } from '@interchain-kit/vue';
import { defineProps, computed, ref } from 'vue';
import { Transfer } from '../../utils/asset-list/types';
import { useBalance } from '../../composables/asset-list/useBalance';
import BigNumber from 'bignumber.js'
import { useChainUtils } from '../../composables/common/useChainUtils';
import { IProps } from './row-transfer-modal.vue';
import AssetWithdrawTokens from './asset-withdraw-tokens.vue';
import { coins, StdFee } from '@cosmjs/amino';
import { ibc, cosmos } from 'osmojs';
import { useStargateClient } from '../../composables/common/useStargateClient';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl

interface IBodyProps extends IProps {
  inputValue: string
} 

const props = defineProps<IBodyProps>()
const emits = defineEmits<{
  (event: 'updateData'): void
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

const sourceStargazeClient = useStargateClient(sourceChainName)
console.log('sourceChainName>>', sourceChainName)

const { address: sourceAddress, connect: connectSourceChain, chain: sourceChainInfo } = useChain(sourceChainName)
const { address: destAddress, connect: connectDesChain, chain: destChainInfo } = useChain(destChainName)
const selectedChainName = ref(props.selectedChainName)
const { convRawToDispAmount, symbolToDenom, getChainLogo, getExponentByDenom, getIbcInfo } = useChainUtils(selectedChainName)

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
  if (!sourceAddress.value || !destAddress.value) return;
  const transferAmount = new BigNumber(props.inputValue)
    .shiftedBy(getExponentByDenom(symbolToDenom(transferToken.value.symbol)))
    .toString();
    const { sourcePort, sourceChannel } = getIbcInfo(
    sourceChainName.value,
    destChainName.value
  );

  const fee: StdFee = {
    amount: coins('1000', transferToken.value.denom ?? ''),
    gas: '250000',
  };

  const token = {
    denom: transferToken.value.denom ?? '',
    amount: transferAmount,
  };

  const stamp = Date.now();
  const timeoutInNanos = (stamp + 1.2e6) * 1e6;

  if (!sourceStargazeClient.value) {
    return
  }

  let res = await sourceStargazeClient.value.signAndBroadcast(
    sourceAddress.value,
    [transfer({
      sourcePort,
        sourceChannel,
        sender: sourceAddress.value,
        receiver: destAddress.value,
        token,
        // @ts-ignore
        timeoutHeight: undefined,
        timeoutTimestamp: BigInt(timeoutInNanos),
    })],
    fee
  )
  console.log('res>>', res)
  emits('updateData')
  props.modalControl.close()
}

</script>

<template>
  <AssetWithdrawTokens 
    :fromImgSrc="sourceChain.imgSrc"
    :fromAddress="sourceChain.address"
    :toImgSrc="destChain.imgSrc"
    :toAddress="destChain.address"
    @onTransfer="handleSubmitTransfer"
  />
</template>

<style scoped></style>
