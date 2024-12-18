<script setup lang="ts">
import { Box, Modal, Button } from '@interchain-ui/vue'
import { ref, defineProps, computed } from 'vue'
import { ExtendedValidator } from '../../../utils/stake-tokens/staking';
import { useAssets } from '../../../composables/common/useAssets';
import { calcDollarValue, shiftDigits } from '../../../utils/stake-tokens/math';
import { usePrices } from '../../../composables/common/usePrices';
import { cosmos, StdFee } from '../../../codegen';
import { useChain } from '@interchain-kit/vue';
import { coins } from '@cosmjs/stargate';
import { useStargateClient } from '../../../composables/common/useStargateClient';

const { beginRedelegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const props = defineProps<{
  isOpen: boolean;
  selectedValidator: ExtendedValidator;
  validatorToRedelegate: ExtendedValidator;
  chainName: string;
}>()

const chainName = ref(props.chainName)
const { address } = useChain(chainName)
const { allAssets } = useAssets(chainName)
const { prices } = usePrices(chainName)
const stargazeClient = useStargateClient(chainName)
const isSigning = ref(false)
const amount = ref(0)
const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'success'): void;
}>();

const closeModal = () => {
  emit('close')
}

const notionalValue = computed(() => {
  if (prices.value && amount.value) {
    return calcDollarValue(allAssets[0].base, amount.value, prices.value)
  }
  return ''
})

const exponent = computed(() => {
  return (allAssets[0].denom_units.find((unit) => unit.denom === allAssets[0].display))?.exponent
})

const handleRedelegate = async() => {
  if (!address.value || !amount.value || !exponent.value) return;
  const msg = beginRedelegate({
    delegatorAddress: address.value,
    validatorSrcAddress: props.selectedValidator.address,
    validatorDstAddress: props.validatorToRedelegate.address,
    amount: {
      denom: allAssets[0].base,
      amount: shiftDigits(amount.value, exponent.value),
    },
  });
  console.log('msg>>', msg)
  
  const gasEstimate = await stargazeClient.value.simulate(
    address.value,
    [msg],
  );
  const gasLimit = Math.ceil(gasEstimate * 1.2);
  console.log('gasLimit>', gasLimit)

  const fee: StdFee = {
    amount: coins('1000', allAssets[0].base),
    gas: String(gasLimit)
  }

  isSigning.value = true
  try {
    const res = await stargazeClient.value.signAndBroadcast(
      address.value,
      [msg],
      fee
    )
    console.log('[signAndBroadcast result]', res)
    emit('success')
    closeModal()
  } catch(e) {
    console.error(e)
  } finally {
    isSigning.value = false
  }
}

</script>
<template>
<Modal
  header="header"
  :isOpen="isOpen"
  @close="closeModal"
>
  <Box :width="{ mobile: '100%', tablet: '$containerSm' }" mt="$6">
    <b>From: {{ selectedValidator.name }}</b>
    <div>
      Your delegation
      <div>tokenAmount: {{selectedValidator.delegation}}</div>
      <div>tokenName: {{ allAssets[0].symbol }}</div>
    </div>
    <b>To: {{ validatorToRedelegate.name }}</b>
  </Box>
  <div>
    <img :src="allAssets[0].logo_URIs?.png || allAssets[0].logo_URIs?.svg" width="40">
    <input type="text" v-model="amount" />
    <div>notionalValue: ${{ notionalValue }}</div>
  </div>
  <Box mt="$12">
    <Button
      intent="tertiary"
      fluidWidth
      @click="handleRedelegate"
    >
      Redelegate
    </Button>
  </Box>
</Modal>
</template>
<style scoped></style>
