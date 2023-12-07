import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { contracts as _contracts } from 'stargaze-query';
import { defaultChainName } from '@/config';

export const useContracts = () => {
  const { address, getCosmWasmClient, getSigningCosmWasmClient } =
    useChain(defaultChainName);

  const cosmWasmClientQuery = useQuery({
    queryKey: ['cosmWasmClientQuery'],
    queryFn: getCosmWasmClient,
    staleTime: Infinity,
  });

  const signingCosmWasmClientQuery = useQuery({
    queryKey: ['signingCosmWasmClientQuery', address],
    queryFn: getSigningCosmWasmClient,
    enabled: !!address,
    staleTime: Infinity,
  });

  const contracts = _contracts.contractContextProviders.getProviders(
    address,
    cosmWasmClientQuery.data,
    signingCosmWasmClientQuery.data
  );

  const isReady =
    !!address &&
    !!cosmWasmClientQuery.data &&
    !!signingCosmWasmClientQuery.data;

  const isFetching =
    cosmWasmClientQuery.isFetching || signingCosmWasmClientQuery.isFetching;

  return { contracts, isReady, isFetching };
};
