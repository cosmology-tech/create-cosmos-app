import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { createRpcQueryHooks } from "../../codegen/osmosis/epochs/query.rpc.Query"
import { EpochInfo } from '../../codegen/osmosis/epochs/genesis'
import { useRpcClient } from '../../codegen'

export const useEpochs = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)
  const { data, refetch } = hooks.useEpochInfos<EpochInfo[]>({
    request: {},
    options: {
      // @ts-ignore
      select: ({ epochs }) => epochs,
    }
  })

  return {
    epochs: data,
    refetch
  }
}