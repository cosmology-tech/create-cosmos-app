import { useEvents } from '@/hooks/sell';
import { Token, Collection } from '@/config';
import { ipfs, tweet, shorten, download, display } from '@/utils';

export function useDetails(token: Token, collection: Collection) {
  const events = useEvents(
    collection.collectionAddr,
    token.tokenId,
    Boolean(collection.collectionAddr) && !token.lastSale
  );

  const lastSale = token.lastSale ? display(token.lastSale.price?.amount) : '';
  const mintEvent = events.value?.find((event) => event.node.action === 'mint_sender');
  const mintPrice = mintEvent ? display(mintEvent.node.data.mintPrice) : undefined;

  const image = token.imageUrl ? ipfs(token.imageUrl) : '';

  const creator = collection.createdBy?.name
    ? collection.createdBy.name.name + '.stars'
    : shorten(collection.createdBy?.addr);

  const traits = token.traits?.map((trait) => ({
    name: trait.name,
    value: trait.value,
    rarityPercent: +Number(trait.rarityPercent || 0).toFixed(2),
  })) || [];

  const onShare = () => open(tweet(token.tokenId!, token.name!, token.collectionAddr!), '_blank');
  const onDownload = () => download(ipfs(token.imageUrl!), `${token.name}.png`);

  return {
    image, traits, creator,
    lastSale, mintPrice,
    onShare, onDownload,
  }
}