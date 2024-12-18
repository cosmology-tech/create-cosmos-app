<script setup lang="ts">
import { Button, Modal } from '@interchain-ui/vue'
import { ref, defineProps, inject, computed } from 'vue'
import { StakingData } from '../../../views/stake-tokens.vue';
import { useAssets } from '../../../composables/common/useAssets';
import { shiftDigits } from '../../../utils/stake-tokens/math';
import { ExtendedValidator } from '../../../utils/stake-tokens/staking';

const stakingData = inject<StakingData>('stakingData')
const props = defineProps<{
  isOpen: boolean;
  logos: {
    [key: string]: string;
  };
  chainName: string;
}>()
const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'select', payload: ExtendedValidator): void;
}>();

const closeModal = () => {
  emit('close')
}
const chainName = ref(props.chainName)
const { allAssets } = useAssets(chainName)

const allValidators = computed(() => {
  if (stakingData?.allValidators?.value) {
    return stakingData.allValidators.value
  }
  return []
})

</script>
<template>
<Modal
  header="header"
  :isOpen="isOpen"
  @close="closeModal"
>
  <h2>Redelegate to</h2>
  <div style="height: 500px; overflow: scroll;">
    <table cellpadding="5" cellspacing="0" border="1">
      <thead>
        <tr>
          <th>
            Validator
          </th>
          <th>
            Voting Power
          </th>
          <th>
            Commission
          </th>
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="validator in allValidators" :key="validator.name">
          <td>
            {{ validator.name }}
            <img v-if="validator?.address && logos" :src="logos[validator.address]" width="40">
          </td>
          <td>
            {{ validator.votingPower }}
            {{ allAssets[0].symbol }}
          </td>
          <td>
            {{shiftDigits(validator.commission, 2)}}%
          </td>
          <td>
            <Button @click="emit('select', validator)">select</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</Modal>
</template>
<style scoped></style>
