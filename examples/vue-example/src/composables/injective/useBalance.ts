
import { Ref, computed } from 'vue'
import { useChain } from '@interchain-kit/vue';
import { useRpcClient } from '../../codegen';
import { createRpcQueryHooks } from '../../codegen/cosmos/bank/v1beta1/query.rpc.Query';
import { useAssets } from '../common/useAssets';
import BigNumber from "bignumber.js";

export const useBalance = (chainName: Ref<string>) => {
  const { rpcEndpoint, address } = useChain(chainName)
  const { allAssets } = useAssets(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });

  const COIN_DISPLAY_EXPONENT = allAssets[0]!.denom_units.find(
    (unit) => unit.denom === allAssets[0]!.display
  )?.exponent as number;

  const hooks = createRpcQueryHooks(rpcClient)
  const { data: balance, isLoading, refetch } = hooks.useBalance<any>({
    request: {
      address,
      denom: computed(() => allAssets[0].base)
    },
    options: {
      enabled: !!address && !!rpcClient,
      // @ts-ignore
      select: ({ balance }) =>
        new BigNumber(balance?.amount ?? 0).multipliedBy(
          10 ** -COIN_DISPLAY_EXPONENT
        ),
    }
  })

  return {
    balance,
    isLoading,
    COIN_DISPLAY_EXPONENT,
    symbol: allAssets[0].symbol,
    denom: allAssets[0].base,
    refetch
  }
}
