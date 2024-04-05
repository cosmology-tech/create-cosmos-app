import NoSSR from 'react-no-ssr';
import { Divider } from '@interchain-ui/react';
import { Layout, Wallet, Main } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Wallet />
      {/* TODO fix type error */}
      {/* Type error: This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided. */}
      {/* @ts-ignore */}
      <NoSSR>
        <Divider mt="$10" mb="$16" />
        <Main />
        <Divider mt="$18" mb="$20" />
      </NoSSR>
    </Layout>
  );
}