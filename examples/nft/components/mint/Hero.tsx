import Image from 'next/image';
import { ipfs, ellipsis } from '@/utils';
import { Collection, useTokens } from '@/hooks/mint';
import { Box, Text, Button } from '@interchain-ui/react';

export type HeroProps = {
  collection: Partial<Collection> | null,
  onMint?: () => void
}

export function Hero({ collection, onMint = () => {} }: HeroProps) {
  const { tokens } = useTokens();
  const images = tokens.length > 0 ? [
    {
      url: tokens[0].imageUrl!,
      css: { top: '40px' },
    },
    {
      url: tokens[1].imageUrl!,
      css: { left: '160px', top: '-55px', zIndex: '0.4' },
    },
    {
      url: tokens[2].imageUrl!,
      css: { right: '0', top: '80px', zIndex: '0.3' },
    },
    {
      url: tokens[3].imageUrl!,
      css: { bottom: '-55px', left: '130px', zIndex: '0.2' },
    }
  ] : []

  return (
    collection?.address ? <Box width="$full" height="460px" mb="100px" py="85px" px="24px" gap="4rem" display="flex">
      <Box flex="1">
        <Text fontSize="3rem" fontWeight="600" lineHeight="shorter" attributes={{ display: 'block' }}>
          {collection.contract?.name}
        </Text>
        <Text
          fontSize="1rem" fontWeight="400" lineHeight="shorter"
          color="$textSecondary" attributes={{ mt: '$10', mb: '$14' }}>
          {ellipsis(collection.info?.description)}
        </Text>
        <Button
          size="lg" intent="tertiary" onClick={onMint}
          domAttributes={{ style: { width: '260px' } }}>
          Mint Now
        </Button>
      </Box>
      <Box position="relative" flex="1">
        {
          images.map(({ url, css }) => <Image
            alt={""}
            key={url}
            src={ipfs(url)}
            width="180"
            height="180"
            style={{
              ...css,
              borderRadius: '6px',
              position: 'absolute'
            }}
          />)
        }
      </Box>
    </Box> : null
  )
}