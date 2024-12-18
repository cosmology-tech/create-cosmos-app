<script setup lang="ts">
import { Callout, Modal } from '@interchain-ui/vue'
import { ref, inject, defineProps, computed } from 'vue'
import { ExtendedValidator, formatValidatorMetaInfo } from '../../../utils/stake-tokens/staking';
import { useChain } from '@interchain-kit/vue';
import { useAssets } from '../../../composables/common/useAssets';
import { usePrices } from '../../../composables/common/usePrices';
import { useStargateClient } from '../../../composables/common/useStargateClient';
import { useParams } from '../../../composables/stake-tokens/useParams';
import { StakingData } from '../../../views/stake-tokens.vue';
import { calcDollarValue, isGreaterThanZero, shiftDigits} from '../../../utils/stake-tokens/math';
import { cosmos, StdFee } from '../../../codegen';
import { coins } from '@cosmjs/stargate';


const stakingData = inject<StakingData>('stakingData')

const { delegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const props = defineProps<{
  isOpen: boolean;
  selectedValidator: ExtendedValidator;
  logoUrl: string;
  chainName: string;
}>()

const chainName = ref(props.chainName)
const { address } = useChain(chainName)
const { allAssets } = useAssets(chainName)
const { prices } = usePrices(chainName)
const stargazeClient = useStargateClient(chainName)
const isSigning = ref(false)
const amount = ref(0)

const {data: unbondingDays} = useParams(chainName)
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

const handleDelegate = async() => {
  if (!address.value || !amount.value || !exponent.value) return;
  const msg = delegate({
    delegatorAddress: address.value,
    validatorAddress: props.selectedValidator.address,
    amount: {
      amount: shiftDigits(amount.value, exponent.value),
      denom: allAssets[0].base,
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
  <div>header: {{ selectedValidator.name }}</div>
  <div>subtitle: {{ formatValidatorMetaInfo(selectedValidator) }}</div>
  <div><img :src="logoUrl" width="40" /></div>
  <!-- <Text fontSize="$md">{{selectedValidator.description}}</Text> -->
  <Callout
    :title="`Staking will lock your funds for ${unbondingDays} days`"
    intent="error"
    iconName="errorWarningLine"
  >
    You will need to undelegate in order for your staked assets to be
    liquid again. This process will take {unbondingDays} days to complete.
  </Callout>
  <div>
    <b>Your Delegation</b>
    <div>tokenAmount: {{ selectedValidator.delegation }}</div>
    <div>tokenName: {{ allAssets[0].symbol }}</div>
    <b>Available to Delegate</b>
    <div>tokenAmount: {{ stakingData?.balance }}</div>
    <div>tokenName: {{ allAssets[0].symbol }}</div>
  </div>
  <div>
    <h2>input props:</h2>
    <div>
      <img :src="allAssets[0].logo_URIs?.png || allAssets[0].logo_URIs?.svg" width="40">
      <input type="text" v-model="amount" />
      <div>notionalValue: ${{ notionalValue }}</div>
    </div>
  </div>
  <div>
    <button 
      :disabled="!isGreaterThanZero(amount) || isSigning"
      @click="handleDelegate"
    >
      Delegate
    </button>
  </div>
</Modal>
</template>
<style scoped></style>
