<script setup lang="ts">
import Layout from '@/components/asset-list/common/layout.vue'
import WalletSection from '../components/asset-list/wallet/wallet.vue'

</script>

<template>
<Layout>
  <WalletSection :isMultiChain="false" />
  <div><router-link to="/injective">Go to injective</router-link></div>
</Layout>
</template>

<style scoped></style>
