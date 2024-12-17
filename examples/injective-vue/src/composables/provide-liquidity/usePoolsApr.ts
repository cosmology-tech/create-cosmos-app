import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { EpochInfo } from '../../codegen/osmosis/epochs/genesis'
import { useRpcClient } from '../../codegen'
import { createRpcQueryHooks as createIncentiveRpcQueryHooks } from '../../codegen/osmosis/incentives/query.rpc.Query'
import { createRpcQueryHooks as createSuperfluidRpcQueryHooks } from '../../codegen/osmosis/superfluid/query.rpc.Query'
import { Duration } from '../../codegen/google/protobuf/duration'
import { SuperfluidAsset } from '../../codegen/osmosis/superfluid/superfluid'

export const usePoolsApr = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const incentiveHooks = createIncentiveRpcQueryHooks(rpcClient)
  const { data: locableDurations } = incentiveHooks.useLockableDurations<Duration[]>({
    request: {},
    options: {
      // @ts-ignore
      select: ({ lockableDurations }) => lockableDurations || [],
    }
  })
  console.log('locableDurations>', locableDurations)

  const superfluidHooks = createSuperfluidRpcQueryHooks(rpcClient)
  const { data: superfluidAsset } = superfluidHooks.useAllAssets<SuperfluidAsset[]>({
    request: {},
    options: {
      // @ts-ignore
      // select: ({ lockableDurations }) => lockableDurations || [],
    }
  })
  console.log('superfluidAsset>', superfluidAsset)

}