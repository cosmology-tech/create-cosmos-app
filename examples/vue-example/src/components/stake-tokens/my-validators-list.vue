<script setup lang="ts">
import { Button } from '@interchain-ui/vue'
import { ref, defineProps } from 'vue'
import { ExtendedValidator } from '../../utils/stake-tokens/staking';
import { useAssets } from '../../composables/common/useAssets';
import ValidatorInfoModal from './my-validators-modals/validator-info-modal.vue';
import UndelegateModal from './my-validators-modals/undelegate-modal.vue';
import DelegateModal from './my-validators-modals/delegate-modal.vue';
import RedelegateModal from './my-validators-modals/redelegate-modal.vue';
import SelectValidatorModal from './my-validators-modals/select-validator-modal.vue';

const props = defineProps<{
  validators: ExtendedValidator[],
  logos: {
    [key: string]: string;
  },
  chainName: string
}>()

const emit = defineEmits<{
  (event: 'refetch'): void;
}>();

const chainName = ref(props.chainName)
const { allAssets } = useAssets(chainName)
const validatorModalOpen = ref(false)
const undelegateModalOpen = ref(false)
const delegateModalOpen = ref(false)
const selectValidatorModalOpen = ref(false)
const redelegateModalOpen = ref(false)
const selectedValidator = ref<ExtendedValidator>()
const validatorToRedelegate = ref<ExtendedValidator>()

const openValidatorModal = (validator: ExtendedValidator) => {
  validatorModalOpen.value = true
  selectedValidator.value = validator
}

const handleSelect = (validator: ExtendedValidator) => {
  validatorToRedelegate.value = validator
  redelegateModalOpen.value = true
  selectValidatorModalOpen.value = false
}

</script>
<template>
<h2>My validators</h2>
<table cellpadding="5" cellspacing="0" border="1">
  <thead>
    <tr>
      <th>
        Validator
      </th>
      <th>
        Amount Staked
      </th>
      <th>
        Claimable Rewards
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="validator in validators" :key="validator.name">
      <td>
        {{ validator.name }}
        <img :src="logos?.[validator?.address]" width="40">
      </td>
      <td>
        {{ validator.delegation }}
        {{ allAssets[0].symbol }}
      </td>
      <td>
        {{ validator.reward }}
        {{ allAssets[0].symbol }}
      </td>
      <td>
        <Button @click="openValidatorModal(validator)">Manage</Button>
      </td>
    </tr>
  </tbody>
</table>

<ValidatorInfoModal
  v-if="selectedValidator"
  :is-open="validatorModalOpen"
  @close="validatorModalOpen = false"
  :selectedValidator="selectedValidator"
  :logoUrl="logos?.[selectedValidator?.address]"
  :chainName="chainName"
  @delegate="delegateModalOpen = true"
  @undelegate="undelegateModalOpen = true"
  @redelegate="selectValidatorModalOpen = true"
/>
<UndelegateModal
  v-if="selectedValidator"
  @close="undelegateModalOpen = false"
  :isOpen="undelegateModalOpen"
  :selectedValidator="selectedValidator"
  :logoUrl="logos[selectedValidator.address]"
  :chainName="chainName"
  @success="emit('refetch')"
/>
<DelegateModal
  v-if="selectedValidator"
  @close="delegateModalOpen = false"
  :isOpen="delegateModalOpen"
  :selectedValidator="selectedValidator"
  :logoUrl="logos[selectedValidator.address]"
  :chainName="chainName"
  @success="emit('refetch')"
/>
<SelectValidatorModal 
  :is-open="selectValidatorModalOpen"
  @click="selectValidatorModalOpen = false"
  @select="handleSelect"
  :logos="logos"
  :chainName="chainName"
/>
<RedelegateModal 
  v-if="validatorToRedelegate && selectedValidator"
  @close="redelegateModalOpen = false"
  :is-open="redelegateModalOpen"
  :selectedValidator="selectedValidator"
  :validator-to-redelegate="validatorToRedelegate"
  :chain-name="chainName"
  @success="emit('refetch')"
/>
</template>

<style scoped></style>
