import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/cosmos/distribution/v1beta1/query.rpc.Query';
import { shiftDigits } from '../../utils/stake-tokens/math';

export const useCommunityTax = (chainName: Ref<string>) => {
  const { rpcEndpoint } = useChain(chainName)

  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)
  const { data } = hooks.useParams<string>({
    options: {
      // @ts-ignore
      select: ({ params }) => shiftDigits(params?.communityTax || '0', -18),
    }
  })
  return {
    data
  }
}