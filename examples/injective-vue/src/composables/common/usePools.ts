import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/osmosis/gamm/v1beta1/query.rpc.Query';
import { Pool } from '../../codegen/osmosis/gamm/pool-models/balancer/balancerPool';

export const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

export const usePools = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });


  const hooks = createRpcQueryHooks(rpcClient)
  const { data: pools, refetch } = hooks.usePools<Pool[]>({
    request: {
      pagination: computed((() => getPagination(5000n)))
    },
    options: {
      // @ts-ignore
      select: ({ pools }) => pools || [],
      staleTime: Infinity,
    }
  })
  return {
    pools,
    refetch
  }
}