import { defaultRpcEndpoint as rpcEndpoint } from '@/config';
import { defaultContext } from '@tanstack/react-query'
import BigNumber from "bignumber.js";
import { defaultAssetList } from "@/config";
import { useGetBalance } from 'interchain-react/cosmos/bank/v1beta1/query.rpc.func'

export default function useBalance({
  address,
}: {
  address: string,
}) {

  const coin = defaultAssetList?.assets[0];

  const denom = coin!.base!

  const COIN_DISPLAY_EXPONENT = coin!.denomUnits.find(
    (unit) => unit.denom === coin!.display
  )?.exponent as number;

  const {
    data: balance,
    isSuccess: isBalanceLoaded,
    isLoading: isFetchingBalance,
    refetch: refetchBalance,
  } = useGetBalance({
    request: {
      address,
      denom,
    },
    options: {
      context: defaultContext,
      enabled: !!address,
      select: ({ balance }) =>
        new BigNumber(balance?.amount ?? 0).multipliedBy(
          10 ** -COIN_DISPLAY_EXPONENT
        ),
    },
    // with the new version, simply pass the endpoint to the clientResolver
    clientResolver: rpcEndpoint,
  });

  return {
    balance,
    isBalanceLoaded,
    isFetchingBalance,
    refetchBalance,
  }
}