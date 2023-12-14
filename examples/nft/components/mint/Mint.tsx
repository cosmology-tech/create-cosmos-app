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
    count, value, amount, balance, collection, address,
    tag, quantity, royalties, minted, 
    limited, starPrice, mintPrice, isInsufficientBalance,
    isMinting, onMint, onCountChange
  } = useMint();

  function focus() {
    mintBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const mintButtonLabel =
    isMinting ? 'Minting...' :
    isInsufficientBalance ? 'Insufficient Balance' : 'Mint';

  const Loading = (
    <Box
      position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)"
      justifyContent="right" borderRadius="$md" p="$8"
      display={collection.isLoading || isMinting ? 'flex' : 'none'}
    >
      <Spinner size="$5xl" color={useColorModeValue('$blackAlpha800', '$whiteAlpha900') } />
    </Box>
  );

  return address ?
    <Box>
      <Hero collection={collection} onMint={focus} />
      <Box
        ref={mintBoxRef} minHeight="600px" maxWidth="56rem"
        mx="auto" px="$12" py="$14" boxShadow="$lg" borderRadius="$lg"
        position="relative" borderWidth="1px" borderStyle="$solid" borderColor="$divider"
      >
        {Loading}
        {collection.isLoading ?
          <Text fontSize="$xl" fontWeight="$semibold">NFT Mint</Text> :
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
            onMint={onMint}
            onInput={(e: any) => onCountChange(e.target.value)}
            notionalAmount={value}
            priceDisplayAmount={mintPrice}
            quantity={quantity}
            royalties={royalties}
            tokenName="STARS"
            tokenAmount={amount}
            pricePerToken={starPrice}
            isMintLoading={isMinting}
            isMintButtonDisabled={!count || isMinting || isInsufficientBalance}
            mintButtonDisabledLabel={mintButtonLabel}
          />}
      </Box>
    </Box> : 
    <Box display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="$lg">Please connect to your wallet.</Text>
    </Box>
}
