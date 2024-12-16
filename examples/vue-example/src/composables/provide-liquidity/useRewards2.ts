import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
// import { createRpcQueryHooks } from "../../codegen/osmosis/incentives/query.rpc.Query"
import { createRpcQueryHooks } from '../../codegen/osmosis/pool-incentives/v1beta1/query.rpc.Query'
import { EpochInfo } from '../../codegen/osmosis/epochs/genesis'
import { useRpcClient } from '../../codegen'

export const useRewards2 = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)
  const { data } = hooks.useIncentivizedPools({
    request: {
    }
  })
  console.log('aaaa', data)

  // const { data } = hooks.usePool({
  //   request: {}
  // })
  // hooks.useRewardsEst({
  //   request: {
  //     owner: address,
  //     lockIds: computed(() => ['cl/pool/1066']),
  //     endEpoch: null
  //   }
  // })

}