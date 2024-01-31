import NextLink from 'next/link';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Divider, Stack, Button } from '@chakra-ui/react';
import { Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Stack direction="row" justifyContent="center" my="48px" spacing={4}>
        <NextLink href="mint-nfts">
          <Button
            colorScheme="purple"
            rightIcon={<ArrowForwardIcon />}
            variant="outline"
          >
            Mint NFTs
          </Button>
        </NextLink>
        <NextLink href="sell-nfts">
          <Button colorScheme="purple" rightIcon={<ArrowForwardIcon />}>
            Sell NFTs
          </Button>
        </NextLink>
      </Stack>
      <Divider mb={16} />
    </Layout>
  );
}
