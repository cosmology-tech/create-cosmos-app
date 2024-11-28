<script setup lang="ts">
import SingleChain from './single-chain.vue';
</script>

<template>
  <SingleChain
    :isLoading="false"
    title="Your assets"
    :listTitle="`On osmosis`"
    :showDeposit="true"
    :showWithdraw="true"
    @onDeposit=""
    @onWithdraw=""
    :singleChainHeader="{
      label: `Total on osmosis`,
      value: '0',
    }"
    :list="[]"
  />
</template>

<style scoped></style>
