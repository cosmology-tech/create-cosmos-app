import NextLink from 'next/link';
import { Stack, Button, Divider } from '@interchain-ui/react';
import { Layout } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Stack direction="horizontal" space="$8" attributes={{ my: '3rem', justifyContent: 'center' }}>
        <NextLink href="mint">
          <Button
            intent="secondary"
            variant="outlined"
            rightIcon="arrowRightLine"
          >
            Mint NFTs
          </Button>
        </NextLink>
        <NextLink href="sell">
          <Button rightIcon="arrowRightLine">
            Sell NFTs
          </Button>
        </NextLink>
      </Stack>
      <Divider mb="$16" />
    </Layout>
  );
}