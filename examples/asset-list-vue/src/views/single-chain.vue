<script setup lang="ts">
import Layout from '@/components/common/layout.vue'
import WalletSection from '@/components/wallet/wallet.vue'
import AssetListSection from '@/components/asset-list/asset-list-section.vue';

</script>

<template>
  <Layout>
    <WalletSection :isMultiChain="false" />
    <AssetListSection  />
  </Layout>
</template>

<style scoped></style>
