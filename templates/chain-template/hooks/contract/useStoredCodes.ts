import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { cosmwasm } from 'interchain-query';
import {
  CodeInfoResponse,
  QueryCodesResponse,
} from 'interchain-query/cosmwasm/wasm/v1/query';

import { useChainStore } from '@/contexts';
import { useCwQueryClient } from './useCwQueryClient';

type CwQueryClient = Awaited<
  ReturnType<typeof cosmwasm.ClientFactory.createRPCQueryClient>
>;

const PAGES_TO_FETCH = 2;

export const useStoredCodes = () => {
  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);
  const { data: client } = useCwQueryClient();

  return useQuery({
    queryKey: ['storedCodes', selectedChain, address],
    queryFn: async () => {
      if (!client || !address) return [];
      const codes = await fetchCodes(client, PAGES_TO_FETCH);
      return codes.filter((code) => code.creator === address);
    },
    enabled: !!client && !!address,
  });
};

const fetchCodes = async (
  client: CwQueryClient,
  pageCount: number
): Promise<CodeInfoResponse[]> => {
  let codes: CodeInfoResponse[] = [];
  let nextKey: Uint8Array | undefined = new Uint8Array();
  let pagesFetched = 0;

  while (pagesFetched < pageCount) {
    const response: QueryCodesResponse = await client.cosmwasm.wasm.v1.codes({
      pagination: {
        key: nextKey,
        reverse: true,
        limit: 1000n,
        countTotal: false,
        offset: 0n,
      },
    });

    codes = [...codes, ...response.codeInfos];
    nextKey = response.pagination?.nextKey;
    pagesFetched++;

    if (!nextKey) break;
  }

  return codes;
};
