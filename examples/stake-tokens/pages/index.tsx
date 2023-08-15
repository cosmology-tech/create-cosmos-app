import NextLink from 'next/link';
import { Stack, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Stack direction="row" justifyContent="center" my={12} spacing={4}>
        <NextLink href="single-chain">
          <Button colorScheme="blue" rightIcon={<ArrowForwardIcon />}>
            Single-Chain
          </Button>
        </NextLink>
        <NextLink href="multi-chain">
          <Button colorScheme="blue" rightIcon={<ArrowForwardIcon />}>
            Multi-Chain
          </Button>
        </NextLink>
      </Stack>
    </Layout>
  );
}
