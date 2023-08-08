import NextLink from 'next/link';
import { Stack, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Stack direction="row" justifyContent="center" my="48px" spacing={4}>
        <NextLink href="single-chain">
          <Button
            colorScheme="purple"
            rightIcon={<ArrowForwardIcon />}
            variant="outline"
          >
            Single-Chain
          </Button>
        </NextLink>
        <NextLink href="multi-chain">
          <Button colorScheme="purple" rightIcon={<ArrowForwardIcon />}>
            Multi-Chain
          </Button>
        </NextLink>
      </Stack>
    </Layout>
  );
}
