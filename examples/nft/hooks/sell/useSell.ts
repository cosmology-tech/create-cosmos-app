import { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { NftProfileCardProps } from '@interchain-ui/react';
import { CHAIN_NAME, Token, Collection } from '@/config';
import { useModal } from '@/hooks';
import { useProfile } from "@/hooks/sell";
import { display, getStargazeProfileLink, ipfs, shorten } from '@/utils';

const STARGAZE_ICON_URL = 'https://pbs.twimg.com/profile_images/1507391623914737669/U3fR7nxh_400x400.jpg'

export function useSell() {
  const { address } = useChain(CHAIN_NAME);
  const { modal, open: openModal, toggle: toggleModal } = useModal('NFT Details');
  const [token, setToken] = useState({} as Token);
  const [collection, setCollection] = useState({} as Collection);
  const { names, tokens, collections, queries, isLoading } = useProfile();

  useEffect(() => {
    const target = tokens?.tokens.find(t => t.id === token.id)
    if (target) setToken(target);
  }, [tokens])

  const link = getStargazeProfileLink(address);
  const name = names && names.length > 0
    ? names[0].name + '.stars'
    : shorten(address);

  const isVerified = Boolean(names?.[0]?.records?.some((record) => record.verified));
  const floorPrice = collection?.floorPrice?.toString() || '';
  const highestBid = display(token?.highestCollectionBid?.toString()) || '';

  const meta = [
    {
      label: 'Collections',
      value: String(collections?.total || 0),
    },
    {
      label: 'NFTs',
      value: String(tokens?.total || 0)
    },
    {
      label: 'Listed on marketplace',
      value: String(tokens?.tokens.filter((token) => token.forSale).length || 0),
    }
  ];

  const openStargazeProfile = () => open(link, '_blank');

  const onClickToken = (i: number) => {
    setToken(tokens?.tokens[i]!);
    setCollection(collections?.collections.find((collection) => collection.collectionAddr === tokens?.tokens[i]?.collectionAddr)!);
    openModal();
  }

  const list: NftProfileCardProps[] = tokens?.tokens.map((token, index) => {
    const price = token.price ? display(token.price.amount) : 0;
    const offer = display(token.highestCollectionBid!);
    const prices = [];
    if (Number(offer)) {
      prices.push({ label: 'Highest offer', value: offer, tokenName: 'STARS', iconSrc: STARGAZE_ICON_URL })
    }
    if (Number(price)) {
      prices.push({ label: 'List Price', value: price, tokenName: 'STARS', iconSrc: STARGAZE_ICON_URL })
    }
    return {
      name: token.name!,
      imgSrc: ipfs(token.imageUrl!),
      priceItems: prices as NftProfileCardProps['priceItems'],
      onClick: () => onClickToken(index)
    }
  }) || [];

  return {
    address, name, meta, list, queries,
    link, token, tokens, collection,
    isLoading, isVerified, floorPrice, highestBid,
    modal, openModal, toggleModal,
    openStargazeProfile
  }
}