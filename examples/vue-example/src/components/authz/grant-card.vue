<script setup lang="ts">
import { Box, Stack, Text, Button } from '@interchain-ui/vue';
import { defineProps, ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue';
import { PrettyGrant, PrettyPermission } from '../../utils/authz/authz';
import { MsgRevoke } from '../../codegen/cosmos/authz/v1beta1/tx';
import { useAuthzTx } from '../../composables/authz/useAuthzTx';

type GrantCardProps = {
  role: 'granter' | 'grantee';
  grant: PrettyGrant;
  chainName: string;
};

const props = defineProps<GrantCardProps>()
const emits = defineEmits<{
  (event: 'revoke'): void;
}>()

const chainName = ref(props.chainName)
const { chain, logoUrl } = useChain(chainName)
const isRevoking = ref(false)
const revokingPermission = ref()
const { authzTx } = useAuthzTx(chainName)

const isGranter = computed(() => {
  return props.role === 'granter'
})

const handleRevoke = async(permission: PrettyPermission) => {
  console.log('permission>', permission)
  isRevoking.value = true
  const { grantee, granter, name } = permission
  let msgTypeUrl = ''
  if (name === 'Delegate') {
    msgTypeUrl = '/cosmos.staking.v1beta1.MsgDelegate'
  } else if (name === 'Vote') {
    msgTypeUrl = '/cosmos.gov.v1beta1.MsgVote'
  } else if (name === 'Send') {
    msgTypeUrl = '/cosmos.bank.v1beta1.MsgSend'
  }
  if (!msgTypeUrl) {
    console.error('msgTypeUrl is empty.')
    return;
  }
  isRevoking.value = true
  let msg = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    value: MsgRevoke.fromPartial({
      grantee,
      granter,
      msgTypeUrl,
    })
  }
  const res = await authzTx({
    msgs: [msg],
  })
  isRevoking.value = false
  console.log('revoke res>', res)
  emits('revoke')
}

// const onViewDetails = () => {
// }

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
        @click="handleRevoke(permission)"
        :disabled="isRevoking && revokingPermission?.name === permission.name"
      >
        {{permission.name}}
      </Button>
    </Box>
    <!-- <Button intent="tertiary" @click="onViewDetails">
      View Details
    </Button> -->
  </Box>
</Box>
</template>

<style scoped></style>
