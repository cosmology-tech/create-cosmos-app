import { useRef } from 'react';
import { Box, Text, NftMint, Spinner, useColorModeValue } from '@interchain-ui/react';
import { useMint, Collection } from '@/hooks/mint';
import { ipfs } from '@/utils';
import { Hero } from './Hero';

export type MintProps = {
  collection: Collection | null;
};

export function Mint() {
  const mintBoxRef = useRef<HTMLDivElement>();

  const {
    count, balance, collection, address,
    tag, quantity, royalties, minted, 
    limited, starPrice, mintPrice,
    isMinting, onMint, onCountChange
  } = useMint();

  function focus() {
    mintBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const Loading = (
    <Box
      position="absolute" top="$0" left="$0" right="$0" bottom="0"
      justifyContent="right" borderRadius="$md" p="$8"
      backgroundColor={useColorModeValue('$blackAlpha200', '$blackAlpha500')}
      display={collection.isLoading || isMinting ? 'flex' : 'none'}
    >
      <Spinner size="$5xl" color={useColorModeValue('$blackAlpha800', '$whiteAlpha900') } />
    </Box>
  );

  return address ?
    <Box>
      <Hero collection={collection} onMint={focus} />
      <Box
        ref={mintBoxRef}
        mx="auto" maxWidth="56rem" px="$12" py="$14" boxShadow="$lg" borderRadius="$lg"
        position="relative" borderWidth="1px" borderStyle="$solid" borderColor="$gray100"
      >
        {Loading}
        <NftMint
          tag={tag}
          title="NFT Mint"
          available={balance.display}
          description={collection.info?.description || ''}
          imgSrc={ipfs(collection.image)}
          limited={limited}
          minted={minted}
          amount={count || undefined}
          name={collection.contract?.name || ''}
          onChange={onCountChange}
          onMint={onMint}
          priceDisplayAmount={mintPrice}
          quantity={quantity}
          royalties={royalties}
          pricePerToken={starPrice}
        />
      </Box>
    </Box> : 
    <Box display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="$lg">Please connect to your wallet.</Text>
    </Box>
}
