<script setup lang="ts">
import { Button } from '@interchain-ui/vue'
import { ref, defineProps } from 'vue'
import { ExtendedValidator } from '../../utils/stake-tokens/staking';
import { useAssets } from '../../composables/common/useAssets';
import { shiftDigits } from '../../utils/stake-tokens/math';

const props = defineProps<{
  validators: ExtendedValidator[],
  logos: {
    [key: string]: string;
  },
  chainName: string
}>()

const chainName = ref(props.chainName)
const { allAssets } = useAssets(chainName)
</script>
<template>
<h2>All validators</h2>
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
    <tr v-for="validator in validators" :key="validator.name">
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
        <Button>Manage</Button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<style scoped></style>
