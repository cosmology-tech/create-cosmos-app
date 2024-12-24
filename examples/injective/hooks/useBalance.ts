import { defaultRpcEndpoint as rpcEndpoint } from '@/config';
import BigNumber from "bignumber.js";
import { defaultAssetList } from "@/config";

import { createGetBalance } from 'interchainjs/cosmos/bank/v1beta1/query.rpc.func'
import { useEffect, useState, useCallback } from 'react';

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

  const [balance, setBalance] = useState<BigNumber | null>(null);
  const [isFetchingBalance, setIsFetchingBalance] = useState<boolean>(false);

  const fetchBalance = useCallback(() => {
    setIsFetchingBalance(true);
    const getBalance = createGetBalance(rpcEndpoint);
    getBalance({
      address,
      denom,
    }).then(({ balance }) => {
      setBalance(new BigNumber(balance?.amount ?? 0).multipliedBy(10 ** -COIN_DISPLAY_EXPONENT))
    }).finally(() => {
      setIsFetchingBalance(false);
    });
  }, [address, denom, COIN_DISPLAY_EXPONENT]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return {
    balance,
    isFetchingBalance,
    refetchBalance: fetchBalance
  }
}