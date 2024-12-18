import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/cosmos/distribution/v1beta1/query.rpc.Query';
import { ParsedRewards, parseRewards } from '../../utils/stake-tokens/staking';
import { useAssets } from '../common/useAssets';

export const useDelegationTotalRewards = (chainName: Ref<string>) => {
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
  const { data, refetch } = hooks.useDelegationTotalRewards<ParsedRewards>({
    request: {
      delegatorAddress: address
    },
    options: {
      // @ts-ignore
      select: (data) => parseRewards(data, allAssets[0].base, -exp.value),
    }
  })

  return {
    data,
    refetch
  }
}