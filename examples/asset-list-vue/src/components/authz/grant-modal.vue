<script setup lang="ts">
import { Spinner, Box, Text, Modal, Button, FieldLabel } from '@interchain-ui/vue'
import { ref, defineProps, computed } from 'vue';
import { PermissionId, permissions } from '../../utils/authz/permissions';
import { useChain } from '@interchain-kit/vue';
import { GrantMsg, useAuthzTx } from '../../composables/authz/useAuthzTx';
import { coin } from '@cosmjs/amino';
import { shiftDigits } from '../../utils/authz/calc';
import { useAssets } from '../../composables/useAssets';
import { AuthorizationType, authorizationTypeFromJSON } from '../../outputv4/cosmos/staking/v1beta1/authz';
import dayjs from 'dayjs';
import { SendAuthorization } from "../../outputv4/cosmos/bank/v1beta1/authz";
import { GenericAuthorization } from 'osmojs/cosmos/authz/v1beta1/authz';
import { MsgGrant } from '../../outputv4/cosmos/authz/v1beta1/tx';

export type AccessList = {
  type: 'allowList' | 'denyList';
  addresses: string[];
};

type GrantModalProps = {
  isOpen: boolean;
  chainName: string;
};
const props = defineProps<GrantModalProps>()
const emits = defineEmits<{
  (event: 'close'): void;
}>()
const chainName = ref(props.chainName)
const { address } = useChain(chainName)
const granteeAddress = ref('')
const selectedPermissionId = ref<PermissionId>()
const sendLimit = ref<number>(2000)
const delegateLimit = ref<number>(0)
const accessList = ref<AccessList>({
  type: 'allowList',
  addresses: []
})
const expiryDateStr = ref('')
const { authzTx } = useAuthzTx(chainName)

const expiryDate = computed(() => {
  return dayjs(expiryDateStr.value).toDate()
})

const onModalClose = () => {
  emits('close')
}
const { allAssets } = useAssets(chainName)

const exponent = computed(() => {
  return (allAssets[0].denom_units.find((unit) => unit.denom === allAssets[0].display))?.exponent
})

const denom = computed(() => {
  return allAssets[0].base
})

const onGrantClick = async() => {
  if (!address.value || !granteeAddress.value || !expiryDate.value || !selectedPermissionId.value)
    return;
    console.log('address', address)
    console.log('granteeAddress', granteeAddress.value)
    console.log('expiryDate', expiryDate.value)
    console.log('selectedPermission', selectedPermissionId.value)

  // const grantMsg: Record<PermissionId, GrantMsg> = {
  //   send: sendMsg,
  //   delegate: delegateMsg,
  //   vote: { grantType: 'vote' },
  //   'claim-rewards': { grantType: 'claim-rewards' },
  // };

  let msg = '' as any
  if (selectedPermissionId.value === 'send') {
    msg = {
      typeUrl: '/cosmos.authz.v1beta1.MsgGrant',
      value: {
        grant: {
          authorization: {
            typeUrl: '/cosmos.bank.v1beta1.SendAuthorization',
            value: SendAuthorization.encode({
              spendLimit: [coin(shiftDigits(sendLimit.value, exponent.value || 0), denom.value)],
            }).finish()
          },
          expiration: expiryDate.value // TOFIX: always been parsed to `1970-01-01T00:00:00.000Z`, don't know why.
          // expiration: new Date('2024-12-31T23:59:59Z')
          // expiration: {
          //   seconds: Long.fromNumber(Math.floor(new Date("2024-12-31T23:59:59Z").getTime() / 1000)),
          //   nanos: 0,
          // },
          // expiration: new Date('2024-12-31T23:59:59Z').getTime()
          // expiration: new Date("2024-12-31T23:59:59Z").toISOString()
        },
        grantee: granteeAddress.value,
        granter: address.value
      },
    }
  } else if (selectedPermissionId.value === 'vote') {
    msg = {
      typeUrl: '/cosmos.authz.v1beta1.MsgGrant',
      value: MsgGrant.fromPartial({
        grant: {
          authorization: {
            typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
            value: GenericAuthorization.encode({
              msg: '/cosmos.gov.v1beta1.MsgVote'
            }).finish()
          },
          // expiration: new Date("2024-12-31"),
        },
        grantee: granteeAddress.value,
        granter: address.value
      })
    }
  }

  const res = await authzTx({
    msgs: [msg],
  })

  console.log('res>>', res)
}
</script>

<template>
<Modal
  header="header"
  :isOpen="isOpen"
  @close="onModalClose"
>
  <Box
    width="{ mobile: '100%', tablet: '$containerSm' }"
    display="flex"
    flexDirection="column"
    gap="$9"
    pt="$4"
  >
    <label for="granteeAddress">Grantee Address</label>
    <input id="granteeAddress" v-model="granteeAddress" type="text" placeholder="Enter grantee address" />
  </Box>
  <Box>
    <label for="permission">Permission</label>
    <select id="permission" v-model="selectedPermissionId" className="h-9 px-3 mr-4 border rounded-md shadow-sm" placeholder="Select permission">
      <option v-for="permission in permissions" :value="permission.id">{{ permission.name }}</option>
    </select>
    <input v-if="selectedPermissionId === 'send'" type="text" v-model="sendLimit" />
    <label for="date">Select a date:</label>
    <input type="date" id="date" v-model="expiryDateStr" placeholder="Select expiry date"/>
  </Box>
  <Box width="$full" mt="$9">
    <Button
      fluidWidth
      intent="tertiary"
      @click="onGrantClick"
    >
      Grant
    </Button>
  </Box>
</Modal>
</template>

<style scoped></style>
