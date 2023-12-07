import { useEffect, useState } from 'react';
import { useQueries, useQuery } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import {
  MintPriceResponse,
  MintableNumTokensResponse,
} from 'stargaze-query/types/codegen/VendingMinter.types';

import { CollectionSortBy } from '@/gql/graphql';
import { useContracts, useGraphqlRequest } from '@/hooks';
import { exponent, mintCollectionsQueryDoc } from '@/config';

export type CollectionAddress = {
  minterAddr: string | null;
  sg721Addr: string | null;
};

const QUERIES_LIMIT = 10;
const MAX_MINT_PRICE = 80;

export const useCollectionAddress = () => {
  const [group, setGroup] = useState(1);
  const [address, setAddress] = useState<CollectionAddress>({
    minterAddr: null,
    sg721Addr: null,
  });

  const { contracts, isReady } = useContracts();
  const { request } = useGraphqlRequest();

  const leftIndex = (group - 1) * QUERIES_LIMIT;
  const rightIndex = group * QUERIES_LIMIT;

  const mintCollectionsQuery = useQuery({
    queryKey: ['mintCollectionsQuery'],
    queryFn: () =>
      request(mintCollectionsQueryDoc, {
        limit: 100,
        sortBy: CollectionSortBy.Volume_24HDesc,
      }),
    select: (data) =>
      data.collections.collections.sort(
        (a, b) => (a?.floorPrice || 0) - (b?.floorPrice || 0)
      ),
    staleTime: Infinity,
  });

  const sg721AddrGroup = mintCollectionsQuery.data
    ? mintCollectionsQuery.data
      .slice(leftIndex, rightIndex)
      .map(({ collectionAddr }) => collectionAddr)
    : null;

  const sg721BaseQueryClients =
    sg721AddrGroup && isReady
      ? sg721AddrGroup.map((addr) => contracts.sG721Base.getQueryClient(addr))
      : null;

  const minterQueries = useQueries({
    queries: (sg721BaseQueryClients || []).map((client, i) => ({
      queryKey: ['sg721BaseQuery', 'minter', sg721AddrGroup?.[i]],
      queryFn: () => client?.minter(),
      enabled: !!client,
      staleTime: Infinity,
    })),
  });

  const minterAddrGroup = minterQueries.every((q) => q.data)
    ? minterQueries.map((q) => q.data!.minter)
    : null;

  const vendingMinterQueryClients =
    minterAddrGroup && isReady
      ? minterAddrGroup.map((addr) =>
        contracts.vendingMinter.getQueryClient(addr)
      )
      : null;

  const mintPriceQueries = useQueries({
    queries: (vendingMinterQueryClients || []).map((client, i) => ({
      queryKey: ['vendingMinterQuery', 'mintPrice', minterAddrGroup?.[i]],
      queryFn: () => client?.mintPrice(),
      enabled: !!client,
      select: (data: MintPriceResponse) => data?.current_price,
      staleTime: Infinity,
      retry: false,
    })),
  });

  const mintableNumTokensQueries = useQueries({
    queries: (vendingMinterQueryClients || []).map((client, i) => ({
      queryKey: [
        'vendingMinterQuery',
        'mintableNumTokens',
        minterAddrGroup?.[i],
      ],
      queryFn: () => client?.mintableNumTokens(),
      enabled: !!client,
      select: (data: MintableNumTokensResponse) => data?.count,
      staleTime: Infinity,
      retry: false,
    })),
  });

  useEffect(() => {
    const hasQueries =
      mintPriceQueries.length > 0 && mintableNumTokensQueries.length > 0;

    const isLoading =
      mintPriceQueries.some(({ isLoading }) => isLoading) ||
      mintableNumTokensQueries.some(({ isLoading }) => isLoading);

    const hasAddress = Object.values(address).every((addr) => addr);

    if (!hasQueries || isLoading || hasAddress) return;

    const index = mintPriceQueries.findIndex(({ data }, i) => {
      const isLowPrice =
        !!data?.amount &&
        new BigNumber(data.amount).shiftedBy(-exponent).lte(MAX_MINT_PRICE);
      const hasRemainingTokens = !!mintableNumTokensQueries[i].data;
      return isLowPrice && hasRemainingTokens;
    });

    if (index === -1) {
      setGroup((prev) => prev + 1);
      return;
    }

    setAddress({
      sg721Addr: sg721AddrGroup?.[index]!,
      minterAddr: minterAddrGroup?.[index]!,
    });
  }, [mintPriceQueries, mintableNumTokensQueries]);

  return { collectionAddress: address };
};
