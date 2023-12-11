import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { CHAIN_NAME, GET_COLLECTION_IMAGE } from '@/config';
import { useContracts, useGraphQL } from '@/hooks';
import { CollectionAddress, useCollectionAddress } from '.';

import {
  ConfigResponse as VendingMinterConfigResponse,
  MintCountResponse,
  MintableNumTokensResponse,
  MintPriceResponse,
} from 'stargaze-query/types/codegen/VendingMinter.types';
import { ConfigResponse as WhitelistConfigResponse } from 'stargaze-query/types/codegen/Whitelist.types';
import {
  ContractInfoResponse,
  CollectionInfoResponse,
} from 'stargaze-query/types/codegen/SG721Base.types';

export type Collection = {
  refetch: Function
  isLoading: boolean
  mint: {
    count?: MintCountResponse,
    price?: MintPriceResponse
  },
  info: CollectionInfoResponse,
  image: string
  minter: VendingMinterConfigResponse
  address: CollectionAddress
  contract: ContractInfoResponse
  mintable: MintableNumTokensResponse
  whitelist: WhitelistConfigResponse
}

export function useCollection() {
  const { address } = useChain(CHAIN_NAME);
  const { contracts, isReady, isFetching } = useContracts();

  const gql = useGraphQL();
  const collectionAddress = useCollectionAddress();
  const { minter, sg721 } = collectionAddress;

  const collectionImageQuery = useQuery({
    queryKey: ['collectionImageQuery'],
    queryFn: () =>
      gql.request(GET_COLLECTION_IMAGE, {
        collectionAddr: sg721 || '',
      }),
    select: (data) => data.collection?.image,
    enabled: Boolean(sg721),
    staleTime: Infinity
  });

  const vendingMinterQueryClient = minter && isReady
    ? contracts.vendingMinter.getQueryClient(minter)
    : null;

  const vendingMinterConfigQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'config', minter],
    queryFn: () => vendingMinterQueryClient?.config(),
    enabled: Boolean(vendingMinterQueryClient),
    staleTime: Infinity
  });

  const mintPriceQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'mintPrice', minter],
    queryFn: () => vendingMinterQueryClient?.mintPrice(),
    enabled: Boolean(vendingMinterQueryClient),
    staleTime: Infinity
  });

  const mintCountQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'mintCount', minter, address],
    queryFn: () =>
      vendingMinterQueryClient?.mintCount({
        address: address || '',
      }),
    enabled: Boolean(vendingMinterQueryClient) && Boolean(address),
    staleTime: Infinity
  });

  const mintableNumTokensQuery = useQuery({
    queryKey: ['vendingMinterQuery', 'mintableNumTokens', minter],
    queryFn: () => vendingMinterQueryClient?.mintableNumTokens(),
    enabled: Boolean(vendingMinterQueryClient),
    staleTime: Infinity,
  });


  // Whitelist Query

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
    enabled: Boolean(whitelistQueryClient),
    staleTime: Infinity
  });


  // SG721 Query
  const sg721BaseQueryClient =
    sg721 && isReady ? contracts.sG721Base.getQueryClient(sg721) : null;

  const collectionInfoQuery = useQuery({
    queryKey: ['sg721BaseQuery', 'collectionInfo', sg721],
    queryFn: () => sg721BaseQueryClient?.collectionInfo(),
    enabled: Boolean(sg721BaseQueryClient),
    staleTime: Infinity
  });

  const contractInfoQuery = useQuery({
    queryKey: ['sg721BaseQuery', 'contractInfo', sg721],
    queryFn: () => sg721BaseQueryClient?.contractInfo(),
    enabled: Boolean(sg721BaseQueryClient),
    staleTime: Infinity
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

  const isLoading = !minter || !sg721 || isFetching
    || Object.values(queries).some(({ isFetching }) => isFetching)
    || Object.values(queries).some(({ isRefetching }) => isRefetching)

  const refetch = () => {
    mintCountQuery.refetch();
    mintableNumTokensQuery.refetch();
  }

  return {
    isLoading, refetch,
    mint: {
      count: mintCountQuery.data,
      price: mintPriceQuery.data,
    },
    info: collectionInfoQuery.data,
    image: collectionImageQuery.data,
    minter: vendingMinterConfigQuery.data,
    address: collectionAddress,
    contract: contractInfoQuery.data,
    mintable: mintableNumTokensQuery.data,
    whitelist: whitelistConfigQuery.data
  };
}