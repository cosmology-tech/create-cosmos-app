import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { Pool } from '../../codegen/cosmos/staking/v1beta1/staking';

export const usePool = (chainName: Ref<string>) => {
  const { rpcEndpoint } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });


  const hooks = createRpcQueryHooks(rpcClient)
  const { data: pool } = hooks.usePool<Pool>({
    request: {
    },
    options: {
      // @ts-ignore
      select: ({ pool }) => pool,
    }
  })
  return {
    pool
  }
}