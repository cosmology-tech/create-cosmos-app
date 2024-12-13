<script setup lang="ts">
import { ref, defineProps, defineExpose } from 'vue'
import { Box } from '@interchain-ui/vue';
import { useGrants } from '../../composables/authz/useGrants';
import GrantCard from './grant-card.vue';
type GrantsProps = {
  role: 'granter' | 'grantee';
  chainName: string;
};

const props = defineProps<GrantsProps>()
const chainName = ref(props.chainName)
const { granteeGrants, granterGrants, refetch } = useGrants(chainName)

defineExpose({
  refetch
})
</script>

<template>
<Box
  width="$full"
  alignSelf="flex-start"
  display="grid"
  :gridTemplateColumns="{ mobile: '1fr', tablet: '1fr 1fr' }"
  gap="$10"
>
  <GrantCard
    v-if="role === 'grantee'"
    v-for="grant in granteeGrants"
    :role="role"
    :grant="grant"
    :chainName="chainName"
  />
  <GrantCard
    v-if="role === 'granter'"
    v-for="grant in granterGrants"
    :role="role"
    :grant="grant"
    @revoke="refetch"
    :chainName="chainName"
  />
</Box>
</template>

<style scoped></style>
