<script setup lang="ts">
import Layout from '@/components/common/Layout.vue'
import WalletSection from '@/components/wallet/Wallet.vue'
import AssetListSection from '@/components/asset-list/AssetListSection.vue';

</script>

<template>
  <Layout>
    <WalletSection :isMultiChain="false" />
    <AssetListSection  />
  </Layout>
</template>

<style scoped></style>
