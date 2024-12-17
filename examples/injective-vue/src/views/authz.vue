<script setup lang="ts">
import { Box, Button } from '@interchain-ui/vue'
import { ref, computed } from 'vue'
import Grants from '../components/authz/grants.vue';
import GrantModal from '../components/authz/grant-modal.vue';

const chainName = ref('osmosis')
const isModalOpen = ref(false)
const grantsRef = ref(null)

enum GRANT_VALUES {
  GRANTEE = '0',
  GRANTER = '1'
}

const activeOption = ref(GRANT_VALUES.GRANTEE)
const options = [
  { value: GRANT_VALUES.GRANTEE, label: 'grants to me' },
  { value: GRANT_VALUES.GRANTER, label: 'grants by me' },
]

const onGrant = () => {
  if (grantsRef.value) {
    // @ts-ignore
    grantsRef.value?.refetch?.()
    isModalOpen.value = false
  }
}

const role = computed(() => {
  return activeOption.value === GRANT_VALUES.GRANTER ? 'granter' : 'grantee'
})
</script>

<template>
<Box mb="$18" minHeight="500px" display="flex" flexDirection="column">
  <div>
    <Button @click="isModalOpen = true">Create Grant</Button>
  </div>
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    mb="$16"
  >
    <div v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="option.value"
        :value="option.value"
        v-model="activeOption"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </Box>
  <Grants
    ref="grantsRef"
    :role="role"
    :chainName="chainName"
  />
  <GrantModal
    :isOpen="isModalOpen"
    :chainName="chainName"
    @ongrant="onGrant"
    @close="isModalOpen = false"
  />
</Box>
</template>

<style scoped></style>
