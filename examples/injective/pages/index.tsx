import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { Divider } from '@interchain-ui/react';
import { Layout, Wallet, Main } from '@/components';

export default function Home() {
  return (
    <Layout>
      <ReactNoSSR>
        <Wallet />
        <Divider mt="$10" mb="$16" />
        <Main />
        <Divider mt="$18" mb="$20" />
      </ReactNoSSR>
    </Layout>
  );
}
