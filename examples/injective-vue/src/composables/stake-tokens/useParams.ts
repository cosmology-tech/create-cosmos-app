import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { createRpcQueryHooks } from '../../codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { useRpcClient } from '../../codegen';
import { parseUnbondingDays, parseValidators } from '../../utils/stake-tokens/staking';

export const useParams = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)

  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)
  const { data } = hooks.useParams({
    request: {
    },
    options: {
      // @ts-ignore
      select: ({ params }) => parseUnbondingDays(params),
    }
  })

  return {
    data
  }
}