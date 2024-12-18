<script setup lang="ts">
import { Button } from '@interchain-ui/vue'
import { ref, defineProps } from 'vue'
import { ExtendedValidator } from '../../utils/stake-tokens/staking';
import { useAssets } from '../../composables/common/useAssets';

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
        <Button>Manage</Button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<style scoped></style>
