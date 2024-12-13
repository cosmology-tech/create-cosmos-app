<script setup lang="ts">
import { Box, Stack, Text, IconButton, Button } from '@interchain-ui/vue';
import { defineProps, ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue';
import { PrettyGrant } from '../../utils/authz/authz';

type GrantCardProps = {
  role: 'granter' | 'grantee';
  grant: PrettyGrant;
  chainName: string;
};

const props = defineProps<GrantCardProps>()
const chainName = ref(props.chainName)
const { address, chain, logoUrl } = useChain(chainName)
const isCopied = ref(false)

const isGranter = computed(() => {
  return props.role === 'granter'
})

const onViewDetails = () => {

}

</script>

<template>
<Box
  px="$10"
  py="$11"
  backgroundColor="$cardBg"
  borderRadius="$lg"
  width="$full"
>
  <Stack space="$4" :attributes="{ alignItems: 'center', mb: '$10' }">
    <img :src="logoUrl" alt="" width="50">
    <Text fontWeight="$semibold" fontSize="$lg">
      {{chain.prettyName}}
    </Text>
  </Stack>
  <Box position="relative" mb="$10">
    {{ isGranter ? 'Grantee' : 'Granter' }}
    <input type="text" :value="grant.address "/>
    <Box position="absolute" bottom="$2" right="$2">
      <IconButton
        :icon="isCopied ? 'checkLine' : 'copy'"
        size="sm"
        intent="secondary"
        :iconSize="isCopied ? '$xl' : '$md'"
      />
    </Box>
    <Text
      color="$textSecondary"
      fontSize="$sm"
      fontWeight="$semibold"
      lineHeight="$normal"
      :attributes="{ mb: '$6' }"
    >
      Permissions
    </Text>
    <Box
      display="flex"
      gap="$6"
      flexWrap="wrap"
      mb="$12"
      height="$12"
      overflow="hidden"
    >
      <Button
        v-for="permission in grant.permissions"
        :key="permission.name"
        size="sm"
        intent="secondary"
        rightIcon="close"
        iconSize="$lg"
        @click=""
      >
        {{permission.name}}
      </Button>
    </Box>
    <Button intent="tertiary" @click="onViewDetails">
      View Details
    </Button>
  </Box>
</Box>
</template>

<style scoped></style>
