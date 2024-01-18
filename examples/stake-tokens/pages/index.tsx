import NextLink from 'next/link';
import { Stack, Button } from '@interchain-ui/react';
import { Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Stack
        direction="horizontal"
        space="$10"
        attributes={{ justifyContent: 'center', my: '$14' }}
      >
        <NextLink href="/single-chain" style={{ textDecoration: 'none' }}>
          <Button rightIcon="arrowRightLine" iconSize="$xl">
            Single-Chain
          </Button>
        </NextLink>
        <NextLink href="/multi-chain" style={{ textDecoration: 'none' }}>
          <Button rightIcon="arrowRightLine" iconSize="$xl">
            Multi-Chain
          </Button>
        </NextLink>
      </Stack>
    </Layout>
  );
}
