import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { ParsedDelegations, parseDelegations } from '../../utils/stake-tokens/staking';
import { useAssets } from './useAssets';

export const useDelegatorDelegations = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { allAssets } = useAssets(chainName)
  const exp = computed(() => {
    return allAssets[0].denom_units.find(
      (unit) => unit.denom === allAssets[0].display
    )?.exponent as number
  })
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)
  const { data, refetch } = hooks.useDelegatorDelegations<ParsedDelegations>({
    request: {
      delegatorAddr: address,
      pagination: computed(() => {
        return {
          key: new Uint8Array(),
          offset: 0n,
          limit: 100n,
          countTotal: true,
          reverse: false,
        }
      })
    },
    options: {
      // @ts-ignore
      select: ({ delegationResponses }) => parseDelegations(delegationResponses, -exp.value)
    }
  })
  return {
    data,
    refetch
  }
}