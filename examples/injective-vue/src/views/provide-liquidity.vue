<script setup lang="ts">
import { Box} from '@interchain-ui/vue'
import { ref } from 'vue'
import { usePoolsApr } from '../composables/provide-liquidity/usePoolsApr';
import Overview from '../components/provide-liquidity/overview.vue';
import { usePoolsData } from '../composables/provide-liquidity/usePoolsData';

const chainName = ref('osmosis')
usePoolsApr(chainName)

usePoolsData(chainName);

</script>
<template>
<Box mb="14" maxWidth="800px" mx="auto">
  <header fontSize="20px" fontWeight="600" mb="28px">
    Liquidity Pools
  </header>
  <Overview />
  <header fontSize="18px" fontWeight="600" mb="20px">
    My Pools
  </header>
  <Box mb="38px">

  </Box>
</Box>
</template>

<style scoped></style>
