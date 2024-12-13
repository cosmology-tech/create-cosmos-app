import { useChain } from '@interchain-kit/vue'
import { Ref, computed } from 'vue'
import { useRpcClient } from '../../outputv4'
import { createRpcQueryHooks } from '../../outputv4/cosmos/authz/v1beta1/query.rpc.Query'
import { GrantAuthorization } from '../../outputv4/cosmos/authz/v1beta1/authz'
import { prettyGrants } from '../../utils/authz/authz'

export const useGrants = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)
  const { data: granterGrants } = hooks.useGranterGrants<GrantAuthorization[]>({
    request: {
      granter: address
    },
    options: {
      // @ts-ignore
      select: ({ grants }) => grants
    }
  })

  const { data: granteeGrants } = hooks.useGranteeGrants<GrantAuthorization[]>({
    request: {
      grantee: address
    },
    options: {
      // @ts-ignore
      select: ({ grants }) => grants
    }
  })

  const granteeGrants$1 = computed(() => {
    return prettyGrants(granteeGrants.value || [], 'granter')
  })

  const granterGrants$1 = computed(() => {
    return prettyGrants(granterGrants.value || [], 'grantee')
  })

  return {
    granteeGrants: granteeGrants$1,
    granterGrants: granterGrants$1
  }
}