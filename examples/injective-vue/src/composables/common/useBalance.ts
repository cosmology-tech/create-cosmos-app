import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/cosmos/bank/v1beta1/query.rpc.Query';
import { useAssets } from './useAssets';
import { shiftDigits } from '../../utils/stake-tokens/math';

export const useBalance = (chainName: Ref<string>) => {
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
  const { data, isLoading } = hooks.useBalance<string>({
    request: {
      address,
      denom: computed(() => allAssets[0].base)
    },
    options: {
      // @ts-ignore
      select: ({ balance }) => shiftDigits(balance?.amount || '0', -exp.value),
    }
  })

  return {
    data,
    isLoading
  }
}