import { useState, useEffect } from 'react';
import { useChain } from '@cosmos-kit/react';
import { chainName } from '../config';

import { useContracts } from '../codegen/contracts-context';

export function useHackCw20Balance(contractAddress: string): {
  balance: string | undefined;
} {
  const {
    address,
    status
  } = useChain(chainName);

  const { hackCw20 } = useContracts()

  useEffect(() => {
    if (status === 'Connected') {

    }
  }, [address, contractAddress, status]);
  const [cw20Bal, setCw20Bal] = useState<string | null>(null);
  useEffect(() => {
    if (hackCw20 && address) {
      // hackCw20.balance({ address }).then((b) => setCw20Bal(b.balance));
      hackCw20.getQueryClient(contractAddress)
    }
  }, [hackCw20, address]);

  return { balance: cw20Bal ?? undefined };
}
