// import { useGetBalance } from 'interchainjs/cosmos/bank/v1beta1/query.rpc.func'
import { defaultRpcEndpoint as rpcEndpoint } from '@/config';
// import { defaultContext } from '@tanstack/react-query'
import BigNumber from "bignumber.js";
import { defaultAssetList } from "@/config";
import { createRpcQueryHooks, useRpcClient } from '../src/codegen';

export default function useBalance({
  address,
}:{
  address: string,
}) {

  const coin = defaultAssetList?.assets[0];

  const denom = coin!.base!

  const COIN_DISPLAY_EXPONENT = coin!.denomUnits.find(
    (unit) => unit.denom === coin!.display
  )?.exponent as number;

  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: !!rpcEndpoint && !!address,
    },
  });
  
  const hooks = createRpcQueryHooks({ rpc: rpcClient });

  const {
    data: balance,
    isSuccess: isBalanceLoaded,
    isLoading: isFetchingBalance,
    refetch: refetchBalance,
  } = hooks.useBalance({
    request: {
      address: address || '',
      denom,
    },
    options: {
      enabled: !!address && !!rpcClient,
      // transform the returned balance into a BigNumber
      select: ({ balance }) =>
        new BigNumber(balance?.amount ?? 0).multipliedBy(
          10 ** -COIN_DISPLAY_EXPONENT
        ),
    }
  });

  return {
    balance,
    isBalanceLoaded,
    isFetchingBalance,
    refetchBalance,
  }
}
