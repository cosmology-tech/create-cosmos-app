import { Box, Text, Icon, Stack, Button, NftDetail, NftTraitListItemProps, NftDetailInfoProps } from "@interchain-ui/react";
import { Token, Collection } from "@/config";

export type DetailProps = {
  info?: NftDetailInfoProps
  token: Token;
  price: number;
  collection: Collection
  traits: NftTraitListItemProps[];
  image: string;
  owner: string;
  creator: string;
  mintPrice?: string;
  onBurn?: () => void;
  onShare?: () => void;
  onDownload?: () => void;
  onTransfer?: () => void;
  onListForSale?: () => void;
  onUpdatePrice?: () => void;
  onRemoveListing?: () => void;
}

export function Detail({
  info, token, price, collection,
  image, owner, creator, traits,
  mintPrice,
  onBurn = () => {},
  onShare = () => {},
  onDownload = () => {},
  onTransfer  = () => {},
  onListForSale = () => {},
  onUpdatePrice = () => {},
  onRemoveListing = () => {},
}: DetailProps) {
  return token.forSale ?
    <NftDetail
      type="custom"
      name={token.name!}
      traits={traits}
      ownerName={owner}
      detailInfo={info}
      collectionName={collection.name}
      collectionDesc={collection.description}
      creatorName={creator}
      imgSrc={image}
      onShare={onShare}
      onDownload={onDownload}
      rarityOrder={token.rarityOrder! || 0}
      tokensCount={collection.tokensCount || 0}
      attributes={{ py: '$6' }}
    >
      <Stack direction="vertical" space="$8">
        <Box mb="$2" display="flex" alignItems="center">
          <Text fontSize="$lg" color="$textSecondary">Price: </Text>
          <Text fontSize="$lg" fontWeight="500" attributes={{ mx: "$4" }}>
            {price} STARS
          </Text>
          <Icon
            size="$xl"
            name="stargazePixel"
            attributes={{ borderRadius: "$full", backgroundColor: "$black" }}
          />
        </Box>
        <Stack space="$6">
          <Button
            fluidWidth size="sm" intent="tertiary" leftIcon="priceTagLine"
            domAttributes={{ style: { height: '36px' }}}
            onClick={onUpdatePrice}
          >
            Update Price
          </Button>
          <Button
            fluidWidth size="sm" intent="secondary" variant="outlined" leftIcon="close"
            domAttributes={{ style: { height: '36px' }}}
            onClick={onRemoveListing}
          >
            Remove Listing
          </Button>
        </Stack>
        <Stack space="$6">
          <Button fluidWidth size="sm" intent="text" leftIcon="sendLine" onClick={onTransfer}>
            Transfer
          </Button>
          <Button fluidWidth size="sm" intent="text" leftIcon="fireLine" onClick={onBurn}>
            Burn
          </Button>
        </Stack>
      </Stack>
    </NftDetail> :
    <NftDetail
      type="listForSale"
      name={token.name!}
      traits={traits}
      ownerName={owner}
      collectionName={collection.name}
      collectionDesc={collection.description}
      creatorName={creator}
      imgSrc={image}
      mintPrice={mintPrice}
      onBurn={onBurn}
      onDownload={onDownload}
      onListForSale={onListForSale}
      onShare={onShare}
      onTransfer={onTransfer}
      rarityOrder={token.rarityOrder! || 0}
      tokensCount={collection.tokensCount || 0}
      attributes={{ py: '$6' }}
    />
}