import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue'
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/cosmos/bank/v1beta1/query.rpc.Query';

export const getPagination = (limit: bigint) => ({
  limit,
  key: new Uint8Array(),
  offset: 0n,
  countTotal: true,
  reverse: false,
});

export const useBalances = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });


  const hooks = createRpcQueryHooks(rpcClient)
  const { data: balances, refetch } = hooks.useAllBalances({
    request: {
      address,
      pagination: computed(() => getPagination(100n))
    }
  })

  return {
    balances,
    refetch
  }
}