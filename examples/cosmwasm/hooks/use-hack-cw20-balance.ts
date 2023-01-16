import { useState, useEffect } from 'react';
import { useChain } from '@cosmos-kit/react';

// import cosmwasm client generated with cosmwasm-ts-codegen
import { HackCw20QueryClient } from '../codegen/HackCw20.client';
import { chainName } from '../config';

export function useHackCw20Balance(contractAddress: string): {
  balance: string | undefined;
} {
  const { getSigningCosmWasmClient, address, status } = useChain(chainName);

  const [cw20Client, setCw20Client] = useState<HackCw20QueryClient | null>(
    null
  );
  useEffect(() => {
    if (status === 'Connected') {
      getSigningCosmWasmClient().then((cosmwasmClient) => {
        if (!cosmwasmClient || !address) {
          console.error('cosmwasmClient undefined or address undefined.');
          return;
        }

        setCw20Client(new HackCw20QueryClient(cosmwasmClient, contractAddress));
      });
    }
  }, [address, contractAddress, getSigningCosmWasmClient, status]);
  const [cw20Bal, setCw20Bal] = useState<string | null>(null);
  useEffect(() => {
    if (cw20Client && address) {
      cw20Client.balance({ address }).then((b) => setCw20Bal(b.balance));
    }
  }, [cw20Client, address]);

  return { balance: cw20Bal ?? undefined };
}
