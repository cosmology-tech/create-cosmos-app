import NextLink from 'next/link';
import { Stack, Button } from '@interchain-ui/react';
import { Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Stack
        direction="horizontal"
        space="$8"
        attributes={{
          justifyContent: 'center',
          paddingTop: '$15',
          paddingBottom: '$15',
        }}
      >
        <NextLink href="single-chain">
          <Button
            size="md"
            intent="secondary"
            variant="outlined"
            rightIcon="arrowRightLine"
          >
            Single-Chain
          </Button>
        </NextLink>

        <NextLink href="multi-chain">
          <Button size="md" intent="primary" rightIcon="arrowRightLine">
            Multi-Chain
          </Button>
        </NextLink>
      </Stack>
    </Layout>
  );
}
