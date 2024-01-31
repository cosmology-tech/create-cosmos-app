import BigNumber from 'bignumber.js';
import { useState, useEffect } from 'react';
import { useQueries, useQuery } from '@tanstack/react-query';
import { MintPriceResponse, MintableNumTokensResponse } from 'stargaze-query/types/codegen/VendingMinter.types';
import { useContracts, useGraphQL } from '@/hooks';
import { CollectionSortBy } from '@/gql/graphql';
import { MINT_COLLECTIONS, STARGAZE_TOKEN_EXPONENT } from '@/config';

export type CollectionAddress = {
  minter: string | null;
  sg721: string | null;
};

const GROUP_SIZE = 10
const MAX_MINT_PRICE = 80;
const COLLECTION_ADDR_NULL = { minter: null, sg721: null } as CollectionAddress;

export function useCollectionAddress() {
  const [group, setGroup] = useState(1);
  const [address, setAddress] = useState(COLLECTION_ADDR_NULL)

  const gql = useGraphQL();
  const { contracts, isReady } = useContracts();

  const mintCollectionsQuery = useQuery({
    queryKey: ['mintCollectionsQuery'],
    queryFn: () =>
      gql.request(MINT_COLLECTIONS, {
        limit: 100,
        sortBy: CollectionSortBy.Volume_24HDesc
      }),
    staleTime: Infinity
  });

  const mintCollectionsSortedByFloorPrice =
    mintCollectionsQuery.data?.collections.collections
      .sort((a, b) => (a?.floorPrice || 0) - (b?.floorPrice || 0)) || null;

  const sg721AddrGroup = mintCollectionsSortedByFloorPrice
    ? mintCollectionsSortedByFloorPrice
      .slice((group - 1) * GROUP_SIZE, group * GROUP_SIZE)
      .map(({ collectionAddr }) => collectionAddr)
    : null

  const sg721BaseQueryClients = sg721AddrGroup && isReady
    ? sg721AddrGroup.map((addr) => contracts.sG721Base.getQueryClient(addr))
    : [];

  const minterQueries = useQueries({
    queries: sg721BaseQueryClients.map((client, i) => ({
      queryKey: ['sg721BaseQuery', 'minter', sg721AddrGroup?.[i]],
      queryFn: () => client?.minter(),
      enabled: Boolean(client),
      staleTime: Infinity
    }))
  });

  const minterAddrGroup = minterQueries.every(q => q.data)
    ? minterQueries.map(q => q.data!.minter)
    : null

  const vendingMinterQueryClients = minterAddrGroup && isReady
    ? minterAddrGroup.map((addr) => contracts.vendingMinter.getQueryClient(addr))
    : [];

  const mintPriceQueries = useQueries({
    queries: vendingMinterQueryClients.map((client, i) => ({
      queryKey: ['vendingMinterQuery', 'mintPrice', minterAddrGroup?.[i]],
      queryFn: () => client?.mintPrice(),
      enabled: Boolean(client),
      select: (data: MintPriceResponse) => data?.current_price,
      staleTime: Infinity,
      retry: false
    }))
  });

  const mintableNumTokensQueries = useQueries({
    queries: vendingMinterQueryClients.map((client, i) => ({
      queryKey: [
        'vendingMinterQuery',
        'mintableNumTokens',
        minterAddrGroup?.[i],
      ],
      queryFn: () => client?.mintableNumTokens(),
      enabled: Boolean(client),
      select: (data: MintableNumTokensResponse) => data?.count,
      staleTime: Infinity,
      retry: false
    })),
  });

  useEffect(() => {
    const noQueries = mintPriceQueries.length === 0 && mintableNumTokensQueries.length === 0;
    const isLoading =
      mintPriceQueries.some(({ isLoading }) => isLoading) ||
      mintableNumTokensQueries.some(({ isLoading }) => isLoading);

    const hasAddress = Object.values(address).every((addr) => addr);

    if (noQueries || isLoading || hasAddress) return;

    const index = mintPriceQueries.findIndex(({ data }, i) => {
      const isLowPrice = !!data?.amount &&
        new BigNumber(data.amount).shiftedBy(-STARGAZE_TOKEN_EXPONENT).lte(MAX_MINT_PRICE);
      const hasRemaining = Boolean(mintableNumTokensQueries[i].data);
      return isLowPrice && hasRemaining;
    });

    if (index === -1) {
      setGroup(group => group + 1);
      return;
    }

    setAddress({
      sg721: sg721AddrGroup?.[index]!,
      minter: minterAddrGroup?.[index]!
    });

  }, [mintPriceQueries, mintableNumTokensQueries])

  return address;
}
