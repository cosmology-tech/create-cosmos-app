import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { createRpcQueryHooks } from '../../codegen/cosmos/mint/v1beta1/query.rpc.Query'
import { useRpcClient } from '../../codegen';
import { parseAnnualProvisions } from '../../utils/stake-tokens/staking';

export const useAnnualProvisions = (chainName: Ref<string>) => {
  const { rpcEndpoint } = useChain(chainName)

  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)
  const { data } = hooks.useAnnualProvisions<string>({
    request: {
    },
    options: {
      select: parseAnnualProvisions,
      retry: false,
    }
  })

  return {
    data
  }
}