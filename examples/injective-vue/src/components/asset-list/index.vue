<script setup lang="ts">
import { Stack, Button } from '@interchain-ui/vue'
import Layout from './common/layout.vue'
</script>

<template>
  <Layout>
    <Stack direction="horizontal" space="$8" :attributes="{
      justifyContent: 'center',
      paddingTop: '$15',
      paddingBottom: '$15',
    }">
      <router-link to="single-chain">
        <Button size="md" intent="secondary" variant="outlined" rightIcon="arrowRightLine">
          Single-Chain
        </Button>
      </router-link>

      <router-link to="multi-chain">
        <Button size="md" intent="primary" rightIcon="arrowRightLine">
          Multi-Chain
        </Button>
      </router-link>
    </Stack>
  </Layout>
</template>

<style scoped></style>
