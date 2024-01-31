import { contracts } from 'stargaze-query';
import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { CHAIN_NAME } from '@/config';

export function useContracts() {
  const { address, getCosmWasmClient, getSigningCosmWasmClient } = useChain(CHAIN_NAME);

  const cosmWasmClientQuery = useQuery({
    queryKey: ['cosmWasmClientQuery'],
    queryFn: getCosmWasmClient,
    staleTime: Infinity,
  });

  const signingCosmWasmClientQuery = useQuery({
    queryKey: ['signingCosmWasmClientQuery', address],
    queryFn: getSigningCosmWasmClient,
    enabled: Boolean(address),
    staleTime: Infinity,
  });

  const isReady =
    Boolean(address) &&
    Boolean(cosmWasmClientQuery.data) &&
    Boolean(signingCosmWasmClientQuery.data);

  const isFetching =
    cosmWasmClientQuery.isFetching || signingCosmWasmClientQuery.isFetching;

  return {
    isReady,
    isFetching,
    contracts: contracts.contractContextProviders.getProviders(
      address,
      // @ts-ignore
      cosmWasmClientQuery.data,
      signingCosmWasmClientQuery.data
    )
  }
}