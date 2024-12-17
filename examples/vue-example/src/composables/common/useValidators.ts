import { useChain } from '@interchain-kit/vue'
import { Ref, computed } from 'vue'
import { useRpcClient } from '../../codegen'
import { cosmos } from '../../codegen'
import { createRpcQueryHooks } from '../../codegen/cosmos/staking/v1beta1/query.rpc.Query'
import BigNumber from 'bignumber.js';
import { parseValidators } from '../../utils/authz/staking'

export const useValidators = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const hooks = createRpcQueryHooks(rpcClient)

  const { data } = hooks.useValidators<Array<any>>({
    request: {
      status: computed(() => {
        return cosmos.staking.v1beta1.bondStatusToJSON(
          cosmos.staking.v1beta1.BondStatus.BOND_STATUS_BONDED
        )
      }),
      pagination: computed(() => {
        return {
          key: new Uint8Array(),
          offset: 0n,
          limit: 500n,
          countTotal: true,
          reverse: false,
        }
      }),
    },
    options: {
      // @ts-ignore
      select: ({ validators }) => {
        const sorted = validators.sort((a: { tokens: BigNumber.Value }, b: { tokens: BigNumber.Value }) =>
          new BigNumber(b.tokens).minus(a.tokens).toNumber()
        );
        return parseValidators(sorted);
      },
      // queryKeyHashFn: (queryKey: any) => {
      //   return JSON.stringify([...queryKey, chainName]);
      // },
      staleTime: Infinity,
    },
  })

  return {
    validators: computed(() => data.value)
  }
}