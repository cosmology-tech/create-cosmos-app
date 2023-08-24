import { useMemo } from 'react';
import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';

import { Minter, SG721, Whitelist } from '@/components';
import { collectionImageQueryDoc, defaultChainName } from '@/config';
import { useCollectionAddress, useContracts, useGraphqlRequest } from '@/hooks';

export const useCollection = () => {
  const { address } = useChain(defaultChainName);
  const { request } = useGraphqlRequest();
  const { collectionAddress } = useCollectionAddress();
  const { contracts, isReady, isFetching } = useContracts();

  const { minterAddr, sg721Addr } = collectionAddress;

  const collectionImageQuery = useQuery({
    queryKey: ['collectionImageQuery'],
    queryFn: () =>
      request(collectionImageQueryDoc, {
        collectionAddr: sg721Addr || '',
      }),
    select: (data) => data.collection?.image,
    enabled: !!sg721Addr,
    staleTime: Infinity,
  });

  // *Minter Query*

  const vendingMinterQueryClient =
    minterAddr && isReady
      ? contracts.vendingMinter.getQueryClient(minterAddr)
      : null;

  const vendingMinterConfigQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'config', minterAddr],
    queryFn: () => vendingMinterQueryClient?.config(),
    enabled: !!vendingMinterQueryClient,
    staleTime: Infinity,
  });

  const mintPriceQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'mintPrice', minterAddr],
    queryFn: () => vendingMinterQueryClient?.mintPrice(),
    enabled: !!vendingMinterQueryClient,
    select: (data) => data?.current_price,
    staleTime: Infinity,
  });

  const mintCountQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'mintCount', minterAddr, address],
    queryFn: () =>
      vendingMinterQueryClient?.mintCount({
        address: address || '',
      }),
    enabled: !!vendingMinterQueryClient && !!address,
    select: (data) => data?.count,
    staleTime: Infinity,
  });

  const mintableNumTokensQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'mintableNumTokens', minterAddr],
    queryFn: () => vendingMinterQueryClient?.mintableNumTokens(),
    enabled: !!vendingMinterQueryClient,
    select: (data) => data?.count,
    staleTime: Infinity,
  });

  // *Whitelist Query*

  const whitelistAddr = vendingMinterConfigQuery.data?.whitelist
    ? vendingMinterConfigQuery.data.whitelist
    : null;

  const whitelistQueryClient =
    whitelistAddr && isReady
      ? contracts.whitelist.getQueryClient(whitelistAddr)
      : null;

  const whitelistConfigQuery = useQuery({
    queryKey: ['whitelistQuery', 'config', whitelistAddr],
    queryFn: () => whitelistQueryClient?.config(),
    enabled: !!whitelistQueryClient,
    staleTime: Infinity,
  });

  // *SG721 Query*

  const sg721BaseQueryClient =
    sg721Addr && isReady ? contracts.sG721Base.getQueryClient(sg721Addr) : null;

  const collectionInfoQuery = useQuery({
    queryKey: ['sg721BaseQuery', 'collectionInfo', sg721Addr],
    queryFn: () => sg721BaseQueryClient?.collectionInfo(),
    enabled: !!sg721BaseQueryClient,
    staleTime: Infinity,
  });

  const contractInfoQuery = useQuery({
    queryKey: ['sg721BaseQuery', 'contractInfo', sg721Addr],
    queryFn: () => sg721BaseQueryClient?.contractInfo(),
    enabled: !!sg721BaseQueryClient,
    staleTime: Infinity,
  });

  const queries = {
    mintPrice: mintPriceQuery,
    mintCount: mintCountQuery,
    collectionImage: collectionImageQuery,
    vendingMinterConfig: vendingMinterConfigQuery,
    mintableNumTokens: mintableNumTokensQuery,
    whitelistConfig: whitelistConfigQuery,
    collectionInfo: collectionInfoQuery,
    contractInfo: contractInfoQuery,
  };

  const queriesToRefetch = [queries.mintCount, queries.mintableNumTokens];

  const queriesArr = Object.values(queries);
  const isInitialFetching = queriesArr.some(({ isFetching }) => isFetching);
  const isRefetching = queriesArr.some(({ isRefetching }) => isRefetching);
  const isLoading =
    !minterAddr ||
    !sg721Addr ||
    isFetching ||
    isInitialFetching ||
    isRefetching;

  type AllQueries = typeof queries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const collection = useMemo(() => {
    if (isLoading) return;

    const res = Object.fromEntries(
      Object.entries(queries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const minter: Minter = {
      ...res.vendingMinterConfig,
      user_minted: res.mintCount,
      current_price: res.mintPrice,
      remaining_tokens: res.mintableNumTokens,
    };

    const whitelist: Whitelist = res.whitelistConfig;

    const sg721: SG721 = {
      ...res.contractInfo,
      ...res.collectionInfo,
    };

    return {
      sg721,
      minter,
      whitelist,
      image: res.collectionImage,
      address: collectionAddress,
    };
  }, [isLoading]);

  const refetchCollection = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  return { collection, isFetchingCollection: isLoading, refetchCollection };
};
