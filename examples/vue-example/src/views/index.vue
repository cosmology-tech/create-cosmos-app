<script setup lang="ts">
import Layout from '@/components/asset-list/common/layout.vue'
import WalletSection from '../components/asset-list/wallet/wallet.vue'

</script>

<template>
<Layout>
  <WalletSection :isMultiChain="false" />
  <div><router-link to="/asset-list">Go to asset list</router-link></div>
  <div><router-link to="/authz">Go to authz</router-link></div>
  <div><router-link to="/voting">Go to voting</router-link></div>
  <div><router-link to="/injective">Go to injective</router-link></div>
  <div><router-link to="/provide-liquidity">Go to provide liquidity</router-link></div>
  <div><router-link to="/stake-tokens">Stake Tokens</router-link></div>
</Layout>
</template>

<style scoped></style>
